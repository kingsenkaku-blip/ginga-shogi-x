import { ABILITY_DEFINITIONS } from "../game/content/abilityDefinitions";
import { PIECE_DEFINITIONS } from "../game/content/pieceDefinitions";
import type { AbilityDefinition, AbilityRarity, EnemySkillBannerState, GameMode, HeroDefinition, LogEntry, SkillBannerState } from "../game/types";
import type { GameManager } from "../game/simulation/GameManager";

const rarityClass = (rarity: AbilityRarity): string => rarity.toLowerCase();
const assetUrl = (path: string): string => `${import.meta.env.BASE_URL}assets/${path}`;

interface UIManagerOptions {
  debugEnabled?: boolean;
}

interface ConquestDialogueLine {
  speaker: "あなた" | "魔王ボランティア" | "SYSTEM";
  text: string;
  tone: "player" | "demon" | "system";
}

const CONQUEST_DIALOGUE: ConquestDialogueLine[] = [
  {
    speaker: "SYSTEM",
    text: "サーティビルディング31階。勝負は終わり、魔王ボランティアは武器を下ろした。",
    tone: "system",
  },
  {
    speaker: "魔王ボランティア",
    text: "ま、待ってください！ もう戦いません。お願いがあります。どうか、聞いてください。",
    tone: "demon",
  },
  {
    speaker: "あなた",
    text: "さっきまであれだけ全力で戦っていたのに、急にどうした？",
    tone: "player",
  },
  {
    speaker: "魔王ボランティア",
    text: "私の魔王城が、知らない連中に乗っ取られたんです。玉座も、台所も、地下倉庫のカレー鍋まで……。",
    tone: "demon",
  },
  {
    speaker: "魔王ボランティア",
    text: "サーティビルディングを守っていたのは、助けてくれる相手を探すためでした。強い人じゃないと、城まで辿り着けないから。",
    tone: "demon",
  },
  {
    speaker: "あなた",
    text: "つまり、ここで負けたから助けてほしい、ということか。",
    tone: "player",
  },
  {
    speaker: "魔王ボランティア",
    text: "はい……。負けた相手に頼むなんて、魔王としては情けないです。でも、あなたしか頼れません。",
    tone: "demon",
  },
  {
    speaker: "魔王ボランティア",
    text: "お願いします。乗っ取られ魔王城を、私と一緒に取り返してください。",
    tone: "demon",
  },
  {
    speaker: "あなた",
    text: "事情はわかった。今すぐ城には行けないが、準備ができたら向かおう。",
    tone: "player",
  },
  {
    speaker: "魔王ボランティア",
    text: "ありがとうございます……！ それまで、私も仲間として戦います。どうか、私の城を取り戻してください。",
    tone: "demon",
  },
  {
    speaker: "SYSTEM",
    text: "魔王ボランティアが使用可能になりました。タイトル画面に「乗っ取られ魔王城」が出現しました。",
    tone: "system",
  },
];

export class UIManager {
  private debugEnabled: boolean;
  private debugOpen: boolean;
  private debugLines: string[] = [];
  private titleMode: "splash" | "characterSelect" = "splash";
  private startMode: GameMode = "standard";
  private conquestDialogueIndex = 0;
  private readonly shownSkillBannerIds = new Set<string>();
  private readonly shownEnemySkillBannerIds = new Set<string>();
  private activeSkillBanner: SkillBannerState | null = null;
  private activeEnemySkillBanner: EnemySkillBannerState | null = null;
  private activeSkillBannerExpiresAt = 0;
  private activeEnemySkillBannerExpiresAt = 0;
  private skillBannerClearTimer: number | null = null;
  private enemySkillBannerClearTimer: number | null = null;
  private readonly ipadMode: boolean;
  private ipadPanelView: "status" | "log" = "status";
  private forceIpadMode = false;
  private selectedConversationVersion = "alpha";
  private castleNotice = "";
  private castleNoticeTimer: number | null = null;
  private passwordOverlayOpen = false;
  private passwordEntry = "";
  private passwordFeedback: "idle" | "error" = "idle";
  private passwordUnlocking = false;
  private passwordDigitFlashUntil = 0;


  constructor(
    private readonly root: HTMLElement,
    private readonly game: GameManager,
    options: UIManagerOptions = {},
  ) {
    this.debugEnabled = options.debugEnabled ?? false;
    this.debugOpen = this.debugEnabled;
    this.ipadMode = UIManager.detectIpadMode();
    this.forceIpadMode = this.ipadMode;


    window.addEventListener("keydown", (event) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "d") {
        event.preventDefault();
        this.debugEnabled = !this.debugEnabled;
        this.debugOpen = this.debugEnabled;
        this.pushDebugLine(this.debugEnabled ? "debug mode enabled" : "debug mode disabled");
        this.render();
      } else if (this.debugEnabled && event.key === "`" && !isTyping) {
        event.preventDefault();
        this.debugOpen = !this.debugOpen;
        this.render();
      }
    });
  }

  private static detectIpadMode(): boolean {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent ?? "";
    return /iPad/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  private isIpadUiEnabled(): boolean {
    return this.forceIpadMode;
  }



  render(): void {
    if (this.game.phase === "title") {
      this.root.innerHTML = `
        ${this.renderTitleScreen()}
        ${this.renderGlobalDeviceSwitch()}
        ${this.renderPasswordOverlay()}
        ${this.debugEnabled ? this.renderDebugConsole() : ""}
      `;
      this.bind();
      return;
    }

    const selected = this.game.board.getPiece(this.game.selectedPieceId);
    const playerPassives = this.game.getPassiveLabels("player");
    const aiPassives = this.game.getPassiveLabels("ai");
    const hero = this.game.getSelectedHero();

    this.root.innerHTML = `
      <section class="hud hud-top">
        <div class="brand">
          <span class="brand-title">銀河将棋X</span>
          ${hero ? `<span class="hero-chip">${hero.name}</span>` : ""}
          ${this.renderDeviceModeSwitch()}
          <span class="turn-pill">${
            this.game.phase === "gameover"
              ? "決着"
              : this.game.phase === "initiative"
                ? "先攻後攻決定"
                : this.game.phase === "fusion"
                ? "融合選択"
                : this.game.phase === "mechaUpgrade"
                  ? "メカ強化"
                  : this.game.phase === "processExecution"
                    ? "PROCESS"
                  : this.game.currentPlayer === "player"
                    ? "あなたの番"
                    : "AI思考中"
          }</span>
        </div>
        <div class="hp-row">
          ${this.renderHp("あなた", this.game.bases.player.hp, this.game.bases.player.maxHp)}
          ${this.renderHp("AI", this.game.bases.ai.hp, this.game.bases.ai.maxHp)}
        </div>
      </section>

      <aside class="side-panel ${this.isIpadUiEnabled() ? "ipad-mode" : ""}">
        ${
          this.isIpadUiEnabled()
            ? `<div class="ipad-panel-switch" role="tablist" aria-label="iPad表示切替">
                <button type="button" class="ipad-panel-button ${this.ipadPanelView === "status" ? "active" : ""}" data-command="show-status-panel">戦況</button>
                <button type="button" class="ipad-panel-button ${this.ipadPanelView === "log" ? "active" : ""}" data-command="show-log-panel">ログ</button>
              </div>`
            : ""
        }
        <div class="status-panel-stack ${this.isIpadUiEnabled() && this.ipadPanelView === "log" ? "hidden-on-ipad" : ""}">
        <div class="panel-section">
          <h2>選択中</h2>
          ${selected ? this.renderPieceDetails(selected.id) : `<p class="muted">未選択</p>`}
        </div>
        <div class="panel-section">
          <h2>永続能力</h2>
          <div class="tag-list">
            ${playerPassives.length ? playerPassives.map((label) => `<span>${label}</span>`).join("") : `<span>なし</span>`}
          </div>
          <h3>AI</h3>
          <div class="tag-list compact">
            ${aiPassives.length ? aiPassives.map((label) => `<span>${label}</span>`).join("") : `<span>なし</span>`}
          </div>
        </div>
        ${this.renderCommandPanel()}
        ${this.game.towerRun.active ? this.renderTowerPanel() : ""}
        </div>
        <div class="panel-section log-panel ${this.isIpadUiEnabled() && this.ipadPanelView !== "log" ? "hidden-on-ipad" : ""}">
          <h2>行動ログ</h2>
          ${this.game.logs.map((entry) => this.renderLog(entry)).join("")}
        </div>
      </aside>

      ${this.renderGlobalDeviceSwitch()}
      ${this.renderPasswordOverlay()}
      ${this.renderSkillBanner()}
      ${this.renderEnemySkillBanner()}
      ${this.game.phase === "initiative" ? this.renderInitiativeOverlay() : ""}
      ${this.game.phase === "ability" ? this.renderAbilityOverlay(this.game.abilityOffers) : ""}
      ${this.game.phase === "fusion" ? this.renderFusionOverlay() : ""}
      ${this.game.phase === "mechaUpgrade" ? this.renderMechaUpgradeOverlay() : ""}
      ${this.game.phase === "processExecution" ? this.renderProcessExecutionOverlay() : ""}
      ${this.game.phase === "gameover" ? this.renderGameOver() : ""}
      ${this.debugEnabled ? this.renderDebugConsole() : ""}
    `;

    this.bind();
  }

  private renderTitleScreen(): string {
    if (this.titleMode === "characterSelect") return this.renderCharacterSelectScreen();
    const saveStatus = this.escapeHtml(this.game.getMetaSaveStatus());
    const demonCastleUnlocked = this.game.isDemonCastleUnlocked();

    return `
      <section class="title-screen title-splash">
        <div class="title-orbit" aria-hidden="true"></div>
        ${this.renderTitleLiveBoard()}
        <div class="title-center">
          <span class="title-kicker">Roguelike 3D Shogi</span>
          <h1 class="game-logo" aria-label="銀河将棋X">
            <span>銀河将棋</span>
            <span class="logo-x" aria-hidden="true">
              <img class="logo-x-stroke logo-x-stroke-a" src="${assetUrl("logo-x-stroke-a.png")}" alt="" />
              <img class="logo-x-stroke logo-x-stroke-b" src="${assetUrl("logo-x-stroke-b.png")}" alt="" />
              <i></i>
            </span>
          </h1>
          <p>星間戦場に布陣し、王将と本拠地を守り抜く。</p>
          <button class="title-start-button" data-command="open-character-select">
            <span>ゲームをスタート</span>
            <small>メインキャラクター選択へ</small>
          </button>
          <button class="title-start-button tower-start-button" data-command="open-tower-character-select">
            <span>サーティビルディング</span>
            <small>31Fまで共有HPで登る塔モード</small>
          </button>
          ${
            demonCastleUnlocked
              ? `<button class="title-start-button castle-start-button" data-command="open-demon-castle-character-select">
                  <span>乗っ取られ魔王城</span>
                  <small>40F / レベルアップと魔人攻撃で奪還</small>
                </button>`
              : ""
          }
          <div class="title-save-panel">
            <span>セーブデータ</span>
            <p>${saveStatus}</p>
            <div>
              <button type="button" data-command="save-meta">セーブ</button>
              <button type="button" data-command="load-meta">ロード</button>
            </div>
            <div class="title-castle-panel">
              <label for="castle-version-select">会話バージョン</label>
              <select id="castle-version-select" data-role="castle-version-select">
                <option value="alpha" ${this.selectedConversationVersion === "alpha" ? "selected" : ""}>アルファ</option>
              </select>
              <button type="button" data-command="open-castle-dialogue">館</button>
              <button type="button" data-command="open-debug-password">パスワード</button>
              <small class="castle-notice">${this.castleNotice}</small>
            </div>
          </div>
          <div class="title-password-panel">
            <span>開発者メニュー</span>
            <button type="button" data-command="open-debug-password">パスワード</button>
          </div>
        </div>
      </section>
    `;
  }

  private renderCharacterSelectScreen(): string {
    const heroes = this.game.getHeroDefinitions();
    const heading =
      this.startMode === "thirtyBuilding"
        ? { label: "サーティビルディング出撃キャラ選択", title: "THIRTY BUILDING" }
        : this.startMode === "demonCastle"
          ? { label: "乗っ取られ魔王城 出撃キャラ選択", title: "DEMON CASTLE" }
          : { label: "メインキャラクター選択", title: "銀河将棋X" };
    return `
      <section class="title-screen title-character-screen">
        <div class="title-orbit" aria-hidden="true"></div>
        ${this.renderTitleLiveBoard()}
        <div class="character-select">
          <div class="character-heading">
            <span>${heading.label}</span>
            <strong>${heading.title}</strong>
          </div>
          <div class="character-grid">
            ${heroes.map((hero) => this.renderHeroCard(hero)).join("")}
          </div>
          <button class="title-back-button" data-command="back-title">タイトルへ戻る</button>
        </div>
      </section>
    `;
  }

  private renderTitleLiveBoard(): string {
    const highlights = Array.from({ length: 7 }, (_, index) => {
      const x = (Math.random() * 74 + 13).toFixed(2);
      const y = (Math.random() * 64 + 20).toFixed(2);
      const delay = (index * 0.55 + Math.random() * 0.8).toFixed(2);
      const duration = (2.2 + Math.random() * 1.8).toFixed(2);
      return `<span class="title-live-highlight" style="--x:${x}%;--y:${y}%;--delay:${delay}s;--dur:${duration}s"></span>`;
    }).join("");
    const sparks = Array.from({ length: 5 }, (_, index) => {
      const x = (Math.random() * 68 + 16).toFixed(2);
      const y = (Math.random() * 56 + 24).toFixed(2);
      const delay = (index * 1.1 + Math.random() * 1.2).toFixed(2);
      return `<span class="title-live-spark" style="--x:${x}%;--y:${y}%;--delay:${delay}s"></span>`;
    }).join("");
    return `
      <div class="title-live-board" aria-hidden="true">
        <div class="title-live-grid"></div>
        <div class="title-live-highlights">${highlights}</div>
        <div class="title-live-sparks">${sparks}</div>
      </div>
    `;
  }

  private renderDeviceModeSwitch(): string {
    return `
      <div class="device-mode-switch" role="group" aria-label="表示モード">
        <button type="button" class="device-mode-button ${this.isIpadUiEnabled() ? "" : "active"}" data-command="set-normal-mode">通常</button>
        <button type="button" class="device-mode-button ${this.isIpadUiEnabled() ? "active" : ""}" data-command="set-ipad-mode">iPad</button>
      </div>
    `;
  }

  private renderGlobalDeviceSwitch(): string {
    return `<div class="global-device-switch">${this.renderDeviceModeSwitch()}</div>`;
  }


  private renderHeroCard(hero: HeroDefinition): string {
    return `
      <button class="hero-card ${hero.id}" style="--hero-accent:${hero.accentColor}" data-start-hero="${hero.id}">
        <span class="hero-card-title">${hero.title}</span>
        <strong>${hero.name}</strong>
        <em>${hero.archetype}</em>
        <dl>
          <div>
            <dt>${hero.skillName}</dt>
            <dd>${hero.skillDescription}</dd>
          </div>
          <div>
            <dt>${hero.passiveName}</dt>
            <dd>${hero.passiveDescription}</dd>
          </div>
        </dl>
      </button>
    `;
  }

  private renderSkillBanner(): string {
    const banner = this.game.skillBanner;
    const now = window.performance.now();
    if (banner && banner.id !== this.activeSkillBanner?.id && !this.shownSkillBannerIds.has(banner.id)) {
      this.shownSkillBannerIds.add(banner.id);
      this.activeSkillBanner = banner;
      this.activeSkillBannerExpiresAt = now + 2100;
      if (this.skillBannerClearTimer) window.clearTimeout(this.skillBannerClearTimer);
      this.skillBannerClearTimer = window.setTimeout(() => {
        if (this.activeSkillBanner?.id === banner.id) {
          this.activeSkillBanner = null;
          this.render();
        }
      }, 2100);
    }

    if (!this.activeSkillBanner || now >= this.activeSkillBannerExpiresAt) {
      this.activeSkillBanner = null;
      return "";
    }

    const activeBanner = this.activeSkillBanner;
    const uesugiFlag = activeBanner.heroId === "uesugiKenshin" ? `<div class="uesugi-war-flag" aria-hidden="true"><span>毘</span></div>` : "";
    return `
      <div class="skill-banner ${activeBanner.heroId}" data-skill-banner="${activeBanner.id}">
        ${uesugiFlag}
        <span>SKILL EXECUTE</span>
        <strong>${activeBanner.skillName}</strong>
        <em>${activeBanner.subtitle}</em>
      </div>
    `;
  }

  private renderEnemySkillBanner(): string {
    const banner = this.game.enemySkillBanner;
    const now = window.performance.now();
    if (banner && banner.id !== this.activeEnemySkillBanner?.id && !this.shownEnemySkillBannerIds.has(banner.id)) {
      this.shownEnemySkillBannerIds.add(banner.id);
      this.activeEnemySkillBanner = banner;
      this.activeEnemySkillBannerExpiresAt = now + 2100;
      if (this.enemySkillBannerClearTimer) window.clearTimeout(this.enemySkillBannerClearTimer);
      this.enemySkillBannerClearTimer = window.setTimeout(() => {
        if (this.activeEnemySkillBanner?.id === banner.id) {
          this.activeEnemySkillBanner = null;
          this.render();
        }
      }, 2100);
    }

    if (!this.activeEnemySkillBanner || now >= this.activeEnemySkillBannerExpiresAt) {
      this.activeEnemySkillBanner = null;
      return "";
    }

    const activeBanner = this.activeEnemySkillBanner;
    return `
      <div class="skill-banner enemy-skill-banner" data-enemy-skill-banner="${activeBanner.id}">
        <span>ENEMY SKILL</span>
        <strong>${activeBanner.skillName}</strong>
        <em>${activeBanner.subtitle}</em>
      </div>
    `;
  }

  private renderInitiativeOverlay(): string {
    const initiative = this.game.initiative;
    const hero = this.game.getSelectedHero();
    if (!initiative || !hero) return "";
    const playerFirst = initiative.firstPlayer === "player";
    return `
      <div class="overlay initiative-overlay">
        <div class="initiative-shell">
          <div class="initiative-heading">
            <span>先攻後攻処理</span>
            <strong>${hero.name} 出陣準備</strong>
          </div>
          <div class="initiative-versus">
            <div class="initiative-side ${playerFirst ? "first" : "second"}">
              <span>あなた</span>
              <strong>${initiative.playerRoll}</strong>
              <em>${playerFirst ? "先攻" : "後攻"}</em>
            </div>
            <div class="initiative-divider">VS</div>
            <div class="initiative-side ${playerFirst ? "second" : "first"}">
              <span>AI</span>
              <strong>${initiative.aiRoll}</strong>
              <em>${playerFirst ? "後攻" : "先攻"}</em>
            </div>
          </div>
          <p>${playerFirst ? "あなたが先に能力カードを選びます。" : "AIが先に動きます。あなたは後攻として受けてから反撃します。"}</p>
          <button class="command-button initiative-start" data-command="confirm-initiative">
            <span>この順番で開始</span>
            <small>第1ターンへ進む</small>
          </button>
        </div>
      </div>
    `;
  }

  private bind(): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='open-character-select']").forEach((button) => {
      button.addEventListener("click", () => {
        this.startMode = "standard";
        this.titleMode = "characterSelect";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='open-tower-character-select']").forEach((button) => {
      button.addEventListener("click", () => {
        this.startMode = "thirtyBuilding";
        this.titleMode = "characterSelect";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='open-demon-castle-character-select']").forEach((button) => {
      button.addEventListener("click", () => {
        this.startMode = "demonCastle";
        this.titleMode = "characterSelect";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='back-title']").forEach((button) => {
      button.addEventListener("click", () => {
        this.titleMode = "splash";
        this.startMode = "standard";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='save-meta']").forEach((button) => {
      button.addEventListener("click", () => this.game.saveMetaProgress());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='load-meta']").forEach((button) => {
      button.addEventListener("click", () => this.game.loadMetaProgress());
    });
    this.root.querySelectorAll<HTMLSelectElement>("[data-role='castle-version-select']").forEach((select) => {
      select.addEventListener("change", () => {
        this.selectedConversationVersion = select.value;
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='open-castle-dialogue']").forEach((button) => {
      button.addEventListener("click", () => {
        this.castleNotice = "まだ未実装です";
        if (this.castleNoticeTimer !== null) window.clearTimeout(this.castleNoticeTimer);
        this.render();
        this.castleNoticeTimer = window.setTimeout(() => {
          this.castleNotice = "";
          this.castleNoticeTimer = null;
          this.render();
        }, 1400);
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='open-debug-password']").forEach((button) => {
      button.addEventListener("click", () => {
        this.passwordOverlayOpen = true;
        this.passwordEntry = "";
        this.passwordFeedback = "idle";
        this.passwordUnlocking = false;
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-password-digit]").forEach((button) => {
      button.addEventListener("click", () => this.handlePasswordDigit(button.dataset.passwordDigit ?? ""));
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='close-password']").forEach((button) => {
      button.addEventListener("click", () => {
        this.passwordOverlayOpen = false;
        this.passwordEntry = "";
        this.passwordFeedback = "idle";
        this.passwordUnlocking = false;
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='conquest-next']").forEach((button) => {
      button.addEventListener("click", () => {
        this.conquestDialogueIndex = Math.min(CONQUEST_DIALOGUE.length - 1, this.conquestDialogueIndex + 1);
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='return-title']").forEach((button) => {
      button.addEventListener("click", () => {
        this.conquestDialogueIndex = 0;
        this.titleMode = "splash";
        this.startMode = "standard";
        this.game.start();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-start-hero]").forEach((button) => {
      const heroId = button.dataset.startHero;
      button.addEventListener("click", () => {
        if (heroId === "uesugiKenshin" || heroId === "mechaArmorChan" || heroId === "hoshiyomiKaguya" || heroId === "demonVolunteer") {
          this.titleMode = "splash";
          if (this.startMode === "thirtyBuilding") this.game.startTowerRunWithHero(heroId);
          else if (this.startMode === "demonCastle") this.game.startDemonCastleRunWithHero(heroId);
          else this.game.startGameWithHero(heroId);
        }
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='show-log-panel']").forEach((button) => {
      button.addEventListener("click", () => {
        this.ipadPanelView = "log";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='show-status-panel']").forEach((button) => {
      button.addEventListener("click", () => {
        this.ipadPanelView = "status";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='set-ipad-mode']").forEach((button) => {
      button.addEventListener("click", () => {
        this.forceIpadMode = true;
        this.ipadPanelView = "status";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='set-normal-mode']").forEach((button) => {
      button.addEventListener("click", () => {
        this.forceIpadMode = false;
        this.ipadPanelView = "status";
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='confirm-initiative']").forEach((button) => {
      button.addEventListener("click", () => this.game.confirmInitiative());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='hero-skill']").forEach((button) => {
      button.addEventListener("click", () => this.game.useHeroSkill());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-ability-id]").forEach((button) => {
      button.addEventListener("click", () => this.game.chooseAbility(button.dataset.abilityId ?? ""));
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='bad-mouth']").forEach((button) => {
      button.addEventListener("click", () => this.game.useBadMouthCommand("player"));
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='start-fusion-ticket']").forEach((button) => {
      button.addEventListener("click", () => this.game.startFusionFromTicket("player"));
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='cancel-fusion']").forEach((button) => {
      button.addEventListener("click", () => this.game.cancelFusionSelection());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='claim-mecha-upgrade']").forEach((button) => {
      button.addEventListener("click", () => this.game.claimMechaUpgrade());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-process-adjust]").forEach((button) => {
      const owner = button.dataset.processOwner;
      const delta = Number(button.dataset.processAdjust ?? 0);
      if (owner === "player" || owner === "ai") {
        button.addEventListener("click", () => this.game.adjustProcessExecutionHp(owner, delta));
      }
    });
    this.root.querySelectorAll<HTMLInputElement>("[data-process-range]").forEach((input) => {
      const owner = input.dataset.processOwner;
      if (owner === "player" || owner === "ai") {
        input.addEventListener("input", () => this.game.setProcessExecutionHp(owner, Number(input.value)));
      }
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-command='finish-process']").forEach((button) => {
      button.addEventListener("click", () => this.game.finishProcessExecution());
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-debug-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        this.debugOpen = !this.debugOpen;
        this.render();
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("[data-debug-command]").forEach((button) => {
      button.addEventListener("click", () => this.executeDebugCommand(button.dataset.debugCommand ?? ""));
    });
    this.root.querySelector<HTMLFormElement>("[data-debug-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = this.root.querySelector<HTMLInputElement>("[data-debug-input]");
      const command = input?.value ?? "";
      if (input) input.value = "";
      this.executeDebugCommand(command);
    });
  }

  private renderHp(label: string, hp: number, maxHp: number): string {
    const percent = Math.max(0, Math.min(100, (hp / maxHp) * 100));
    return `
      <div class="hp">
        <div class="hp-label"><span>${label}</span><strong>${hp}/${maxHp}</strong></div>
        <div class="hp-bar"><i style="width:${percent}%"></i></div>
      </div>
    `;
  }

  private renderPieceDetails(pieceId: string): string {
    const piece = this.game.board.getPiece(pieceId);
    if (!piece) return `<p class="muted">未選択</p>`;
    const moves = this.game.getMoveOptions(piece.id);
    const mechaUpgrades = piece.type === "hyperMecha" ? this.game.getMechaUpgradeLabels(piece) : [];
    return `
      <div class="piece-detail ${piece.owner}">
        <strong>${this.game.getPieceDisplayName(piece)}</strong>
        <span>${piece.owner === "player" ? "自軍" : "敵軍"} / HP ${piece.hp}/${piece.maxHp}</span>
        <p>${piece.definition.movement}</p>
        <p>${piece.definition.specialAbility}</p>
        ${
          piece.type === "hyperMecha"
            ? `<p>型 ${piece.mechaTier} / 累計撃破 ${piece.mechaKillCount}/5 / 次の強化まで ${piece.mechUpgradeCooldown}T / ${mechaUpgrades.length ? mechaUpgrades.join("、") : "強化なし"}</p>`
            : ""
        }
        <div class="stat-grid">
          <span>候補</span><b>${moves.length}</b>
          <span>評価</span><b>${piece.definition.score}</b>
          <span>CD</span><b>${piece.specialCooldown}</b>
          <span>状態</span><b>${piece.stunnedTurns > 0 ? "停止" : piece.weakenedTurns > 0 ? "弱体" : "通常"}</b>
        </div>
      </div>
    `;
  }

  private renderAbilityOverlay(offers: AbilityDefinition[]): string {
    return `
      <div class="overlay">
        <div class="ability-shell">
          <div class="ability-heading">
            <span>能力選択</span>
            <strong>${offers.length}枚から1枚</strong>
          </div>
          <div class="card-row">
            ${offers.map((offer) => this.renderAbilityCard(offer)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  private renderCommandPanel(): string {
    const canBadMouth = this.game.canUseBadMouthCommand("player");
    const enemyNuisanceCount = this.game.board.getPieces("ai").filter((piece) => piece.type === "iyanaYatsu").length;
    const fusionTickets = this.game.mechFusionTickets.player;
    const hero = this.game.getSelectedHero();
    const skillMax = this.game.getHeroSkillChargeMax();
    const skillReady = this.game.canUseHeroSkill();
    const canUseFusionTicket =
      fusionTickets > 0 &&
      this.game.phase === "action" &&
      this.game.currentPlayer === "player" &&
      this.game.canStartHyperMechaFusion("player", true) &&
      this.game.getFusionCandidates("player").length >= 5;
    const fusionTicketLabel = this.game.turnNumber < 3 ? `3ターン目から解禁 / USBチャンス ${fusionTickets}回` : `USBチャンス ${fusionTickets}回`;

    return `
      <div class="panel-section command-panel">
        <h2>コマンド</h2>
        ${
          hero
            ? `<button class="command-button hero-skill-button" data-command="hero-skill" ${skillReady ? "" : "disabled"}>
                <span>${hero.skillName}</span>
                <small>${hero.name} / CHARGE ${this.game.heroSkillCharge}/${skillMax}</small>
              </button>`
            : ""
        }
        <button class="command-button" data-command="bad-mouth" ${canBadMouth ? "" : "disabled"}>
          <span>罵詈雑言</span>
          <small>${enemyNuisanceCount > 0 ? `敵のいやなやつ ${enemyNuisanceCount}体` : "対象なし"}</small>
        </button>
        <button class="command-button" data-command="start-fusion-ticket" ${canUseFusionTicket ? "" : "disabled"}>
          <span>追加融合</span>
          <small>${fusionTicketLabel}</small>
        </button>
      </div>
    `;
  }

  private renderTowerPanel(): string {
    const tower = this.game.towerRun;
    const isDemonCastle = tower.mode === "demonCastle";
    const rewards = tower.permanentRewards.length
      ? tower.permanentRewards.map((reward) => `<span>${this.escapeHtml(reward)}</span>`).join("")
      : `<span>未獲得</span>`;
    const rest = tower.lastRestSpot ? `${tower.lastRestSpot.name} ☆${tower.lastRestSpot.rarity}` : "未到達";
    const expPercent = Math.max(0, Math.min(100, (tower.playerExp / Math.max(1, tower.playerExpToNext)) * 100));
    return `
      <div class="panel-section tower-panel">
        <h2>${this.escapeHtml(tower.dungeonName)}</h2>
        <div class="tower-floorline">
          <strong>${tower.floor}F</strong>
          <span>${tower.isBossFloor ? "BOSS" : `TIER ${tower.difficultyTier}`}</span>
        </div>
        <p class="tower-enemy">${this.escapeHtml(tower.enemyName)} <small>${this.escapeHtml(tower.enemyTitle)}</small></p>
        <div class="tower-meter">
          <span>敵HP</span>
          <b>${this.game.bases.ai.hp}/${tower.enemyMaxHp}</b>
        </div>
        <div class="tower-meta">
          <span>階層ターン ${tower.floorTurn}</span>
          <span>休憩 ${this.escapeHtml(rest)}</span>
        </div>
        ${
          isDemonCastle
            ? `<div class="castle-level">
                <div><span>Lv.${tower.playerLevel}</span><b>EXP ${tower.playerExp}/${tower.playerExpToNext}</b></div>
                <i style="width:${expPercent}%"></i>
                <p>能力カード ${3 + Math.floor(tower.playerLevel / 5)}枚 / 魔人攻撃 ${tower.demonAttackUnlocked ? `Rank ${tower.demonAttackRank} 威力${tower.demonAttackPower}` : "未解放"}</p>
              </div>`
            : ""
        }
        ${tower.elevatorNotice ? `<p class="tower-quote elevator">${this.escapeHtml(tower.elevatorNotice)}</p>` : ""}
        ${tower.bossScenario ? `<p class="tower-scenario">${this.escapeHtml(tower.bossScenario).replace(/\n/g, "<br />")}</p>` : ""}
        ${tower.bossQuote ? `<p class="tower-quote">${this.escapeHtml(tower.bossQuote)}</p>` : ""}
        <div class="tag-list compact tower-rewards">${rewards}</div>
      </div>
    `;
  }

  private renderFusionOverlay(): string {
    const selected = this.game.fusionSelectionIds.length;
    return `
      <div class="overlay fusion-overlay">
        <div class="ability-shell fusion-shell">
          <div class="ability-heading">
            <span>ハイパーメカ融合</span>
            <strong>${selected}/5</strong>
          </div>
          <p class="fusion-copy">自陣の非王将コマを5体クリックすると、選択した5体がハイパーメカ一型になります。</p>
          <button class="command-button fusion-cancel" data-command="cancel-fusion">
            <span>キャンセル</span>
            <small>選択をやり直す</small>
          </button>
        </div>
      </div>
    `;
  }

  private renderMechaUpgradeOverlay(): string {
    const card = this.game.getPendingMechaUpgradeCard();
    if (!card) return "";

    return `
      <div class="overlay mecha-upgrade-overlay">
        <div class="ability-shell mecha-upgrade-shell">
          <div class="ability-heading">
            <span>ハイパーメカ強化</span>
            <strong>${card.pieceName} / 3Tごとに獲得</strong>
          </div>
          <div class="single-card-row">
            <button class="ability-card ${rarityClass(card.rarity)} mecha-upgrade-card" data-command="claim-mecha-upgrade">
              <span class="rarity">${card.rarity}</span>
              <span class="mecha-card-art ${card.upgrade}" aria-hidden="true">
                <i></i>
                <b>${card.artLabel}</b>
              </span>
              <strong>${card.name}</strong>
              <em>Hyper Mecha Upgrade</em>
              <p>${card.description}</p>
              <small>クリックで獲得してターン開始能力へ進みます。</small>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private renderProcessExecutionOverlay(): string {
    const row = (owner: "player" | "ai", label: string): string => {
      const percent = this.game.processExecutionHpPercent[owner];
      const hp = this.game.bases[owner].hp;
      return `
        <div class="process-row">
          <div>
            <strong>${label}</strong>
            <span>${hp} HP / ${percent}%</span>
          </div>
          <button type="button" data-process-owner="${owner}" data-process-adjust="-100">-100%</button>
          <input type="range" min="10" max="1000" step="10" value="${percent}" data-process-owner="${owner}" data-process-range />
          <button type="button" data-process-owner="${owner}" data-process-adjust="100">+100%</button>
        </div>
      `;
    };

    return `
      <div class="overlay process-overlay">
        <div class="process-console">
          <div class="process-titlebar">
            <span>process://hp-editor</span>
            <strong>RARE EXECUTION</strong>
          </div>
          <div class="process-screen">
            <p>HP_PROCESS_WRITE ACCESS GRANTED</p>
            ${row("player", "自分")}
            ${row("ai", "相手")}
          </div>
          <button class="process-run-button" data-command="finish-process">EXECUTE / RETURN</button>
        </div>
      </div>
    `;
  }

  private renderDebugConsole(): string {
    if (!this.debugOpen) {
      return `<button class="debug-launcher" data-debug-toggle>DEBUG</button>`;
    }

    const quickCommands = [
      ["歩", "spawn player pawn"],
      ["忍者", "spawn player ninja"],
      ["タレット", "spawn player turret"],
      ["神", "spawn player god"],
      ["いやな奴", "spawn player iyanaYatsu"],
      ["メカ", "spawn player hyperMecha"],
      ["能力3枚", "card player"],
      ["メカ強化", "mecha player random"],
      ["衛星照準", "mecha player satelliteAim"],
      ["プロセス", "mecha player processExecution"],
      ["敵HP1", "enemyhp1"],
      ["USB+1", "usb player 1"],
      ["溶岩x3", "terrain lava 3 player"],
      ["Ⅱ型化", "promote player"],
      ["次F", "tower next"],
      ["+5F", "tower +5"],
      ["1F", "tower floor 1"],
      ["5F", "tower floor 5"],
      ["30F", "tower floor 30"],
      ["31F", "tower floor 31"],
      ["城5F", "castle floor 5"],
      ["城20F", "castle floor 20"],
      ["城40F", "castle floor 40"],
    ];
    const lines = this.debugLines.length > 0 ? this.debugLines : ["debug ready. type help"];

    return `
      <section class="debug-console">
        <div class="debug-titlebar">
          <span>debug://rogue-shogi</span>
          <button type="button" data-debug-toggle>_</button>
        </div>
        <div class="debug-output">
          ${lines.map((line) => `<p><span>&gt;</span>${this.escapeHtml(line)}</p>`).join("")}
        </div>
        <div class="debug-quickbar">
          ${quickCommands
            .map(
              ([label, command]) =>
                `<button type="button" data-debug-command="${this.escapeAttr(command)}">${this.escapeHtml(label)}</button>`,
            )
            .join("")}
        </div>
        <form class="debug-input-row" data-debug-form>
          <span>$</span>
          <input data-debug-input spellcheck="false" autocomplete="off" placeholder="enemyhp1 | tower next | tower +5 | spawn player ninja | mecha player usbProMax" />
          <button type="submit">RUN</button>
        </form>
      </section>
    `;
  }


  private handlePasswordDigit(digit: string): void {
    if (!this.passwordOverlayOpen || this.passwordUnlocking || !/^\d$/.test(digit)) return;
    const pass = "1129";
    const next = this.passwordEntry + digit;
    if (!pass.startsWith(next)) {
      this.passwordEntry = "";
      this.passwordFeedback = "error";
      this.render();
      return;
    }
    this.passwordFeedback = "idle";
    this.passwordEntry = next;
    this.passwordDigitFlashUntil = Date.now() + 800;
    this.render();
    if (next.length === pass.length) {
      this.passwordUnlocking = true;
      this.debugEnabled = true;
      this.debugOpen = false;
      window.setTimeout(() => {
        this.passwordUnlocking = false;
        this.passwordOverlayOpen = false;
        this.passwordEntry = "";
        this.pushDebugLine("debug menu unlocked");
        this.render();
      }, 3200);
    } else {
      window.setTimeout(() => this.render(), 820);
    }
  }

  private renderPasswordOverlay(): string {
    if (!this.passwordOverlayOpen && !this.passwordUnlocking) return "";
    const masked = `${this.passwordEntry}${"•".repeat(Math.max(0, 4 - this.passwordEntry.length))}`;
    const flash = Date.now() < this.passwordDigitFlashUntil;
    const matrixRows = Array.from({ length: 24 }, (_, row) => `<span style="--x:${(row / 24) * 100}%"></span>`).join("");
    return `
      <div class="overlay password-overlay ${this.passwordUnlocking ? "unlocking" : ""}">
        <div class="password-shell">
          <h3>DEBUG パスワード</h3>
          <p class="password-display ${this.passwordFeedback === "error" ? "error" : ""}">${masked}</p>
          <div class="password-keypad ${flash ? "flash" : ""}">
            ${["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((n) => `<button type="button" data-password-digit="${n}">${n}</button>`).join("")}
          </div>
          <button type="button" class="title-back-button" data-command="close-password">閉じる</button>
        </div>
        <div class="matrix-rain">${matrixRows}</div>
      </div>
    `;
  }

  private executeDebugCommand(command: string): void {
    const trimmed = command.trim();
    if (!trimmed) return;
    this.pushDebugLine(`$ ${trimmed}`);
    const result = this.game.debugExecuteCommand(trimmed);
    this.pushDebugLine(result);
    this.render();
  }

  private pushDebugLine(line: string): void {
    this.debugLines = [...this.debugLines, line].slice(-9);
  }

  private escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);
  }

  private escapeAttr(value: string): string {
    return this.escapeHtml(value);
  }

  private renderAbilityCard(offer: AbilityDefinition): string {
    return `
      <button class="ability-card ${rarityClass(offer.rarity)}" data-ability-id="${offer.id}">
        <span class="rarity">${offer.rarity}</span>
        <strong>${offer.name}</strong>
        <em>${offer.category}</em>
        <p>${offer.description}</p>
      </button>
    `;
  }

  private renderLog(entry: LogEntry): string {
    return `<p class="log ${entry.tone}">${entry.text}</p>`;
  }

  private renderGameOver(): string {
    const won = this.game.winner === "player";
    const tower = this.game.towerRun.active ? this.game.towerRun : null;
    const towerName = tower ? this.escapeHtml(tower.dungeonName) : "";
    if (won && tower?.conquestEventUnlocked) return this.renderTowerConquestEvent();
    const normalTypes = new Set(["king", "rook", "bishop", "gold", "silver", "knight", "lance", "pawn"]);
    const implementedSpecials = Object.values(PIECE_DEFINITIONS).filter((piece) => piece.implemented && !normalTypes.has(piece.type));
    const plannedSpecials = Object.values(PIECE_DEFINITIONS).filter((piece) => !piece.implemented);
    const totalCards = ABILITY_DEFINITIONS.length;

    return `
      <div class="overlay">
        <div class="result">
          <span>${won ? "勝利" : "敗北"}</span>
          <strong>${won ? "王権は守られました" : "本拠地が崩れました"}</strong>
          ${tower ? `<p>${towerName} ${won ? "制覇" : `${tower.floor}Fで撤退`} / 到達 ${tower.clearedFloors + (won ? 0 : 1)}F / 永続強化 ${tower.permanentRewards.length}個</p>` : ""}
          <p>実装済み特殊コマ ${implementedSpecials.length} 種 / 拡張候補 ${plannedSpecials.length} 種 / 能力カード ${totalCards} 種</p>
        </div>
      </div>
    `;
  }

  private renderTowerConquestEvent(): string {
    const dialogueIndex = Math.min(this.conquestDialogueIndex, CONQUEST_DIALOGUE.length - 1);
    const line = CONQUEST_DIALOGUE[dialogueIndex];
    const isFinalLine = dialogueIndex >= CONQUEST_DIALOGUE.length - 1;

    return `
      <div class="overlay conquest-event-overlay">
        <section class="conquest-event adv-event ${line.tone}">
          <div class="conquest-image-frame adv-scene">
            <img src="${assetUrl("tower-conquest-bg.png")}" alt="完全制覇されたサーティビルディング" />
            <div class="adv-vignette" aria-hidden="true"></div>
            <div class="adv-clear-chip">
              <span>サーティビルディング完全制覇</span>
              <strong>31F CLEAR</strong>
            </div>
          </div>
          <div class="conquest-dialogue adv-dialogue">
            <div class="adv-nameplate">${this.escapeHtml(line.speaker)}</div>
            <p>${this.escapeHtml(line.text)}</p>
            <div class="conquest-actions">
              <span class="adv-progress">${dialogueIndex + 1}/${CONQUEST_DIALOGUE.length}</span>
              ${
                isFinalLine
                  ? `<button type="button" class="command-button" data-command="return-title">
                      <span>タイトルへ戻る</span>
                      <small>魔王ボランティアと魔王城入口を確認</small>
                    </button>
                    <button type="button" class="command-button conquest-disabled" disabled>
                      <span>乗っ取られ魔王城</span>
                      <small>COMING SOON</small>
                    </button>`
                  : `<button type="button" class="command-button adv-next-button" data-command="conquest-next">
                      <span>次へ</span>
                      <small>会話を進める</small>
                    </button>`
              }
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
