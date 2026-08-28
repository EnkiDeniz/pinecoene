"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FormStage } from "@/components/form/FormStage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { CompiledStudioArtifact } from "@/lib/studio-contracts";

type PublicMode = "fold" | "becoming" | "record" | "reading" | "lineage" | "about";
const modes:PublicMode[] = ["fold","becoming","record","reading","lineage","about"];

export function PublicWorkExperience({ artifact, initialView = "fold" }: { artifact:CompiledStudioArtifact; initialView?:string }) {
  const [mode,setMode] = useState<PublicMode>(modes.includes(initialView as PublicMode) ? initialView as PublicMode : "fold");
  const [playing,setPlaying] = useState(initialView === "becoming");
  const [phase,setPhase] = useState(initialView === "becoming" ? 1 : 7);
  const [selectedFeature,setSelectedFeature] = useState("");
  const [inspection,setInspection] = useState("Turn the form. Select an admitted feature when you want to know what earned it.");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!playing || reducedMotion || mode !== "becoming") return;
    const timer = window.setInterval(() => setPhase((current) => current >= 7 ? (setPlaying(false),7) : current + 1), 12000);
    return () => window.clearInterval(timer);
  }, [mode,playing,reducedMotion]);

  const cue = useMemo(() => artifact.transition.cues.find((item) => item.phase === phase), [artifact.transition.cues,phase]);
  const progress = mode === "becoming" ? phase / 7 : 1;

  return <main className={`publicWork mode-${mode}`}>
    <header className="publicWorkHeader"><div><p className="publicEyebrow">PCN-0001 · GENESIS 1:1–2:3 · FIXTURE-AUTHORED</p><h1>Genesis</h1><p>The becoming, held at the Fold.</p></div><div className="publicWorkReceipt"><span>FORM</span><strong>NESTED TETRAHEDRON</strong><small>{artifact.conformation.score.topologyHash.slice(0,16)}</small></div></header>
    <nav className="publicModeRail" aria-label="Genesis views">{modes.map((item) => <button key={item} aria-pressed={mode === item} onClick={() => { setMode(item); if (item !== "becoming") setPlaying(false); }}>{item}</button>)}</nav>
    <section className="publicWorkStage">
      <div className="publicWorkObject"><div className="stageTelemetry"><span>{mode.toUpperCase()}</span><span>PHASE {String(mode === "becoming" ? phase : 7).padStart(2,"0")} / 07</span><span>OPEN BY LAW</span></div><FormStage scene={artifact.conformation.scene} progress={progress} reducedMotion={reducedMotion} selectedFeature={selectedFeature} autoRotate={false} onFeatureSelect={(detail) => { setSelectedFeature(detail.featureId); setInspection(detail.inspectionCopy); }} /><div className="stageCaption"><p>{mode === "becoming" ? cue?.label ?? "A beginning is named" : inspection}</p><span>DRAG TO TURN · ARROW KEYS TO ROTATE</span></div></div>
      <aside className="publicWorkPanel">
        {mode === "fold" ? <><p className="publicEyebrow">THE FORM AT REST</p><h2>A complete Fold can remain OPEN.</h2><p>The missing closing edge is not damage. It is the visible standing of a relation that was never admitted as closed.</p><div className="workActions"><button onClick={() => { setMode("becoming"); setPhase(1); setPlaying(!reducedMotion); }}>Watch it become</button><Link href="/studio/specimens/pcn-0001">Open in Studio</Link></div></> : null}
        {mode === "becoming" ? <><p className="publicEyebrow">THE BECOMING · 84 SECONDS</p><h2>{artifact.manifest.phases[phase-1]?.title}</h2><p>{cue?.label ?? artifact.manifest.events.find((event) => event.phase === phase)?.label}</p><div className="publicPhaseRail">{artifact.manifest.phases.map((item) => <button key={item.phase} data-current={phase === item.phase} onClick={() => { setPhase(item.phase); setPlaying(false); }}>{String(item.phase).padStart(2,"0")}</button>)}</div><button className="publicReplayButton" onClick={() => { if (reducedMotion) { setPhase((current) => current >= 7 ? 1 : current + 1); setPlaying(false); return; } if (phase >= 7) setPhase(1); setPlaying((value) => !value); }}>{reducedMotion ? "Step through the phases" : playing ? "Pause" : "Play"}</button></> : null}
        {mode === "record" ? <><p className="publicEyebrow">EXACT PERMITTED RECORD</p><h2>The source remains source.</h2><ol className="publicRecordList">{artifact.manifest.events.map((event) => <li key={event.eventId}><span>{event.eventId} · P{event.phase}</span><strong>{event.exactRecord}</strong><small>{event.sourceAnchor}</small></li>)}</ol></> : null}
        {mode === "reading" ? <><p className="publicEyebrow">AUTHORED READING</p><h2>The form is not an illustration.</h2><p>Commitments strengthen the Core. Returns create evidence-blue fields. Boundaries create edges and intervals. OPEN relations remain missing paths.</p><div className="publicFeatureList">{artifact.conformation.scene.features.map((feature) => <button key={feature.featureId} onClick={() => { setSelectedFeature(feature.featureId); setInspection(feature.inspectionCopy); }}><span>{feature.materialRole}</span><strong>{feature.kind.replaceAll("_"," ")}</strong><small>{feature.inspectionCopy}</small></button>)}</div></> : null}
        {mode === "lineage" ? <><p className="publicEyebrow">LINEAGE</p><h2>Nothing here is the newest version of something else.</h2><div className="publicLineage"><div><span>01</span><strong>Source fixture</strong><small>{artifact.manifest.fixtureHash}</small></div><div><span>02</span><strong>Authored Reading</strong><small>{artifact.manifest.events.length} events · {artifact.manifest.relations.length} relations</small></div><div><span>03</span><strong>Deterministic Fold</strong><small>{artifact.conformation.scene.sceneHash}</small></div></div></> : null}
        {mode === "about" ? <><p className="publicEyebrow">ABOUT THIS STUDY</p><h2>A real deterministic object. A bounded claim.</h2><p>{artifact.manifest.disclosure}</p><p>{artifact.manifest.designerNote}</p><Link className="publicTextLink" href="/how">See how it is made →</Link></> : null}
      </aside>
    </section>
    <section className="publicOfferingBridge"><div><p className="publicEyebrow">OFFERING · CURATED DEMONSTRATION</p><h2>The Fold is the work.<br /><em>The Locket is how it travels.</em></h2><p>This demonstration packages one exact permitted projection. It does not claim a person sent, delivered, received, or accepted it.</p></div><Link href="/w/genesis-demonstration">See how Genesis can travel</Link></section>
  </main>;
}
