export type PlayerId = "player" | "ai";

export type Phase =
  | "title"
  | "initiative"
  | "setup"
  | "ability"
  | "action"
  | "ai"
  | "fusion"
  | "mechaUpgrade"
  | "processExecution"
  | "gameover";

export type PieceType =
  | "king"
  | "rook"
  | "bishop"
  | "gold"
  | "silver"
  | "knight"
  | "lance"
  | "pawn"
  | "turret"
  | "ninja"
  | "god"
  | "man"
  | "hyperMecha"
  | "cannon"
  | "jujutsushi"
  | "slime"
  | "dragon"
  | "bomber"
  | "copyNinja"
  | "divineVassal"
  | "iyanaYatsu"
  | "chronomancer"
  | "barrierGuard"
  | "gatekeeper"
  | "medic"
  | "magnetSoldier"
  | "shadowDouble"
  | "bannerCaptain"
  | "engineer"
  | "sealPriest"
  | "stormLancer";

export type AbilityRarity = "Common" | "Rare" | "Epic" | "Legendary" | "Cursed";

export type HeroId = "uesugiKenshin" | "mechaArmorChan" | "hoshiyomiKaguya" | "demonVolunteer";

export interface HeroDefinition {
  id: HeroId;
  name: string;
  title: string;
  archetype: string;
  skillName: string;
  skillDescription: string;
  passiveName: string;
  passiveDescription: string;
  chargeTurns: number;
  accentColor: string;
}

export interface SkillBannerState {
  id: string;
  heroId: HeroId;
  skillName: string;
  subtitle: string;
}

export interface EnemySkillBannerState {
  id: string;
  skillName: string;
  subtitle: string;
}

export type GameMode = "standard" | "thirtyBuilding" | "demonCastle";

export interface TowerRestSpot {
  id: "office" | "gasStation" | "stationWaitingRoom";
  name: string;
  rarity: 1 | 2 | 3;
  description: string;
}

export interface TowerRunState {
  active: boolean;
  mode: Exclude<GameMode, "standard">;
  dungeonName: string;
  floor: number;
  maxFloor: number;
  clearedFloors: number;
  floorTurn: number;
  difficultyTier: number;
  enemyName: string;
  enemyTitle: string;
  enemyMaxHp: number;
  isBossFloor: boolean;
  permanentRewards: string[];
  lastRestSpot: TowerRestSpot | null;
  lastFloorResult: string | null;
  bossQuote: string | null;
  bossScenario: string | null;
  conquestEventUnlocked: boolean;
  playerLevel: number;
  playerExp: number;
  playerExpToNext: number;
  demonAttackUnlocked: boolean;
  demonAttackRank: number;
  demonAttackPower: number;
  elevatorNotice: string | null;
}

export type AbilityCategory =
  | "Piece Buff"
  | "Summon"
  | "Board Gimmick"
  | "Temporary Buff"
  | "Passive"
  | "Sabotage"
  | "Base";

export type HyperMechaUpgrade =
  | "kineticBlade"
  | "simulator"
  | "usbProMax"
  | "totalAnnihilation"
  | "armorPurge"
  | "electroAnchor"
  | "reactorRampage"
  | "quantumBackup"
  | "satelliteAim"
  | "processExecution";

export interface MechaUpgradeOffer {
  pieceId: string;
  pieceName: string;
  upgrade: HyperMechaUpgrade;
  name: string;
  description: string;
  artLabel: string;
  rarity: AbilityRarity;
}

export type TerrainType = "heal" | "trap" | "warp" | "summon" | "divine" | "lava" | "curse";

export interface Coord {
  x: number;
  y: number;
}

export interface MoveOption {
  to: Coord;
  kind: "move" | "capture" | "special";
  targetPieceId?: string;
  label?: string;
  specialType?: "godBanish" | "typeAnnihilation" | "satelliteAim" | "electroAnchor";
  areaSize?: number;
}

export interface BaseState {
  hp: number;
  maxHp: number;
}

export interface TerrainTile {
  id: string;
  type: TerrainType;
  position: Coord;
  pairedId?: string;
  owner?: PlayerId;
  duration?: number;
}

export interface PieceDefinition {
  type: PieceType;
  name: string;
  shortName: string;
  score: number;
  implemented: boolean;
  movement: string;
  specialAbility: string;
  weakness: string;
  summonCost: string;
  maxHp: number;
  large?: boolean;
}

export interface AbilityDefinition {
  id: string;
  name: string;
  rarity: AbilityRarity;
  category: AbilityCategory;
  description: string;
  implemented: boolean;
  effect:
    | { type: "summon"; pieceType: PieceType; selfBaseDamage?: number }
    | { type: "healBase"; amount: number }
    | { type: "terrain"; terrainType: TerrainType; count: number }
    | { type: "passive"; passiveId: PassiveId }
    | { type: "temporaryDoubleAction" }
    | { type: "oracle" }
    | { type: "convertEnemyLowRank"; chance: number }
    | { type: "damageEnemyBase"; amount: number; selfBaseDamage?: number }
    | { type: "banishIyanaYatsu" }
    | { type: "startFusion" }
    | { type: "drawLogOnly" };
}

export type PassiveId =
  | "pawnEvolution"
  | "kingAwe"
  | "homeGuard"
  | "turretRange"
  | "summonDiscount"
  | "cursedMomentum";

export interface LogEntry {
  id: string;
  text: string;
  tone: "system" | "player" | "ai" | "danger";
}

export type VisualEffectKind = "combat" | "baseDamage" | "godSummon" | "fusion" | "mechaTransform" | "satelliteStrike";

export interface VisualEffectEvent {
  id: string;
  kind: VisualEffectKind;
  coord?: Coord;
  owner?: PlayerId;
  amount?: number;
}
