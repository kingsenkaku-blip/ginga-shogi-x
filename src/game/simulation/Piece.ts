import { PIECE_DEFINITIONS } from "../content/pieceDefinitions";
import type { Coord, HyperMechaUpgrade, PieceType, PlayerId } from "../types";

let pieceSequence = 0;

export class Piece {
  readonly id: string;
  type: PieceType;
  owner: PlayerId;
  position: Coord;
  hp: number;
  maxHp: number;
  stunnedTurns = 0;
  weakenedTurns = 0;
  curseStacks = 0;
  movePenalty = 0;
  extraActions = 0;
  specialCooldown = 0;
  mechUpgradeCooldown = 0;
  mechUpgrades: HyperMechaUpgrade[] = [];
  mechaKillCount = 0;
  mechaTier: 1 | 2 = 1;

  constructor(type: PieceType, owner: PlayerId, position: Coord) {
    this.id = `${owner}-${type}-${pieceSequence++}`;
    this.type = type;
    this.owner = owner;
    this.position = { ...position };
    this.maxHp = PIECE_DEFINITIONS[type].maxHp;
    this.hp = this.maxHp;
  }

  get definition() {
    return PIECE_DEFINITIONS[this.type];
  }

  get isSpecial(): boolean {
    return !["king", "rook", "bishop", "gold", "silver", "knight", "lance", "pawn"].includes(this.type);
  }

  get canAct(): boolean {
    return this.stunnedTurns <= 0;
  }

  get footprintSize(): number {
    return this.type === "hyperMecha" && this.mechaTier >= 2 ? 2 : 1;
  }

  damage(amount: number): boolean {
    this.hp -= amount;
    return this.hp <= 0;
  }

  heal(amount: number): void {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  resetTurnStatuses(): void {
    if (this.stunnedTurns > 0) this.stunnedTurns -= 1;
    if (this.weakenedTurns > 0) this.weakenedTurns -= 1;
    if (this.specialCooldown > 0) this.specialCooldown -= 1;
    if (this.mechUpgradeCooldown > 0) this.mechUpgradeCooldown -= 1;
    this.movePenalty = 0;
  }

  hasMechUpgrade(upgrade: HyperMechaUpgrade): boolean {
    return this.mechUpgrades.includes(upgrade);
  }
}
