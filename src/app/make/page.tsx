import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";
import type { FixtureId } from "@/lib/studio-contracts";

export const metadata: Metadata = { title: "Guided Studio creation", description: "Fork a canonical specimen and operate seven owner decisions." };

export default async function MakePage({ searchParams }: { searchParams:Promise<{fixture?:string}> }) {
  const { fixture } = await searchParams;
  if (fixture && FIXTURE_IDS.includes(fixture as FixtureId)) {
    const artifact = await compileStudioArtifact(await getFixtureManifest(fixture as FixtureId));
    return <StudioInstrument initialArtifact={artifact} guided />;
  }
  const manifests = await Promise.all(FIXTURE_IDS.map(getFixtureManifest));
  return <main className="makeChooser"><header className="instrumentTopbar"><Link className="instrumentBrand" href="/studio">Pinecœne <span>Guided Study</span></Link></header><section><p className="instrumentEyebrow">OWNER DECISION 01 OF 07</p><h1>Choose a canonical<br /><em>specimen to fork.</em></h1><p>Arbitrary source reading remains deferred. These two sanitized records let you operate the real deterministic machinery and create materially different study forms.</p><div className="specimenChoices">{manifests.map((manifest) => <Link key={manifest.fixtureId} href={`/make?fixture=${manifest.fixtureId}`}><span>{manifest.fixtureId} · {manifest.formFamily.replaceAll("_"," ")}</span><h2>{manifest.title}</h2><p>{manifest.recordSummary}</p><strong>Begin guided study <ArrowRight aria-hidden="true" /></strong></Link>)}</div></section></main>;
}
