import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PublicChrome } from "@/components/public/PublicChrome";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";

export const metadata: Metadata = { title:"Use it",description:"Fork a canonical specimen and operate the deterministic Pinecœne study machinery.",alternates:{canonical:"/use"} };

export default async function UsePage({ searchParams }: { searchParams:Promise<{fixture?:string}> }) {
  const { fixture } = await searchParams;
  if (fixture && FIXTURE_IDS.includes(fixture as (typeof FIXTURE_IDS)[number])) {
    const artifact = await compileStudioArtifact(await getFixtureManifest(fixture as (typeof FIXTURE_IDS)[number]));
    return <StudioInstrument initialArtifact={artifact} guided />;
  }
  const manifests = await Promise.all(FIXTURE_IDS.map(getFixtureManifest));
  return <PublicChrome><main className="useChooser"><section><p className="publicEyebrow">USE IT · GUIDED FIXTURE FORK</p><h1>Fork a specimen.</h1><p className="useLead">Operate a real deterministic study without pretending that arbitrary source reading, owner admission, sending, or delivery exists here.</p><div className="useChoices">{manifests.map((manifest) => <Link key={manifest.fixtureId} href={`/use?fixture=${manifest.fixtureId}`} prefetch={false}><span>{manifest.fixtureId} · {manifest.formFamily.replaceAll("_"," ")}</span><h2>{manifest.title}</h2><p>{manifest.recordSummary}</p><strong>Begin guided study <ArrowRight aria-hidden="true" /></strong></Link>)}</div><aside className="publicBoundary">Canonical fixtures never mutate. Your choices create a labelled prototype-only browser-local fork bound to the fixture hash.</aside></section></main></PublicChrome>;
}
