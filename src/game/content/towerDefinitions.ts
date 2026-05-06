import type { PieceType, TerrainType, TowerRestSpot } from "../types";

export interface TowerBossDefinition {
  floor: number;
  name: string;
  title: string;
  description: string;
  summons: PieceType[];
  terrain: TerrainType[];
}

export interface DemonCastleBossDefinition extends TowerBossDefinition {
  hp: number;
  scenarioBefore: string;
  scenarioAfter: string;
  scenarioBeforeLines: string[];
  scenarioAfterLines: string[];
  skillName: string;
  demonAttackGain: number;
}

export interface TowerRewardDefinition {
  id: string;
  name: string;
  description: string;
}

export const TOWER_MAX_FLOOR = 31;

export const COMMON_TOWER_NAMES = [
  "さとう",
  "すずき",
  "たかはし",
  "たなか",
  "わたなべ",
  "いとう",
  "やまもと",
  "なかむら",
  "こばやし",
  "かとう",
  "よしだ",
  "やまだ",
  "ささき",
  "やまぐち",
  "まつもと",
  "いのうえ",
  "きむら",
  "はやし",
  "しみず",
  "やまざき",
];

export const TOWER_REST_SPOTS: TowerRestSpot[] = [
  {
    id: "office",
    name: "オフィスビル",
    rarity: 1,
    description: "紙コップの水と妙に硬い会議椅子で全回復する。",
  },
  {
    id: "gasStation",
    name: "ガソリンスタンド",
    rarity: 2,
    description: "燃料の匂いと缶コーヒーで全回復する。",
  },
  {
    id: "stationWaitingRoom",
    name: "駅の待合所",
    rarity: 3,
    description: "時刻表の下で一息つき、共有HPを全回復する。",
  },
];

export const TOWER_BOSSES: Record<number, TowerBossDefinition> = {
  5: {
    floor: 5,
    name: "きみこちゃん",
    title: "男衆を従える中ボス",
    description: "特殊コマ「男」を並べて、正面から圧をかけてくる。",
    summons: ["man", "man", "man", "man", "gold"],
    terrain: ["trap"],
  },
  10: {
    floor: 10,
    name: "いやな奴",
    title: "増殖する悪態フロア主任",
    description: "盤面のいやな奴と同じ性質で、放置すると王将の自由を奪う。",
    summons: ["iyanaYatsu", "iyanaYatsu", "iyanaYatsu", "ninja"],
    terrain: ["curse", "trap"],
  },
  15: {
    floor: 15,
    name: "瑞風",
    title: "走る豪華列車",
    description: "ワープマスと高速駒で線路のように盤面を切り裂く。",
    summons: ["rook", "bishop", "ninja", "ninja", "turret"],
    terrain: ["warp", "warp", "heal"],
  },
  20: {
    floor: 20,
    name: "四季島",
    title: "季節を塗り替える展望車",
    description: "春夏秋冬の特殊マスを敷き、回復と罠を交互に押し付ける。",
    summons: ["turret", "turret", "gold", "silver", "ninja"],
    terrain: ["heal", "lava", "trap", "divine"],
  },
  25: {
    floor: 25,
    name: "七星",
    title: "七つ星の夜行要塞",
    description: "七つの脅威を散らし、神域とタレットで王手筋を狭める。",
    summons: ["god", "turret", "turret", "ninja", "ninja", "rook", "bishop"],
    terrain: ["divine", "curse", "warp", "warp"],
  },
  30: {
    floor: 30,
    name: "冒険者カツドン",
    title: "カレーで仕上がる最上階の冒険者",
    description: "超必殺技「超究覇斬」で横一列を消し、リーダーへ30ダメージを与える。",
    summons: ["hyperMecha", "ninja", "ninja", "man", "man", "turret"],
    terrain: ["lava", "trap", "heal"],
  },
  31: {
    floor: 31,
    name: "魔王ボランティア",
    title: "屋上で待つ4000HPの親切な災厄",
    description: "魔王の風、呪い、拠点ダメージを遠慮なく連発する隠しボス。",
    summons: ["god", "hyperMecha", "turret", "turret", "iyanaYatsu", "ninja", "rook", "bishop"],
    terrain: ["lava", "lava", "curse", "divine", "trap"],
  },
};

export const DEMON_CASTLE_MAX_FLOOR = 40;

export const DEMON_CASTLE_COMMON_NAMES = [
  "城壁の魔兵",
  "乗っ取り衛兵",
  "黒鍵の番人",
  "玉座掃除係",
  "地下倉庫の見張り",
  "偽魔王軍の歩哨",
  "呪い皿洗い",
  "赤絨毯の刺客",
  "門前の火吹き",
  "王冠泥棒見習い",
];

export const DEMON_CASTLE_BOSSES: Record<number, DemonCastleBossDefinition> = {
  5: {
    floor: 5,
    name: "魔人アメッサー",
    title: "魔王防衛軍その1",
    description: "斧のような雨を降らせる先鋒。倒すと魔人攻撃が解放される。",
    scenarioBefore: "アメッサーは城門に座り込み、奪われた魔王城の旗を雑に踏んでいた。「ここから先は偽魔王軍のものだ」と笑う。",
    scenarioAfter: "アメッサーは膝をつき、あなたの強さを認めた。「魔王城を取り返すなら、俺の魔力も使え」魔人攻撃が解放された。",
    scenarioBeforeLines: ["◆ 城門前", "アメッサー「その旗、もう偽魔王軍の足拭きだ。返してほしけりゃ力で来な」", "魔王ボランティア「……城門の石が泣いてる。ここから取り返すよ。」"],
    scenarioAfterLines: ["◆ 城門奪還", "アメッサー「負けだ。旗も城門も返す。俺の魔力も持っていけ」", "魔人攻撃が解放された。"],
    skillName: "魔雨斧",
    hp: 900,
    summons: ["man", "silver", "turret", "ninja"],
    terrain: ["trap", "curse"],
    demonAttackGain: 1,
  },
  10: {
    floor: 10,
    name: "魔人シュミット",
    title: "魔王防衛軍その2 / 炎魔人",
    description: "炎の鍛冶炉から生まれた魔人。溶岩マスを増やし、城内を焼く。",
    scenarioBefore: "鍛冶場の熱気の中、シュミットが槌を振るう。「前の魔王に義理はない。だが城を焼く奴らはもっと気に入らん」",
    scenarioAfter: "シュミットは炎を小さく畳んだ。「俺の火を貸す。魔人攻撃に炎を混ぜろ」魔人攻撃が強化された。",
    scenarioBeforeLines: ["◆ 灼熱鍛冶場", "シュミット「城を守る炎は好きだが、城を喰う炎は嫌いだ」", "シュミット「主張したいなら、まずこの炉の温度を超えてみろ」"],
    scenarioAfterLines: ["◆ 炉心停止", "シュミット「いい鍛え方だ。次は俺の火を前線で使え」", "魔人攻撃が強化された。"],
    skillName: "炎魔炉",
    hp: 1500,
    summons: ["bomber", "turret", "gold", "lance", "pawn"],
    terrain: ["lava", "lava", "trap"],
    demonAttackGain: 1,
  },
  15: {
    floor: 15,
    name: "魔人秋水",
    title: "魔王防衛軍その3 / 水魔人",
    description: "水路を支配する静かな魔人。回復と拘束で長期戦に引きずり込む。",
    scenarioBefore: "地下水路で秋水が杯を傾ける。「城は濁った。だが、主を名乗る者が戻るなら水は道を開く」",
    scenarioAfter: "秋水は水面を叩き、味方の魔力へ流れを繋いだ。「次からは水も撃つ」魔人攻撃が強化された。",
    scenarioBeforeLines: ["◆ 地下水路", "秋水「濁流は嘘を流せない。あなたの覚悟、ここで測る」", "秋水「澄ませる価値がある主なら、水は剣にも盾にもなる」"],
    scenarioAfterLines: ["◆ 水門再接続", "秋水「うん、濁りは消えた。次の戦いは私の流れで押し流す」", "魔人攻撃が強化された。"],
    skillName: "秋水縛り",
    hp: 2300,
    summons: ["jujutsushi", "medic", "ninja", "bishop", "slime"],
    terrain: ["heal", "warp", "warp", "curse"],
    demonAttackGain: 1,
  },
  20: {
    floor: 20,
    name: "魔人カツドン",
    title: "いやな奴の突然変異体",
    description: "冒険者カツドンが魔人になった糞野郎。超究魔人覇斬で細かく痛い攻撃を連発する。こいつは仲間にならない。",
    scenarioBefore: "玉座前の廊下に、嫌な笑い声が響く。魔人カツドンはカレー皿を床に投げ、「城も魔王も俺の踏み台だっち！」と叫ぶ糞野郎だった。",
    scenarioAfter: "カツドンは煙を上げて逃げた。仲間にはならない。むしろ誰も仲間にしたくない。魔王ボランティアは黙って床を拭いた。",
    scenarioBeforeLines: ["◆ 玉座前回廊", "魔人カツドン「踏み台は多いほどいいだっち！ 城も魔王も全部オレの宣伝素材！」", "魔王ボランティア「うわぁ……ほんとに床が汚れるタイプだ……。」"],
    scenarioAfterLines: ["◆ 回廊清掃中", "魔人カツドン「覚えてろだっち！」（煙幕で撤退）", "仲間化失敗。魔人攻撃の強化はない。"],
    skillName: "超究魔人覇斬",
    hp: 3300,
    summons: ["iyanaYatsu", "iyanaYatsu", "bomber", "hyperMecha", "ninja", "man"],
    terrain: ["lava", "trap", "curse"],
    demonAttackGain: 0,
  },
  25: {
    floor: 25,
    name: "魔将バルザック",
    title: "乗っ取り軍の会計係",
    description: "城の予算を勝手に使い、罠とタレットを増設してくる魔将。",
    scenarioBefore: "バルザックは帳簿を抱えていた。「この城はもう買収済みです。魔王権も維持費も、ぜんぶ私の数字です」",
    scenarioAfter: "帳簿は燃え、城の罠が味方側へ切り替わった。「数字で負けました」魔人攻撃がさらに強化された。",
    scenarioBeforeLines: ["◆ 会計区画", "バルザック「玉座は契約書の付録ですよ。ハンコ一つで主は変わる」", "バルザック「数字で殴る戦争、あなたにできますか？」"],
    scenarioAfterLines: ["◆ 予算再編", "バルザック「その決裁、完敗です。罠の予算をあなた側へ戻します」", "魔人攻撃が強化された。"],
    skillName: "赤字決算罠",
    hp: 4200,
    summons: ["turret", "turret", "gatekeeper", "engineer", "gold", "rook"],
    terrain: ["trap", "trap", "lava", "heal"],
    demonAttackGain: 1,
  },
  30: {
    floor: 30,
    name: "武神カツドン",
    title: "帰ってきた糞野郎",
    description: "魔人カツドンが武神ぶって帰ってきた。超究武神覇斬で盤面を十字に割る。",
    scenarioBefore: "崩れた大広間で、またカツドンが待っていた。「武神になって帰ってきただっち！」本当にしつこい糞野郎だ。",
    scenarioAfter: "武神カツドンは派手に吹き飛び、最後まで仲間にならずに逃げた。魔王ボランティアは「二度と来ないで」と小声で言った。",
    scenarioBeforeLines: ["◆ 崩落大広間", "武神カツドン「武神カツドン様の再登場だっち！ 拍手しろだっち！」", "魔王ボランティア「拍手より先に消火器が必要です。」"],
    scenarioAfterLines: ["◆ 崩落大広間（静寂）", "武神カツドン「また来るだっち！」（やっぱり撤退）", "仲間化失敗。魔人攻撃の強化はない。"],
    skillName: "超究武神覇斬",
    hp: 5600,
    summons: ["hyperMecha", "dragon", "ninja", "bomber", "iyanaYatsu", "iyanaYatsu"],
    terrain: ["lava", "lava", "trap", "curse"],
    demonAttackGain: 0,
  },
  35: {
    floor: 35,
    name: "魔王ガレオン",
    title: "ボランティアの上位互換",
    description: "親切さを武器にする旧魔王。風、呪い、支援を同時に使う。",
    scenarioBefore: "ガレオンは丁寧に礼をした。「弱い魔王を城から追い出すのも、民のためです」その声は優しいが、目は冷たい。",
    scenarioAfter: "ガレオンは微笑んだまま道を譲る。「君たちの覚悟、少しだけ認めましょう」魔人攻撃が大きく強化された。",
    scenarioBeforeLines: ["◆ 王座防衛線", "ガレオン「親切とは、強者が秩序を選ぶことです。あなたにその重さはありますか」", "ガレオン「証明してください。魔王である前に、城の責任者だと」"],
    scenarioAfterLines: ["◆ 王座防衛線突破", "ガレオン「良い統治です。民を守る刃なら、私の風も貸しましょう」", "魔人攻撃が大きく強化された。"],
    skillName: "上位魔王の風",
    hp: 7000,
    summons: ["god", "jujutsushi", "turret", "turret", "dragon", "divineVassal"],
    terrain: ["divine", "curse", "lava", "trap", "heal"],
    demonAttackGain: 2,
  },
  40: {
    floor: 40,
    name: "真魔王ボランティア",
    title: "再臨を企てた最後の魔王",
    description: "彼女の目的は、魔王を殺させて自分が真魔王として再臨することだった。魔人攻撃と盤面ギミックを重ねないと削り切れない。",
    scenarioBefore: "玉座の奥で、魔王ボランティアが笑った。「ごめんね。あなたに魔王たちを倒してもらって、私は真魔王として戻るつもりだったの」",
    scenarioAfter: "真魔王ボランティアは王冠を置いた。「それでも、助けてくれたことは嘘じゃなかった」乗っ取られ魔王城は解放された。",
    scenarioBeforeLines: ["◆ 最深玉座", "真魔王ボランティア「ここまで来てくれてありがとう。全部、私の再臨のためだったの」", "真魔王ボランティア「でもね……この城を好きな気持ちだけは、本当だった。」"],
    scenarioAfterLines: ["◆ 玉座解放", "真魔王ボランティア「王冠は置いていく。次の主は、あなたたちの選択で決めて」", "乗っ取られ魔王城は解放された。"],
    skillName: "真魔王再臨",
    hp: 9000,
    summons: ["god", "dragon", "hyperMecha", "turret", "turret", "jujutsushi", "divineVassal", "iyanaYatsu"],
    terrain: ["divine", "divine", "curse", "lava", "trap"],
    demonAttackGain: 0,
  },
};

export const TOWER_REWARDS: TowerRewardDefinition[] = [
  {
    id: "sharedHpFrame",
    name: "共有HPフレーム",
    description: "共有HPの最大値+25。長丁場でじわじわ効く。",
  },
  {
    id: "floorRepairCrew",
    name: "階層修理班",
    description: "各階クリア時の小回復量が少し増える。",
  },
  {
    id: "premiumOfferDesk",
    name: "プレミアム受付",
    description: "次の能力カード提示のレアリティが上がる。",
  },
  {
    id: "emergencyUsb",
    name: "非常用USB",
    description: "追加融合チャンスを1回得る。",
  },
  {
    id: "towerCurryTicket",
    name: "塔内カレー券",
    description: "獲得時に共有HPを中回復し、カツドン戦の圧に備える。",
  },
  {
    id: "antiNuisancePoster",
    name: "悪態禁止ポスター",
    description: "いやな奴を1体だけ即退散させる。",
  },
];

export const getTowerDifficultyTier = (floor: number): number => Math.max(1, Math.ceil(Math.min(floor, 30) / 5));

export const getTowerEnemyBaseHp = (floor: number): number => {
  if (floor >= 31) return 4000;
  const progress = Math.max(0, (floor - 1) / 30);
  return Math.round(140 + 3660 * progress ** 1.45);
};

export const isTowerBossFloor = (floor: number): boolean => Boolean(TOWER_BOSSES[floor]);

export const getDemonCastleDifficultyTier = (floor: number): number => Math.max(1, Math.ceil(Math.min(floor, DEMON_CASTLE_MAX_FLOOR) / 5));

export const getDemonCastleEnemyBaseHp = (floor: number): number => {
  const boss = DEMON_CASTLE_BOSSES[floor];
  if (boss) return boss.hp;
  const progress = Math.max(0, floor / DEMON_CASTLE_MAX_FLOOR);
  return Math.round(260 + 6200 * progress ** 1.35);
};

export const isDemonCastleBossFloor = (floor: number): boolean => Boolean(DEMON_CASTLE_BOSSES[floor]);
