import { ABILITY_DEFINITIONS, RARITY_ORDER, RARITY_WEIGHT } from "../content/abilityDefinitions";
import type { AbilityDefinition, AbilityRarity, PassiveId, PlayerId, TerrainType } from "../types";
import type { GameManager } from "./GameManager";

const rarityIndex = (rarity: AbilityRarity): number => RARITY_ORDER.indexOf(rarity);

export class Ability {
  constructor(readonly definition: AbilityDefinition) {}

  apply(game: GameManager, owner: PlayerId): string {
    const { effect } = this.definition;

    switch (effect.type) {
      case "summon": {
        if (!game.canSummonPieceType(owner, effect.pieceType, effect.selfBaseDamage ?? 0)) {
          return `${this.definition.name}: 条件不足で召喚できません。神は6ターン目以降、かつ本拠地HPに余裕が必要です。`;
        }
        const piece = game.summonPiece(owner, effect.pieceType);
        if (piece && effect.selfBaseDamage) {
          game.damageBase(owner, effect.selfBaseDamage);
        }
        return piece
          ? `${this.definition.name}: ${piece.definition.name}を召喚しました。`
          : `${this.definition.name}: 召喚できる空きマスがありません。`;
      }
      case "healBase":
        game.healBase(owner, effect.amount);
        return `${this.definition.name}: 本拠地HPを${effect.amount}回復しました。`;
      case "terrain":
        return this.applyTerrain(game, owner, effect.terrainType, effect.count);
      case "passive":
        game.addPassive(owner, effect.passiveId);
        return `${this.definition.name}: 永続能力を獲得しました。`;
      case "temporaryDoubleAction":
        return game.grantDoubleAction(owner, this.definition.name);
      case "oracle":
        game.raiseNextOffer(owner);
        return `${this.definition.name}: 次の能力抽選が強化されます。`;
      case "convertEnemyLowRank":
        return game.tryConvertEnemy(owner, effect.chance);
      case "damageEnemyBase": {
        const enemy = game.getOpponent(owner);
        if (effect.selfBaseDamage) game.damageBase(owner, effect.selfBaseDamage);
        game.damageBase(enemy, effect.amount);
        return `${this.definition.name}: 敵本拠地に${effect.amount}ダメージ。`;
      }
      case "banishIyanaYatsu": {
        const count = game.banishIyanaYatsu(owner);
        return count > 0
          ? `${this.definition.name}: いやなやつ${count}体が泣きべそをかいて逃げました。`
          : `${this.definition.name}: 退散させるいやなやつがいません。`;
      }
      case "startFusion":
        return game.startHyperMechaFusion(owner, this.definition.name);
      case "drawLogOnly":
        return `${this.definition.name}: この能力は拡張用データとして登録済みです。`;
    }
  }

  private applyTerrain(game: GameManager, owner: PlayerId, terrainType: TerrainType, count: number): string {
    if (terrainType === "warp") {
      const placed = game.placeWarpPair(count, owner);
      return `${this.definition.name}: ワープマスを${placed}個配置しました。`;
    }

    const placed = game.placeTerrain(terrainType, count, owner);
    return `${this.definition.name}: ${placed}個の特殊マスを配置しました。`;
  }

  static getImplementedDefinitions(): AbilityDefinition[] {
    return ABILITY_DEFINITIONS.filter((definition) => definition.implemented);
  }

  static fixedOffers(ids: string[]): AbilityDefinition[] {
    return ids
      .map((id) => ABILITY_DEFINITIONS.find((definition) => definition.id === id && definition.implemented))
      .filter((definition): definition is AbilityDefinition => Boolean(definition));
  }

  static drawOffers(count: number, rarityBonus: number, isAllowed: (definition: AbilityDefinition) => boolean = () => true): AbilityDefinition[] {
    const pool = this.getImplementedDefinitions().filter(isAllowed);
    const weighted = pool.flatMap((definition) => {
      const boosted = Math.min(RARITY_ORDER.length - 1, rarityIndex(definition.rarity) + rarityBonus);
      const weight = Math.max(1, RARITY_WEIGHT[RARITY_ORDER[boosted]] ?? 1);
      return Array.from({ length: weight }, () => definition);
    });

    const offers: AbilityDefinition[] = [];
    while (offers.length < count && weighted.length > 0) {
      const pick = weighted[Math.floor(Math.random() * weighted.length)];
      if (!offers.some((offer) => offer.id === pick.id)) {
        offers.push(pick);
      }
    }

    return offers;
  }
}

export const passiveLabel = (passive: PassiveId): string => {
  switch (passive) {
    case "pawnEvolution":
      return "歩兵進化";
    case "kingAwe":
      return "王の威圧";
    case "homeGuard":
      return "留守番隊";
    case "turretRange":
      return "タレット射程+";
    case "summonDiscount":
      return "召喚補助";
    case "cursedMomentum":
      return "呪速";
  }
};
