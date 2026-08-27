import { LitElement, css, html } from "lit";
import * as THREE from "three";
import type { RendererNeutralSceneV0_1, SemanticFeatureV0_1 } from "@/lib/studio-contracts";

export interface PinecoeneFeatureDetail {
  featureId: string;
  kind: SemanticFeatureV0_1["kind"];
  inspectionCopy: string;
  semanticRefs: string[];
}

const COLORS = {
  committed: 0xb98a48,
  evidence: 0x5f9fe6,
  edge: 0x6d6c70,
  open: 0xa9c9e8,
  muse: 0xa87838,
  address: 0xddd6ca,
};

export class PinecoeneFormElement extends LitElement {
  static properties = {
    sceneDescription: { attribute: false },
    progress: { type: Number },
    selectedFeature: { type: String, attribute: "selected-feature" },
    reducedMotion: { type: Boolean, attribute: "reduced-motion" },
    autoRotate: { type: Boolean, attribute: "auto-rotate" },
  };

  static styles = css`
    :host { display:block; width:100%; height:100%; min-height:320px; position:relative; contain:layout paint; outline:none; }
    canvas { width:100%; height:100%; display:block; cursor:grab; touch-action:none; }
    canvas:active { cursor:grabbing; }
    .fallback { position:absolute; inset:0; padding:24px; display:grid; align-content:center; background:#090a0b; color:#d7d2c8; border:1px solid rgba(215,210,200,.18); font:14px/1.5 system-ui,sans-serif; }
    .fallback strong { color:#c29654; font:500 22px/1.2 Georgia,serif; }
    .fallback ul { margin:18px 0 0; padding-left:18px; color:#97928a; }
    [hidden] { display:none !important; }
  `;

  declare sceneDescription?: RendererNeutralSceneV0_1;
  declare progress: number;
  declare selectedFeature: string;
  declare reducedMotion: boolean;
  declare autoRotate: boolean;

  private renderer?: THREE.WebGLRenderer;
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private root?: THREE.Group;
  private frame?: number;
  private resizeObserver?: ResizeObserver;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private pointerDown?: { x: number; y: number; rotationX: number; rotationY: number };
  private failed = false;
  private featureObjects = new Map<string, THREE.Object3D[]>();

  constructor() {
    super();
    this.progress = 1;
    this.selectedFeature = "";
    this.reducedMotion = false;
    this.autoRotate = false;
  }

  render() {
    const features = this.sceneDescription?.features ?? [];
    return html`
      <canvas ?hidden=${this.failed} role="img" aria-label="Orbitable Pinecœne Fold. Drag to turn, use arrow keys to rotate, and select a semantic feature to inspect it."></canvas>
      <section class="fallback" ?hidden=${!this.failed} role="img" aria-label="Semantic Pinecœne fallback">
        <strong>${this.sceneDescription?.fixtureId ?? "Pinecœne"} · lawful non-WebGL form</strong>
        <span>The same admitted anatomy remains available without 3D.</span>
        <ul>${features.map((feature) => html`<li>${feature.kind}: ${feature.inspectionCopy}</li>`)}</ul>
      </section>
    `;
  }

  firstUpdated() {
    const canvas = this.renderRoot.querySelector("canvas");
    if (!(canvas instanceof HTMLCanvasElement)) return;
    this.tabIndex = 0;
    try {
      this.init(canvas);
      this.dispatchEvent(new CustomEvent("pinecoene-form-ready", { bubbles:true, composed:true }));
    } catch {
      this.failed = true;
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent("pinecoene-form-fallback", { bubbles:true, composed:true }));
    }
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("sceneDescription") && this.root) this.rebuild();
    if (changed.has("progress")) this.updateProgress();
    if (changed.has("selectedFeature")) this.updateSelection();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cancelAnimationFrame(this.frame ?? 0);
    this.resizeObserver?.disconnect();
    this.clearRoot();
    this.renderer?.dispose();
  }

  private init(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true, powerPreference:"high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    this.camera.position.set(0, -5.7, 3.45);
    this.camera.lookAt(0, 0, 0);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.scene.add(new THREE.HemisphereLight(0x7f8790, 0x090705, 1.4));
    const key = new THREE.DirectionalLight(0xffd89a, 5.4);
    key.position.set(-3.2, -4, 5.8);
    this.scene.add(key);
    const evidence = new THREE.PointLight(0x548fca, 2.4, 9);
    evidence.position.set(2.4, 1.5, 2.2);
    this.scene.add(evidence);
    this.rebuild();
    canvas.addEventListener("pointerdown", this.onPointerDown);
    canvas.addEventListener("pointermove", this.onPointerMove);
    canvas.addEventListener("pointerup", this.onPointerUp);
    canvas.addEventListener("wheel", this.onWheel, { passive:true });
    this.addEventListener("keydown", this.onKeyDown);
    this.resizeObserver = new ResizeObserver(this.resize);
    this.resizeObserver.observe(this);
    this.resize();
    this.renderFrame();
  }

  private rebuild() {
    if (!this.root || !this.sceneDescription) return;
    this.clearRoot();
    this.root.rotation.set(...this.sceneDescription.orientation);
    for (const feature of this.sceneDescription.features) this.addFeature(feature);
    this.updateProgress();
    this.updateSelection();
  }

  private addFeature(feature: SemanticFeatureV0_1) {
    if (!this.root) return;
    const objects: THREE.Object3D[] = [];
    const color = COLORS[feature.materialRole];
    const positions = new Float32Array(feature.points.flat());

    if (feature.kind === "return_field") {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color, size:0.032, transparent:true, opacity:0.9, sizeAttenuation:true });
      objects.push(new THREE.Points(geometry, material));
    } else if (feature.kind === "constellation") {
      for (const [x,y,z] of feature.points) {
        const material = new THREE.MeshStandardMaterial({ color, metalness:0.78, roughness:0.28, emissive:color, emissiveIntensity:0.12 });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.075, 18, 12), material);
        mesh.position.set(x,y,z);
        objects.push(mesh);
      }
    } else if (feature.kind === "membrane") {
      const shape = new THREE.Shape();
      feature.points.forEach(([x,y], index) => index === 0 ? shape.moveTo(x,y) : shape.lineTo(x,y));
      shape.closePath();
      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshBasicMaterial({ color, transparent:true, opacity: feature.state === "open" ? 0.045 : 0.035 + (feature.phase ?? 1) * 0.008, side:THREE.DoubleSide, depthWrite:false });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = (feature.phase ?? 1) * 0.035 - 0.14;
      objects.push(mesh);
      objects.push(this.linesFor(feature, color, feature.state === "open" ? 0.5 : 0.24));
    } else {
      if (feature.kind === "core" && feature.points.length === 4) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute([
          ...feature.points[0],...feature.points[1],...feature.points[2],
          ...feature.points[0],...feature.points[2],...feature.points[3],
          ...feature.points[0],...feature.points[3],...feature.points[1],
          ...feature.points[1],...feature.points[3],...feature.points[2],
        ],3));
        geometry.computeVertexNormals();
        objects.push(new THREE.Mesh(geometry, new THREE.MeshPhysicalMaterial({ color, transparent:true, opacity:0.19, roughness:0.48, metalness:0.58, side:THREE.DoubleSide, depthWrite:false })));
      }
      objects.push(this.linesFor(feature, color, feature.kind === "open_relation" ? 0.72 : 0.58));
    }

    for (const object of objects) {
      object.userData.featureId = feature.featureId;
      object.userData.feature = feature;
      this.root.add(object);
    }
    this.featureObjects.set(feature.featureId, objects);
  }

  private linesFor(feature: SemanticFeatureV0_1, color: number, opacity: number) {
    const coordinates: number[] = [];
    for (const [from,to] of feature.connections ?? []) {
      const a = feature.points[from];
      const b = feature.points[to];
      if (a && b) coordinates.push(...a,...b);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(coordinates,3));
    return new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color, transparent:true, opacity }));
  }

  private clearRoot() {
    if (!this.root) return;
    this.root.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      }
    });
    this.root.clear();
    this.featureObjects.clear();
  }

  private updateProgress() {
    const clamped = Math.max(0, Math.min(1, this.progress));
    const maxPhase = Math.max(1, Math.ceil(clamped * 7));
    this.sceneDescription?.features.forEach((feature) => {
      const visible = feature.phase ? feature.phase <= maxPhase : clamped > 0.08;
      this.featureObjects.get(feature.featureId)?.forEach((object) => { object.visible = visible; });
    });
  }

  private updateSelection() {
    for (const [id, objects] of this.featureObjects) {
      for (const object of objects) {
        const selected = id === this.selectedFeature;
        const material = (object as THREE.Mesh).material;
        const materials = material ? (Array.isArray(material) ? material : [material]) : [];
        for (const entry of materials) {
          if ("opacity" in entry && typeof entry.opacity === "number") entry.opacity = Math.min(1, entry.opacity * (selected ? 1.8 : 1));
          if (entry instanceof THREE.MeshStandardMaterial || entry instanceof THREE.MeshPhysicalMaterial) entry.emissiveIntensity = selected ? 0.5 : 0.12;
        }
      }
    }
  }

  private onPointerDown = (event: PointerEvent) => {
    if (!this.root) return;
    (event.currentTarget as HTMLCanvasElement).setPointerCapture(event.pointerId);
    this.pointerDown = { x:event.clientX, y:event.clientY, rotationX:this.root.rotation.x, rotationY:this.root.rotation.y };
  };

  private onPointerMove = (event: PointerEvent) => {
    if (!this.pointerDown || !this.root) return;
    this.root.rotation.y = this.pointerDown.rotationY + (event.clientX - this.pointerDown.x) * 0.006;
    this.root.rotation.x = this.pointerDown.rotationX + (event.clientY - this.pointerDown.y) * 0.004;
  };

  private onPointerUp = (event: PointerEvent) => {
    const moved = this.pointerDown ? Math.hypot(event.clientX - this.pointerDown.x, event.clientY - this.pointerDown.y) : 99;
    this.pointerDown = undefined;
    if (moved > 7 || !this.camera || !this.renderer || !this.sceneDescription) return;
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.intersectObjects(Array.from(this.featureObjects.values()).flat(), true)[0];
    const featureId = hit?.object.userData.featureId as string | undefined;
    const feature = this.sceneDescription.features.find((item) => item.featureId === featureId);
    if (feature) this.selectFeature(feature);
  };

  private selectFeature(feature: SemanticFeatureV0_1) {
    this.selectedFeature = feature.featureId;
    this.dispatchEvent(new CustomEvent<PinecoeneFeatureDetail>("pinecoene-feature-select", { detail:{ featureId:feature.featureId, kind:feature.kind, inspectionCopy:feature.inspectionCopy, semanticRefs:feature.semanticRefs }, bubbles:true, composed:true }));
  }

  private onWheel = (event: WheelEvent) => {
    if (!this.camera) return;
    this.camera.position.multiplyScalar(event.deltaY > 0 ? 1.04 : 0.96);
    this.camera.position.clampLength(3.7, 8.2);
  };

  private onKeyDown = (event: KeyboardEvent) => {
    if (!this.root) return;
    const delta = event.shiftKey ? 0.24 : 0.1;
    if (event.key === "ArrowLeft") this.root.rotation.y -= delta;
    else if (event.key === "ArrowRight") this.root.rotation.y += delta;
    else if (event.key === "ArrowUp") this.root.rotation.x -= delta;
    else if (event.key === "ArrowDown") this.root.rotation.x += delta;
    else return;
    event.preventDefault();
  };

  private resize = () => {
    if (!this.renderer || !this.camera) return;
    const width = Math.max(1, this.clientWidth);
    const height = Math.max(1, this.clientHeight);
    this.renderer.setSize(width,height,false);
    this.camera.aspect = width/height;
    this.camera.updateProjectionMatrix();
  };

  private renderFrame = () => {
    if (this.root && this.autoRotate && !this.reducedMotion && !this.pointerDown) this.root.rotation.y += 0.00075;
    if (this.renderer && this.scene && this.camera) this.renderer.render(this.scene,this.camera);
    this.frame = requestAnimationFrame(this.renderFrame);
  };
}

if (!customElements.get("pinecoene-form")) customElements.define("pinecoene-form", PinecoeneFormElement);

declare global {
  interface HTMLElementTagNameMap { "pinecoene-form": PinecoeneFormElement; }
}
