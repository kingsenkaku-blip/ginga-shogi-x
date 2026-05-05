import { IMPLEMENTED_SPECIAL_PIECES, PIECE_DEFINITIONS } from "../content/pieceDefinitions";
import type { Coord, MoveOption, PieceType, PlayerId, TerrainTile, TerrainType } from "../types";
import { Piece } from "./Piece";

const BOARD_SIZE = 11;

const keyOf = (coord: Coord): string => `${coord.x},${coord.y}`;

export class Board {
  readonly size = BOARD_SIZE;
  readonly pieces = new Map<string, Piece>();
  readonly terrain = new Map<string, TerrainTile>();
  lastDefeatedEnemyType: PieceType | null = null;

  setupInitialPosition(): void {
    this.pieces.clear();
    this.terrain.clear();

    const backRank: PieceType[] = ["lance", "knight", "silver", "gold", "king", "gold", "silver", "knight", "lance"];
    const backRankOffset = Math.floor((this.size - backRank.length) / 2);
    backRank.forEach((type, index) => {
      const x = backRankOffset + index;
      this.addPiece(type, "ai", { x, y: 0 });
      this.addPiece(type, "player", { x, y: this.size - 1 });
    });

    this.addPiece("rook", "ai", { x: backRankOffset + 1, y: 1 });
    this.addPiece("bishop", "ai", { x: backRankOffset + 7, y: 1 });
    this.addPiece("rook", "player", { x: backRankOffset + 7, y: this.size - 2 });
    this.addPiece("bishop", "player", { x: backRankOffset + 1, y: this.size - 2 });

    for (let x = 0; x < this.size; x += 1) {
      this.addPiece("pawn", "ai", { x, y: 2 });
      this.addPiece("pawn", "player", { x, y: this.size - 3 });
    }
  }

  addPiece(type: PieceType, owner: PlayerId, position: Coord): Piece | null {
    if (!this.isInside(position) || this.getPieceAt(position)) return null;
    const piece = new Piece(type, owner, position);
    this.pieces.set(piece.id, piece);
    return piece;
  }

  replacePiece(piece: Piece, type: PieceType): Piece {
    const replacement = new Piece(type, piece.owner, piece.position);
    replacement.extraActions = piece.extraActions;
    this.pieces.delete(piece.id);
    this.pieces.set(replacement.id, replacement);
    return replacement;
  }

  removePiece(pieceId: string): Piece | undefined {
    const piece = this.pieces.get(pieceId);
    if (piece) {
      this.pieces.delete(pieceId);
    }
    return piece;
  }

  getPiece(pieceId: string | undefined | null): Piece | undefined {
    return pieceId ? this.pieces.get(pieceId) : undefined;
  }

  getPieces(owner?: PlayerId): Piece[] {
    return [...this.pieces.values()].filter((piece) => !owner || piece.owner === owner);
  }

  getPieceAt(coord: Coord): Piece | undefined {
    return [...this.pieces.values()].find((piece) => this.occupiesCoord(piece, coord));
  }

  getKing(owner: PlayerId): Piece | undefined {
    return this.getPieces(owner).find((piece) => piece.type === "king");
  }

  isInside(coord: Coord): boolean {
    return coord.x >= 0 && coord.x < this.size && coord.y >= 0 && coord.y < this.size;
  }

  isAreaInside(origin: Coord, footprintSize: number): boolean {
    return (
      origin.x >= 0 &&
      origin.y >= 0 &&
      origin.x + footprintSize <= this.size &&
      origin.y + footprintSize <= this.size
    );
  }

  occupiesCoord(piece: Piece, coord: Coord): boolean {
    const size = piece.footprintSize;
    return (
      coord.x >= piece.position.x &&
      coord.x < piece.position.x + size &&
      coord.y >= piece.position.y &&
      coord.y < piece.position.y + size
    );
  }

  getFootprintCoords(piece: Piece, origin = piece.position): Coord[] {
    const coords: Coord[] = [];
    for (let dy = 0; dy < piece.footprintSize; dy += 1) {
      for (let dx = 0; dx < piece.footprintSize; dx += 1) {
        coords.push({ x: origin.x + dx, y: origin.y + dy });
      }
    }
    return coords;
  }

  getPiecesInArea(origin: Coord, footprintSize: number, ignorePieceId?: string): Piece[] {
    const found = new Map<string, Piece>();
    for (let dy = 0; dy < footprintSize; dy += 1) {
      for (let dx = 0; dx < footprintSize; dx += 1) {
        const piece = this.getPieceAt({ x: origin.x + dx, y: origin.y + dy });
        if (piece && piece.id !== ignorePieceId) found.set(piece.id, piece);
      }
    }
    return [...found.values()];
  }

  canPlaceFootprint(origin: Coord, footprintSize: number, ignorePieceId?: string): boolean {
    if (!this.isAreaInside(origin, footprintSize)) return false;
    return this.getPiecesInArea(origin, footprintSize, ignorePieceId).length === 0;
  }

  findNearestPlacementForFootprint(origin: Coord, footprintSize: number, ignorePieceId?: string): Coord | null {
    const candidates: Coord[] = [];
    for (let y = 0; y <= this.size - footprintSize; y += 1) {
      for (let x = 0; x <= this.size - footprintSize; x += 1) {
        const coord = { x, y };
        if (this.canPlaceFootprint(coord, footprintSize, ignorePieceId)) candidates.push(coord);
      }
    }

    return (
      candidates.sort(
        (a, b) =>
          Math.abs(a.x - origin.x) + Math.abs(a.y - origin.y) - (Math.abs(b.x - origin.x) + Math.abs(b.y - origin.y)),
      )[0] ?? null
    );
  }

  terrainAt(coord: Coord): TerrainTile | undefined {
    return this.terrain.get(keyOf(coord));
  }

  addTerrain(type: TerrainType, position: Coord, owner?: PlayerId, pairedId?: string): TerrainTile | null {
    if (!this.isInside(position) || this.terrain.has(keyOf(position))) return null;
    const tile: TerrainTile = {
      id: `terrain-${type}-${this.terrain.size}-${Math.floor(Math.random() * 9999)}`,
      type,
      position: { ...position },
      owner,
      pairedId,
    };
    this.terrain.set(keyOf(position), tile);
    return tile;
  }

  movePiece(pieceId: string, to: Coord): { piece?: Piece; captured?: Piece; capturedPieces?: Piece[] } {
    const piece = this.pieces.get(pieceId);
    if (!piece || !this.isAreaInside(to, piece.footprintSize)) return {};

    const occupants = this.getPiecesInArea(to, piece.footprintSize, piece.id);
    if (occupants.some((occupant) => occupant.owner === piece.owner)) return {};

    const capturedPieces = occupants.filter((occupant) => occupant.owner !== piece.owner);
    for (const captured of capturedPieces) {
      this.lastDefeatedEnemyType = captured.type;
      this.pieces.delete(captured.id);
    }

    piece.position = { ...to };
    return { piece, captured: capturedPieces[0], capturedPieces };
  }

  getLegalMoves(piece: Piece): MoveOption[] {
    if (!piece.canAct || piece.type === "turret") return [];

    const direction = piece.owner === "player" ? -1 : 1;
    const moves: MoveOption[] = [];

    const addStep = (dx: number, dy: number) => {
      const to = { x: piece.position.x + dx, y: piece.position.y + dy };
      this.pushIfLegal(piece, to, moves);
    };

    const addRay = (dx: number, dy: number, maxDistance = this.size) => {
      for (let distance = 1; distance <= maxDistance; distance += 1) {
        const to = { x: piece.position.x + dx * distance, y: piece.position.y + dy * distance };
        if (!this.isAreaInside(to, piece.footprintSize)) return;
        const occupants = this.getPiecesInArea(to, piece.footprintSize, piece.id);
        if (occupants.some((occupant) => occupant.owner === piece.owner)) return;
        const target = occupants.find((occupant) => occupant.owner !== piece.owner);
        moves.push({ to, kind: target ? "capture" : "move", targetPieceId: target?.id });
        if (target) return;
      }
    };

    switch (piece.type) {
      case "king":
        for (let dx = -1; dx <= 1; dx += 1) {
          for (let dy = -1; dy <= 1; dy += 1) {
            if (dx !== 0 || dy !== 0) addStep(dx, dy);
          }
        }
        break;
      case "gold":
        [
          [0, direction],
          [-1, direction],
          [1, direction],
          [-1, 0],
          [1, 0],
          [0, -direction],
        ].forEach(([dx, dy]) => addStep(dx, dy));
        break;
      case "silver":
        [
          [0, direction],
          [-1, direction],
          [1, direction],
          [-1, -direction],
          [1, -direction],
        ].forEach(([dx, dy]) => addStep(dx, dy));
        break;
      case "knight":
        addStep(-1, direction * 2);
        addStep(1, direction * 2);
        break;
      case "lance":
        addRay(0, direction);
        break;
      case "pawn":
        addStep(0, direction);
        break;
      case "rook":
        addRay(1, 0);
        addRay(-1, 0);
        addRay(0, 1);
        addRay(0, -1);
        break;
      case "bishop":
        addRay(1, 1);
        addRay(1, -1);
        addRay(-1, 1);
        addRay(-1, -1);
        break;
      case "ninja":
        [
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ].forEach(([dx, dy]) => {
          addRay(dx, dy, 2);
        });
        break;
      case "god":
        for (let dx = -2; dx <= 2; dx += 1) {
          for (let dy = -2; dy <= 2; dy += 1) {
            if (dx !== 0 || dy !== 0) addStep(dx, dy);
          }
        }
        break;
      case "man":
        for (let dx = -1; dx <= 1; dx += 1) {
          for (let dy = -1; dy <= 1; dy += 1) {
            if (dx !== 0 || dy !== 0) addStep(dx, dy);
          }
        }
        break;
      case "hyperMecha": {
        let range = piece.hasMechUpgrade("simulator") ? 4 : 2;
        if (piece.mechaTier >= 2 && piece.hasMechUpgrade("armorPurge")) range += 1;
        if (piece.mechaTier >= 2 && piece.hasMechUpgrade("reactorRampage")) range += 1;
        [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ].forEach(([dx, dy]) => addRay(dx, dy, range));
        break;
      }
      case "iyanaYatsu":
        for (let dx = -2; dx <= 2; dx += 1) {
          for (let dy = -2; dy <= 2; dy += 1) {
            if (dx !== 0 || dy !== 0) addStep(dx, dy);
          }
        }
        break;
      default:
        this.getFallbackSpecialMoves(piece).forEach((move) => moves.push(move));
        break;
    }

    const penalty = Math.max(0, piece.movePenalty + piece.weakenedTurns);
    if (penalty > 0) {
      return moves.filter((move) => Math.abs(move.to.x - piece.position.x) + Math.abs(move.to.y - piece.position.y) <= 1);
    }

    return moves;
  }

  findSummonSpot(owner: PlayerId): Coord | null {
    const homeRows =
      owner === "player"
        ? [this.size - 1, this.size - 2, this.size - 3, this.size - 4]
        : [0, 1, 2, 3];
    const center = Math.floor(this.size / 2);
    const centerOrder = Array.from({ length: this.size }, (_, index) => index).sort(
      (a, b) => Math.abs(a - center) - Math.abs(b - center),
    );

    for (const y of homeRows) {
      for (const x of centerOrder) {
        const position = { x, y };
        if (!this.getPieceAt(position)) return position;
      }
    }

    return null;
  }

  findAdjacentEmpty(origin: Coord): Coord | null {
    const candidates: Coord[] = [];
    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        if (dx === 0 && dy === 0) continue;
        const coord = { x: origin.x + dx, y: origin.y + dy };
        if (this.isInside(coord) && !this.getPieceAt(coord)) candidates.push(coord);
      }
    }
    return candidates[Math.floor(Math.random() * candidates.length)] ?? null;
  }

  findNearestEmptyTo(origin: Coord): Coord | null {
    const candidates: Coord[] = [];
    for (let y = 0; y < this.size; y += 1) {
      for (let x = 0; x < this.size; x += 1) {
        const coord = { x, y };
        if (!this.getPieceAt(coord)) candidates.push(coord);
      }
    }

    return (
      candidates.sort(
        (a, b) =>
          Math.abs(a.x - origin.x) + Math.abs(a.y - origin.y) - (Math.abs(b.x - origin.x) + Math.abs(b.y - origin.y)),
      )[0] ?? null
    );
  }

  randomEmptyCoord(preferOwner?: PlayerId): Coord | null {
    const candidates: Coord[] = [];
    for (let y = 0; y < this.size; y += 1) {
      for (let x = 0; x < this.size; x += 1) {
        const coord = { x, y };
        if (this.getPieceAt(coord) || this.terrainAt(coord)) continue;
        if (preferOwner === "player" && y <= 1) continue;
        if (preferOwner === "ai" && y >= this.size - 2) continue;
        candidates.push(coord);
      }
    }
    return candidates[Math.floor(Math.random() * candidates.length)] ?? null;
  }

  getImplementedEvolutionType(): PieceType {
    return IMPLEMENTED_SPECIAL_PIECES[Math.floor(Math.random() * IMPLEMENTED_SPECIAL_PIECES.length)];
  }

  private pushIfLegal(piece: Piece, to: Coord, moves: MoveOption[]): void {
    if (!this.isAreaInside(to, piece.footprintSize)) return;
    const occupants = this.getPiecesInArea(to, piece.footprintSize, piece.id);
    if (occupants.some((occupant) => occupant.owner === piece.owner)) return;
    const target = occupants.find((occupant) => occupant.owner !== piece.owner);
    moves.push({ to, kind: target ? "capture" : "move", targetPieceId: target?.id });
  }

  private getFallbackSpecialMoves(piece: Piece): MoveOption[] {
    const definition = PIECE_DEFINITIONS[piece.type];
    if (!definition.implemented) return [];
    const moves: MoveOption[] = [];
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) {
        if (dx !== 0 || dy !== 0) this.pushIfLegal(piece, { x: piece.position.x + dx, y: piece.position.y + dy }, moves);
      }
    }
    return moves;
  }
}
