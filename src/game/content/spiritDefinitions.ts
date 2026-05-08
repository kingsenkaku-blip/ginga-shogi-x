import type { SpiritDefinition, SpiritId } from "../types";

export const SPIRIT_DEFINITIONS: SpiritDefinition[] = [
  { id: "flameEmpress", element: "fire", name: "フレイムエンプレス", direction: "攻撃、溶岩、相手本拠地ダメージ" },
  { id: "tsuchio", element: "earth", name: "土男", direction: "防御、回復、罠" },
  { id: "whiteLagoon", element: "water", name: "ホワイトラグーン", alias: "白鯨", direction: "回復、浄化、ワープ" },
  { id: "woodmanMonk", element: "wood", name: "ウッドマン", title: "坊主モード", direction: "召喚、成長、歩兵進化" },
  { id: "lightningLord", element: "metal", name: "ライトニングロード", direction: "追加行動、雷撃、ハイパーメカ" },
];

export const SPIRIT_IDS: SpiritId[] = SPIRIT_DEFINITIONS.map((spirit) => spirit.id);

export const SPIRIT_BY_ID: Record<SpiritId, SpiritDefinition> = SPIRIT_DEFINITIONS.reduce(
  (acc, spirit) => ({ ...acc, [spirit.id]: spirit }),
  {} as Record<SpiritId, SpiritDefinition>,
);
