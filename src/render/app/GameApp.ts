import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { GameManager } from "../../game/simulation/GameManager";
import { BoardRenderer } from "../objects/BoardRenderer";

export class GameApp {
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(48, 1, 0.1, 120);
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly clock = new THREE.Clock();
  private readonly controls: OrbitControls;
  private readonly boardRenderer: BoardRenderer;

  constructor(private readonly root: HTMLElement, private readonly game: GameManager) {
    this.scene.background = new THREE.Color("#15191d");
    this.scene.fog = new THREE.Fog("#15191d", 12, 28);

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.root.appendChild(this.renderer.domElement);

    this.camera.position.set(5.8, 10.4, 10.8);
    this.camera.lookAt(0, 0, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI * 0.47;
    this.controls.minDistance = 8;
    this.controls.maxDistance = 19;

    this.boardRenderer = new BoardRenderer(game);
    this.scene.add(this.boardRenderer.group);

    this.addLights();
    this.addEnvironment();
    this.resize();

    window.addEventListener("resize", () => this.resize());
    this.renderer.domElement.addEventListener("pointerdown", (event) => this.onPointerDown(event));
    this.renderer.domElement.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      this.game.log("WebGL context lost. ブラウザの再読み込みで復帰できます。", "danger");
    });
  }

  start(): void {
    this.renderer.setAnimationLoop(() => {
      const delta = Math.min(this.clock.getDelta(), 0.05);
      this.controls.update();
      this.boardRenderer.update(delta);
      this.renderer.render(this.scene, this.camera);
    });
  }

  sync(): void {
    this.boardRenderer.sync();
  }

  private addLights(): void {
    this.scene.add(new THREE.AmbientLight("#fff2d0", 1.15));

    const key = new THREE.DirectionalLight("#fff6df", 2.4);
    key.position.set(4, 9, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -7;
    key.shadow.camera.right = 7;
    key.shadow.camera.top = 7;
    key.shadow.camera.bottom = -7;
    this.scene.add(key);

    const rim = new THREE.DirectionalLight("#7fc8ff", 0.9);
    rim.position.set(-5, 4, -6);
    this.scene.add(rim);
  }

  private addEnvironment(): void {
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ color: "#263238", roughness: 0.9 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.34;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  private resize(): void {
    const width = this.root.clientWidth || window.innerWidth;
    const height = this.root.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private onPointerDown(event: PointerEvent): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.boardRenderer.getPickables(), false);
    const hit = hits[0]?.object;
    if (!hit) return;

    const data = hit.userData;
    const coord = data.coord ?? this.boardRenderer.worldToCoord(hits[0].point);
    this.game.handleBoardClick(coord, data.pieceId);
  }
}
