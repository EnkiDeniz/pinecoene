import { LitElement, css, html } from "lit";
import * as THREE from "three";

type LocketPart = {
  pivot: THREE.Group;
  mesh: THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshPhysicalMaterial>;
  pin: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
  index: number;
  variation: number;
};

export interface PinecoenePartDetail {
  partId: string;
  title: string;
  description: string;
}

export class PinecoeneLocketElement extends LitElement {
  static properties = {
    opened: { type: Boolean, reflect: true },
    seed: { type: String },
    temperament: { type: String },
    reducedMotion: { type: Boolean, attribute: "reduced-motion" },
    selectedPart: { type: String, attribute: "selected-part" },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 280px;
      position: relative;
      contain: layout paint;
      outline: none;
    }

    canvas,
    .fallback {
      display: block;
      width: 100%;
      height: 100%;
    }

    canvas {
      cursor: grab;
      touch-action: manipulation;
    }

    canvas:active {
      cursor: grabbing;
    }

    .fallback {
      object-fit: contain;
      filter: saturate(0.78) contrast(1.06) brightness(0.88);
    }

    .hidden {
      display: none;
    }
  `;

  declare opened: boolean;
  declare seed: string;
  declare temperament: "tender" | "solemn" | "ceremonial";
  declare reducedMotion: boolean;
  declare selectedPart: string;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private root?: THREE.Group;
  private parts: LocketPart[] = [];
  private frame?: number;
  private animationFrame?: number;
  private resizeObserver?: ResizeObserver;
  private pointer = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();
  private fallback = false;
  private openProgress = 0;

  constructor() {
    super();
    this.opened = false;
    this.seed = "pcn-0002";
    this.temperament = "tender";
    this.reducedMotion = false;
    this.selectedPart = "";
  }

  render() {
    return html`
      <canvas
        class=${this.fallback ? "hidden" : ""}
        aria-label="Interactive archival Locket. Select a folded plane or use the synchronized anatomy controls below."
        role="img"
      ></canvas>
      <img
        class=${this.fallback ? "fallback" : "hidden"}
        src="/images/locket-material-reference.png"
        alt="A partially opened archival-paper Locket with warm brass joins and one unresolved seam."
      />
    `;
  }

  firstUpdated() {
    const canvas = this.renderRoot.querySelector("canvas");
    if (!(canvas instanceof HTMLCanvasElement)) return;

    try {
      this.initScene(canvas);
      this.dispatchEvent(
        new CustomEvent("pinecoene-ready", { bubbles: true, composed: true }),
      );
    } catch {
      this.fallback = true;
      this.requestUpdate();
      this.dispatchEvent(
        new CustomEvent("pinecoene-fallback", {
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("opened")) {
      if (this.opened) this.beginOpening();
      else this.setProgress(0);
    }
    if (changed.has("seed") && this.root && changed.get("seed") !== undefined) {
      this.clearLocket();
      this.buildLocket(this.root);
      this.setProgress(this.opened ? 1 : 0);
    }
    if (changed.has("selectedPart")) this.updateSelection();
  }

  private initScene(canvas: HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0.05, -4.9, 4.45);
    camera.lookAt(0, 0, 0.05);

    const root = new THREE.Group();
    root.rotation.x = -0.04;
    root.rotation.z = 0.16;
    scene.add(root);

    scene.add(new THREE.HemisphereLight(0xd9e3e4, 0x17100a, 1.12));
    const key = new THREE.DirectionalLight(0xffe0a7, 7.2);
    key.position.set(-3.8, -2.5, 6.2);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x7894a4, 3.3);
    rim.position.set(4.2, 2.5, 2.8);
    scene.add(rim);
    const low = new THREE.PointLight(0xb47a38, 1.4, 7);
    low.position.set(0, -0.2, 1.8);
    scene.add(low);

    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.root = root;
    this.buildLocket(root);

    canvas.addEventListener("pointerup", this.onPointerUp);
    this.resizeObserver = new ResizeObserver(this.resize);
    this.resizeObserver.observe(this);
    this.resize();
    this.renderFrame();
  }

  private buildLocket(root: THREE.Group) {
    const seedNumber = Array.from(this.seed).reduce(
      (value, character) => (value * 31 + character.charCodeAt(0)) >>> 0,
      2166136261,
    );
    const seedUnit = (index: number) => {
      let value = (seedNumber + index * 2654435761) >>> 0;
      value ^= value << 13;
      value ^= value >>> 17;
      value ^= value << 5;
      return (value >>> 0) / 4294967295;
    };
    const paperMaterial = (variation: number) =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(
          0.105,
          0.24,
          0.76 + variation * 0.07,
        ),
        roughness: 0.78,
        metalness: 0.015,
        clearcoat: 0.12,
        clearcoatRoughness: 0.86,
        sheen: 0.24,
        sheenColor: new THREE.Color(0xf7e4c7),
        side: THREE.DoubleSide,
      });
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xa77838,
      roughness: 0.36,
      metalness: 0.88,
    });
    const inner = 0.34;
    const outer = 1.56;
    const count = 10;
    const arc = (Math.PI * 2) / count;
    const half = arc * 0.43;

    for (let index = 0; index < count; index += 1) {
      const variation = seedUnit(index + 1);
      const outerForPart = outer * (0.91 + variation * 0.11);
      const shape = new THREE.Shape();
      shape.moveTo(inner * Math.cos(-half), inner * Math.sin(-half));
      shape.lineTo(outerForPart * Math.cos(-half), outerForPart * Math.sin(-half));
      shape.lineTo(outerForPart * Math.cos(half), outerForPart * Math.sin(half));
      shape.lineTo(inner * Math.cos(half), inner * Math.sin(half));
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.095,
        bevelEnabled: true,
        bevelThickness: 0.022,
        bevelSize: 0.028,
        bevelSegments: 2,
      });
      geometry.center();

      const pivot = new THREE.Group();
      pivot.rotation.z = index * arc;
      const mesh = new THREE.Mesh(geometry, paperMaterial(variation));
      mesh.userData.partIndex = index;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.x = (inner + outerForPart) / 2;
      pivot.add(mesh);

      const pin = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 18, 12),
        brassMaterial.clone(),
      );
      pin.position.set(0.84 + variation * 0.17, 0, 0.12);
      pivot.add(pin);
      root.add(pivot);
      this.parts.push({
        pivot,
        mesh,
        pin,
        index,
        variation: 0.76 + variation * 0.62,
      });
    }

    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.34, 0.16, 10),
      brassMaterial,
    );
    hub.rotation.x = Math.PI / 2;
    hub.position.z = 0.08;
    hub.castShadow = true;
    root.add(hub);

    const returnCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.02, 0.68, 0.16),
      new THREE.Vector3(-0.8, 0.4, 0.25),
      new THREE.Vector3(-0.57, 0.18, 0.19),
      new THREE.Vector3(-0.36, 0.05, 0.13),
    ]);
    const returnGeometry = new THREE.TubeGeometry(returnCurve, 30, 0.012, 6, false);
    const returnLine = new THREE.Mesh(
      returnGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x6f95a3,
        emissive: 0x142b35,
        emissiveIntensity: 0.7,
        roughness: 0.5,
      }),
    );
    returnLine.position.z = 0.08;
    root.add(returnLine);
  }

  private clearLocket() {
    if (!this.root) return;
    this.root.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      materials.forEach((material) => material.dispose());
    });
    this.root.clear();
    this.parts = [];
  }

  private beginOpening() {
    cancelAnimationFrame(this.animationFrame ?? 0);
    if (this.reducedMotion) {
      this.setProgress(1);
      this.emitOpened();
      return;
    }
    const duration =
      this.temperament === "ceremonial"
        ? 11200
        : this.temperament === "solemn"
          ? 9800
          : 8800;
    const started = performance.now();
    const from = this.openProgress;
    const animate = (now: number) => {
      const elapsed = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 4);
      this.setProgress(from + (1 - from) * eased);
      if (elapsed < 1) this.animationFrame = requestAnimationFrame(animate);
      else this.emitOpened();
    };
    this.animationFrame = requestAnimationFrame(animate);
  }

  private setProgress(progress: number) {
    this.openProgress = progress;
    for (const part of this.parts) {
      const seam = part.index === 8 ? 1.75 : 1;
      const stagger = Math.max(0, Math.min(1, progress * 1.35 - part.index * 0.028));
      const unfold = 1 - Math.pow(1 - stagger, 3);
      part.pivot.position.x = unfold * 0.12 * seam;
      part.mesh.position.x = 0.95 + unfold * (0.24 + part.variation * 0.08) * seam;
      part.mesh.position.z = unfold * (0.12 + (part.index % 3) * 0.035);
      part.mesh.rotation.y = unfold * (-0.36 - part.variation * 0.16) * seam;
      part.mesh.rotation.x = unfold * ((part.index % 2 ? 1 : -1) * 0.055);
      part.pin.position.x = 0.92 + unfold * 0.18 * seam;
    }
  }

  private updateSelection() {
    for (const part of this.parts) {
      const selected = this.selectedPart === `part-${part.index + 1}`;
      part.mesh.material.emissive.set(selected ? 0x5a3b16 : 0x000000);
      part.mesh.material.emissiveIntensity = selected ? 0.36 : 0;
    }
  }

  private onPointerUp = (event: PointerEvent) => {
    if (!this.renderer || !this.camera) return;
    const bounds = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set(
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(
      this.parts.map(({ mesh }) => mesh),
      false,
    );
    const index = hits[0]?.object.userData.partIndex;
    if (typeof index !== "number") return;
    const isSeam = index === 8;
    const detail: PinecoenePartDetail = {
      partId: `part-${index + 1}`,
      title: isSeam ? "The unresolved seam" : `Fold ${index + 1}`,
      description: isSeam
        ? "This seam remains open because the record continues beyond what its maker admitted. The form refuses to counterfeit an ending."
        : "This plane holds one admitted movement from the record. Its place in the form follows the source order.",
    };
    this.dispatchEvent(
      new CustomEvent<PinecoenePartDetail>("pinecoene-part-select", {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  };

  private emitOpened() {
    this.dispatchEvent(
      new CustomEvent("pinecoene-opened", { bubbles: true, composed: true }),
    );
  }

  private resize = () => {
    if (!this.renderer || !this.camera) return;
    const width = Math.max(1, this.clientWidth);
    const height = Math.max(1, this.clientHeight);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  private renderFrame = () => {
    if (this.renderer && this.scene && this.camera && this.root) {
      this.root.rotation.z += 0.00035;
      this.renderer.render(this.scene, this.camera);
      this.frame = requestAnimationFrame(this.renderFrame);
    }
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    cancelAnimationFrame(this.frame ?? 0);
    cancelAnimationFrame(this.animationFrame ?? 0);
    this.resizeObserver?.disconnect();
    const canvas = this.renderRoot.querySelector("canvas");
    canvas?.removeEventListener("pointerup", this.onPointerUp);
    this.clearLocket();
    this.renderer?.dispose();
  }
}

if (!customElements.get("pinecoene-locket")) {
  customElements.define("pinecoene-locket", PinecoeneLocketElement);
}
