import { RARITY_WEIGHT } from "../content/abilityDefinitions";
import type { AbilityDefinition, MoveOption, PlayerId } from "../types";
import type { GameManager } from "./GameManager";
import type { Piece } from "./Piece";

interface CandidateAction {
  piece: Piece;
  move: MoveOption;
  score: number;
}

export class AIController {
  constructor(private readonly game: GameManager, private readonly owner: PlayerId = "ai") {}

  chooseAbility(offers: AbilityDefinition[]): AbilityDefinition {
    return [...offers].sort((a, b) => {
      const rarityDelta = (RARITY_WEIGHT[b.rarity] ?? 1) - (RARITY_WEIGHT[a.rarity] ?? 1);
      if (rarityDelta !== 0) return rarityDelta;
      const summonDelta = Number(b.category === "Summon") - Number(a.category === "Summon");
      return summonDelta;
    })[0];
  }

  takeTurn(): void {
    const action = this.pickAction();
    if (!action) {
      this.game.log("AIは動けるコマがありません。", "ai");
      this.game.finishAction();
      return;
    }

    const from = { ...action.piece.position };
    this.game.selectPiece(action.piece.id);
    this.game.log(
      `AI: ${action.piece.definition.name}を(${from.x + 1},${from.y + 1})から(${action.move.to.x + 1},${action.move.to.y + 1})へ動かします。`,
      "ai",
    );

    window.setTimeout(() => {
      if (this.game.currentPlayer !== this.owner || this.game.phase !== "ai") return;
      this.game.performMove(action.move);
    }, 520);
  }

  private pickAction(): CandidateAction | null {
    const candidates = this.getCandidates();
    if (candidates.length === 0) return null;
    return candidates.sort((a, b) => b.score - a.score)[0];
  }

  private getCandidates(): CandidateAction[] {
    const candidates: CandidateAction[] = [];

    for (const piece of this.game.board.getPieces(this.owner)) {
      const moves = this.game.getMoveOptions(piece.id);
      for (const move of moves) {
        candidates.push({
          piece,
          move,
          score: this.scoreMove(piece, move),
        });
      }
    }

    return candidates;
  }

  private scoreMove(piece: Piece, move: MoveOption): number {
    const target = move.targetPieceId ? this.game.board.getPiece(move.targetPieceId) : this.game.board.getPieceAt(move.to);
    let score = Math.random() * 0.5;

    if (target?.type === "king") score += 10000;
    if (target?.isSpecial) score += 120 + target.definition.score * 8;
    if (target) score += 30 + target.definition.score * 4;
    if (move.kind === "special") score += 80;

    const ownKing = this.game.board.getKing(this.owner);
    if (ownKing) {
      const before = Math.abs(piece.position.x - ownKing.position.x) + Math.abs(piece.position.y - ownKing.position.y);
      const after = Math.abs(move.to.x - ownKing.position.x) + Math.abs(move.to.y - ownKing.position.y);
      if (after < before) score += 8;
    }

    if (this.game.isSquareDangerous(piece.position, this.owner) && !this.game.isSquareDangerous(move.to, this.owner)) {
      score += 55;
    }

    return score;
  }
}
