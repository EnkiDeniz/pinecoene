import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { PublicClaimStanding } from "@/lib/public-content";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="publicEyebrow">{children}</p>;
}

export function Hero({ children }: { children: ReactNode }) {
  return <section className="publicHero">{children}<div className="grammarGlyph" role="img" aria-label="Illustrative grammar, not a Fold"><span /><span /><span /></div></section>;
}

export function Movement({ id, children, standing }: { id?: string; children: ReactNode; standing?: PublicClaimStanding }) {
  return <section id={id} className="publicMovement" data-standing={standing}>{children}</section>;
}

export function CtaRow({ primaryHref, primary, secondaryHref, secondary }: { primaryHref:string; primary:string; secondaryHref?:string; secondary?:string }) {
  return <div className="publicCtas"><Link className="publicPrimary" href={primaryHref} prefetch={false}>{primary}<ArrowRight aria-hidden="true" /></Link>{secondaryHref && secondary ? <Link className="publicSecondary" href={secondaryHref} prefetch={false}>{secondary}</Link> : null}</div>;
}

export function Boundary({ children }: { children: ReactNode }) {
  return <div className="publicBoundary">{children}</div>;
}

export function Standing({ kind, children }: { kind: PublicClaimStanding; children: ReactNode }) {
  return <span className="standingLabel" data-kind={kind}>{children}</span>;
}

export function Lifecycle() {
  const stages = ["RECORD", "READING", "ADMISSION", "FOLD", "MUSE", "EXPRESSION", "ADDRESS", "OFFERING", "ENCOUNTER", "RETURN", "SUCCESSOR"];
  return <ol className="publicLifecycle" aria-label="Pinecœne lifecycle">{stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2,"0")}</span>{stage}</li>)}</ol>;
}

export function ThreeAltitudes({ children }: { children: ReactNode }) {
  return <div className="altitudeGrid">{children}</div>;
}

export function Altitude({ label, standing, children }: { label:string; standing:PublicClaimStanding; children:ReactNode }) {
  return <article className="altitudeCard"><Standing kind={standing}>{label}</Standing>{children}</article>;
}

export function SourceBanner({ documentId }: { documentId:string }) {
  return <aside className="candidateBanner" aria-label="Document standing"><strong>{documentId}</strong><span>PROPOSAL-DERIVED EXCERPT · CANDIDATE · NON-CANONICAL · UNSEALED</span><p>The canonical source document has not been supplied. This page preserves only the proposal’s current public excerpt and may not impersonate the source.</p></aside>;
}
