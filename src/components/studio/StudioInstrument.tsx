"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleNotch,
  DownloadSimple,
  Eye,
  GitFork,
  LineSegments,
  Pause,
  Play,
  SealCheck,
  SpeakerHigh,
  SpeakerSlash,
  X,
} from "@phosphor-icons/react";
import { FormStage } from "@/components/form/FormStage";
import {
  deleteStudy,
  downloadJson,
  listReturnCandidates,
  listSuccessors,
  loadStudy,
  saveOfferingV2,
  saveReturnDisposition,
  saveStudy,
  saveSuccessor,
} from "@/lib/custody";
import {
  buildOfferingPackageV0_2,
  compileStudioArtifact,
  createSessionStudy,
  createSuccessorStudy,
  disposeReturn,
} from "@/lib/studio-compiler";
import { defaultDecisions } from "@/lib/studio-fixtures";
import type {
  Address,
  CompiledStudioArtifact,
  DecisionDisposition,
  ExpressionProfileV0_2,
  OfferingPackageV0_2,
  OfferingPermissionsV0_2,
  OwnerDecisionSetV0_1,
  Resolution,
  ReturnCandidateV0_1,
  SessionStudyV0_1,
  SuccessorStudyV0_1,
} from "@/lib/studio-contracts";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type StudioMode = "record" | "admission" | "recognition" | "becoming" | "fold" | "lineage" | "offering" | "returns";

const MODES: Array<{ id: StudioMode; label: string }> = [
  { id:"record", label:"Record" }, { id:"admission", label:"Admission" }, { id:"recognition", label:"Recognition" },
  { id:"becoming", label:"Becoming" }, { id:"fold", label:"Fold" }, { id:"lineage", label:"Lineage" },
  { id:"offering", label:"Offering" }, { id:"returns", label:"Returns" },
];
const GUIDED_MODES: StudioMode[] = ["record", "admission", "recognition", "becoming", "fold", "offering", "lineage"];
const RESOLUTIONS: Array<{ id: Resolution; label: string; description: string }> = [
  { id:"R0", label:"Mark", description:"Identity and title only" },
  { id:"R1", label:"Trace", description:"Permitted record trace" },
  { id:"R2", label:"Form", description:"Settled Fold" },
  { id:"R3", label:"Inspect", description:"Semantic inspection" },
  { id:"R4", label:"Share", description:"Address and lineage" },
  { id:"R5", label:"Open", description:"Replay and Return" },
];
const ADDRESSES: Address[] = ["latent", "day", "night", "earth", "seas", "keeper"];

function cloneDecisions(decisions: OwnerDecisionSetV0_1): OwnerDecisionSetV0_1 {
  return {
    eventDispositions: { ...decisions.eventDispositions },
    rewrittenLabels: { ...decisions.rewrittenLabels },
    relationDispositions: { ...decisions.relationDispositions },
    museDispositions: { ...decisions.museDispositions },
  };
}

export function StudioInstrument({
  initialArtifact,
  studyId,
  guided = false,
}: {
  initialArtifact: CompiledStudioArtifact;
  studyId?: string;
  guided?: boolean;
}) {
  const [mode, setMode] = useState<StudioMode>("record");
  const [artifact, setArtifact] = useState(initialArtifact);
  const [decisions, setDecisions] = useState(() => cloneDecisions(defaultDecisions(initialArtifact.manifest)));
  const [currentStudy, setCurrentStudy] = useState<SessionStudyV0_1>();
  const [selectedFeature, setSelectedFeature] = useState("core");
  const [inspection, setInspection] = useState(initialArtifact.conformation.scene.features.find((feature) => feature.featureId === "core")?.inspectionCopy ?? "Select the form to inspect its semantic standing.");
  const [address, setAddress] = useState<Address>("latent");
  const [resolution, setResolution] = useState<Resolution>("R2");
  const [expression, setExpression] = useState<ExpressionProfileV0_2>({ schemaVersion:"pinecoene.expression.v0.2", finish:"metal", temperament:"solemn", dedication:"For the next keeper at the Fold." });
  const [permissions, setPermissions] = useState<OfferingPermissionsV0_2>({ inspectRecord:true, inspectMuses:false, createReturn:true, allowMuseReuse:false, allowWithdrawal:true });
  const [offering, setOffering] = useState<OfferingPackageV0_2>();
  const [returns, setReturns] = useState<ReturnCandidateV0_1[]>([]);
  const [successors, setSuccessors] = useState<SuccessorStudyV0_1[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [replayMs, setReplayMs] = useState(0);
  const [replayPlaying, setReplayPlaying] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const reducedMotion = useReducedMotion();
  const duration = condensed ? 30000 : 84000;

  useEffect(() => {
    if (!studyId) return;
    void loadStudy(studyId).then((study) => {
      if (!study || study.fixtureHash !== initialArtifact.manifest.fixtureHash) return;
      setCurrentStudy(study);
      setDecisions(cloneDecisions(study.decisions));
      setAddress(study.address);
      setResolution(study.resolution);
      setExpression(study.expression);
      setNotice("Prototype-only session fork restored from this browser.");
    });
  }, [initialArtifact.manifest.fixtureHash, studyId]);

  useEffect(() => {
    let alive = true;
    void compileStudioArtifact(initialArtifact.manifest, { decisions, address, study: currentStudy }).then((next) => {
      if (alive) setArtifact(next);
    });
    return () => { alive = false; };
  }, [address, currentStudy, decisions, initialArtifact.manifest]);

  useEffect(() => {
    if (!replayPlaying || reducedMotion) return;
    const startedAt = performance.now() - replayMs;
    const timer = window.setInterval(() => {
      const next = Math.min(duration, performance.now() - startedAt);
      setReplayMs(next);
      if (next >= duration) setReplayPlaying(false);
    }, 80);
    return () => window.clearInterval(timer);
  }, [duration, reducedMotion, replayMs, replayPlaying]);

  const reloadReturns = useCallback(() => {
    void Promise.all([listReturnCandidates(), listSuccessors(currentStudy?.studyId ?? artifact.manifest.fixtureId)]).then(([nextReturns, nextSuccessors]) => {
      setReturns(nextReturns.filter((item) => !offering || item.offeringId === offering.offeringId));
      setSuccessors(nextSuccessors);
    });
  }, [artifact.manifest.fixtureId, currentStudy?.studyId, offering]);

  useEffect(() => { reloadReturns(); }, [reloadReturns, mode]);

  const replayProgress = reducedMotion
    ? Math.max(1 / 7, replayMs / duration)
    : mode === "becoming" ? replayMs / duration : 1;
  const phase = Math.min(7, Math.max(1, Math.ceil(replayProgress * 7)));
  const currentCue = useMemo(() => {
    const fullMs = condensed ? replayMs * (84000 / 30000) : replayMs;
    return [...artifact.transition.cues].reverse().find((cue) => cue.atMs <= fullMs) ?? artifact.transition.cues[0];
  }, [artifact.transition.cues, condensed, replayMs]);

  function updateEvent(eventId: string, disposition: DecisionDisposition) {
    setDecisions((previous) => ({ ...previous, eventDispositions:{ ...previous.eventDispositions, [eventId]:disposition } }));
  }

  function updateRelation(relationId: string, disposition: DecisionDisposition) {
    setDecisions((previous) => ({ ...previous, relationDispositions:{ ...previous.relationDispositions, [relationId]:disposition } }));
  }

  async function forkStudy() {
    setBusy(true);
    const study = await createSessionStudy(artifact.manifest, decisions, expression, address, resolution);
    await saveStudy(study);
    setCurrentStudy(study);
    setNotice("Prototype-only session fork saved in this browser. The canonical fixture is unchanged.");
    setBusy(false);
  }

  async function resetFork() {
    if (currentStudy) await deleteStudy(currentStudy.studyId);
    setCurrentStudy(undefined);
    setDecisions(cloneDecisions(defaultDecisions(initialArtifact.manifest)));
    setAddress("latent");
    setResolution("R2");
    setOffering(undefined);
    setNotice("Returned to the immutable canonical fixture.");
  }

  async function compileOffering() {
    setBusy(true);
    let source = artifact;
    let study = currentStudy;
    if (!study) {
      study = await createSessionStudy(artifact.manifest, decisions, expression, address, resolution);
      await saveStudy(study);
      setCurrentStudy(study);
      source = await compileStudioArtifact(artifact.manifest, { decisions, address, study });
      setArtifact(source);
    }
    const next = await buildOfferingPackageV0_2(source, { resolution, address, expression, permissions, title:`${artifact.manifest.title} · ${resolution}`, senderLabel:"Studio keeper" });
    await saveOfferingV2(next);
    setOffering(next);
    setNotice("Offering prepared locally. This simulates packaging, not sending or delivery.");
    setBusy(false);
  }

  async function handleReturnDisposition(candidate: ReturnCandidateV0_1, disposition: "hold_at_rest" | "dock_to_successor" | "archive_mark" | "reject") {
    const result = await disposeReturn(candidate, disposition, "Owner simulation in Curated Studio V1.");
    await saveReturnDisposition(result);
    if (disposition === "dock_to_successor") {
      const successor = await createSuccessorStudy(currentStudy?.studyId ?? artifact.manifest.fixtureId, candidate);
      await saveSuccessor(successor);
    }
    setNotice(`Return disposition simulated: ${disposition.replaceAll("_", " ")}.`);
    reloadReturns();
  }

  function moveGuided(direction: 1 | -1) {
    const index = GUIDED_MODES.indexOf(mode);
    const next = GUIDED_MODES[Math.max(0, Math.min(GUIDED_MODES.length - 1, index + direction))];
    setMode(next);
  }

  return (
    <main className={`studioInstrument ${mode === "becoming" ? "isBecoming" : ""}`}>
      <header className="instrumentTopbar studioTopbar">
        <Link className="instrumentBrand" href="/sketches"><ArrowLeft aria-hidden="true" /> Pinecœne <span>{guided ? "Guided Study" : "Sketch"}</span></Link>
        <div className="artifactIdentity"><strong>{artifact.manifest.fixtureId}</strong><span>{artifact.manifest.title} · {currentStudy ? "PROTOTYPE-ONLY FORK" : "IMMUTABLE FIXTURE"}</span></div>
        <nav aria-label="Studio utilities"><button onClick={() => setSoundOn((value) => !value)} aria-pressed={soundOn}>{soundOn ? <SpeakerHigh aria-hidden="true" /> : <SpeakerSlash aria-hidden="true" />} Sound {soundOn ? "on" : "off"}</button><Link href="/sketches/vital-sign">Vital Sign <sup>EXP</sup></Link></nav>
      </header>
      <div className="studioModeRail" role="tablist" aria-label="Studio modes">
        {(guided ? MODES.filter((item) => GUIDED_MODES.includes(item.id)) : MODES).map((item) => <button key={item.id} role="tab" aria-selected={mode === item.id} onClick={() => setMode(item.id)}>{item.label}</button>)}
      </div>
      <div className={`studioNotice ${notice ? "" : "isEmpty"}`} role="status">{notice ? <><CircleNotch aria-hidden="true" /> {notice}<button onClick={() => setNotice("")} aria-label="Dismiss notice"><X aria-hidden="true" /></button></> : null}</div>
      <section className="studioWorkspace">
        <div className="objectStage">
          <div className="stageTelemetry"><span>{mode.toUpperCase()}</span><span>PHASE {mode === "becoming" ? phase : 7} OF 7</span><span>{artifact.conformation.score.openEventIds.length + artifact.conformation.score.openRelationIds.length} OPEN</span><span>{artifact.conformation.score.topologyHash.slice(0, 10)}</span></div>
          <FormStage
            className="studioForm"
            scene={artifact.conformation.scene}
            progress={mode === "becoming" ? replayProgress : 1}
            reducedMotion={reducedMotion}
            selectedFeature={selectedFeature}
            autoRotate={mode === "fold" && !reducedMotion}
            onFeatureSelect={(detail) => { setSelectedFeature(detail.featureId); setInspection(detail.inspectionCopy); }}
          />
          {mode === "becoming" ? (
            <div className="replayOverlay">
              <div className="phaseJumps" aria-label="Replay phase jumps">{artifact.manifest.phases.map((item) => <button key={item.phase} data-current={phase === item.phase} onClick={() => { setReplayMs((item.phase - 1) / 7 * duration); setReplayPlaying(false); }}>{String(item.phase).padStart(2,"0")}</button>)}</div>
              <div className="replayCaption"><p>{currentCue?.label}</p><span>{currentCue?.kind.toUpperCase()} · {currentCue?.semanticRefs.join(" · ") || "FORM"}</span></div>
              <div className="replayControls"><button onClick={() => { if (replayMs >= duration) setReplayMs(0); setReplayPlaying((value) => !value); }} aria-label={replayPlaying ? "Pause Becoming" : "Play Becoming"}>{replayPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}</button><input type="range" aria-label="Becoming replay position" min={0} max={duration} value={replayMs} onChange={(event) => { setReplayMs(Number(event.target.value)); setReplayPlaying(false); }} /><span>{Math.floor(replayMs/1000)} / {duration/1000}s</span><button onClick={() => { setCondensed((value) => !value); setReplayMs(0); setReplayPlaying(false); }}>{condensed ? "84s full" : "30s condensed"}</button></div>
            </div>
          ) : <div className="stageCaption"><p>{mode === "fold" ? inspection : artifact.manifest.subtitle}</p><span>DRAG TO TURN · SCROLL TO NEAR · ARROW KEYS TO ROTATE</span></div>}
        </div>
        <aside className="studioInspector" aria-label={`${mode} inspector`}>
          {mode === "record" ? <RecordPanel artifact={artifact} /> : null}
          {mode === "admission" ? <AdmissionPanel artifact={artifact} decisions={decisions} updateEvent={updateEvent} updateRelation={updateRelation} setDecisions={setDecisions} /> : null}
          {mode === "recognition" ? <RecognitionPanel artifact={artifact} decisions={decisions} setDecisions={setDecisions} /> : null}
          {mode === "becoming" ? <BecomingPanel artifact={artifact} phase={phase} currentCue={currentCue} reducedMotion={reducedMotion} onStep={(nextPhase) => setReplayMs((nextPhase - 0.5) / 7 * duration)} /> : null}
          {mode === "fold" ? <FoldPanel artifact={artifact} selectedFeature={selectedFeature} setSelectedFeature={(id, copy) => { setSelectedFeature(id); setInspection(copy); }} /> : null}
          {mode === "lineage" ? <LineagePanel artifact={artifact} study={currentStudy} offering={offering} successors={successors} /> : null}
          {mode === "offering" ? <OfferingPanel artifact={artifact} offering={offering} address={address} setAddress={setAddress} resolution={resolution} setResolution={setResolution} expression={expression} setExpression={setExpression} permissions={permissions} setPermissions={setPermissions} compileOffering={() => void compileOffering()} busy={busy} /> : null}
          {mode === "returns" ? <ReturnsPanel returns={returns} successors={successors} onDisposition={(candidate, disposition) => void handleReturnDisposition(candidate, disposition)} /> : null}
        </aside>
      </section>
      <footer className="studioFooter">
        <div><span className="standingDot" /> {currentStudy ? "PROTOTYPE-ONLY SESSION FORK" : "FIXTURE-AUTHORED CANONICAL SPECIMEN"} · GEOMETRY COMPILED FROM THIS FIXTURE</div>
        <div className="studioFooterActions">
          {guided ? <button className="instrumentSecondary" disabled={GUIDED_MODES.indexOf(mode) === 0} onClick={() => moveGuided(-1)}><ArrowLeft aria-hidden="true" /> Previous decision</button> : null}
          {currentStudy ? <button className="instrumentSecondary" onClick={() => downloadJson(`${currentStudy.studyId}.json`, currentStudy)}><DownloadSimple aria-hidden="true" /> Export study</button> : null}
          <button className="instrumentSecondary" onClick={() => void resetFork()}>{currentStudy ? "Reset canonical" : "Reset decisions"}</button>
          <button className="instrumentPrimary" disabled={busy} onClick={() => guided && GUIDED_MODES.indexOf(mode) < GUIDED_MODES.length - 1 ? moveGuided(1) : void forkStudy()}>{guided && GUIDED_MODES.indexOf(mode) < GUIDED_MODES.length - 1 ? <>Next owner decision <ArrowRight aria-hidden="true" /></> : <><GitFork aria-hidden="true" /> {currentStudy ? "Update local study" : "Fork as local study"}</>}</button>
        </div>
      </footer>
    </main>
  );
}

function PanelHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <header className="inspectorHeading"><p className="instrumentEyebrow">{eyebrow}</p><h2>{title}</h2>{children}</header>;
}

function RecordPanel({ artifact }: { artifact: CompiledStudioArtifact }) {
  return <><PanelHeading eyebrow="START WITH THE TRAIL · EXACT PERMITTED RECORD" title={artifact.manifest.title}><p>{artifact.manifest.recordSummary}</p></PanelHeading><div className="inspectorSection"><h3>Source-linked events</h3><ol className="recordEvents">{artifact.manifest.events.map((event) => <li key={event.eventId}><span>{event.eventId} · P{event.phase}</span><strong>{event.exactRecord}</strong><p>{event.label}</p><small>{event.sourceAnchor}{event.uncertainty ? ` · ${event.uncertainty}` : ""}</small></li>)}</ol></div><div className="inspectorSection truthBlock"><SealCheck aria-hidden="true" /><p><strong>Geometry compiled from this fixture.</strong> Fixture-authored deterministic simulation; it does not claim arbitrary source reading or observed human admission.</p></div><div className="inspectorSection truthBlock"><SealCheck aria-hidden="true" /><p>{artifact.manifest.disclosure}</p></div></>;
}

function AdmissionPanel({ artifact, decisions, updateEvent, updateRelation, setDecisions }: { artifact: CompiledStudioArtifact; decisions: OwnerDecisionSetV0_1; updateEvent:(id:string,value:DecisionDisposition)=>void; updateRelation:(id:string,value:DecisionDisposition)=>void; setDecisions:React.Dispatch<React.SetStateAction<OwnerDecisionSetV0_1>> }) {
  return <><PanelHeading eyebrow="OWNER DECISION 02" title="Admission"><p>Operate the record. Every decision recompiles the same semantic law.</p></PanelHeading><div className="inspectorSection"><h3>Events</h3>{artifact.manifest.events.map((event) => <div className="decisionRow" key={event.eventId}><div><span>{event.eventId} · {event.role}</span><strong>{decisions.rewrittenLabels[event.eventId] || event.label}</strong></div><div className="segmentedDecision">{(["keep","rewrite_keep","open","remove"] as DecisionDisposition[]).map((value) => <button key={value} data-selected={decisions.eventDispositions[event.eventId] === value} onClick={() => updateEvent(event.eventId,value)}>{value === "rewrite_keep" ? "Rewrite" : value}</button>)}</div>{decisions.eventDispositions[event.eventId] === "rewrite_keep" ? <input aria-label={`Rewrite ${event.label}`} value={decisions.rewrittenLabels[event.eventId] ?? ""} placeholder={event.label} onChange={(e) => setDecisions((previous) => ({ ...previous, rewrittenLabels:{ ...previous.rewrittenLabels, [event.eventId]:e.target.value } }))} /> : null}</div>)}</div><div className="inspectorSection"><h3>Relations</h3>{artifact.manifest.relations.map((relation) => <div className="compactDecision" key={relation.relationId}><span>{relation.fromEventId} → {relation.toEventId}</span><select value={decisions.relationDispositions[relation.relationId]} onChange={(event) => updateRelation(relation.relationId,event.target.value as DecisionDisposition)}><option value="keep">Keep</option><option value="open">Leave OPEN</option><option value="remove">Remove</option></select></div>)}</div></>;
}

function RecognitionPanel({ artifact, decisions, setDecisions }: { artifact: CompiledStudioArtifact; decisions: OwnerDecisionSetV0_1; setDecisions:React.Dispatch<React.SetStateAction<OwnerDecisionSetV0_1>> }) {
  return <><PanelHeading eyebrow="OWNER DECISION 03" title="Recognition"><p>A Muse is acknowledged separately from its evidence. Rejected candidates create no topology.</p></PanelHeading><div className="inspectorSection museCandidates">{artifact.manifest.muses.map((muse) => <div className="museRow" key={muse.museId}><div><span>{muse.class.replaceAll("_"," ")}</span><strong>{muse.label}</strong><small>Evidence: {muse.evidenceEventIds.join(", ")}</small></div><div className="binaryInstrument"><button data-selected={decisions.museDispositions[muse.museId] === "acknowledge"} onClick={() => setDecisions((previous) => ({ ...previous, museDispositions:{ ...previous.museDispositions, [muse.museId]:"acknowledge" } }))}><Check aria-hidden="true" /> Acknowledge</button><button data-selected={decisions.museDispositions[muse.museId] === "reject"} onClick={() => setDecisions((previous) => ({ ...previous, museDispositions:{ ...previous.museDispositions, [muse.museId]:"reject" } }))}><X aria-hidden="true" /> Reject</button></div></div>)}</div><div className="inspectorSection truthBlock"><Eye aria-hidden="true" /><p>Recognition is the owner’s authored act in this simulation. It is not inferred by a model.</p></div></>;
}

function BecomingPanel({ artifact, phase, currentCue, reducedMotion, onStep }: { artifact:CompiledStudioArtifact; phase:number; currentCue:CompiledStudioArtifact["transition"]["cues"][number] | undefined; reducedMotion:boolean; onStep:(phase:number)=>void }) {
  return <><PanelHeading eyebrow="OWNER DECISION 04" title="The Becoming"><p>84 seconds at full measure. After completion, a 30-second recital becomes available.</p></PanelHeading><div className="inspectorSection"><h3>Causal event trace</h3><div className="phaseTrace">{artifact.manifest.phases.map((item) => <button key={item.phase} data-current={phase === item.phase} onClick={() => onStep(item.phase)}><span>{String(item.phase).padStart(2,"0")}</span><strong>{item.title}</strong><small>{item.state}</small></button>)}</div></div><div className="inspectorSection cueDetail"><LineSegments aria-hidden="true" /><span>{currentCue?.kind ?? "at rest"}</span><p>{currentCue?.label ?? "The form waits at the Fold."}</p><small>{currentCue?.semanticRefs.join(" · ")}</small></div>{reducedMotion ? <div className="inspectorSection truthBlock"><CircleNotch aria-hidden="true" /><p>Reduced motion is active. Use the seven explicit semantic steps; continuous replay is withheld.</p></div> : null}</>;
}

function FoldPanel({ artifact, selectedFeature, setSelectedFeature }: { artifact:CompiledStudioArtifact; selectedFeature:string; setSelectedFeature:(id:string,copy:string)=>void }) {
  return <><PanelHeading eyebrow="SETTLED CONFORMATION" title="The Fold"><p>Spatial and semantic inspection remain synchronized. What you see has standing.</p></PanelHeading><div className="inspectorSection anatomyRows">{artifact.conformation.scene.features.map((feature) => <button key={feature.featureId} data-selected={selectedFeature === feature.featureId} onClick={() => setSelectedFeature(feature.featureId,feature.inspectionCopy)}><span>{feature.materialRole}</span><strong>{feature.kind.replaceAll("_"," ")}</strong><small>{feature.semanticRefs.length} semantic refs</small></button>)}</div><dl className="hashLedger"><div><dt>Semantic</dt><dd>{artifact.conformation.score.semanticHash}</dd></div><div><dt>Topology</dt><dd>{artifact.conformation.score.topologyHash}</dd></div><div><dt>Scene</dt><dd>{artifact.conformation.scene.sceneHash}</dd></div></dl></>;
}

function LineagePanel({ artifact, study, offering, successors }: { artifact:CompiledStudioArtifact; study?:SessionStudyV0_1; offering?:OfferingPackageV0_2; successors:SuccessorStudyV0_1[] }) {
  return <><PanelHeading eyebrow="PROVENANCE · DESIGNER'S NOTE" title="Lineage"><p>{artifact.manifest.designerNote}</p></PanelHeading><div className="inspectorSection lineageNodes"><div><span>01 · SOURCE</span><strong>{artifact.manifest.sourceLabel}</strong><small>{artifact.manifest.fixtureHash}</small></div><div><span>02 · AUTHORED READING</span><strong>{artifact.manifest.events.length} candidates · {artifact.manifest.relations.length} relations</strong><small>fixture-authored</small></div><div><span>03 · DECISIONS</span><strong>{artifact.conformation.score.admittedEvents.length} admitted · {artifact.conformation.score.openEventIds.length} open</strong><small>{artifact.conformation.score.semanticHash}</small></div><div><span>04 · FOLD</span><strong>{artifact.manifest.formFamily.replaceAll("_"," ")}</strong><small>{artifact.conformation.score.topologyHash}</small></div>{study ? <div><span>05 · STUDY FORK</span><strong>{study.studyId}</strong><small>prototype_only · {study.fixtureHash}</small></div> : null}{offering ? <div><span>06 · OFFERING</span><strong>{offering.offeringId}</strong><small>{offering.resolution} · local simulation</small></div> : null}{successors.map((successor) => <div key={successor.successorId}><span>07 · SUCCESSOR</span><strong>{successor.successorId}</strong><small>docked locally · {successor.returnId}</small></div>)}</div><div className="inspectorSection truthBlock"><SealCheck aria-hidden="true" /><p>{artifact.manifest.disclosure}</p></div></>;
}

function OfferingPanel({ artifact, offering, address, setAddress, resolution, setResolution, expression, setExpression, permissions, setPermissions, compileOffering, busy }: { artifact:CompiledStudioArtifact; offering?:OfferingPackageV0_2; address:Address; setAddress:(value:Address)=>void; resolution:Resolution; setResolution:(value:Resolution)=>void; expression:ExpressionProfileV0_2; setExpression:React.Dispatch<React.SetStateAction<ExpressionProfileV0_2>>; permissions:OfferingPermissionsV0_2; setPermissions:React.Dispatch<React.SetStateAction<OfferingPermissionsV0_2>>; compileOffering:()=>void; busy:boolean }) {
  void artifact;
  return <><PanelHeading eyebrow="OWNER DECISIONS 06–07" title="Offering Canvas"><p>Expression can change finish and tempo. Address turns the whole form. Neither may rewrite the Fold.</p></PanelHeading><div className="inspectorSection"><h3>Resolution R0–R5</h3><div className="resolutionRail">{RESOLUTIONS.map((item) => <button key={item.id} data-selected={resolution === item.id} onClick={() => setResolution(item.id)}><span>{item.id}</span><strong>{item.label}</strong><small>{item.description}</small></button>)}</div></div><div className="inspectorSection offeringFields"><label>Finish<select value={expression.finish} onChange={(event) => setExpression((previous) => ({ ...previous, finish:event.target.value as ExpressionProfileV0_2["finish"] }))}><option value="archive">Archive</option><option value="metal">Metal</option><option value="moonlit">Moonlit</option></select></label><label>Temperament<select value={expression.temperament} onChange={(event) => setExpression((previous) => ({ ...previous, temperament:event.target.value as ExpressionProfileV0_2["temperament"] }))}><option value="tender">Tender</option><option value="solemn">Solemn</option><option value="ceremonial">Ceremonial</option></select></label><label className="wideField">Dedication<input value={expression.dedication} onChange={(event) => setExpression((previous) => ({ ...previous, dedication:event.target.value }))} /></label></div><div className="inspectorSection"><h3>Address</h3><div className="addressRail">{ADDRESSES.map((item) => <button key={item} data-selected={address === item} onClick={() => setAddress(item)}>{item}</button>)}</div></div><div className="inspectorSection permissionGrid">{Object.entries(permissions).map(([key,value]) => <label key={key}><input type="checkbox" checked={value} onChange={(event) => setPermissions((previous) => ({ ...previous, [key]:event.target.checked }))} /><span>{key.replace(/([A-Z])/g," $1")}</span></label>)}</div><div className="inspectorSection exactPreview"><h3>Exact recipient Preview</h3>{offering ? <><div className="previewStage">{offering.recipientScene ? <FormStage scene={offering.recipientScene} reducedMotion /> : <div className="resolutionMark"><span>{offering.resolution}</span><strong>{offering.title}</strong></div>}</div><dl className="microLedger"><div><dt>Package</dt><dd>{offering.packageHash.slice(0,12)}</dd></div><div><dt>Record</dt><dd>{offering.recipientRecord.length} visible</dd></div></dl><Link className="instrumentPrimary" href={`/w/${offering.offeringId}`}>Open exact Witness <ArrowRight aria-hidden="true" /></Link></> : <p className="emptyPanel">Compile to serialize the same package consumed by Preview and Witness.</p>}</div><div className="inspectorAction"><button className="instrumentPrimary" disabled={busy} onClick={compileOffering}>{busy ? "Compiling…" : `Prepare ${resolution} Offering locally`} <ArrowRight aria-hidden="true" /></button><small>No sending or delivery is claimed.</small></div></>;
}

function ReturnsPanel({ returns, successors, onDisposition }: { returns:ReturnCandidateV0_1[]; successors:SuccessorStudyV0_1[]; onDisposition:(candidate:ReturnCandidateV0_1, disposition:"hold_at_rest"|"dock_to_successor"|"archive_mark"|"reject")=>void }) {
  return <><PanelHeading eyebrow="LOCAL RETURN REVIEW" title="Returns"><p>Review a browser-local candidate and simulate an owner disposition. Nothing here is remote, received, accepted, released or sealed.</p></PanelHeading><div className="inspectorSection">{returns.length ? returns.map((candidate) => <article className="returnReview" key={candidate.returnId}><span>{candidate.returnId}</span><blockquote>{candidate.exactText}</blockquote><small>Muse reuse {candidate.mayBecomeMuse ? "permitted" : "denied"} · withdrawal {candidate.withdrawalAllowed ? "allowed" : "not offered"}</small><div className="returnDisposition"><button onClick={() => onDisposition(candidate,"dock_to_successor")}>Dock to successor</button><button onClick={() => onDisposition(candidate,"hold_at_rest")}>Hold at rest</button><button onClick={() => onDisposition(candidate,"archive_mark")}>Archive mark</button><button onClick={() => onDisposition(candidate,"reject")}>Reject</button></div></article>) : <div className="emptyPanel"><CircleNotch aria-hidden="true" /><p>No local Return candidate is visible for this Offering yet. Open the Witness and fold one there.</p></div>}</div>{successors.length ? <div className="inspectorSection"><h3>Successor dock</h3>{successors.map((successor) => <div className="successorRow" key={successor.successorId}><GitFork aria-hidden="true" /><div><strong>{successor.successorId}</strong><small>{successor.returnId} · prototype_only</small></div></div>)}</div> : null}</>;
}
