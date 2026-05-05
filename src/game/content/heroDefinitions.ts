import type { HeroDefinition, HeroId } from "../types";

export const HERO_DEFINITIONS: Record<HeroId, HeroDefinition> = {
  uesugiKenshin: {
    id: "uesugiKenshin",
    name: "上杉謙信",
    title: "越後の龍",
    archetype: "機動戦 / 前線突破",
    skillName: "車懸りの陣",
    skillDescription: "チャージ3。前線の味方最大5体に追加行動を与え、弱体と移動制限を解除する。",
    passiveName: "越後の龍",
    passiveDescription: "敵陣に味方がいるターン開始時、スキルチャージが追加で1進み、その先鋒が追加行動を得る。",
    chargeTurns: 3,
    accentColor: "#8ee7ff",
  },
  mechaArmorChan: {
    id: "mechaArmorChan",
    name: "メカ装甲ちゃん",
    title: "格納庫の姫騎士",
    archetype: "ハイパーメカ / 融合支援",
    skillName: "装甲起動プロトコル",
    skillDescription: "チャージ4。メカがいれば強化準備を即時完了。いなければ融合開始、足りない時はUSBチャンスを得る。",
    passiveName: "装甲同期",
    passiveDescription: "ターン開始時、味方ハイパーメカの強化クールダウンが追加で1進む。",
    chargeTurns: 4,
    accentColor: "#ff9fb5",
  },
  hoshiyomiKaguya: {
    id: "hoshiyomiKaguya",
    name: "星詠みかぐや",
    title: "月面観測者",
    archetype: "カード制御 / 盤面支援",
    skillName: "星図改変",
    skillDescription: "チャージ3。高レア寄りの能力カードを即座に3枚提示し、盤面に回復とワープを配置する。",
    passiveName: "月下の予兆",
    passiveDescription: "3ターンごとに次の能力カードのレアリティが上がる。",
    chargeTurns: 3,
    accentColor: "#f2c45d",
  },
  demonVolunteer: {
    id: "demonVolunteer",
    name: "魔王ボランティア",
    title: "屋上で笑う女の子魔王",
    archetype: "呪い / 拠点圧力",
    skillName: "魔王の風",
    skillDescription: "チャージ4。相手本拠地へ22ダメージを与え、呪いマスと神域を呼び、次の能力カードを強める。",
    passiveName: "親切な侵略",
    passiveDescription: "塔を完全制覇した証。今は演出と解放状態のみ。魔王城実装時に追加効果が入る予定。",
    chargeTurns: 4,
    accentColor: "#ff3434",
  },
};

export const HERO_LIST: HeroDefinition[] = Object.values(HERO_DEFINITIONS);
