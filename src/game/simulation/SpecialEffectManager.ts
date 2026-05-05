import type { PlayerId, TerrainTile } from "../types";
import type { GameManager } from "./GameManager";
import type { Piece } from "./Piece";

const distance = (a: { x: number; y: number }, b: { x: number; y: number }): number =>
  Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));

export class SpecialEffectManager {
  constructor(private readonly game: GameManager) {}

  resolveEndTurn(owner: PlayerId): void {
    this.resolveTurrets(owner);
    this.resolveIyanaYatsu(owner);
    this.resolveLava();
  }

  applyTerrainOnEntry(piece: Piece): void {
    const terrain = this.game.board.terrainAt(piece.position);
    if (!terrain) return;

    switch (terrain.type) {
      case "heal":
        piece.heal(1);
        this.game.healBase(piece.owner, 4);
        this.game.log(`${piece.definition.name}が回復マスで態勢を立て直しました。`, piece.owner);
        break;
      case "trap":
        piece.stunnedTurns = Math.max(piece.stunnedTurns, 1);
        this.game.log(`${piece.definition.name}が罠にかかりました。`, "danger");
        break;
      case "curse":
        piece.stunnedTurns = Math.max(piece.stunnedTurns, 1);
        piece.curseStacks += 1;
        this.game.log(`${piece.definition.name}が呪いを受けました。`, "danger");
        if (piece.curseStacks >= 3) {
          this.game.destroyPiece(piece.id, "curse");
        }
        break;
      case "warp":
        this.resolveWarp(piece, terrain);
        break;
      case "summon":
        this.game.log(`${piece.definition.name}が召喚陣を確保しました。召喚カードの価値が上がります。`, piece.owner);
        break;
      case "divine":
        if (piece.type === "god") {
          piece.specialCooldown = Math.max(0, piece.specialCooldown - 1);
          this.game.log("神域が神の消滅権能を早めました。", piece.owner);
        } else {
          piece.movePenalty += 1;
          this.game.log(`${piece.definition.name}が神域で足を取られました。`, "danger");
        }
        break;
      case "lava":
        this.game.log(`${piece.definition.name}が溶岩の熱を受けています。`, "danger");
        break;
    }
  }

  private resolveWarp(piece: Piece, terrain: TerrainTile): void {
    const target = [...this.game.board.terrain.values()].find((tile) => tile.id === terrain.pairedId);
    if (!target) return;
    if (this.game.board.getPieceAt(target.position)) return;
    piece.position = { ...target.position };
    this.game.log(`${piece.definition.name}がワープしました。`, piece.owner);
  }

  private resolveTurrets(owner: PlayerId): void {
    const turrets = this.game.board.getPieces(owner).filter((piece) => piece.type === "turret");
    const rangeBoost = this.game.hasPassive(owner, "turretRange") ? 1 : 0;

    for (const turret of turrets) {
      const enemies = this.game.board
        .getPieces(this.game.getOpponent(owner))
        .filter((piece) => distance(piece.position, turret.position) <= 2 + rangeBoost)
        .sort((a, b) => b.definition.score - a.definition.score);

      const target = enemies.find((piece) => piece.type !== "ninja" || Math.random() > 0.55);
      if (!target) continue;

      this.game.log(`タレットが${target.definition.name}を自動攻撃しました。`, owner);
      this.game.destroyPiece(target.id, "turret", owner);
    }
  }

  private resolveIyanaYatsu(owner: PlayerId): void {
    const nuisances = this.game.board.getPieces(owner).filter((piece) => piece.type === "iyanaYatsu");
    for (const nuisance of nuisances) {
      if (nuisance.specialCooldown > 0) continue;

      const spot = this.game.board.findAdjacentEmpty(nuisance.position);
      if (!spot) continue;

      const split = this.game.board.addPiece("iyanaYatsu", owner, spot);
      if (!split) continue;

      nuisance.specialCooldown = 3;
      split.specialCooldown = 3;
      this.game.log("いやなやつが放置されて増殖しました。", owner);
    }
  }

  private resolveLava(): void {
    for (const piece of [...this.game.board.pieces.values()]) {
      const terrain = this.game.board.terrainAt(piece.position);
      if (terrain?.type !== "lava") continue;
      const defeated = piece.damage(1);
      this.game.log(`${piece.definition.name}が溶岩で1ダメージを受けました。`, "danger");
      if (defeated) {
        this.game.destroyPiece(piece.id, "lava");
      }
    }
  }
}
