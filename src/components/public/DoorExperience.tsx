"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FormStage } from "@/components/form/FormStage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { RendererNeutralSceneV0_1 } from "@/lib/studio-contracts";
import { DOOR_BEATS,DOOR_COPY } from "@/lib/door-copy";

export function DoorExperience({ scene }: { scene: RendererNeutralSceneV0_1 }) {
  const [introduced,setIntroduced] = useState(false);
  const [activeBeat,setActiveBeat] = useState("thing");
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroduced(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target instanceof HTMLElement) setActiveBeat(visible.target.dataset.beat ?? "thing");
    }, { rootMargin:"-28% 0px -52%", threshold:[0,.25,.6] });
    root.querySelectorAll<HTMLElement>("[data-beat]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="doorExperience" ref={rootRef}>
      <section className="doorNarrative" aria-label="The Pinecœne Door">
        <div className="doorVisualSticky">
          <div className="doorObject" onPointerDown={() => setIntroduced(true)}>
            <div className="doorPoster" aria-hidden="true"><span>PCN-0001</span><strong>Genesis</strong><small>Loading the exact public Fold…</small></div>
            <FormStage scene={scene} progress={1} reducedMotion={reducedMotion} autoRotate={false} className="doorForm" />
          </div>
          <div className="doorIntroduction" data-visible={introduced && activeBeat === "thing" ? "true" : "false"} aria-live="polite"><p>This is a Pinecœne.</p><span>Turn it.</span></div>
          <div className="doorIdentity"><span>GENESIS · PCN-0001</span><span>{activeBeat === "thing" ? "FORM AT REST · OPEN BY LAW" : activeBeat.toUpperCase()}</span></div>
        </div>
        <div className="doorBeats">
          {DOOR_BEATS.map((beat,index) => <article key={beat.id} data-beat={beat.id} className={beat.id === "thing" ? "doorBeat doorBeatThing" : "doorBeat"} aria-label={beat.id === "thing" ? DOOR_COPY.object : undefined}>
            {beat.id !== "thing" ? <div className="doorBeatCopy" data-active={activeBeat === beat.id}><span>{String(index).padStart(2,"0")} · {beat.eyebrow}</span><h1>{beat.title}</h1><p>{beat.body}</p></div> : <span className="srOnly">This is a Pinecœne. Turn it.</span>}
          </article>)}
        </div>
      </section>
      <section className="doorInvitation" aria-labelledby="door-invitation-title">
        <p className="publicEyebrow">THE PROJECT · OPEN</p>
        <h2 id="door-invitation-title">This idea is still messy.</h2>
        <p>{DOOR_COPY.project.split(". ").slice(1).join(". ")}</p>
        <h3>{DOOR_COPY.invitation}</h3>
        <div className="doorFinalActions"><Link href="/works/genesis?view=becoming">Watch one become</Link><Link href="/works">See the works</Link><Link href="/join#bring">Bring an idea</Link></div>
        <p className="doorEnding">{DOOR_COPY.ending}</p>
      </section>
    </main>
  );
}
