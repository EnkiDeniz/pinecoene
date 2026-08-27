"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, DownloadSimple, Flask, GitFork, LockKey, Plus } from "@phosphor-icons/react";
import { FormStage } from "@/components/form/FormStage";
import { downloadJson, exportLegacyShowcase, listStudies } from "@/lib/custody";
import type { CompiledStudioArtifact, SessionStudyV0_1 } from "@/lib/studio-contracts";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StudioShelf({ artifacts }: { artifacts: CompiledStudioArtifact[] }) {
  const [studies, setStudies] = useState<SessionStudyV0_1[]>([]);
  const reducedMotion = useReducedMotion();
  useEffect(() => { void listStudies().then(setStudies); }, []);

  return (
    <main className="studioShelf">
      <header className="instrumentTopbar">
        <Link className="instrumentBrand" href="/">Pinecœne <span>Studio</span></Link>
        <nav aria-label="Studio navigation"><Link href="/make">New study <Plus aria-hidden="true" /></Link><Link href="/vital-sign">Vital Sign <sup>EXP</sup></Link></nav>
      </header>
      <section className="shelfIntro">
        <div><p className="instrumentEyebrow">ARTIFACT SHELF · LOCAL CUSTODY</p><h1>Two records.<br /><em>Two earned forms.</em></h1></div>
        <p>Canonical fixtures never mutate. Enter one to inspect the admitted record, replay its becoming, operate owner decisions, and fork a browser-local study.</p>
      </section>
      <section className="artifactShelf" aria-label="Canonical specimens">
        {artifacts.map((artifact, index) => (
          <article className="artifactCard" key={artifact.manifest.fixtureId}>
            <div className="artifactCardStage">
              <span className="artifactIndex">0{index + 1}</span>
              <FormStage scene={artifact.conformation.scene} reducedMotion={reducedMotion} autoRotate={!reducedMotion} />
              <span className="artifactState">{artifact.conformation.score.openEventIds.length} OPEN · AT REST</span>
            </div>
            <div className="artifactCardCopy">
              <p className="instrumentEyebrow">{artifact.manifest.fixtureId} · {artifact.manifest.formFamily.replaceAll("_", " ")} · IMMUTABLE FIXTURE</p>
              <h2>{artifact.manifest.title}</h2>
              <p>{artifact.manifest.recordSummary}</p>
              <dl className="microLedger">
                <div><dt>Phases</dt><dd>{artifact.manifest.phases.length}</dd></div>
                <div><dt>Events</dt><dd>{artifact.conformation.score.admittedEvents.length}</dd></div>
                <div><dt>Topology</dt><dd>{artifact.conformation.score.topologyHash.slice(0, 10)}</dd></div>
              </dl>
              <Link className="instrumentPrimary" href={`/studio/${artifact.manifest.fixtureId}`}>Open the instrument <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
      <section className="localStudies">
        <div className="sectionRuleHeading"><div><p className="instrumentEyebrow">SESSION STUDIES</p><h2>Browser-local forks</h2></div><Link className="instrumentSecondary" href="/make"><GitFork aria-hidden="true" /> Fork a specimen</Link></div>
        {studies.length ? <div className="studyRows">{studies.map((study) => <Link key={study.studyId} href={`/studio/${study.fixtureId}?study=${study.studyId}`}><span><Flask aria-hidden="true" /> {study.studyId}</span><span>{study.address} · {study.resolution}</span><ArrowRight aria-hidden="true" /></Link>)}</div> : <div className="emptyStudy"><LockKey aria-hidden="true" /><p>No local studies yet. A fork stays bound to its fixture hash and never impersonates the canonical specimen.</p></div>}
      </section>
      <aside className="legacyShelf">
        <div><p className="instrumentEyebrow">SHOWCASE LEGACY · READ-ONLY</p><p>Archives made by the retired free-text prototype remain exportable and are never silently promoted.</p></div>
        <button className="instrumentSecondary" onClick={() => void exportLegacyShowcase().then((value) => downloadJson("pinecoene-showcase-legacy.json", value))}><DownloadSimple aria-hidden="true" /> Export legacy</button>
      </aside>
    </main>
  );
}
