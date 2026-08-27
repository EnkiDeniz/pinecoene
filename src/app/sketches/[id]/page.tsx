import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";

export const metadata: Metadata = { title: "Sketch instrument", robots: { index:false, follow:false } };
export const dynamicParams = false;
export function generateStaticParams() { return FIXTURE_IDS.map((id) => ({ id })); }

export default async function SketchInstrumentPage({ params, searchParams }: { params:Promise<{ id:string }>; searchParams:Promise<{ study?:string }> }) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  if (!FIXTURE_IDS.includes(id as (typeof FIXTURE_IDS)[number])) notFound();
  const artifact = await compileStudioArtifact(await getFixtureManifest(id as (typeof FIXTURE_IDS)[number]));
  return <StudioInstrument initialArtifact={artifact} studyId={query.study} />;
}
