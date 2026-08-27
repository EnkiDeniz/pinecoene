"use client";

import Link from "next/link";
import { ArrowRight, CircleNotch, SealCheck } from "@phosphor-icons/react";
import { FormStage } from "@/components/form/FormStage";
import type { CompiledStudioArtifact } from "@/lib/studio-contracts";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GatewayExperience({ artifact }: { artifact: CompiledStudioArtifact }) {
  const reducedMotion = useReducedMotion();
  return (
    <main className="studioGateway">
      <header className="instrumentTopbar gatewayTopbar">
        <Link className="instrumentBrand" href="/">Pinecœne <span>Curated Studio V1</span></Link>
        <nav aria-label="Gateway navigation">
          <Link href="/sketches">Sketches</Link>
          <Link href="/sketches/vital-sign">Vital Sign <sup>EXP</sup></Link>
          <Link href="/w/pcn-0002">Open an Offering</Link>
        </nav>
      </header>
      <section className="gatewayStage" aria-labelledby="gateway-title">
        <div className="gatewayCopy">
          <p className="instrumentEyebrow">PCN-0002 · THIS CHAT · FIXTURE-AUTHORED · OPEN</p>
          <h1 id="gateway-title">A work that remembers<br /><em>how it became.</em></h1>
          <p className="gatewayThesis">The record is admitted. Decisions earn geometry. The Fold holds what happened without pretending the story is finished.</p>
          <div className="gatewayActions">
            <Link className="instrumentPrimary" href="/sketches">Enter Sketches <ArrowRight aria-hidden="true" /></Link>
            <Link className="instrumentSecondary" href="/w/pcn-0002">Open an Offering</Link>
          </div>
        </div>
        <div className="gatewayForm" aria-label="Living PCN-0002 Fold">
          <div className="stageTelemetry"><span>PHASE 7 OF 7</span><span>6 SEALED · 1 OPEN</span><span>ENV 30%</span></div>
          <FormStage scene={artifact.conformation.scene} reducedMotion={reducedMotion} autoRotate={!reducedMotion} />
          <div className="gatewayFormCaption">
            <p>{artifact.manifest.subtitle}</p>
            <span>{artifact.conformation.score.topologyHash.slice(0, 16)} · GEOMETRY COMPILED FROM THIS FIXTURE</span>
          </div>
        </div>
      </section>
      <footer className="gatewayFooter">
        <span><CircleNotch aria-hidden="true" /> OPEN LIGHT</span>
        <p><SealCheck aria-hidden="true" /> Curated fixture · deterministic browser-local study</p>
        <span>CURRENT STUDY · FIXTURE-AUTHORED</span>
      </footer>
    </main>
  );
}
