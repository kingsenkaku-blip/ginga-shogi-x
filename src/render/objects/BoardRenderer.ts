import * as THREE from "three";
import { PIECE_DEFINITIONS } from "../../game/content/pieceDefinitions";
import type { Coord, MoveOption, TerrainType, VisualEffectEvent } from "../../game/types";
import type { GameManager } from "../../game/simulation/GameManager";
import type { Piece } from "../../game/simulation/Piece";

const CELL_SIZE = 1.05;

const terrainColors: Record<TerrainType, string> = {
  heal: "#55c97a",
  trap: "#d84f4f",
  warp: "#6d7cff",
  summon: "#e6b84c",
  divine: "#f4f0a7",
  lava: "#ff7a2d",
  curse: "#a65bd6",
};

interface ActiveVisualEffect {
  group: THREE.Group;
  age: number;
  duration: number;
  scaleGrowth?: number;
}

export class BoardRenderer {
  readonly group = new THREE.Group();

  private readonly squareMeshes = new Map<string, THREE.Mesh>();
  private readonly pieceMeshes = new Map<string, THREE.Group>();
  private readonly terrainMeshes = new Map<string, THREE.Mesh>();
  private readonly highlightGroup = new THREE.Group();
  private readonly effectGroup = new THREE.Group();
  private readonly processedEffectIds = new Set<string>();
  private readonly activeEffects: ActiveVisualEffect[] = [];
  private readonly tileGeometry = new THREE.BoxGeometry(CELL_SIZE * 0.96, 0.12, CELL_SIZE * 0.96);
  private readonly highlightGeometry = new THREE.PlaneGeometry(CELL_SIZE * 0.88, CELL_SIZE * 0.88);
  private readonly combatRingGeometry = new THREE.TorusGeometry(0.36, 0.025, 8, 36);
  private readonly particleGeometry = new THREE.SphereGeometry(0.055, 8, 8);
  private readonly baseRingGeometry = new THREE.CylinderGeometry(0.72, 0.72, 0.04, 36);
  private readonly baseBeamGeometry = new THREE.CylinderGeometry(0.15, 0.38, 1.45, 28);
  private readonly lightningBoltGeometry = new THREE.CylinderGeometry(0.025, 0.055, 1.35, 6);
  private readonly lightningHaloGeometry = new THREE.TorusGeometry(0.56, 0.035, 8, 40);

  constructor(private readonly game: GameManager) {
    this.group.add(this.highlightGroup);
    this.group.add(this.effectGroup);
    this.createBoard();
  }

  sync(): void {
    this.syncTerrain();
    this.syncPieces();
    this.syncHighlights();
    this.syncVisualEvents();
  }

  update(delta: number): void {
    for (let index = this.activeEffects.length - 1; index >= 0; index -= 1) {
      const effect = this.activeEffects[index];
      effect.age += delta;
      const progress = Math.min(1, effect.age / effect.duration);
      const fade = 1 - progress;

      effect.group.scale.setScalar(1 + progress * (effect.scaleGrowth ?? 1.35));
      effect.group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const velocity = child.userData.velocity as THREE.Vector3 | undefined;
          if (velocity) {
            child.position.addScaledVector(velocity, delta);
            velocity.y -= delta * 1.8;
          }
          this.setOpacity(child, fade);
        }
      });

      if (effect.age >= effect.duration) {
        effect.group.traverse((child) => {
          if (child instanceof THREE.Mesh) this.disposeMaterial(child.material);
        });
        effect.group.removeFromParent();
        this.activeEffects.splice(index, 1);
      }
    }
  }

  dispose(): void {
    this.tileGeometry.dispose();
    this.highlightGeometry.dispose();
    this.combatRingGeometry.dispose();
    this.particleGeometry.dispose();
    this.baseRingGeometry.dispose();
    this.baseBeamGeometry.dispose();
    this.lightningBoltGeometry.dispose();
    this.lightningHaloGeometry.dispose();
  }

  worldToCoord(world: THREE.Vector3): Coord {
    return {
      x: Math.round(world.x / CELL_SIZE + this.boardOffset),
      y: Math.round(world.z / CELL_SIZE + this.boardOffset),
    };
  }

  coordToWorld(coord: Coord, height = 0): THREE.Vector3 {
    return new THREE.Vector3((coord.x - this.boardOffset) * CELL_SIZE, height, (coord.y - this.boardOffset) * CELL_SIZE);
  }

  private get boardOffset(): number {
    return (this.game.board.size - 1) / 2;
  }

  private pieceVisualPosition(piece: Piece, height = 0): THREE.Vector3 {
    const world = this.coordToWorld(piece.position, height);
    if (piece.footprintSize > 1) {
      const shift = ((piece.footprintSize - 1) * CELL_SIZE) / 2;
      world.x += shift;
      world.z += shift;
    }
    return world;
  }

  private createBoard(): void {
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(CELL_SIZE * (this.game.board.size + 0.8), 0.28, CELL_SIZE * (this.game.board.size + 0.8)),
      new THREE.MeshStandardMaterial({ color: "#7a5032", roughness: 0.75 }),
    );
    base.position.y = -0.18;
    base.receiveShadow = true;
    this.group.add(base);

    for (let y = 0; y < this.game.board.size; y += 1) {
      for (let x = 0; x < this.game.board.size; x += 1) {
        const coord = { x, y };
        const mesh = new THREE.Mesh(
          this.tileGeometry,
          new THREE.MeshStandardMaterial({
            color: (x + y) % 2 === 0 ? "#d4a25d" : "#c18b49",
            roughness: 0.62,
            metalness: 0.02,
          }),
        );
        mesh.position.copy(this.coordToWorld(coord));
        mesh.userData = { coord, kind: "square" };
        mesh.receiveShadow = true;
        this.squareMeshes.set(`${x},${y}`, mesh);
        this.group.add(mesh);
      }
    }
  }

  private syncTerrain(): void {
    const activeIds = new Set<string>();

    for (const tile of this.game.board.terrain.values()) {
      activeIds.add(tile.id);
      let mesh = this.terrainMeshes.get(tile.id);
      if (!mesh) {
        mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(CELL_SIZE * 0.33, CELL_SIZE * 0.33, 0.035, 24),
          new THREE.MeshStandardMaterial({
            color: terrainColors[tile.type],
            emissive: new THREE.Color(terrainColors[tile.type]).multiplyScalar(0.25),
            transparent: true,
            opacity: 0.78,
          }),
        );
        mesh.userData = { coord: tile.position, kind: "terrain" };
        this.terrainMeshes.set(tile.id, mesh);
        this.group.add(mesh);
      }
      mesh.position.copy(this.coordToWorld(tile.position, 0.095));
    }

    for (const [id, mesh] of this.terrainMeshes) {
      if (activeIds.has(id)) continue;
      mesh.removeFromParent();
      this.terrainMeshes.delete(id);
    }
  }

  private syncPieces(): void {
    const activeIds = new Set<string>();

    for (const piece of this.game.board.pieces.values()) {
      activeIds.add(piece.id);
      let group = this.pieceMeshes.get(piece.id);
      if (group && group.userData.mechaTier !== piece.mechaTier) {
        group.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            this.disposeMaterial(child.material);
          }
        });
        group.removeFromParent();
        this.pieceMeshes.delete(piece.id);
        group = undefined;
      }
      if (!group) {
        group = this.createPieceMesh(piece);
        this.pieceMeshes.set(piece.id, group);
        this.group.add(group);
      }
      group.position.copy(this.pieceVisualPosition(piece, 0.24));
      group.rotation.y = piece.owner === "player" ? 0 : Math.PI;
      group.userData = { pieceId: piece.id, coord: piece.position, kind: "piece", mechaTier: piece.mechaTier };
      group.traverse((child) => {
        child.userData = { ...child.userData, pieceId: piece.id, coord: piece.position, kind: "piece" };
      });
    }

    for (const [id, mesh] of this.pieceMeshes) {
      if (activeIds.has(id)) continue;
      mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          const material = child.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      mesh.removeFromParent();
      this.pieceMeshes.delete(id);
    }
  }

  private createPieceMesh(piece: Piece): THREE.Group {
    const group = new THREE.Group();
    const definition = piece.definition;
    const isMechaTwo = piece.type === "hyperMecha" && piece.mechaTier >= 2;
    const ownerColor = isMechaTwo ? (piece.owner === "player" ? "#78e5ff" : "#a73bff") : piece.owner === "player" ? "#f6dfb7" : "#6d2932";
    const accent = isMechaTwo ? (piece.owner === "player" ? "#ff6f91" : "#ffe36b") : piece.owner === "player" ? "#2a5d87" : "#f2c45d";
    const radius = isMechaTwo ? 0.88 : definition.large ? 0.43 : 0.35;
    const height = isMechaTwo ? 0.78 : definition.large ? 0.54 : 0.38;

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.86, radius, height, 5),
      new THREE.MeshStandardMaterial({ color: ownerColor, roughness: isMechaTwo ? 0.28 : 0.48, metalness: isMechaTwo ? 0.55 : piece.isSpecial ? 0.14 : 0.03 }),
    );
    body.castShadow = true;
    body.receiveShadow = true;
    body.userData = { pieceId: piece.id, kind: "piece" };
    group.add(body);

    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.65, radius * 0.7, 0.035, 5),
      new THREE.MeshStandardMaterial({ color: accent, roughness: 0.35 }),
    );
    top.position.y = height * 0.53;
    top.userData = { pieceId: piece.id, kind: "piece" };
    group.add(top);

    const label = this.createLabel(isMechaTwo ? "Ⅱ" : definition.shortName, piece.owner);
    label.position.y = height * 0.62;
    label.rotation.x = -Math.PI / 2;
    label.userData = { pieceId: piece.id, kind: "piece" };
    group.add(label);

    if (isMechaTwo) {
      const aura = new THREE.Mesh(
        new THREE.TorusGeometry(0.84, 0.035, 8, 40),
        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.72, depthWrite: false }),
      );
      aura.rotation.x = Math.PI / 2;
      aura.position.y = 0.04;
      aura.userData = { pieceId: piece.id, kind: "piece" };
      group.add(aura);
    }

    return group;
  }

  private createLabel(text: string, owner: "player" | "ai"): THREE.Mesh {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas context unavailable.");

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = owner === "player" ? "#111820" : "#fff5dc";
    context.font = "bold 92px serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, 128, 132);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    return new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.58), material);
  }

  private syncHighlights(): void {
    this.highlightGroup.clear();

    if (this.game.lastMove) {
      this.addHighlight(this.game.lastMove.from, this.game.lastMove.owner === "ai" ? "#ffb84a" : "#7cff9b", 0.34);
      this.addHighlight(this.game.lastMove.to, this.game.lastMove.owner === "ai" ? "#ff7a2d" : "#55c97a", 0.48);
    }

    if (this.game.phase === "fusion") {
      const selected = new Set(this.game.fusionSelectionIds);
      for (const piece of this.game.getFusionCandidates(this.game.currentPlayer)) {
        this.addHighlight(piece.position, selected.has(piece.id) ? "#fff46a" : "#5cff9d", selected.has(piece.id) ? 0.74 : 0.34);
      }
      return;
    }

    const selected = this.game.board.getPiece(this.game.selectedPieceId);
    if (!selected) return;

    this.addFootprintHighlight(selected, selected.position, "#ffffff", 0.28);
    const moves = this.game.getMoveOptions(selected.id);
    for (const move of moves) {
      const color = move.kind === "special" ? "#bb75ff" : move.kind === "capture" ? "#ff5555" : "#6fe0ff";
      if (move.kind === "special" && move.areaSize) this.addAreaHighlight(move.to, move.areaSize, color, 0.42);
      else if (move.kind === "special") this.addHighlight(move.to, color, 0.54);
      else this.addFootprintHighlight(selected, move.to, color, 0.54);
    }
  }

  private addAreaHighlight(origin: Coord, areaSize: number, color: string, opacity: number): void {
    for (let y = origin.y; y < origin.y + areaSize; y += 1) {
      for (let x = origin.x; x < origin.x + areaSize; x += 1) {
        const coord = { x, y };
        if (this.game.board.isInside(coord)) this.addHighlight(coord, color, opacity);
      }
    }
  }

  private addFootprintHighlight(piece: Piece, origin: Coord, color: string, opacity: number): void {
    for (const coord of this.game.board.getFootprintCoords(piece, origin)) {
      if (this.game.board.isInside(coord)) this.addHighlight(coord, color, opacity);
    }
  }

  private addHighlight(coord: Coord, color: string, opacity: number): void {
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(this.highlightGeometry, material);
    mesh.position.copy(this.coordToWorld(coord, 0.18));
    mesh.rotation.x = -Math.PI / 2;
    mesh.userData = { coord, kind: "highlight" };
    this.highlightGroup.add(mesh);
  }

  private syncVisualEvents(): void {
    for (const event of this.game.visualEvents) {
      if (this.processedEffectIds.has(event.id)) continue;
      this.processedEffectIds.add(event.id);
      this.spawnVisualEffect(event);
    }

    if (this.processedEffectIds.size > 120) {
      const ids = [...this.processedEffectIds].slice(0, 60);
      ids.forEach((id) => this.processedEffectIds.delete(id));
    }
  }

  private spawnVisualEffect(event: VisualEffectEvent): void {
    if (event.kind === "combat" && event.coord) {
      this.spawnCombatEffect(event.coord, event.owner === "ai" ? "#ff805e" : "#6fe0ff");
    }

    if (event.kind === "baseDamage" && event.owner) {
      this.spawnBaseDamageEffect(event.owner, event.amount ?? 0);
    }

    if (event.kind === "godSummon" && event.coord) {
      this.spawnGodSummonEffect(event.coord);
    }

    if (event.kind === "fusion" && event.coord) {
      this.spawnFusionEffect(event.coord);
    }

    if (event.kind === "mechaTransform" && event.coord) {
      this.spawnMechaTransformEffect(event.coord);
    }

    if (event.kind === "satelliteStrike" && event.coord) {
      this.spawnSatelliteStrikeEffect(event.coord, event.amount ?? 4);
    }
  }

  private spawnCombatEffect(coord: Coord, color: string): void {
    const group = new THREE.Group();
    group.position.copy(this.coordToWorld(coord, 0.42));

    const ring = new THREE.Mesh(
      this.combatRingGeometry,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, depthWrite: false }),
    );
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    for (let index = 0; index < 10; index += 1) {
      const angle = (Math.PI * 2 * index) / 10;
      const particle = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false }),
      );
      particle.position.set(Math.cos(angle) * 0.1, 0.05, Math.sin(angle) * 0.1);
      particle.userData.velocity = new THREE.Vector3(Math.cos(angle) * 1.2, 1.0 + Math.random() * 0.55, Math.sin(angle) * 1.2);
      group.add(particle);
    }

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 0.82 });
  }

  private spawnBaseDamageEffect(owner: "player" | "ai", amount: number): void {
    const group = new THREE.Group();
    const z = owner === "player" ? (this.game.board.size - 0.25 - this.boardOffset) * CELL_SIZE : (-0.75 - this.boardOffset) * CELL_SIZE;
    group.position.set(0, 0.32, z);

    const color = owner === "player" ? "#ff4f57" : "#ffb84a";
    const ring = new THREE.Mesh(
      this.baseRingGeometry,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82, depthWrite: false }),
    );
    group.add(ring);

    const beam = new THREE.Mesh(
      this.baseBeamGeometry,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: amount >= 15 ? 0.65 : 0.42, depthWrite: false }),
    );
    beam.position.y = 0.78;
    group.add(beam);

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 1.05 });
  }

  private spawnGodSummonEffect(coord: Coord): void {
    const group = new THREE.Group();
    group.position.copy(this.coordToWorld(coord, 0.35));

    const halo = new THREE.Mesh(
      this.lightningHaloGeometry,
      new THREE.MeshBasicMaterial({ color: "#fff3a0", transparent: true, opacity: 0.95, depthWrite: false }),
    );
    halo.rotation.x = Math.PI / 2;
    group.add(halo);

    const core = new THREE.Mesh(
      this.baseBeamGeometry,
      new THREE.MeshBasicMaterial({ color: "#f7fbff", transparent: true, opacity: 0.78, depthWrite: false }),
    );
    core.position.y = 1.0;
    core.scale.set(0.38, 1.55, 0.38);
    group.add(core);

    for (let index = 0; index < 7; index += 1) {
      const angle = (Math.PI * 2 * index) / 7;
      const bolt = new THREE.Mesh(
        this.lightningBoltGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? "#ffe45c" : "#8ee7ff", transparent: true, opacity: 0.9, depthWrite: false }),
      );
      bolt.position.set(Math.cos(angle) * (0.2 + Math.random() * 0.34), 0.85 + Math.random() * 0.55, Math.sin(angle) * (0.2 + Math.random() * 0.34));
      bolt.rotation.x = Math.random() * 0.9 - 0.45;
      bolt.rotation.z = Math.random() * 1.4 - 0.7;
      bolt.userData.velocity = new THREE.Vector3(Math.cos(angle) * 0.08, -0.35 - Math.random() * 0.2, Math.sin(angle) * 0.08);
      group.add(bolt);
    }

    for (let index = 0; index < 14; index += 1) {
      const angle = (Math.PI * 2 * index) / 14;
      const spark = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color: "#fff7b8", transparent: true, opacity: 0.95, depthWrite: false }),
      );
      spark.position.set(0, 0.25, 0);
      spark.userData.velocity = new THREE.Vector3(Math.cos(angle) * 1.1, 1.15 + Math.random() * 0.5, Math.sin(angle) * 1.1);
      group.add(spark);
    }

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 1.28 });
  }

  private spawnFusionEffect(coord: Coord): void {
    const group = new THREE.Group();
    group.position.copy(this.coordToWorld(coord, 0.36));

    const ring = new THREE.Mesh(
      this.lightningHaloGeometry,
      new THREE.MeshBasicMaterial({ color: "#78ffcf", transparent: true, opacity: 0.88, depthWrite: false }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.scale.setScalar(1.25);
    group.add(ring);

    const beam = new THREE.Mesh(
      this.baseBeamGeometry,
      new THREE.MeshBasicMaterial({ color: "#8ee7ff", transparent: true, opacity: 0.48, depthWrite: false }),
    );
    beam.position.y = 0.88;
    beam.scale.set(0.44, 1.1, 0.44);
    group.add(beam);

    for (let index = 0; index < 12; index += 1) {
      const angle = (Math.PI * 2 * index) / 12;
      const spark = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? "#78ffcf" : "#f2c45d", transparent: true, opacity: 0.92, depthWrite: false }),
      );
      spark.userData.velocity = new THREE.Vector3(Math.cos(angle) * 0.9, 0.75 + Math.random() * 0.45, Math.sin(angle) * 0.9);
      group.add(spark);
    }

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 1.1 });
  }

  private spawnMechaTransformEffect(coord: Coord): void {
    const screenGroup = new THREE.Group();
    const boardSpan = CELL_SIZE * (this.game.board.size + 6);
    screenGroup.position.set(0, 0.31, 0);

    const flash = new THREE.Mesh(
      new THREE.PlaneGeometry(boardSpan, boardSpan),
      new THREE.MeshBasicMaterial({
        color: "#78e5ff",
        transparent: true,
        opacity: 0.34,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    flash.rotation.x = -Math.PI / 2;
    screenGroup.add(flash);

    const shockwave = new THREE.Mesh(
      new THREE.TorusGeometry(CELL_SIZE * 2.8, 0.08, 8, 72),
      new THREE.MeshBasicMaterial({ color: "#ff6f91", transparent: true, opacity: 0.96, depthWrite: false }),
    );
    shockwave.rotation.x = Math.PI / 2;
    screenGroup.add(shockwave);

    const widePulse = new THREE.Mesh(
      new THREE.TorusGeometry(CELL_SIZE * 4.7, 0.045, 8, 96),
      new THREE.MeshBasicMaterial({ color: "#ffe36b", transparent: true, opacity: 0.72, depthWrite: false }),
    );
    widePulse.rotation.x = Math.PI / 2;
    screenGroup.add(widePulse);

    for (let index = 0; index < 36; index += 1) {
      const angle = (Math.PI * 2 * index) / 36;
      const spark = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color: index % 3 === 0 ? "#ffe36b" : "#78e5ff", transparent: true, opacity: 0.9, depthWrite: false }),
      );
      const radius = 0.8 + Math.random() * CELL_SIZE * 1.2;
      spark.position.set(Math.cos(angle) * radius, 0.08 + Math.random() * 0.22, Math.sin(angle) * radius);
      spark.userData.velocity = new THREE.Vector3(Math.cos(angle) * 4.0, 0.45 + Math.random() * 0.35, Math.sin(angle) * 4.0);
      screenGroup.add(spark);
    }

    this.effectGroup.add(screenGroup);
    this.activeEffects.push({ group: screenGroup, age: 0, duration: 0.92, scaleGrowth: 1.8 });

    const group = new THREE.Group();
    const base = this.coordToWorld(coord, 0.4);
    base.x += CELL_SIZE * 0.5;
    base.z += CELL_SIZE * 0.5;
    group.position.copy(base);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.96, 0.045, 8, 48),
      new THREE.MeshBasicMaterial({ color: "#78e5ff", transparent: true, opacity: 0.92, depthWrite: false }),
    );
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const beam = new THREE.Mesh(
      this.baseBeamGeometry,
      new THREE.MeshBasicMaterial({ color: "#ff6f91", transparent: true, opacity: 0.46, depthWrite: false }),
    );
    beam.position.y = 0.92;
    beam.scale.set(0.62, 1.35, 0.62);
    group.add(beam);

    for (let index = 0; index < 18; index += 1) {
      const angle = (Math.PI * 2 * index) / 18;
      const spark = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? "#78e5ff" : "#ff6f91", transparent: true, opacity: 0.95, depthWrite: false }),
      );
      spark.userData.velocity = new THREE.Vector3(Math.cos(angle) * 1.25, 1.0 + Math.random() * 0.5, Math.sin(angle) * 1.25);
      group.add(spark);
    }

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 1.25 });
  }

  private spawnSatelliteStrikeEffect(coord: Coord, areaSize: number): void {
    const group = new THREE.Group();
    const world = this.coordToWorld(coord, 0.34);
    const shift = ((areaSize - 1) * CELL_SIZE) / 2;
    world.x += shift;
    world.z += shift;
    group.position.copy(world);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry((areaSize * CELL_SIZE) / 2, 0.045, 8, 56),
      new THREE.MeshBasicMaterial({ color: "#f8f0df", transparent: true, opacity: 0.9, depthWrite: false }),
    );
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const targetingFlash = new THREE.Mesh(
      new THREE.PlaneGeometry(areaSize * CELL_SIZE, areaSize * CELL_SIZE),
      new THREE.MeshBasicMaterial({
        color: "#ff8a36",
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    targetingFlash.rotation.x = -Math.PI / 2;
    targetingFlash.position.y = -0.08;
    group.add(targetingFlash);

    const halfIndex = (areaSize - 1) / 2;
    for (let tileY = 0; tileY < areaSize; tileY += 1) {
      for (let tileX = 0; tileX < areaSize; tileX += 1) {
        const localX = (tileX - halfIndex) * CELL_SIZE;
        const localZ = (tileY - halfIndex) * CELL_SIZE;
        const delayBias = (tileX + tileY) * 0.08;

        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.18, 0.34, 3.35, 18),
          new THREE.MeshBasicMaterial({ color: tileX % 2 === tileY % 2 ? "#ff7a2d" : "#ffd36b", transparent: true, opacity: 0.82, depthWrite: false }),
        );
        pillar.position.set(localX, 3.2 + delayBias, localZ);
        pillar.userData.velocity = new THREE.Vector3(0, -3.4 - Math.random() * 0.55, 0);
        group.add(pillar);

        const core = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.16, 3.6, 14),
          new THREE.MeshBasicMaterial({ color: "#fff4b8", transparent: true, opacity: 0.88, depthWrite: false }),
        );
        core.position.set(localX, 3.36 + delayBias, localZ);
        core.userData.velocity = new THREE.Vector3(0, -3.7 - Math.random() * 0.45, 0);
        group.add(core);

        const impact = new THREE.Mesh(
          this.baseRingGeometry,
          new THREE.MeshBasicMaterial({ color: "#ff4f57", transparent: true, opacity: 0.72, depthWrite: false }),
        );
        impact.position.set(localX, -0.04, localZ);
        impact.scale.set(0.48, 0.65, 0.48);
        group.add(impact);
      }
    }

    for (let index = 0; index < 24; index += 1) {
      const angle = (Math.PI * 2 * index) / 24;
      const spark = new THREE.Mesh(
        this.particleGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? "#f8f0df" : "#bb75ff", transparent: true, opacity: 0.95, depthWrite: false }),
      );
      spark.userData.velocity = new THREE.Vector3(Math.cos(angle) * 1.45, 1.2 + Math.random() * 0.6, Math.sin(angle) * 1.45);
      group.add(spark);
    }

    this.effectGroup.add(group);
    this.activeEffects.push({ group, age: 0, duration: 1.32, scaleGrowth: 0.24 });
  }

  private setOpacity(mesh: THREE.Mesh, opacity: number): void {
    const material = mesh.material;
    if (Array.isArray(material)) {
      material.forEach((item) => {
        if ("opacity" in item) {
          item.userData.effectBaseOpacity ??= item.opacity;
          item.opacity = item.userData.effectBaseOpacity * opacity;
        }
      });
    } else if ("opacity" in material) {
      material.userData.effectBaseOpacity ??= material.opacity;
      material.opacity = material.userData.effectBaseOpacity * opacity;
    }
  }

  private disposeMaterial(material: THREE.Material | THREE.Material[]): void {
    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose());
    } else {
      material.dispose();
    }
  }

  getPickables(): THREE.Object3D[] {
    return [
      ...this.squareMeshes.values(),
      ...this.terrainMeshes.values(),
      ...this.highlightGroup.children,
      ...[...this.pieceMeshes.values()].flatMap((group) => group.children),
    ];
  }
}

export const getTerrainColor = (type: TerrainType): string => terrainColors[type];
