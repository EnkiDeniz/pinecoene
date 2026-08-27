import { LitElement, css, html } from "lit";
import * as THREE from "three";
import { seededPrng } from "@/lib/studio-compiler";

export class PinecoeneVitalElement extends LitElement {
  static properties = {
    focusIndex: { type:Number, attribute:"focus-index" },
    intensity: { type:Number },
    openness: { type:Number },
    reducedMotion: { type:Boolean, attribute:"reduced-motion" },
  };
  static styles = css`:host{display:block;width:100%;height:100%;min-height:380px}canvas{display:block;width:100%;height:100%;touch-action:none}`;
  declare focusIndex:number;
  declare intensity:number;
  declare openness:number;
  declare reducedMotion:boolean;
  private renderer?:THREE.WebGLRenderer;
  private scene?:THREE.Scene;
  private camera?:THREE.PerspectiveCamera;
  private root?:THREE.Group;
  private presences:THREE.Mesh[]=[];
  private links:THREE.Line[]=[];
  private frame?:number;
  private resizeObserver?:ResizeObserver;

  constructor(){ super(); this.focusIndex=0; this.intensity=.45; this.openness=.62; this.reducedMotion=false; }
  render(){ return html`<canvas role="img" aria-label="Experimental seven Presence visualization. Curated controls change its light and relation study; it is not a live model or Pinecœne Fold."></canvas>`; }
  firstUpdated(){ const canvas=this.renderRoot.querySelector("canvas"); if(!(canvas instanceof HTMLCanvasElement))return; this.init(canvas); }
  updated(){ this.updateStudy(); }
  disconnectedCallback(){ super.disconnectedCallback(); cancelAnimationFrame(this.frame??0); this.resizeObserver?.disconnect(); this.renderer?.dispose(); }
  private init(canvas:HTMLCanvasElement){
    this.renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:"high-performance"});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)); this.renderer.outputColorSpace=THREE.SRGBColorSpace; this.renderer.toneMapping=THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure=1.1;
    this.scene=new THREE.Scene(); this.camera=new THREE.PerspectiveCamera(34,1,.1,100); this.camera.position.set(0,-6.4,3.6); this.camera.lookAt(0,0,0);
    this.root=new THREE.Group(); this.root.rotation.x=.18; this.scene.add(this.root);
    this.scene.add(new THREE.HemisphereLight(0x5d6f87,0x080706,1.15));
    const random=seededPrng("pinecoene-seven-presence-v0.1");
    for(let index=0;index<7;index+=1){
      const angle=index/7*Math.PI*2-Math.PI/2; const radius=1.48+(random()-.5)*.16;
      const geometry=new THREE.OctahedronGeometry(.24+(index%3)*.035,2);
      const material=new THREE.MeshPhysicalMaterial({color:index===0?0xb88a4e:0x667582,metalness:.55,roughness:.34,transparent:true,opacity:.64,emissive:index===0?0x4d2f12:0x111b25,emissiveIntensity:.16});
      const mesh=new THREE.Mesh(geometry,material); mesh.position.set(Math.cos(angle)*radius,Math.sin(angle)*radius,(random()-.5)*.6); mesh.userData.base=mesh.position.clone(); this.root.add(mesh); this.presences.push(mesh);
      const lineGeometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(),mesh.position.clone()]);
      const line=new THREE.Line(lineGeometry,new THREE.LineBasicMaterial({color:0x75664f,transparent:true,opacity:.18})); this.root.add(line); this.links.push(line);
    }
    const boundary=new THREE.Mesh(new THREE.TorusGeometry(1.9,.006,4,96),new THREE.MeshBasicMaterial({color:0x9f7540,transparent:true,opacity:.32})); boundary.rotation.x=Math.PI/2; this.root.add(boundary);
    this.updateStudy(); this.resizeObserver=new ResizeObserver(this.resize); this.resizeObserver.observe(this); this.resize(); this.loop();
  }
  private updateStudy(){
    this.presences.forEach((mesh,index)=>{ const material=mesh.material as THREE.MeshPhysicalMaterial; const active=index===this.focusIndex; material.color.set(active?0xc79958:index%2?0x547fa8:0x72767a); material.emissive.set(active?0x5b3513:0x101a24); material.emissiveIntensity=active?.36+.5*this.intensity:.08+.12*this.intensity; material.opacity=active?.82:.3+.34*this.openness; const base=mesh.userData.base as THREE.Vector3; mesh.position.copy(base).multiplyScalar(.82+.36*this.openness); });
    this.links.forEach((line,index)=>{ const positions=line.geometry.attributes.position as THREE.BufferAttribute; const target=this.presences[index]?.position; if(target){positions.setXYZ(1,target.x,target.y,target.z);positions.needsUpdate=true;} (line.material as THREE.LineBasicMaterial).opacity=index===this.focusIndex?.5:.08+.14*this.openness; });
  }
  private resize=()=>{ if(!this.renderer||!this.camera)return; const width=Math.max(1,this.clientWidth),height=Math.max(1,this.clientHeight); this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix(); };
  private loop=()=>{ if(this.root&&!this.reducedMotion)this.root.rotation.z+=.00035+.0005*this.intensity; this.presences.forEach((mesh,index)=>{if(!this.reducedMotion){mesh.rotation.x+=.001*(index+1);mesh.rotation.y+=.0015;}}); if(this.renderer&&this.scene&&this.camera)this.renderer.render(this.scene,this.camera); this.frame=requestAnimationFrame(this.loop); };
}
if(!customElements.get("pinecoene-vital"))customElements.define("pinecoene-vital",PinecoeneVitalElement);
