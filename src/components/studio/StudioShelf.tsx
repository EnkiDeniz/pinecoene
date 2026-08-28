"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, DownloadSimple, Flask, GitFork, LockKey } from "@phosphor-icons/react";
import { FormStage } from "@/components/form/FormStage";
import { downloadJson, exportLegacyShowcase, listStudies } from "@/lib/custody";
import type { CompiledStudioArtifact, SessionStudyV0_1 } from "@/lib/studio-contracts";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StudioShelf({ artifacts }: { artifacts: CompiledStudioArtifact[] }) {
  const [studies, setStudies] = useState<SessionStudyV0_1[]>([]);
  const reducedMotion = useReducedMotion();
  useEffect(() => { void listStudies().then(setStudies); }, []);

  function publicRecordSummary(summary: string) {
    return summary.replace("Its geometry is earned from admitted commitments", "Its geometry is compiled from the fixture’s admitted commitments");
  }

  return (
    <main className="studioShelf sketchesShelf">
      <section className="shelfIntro">
        <div><p className="instrumentEyebrow">STUDIO · OWNER INSTRUMENT</p><h1>Two fixtures.<br /><em>One public work.</em></h1></div>
        <p>These are curated, deterministic studies of the grammar. They are not arbitrary source readings, observed human admissions, production Folds, or proof of the ceiling.</p>
      </section>
      <aside className="sketchThreshold"><strong>You are leaving the public reading and entering a live sketch.</strong><span>Inside: fixture-authored records, deterministic compilation, local custody, hashes, owner-decision simulations, and spatial controls.</span></aside>
      <section className="artifactShelf" aria-label="Canonical specimens">
        {artifacts.map((artifact, index) => (
          <article className="artifactCard" key={artifact.manifest.fixtureId}>
            <div className="artifactCardStage">
              <span className="artifactIndex">0{index + 1}</span>
              <FormStage scene={artifact.conformation.scene} reducedMotion={reducedMotion} autoRotate={!reducedMotion} />
              <span className="artifactState">{artifact.conformation.score.openEventIds.length} OPEN · AT REST</span>
            </div>
            <div className="artifactCardCopy">
              <p className="instrumentEyebrow">{artifact.manifest.fixtureId} · {artifact.manifest.formFamily.replaceAll("_", " ")} · FIXTURE-AUTHORED · IMMUTABLE</p>
              <h2>{artifact.manifest.fixtureId === "pcn-0002" ? "Current Studio specimen" : artifact.manifest.title}</h2>
              <p>{publicRecordSummary(artifact.manifest.recordSummary)}</p>
              <dl className="microLedger">
                <div><dt>Phases</dt><dd>{artifact.manifest.phases.length}</dd></div>
                <div><dt>Events</dt><dd>{artifact.conformation.score.admittedEvents.length}</dd></div>
                <div><dt>Topology</dt><dd>{artifact.conformation.score.topologyHash.slice(0, 10)}</dd></div>
              </dl>
              <Link className="instrumentPrimary" href={`/studio/specimens/${artifact.manifest.fixtureId}`}>Enter the instrument <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="thinFoldCard" aria-labelledby="thin-fold-title"><div><p className="instrumentEyebrow">03 · OWED · NO RESULT</p><h2 id="thin-fold-title">The Thin Fold</h2><p>A deliberately sparse record must not be allowed to pose as dense, tested, or resolved. The experiment has not been run. No fixture, geometry, or result exists here yet.</p></div><dl><div><dt>Question</dt><dd>Can thin work remain honestly thin and still be beautiful?</dd></div><div><dt>Protocol</dt><dd>Hold Expression constant. Compile a minimal admitted record. Test whether standing can be cosmetically inflated.</dd></div><div><dt>Route</dt><dd>Withheld until a real source and result exist.</dd></div></dl></section>
      <section className="localStudies">
        <div className="sectionRuleHeading"><div><p className="instrumentEyebrow">SESSION STUDIES</p><h2>Browser-local forks</h2></div><Link className="instrumentSecondary" href="/studio/new"><GitFork aria-hidden="true" /> Fork a specimen</Link></div>
        {studies.length ? <div className="studyRows">{studies.map((study) => <Link key={study.studyId} href={`/studio/studies/${study.studyId}`}><span><Flask aria-hidden="true" /> {study.studyId}</span><span>{study.address} · {study.resolution}</span><ArrowRight aria-hidden="true" /></Link>)}</div> : <div className="emptyStudy"><LockKey aria-hidden="true" /><p>No local studies yet. A fork stays bound to its fixture hash and never impersonates the canonical specimen.</p></div>}
      </section>
      <aside className="legacyShelf">
        <div><p className="instrumentEyebrow">SHOWCASE LEGACY · READ-ONLY</p><p>Archives made by the retired free-text prototype remain exportable and are never silently promoted.</p></div>
        <button className="instrumentSecondary" onClick={() => void exportLegacyShowcase().then((value) => downloadJson("pinecoene-showcase-legacy.json", value))}><DownloadSimple aria-hidden="true" /> Export legacy</button>
      </aside>
    </main>
  );
}
