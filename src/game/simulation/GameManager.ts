import { Ability, passiveLabel } from "./Ability";
import { AIController } from "./AIController";
import { Board } from "./Board";
import { SpecialEffectManager } from "./SpecialEffectManager";
import { ABILITY_DEFINITIONS } from "../content/abilityDefinitions";
import { HERO_DEFINITIONS, HERO_LIST } from "../content/heroDefinitions";
import { PIECE_DEFINITIONS } from "../content/pieceDefinitions";
import {
  COMMON_TOWER_NAMES,
  DEMON_CASTLE_BOSSES,
  DEMON_CASTLE_COMMON_NAMES,
  DEMON_CASTLE_MAX_FLOOR,
  TOWER_BOSSES,
  TOWER_MAX_FLOOR,
  TOWER_REST_SPOTS,
  TOWER_REWARDS,
  getDemonCastleDifficultyTier,
  getDemonCastleEnemyBaseHp,
  getTowerDifficultyTier,
  getTowerEnemyBaseHp,
  isDemonCastleBossFloor,
  isTowerBossFloor,
} from "../content/towerDefinitions";
import type {
  AbilityDefinition,
  AbilityRarity,
  BaseState,
  Coord,
  EnemySkillBannerState,
  GameMode,
  HeroDefinition,
  HeroId,
  HyperMechaUpgrade,
  LogEntry,
  MechaUpgradeOffer,
  MoveOption,
  PassiveId,
  Phase,
  PieceType,
  PlayerId,
  SkillBannerState,
  TowerRestSpot,
  TowerRunState,
  TerrainType,
  VisualEffectEvent,
} from "../types";
import { Piece } from "./Piece";

type ChangeListener = () => void;
type LogTone = LogEntry["tone"] | PlayerId;
type PendingMechaUpgrade = { pieceId: string; upgrade: HyperMechaUpgrade };
type ProcessExecutionTarget = PlayerId;
type InitiativeState = { playerRoll: number; aiRoll: number; firstPlayer: PlayerId };
type MetaProgress = {
  version: 1;
  unlockedHeroIds: HeroId[];
  towerConquered: boolean;
  demonCastleUnlocked: boolean;
  savedAt: string;
};

const opponentOf = (owner: PlayerId): PlayerId => (owner === "player" ? "ai" : "player");
const chebyshevDistance = (a: Coord, b: Coord): number => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
const adjacentDistance = (a: Coord, b: Coord): number => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
const HYPER_MECHA_FUSION_UNLOCK_TURN = 3;
const META_SAVE_KEY = "ginga-shogi-x-meta-progress";
const DEFAULT_UNLOCKED_HERO_IDS: HeroId[] = ["uesugiKenshin", "mechaArmorChan", "hoshiyomiKaguya"];

const MECHA_UPGRADE_LABELS: Record<HyperMechaUpgrade, string> = {
  kineticBlade: "キネティックブレイド",
  simulator: "演算シミュレータ",
  usbProMax: "最強USB PRO MAX",
  totalAnnihilation: "全体殲滅！",
  armorPurge: "装甲パージ",
  electroAnchor: "超電磁アンカー",
  reactorRampage: "反応炉暴走",
  quantumBackup: "量子バックアップ",
  satelliteAim: "衛星照準",
  processExecution: "プロセス実行",
};

const MECHA_UPGRADE_DESCRIPTIONS: Record<HyperMechaUpgrade, string> = {
  kineticBlade: "このメカが敵を倒した時、倒した地点の隣接敵コマもまとめて破壊します。",
  simulator: "移動範囲が伸び、ハイパーメカの行動半径が広がります。",
  usbProMax: "もう一度ハイパーメカ一型を作るチャンスを得ます。",
  totalAnnihilation: "一型専用。敵コマを1体選択し、その敵と同じタイプの敵を全員消滅させます。王将は選択できません。",
  armorPurge: "Ⅱ型専用。装甲を切り離して機動力を上げます。移動範囲+1、即座に追加行動を1回得ます。",
  electroAnchor: "Ⅱ型専用。射程4の敵コマ1体をアンカーで拘束し、次のターン行動不能にします。王将は対象外。",
  reactorRampage: "Ⅱ型専用。反応炉を暴走させます。移動範囲+1、敵を取るたび相手本拠地へ5ダメージ。",
  quantumBackup: "Ⅱ型専用。破壊された時に一度だけ量子復元します。HP全回復で近くの空き場所に戻ります。",
  satelliteAim: "Ⅱ型専用。4x4マスを指定し、範囲内の王将以外を全員消滅させます。王将付近は指定不可。",
  processExecution: "Ⅱ型専用。レア。チートコンソールを開き、自分/相手のHPを10%から1000%まで書き換えます。",
};

const MECHA_UPGRADE_ART_LABELS: Record<HyperMechaUpgrade, string> = {
  kineticBlade: "BLADE",
  simulator: "SIM",
  usbProMax: "USB",
  totalAnnihilation: "WIPE",
  armorPurge: "PURGE",
  electroAnchor: "ANCHOR",
  reactorRampage: "CORE",
  quantumBackup: "Q-BACK",
  satelliteAim: "ORBIT",
  processExecution: "EXEC",
};

const MECHA_UPGRADE_RARITIES: Record<HyperMechaUpgrade, AbilityRarity> = {
  kineticBlade: "Rare",
  simulator: "Rare",
  usbProMax: "Epic",
  totalAnnihilation: "Legendary",
  armorPurge: "Rare",
  electroAnchor: "Rare",
  reactorRampage: "Epic",
  quantumBackup: "Epic",
  satelliteAim: "Legendary",
  processExecution: "Rare",
};

const MECHA_TIER_TWO_ONLY_UPGRADES: HyperMechaUpgrade[] = [
  "armorPurge",
  "electroAnchor",
  "reactorRampage",
  "quantumBackup",
  "satelliteAim",
  "processExecution",
];

const MECHA_TIER_ONE_ONLY_UPGRADES: HyperMechaUpgrade[] = ["totalAnnihilation"];

export class GameManager {
  readonly board = new Board();
  readonly bases: Record<PlayerId, BaseState> = {
    player: { hp: 100, maxHp: 100 },
    ai: { hp: 100, maxHp: 100 },
  };

  currentPlayer: PlayerId = "player";
  phase: Phase = "title";
  turnNumber = 1;
  selectedPieceId: string | null = null;
  abilityOffers: AbilityDefinition[] = [];
  winner: PlayerId | null = null;
  logs: LogEntry[] = [];
  passives: Record<PlayerId, Set<PassiveId>> = {
    player: new Set(),
    ai: new Set(),
  };
  nextOfferBonus: Record<PlayerId, number> = {
    player: 0,
    ai: 0,
  };
  lastMove: { from: Coord; to: Coord; owner: PlayerId; pieceName: string } | null = null;
  badMouthCommandUsed: Record<PlayerId, boolean> = {
    player: false,
    ai: false,
  };
  visualEvents: VisualEffectEvent[] = [];
  fusionSelectionIds: string[] = [];
  pendingMechaUpgrade: PendingMechaUpgrade | null = null;
  processExecutionOwner: PlayerId | null = null;
  processExecutionHpPercent: Record<ProcessExecutionTarget, number> = {
    player: 100,
    ai: 100,
  };
  mechFusionTickets: Record<PlayerId, number> = {
    player: 0,
    ai: 0,
  };
  selectedHeroId: HeroId | null = null;
  gameMode: GameMode = "standard";
  heroSkillCharge = 0;
  skillBanner: SkillBannerState | null = null;
  enemySkillBanner: EnemySkillBannerState | null = null;
  initiative: InitiativeState | null = null;
  initiativeFirstPlayer: PlayerId = "player";
  towerRun: TowerRunState = {
    active: false,
    mode: "thirtyBuilding",
    dungeonName: "サーティビルディング",
    floor: 1,
    maxFloor: TOWER_MAX_FLOOR,
    clearedFloors: 0,
    floorTurn: 1,
    difficultyTier: 1,
    enemyName: "",
    enemyTitle: "",
    enemyMaxHp: 100,
    isBossFloor: false,
    permanentRewards: [],
    lastRestSpot: null,
    lastFloorResult: null,
    bossQuote: null,
    bossScenario: null,
    conquestEventUnlocked: false,
    playerLevel: 1,
    playerExp: 0,
    playerExpToNext: 60,
    demonAttackUnlocked: false,
    demonAttackRank: 0,
    demonAttackPower: 0,
    elevatorNotice: null,
  };

  private readonly listeners = new Set<ChangeListener>();
  private readonly effects = new SpecialEffectManager(this);
  private readonly ai = new AIController(this);
  private readonly unlockedHeroIds = new Set<HeroId>(DEFAULT_UNLOCKED_HERO_IDS);
  private aiTimer: number | null = null;
  private visualEventSequence = 0;
  private skillBannerSequence = 0;
  private enemySkillBannerSequence = 0;
  private fusionConsumesTicket = false;
  private towerConquered = false;
  private demonCastleUnlocked = false;
  private metaSaveStatus = "解放状況は未ロードです。";

  constructor() {
    this.loadMetaProgress(false);
  }

  start(): void {
    this.board.setupInitialPosition();
    this.phase = "title";
    this.log("銀河将棋X、起動。", "system");
    this.notify();
  }

  onChange(listener: ChangeListener): void {
    this.listeners.add(listener);
  }

  notify(): void {
    this.listeners.forEach((listener) => listener());
  }

  getOpponent(owner: PlayerId): PlayerId {
    return opponentOf(owner);
  }

  getHeroDefinitions(): HeroDefinition[] {
    return HERO_LIST.filter((hero) => this.unlockedHeroIds.has(hero.id));
  }

  isDemonCastleUnlocked(): boolean {
    return this.demonCastleUnlocked;
  }

  isTowerConquered(): boolean {
    return this.towerConquered;
  }

  getMetaSaveStatus(): string {
    return this.metaSaveStatus;
  }

  saveMetaProgress(): string {
    const result = this.persistMetaProgress("解放状況をセーブしました。");
    this.notify();
    return result;
  }

  loadMetaProgress(shouldNotify = true): string {
    const storage = this.getStorage();
    if (!storage) {
      this.metaSaveStatus = "この環境ではセーブデータを使えません。";
      if (shouldNotify) this.notify();
      return this.metaSaveStatus;
    }

    const raw = storage.getItem(META_SAVE_KEY);
    if (!raw) {
      this.unlockedHeroIds.clear();
      DEFAULT_UNLOCKED_HERO_IDS.forEach((heroId) => this.unlockedHeroIds.add(heroId));
      this.towerConquered = false;
      this.demonCastleUnlocked = false;
      this.metaSaveStatus = "セーブデータはまだありません。";
      if (shouldNotify) this.notify();
      return this.metaSaveStatus;
    }

    try {
      const progress = JSON.parse(raw) as Partial<MetaProgress>;
      this.applyMetaProgress(progress);
      this.metaSaveStatus = `ロードしました: ${this.formatSaveTime(progress.savedAt)}`;
    } catch {
      this.metaSaveStatus = "セーブデータの読み込みに失敗しました。";
    }

    if (shouldNotify) this.notify();
    return this.metaSaveStatus;
  }

  getSelectedHero(): HeroDefinition | null {
    return this.selectedHeroId ? HERO_DEFINITIONS[this.selectedHeroId] : null;
  }

  getHeroSkillChargeMax(): number {
    return this.getSelectedHero()?.chargeTurns ?? 0;
  }

  startGameWithHero(heroId: HeroId): void {
    const hero = HERO_DEFINITIONS[heroId];
    if (!hero) return;

    if (this.aiTimer) {
      window.clearTimeout(this.aiTimer);
      this.aiTimer = null;
    }

    this.board.setupInitialPosition();
    this.bases.player.hp = this.bases.player.maxHp;
    this.bases.ai.hp = this.bases.ai.maxHp;
    this.currentPlayer = "player";
    this.phase = "setup";
    this.turnNumber = 1;
    this.selectedPieceId = null;
    this.abilityOffers = [];
    this.winner = null;
    this.logs = [];
    this.passives.player.clear();
    this.passives.ai.clear();
    this.nextOfferBonus.player = heroId === "hoshiyomiKaguya" ? 1 : 0;
    this.nextOfferBonus.ai = 0;
    this.lastMove = null;
    this.badMouthCommandUsed.player = false;
    this.badMouthCommandUsed.ai = false;
    this.visualEvents = [];
    this.fusionSelectionIds = [];
    this.pendingMechaUpgrade = null;
    this.processExecutionOwner = null;
    this.processExecutionHpPercent.player = 100;
    this.processExecutionHpPercent.ai = 100;
    this.mechFusionTickets.player = heroId === "mechaArmorChan" ? 1 : 0;
    this.mechFusionTickets.ai = 0;
    this.selectedHeroId = heroId;
    this.gameMode = "standard";
    this.resetTowerRun();
    this.heroSkillCharge = 0;
    this.skillBanner = null;
    this.enemySkillBanner = null;
    this.initiative = this.rollInitiative();
    this.initiativeFirstPlayer = this.initiative.firstPlayer;
    this.fusionConsumesTicket = false;

    this.log(`${hero.name}をメインキャラクターに選択。`, "player");
    this.log(`${hero.passiveName}: ${hero.passiveDescription}`, "system");
    this.phase = "initiative";
    this.notify();
  }

  startTowerRunWithHero(heroId: HeroId): void {
    this.startGameWithHero(heroId);
    this.gameMode = "thirtyBuilding";
    this.towerRun.active = true;
    this.towerRun.mode = "thirtyBuilding";
    this.towerRun.dungeonName = "サーティビルディング";
    this.towerRun.floor = 1;
    this.towerRun.maxFloor = TOWER_MAX_FLOOR;
    this.towerRun.clearedFloors = 0;
    this.towerRun.floorTurn = 1;
    this.towerRun.permanentRewards = [];
    this.towerRun.lastRestSpot = null;
    this.towerRun.lastFloorResult = null;
    this.towerRun.bossQuote = null;
    this.towerRun.bossScenario = null;
    this.towerRun.conquestEventUnlocked = false;
    this.towerRun.playerLevel = 1;
    this.towerRun.playerExp = 0;
    this.towerRun.playerExpToNext = this.getDemonCastleExpToNext(1);
    this.towerRun.demonAttackUnlocked = false;
    this.towerRun.demonAttackRank = 0;
    this.towerRun.demonAttackPower = 0;
    this.towerRun.elevatorNotice = null;
    this.bases.player.maxHp = 125;
    this.bases.player.hp = this.bases.player.maxHp;
    this.setupTowerFloor(1, true);
    this.log("サーティビルディング入館。共有HPを抱えたまま31階の屋上まで登ります。", "system");
    this.notify();
  }

  startDemonCastleRunWithHero(heroId: HeroId): void {
    if (!this.demonCastleUnlocked) return;

    this.startGameWithHero(heroId);
    this.gameMode = "demonCastle";
    this.towerRun.active = true;
    this.towerRun.mode = "demonCastle";
    this.towerRun.dungeonName = "乗っ取られ魔王城";
    this.towerRun.floor = 1;
    this.towerRun.maxFloor = DEMON_CASTLE_MAX_FLOOR;
    this.towerRun.clearedFloors = 0;
    this.towerRun.floorTurn = 1;
    this.towerRun.permanentRewards = [];
    this.towerRun.lastRestSpot = null;
    this.towerRun.lastFloorResult = null;
    this.towerRun.bossQuote = null;
    this.towerRun.bossScenario = "魔王ボランティアの城は、偽魔王軍に奪われたままです。40階の玉座まで進み、城を取り返してください。";
    this.towerRun.conquestEventUnlocked = false;
    this.towerRun.playerLevel = 1;
    this.towerRun.playerExp = 0;
    this.towerRun.playerExpToNext = this.getDemonCastleExpToNext(1);
    this.towerRun.demonAttackUnlocked = false;
    this.towerRun.demonAttackRank = 0;
    this.towerRun.demonAttackPower = 0;
    this.towerRun.elevatorNotice = null;
    this.bases.player.maxHp = 160;
    this.bases.player.hp = this.bases.player.maxHp;
    this.setupTowerFloor(1, true);
    this.log("乗っ取られ魔王城へ突入。経験値でレベルアップしながら、40階の真相へ向かいます。", "system");
    this.notify();
  }

  confirmInitiative(): void {
    if (this.phase !== "initiative" || !this.initiative) return;
    this.log(
      `先攻後攻決定: ${this.initiative.firstPlayer === "player" ? "あなた" : "AI"}が先攻です。`,
      this.initiative.firstPlayer,
    );
    this.beginTurn(this.initiative.firstPlayer);
  }

  canUseHeroSkill(): boolean {
    return (
      this.currentPlayer === "player" &&
      this.phase === "action" &&
      !!this.selectedHeroId &&
      this.heroSkillCharge >= this.getHeroSkillChargeMax()
    );
  }

  useHeroSkill(): void {
    if (!this.canUseHeroSkill() || !this.selectedHeroId) return;
    const hero = HERO_DEFINITIONS[this.selectedHeroId];
    this.heroSkillCharge = 0;
    this.showSkillBanner(hero.skillName, hero.name);

    if (hero.id === "uesugiKenshin") {
      this.useKurumaGakari();
    } else if (hero.id === "mechaArmorChan") {
      this.useMechaProtocol();
    } else if (hero.id === "hoshiyomiKaguya") {
      this.useStarMapRewrite();
    } else {
      this.useDemonVolunteerGale();
    }

    this.notify();
  }

  private chargeHeroSkill(amount: number): void {
    const max = this.getHeroSkillChargeMax();
    if (max <= 0) return;
    this.heroSkillCharge = Math.min(max, this.heroSkillCharge + amount);
  }

  private showSkillBanner(skillName: string, subtitle: string): void {
    if (!this.selectedHeroId) return;
    this.skillBannerSequence += 1;
    this.skillBanner = {
      id: `skill-${this.skillBannerSequence}`,
      heroId: this.selectedHeroId,
      skillName,
      subtitle,
    };
  }

  private showEnemySkillBanner(skillName: string, subtitle: string): void {
    this.enemySkillBannerSequence += 1;
    this.enemySkillBanner = {
      id: `enemy-skill-${this.enemySkillBannerSequence}`,
      skillName,
      subtitle,
    };
  }

  private rollInitiative(): InitiativeState {
    let playerRoll = 0;
    let aiRoll = 0;
    do {
      playerRoll = 1 + Math.floor(Math.random() * 10);
      aiRoll = 1 + Math.floor(Math.random() * 10);
    } while (playerRoll === aiRoll);

    return {
      playerRoll,
      aiRoll,
      firstPlayer: playerRoll > aiRoll ? "player" : "ai",
    };
  }

  private getStorage(): Storage | null {
    try {
      if (typeof window === "undefined" || !window.localStorage) return null;
      return window.localStorage;
    } catch {
      return null;
    }
  }

  private persistMetaProgress(successMessage: string): string {
    const storage = this.getStorage();
    if (!storage) {
      this.metaSaveStatus = "この環境ではセーブデータを使えません。";
      return this.metaSaveStatus;
    }

    const progress: MetaProgress = {
      version: 1,
      unlockedHeroIds: [...this.unlockedHeroIds],
      towerConquered: this.towerConquered,
      demonCastleUnlocked: this.demonCastleUnlocked,
      savedAt: new Date().toISOString(),
    };

    storage.setItem(META_SAVE_KEY, JSON.stringify(progress));
    this.metaSaveStatus = `${successMessage} ${this.formatSaveTime(progress.savedAt)}`;
    return this.metaSaveStatus;
  }

  private applyMetaProgress(progress: Partial<MetaProgress>): void {
    this.unlockedHeroIds.clear();
    DEFAULT_UNLOCKED_HERO_IDS.forEach((heroId) => this.unlockedHeroIds.add(heroId));

    const savedHeroIds = Array.isArray(progress.unlockedHeroIds) ? progress.unlockedHeroIds : [];
    for (const heroId of savedHeroIds) {
      if (this.isHeroId(heroId)) this.unlockedHeroIds.add(heroId);
    }

    this.towerConquered = Boolean(progress.towerConquered || this.unlockedHeroIds.has("demonVolunteer"));
    this.demonCastleUnlocked = Boolean(progress.demonCastleUnlocked || this.towerConquered);
    if (this.towerConquered || this.demonCastleUnlocked) this.unlockedHeroIds.add("demonVolunteer");
  }

  private isHeroId(value: unknown): value is HeroId {
    return typeof value === "string" && value in HERO_DEFINITIONS;
  }

  private formatSaveTime(value: unknown): string {
    if (typeof value !== "string") return "時刻不明";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "時刻不明";
    return date.toLocaleString("ja-JP", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  private resetTowerRun(): void {
    this.towerRun = {
      active: false,
      mode: "thirtyBuilding",
      dungeonName: "サーティビルディング",
      floor: 1,
      maxFloor: TOWER_MAX_FLOOR,
      clearedFloors: 0,
      floorTurn: 1,
      difficultyTier: 1,
      enemyName: "",
      enemyTitle: "",
      enemyMaxHp: 100,
      isBossFloor: false,
      permanentRewards: [],
      lastRestSpot: null,
      lastFloorResult: null,
      bossQuote: null,
      bossScenario: null,
      conquestEventUnlocked: false,
      playerLevel: 1,
      playerExp: 0,
      playerExpToNext: 60,
      demonAttackUnlocked: false,
      demonAttackRank: 0,
      demonAttackPower: 0,
      elevatorNotice: null,
    };
  }

  private setupTowerFloor(floor: number, preserveInitiative = false): void {
    const carriedPlayerHp = this.bases.player.hp;
    this.board.setupInitialPosition();
    this.selectedPieceId = null;
    this.abilityOffers = [];
    this.lastMove = null;
    this.fusionSelectionIds = [];
    this.pendingMechaUpgrade = null;
    this.processExecutionOwner = null;
    this.badMouthCommandUsed.player = false;
    this.badMouthCommandUsed.ai = false;

    const isDemonCastle = this.gameMode === "demonCastle" || this.towerRun.mode === "demonCastle";
    const boss = isDemonCastle ? DEMON_CASTLE_BOSSES[floor] : TOWER_BOSSES[floor];
    const enemyMaxHp = isDemonCastle ? getDemonCastleEnemyBaseHp(floor) : getTowerEnemyBaseHp(floor);
    const difficultyTier = isDemonCastle ? getDemonCastleDifficultyTier(floor) : getTowerDifficultyTier(floor);
    this.bases.ai.maxHp = enemyMaxHp;
    this.bases.ai.hp = enemyMaxHp;
    this.bases.player.hp = Math.min(this.bases.player.maxHp, carriedPlayerHp);

    this.towerRun.floor = floor;
    this.towerRun.floorTurn = 1;
    this.towerRun.difficultyTier = difficultyTier;
    this.towerRun.enemyName = boss ? boss.name : isDemonCastle ? this.pickDemonCastleName() : `${this.pickCommonTowerName()}さん`;
    this.towerRun.enemyTitle = boss ? boss.title : isDemonCastle ? `第${floor}階の偽魔王軍` : `第${floor}階の一般社員`;
    this.towerRun.enemyMaxHp = enemyMaxHp;
    this.towerRun.isBossFloor = isDemonCastle ? isDemonCastleBossFloor(floor) : isTowerBossFloor(floor);
    this.towerRun.lastFloorResult = null;
    this.towerRun.bossQuote = null;
    this.towerRun.bossScenario = isDemonCastle ? (DEMON_CASTLE_BOSSES[floor]?.scenarioBefore ?? null) : null;
    this.towerRun.elevatorNotice = null;

    this.applyTowerDifficultySetup(floor, isDemonCastle);

    if (boss) {
      for (const type of boss.summons) this.addTowerEnemyPiece(type);
      for (const terrain of boss.terrain) {
        if (terrain === "warp") this.placeWarpPair(2, "ai");
        else this.placeTerrain(terrain, 1, "ai");
      }
      this.log(`${floor}F BOSS: ${boss.name} 出現。${boss.description}`, "danger");
      if (isDemonCastle && DEMON_CASTLE_BOSSES[floor]) this.log(DEMON_CASTLE_BOSSES[floor].scenarioBefore, "danger");
    } else {
      this.log(`${floor}F: ${this.towerRun.enemyName} が立ちはだかります。HP ${enemyMaxHp} / 難易度TIER ${difficultyTier}`, "ai");
    }

    if (!preserveInitiative) {
      this.initiative = null;
      this.initiativeFirstPlayer = "player";
    }
  }

  private applyTowerDifficultySetup(floor: number, isDemonCastle = false): void {
    const tier = isDemonCastle ? getDemonCastleDifficultyTier(floor) : getTowerDifficultyTier(floor);
    const extraPool: PieceType[] = isDemonCastle
      ? ["pawn", "silver", "gold", "ninja", "turret", "rook", "bomber", "jujutsushi", "dragon"]
      : ["pawn", "silver", "gold", "ninja", "turret", "rook"];
    const extraCount = Math.max(0, tier - 1 + (isDemonCastle ? 1 : 0));
    for (let index = 0; index < extraCount; index += 1) {
      this.addTowerEnemyPiece(extraPool[(floor + index) % extraPool.length]);
    }

    if (tier >= 3) this.placeTerrain("trap", isDemonCastle ? 2 : 1, "ai");
    if (tier >= 4) this.placeTerrain("lava", isDemonCastle ? 2 : 1, "ai");
    if (tier >= 5) this.placeTerrain("curse", isDemonCastle ? 2 : 1, "ai");
    if (tier >= 6) this.addTowerEnemyPiece(isDemonCastle ? "dragon" : "god");
  }

  private addTowerEnemyPiece(type: PieceType): void {
    const piece = this.summonPiece("ai", type);
    if (piece?.type === "hyperMecha") {
      piece.mechUpgradeCooldown = 1;
      piece.mechaKillCount = 3;
    }
  }

  private pickCommonTowerName(): string {
    return COMMON_TOWER_NAMES[Math.floor(Math.random() * COMMON_TOWER_NAMES.length)] ?? "たかはし";
  }

  private pickDemonCastleName(): string {
    return DEMON_CASTLE_COMMON_NAMES[Math.floor(Math.random() * DEMON_CASTLE_COMMON_NAMES.length)] ?? "城壁の魔兵";
  }

  private applyHeroPassiveStartOfTurn(owner: PlayerId): void {
    if (owner !== "player" || !this.selectedHeroId) return;

    if (this.selectedHeroId === "uesugiKenshin") {
      const vanguard = this.board
        .getPieces("player")
        .filter((piece) => piece.type !== "king" && piece.position.y <= Math.floor(this.board.size / 2))
        .sort((a, b) => a.position.y - b.position.y || b.definition.score - a.definition.score)[0];
      if (vanguard) {
        vanguard.extraActions += 1;
        this.chargeHeroSkill(1);
        this.log(`越後の龍: 前線の${this.getPieceDisplayName(vanguard)}が追加行動を得ました。`, "player");
      }
      return;
    }

    if (this.selectedHeroId === "mechaArmorChan") {
      const mechas = this.board.getPieces("player").filter((piece) => piece.type === "hyperMecha");
      for (const mecha of mechas) {
        if (mecha.mechUpgradeCooldown > 0) mecha.mechUpgradeCooldown -= 1;
      }
      if (mechas.length > 0) this.log("装甲同期: ハイパーメカの強化準備が加速しました。", "player");
      return;
    }

    if (this.selectedHeroId === "hoshiyomiKaguya" && this.turnNumber > 1 && this.turnNumber % 3 === 0) {
      this.raiseNextOffer("player");
      this.log("月下の予兆: 次の能力カードの星が強くなりました。", "player");
    }
  }

  private useKurumaGakari(): void {
    const targets = this.board
      .getPieces("player")
      .filter((piece) => piece.type !== "king" && piece.type !== "turret")
      .sort((a, b) => a.position.y - b.position.y || b.definition.score - a.definition.score)
      .slice(0, 5);

    for (const piece of targets) {
      piece.extraActions += 1;
      piece.movePenalty = 0;
      piece.weakenedTurns = 0;
      this.emitVisualEffect({ kind: "combat", coord: { ...piece.position }, owner: "player" });
    }

    this.log(`車懸りの陣: 前線${targets.length}体が輪転し、追加行動を得ました。`, "player");
  }

  private useMechaProtocol(): void {
    const mechas = this.board.getPieces("player").filter((piece) => piece.type === "hyperMecha");
    if (mechas.length > 0) {
      for (const mecha of mechas) {
        mecha.heal(2);
        mecha.mechUpgradeCooldown = 0;
        if (mecha.mechaTier === 1) {
          mecha.mechaKillCount = Math.min(4, mecha.mechaKillCount + 2);
          if (!mecha.hasMechUpgrade("simulator")) this.applyHyperMechaUpgrade(mecha, "simulator");
        } else if (!mecha.hasMechUpgrade("armorPurge")) {
          this.applyHyperMechaUpgrade(mecha, "armorPurge");
        }
        this.emitVisualEffect({ kind: "fusion", coord: { ...mecha.position }, owner: "player" });
      }
      this.log("装甲起動プロトコル: ハイパーメカの整備が完了しました。", "player");
      return;
    }

    if (this.canStartHyperMechaFusion("player") && this.getFusionCandidates("player").length >= 5) {
      const message = this.startHyperMechaFusion("player", "装甲起動プロトコル");
      this.log(message, "player");
      return;
    }

    this.mechFusionTickets.player += 1;
    this.summonPiece("player", "turret");
    this.log("装甲起動プロトコル: 融合準備が足りないため、USBチャンスとタレットを確保しました。", "player");
  }

  private useStarMapRewrite(): void {
    this.raiseNextOffer("player");
    this.raiseNextOffer("player");
    this.placeTerrain("heal", 2, "player");
    this.placeWarpPair(2, "player");
    this.abilityOffers = Ability.drawOffers(3, this.nextOfferBonus.player, (definition) => this.canOfferAbility("player", definition));
    this.nextOfferBonus.player = 0;
    this.phase = "ability";
    this.log("星図改変: 星の巡りを書き換え、能力カードを再提示しました。", "player");
  }

  private useDemonVolunteerGale(): void {
    this.damageBase("ai", 22);
    this.placeTerrain("curse", 2, "player");
    this.placeTerrain("divine", 1, "player");
    this.raiseNextOffer("player");
    this.log("魔王の風: 相手本拠地へ22ダメージ。呪いマスと神域を呼び、次の能力カードを強めました。", "player");
  }

  log(text: string, tone: LogTone = "system"): void {
    const mappedTone: LogEntry["tone"] = tone === "player" || tone === "ai" ? tone : tone;
    this.logs.unshift({
      id: `log-${Date.now()}-${Math.random()}`,
      text,
      tone: mappedTone,
    });
    this.logs = this.logs.slice(0, 12);
  }

  emitVisualEffect(event: Omit<VisualEffectEvent, "id">): void {
    this.visualEventSequence += 1;
    this.visualEvents.push({
      ...event,
      id: `vfx-${this.visualEventSequence}`,
    });
    this.visualEvents = this.visualEvents.slice(-48);
  }

  beginTurn(owner: PlayerId): void {
    if (this.winner) return;
    this.currentPlayer = owner;
    this.selectedPieceId = null;
    this.pendingMechaUpgrade = null;
    this.badMouthCommandUsed[owner] = false;

    for (const piece of this.board.getPieces(owner)) {
      piece.resetTurnStatuses();
    }
    if (owner === "player" && this.selectedHeroId) {
      this.chargeHeroSkill(1);
      this.applyHeroPassiveStartOfTurn(owner);
    }
    if (owner === "player" && this.isDemonCastleRun()) {
      this.resolveDemonCastleAllyAttack();
      if (this.checkVictory()) {
        this.notify();
        return;
      }
    }
    if (owner === "ai" && this.towerRun.active) {
      this.resolveTowerBossStartOfTurn();
      if (this.checkVictory()) {
        this.notify();
        return;
      }
    }
    this.applyKingAwe(owner);
    this.continueTurnAfterMechaUpgrades(owner);
  }

  private getAbilityOfferCount(owner: PlayerId): number {
    if (owner !== "player" || !this.isDemonCastleRun()) return 3;
    return 3 + Math.floor(this.towerRun.playerLevel / 5);
  }

  private continueTurnAfterMechaUpgrades(owner: PlayerId): void {
    if (owner === "player") {
      const pending = this.createPendingHyperMechaUpgrade(owner);
      if (pending) {
        this.pendingMechaUpgrade = pending;
        this.abilityOffers = [];
        this.phase = "mechaUpgrade";
        const mecha = this.board.getPiece(pending.pieceId);
        this.log(`${mecha ? this.getPieceDisplayName(mecha) : "ハイパーメカ"}に新しい強化カードが届きました。`, owner);
        this.notify();
        return;
      }
    } else {
      this.processHyperMechaUpgrades(owner);
    }

    const offerCount = this.getAbilityOfferCount(owner);
    this.abilityOffers =
      owner === "player" && this.turnNumber === 1 && !this.isDemonCastleRun()
        ? Ability.fixedOffers(["turret-upgrade", "ninja-contract", "iyana-yatsu-arrival"])
        : Ability.drawOffers(offerCount, this.nextOfferBonus[owner], (definition) => this.canOfferAbility(owner, definition));
    this.nextOfferBonus[owner] = 0;

    if (owner === "player") {
      this.phase = "ability";
      this.log(`ターン${this.turnNumber}: あなたの能力選択です。`, "player");
      this.notify();
      return;
    }

    this.phase = "ai";
    const chosen = this.ai.chooseAbility(this.abilityOffers);
    this.chooseAbility(chosen.id, true);
    this.aiTimer = window.setTimeout(() => this.ai.takeTurn(), 650);
    this.notify();
  }

  chooseAbility(abilityId: string, silent = false): void {
    const definition = this.abilityOffers.find((offer) => offer.id === abilityId);
    if (!definition || this.phase === "gameover") return;

    const message = new Ability(definition).apply(this, this.currentPlayer);
    this.log(message, this.currentPlayer);
    this.abilityOffers = [];
    if (this.phase !== "fusion") {
      this.phase = this.currentPlayer === "player" ? "action" : "ai";
    }
    if (!silent) this.notify();
  }

  getPendingMechaUpgradeCard(): MechaUpgradeOffer | null {
    if (!this.pendingMechaUpgrade) return null;
    const piece = this.board.getPiece(this.pendingMechaUpgrade.pieceId);
    if (!piece) return null;

    return {
      pieceId: piece.id,
      pieceName: this.getPieceDisplayName(piece),
      upgrade: this.pendingMechaUpgrade.upgrade,
      name: MECHA_UPGRADE_LABELS[this.pendingMechaUpgrade.upgrade],
      description: MECHA_UPGRADE_DESCRIPTIONS[this.pendingMechaUpgrade.upgrade],
      artLabel: MECHA_UPGRADE_ART_LABELS[this.pendingMechaUpgrade.upgrade],
      rarity: MECHA_UPGRADE_RARITIES[this.pendingMechaUpgrade.upgrade],
    };
  }

  getPieceDisplayName(piece: Piece): string {
    if (piece.type === "hyperMecha" && piece.mechaTier >= 2) return "ハイパーメカⅡ型";
    return piece.definition.name;
  }

  claimMechaUpgrade(): void {
    if (this.phase !== "mechaUpgrade" || this.currentPlayer !== "player" || !this.pendingMechaUpgrade) return;

    const pending = this.pendingMechaUpgrade;
    this.pendingMechaUpgrade = null;
    const mecha = this.board.getPiece(pending.pieceId);
    let pausedForProcessExecution = false;
    if (mecha && mecha.owner === "player" && mecha.type === "hyperMecha") {
      pausedForProcessExecution = this.applyHyperMechaUpgrade(mecha, pending.upgrade);
      mecha.mechUpgradeCooldown = 3;
    }

    if (pausedForProcessExecution) return;
    this.continueTurnAfterMechaUpgrades("player");
  }

  selectPiece(pieceId: string | null): void {
    if (this.phase !== "action" && this.phase !== "ai") return;
    const piece = this.board.getPiece(pieceId);
    if (!piece || piece.owner !== this.currentPlayer) {
      this.selectedPieceId = null;
      this.notify();
      return;
    }
    this.selectedPieceId = piece.id;
    this.notify();
  }

  handleBoardClick(coord: Coord, clickedPieceId?: string): void {
    if (this.phase === "fusion" && this.currentPlayer === "player") {
      if (!clickedPieceId) return;
      this.toggleFusionSelection(clickedPieceId);
      return;
    }

    if (this.phase !== "action" || this.currentPlayer !== "player") return;

    if (clickedPieceId) {
      const clicked = this.board.getPiece(clickedPieceId);
      if (!clicked) return;

      if (clicked.owner === "player") {
        this.selectPiece(clicked.id);
        return;
      }
    }

    const selected = this.board.getPiece(this.selectedPieceId);
    if (!selected) return;

    const move = this.getMoveOptions(selected.id).find((option) => option.to.x === coord.x && option.to.y === coord.y);
    if (move) {
      this.performMove(move);
    }
  }

  getMoveOptions(pieceId: string): MoveOption[] {
    const piece = this.board.getPiece(pieceId);
    if (!piece || !piece.canAct) return [];

    const moves = this.board.getLegalMoves(piece);
    if (piece.type === "god" && piece.specialCooldown <= 0) {
      for (const enemy of this.board.getPieces(this.getOpponent(piece.owner))) {
        if (chebyshevDistance(piece.position, enemy.position) > 3) continue;
        moves.push({
          to: { ...enemy.position },
          kind: "special",
          targetPieceId: enemy.id,
          label: "近距離消滅",
          specialType: "godBanish",
        });
      }
    }

    if (piece.type === "hyperMecha" && piece.mechaTier === 1 && piece.hasMechUpgrade("totalAnnihilation")) {
      for (const enemy of this.board.getPieces(this.getOpponent(piece.owner))) {
        if (enemy.type === "king") continue;
        moves.push({
          to: { ...enemy.position },
          kind: "special",
          targetPieceId: enemy.id,
          label: `${enemy.definition.name}タイプ殲滅`,
          specialType: "typeAnnihilation",
        });
      }
    }

    if (piece.type === "hyperMecha" && piece.mechaTier >= 2 && piece.hasMechUpgrade("electroAnchor") && piece.specialCooldown <= 0) {
      for (const enemy of this.board.getPieces(this.getOpponent(piece.owner))) {
        if (enemy.type === "king") continue;
        if (chebyshevDistance(piece.position, enemy.position) > 4) continue;
        moves.push({
          to: { ...enemy.position },
          kind: "special",
          targetPieceId: enemy.id,
          label: "超電磁アンカー",
          specialType: "electroAnchor",
        });
      }
    }

    if (piece.type === "hyperMecha" && piece.mechaTier >= 2 && piece.hasMechUpgrade("satelliteAim")) {
      for (let y = 0; y <= this.board.size - 4; y += 1) {
        for (let x = 0; x <= this.board.size - 4; x += 1) {
          const origin = { x, y };
          if (!this.isSatelliteTargetAllowed(origin, 4)) continue;
          if (!this.getPiecesInArea(origin, 4).some((target) => target.type !== "king")) continue;
          moves.push({
            to: origin,
            kind: "special",
            label: "衛星照準",
            specialType: "satelliteAim",
            areaSize: 4,
          });
        }
      }
    }

    return moves;
  }

  performMove(move: MoveOption): void {
    const piece = this.board.getPiece(this.selectedPieceId);
    if (!piece || this.phase === "gameover") return;
    const from = { ...piece.position };

    if (move.kind === "special" && piece.type === "god" && move.targetPieceId) {
      const target = this.board.getPiece(move.targetPieceId);
      if (target) {
        this.log(`神が${target.definition.name}を消滅させました。`, piece.owner);
        this.lastMove = { from, to: { ...target.position }, owner: piece.owner, pieceName: piece.definition.name };
        piece.specialCooldown = 3;
        this.destroyPiece(target.id, "god", piece.owner);
      }
      this.afterPieceAction(piece);
      return;
    }

    if (move.kind === "special" && piece.type === "hyperMecha" && piece.mechaTier >= 2 && move.specialType === "electroAnchor" && move.targetPieceId) {
      const target = this.board.getPiece(move.targetPieceId);
      if (!target || target.owner === piece.owner || target.type === "king") return;
      target.stunnedTurns = Math.max(target.stunnedTurns, 1);
      target.movePenalty += 2;
      piece.specialCooldown = 2;
      this.log(`${this.getPieceDisplayName(piece)}が${target.definition.name}を超電磁アンカーで拘束しました。`, piece.owner);
      this.emitVisualEffect({ kind: "combat", coord: { ...target.position }, owner: piece.owner });
      this.lastMove = { from, to: { ...target.position }, owner: piece.owner, pieceName: this.getPieceDisplayName(piece) };
      this.afterPieceAction(piece);
      return;
    }

    if (move.kind === "special" && piece.type === "hyperMecha" && piece.mechaTier >= 2 && move.specialType === "satelliteAim") {
      const areaSize = move.areaSize ?? 4;
      if (!this.isSatelliteTargetAllowed(move.to, areaSize)) return;
      const targets = this.getPiecesInArea(move.to, areaSize).filter((target) => target.type !== "king");
      for (const target of targets) {
        this.destroyPiece(target.id, "satellite", piece.owner);
      }
      piece.mechUpgrades = piece.mechUpgrades.filter((upgrade) => upgrade !== "satelliteAim");
      this.emitVisualEffect({ kind: "satelliteStrike", coord: { ...move.to }, owner: piece.owner, amount: areaSize });
      this.log(`${this.getPieceDisplayName(piece)}が衛星照準を実行しました。4x4範囲の${targets.length}体が消滅します。`, piece.owner);
      this.recordMechaKills(piece, targets.filter((target) => target.owner !== piece.owner).length);
      this.lastMove = { from, to: { ...move.to }, owner: piece.owner, pieceName: this.getPieceDisplayName(piece) };
      this.afterPieceAction(piece);
      return;
    }

    if (move.kind === "special" && piece.type === "hyperMecha" && piece.mechaTier === 1 && move.specialType === "typeAnnihilation" && piece.hasMechUpgrade("totalAnnihilation")) {
      const enemy = this.getOpponent(piece.owner);
      const selectedTarget = this.board.getPiece(move.targetPieceId);
      if (!selectedTarget || selectedTarget.owner !== enemy || selectedTarget.type === "king") return;

      const targetType = selectedTarget.type;
      const targetName = selectedTarget.definition.name;
      const targets = this.board.getPieces(enemy).filter((target) => target.type === targetType);
      for (const target of targets) {
        this.destroyPiece(target.id, "annihilation", piece.owner);
      }
      piece.mechUpgrades = piece.mechUpgrades.filter((upgrade) => upgrade !== "totalAnnihilation");
      this.log(`${this.getPieceDisplayName(piece)}が全体殲滅を実行しました。敵の${targetName}タイプが${targets.length}体消滅します。`, piece.owner);
      this.recordMechaKills(piece, targets.length);
      this.lastMove = { from, to: { ...move.to }, owner: piece.owner, pieceName: this.getPieceDisplayName(piece) };
      this.afterPieceAction(piece);
      return;
    }

    const { capturedPieces = [] } = this.board.movePiece(piece.id, move.to);
    if (capturedPieces.length > 0) {
      const capturedNames = capturedPieces.map((captured) => captured.definition.name).join("、");
      this.log(`${this.getPieceDisplayName(piece)}が${capturedNames}を取りました。`, piece.owner);
      for (const captured of capturedPieces) {
        this.emitVisualEffect({ kind: "combat", coord: { ...captured.position }, owner: piece.owner });
        this.resolveCaptureSideEffects(captured, piece.owner);
      }
      if (piece.type === "hyperMecha" && piece.hasMechUpgrade("kineticBlade")) {
        const bladeKills = this.resolveKineticBlade(piece.owner, move.to);
        this.recordMechaKills(piece, capturedPieces.length + bladeKills);
      } else {
        this.recordMechaKills(piece, capturedPieces.length);
      }
      if (piece.type === "hyperMecha" && piece.mechaTier >= 2 && piece.hasMechUpgrade("reactorRampage")) {
        this.damageBase(this.getOpponent(piece.owner), 5 * capturedPieces.length);
        this.log("反応炉暴走: 捕獲エネルギーが相手本拠地へ流れ込みました。", piece.owner);
      }
    } else {
      this.log(`${this.getPieceDisplayName(piece)}が移動しました。`, piece.owner);
    }
    this.lastMove = { from, to: { ...piece.position }, owner: piece.owner, pieceName: this.getPieceDisplayName(piece) };

    this.effects.applyTerrainOnEntry(piece);
    this.resolvePawnEvolution(piece);
    this.afterPieceAction(piece);
  }

  finishAction(): void {
    const owner = this.currentPlayer;
    this.effects.resolveEndTurn(owner);
    if (this.checkVictory()) {
      this.notify();
      return;
    }

    this.selectedPieceId = null;
    const nextPlayer = this.getOpponent(owner);
    const completedRound = nextPlayer === this.initiativeFirstPlayer;
    if (completedRound) {
      this.turnNumber += 1;
      if (this.towerRun.active) this.towerRun.floorTurn += 1;
    }
    this.beginTurn(nextPlayer);
  }

  summonPiece(owner: PlayerId, type: PieceType): Piece | null {
    const position = this.board.findSummonSpot(owner);
    if (!position) return null;
    const piece = this.board.addPiece(type, owner, position);
    if (piece?.type === "iyanaYatsu") {
      piece.specialCooldown = 3;
    }
    if (piece?.type === "god") {
      piece.specialCooldown = 2;
      this.emitVisualEffect({ kind: "godSummon", coord: { ...piece.position }, owner });
    }
    return piece;
  }

  healBase(owner: PlayerId, amount: number): void {
    const base = this.bases[owner];
    base.hp = Math.min(base.maxHp, base.hp + amount);
  }

  damageBase(owner: PlayerId, amount: number): void {
    const base = this.bases[owner];
    const before = base.hp;
    base.hp = Math.max(0, base.hp - amount);
    if (before > base.hp) {
      this.emitVisualEffect({ kind: "baseDamage", owner, amount: before - base.hp });
    }
    this.checkVictory();
  }

  beginProcessExecution(owner: PlayerId): void {
    this.processExecutionOwner = owner;
    this.processExecutionHpPercent.player = this.getBaseHpPercent("player");
    this.processExecutionHpPercent.ai = this.getBaseHpPercent("ai");
    this.phase = "processExecution";
    this.log("プロセス実行: チートコンソールが開きました。HPを書き換えられます。", owner);
    this.notify();
  }

  adjustProcessExecutionHp(owner: PlayerId, deltaPercent: number): void {
    this.setProcessExecutionHp(owner, this.processExecutionHpPercent[owner] + deltaPercent);
  }

  setProcessExecutionHp(owner: PlayerId, percent: number): void {
    const clamped = Math.max(10, Math.min(1000, Math.round(percent)));
    this.processExecutionHpPercent[owner] = clamped;
    this.bases[owner].hp = Math.round((this.bases[owner].maxHp * clamped) / 100);
    this.log(`PROCESS: ${owner} HP = ${clamped}%`, owner);
    if (this.winner && this.bases.player.hp > 0 && this.bases.ai.hp > 0 && this.board.getKing("player") && this.board.getKing("ai")) {
      this.winner = null;
    }
    this.checkVictory();
    this.notify();
  }

  finishProcessExecution(): void {
    const owner = this.processExecutionOwner ?? this.currentPlayer;
    this.processExecutionOwner = null;
    if (this.phase !== "gameover") {
      this.continueTurnAfterMechaUpgrades(owner);
    }
    this.notify();
  }

  addPassive(owner: PlayerId, passive: PassiveId): void {
    this.passives[owner].add(passive);
  }

  hasPassive(owner: PlayerId, passive: PassiveId): boolean {
    return this.passives[owner].has(passive);
  }

  getPassiveLabels(owner: PlayerId): string[] {
    return [...this.passives[owner]].map(passiveLabel);
  }

  canOfferAbility(owner: PlayerId, definition: AbilityDefinition): boolean {
    if (definition.effect.type === "startFusion") {
      return this.canStartHyperMechaFusion(owner) && this.getFusionCandidates(owner).length >= 5;
    }
    if (definition.effect.type !== "summon" || definition.effect.pieceType !== "god") return true;
    return this.turnNumber >= 6 && this.bases[owner].hp >= 80;
  }

  canSummonPieceType(owner: PlayerId, type: PieceType, selfBaseDamage = 0): boolean {
    if (selfBaseDamage > 0 && this.bases[owner].hp <= selfBaseDamage + 5) return false;
    if (type !== "god") return true;
    return this.turnNumber >= 6 && this.bases[owner].hp >= 80;
  }

  raiseNextOffer(owner: PlayerId): void {
    this.nextOfferBonus[owner] = Math.min(2, this.nextOfferBonus[owner] + 1);
  }

  startHyperMechaFusion(owner: PlayerId, sourceName: string, consumesTicket = false): string {
    if (!this.isHyperMechaFusionUnlocked()) {
      return `${sourceName}: ハイパーメカ融合は${HYPER_MECHA_FUSION_UNLOCK_TURN}ターン目から解禁です。序盤は通常戦力で布陣してください。`;
    }

    if (!this.canCreateHyperMecha(owner, consumesTicket)) {
      return consumesTicket
        ? `${sourceName}: USB例外でもハイパーメカは2機までです。`
        : `${sourceName}: ハイパーメカは各陣営1機までです。USBチャンスなら2機目を融合できます。`;
    }

    const candidates = this.getFusionCandidates(owner);
    if (candidates.length < 5) {
      return `${sourceName}: 自陣に融合できる非王将コマが5体必要です。`;
    }

    if (owner === "ai") {
      const selected = candidates
        .sort((a, b) => a.definition.score - b.definition.score)
        .slice(0, 5)
        .map((piece) => piece.id);
      this.completeHyperMechaFusion(owner, selected, consumesTicket);
      return `${sourceName}: AIが5体を融合し、ハイパーメカ一型を作りました。`;
    }

    this.phase = "fusion";
    this.fusionSelectionIds = [];
    this.fusionConsumesTicket = consumesTicket;
    return `${sourceName}: 自陣の非王将コマを5体選択してください。`;
  }

  startFusionFromTicket(owner: PlayerId): void {
    if (this.mechFusionTickets[owner] <= 0 || this.phase !== "action" || this.currentPlayer !== owner || !this.canStartHyperMechaFusion(owner, true)) return;
    const message = this.startHyperMechaFusion(owner, "最強USB PRO MAX", true);
    this.log(message, owner);
    this.notify();
  }

  cancelFusionSelection(): void {
    if (this.phase !== "fusion") return;
    this.fusionSelectionIds = [];
    this.fusionConsumesTicket = false;
    this.phase = this.currentPlayer === "player" ? "action" : "ai";
    this.log("融合選択をキャンセルしました。", this.currentPlayer);
    this.notify();
  }

  toggleFusionSelection(pieceId: string): void {
    const piece = this.board.getPiece(pieceId);
    if (!piece || !this.isFusionCandidate(piece, this.currentPlayer)) return;

    if (this.fusionSelectionIds.includes(piece.id)) {
      this.fusionSelectionIds = this.fusionSelectionIds.filter((id) => id !== piece.id);
    } else if (this.fusionSelectionIds.length < 5) {
      this.fusionSelectionIds.push(piece.id);
    }

    if (this.fusionSelectionIds.length === 5) {
      this.completeHyperMechaFusion(this.currentPlayer, this.fusionSelectionIds, this.fusionConsumesTicket);
      this.fusionSelectionIds = [];
      this.fusionConsumesTicket = false;
      this.phase = this.currentPlayer === "player" ? "action" : "ai";
    }

    this.notify();
  }

  getFusionCandidates(owner: PlayerId): Piece[] {
    return this.board.getPieces(owner).filter((piece) => this.isFusionCandidate(piece, owner));
  }

  hasHyperMecha(owner: PlayerId): boolean {
    return this.getHyperMechaCount(owner) > 0;
  }

  getHyperMechaCount(owner: PlayerId): number {
    return this.board.getPieces(owner).filter((piece) => piece.type === "hyperMecha").length;
  }

  canCreateHyperMecha(owner: PlayerId, consumesTicket = false): boolean {
    return this.getHyperMechaCount(owner) < (consumesTicket ? 2 : 1);
  }

  canStartHyperMechaFusion(owner: PlayerId, consumesTicket = false): boolean {
    return this.isHyperMechaFusionUnlocked() && this.canCreateHyperMecha(owner, consumesTicket);
  }

  private isHyperMechaFusionUnlocked(): boolean {
    return this.turnNumber >= HYPER_MECHA_FUSION_UNLOCK_TURN;
  }

  debugExecuteCommand(rawCommand: string): string {
    const command = rawCommand.trim();
    if (!command) return "DEBUG: command required.";

    const [name = "", ...args] = command.split(/\s+/);
    switch (name.toLowerCase()) {
      case "help":
        return "commands: spawn [player|ai] <piece> [x y], card [player|ai] [abilityId...], mecha [player|ai] [upgrade], process [player], usb [player|ai] [count], terrain <type> [count] [owner], hp <owner> <amount>, enemyhp1, damage <owner> <amount>, turn <owner>, promote <owner>, tower [start|next|+5|floor|clear|boss] [floor], castle [start|next|+5|floor|clear|boss] [floor], save, load, clear";
      case "spawn":
      case "summon":
        return this.debugCommandSpawn(args);
      case "card":
      case "cards":
      case "ability":
        return this.debugCommandCards(args);
      case "mecha":
      case "mechacard":
        return this.debugCommandMechaUpgrade(args);
      case "event":
        if (args[0] === "card" || args[0] === "ability") return this.debugCommandCards(args.slice(1));
        if (args[0] === "mecha") return this.debugCommandMechaUpgrade(args.slice(1));
        return "DEBUG: usage event card [owner] or event mecha [owner] [upgrade]";
      case "process":
      case "exec":
        this.beginProcessExecution(this.isPlayerId(args[0]) ? args[0] : "player");
        return "DEBUG: process execution console opened.";
      case "usb":
        return this.debugCommandUsb(args);
      case "terrain":
      case "tile":
        return this.debugCommandTerrain(args);
      case "hp":
        return this.debugCommandHp(args);
      case "enemyhp1":
      case "aihp1":
      case "hp1":
        return this.debugCommandEnemyHpOne();
      case "damage":
        return this.debugCommandDamage(args);
      case "turn":
        return this.debugCommandTurn(args);
      case "promote":
      case "promote-mecha":
        return this.debugCommandPromote(args);
      case "tower":
      case "building":
        return this.debugCommandTower(args);
      case "castle":
      case "demoncastle":
        return this.debugCommandDemonCastle(args);
      case "save":
        return `DEBUG: ${this.saveMetaProgress()}`;
      case "load":
        return `DEBUG: ${this.loadMetaProgress()}`;
      case "clear":
        this.logs = [];
        this.notify();
        return "DEBUG: log cleared.";
      default:
        return `DEBUG: unknown command "${name}". Type help.`;
    }
  }

  debugSpawnPiece(owner: PlayerId, type: PieceType, coord?: Coord): string {
    const position = coord && this.board.isInside(coord) && !this.board.getPieceAt(coord) ? coord : this.board.findSummonSpot(owner);
    if (!position) return `DEBUG: ${owner} has no empty summon square.`;

    const piece = this.board.addPiece(type, owner, position);
    if (!piece) return `DEBUG: failed to spawn ${type}.`;
    if (piece.type === "iyanaYatsu") piece.specialCooldown = 3;
    if (piece.type === "god") {
      piece.specialCooldown = 2;
      this.emitVisualEffect({ kind: "godSummon", coord: { ...piece.position }, owner });
    }
    if (piece.type === "hyperMecha") piece.mechUpgradeCooldown = 0;

    this.log(`DEBUG: ${owner}に${piece.definition.name}を召喚しました。`, owner);
    this.notify();
    return `DEBUG: spawned ${piece.definition.name} for ${owner} at ${piece.position.x + 1},${piece.position.y + 1}.`;
  }

  debugTriggerAbilityCards(owner: PlayerId, abilityIds: string[] = []): string {
    const offers =
      abilityIds.length > 0
        ? Ability.fixedOffers(abilityIds.filter((id) => ABILITY_DEFINITIONS.some((ability) => ability.id === id)).slice(0, 3))
        : Ability.drawOffers(3, 0);
    if (offers.length === 0) return "DEBUG: no valid ability cards.";

    this.currentPlayer = owner;
    this.selectedPieceId = null;
    this.pendingMechaUpgrade = null;
    this.abilityOffers = offers;
    this.phase = "ability";
    this.log(`DEBUG: ${owner}の能力カードイベントを発生させました。`, owner);
    this.notify();
    return `DEBUG: ability cards => ${offers.map((offer) => offer.name).join(", ")}`;
  }

  debugTriggerMechaUpgrade(owner: PlayerId, upgrade?: HyperMechaUpgrade): string {
    let mecha =
      this.board.getPiece(this.selectedPieceId)?.owner === owner && this.board.getPiece(this.selectedPieceId)?.type === "hyperMecha"
        ? this.board.getPiece(this.selectedPieceId)
        : this.board.getPieces(owner).find((piece) => piece.type === "hyperMecha");

    if (!mecha) {
      this.debugSpawnPiece(owner, "hyperMecha");
      mecha = this.board.getPieces(owner).find((piece) => piece.type === "hyperMecha");
    }
    if (!mecha) return `DEBUG: failed to prepare ${owner} hyper mecha.`;

    const selectedUpgrade = upgrade ?? this.drawHyperMechaUpgrade(mecha);
    if (!this.isUpgradeAvailableForMecha(mecha, selectedUpgrade)) {
      return `DEBUG: ${MECHA_UPGRADE_LABELS[selectedUpgrade]} is ${this.describeMechaUpgradeRequirement(selectedUpgrade)}.`;
    }
    if (owner === "ai") {
      this.applyHyperMechaUpgrade(mecha, selectedUpgrade);
      mecha.mechUpgradeCooldown = 3;
      this.notify();
      return `DEBUG: AI mecha gained ${MECHA_UPGRADE_LABELS[selectedUpgrade]}.`;
    }

    this.currentPlayer = owner;
    this.selectedPieceId = null;
    this.abilityOffers = [];
    this.pendingMechaUpgrade = { pieceId: mecha.id, upgrade: selectedUpgrade };
    this.phase = "mechaUpgrade";
    this.log(`DEBUG: ${this.getPieceDisplayName(mecha)}の強化カードイベントを発生させました。`, owner);
    this.notify();
    return `DEBUG: mecha upgrade card => ${MECHA_UPGRADE_LABELS[selectedUpgrade]}`;
  }

  private debugCommandSpawn(args: string[]): string {
    let owner: PlayerId = "player";
    let cursor = 0;
    if (this.isPlayerId(args[0])) {
      owner = args[0];
      cursor = 1;
    }

    const type = args[cursor];
    if (!this.isPieceType(type)) return "DEBUG: usage spawn [player|ai] <pieceType> [x y]";
    const coord = this.parseDebugCoord(args[cursor + 1], args[cursor + 2]);
    return this.debugSpawnPiece(owner, type, coord);
  }

  private debugCommandCards(args: string[]): string {
    let owner: PlayerId = "player";
    let ids = args;
    if (this.isPlayerId(args[0])) {
      owner = args[0];
      ids = args.slice(1);
    }
    return this.debugTriggerAbilityCards(owner, ids);
  }

  private debugCommandMechaUpgrade(args: string[]): string {
    let owner: PlayerId = "player";
    let cursor = 0;
    if (this.isPlayerId(args[0])) {
      owner = args[0];
      cursor = 1;
    }

    const upgrade = args[cursor];
    if (upgrade && upgrade !== "random" && !this.isHyperMechaUpgrade(upgrade)) {
      return "DEBUG: usage mecha [player|ai] [random|kineticBlade|simulator|usbProMax|totalAnnihilation|armorPurge|electroAnchor|reactorRampage|quantumBackup|satelliteAim|processExecution]";
    }
    return this.debugTriggerMechaUpgrade(owner, this.isHyperMechaUpgrade(upgrade) ? upgrade : undefined);
  }

  private debugCommandUsb(args: string[]): string {
    let owner: PlayerId = "player";
    let countToken = args[0];
    if (this.isPlayerId(args[0])) {
      owner = args[0];
      countToken = args[1];
    }
    const count = this.parseDebugInt(countToken, 1);
    this.mechFusionTickets[owner] = Math.max(0, this.mechFusionTickets[owner] + count);
    this.log(`DEBUG: ${owner}のUSBチャンスを${count}増やしました。`, owner);
    this.notify();
    return `DEBUG: ${owner} USB tickets => ${this.mechFusionTickets[owner]}.`;
  }

  private debugCommandTerrain(args: string[]): string {
    const terrain = args.find((arg) => this.isTerrainType(arg));
    if (!this.isTerrainType(terrain)) return "DEBUG: usage terrain <heal|trap|warp|summon|divine|lava|curse> [count] [player|ai]";
    const owner = args.find((arg) => this.isPlayerId(arg)) as PlayerId | undefined;
    const countToken = args.find((arg) => /^\d+$/.test(arg));
    const count = this.parseDebugInt(countToken, 1);
    const placed = terrain === "warp" ? this.placeWarpPair(count, owner ?? this.currentPlayer) : this.placeTerrain(terrain, count, owner ?? this.currentPlayer);
    this.log(`DEBUG: ${terrain}マスを${placed}個生成しました。`, owner ?? "system");
    this.notify();
    return `DEBUG: placed ${placed} ${terrain} terrain.`;
  }

  private debugCommandHp(args: string[]): string {
    const owner = this.isPlayerId(args[0]) ? args[0] : undefined;
    if (!owner) return "DEBUG: usage hp <player|ai> <value>";
    const value = this.parseDebugInt(args[1], this.bases[owner].hp);
    this.bases[owner].hp = Math.max(0, Math.min(this.bases[owner].maxHp, value));
    this.checkVictory();
    this.notify();
    return `DEBUG: ${owner} HP => ${this.bases[owner].hp}/${this.bases[owner].maxHp}.`;
  }

  private debugCommandEnemyHpOne(): string {
    const before = this.bases.ai.hp;
    this.bases.ai.hp = 1;
    this.processExecutionHpPercent.ai = this.getBaseHpPercent("ai");
    if (before > 1) {
      this.emitVisualEffect({ kind: "baseDamage", owner: "ai", amount: before - 1 });
    }
    this.log("DEBUG: 相手HPを強制的に1にしました。", "danger");
    this.notify();
    return `DEBUG: enemy HP forced to 1/${this.bases.ai.maxHp}.`;
  }

  private debugCommandDamage(args: string[]): string {
    const owner = this.isPlayerId(args[0]) ? args[0] : undefined;
    if (!owner) return "DEBUG: usage damage <player|ai> <amount>";
    const amount = this.parseDebugInt(args[1], 10);
    this.damageBase(owner, amount);
    this.notify();
    return `DEBUG: damaged ${owner} base by ${amount}.`;
  }

  private debugCommandTurn(args: string[]): string {
    const owner = this.isPlayerId(args[0]) ? args[0] : "player";
    this.beginTurn(owner);
    return `DEBUG: began ${owner} turn.`;
  }

  private debugCommandPromote(args: string[]): string {
    const owner = this.isPlayerId(args[0]) ? args[0] : "player";
    const mecha = this.board.getPieces(owner).find((piece) => piece.type === "hyperMecha");
    if (!mecha) return `DEBUG: ${owner} has no hyper mecha.`;
    mecha.mechaKillCount = Math.max(mecha.mechaKillCount, 5);
    this.promoteHyperMecha(mecha);
    this.notify();
    return `DEBUG: promoted ${owner} mecha.`;
  }

  private debugCommandDemonCastle(args: string[]): string {
    const subcommand = args[0] ?? "start";
    const ensureStarted = () => {
      if (!this.isDemonCastleRun()) {
        this.demonCastleUnlocked = true;
        this.unlockedHeroIds.add("demonVolunteer");
        this.startDemonCastleRunWithHero(this.selectedHeroId ?? "demonVolunteer");
      }
    };

    if (subcommand === "start") {
      ensureStarted();
      return "DEBUG: started Demon Castle.";
    }

    if (subcommand === "next" || subcommand === "+1") {
      ensureStarted();
      return this.debugJumpTowerFloor(Math.min(DEMON_CASTLE_MAX_FLOOR, this.towerRun.floor + 1));
    }

    if (subcommand === "+5" || subcommand === "skip5") {
      ensureStarted();
      return this.debugJumpTowerFloor(Math.min(DEMON_CASTLE_MAX_FLOOR, this.towerRun.floor + 5));
    }

    if (subcommand === "floor") {
      ensureStarted();
      const floor = Math.max(1, Math.min(DEMON_CASTLE_MAX_FLOOR, this.parseDebugInt(args[1], this.towerRun.floor || 1)));
      return this.debugJumpTowerFloor(floor);
    }

    if (/^\d+$/.test(subcommand)) {
      ensureStarted();
      const floor = Math.max(1, Math.min(DEMON_CASTLE_MAX_FLOOR, this.parseDebugInt(subcommand, this.towerRun.floor || 1)));
      return this.debugJumpTowerFloor(floor);
    }

    if (subcommand === "clear") {
      ensureStarted();
      this.completeTowerFloor();
      this.notify();
      return "DEBUG: cleared current Demon Castle floor.";
    }

    if (subcommand === "boss") {
      ensureStarted();
      this.resolveTowerBossStartOfTurn();
      this.notify();
      return "DEBUG: triggered Demon Castle boss event.";
    }

    return "DEBUG: usage castle [start|next|+5|floor|clear|boss] [floor]";
  }

  private debugCommandTower(args: string[]): string {
    const subcommand = args[0] ?? "start";
    if (subcommand === "start") {
      this.startTowerRunWithHero(this.selectedHeroId ?? "uesugiKenshin");
      return "DEBUG: started Thirty Building.";
    }

    if (subcommand === "next" || subcommand === "+1") {
      return this.debugJumpTowerFloor(Math.min(TOWER_MAX_FLOOR, (this.towerRun.active ? this.towerRun.floor : 0) + 1));
    }

    if (subcommand === "+5" || subcommand === "skip5") {
      return this.debugJumpTowerFloor(Math.min(TOWER_MAX_FLOOR, (this.towerRun.active ? this.towerRun.floor : 0) + 5));
    }

    if (subcommand === "floor") {
      const floor = Math.max(1, Math.min(TOWER_MAX_FLOOR, this.parseDebugInt(args[1], this.towerRun.floor || 1)));
      return this.debugJumpTowerFloor(floor);
    }

    if (/^\d+$/.test(subcommand)) {
      const floor = Math.max(1, Math.min(TOWER_MAX_FLOOR, this.parseDebugInt(subcommand, this.towerRun.floor || 1)));
      return this.debugJumpTowerFloor(floor);
    }

    if (subcommand === "clear") {
      if (!this.towerRun.active) return "DEBUG: tower is not active.";
      this.completeTowerFloor();
      this.notify();
      return "DEBUG: cleared current tower floor.";
    }

    if (subcommand === "boss") {
      if (!this.towerRun.active) return "DEBUG: tower is not active.";
      this.resolveTowerBossStartOfTurn();
      this.notify();
      return "DEBUG: triggered tower boss event.";
    }

    return "DEBUG: usage tower [start|next|+5|floor|clear|boss] [floor]";
  }

  private debugJumpTowerFloor(floor: number): string {
      if (!this.towerRun.active) {
        this.gameMode = "thirtyBuilding";
        this.towerRun.active = true;
        this.towerRun.maxFloor = TOWER_MAX_FLOOR;
        this.bases.player.maxHp = Math.max(this.bases.player.maxHp, 125);
        this.bases.player.hp = this.bases.player.maxHp;
      }
      this.setupTowerFloor(floor);
      this.currentPlayer = "player";
      this.initiativeFirstPlayer = "player";
      this.beginTurn("player");
      this.notify();
      return `DEBUG: tower floor => ${floor}F.`;
  }

  private parseDebugCoord(xToken?: string, yToken?: string): Coord | undefined {
    if (!xToken || !yToken) return undefined;
    const x = Number(xToken);
    const y = Number(yToken);
    if (!Number.isInteger(x) || !Number.isInteger(y)) return undefined;
    return { x: x - 1, y: y - 1 };
  }

  private parseDebugInt(token: string | undefined, fallback: number): number {
    const parsed = Number(token);
    return Number.isFinite(parsed) ? Math.trunc(parsed) : fallback;
  }

  private isPlayerId(value: string | undefined): value is PlayerId {
    return value === "player" || value === "ai";
  }

  private isPieceType(value: string | undefined): value is PieceType {
    return !!value && value in PIECE_DEFINITIONS;
  }

  private isHyperMechaUpgrade(value: string | undefined): value is HyperMechaUpgrade {
    return (
      value === "kineticBlade" ||
      value === "simulator" ||
      value === "usbProMax" ||
      value === "totalAnnihilation" ||
      value === "armorPurge" ||
      value === "electroAnchor" ||
      value === "reactorRampage" ||
      value === "quantumBackup" ||
      value === "satelliteAim" ||
      value === "processExecution"
    );
  }

  private isTerrainType(value: string | undefined): value is TerrainType {
    return value === "heal" || value === "trap" || value === "warp" || value === "summon" || value === "divine" || value === "lava" || value === "curse";
  }

  private getBaseHpPercent(owner: PlayerId): number {
    return Math.max(10, Math.min(1000, Math.round((this.bases[owner].hp / this.bases[owner].maxHp) * 100)));
  }

  private getPiecesInArea(origin: Coord, areaSize: number): Piece[] {
    return this.board.getPieces().filter((piece) => this.pieceIntersectsArea(piece, origin, areaSize));
  }

  private pieceIntersectsArea(piece: Piece, origin: Coord, areaSize: number): boolean {
    return this.board.getFootprintCoords(piece).some(
      (coord) => coord.x >= origin.x && coord.x < origin.x + areaSize && coord.y >= origin.y && coord.y < origin.y + areaSize,
    );
  }

  private isSatelliteTargetAllowed(origin: Coord, areaSize: number): boolean {
    if (!this.board.isAreaInside(origin, areaSize)) return false;
    const protectedKings = this.board.getPieces().filter((piece) => piece.type === "king");
    for (const king of protectedKings) {
      for (let y = origin.y; y < origin.y + areaSize; y += 1) {
        for (let x = origin.x; x < origin.x + areaSize; x += 1) {
          if (chebyshevDistance({ x, y }, king.position) <= 1) return false;
        }
      }
    }
    return true;
  }

  isFusionCandidate(piece: Piece, owner: PlayerId): boolean {
    if (piece.owner !== owner) return false;
    if (piece.type === "king" || piece.type === "hyperMecha") return false;
    return this.isOwnTerritory(owner, piece.position);
  }

  getMechaUpgradeLabels(piece: Piece): string[] {
    return piece.mechUpgrades.map((upgrade) => MECHA_UPGRADE_LABELS[upgrade]);
  }

  grantDoubleAction(owner: PlayerId, sourceName: string): string {
    const candidates = this.board.getPieces(owner).filter((piece) => piece.canAct && piece.type !== "turret");
    const piece = candidates[Math.floor(Math.random() * candidates.length)];
    if (!piece) return `${sourceName}: 対象にできるコマがありません。`;
    piece.extraActions += 1;
    return `${sourceName}: ${this.getPieceDisplayName(piece)}が追加行動を得ました。`;
  }

  tryConvertEnemy(owner: PlayerId, chance: number): string {
    const enemy = this.getOpponent(owner);
    const candidates = this.board
      .getPieces(enemy)
      .filter((piece) => piece.definition.score <= 4 && piece.type !== "king")
      .sort((a, b) => a.definition.score - b.definition.score);

    const target = candidates[0];
    if (!target) return "駒の反乱: 対象がいません。";
    if (Math.random() > chance) return `駒の反乱: ${target.definition.name}は踏みとどまりました。`;

    target.owner = owner;
    return `駒の反乱: ${target.definition.name}が寝返りました。`;
  }

  canUseBadMouthCommand(owner: PlayerId): boolean {
    return (
      this.phase === "action" &&
      this.currentPlayer === owner &&
      !this.badMouthCommandUsed[owner] &&
      this.board.getPieces(this.getOpponent(owner)).some((piece) => piece.type === "iyanaYatsu")
    );
  }

  useBadMouthCommand(owner: PlayerId): void {
    if (!this.canUseBadMouthCommand(owner)) return;
    this.badMouthCommandUsed[owner] = true;
    const count = this.banishIyanaYatsu(owner, 1);
    this.log(
      count > 0
        ? "罵詈雑言コマンド: いやなやつが泣きべそをかいて逃げました。"
        : "罵詈雑言コマンド: 叫び先がありませんでした。",
      owner,
    );
    this.notify();
  }

  banishIyanaYatsu(owner: PlayerId, limit = Number.POSITIVE_INFINITY): number {
    const enemy = this.getOpponent(owner);
    const targets = this.board.getPieces(enemy).filter((piece) => piece.type === "iyanaYatsu").slice(0, limit);
    for (const target of targets) {
      this.destroyPiece(target.id, "banish", owner);
    }
    return targets.length;
  }

  placeTerrain(type: TerrainType, count: number, owner: PlayerId): number {
    let placed = 0;
    let attempts = 0;
    while (placed < count && attempts < 80) {
      attempts += 1;
      const coord = this.board.randomEmptyCoord(owner);
      if (coord && this.board.addTerrain(type, coord, owner)) placed += 1;
    }
    return placed;
  }

  placeWarpPair(count: number, owner: PlayerId): number {
    const desired = Math.max(2, count % 2 === 0 ? count : count + 1);
    let placed = 0;

    for (let i = 0; i < desired / 2; i += 1) {
      const a = this.board.randomEmptyCoord(owner);
      const b = this.board.randomEmptyCoord(this.getOpponent(owner));
      if (!a || !b) continue;
      const tileA = this.board.addTerrain("warp", a, owner);
      const tileB = this.board.addTerrain("warp", b, owner);
      if (!tileA || !tileB) continue;
      tileA.pairedId = tileB.id;
      tileB.pairedId = tileA.id;
      placed += 2;
    }

    return placed;
  }

  destroyPiece(
    pieceId: string,
    source: "capture" | "turret" | "god" | "lava" | "curse" | "banish" | "annihilation" | "satellite" | "demonAttack",
    attackerOwner?: PlayerId,
  ): void {
    const piece = this.board.removePiece(pieceId);
    if (!piece) return;

    if (piece.type === "hyperMecha" && piece.mechaTier >= 2 && piece.hasMechUpgrade("quantumBackup")) {
      piece.mechUpgrades = piece.mechUpgrades.filter((upgrade) => upgrade !== "quantumBackup");
      const landing = this.board.findNearestPlacementForFootprint(piece.position, piece.footprintSize);
      if (landing) {
        piece.position = landing;
        piece.hp = piece.maxHp;
        this.board.pieces.set(piece.id, piece);
        this.emitVisualEffect({ kind: "fusion", coord: { ...piece.position }, owner: piece.owner });
        this.log("量子バックアップが発動。ハイパーメカが消滅を巻き戻しました。", piece.owner);
        return;
      }
    }

    if (source !== "banish") {
      this.emitVisualEffect({ kind: "combat", coord: { ...piece.position }, owner: attackerOwner ?? this.getOpponent(piece.owner) });
    }

    if (piece.type === "iyanaYatsu" && source !== "banish" && source !== "annihilation" && source !== "satellite" && source !== "demonAttack") {
      this.resolveIyanaYatsuDefeat(piece, attackerOwner ?? this.getOpponent(piece.owner));
    }

    if (piece.type === "king") {
      this.winner = this.getOpponent(piece.owner);
      this.phase = "gameover";
      this.log(`${piece.definition.name}が倒されました。`, "danger");
    }

    if (piece.type === "god") {
      this.board.getPieces(piece.owner).forEach((ally) => {
        ally.weakenedTurns = Math.max(ally.weakenedTurns, 2);
      });
      this.log("神が倒れ、味方全体が弱体化しました。", "danger");
    }

    if (source !== "capture" && source !== "banish") {
      this.board.lastDefeatedEnemyType = piece.type;
    }
  }

  isSquareDangerous(coord: Coord, owner: PlayerId): boolean {
    const enemy = this.getOpponent(owner);
    const enemyTurretThreat = this.board
      .getPieces(enemy)
      .some((piece) => piece.type === "turret" && Math.max(Math.abs(piece.position.x - coord.x), Math.abs(piece.position.y - coord.y)) <= 2);
    if (enemyTurretThreat) return true;

    return this.board
      .getPieces(enemy)
      .some((piece) => this.board.getLegalMoves(piece).some((move) => move.to.x === coord.x && move.to.y === coord.y));
  }

  private afterPieceAction(piece: Piece): void {
    if (this.checkVictory()) {
      this.notify();
      return;
    }

    if (piece.extraActions > 0) {
      piece.extraActions -= 1;
      this.selectedPieceId = null;
      this.log(`${this.getPieceDisplayName(piece)}はまだ追加行動できます。`, piece.owner);
      this.notify();
      if (piece.owner === "ai") {
        this.aiTimer = window.setTimeout(() => this.ai.takeTurn(), 520);
      }
      return;
    }

    this.finishAction();
  }

  private resolveCaptureSideEffects(captured: Piece, attackerOwner: PlayerId): void {
    if (captured.type === "king") {
      this.winner = this.getOpponent(captured.owner);
      this.phase = "gameover";
    }

    if (captured.type === "iyanaYatsu") {
      this.resolveIyanaYatsuDefeat(captured, attackerOwner);
    }

    if (captured.type === "god") {
      this.board.getPieces(captured.owner).forEach((ally) => {
        ally.weakenedTurns = Math.max(ally.weakenedTurns, 2);
      });
      this.log("神が討たれ、眷属の力が霧散しました。", "danger");
    }
  }

  private resolveIyanaYatsuDefeat(piece: Piece, victimOwner: PlayerId): void {
    const king = this.board.getKing(victimOwner);
    if (!king) return;

    king.stunnedTurns = Math.max(king.stunnedTurns, 1);
    king.movePenalty += 1;

    const landing = this.board.findNearestEmptyTo(king.position);
    if (landing) {
      const nuisance = this.board.addPiece("iyanaYatsu", piece.owner, landing);
      if (nuisance) nuisance.specialCooldown = 3;
    }

    const taunts = ["うんちぷり～ん", "このおしり、ふいてないよ", "ほれ、匂ってみ？"];
    const taunt = taunts[Math.floor(Math.random() * taunts.length)];
    this.log(`いやなやつが相手陣地へ逃げ込み、王将にうんちを投げつけました。「${taunt}」王将は次の行動が制限されます。`, "danger");
  }

  private completeHyperMechaFusion(owner: PlayerId, pieceIds: string[], consumesTicket: boolean): Piece | null {
    if (!this.canCreateHyperMecha(owner, consumesTicket)) return null;

    const pieces = pieceIds
      .map((id) => this.board.getPiece(id))
      .filter((piece): piece is Piece => piece !== undefined)
      .filter((piece) => this.isFusionCandidate(piece, owner));

    if (pieces.length < 5) return null;

    if (consumesTicket && this.mechFusionTickets[owner] > 0) {
      this.mechFusionTickets[owner] -= 1;
    }

    const position = { ...pieces[0].position };
    for (const piece of pieces.slice(0, 5)) {
      this.board.removePiece(piece.id);
    }

    const mecha = this.board.addPiece("hyperMecha", owner, position);
    if (!mecha) return null;
    mecha.mechUpgradeCooldown = 3;
    mecha.mechaKillCount = 0;
    mecha.mechaTier = 1;
    mecha.hp = mecha.maxHp;
    this.emitVisualEffect({ kind: "fusion", coord: { ...mecha.position }, owner });
    this.log("5体のコマが融合し、ハイパーメカ一型が起動しました。", owner);
    return mecha;
  }

  private createPendingHyperMechaUpgrade(owner: PlayerId): PendingMechaUpgrade | null {
    const mecha = this.board
      .getPieces(owner)
      .filter((piece) => piece.type === "hyperMecha" && piece.mechUpgradeCooldown <= 0)
      .sort((a, b) => a.id.localeCompare(b.id))[0];

    if (!mecha) return null;
    return {
      pieceId: mecha.id,
      upgrade: this.drawHyperMechaUpgrade(mecha),
    };
  }

  private processHyperMechaUpgrades(owner: PlayerId): void {
    for (const mecha of this.board.getPieces(owner).filter((piece) => piece.type === "hyperMecha")) {
      if (mecha.mechUpgradeCooldown > 0) continue;
      const upgrade = this.drawHyperMechaUpgrade(mecha);
      this.applyHyperMechaUpgrade(mecha, upgrade);
      mecha.mechUpgradeCooldown = 3;
    }
  }

  private drawHyperMechaUpgrade(mecha: Piece): HyperMechaUpgrade {
    const weighted: HyperMechaUpgrade[] = [];
    if (!mecha.hasMechUpgrade("kineticBlade")) weighted.push(...Array<HyperMechaUpgrade>(5).fill("kineticBlade"));
    if (!mecha.hasMechUpgrade("simulator")) weighted.push(...Array<HyperMechaUpgrade>(4).fill("simulator"));
    weighted.push(...Array<HyperMechaUpgrade>(3).fill("usbProMax"));

    if (mecha.mechaTier === 1) {
      if (!mecha.hasMechUpgrade("totalAnnihilation")) weighted.push("totalAnnihilation");
    } else {
      if (!mecha.hasMechUpgrade("armorPurge")) weighted.push(...Array<HyperMechaUpgrade>(4).fill("armorPurge"));
      if (!mecha.hasMechUpgrade("electroAnchor")) weighted.push(...Array<HyperMechaUpgrade>(4).fill("electroAnchor"));
      if (!mecha.hasMechUpgrade("reactorRampage")) weighted.push(...Array<HyperMechaUpgrade>(3).fill("reactorRampage"));
      if (!mecha.hasMechUpgrade("quantumBackup")) weighted.push(...Array<HyperMechaUpgrade>(2).fill("quantumBackup"));
      if (!mecha.hasMechUpgrade("satelliteAim")) weighted.push("satelliteAim");
      if (!this.isTowerBossBattle()) weighted.push(...Array<HyperMechaUpgrade>(2).fill("processExecution"));
    }

    return weighted[Math.floor(Math.random() * weighted.length)] ?? "usbProMax";
  }

  private applyHyperMechaUpgrade(mecha: Piece, upgrade: HyperMechaUpgrade): boolean {
    if (!this.isUpgradeAvailableForMecha(mecha, upgrade)) {
      this.log(`${MECHA_UPGRADE_LABELS[upgrade]}は${this.describeMechaUpgradeRequirement(upgrade)}です。`, mecha.owner);
      return false;
    }

    if (upgrade === "usbProMax") {
      this.mechFusionTickets[mecha.owner] += 1;
      this.log("ハイパーメカ強化: 最強USB PRO MAX。もう一度ハイパーメカを作るチャンスを得ました。", mecha.owner);
      return false;
    }

    if (upgrade === "processExecution") {
      if (mecha.owner === "player") {
        this.beginProcessExecution(mecha.owner);
        return true;
      }
      this.setProcessExecutionHp("ai", 150);
      this.setProcessExecutionHp("player", 80);
      this.log("AIプロセス実行: HPプロセスを書き換えました。", "danger");
      return false;
    }

    if (upgrade === "armorPurge") {
      mecha.extraActions += 1;
      mecha.hp = Math.max(1, mecha.hp - 1);
    }

    if (upgrade === "reactorRampage") {
      mecha.hp = Math.max(1, mecha.hp - 1);
    }

    if (!mecha.hasMechUpgrade(upgrade)) {
      mecha.mechUpgrades.push(upgrade);
    }

    this.log(`ハイパーメカ強化: ${MECHA_UPGRADE_LABELS[upgrade]}を獲得しました。`, mecha.owner);
    return false;
  }

  private isUpgradeAvailableForMecha(mecha: Piece, upgrade: HyperMechaUpgrade): boolean {
    if (upgrade === "processExecution" && this.isTowerBossBattle()) return false;
    if (MECHA_TIER_TWO_ONLY_UPGRADES.includes(upgrade)) return mecha.mechaTier >= 2;
    if (MECHA_TIER_ONE_ONLY_UPGRADES.includes(upgrade)) return mecha.mechaTier === 1;
    return true;
  }

  private describeMechaUpgradeRequirement(upgrade: HyperMechaUpgrade): string {
    if (upgrade === "processExecution" && this.isTowerBossBattle()) return "サーティビルディングのボス戦では無効";
    if (MECHA_TIER_TWO_ONLY_UPGRADES.includes(upgrade)) return "ハイパーメカⅡ型専用";
    if (MECHA_TIER_ONE_ONLY_UPGRADES.includes(upgrade)) return "ハイパーメカ一型専用";
    return "使用可能";
  }

  private isTowerBossBattle(): boolean {
    return this.towerRun.active && this.towerRun.isBossFloor;
  }

  private isDemonCastleRun(): boolean {
    return this.towerRun.active && this.towerRun.mode === "demonCastle";
  }

  private getDemonCastleExpToNext(level: number): number {
    return 45 + level * 25;
  }

  private grantDemonCastleExp(clearedFloor: number): void {
    if (!this.isDemonCastleRun()) return;

    const boss = DEMON_CASTLE_BOSSES[clearedFloor];
    const gained = boss ? 90 + clearedFloor * 8 : 26 + clearedFloor * 3;
    this.towerRun.playerExp += gained;
    this.log(`経験値 +${gained}。魔王城レベル ${this.towerRun.playerLevel} / EXP ${this.towerRun.playerExp}/${this.towerRun.playerExpToNext}`, "player");

    while (this.towerRun.playerExp >= this.towerRun.playerExpToNext) {
      this.towerRun.playerExp -= this.towerRun.playerExpToNext;
      this.towerRun.playerLevel += 1;
      this.towerRun.playerExpToNext = this.getDemonCastleExpToNext(this.towerRun.playerLevel);
      this.bases.player.maxHp += 18;
      this.bases.player.hp = Math.min(this.bases.player.maxHp, this.bases.player.hp + 28);
      this.log(`レベルアップ！ Lv.${this.towerRun.playerLevel} / 共有HP最大値+18。`, "player");
      if (this.towerRun.playerLevel % 5 === 0) {
        this.log(`Lv.${this.towerRun.playerLevel}到達。毎ターンの能力カード候補が${this.getAbilityOfferCount("player")}枚に増えました。`, "player");
      }
    }
  }

  private resolveDemonCastleAllyAttack(): void {
    if (!this.towerRun.demonAttackUnlocked || this.towerRun.demonAttackRank <= 0) return;

    const hits = this.towerRun.demonAttackRank;
    const power = Math.max(1, this.towerRun.demonAttackPower);
    let defeated = 0;
    for (let index = 0; index < hits; index += 1) {
      const target = this.board
        .getPieces("ai")
        .filter((piece) => piece.type !== "king")
        .sort((a, b) => b.definition.score - a.definition.score)[0];
      if (target) {
        this.destroyPiece(target.id, "demonAttack", "player");
        this.emitVisualEffect({ kind: "combat", coord: { ...target.position }, owner: "player" });
        defeated += 1;
      } else {
        this.damageBase("ai", power);
      }
    }

    const baseDamage = power * hits;
    this.damageBase("ai", baseDamage);
    this.towerRun.bossQuote = `魔人攻撃 ${hits}回 / 威力${power}`;
    this.log(`魔人攻撃: ${hits}回発動。敵コマ${defeated}体を討ち、敵HPへ${baseDamage}ダメージ。`, "player");
  }

  private recordMechaKills(piece: Piece, count: number): void {
    if (piece.type !== "hyperMecha" || count <= 0 || piece.mechaTier >= 2) return;
    piece.mechaKillCount += count;

    if (piece.mechaKillCount >= 5) {
      this.promoteHyperMecha(piece);
    }
  }

  private promoteHyperMecha(mecha: Piece): void {
    const placement = this.board.findNearestPlacementForFootprint(mecha.position, 2, mecha.id);
    if (!placement) {
      this.log("ハイパーメカⅡ型への変身スペースが足りません。周囲を空けると次の撃破で再試行します。", mecha.owner);
      mecha.mechaKillCount = 4;
      return;
    }

    mecha.position = placement;
    mecha.mechaTier = 2;
    mecha.mechUpgrades = mecha.mechUpgrades.filter((upgrade) => !MECHA_TIER_ONE_ONLY_UPGRADES.includes(upgrade));
    mecha.maxHp = Math.max(mecha.maxHp, 8);
    mecha.hp = mecha.maxHp;
    this.emitVisualEffect({ kind: "mechaTransform", coord: { ...mecha.position }, owner: mecha.owner });
    this.log("累計5撃破達成。ハイパーメカ一型が4マス占有のハイパーメカⅡ型へ変身しました。", mecha.owner);
  }

  private resolveKineticBlade(owner: PlayerId, center: Coord): number {
    const enemy = this.getOpponent(owner);
    const targets = this.board
      .getPieces(enemy)
      .filter((piece) => adjacentDistance(piece.position, center) <= 1 && !(piece.position.x === center.x && piece.position.y === center.y));

    for (const target of targets) {
      this.destroyPiece(target.id, "capture", owner);
    }

    if (targets.length > 0) {
      this.log(`キネティックブレイドが隣接する敵${targets.length}体を巻き込みました。`, owner);
    }

    return targets.length;
  }

  private isOwnTerritory(owner: PlayerId, coord: Coord): boolean {
    return owner === "player" ? coord.y >= this.board.size - 3 : coord.y <= 2;
  }

  private resolvePawnEvolution(piece: Piece): void {
    const inEnemyCamp = piece.owner === "player" ? piece.position.y <= 2 : piece.position.y >= this.board.size - 3;
    if (piece.type !== "pawn" || !inEnemyCamp || !this.hasPassive(piece.owner, "pawnEvolution")) return;
    const newType = this.board.getImplementedEvolutionType();
    const evolved = this.board.replacePiece(piece, newType);
    this.selectedPieceId = evolved.id;
    this.log(`歩兵が${evolved.definition.name}へ進化しました。`, evolved.owner);
  }

  private completeTowerFloor(): void {
    const clearedFloor = this.towerRun.floor;
    const isDemonCastle = this.isDemonCastleRun();
    this.towerRun.clearedFloors = Math.max(this.towerRun.clearedFloors, clearedFloor);
    this.winner = null;
    this.phase = "setup";
    this.selectedPieceId = null;

    const difficultyTier = isDemonCastle ? getDemonCastleDifficultyTier(clearedFloor) : getTowerDifficultyTier(clearedFloor);
    const smallRecovery = isDemonCastle
      ? 10 + difficultyTier * 3 + Math.floor(this.towerRun.playerLevel / 2)
      : 8 + difficultyTier * 2 + this.countTowerReward("階層修理班") * 5;
    this.healBase("player", smallRecovery);
    this.towerRun.lastFloorResult = `${clearedFloor}F cleared / 共有HP +${smallRecovery}`;
    this.log(`${clearedFloor}Fクリア。共有HPが${smallRecovery}回復しました。`, "player");
    if (isDemonCastle) this.grantDemonCastleExp(clearedFloor);

    if (clearedFloor % 5 === 0) {
      const mediumRecovery = isDemonCastle ? 30 + difficultyTier * 7 : 22 + difficultyTier * 4;
      this.healBase("player", mediumRecovery);
      if (isDemonCastle) {
        this.resolveDemonCastleBossReward(clearedFloor);
      } else {
        const reward = this.grantTowerReward();
        this.log(`中ボス撃破報酬: ${reward.name} - ${reward.description}`, "player");
      }
      this.log(`5階層ボーナス。共有HPがさらに${mediumRecovery}回復しました。`, "player");
    }

    if (!isDemonCastle && clearedFloor % 10 === 0) {
      const restSpot = this.pickTowerRestSpot();
      this.towerRun.lastRestSpot = restSpot;
      this.bases.player.hp = this.bases.player.maxHp;
      this.log(`休憩スポット: ${restSpot.name} ☆${restSpot.rarity}。${restSpot.description}`, "system");
    }

    if (clearedFloor >= this.towerRun.maxFloor) {
      this.winner = "player";
      this.phase = "gameover";
      if (isDemonCastle) {
        this.towerRun.bossScenario = DEMON_CASTLE_BOSSES[clearedFloor]?.scenarioAfter ?? "乗っ取られ魔王城は解放されました。";
        this.log("乗っ取られ魔王城を完全制覇。玉座の呪いが解けました。", "player");
        this.log("真魔王ボランティアを撃破。魔王城は取り戻されました。", "system");
        return;
      }
      this.towerRun.conquestEventUnlocked = true;
      this.unlockedHeroIds.add("demonVolunteer");
      this.towerConquered = true;
      this.demonCastleUnlocked = true;
      this.persistMetaProgress("完全制覇を自動セーブしました。");
      this.log("サーティビルディング完全制覇。屋上の風がやたら気持ちいいです。", "player");
      this.log("魔王ボランティアがメインキャラクターとして使用可能になりました。乗っ取られ魔王城への挑戦権も開放されています。", "system");
      return;
    }

    const nextFloor = isDemonCastle ? this.getNextDemonCastleFloor(clearedFloor) : clearedFloor + 1;
    this.setupTowerFloor(nextFloor);
    this.currentPlayer = "player";
    this.initiativeFirstPlayer = "player";
    this.beginTurn("player");
  }

  private resolveDemonCastleBossReward(clearedFloor: number): void {
    const boss = DEMON_CASTLE_BOSSES[clearedFloor];
    if (!boss) return;

    this.towerRun.bossScenario = boss.scenarioAfter;
    this.log(boss.scenarioAfter, "system");
    if (boss.demonAttackGain <= 0) {
      this.log(`${boss.name}は仲間になりませんでした。魔人攻撃の強化はありません。`, "danger");
      return;
    }

    this.towerRun.demonAttackUnlocked = true;
    this.towerRun.demonAttackRank += boss.demonAttackGain;
    this.towerRun.demonAttackPower = 8 + this.towerRun.demonAttackRank * 5;
    this.towerRun.permanentRewards.push(`${boss.name}の魔力`);
    this.log(
      `${boss.name}が協力。魔人攻撃 Rank ${this.towerRun.demonAttackRank} / ${this.towerRun.demonAttackRank}回攻撃 / 威力${this.towerRun.demonAttackPower}になりました。`,
      "player",
    );
  }

  private getNextDemonCastleFloor(clearedFloor: number): number {
    const nextFloor = Math.min(this.towerRun.maxFloor, clearedFloor + 1);
    if (nextFloor >= this.towerRun.maxFloor) return nextFloor;
    if (Math.random() >= 0.18) return nextFloor;

    const elevatorTarget = Math.min(this.towerRun.maxFloor, clearedFloor + 4);
    let target = elevatorTarget;
    for (let floor = nextFloor; floor <= elevatorTarget; floor += 1) {
      if (isDemonCastleBossFloor(floor)) {
        target = floor;
        break;
      }
    }

    if (target <= nextFloor) return nextFloor;
    this.towerRun.elevatorNotice = `古い魔王城エレベーターを発見。${nextFloor}Fから${target}Fへ移動します。ボス階は回避できません。`;
    this.log(this.towerRun.elevatorNotice, "system");
    return target;
  }

  private grantTowerReward() {
    const unowned = TOWER_REWARDS.filter((reward) => !this.towerRun.permanentRewards.includes(reward.name));
    const pool = unowned.length > 0 ? unowned : TOWER_REWARDS;
    const reward = pool[Math.floor(Math.random() * pool.length)];
    this.towerRun.permanentRewards.push(reward.name);

    if (reward.id === "sharedHpFrame") {
      this.bases.player.maxHp += 25;
      this.bases.player.hp += 25;
    } else if (reward.id === "premiumOfferDesk") {
      this.raiseNextOffer("player");
    } else if (reward.id === "emergencyUsb") {
      this.mechFusionTickets.player += 1;
    } else if (reward.id === "towerCurryTicket") {
      this.healBase("player", 35);
    } else if (reward.id === "antiNuisancePoster") {
      this.banishIyanaYatsu("player", 1);
    }

    return reward;
  }

  private countTowerReward(name: string): number {
    return this.towerRun.permanentRewards.filter((reward) => reward === name).length;
  }

  private pickTowerRestSpot(): TowerRestSpot {
    const weighted = TOWER_REST_SPOTS.flatMap((spot) => Array.from({ length: spot.rarity }, () => spot));
    return weighted[Math.floor(Math.random() * weighted.length)] ?? TOWER_REST_SPOTS[0];
  }

  private resolveTowerBossStartOfTurn(): void {
    if (!this.towerRun.active || !this.towerRun.isBossFloor) return;
    if (this.isDemonCastleRun()) {
      this.resolveDemonCastleBossStartOfTurn();
      return;
    }
    const floor = this.towerRun.floor;

    if (floor === 15 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner("風洞転線", "瑞風");
      this.placeWarpPair(2, "ai");
      this.towerRun.bossQuote = "瑞風が線路を組み替えた。";
      this.log("瑞風: 風圧で盤面がつながり、ワープマスが追加されました。", "danger");
      return;
    }

    if (floor === 20 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner("四季回廊", "四季島");
      const terrain: TerrainType[] = ["heal", "trap", "lava", "divine"];
      this.placeTerrain(terrain[this.towerRun.floorTurn % terrain.length], 1, "ai");
      this.healBase("ai", Math.round(this.bases.ai.maxHp * 0.04));
      this.towerRun.bossQuote = "四季島が季節を一つ進めた。";
      this.log("四季島: 季節のマスが増え、ボスHPが少し戻りました。", "danger");
      return;
    }

    if (floor === 25 && this.towerRun.floorTurn % 3 === 0) {
      this.showEnemySkillBanner("七星墜とし", "七星");
      const target = this.board.getPieces("player").find((piece) => piece.type !== "king");
      if (target) this.destroyPiece(target.id, "annihilation", "ai");
      this.damageBase("player", 12);
      this.towerRun.bossQuote = "七星が星を一つ落とした。";
      this.log("七星: 星落とし。王将以外の1体と共有HPに圧がかかりました。", "danger");
      return;
    }

    if (floor === 30) {
      this.resolveKatsudonBossTurn();
      return;
    }

    if (floor === 31) {
      this.resolveDemonVolunteerTurn();
    }
  }

  private resolveKatsudonBossTurn(): void {
    const lowHp = this.bases.ai.hp <= this.bases.ai.maxHp * 0.35;
    const quotes = ["カレーが効いてきただっち！", "横一列いただくだっち！", "まだまだ登れるだっち！"];
    const quote = lowHp ? "うがー！" : quotes[Math.floor(Math.random() * quotes.length)];
    this.towerRun.bossQuote = quote;

    const curryHeal = Math.round(this.bases.ai.maxHp * 0.035);
    this.showEnemySkillBanner(lowHp ? "怒りの大盛りカレー" : "カレー補給", "冒険者カツドン");
    this.healBase("ai", curryHeal);
    this.log(`冒険者カツドン: ${quote} カレーを食べてHPが${curryHeal}回復。`, lowHp ? "danger" : "ai");

    if (this.towerRun.floorTurn % 3 !== 0) return;
    this.showEnemySkillBanner("超究覇斬", "冒険者カツドン");
    const row = this.pickPlayerStrikeRow();
    const targets = this.board
      .getPieces("player")
      .filter((piece) => piece.type !== "king" && this.board.getFootprintCoords(piece).some((coord) => coord.y === row));
    for (const target of targets) {
      this.destroyPiece(target.id, "annihilation", "ai");
    }
    for (let x = 0; x < this.board.size; x += 1) {
      this.emitVisualEffect({ kind: "combat", coord: { x, y: row }, owner: "ai" });
    }
    this.damageBase("player", 30);
    this.log(`超究覇斬！ ${row + 1}段目の王将以外${targets.length}体が消滅し、リーダーに30ダメージ。`, "danger");
  }

  private resolveDemonVolunteerTurn(): void {
    const pattern = this.towerRun.floorTurn % 3;
    if (pattern === 0) {
      this.showEnemySkillBanner("魔王の風", "魔王ボランティア");
      this.damageBase("player", 35);
      this.placeTerrain("curse", 2, "ai");
      this.towerRun.bossQuote = "魔王の風";
      this.log("魔王ボランティア: 魔王の風。共有HPに35ダメージ、呪いマス追加。", "danger");
      return;
    }

    if (pattern === 1) {
      this.showEnemySkillBanner("親切な支配", "魔王ボランティア");
      const targets = this.board.getPieces("player").filter((piece) => piece.type !== "king").slice(0, 2);
      for (const target of targets) {
        target.stunnedTurns = Math.max(target.stunnedTurns, 1);
        this.emitVisualEffect({ kind: "combat", coord: { ...target.position }, owner: "ai" });
      }
      this.towerRun.bossQuote = "親切な支配";
      this.log("魔王ボランティア: 親切な支配。王将以外2体を拘束しました。", "danger");
      return;
    }

    this.showEnemySkillBanner("無償増援", "魔王ボランティア");
    this.addTowerEnemyPiece("iyanaYatsu");
    this.addTowerEnemyPiece("turret");
    this.towerRun.bossQuote = "無償増援";
    this.log("魔王ボランティア: 無償増援。いやな奴とタレットを追加しました。", "danger");
  }

  private resolveDemonCastleBossStartOfTurn(): void {
    const floor = this.towerRun.floor;
    const boss = DEMON_CASTLE_BOSSES[floor];
    if (!boss) return;

    if (floor === 5 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner(boss.skillName, boss.name);
      this.damageBase("player", 14);
      this.placeTerrain("trap", 1, "ai");
      this.towerRun.bossQuote = "アメッサーが城門へ魔雨斧を落とした。";
      this.log("魔人アメッサー: 魔雨斧。共有HPへ14ダメージ、罠マス追加。", "danger");
      return;
    }

    if (floor === 10 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner(boss.skillName, boss.name);
      this.damageBase("player", 18);
      this.placeTerrain("lava", 2, "ai");
      this.towerRun.bossQuote = "シュミットの炉が燃え上がった。";
      this.log("魔人シュミット: 炎魔炉。共有HPへ18ダメージ、溶岩マス追加。", "danger");
      return;
    }

    if (floor === 15 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner(boss.skillName, boss.name);
      this.healBase("ai", Math.round(this.bases.ai.maxHp * 0.04));
      const target = this.board.getPieces("player").find((piece) => piece.type !== "king");
      if (target) {
        target.stunnedTurns = Math.max(target.stunnedTurns, 1);
        this.emitVisualEffect({ kind: "combat", coord: { ...target.position }, owner: "ai" });
      }
      this.towerRun.bossQuote = "秋水が水路で味方の足を止めた。";
      this.log("魔人秋水: 秋水縛り。敵HPを回復し、王将以外1体を拘束。", "danger");
      return;
    }

    if (floor === 20 && this.towerRun.floorTurn % 3 === 0) {
      this.resolveDemonKatsudonTurn(boss.name, boss.skillName);
      return;
    }

    if (floor === 25 && this.towerRun.floorTurn % 2 === 0) {
      this.showEnemySkillBanner(boss.skillName, boss.name);
      this.placeTerrain("trap", 2, "ai");
      this.addTowerEnemyPiece("turret");
      this.damageBase("player", 16);
      this.towerRun.bossQuote = "バルザックが城の予算で罠を増やした。";
      this.log("魔将バルザック: 赤字決算罠。罠とタレット追加、共有HPへ16ダメージ。", "danger");
      return;
    }

    if (floor === 30 && this.towerRun.floorTurn % 3 === 0) {
      this.resolveBushinKatsudonTurn(boss.name, boss.skillName);
      return;
    }

    if (floor === 35) {
      this.resolveGalleonTurn(boss.name, boss.skillName);
      return;
    }

    if (floor === 40) {
      this.resolveTrueDemonVolunteerTurn(boss.name, boss.skillName);
    }
  }

  private resolveDemonKatsudonTurn(name: string, skillName: string): void {
    this.showEnemySkillBanner(skillName, name);
    let totalDamage = 0;
    for (let index = 0; index < 8; index += 1) totalDamage += 1 + Math.floor(Math.random() * 5);
    this.damageBase("player", totalDamage);
    const destroyed = this.destroyPlayerColumns(2);
    this.towerRun.bossQuote = "超究魔人覇斬";
    this.log(`${name}: 超究魔人覇斬。1-5ダメージを8回、合計${totalDamage}ダメージ。縦二列から${destroyed}体消滅。`, "danger");
  }

  private resolveBushinKatsudonTurn(name: string, skillName: string): void {
    this.showEnemySkillBanner(skillName, name);
    let totalDamage = 0;
    for (let index = 0; index < 10; index += 1) totalDamage += 3 + Math.floor(Math.random() * 6);
    this.damageBase("player", totalDamage);
    const columnDestroyed = this.destroyPlayerColumns(1);
    const rowDestroyed = this.destroyPlayerRows(1);
    this.addTowerEnemyPiece("iyanaYatsu");
    this.towerRun.bossQuote = "超究武神覇斬";
    this.log(`${name}: 超究武神覇斬。合計${totalDamage}ダメージ、縦横の斬撃で${columnDestroyed + rowDestroyed}体消滅。`, "danger");
  }

  private resolveGalleonTurn(name: string, skillName: string): void {
    const pattern = this.towerRun.floorTurn % 3;
    this.showEnemySkillBanner(skillName, name);
    if (pattern === 0) {
      this.damageBase("player", 34);
      this.placeTerrain("curse", 2, "ai");
      this.addTowerEnemyPiece("divineVassal");
      this.towerRun.bossQuote = "上位魔王の風";
      this.log(`${name}: 上位魔王の風。共有HPへ34ダメージ、呪いマスと眷属追加。`, "danger");
      return;
    }
    if (pattern === 1) {
      this.healBase("ai", Math.round(this.bases.ai.maxHp * 0.05));
      this.placeTerrain("divine", 1, "ai");
      this.towerRun.bossQuote = "親切な上位支配";
      this.log(`${name}: 親切な上位支配。敵HP回復、神域追加。`, "danger");
      return;
    }
    this.addTowerEnemyPiece("turret");
    this.addTowerEnemyPiece("jujutsushi");
    this.towerRun.bossQuote = "無償防衛軍";
    this.log(`${name}: 無償防衛軍。タレットと呪術師を追加。`, "danger");
  }

  private resolveTrueDemonVolunteerTurn(name: string, skillName: string): void {
    this.showEnemySkillBanner(skillName, name);
    const lackingDemonForce = this.towerRun.demonAttackRank < 5;
    if (lackingDemonForce) {
      const heal = Math.round(this.bases.ai.maxHp * 0.05);
      this.healBase("ai", heal);
      this.towerRun.bossQuote = "真魔王再臨: 魔人攻撃が足りない";
      this.log(`${name}: 真魔王再臨。魔人攻撃の協力が足りず、敵HPが${heal}回復しました。`, "danger");
    } else {
      this.towerRun.bossQuote = "真魔王再臨";
      this.log(`${name}: 真魔王再臨。魔人攻撃が結界を削っています。`, "danger");
    }
    this.damageBase("player", 28 + Math.max(0, 5 - this.towerRun.demonAttackRank) * 8);
    this.placeTerrain("curse", 1, "ai");
    this.placeTerrain("divine", 1, "ai");
    if (this.towerRun.floorTurn % 3 === 0) {
      this.addTowerEnemyPiece("god");
      this.destroyPlayerRows(1);
    }
  }

  private destroyPlayerColumns(count: number): number {
    const protectedCoords = this.getPlayerKingProtectionCoords();
    const columns = Array.from({ length: this.board.size }, (_, column) => ({
      column,
      score: this.board
        .getPieces("player")
        .filter((piece) => piece.type !== "king" && this.board.getFootprintCoords(piece).some((coord) => coord.x === column && !protectedCoords.has(`${coord.x},${coord.y}`))).length,
    }))
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .map((entry) => entry.column);

    let destroyed = 0;
    for (const target of this.board.getPieces("player")) {
      if (target.type === "king") continue;
      const hit = this.board.getFootprintCoords(target).some((coord) => columns.includes(coord.x) && !protectedCoords.has(`${coord.x},${coord.y}`));
      if (!hit) continue;
      this.destroyPiece(target.id, "annihilation", "ai");
      destroyed += 1;
    }
    for (const column of columns) {
      for (let y = 0; y < this.board.size; y += 1) this.emitVisualEffect({ kind: "combat", coord: { x: column, y }, owner: "ai" });
    }
    return destroyed;
  }

  private destroyPlayerRows(count: number): number {
    const protectedCoords = this.getPlayerKingProtectionCoords();
    const rows = Array.from({ length: this.board.size }, (_, row) => ({
      row,
      score: this.board
        .getPieces("player")
        .filter((piece) => piece.type !== "king" && this.board.getFootprintCoords(piece).some((coord) => coord.y === row && !protectedCoords.has(`${coord.x},${coord.y}`))).length,
    }))
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .map((entry) => entry.row);

    let destroyed = 0;
    for (const target of this.board.getPieces("player")) {
      if (target.type === "king") continue;
      const hit = this.board.getFootprintCoords(target).some((coord) => rows.includes(coord.y) && !protectedCoords.has(`${coord.x},${coord.y}`));
      if (!hit) continue;
      this.destroyPiece(target.id, "annihilation", "ai");
      destroyed += 1;
    }
    for (const row of rows) {
      for (let x = 0; x < this.board.size; x += 1) this.emitVisualEffect({ kind: "combat", coord: { x, y: row }, owner: "ai" });
    }
    return destroyed;
  }

  private getPlayerKingProtectionCoords(): Set<string> {
    const protectedCoords = new Set<string>();
    const king = this.board.getKing("player");
    if (!king) return protectedCoords;
    for (let y = king.position.y - 1; y <= king.position.y + 1; y += 1) {
      for (let x = king.position.x - 1; x <= king.position.x + 1; x += 1) {
        protectedCoords.add(`${x},${y}`);
      }
    }
    return protectedCoords;
  }

  private pickPlayerStrikeRow(): number {
    const rows = Array.from({ length: this.board.size }, (_, row) => ({
      row,
      score: this.board.getPieces("player").filter((piece) => piece.type !== "king" && this.board.getFootprintCoords(piece).some((coord) => coord.y === row)).length,
    }));
    return rows.sort((a, b) => b.score - a.score)[0]?.row ?? this.board.size - 2;
  }

  private applyKingAwe(owner: PlayerId): void {
    const enemy = this.getOpponent(owner);
    if (!this.hasPassive(enemy, "kingAwe")) return;
    const enemyKing = this.board.getKing(enemy);
    if (!enemyKing) return;

    for (const piece of this.board.getPieces(owner)) {
      const distance = Math.max(Math.abs(piece.position.x - enemyKing.position.x), Math.abs(piece.position.y - enemyKing.position.y));
      if (distance <= 2) piece.movePenalty += 1;
    }
  }

  private checkVictory(): boolean {
    if (!this.board.getKing("player")) {
      this.winner = "ai";
    } else if (!this.board.getKing("ai")) {
      this.winner = "player";
    } else if (this.bases.player.hp <= 0) {
      this.winner = "ai";
    } else if (this.bases.ai.hp <= 0) {
      this.winner = "player";
    }

    if (this.winner === "player" && this.towerRun.active) {
      this.completeTowerFloor();
      return true;
    }

    if (this.winner) {
      this.phase = "gameover";
      this.selectedPieceId = null;
      if (this.aiTimer) window.clearTimeout(this.aiTimer);
      this.log(this.winner === "player" ? "勝利しました。" : "敗北しました。", this.winner === "player" ? "player" : "danger");
      return true;
    }

    return false;
  }
}
