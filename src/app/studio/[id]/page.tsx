import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";
import type { FixtureId } from "@/lib/studio-contracts";

export const metadata: Metadata = { title: "Owner instrument" };
export function generateStaticParams() { return FIXTURE_IDS.map((id) => ({ id })); }

export default async function StudioArtifactPage({ params, searchParams }: { params:Promise<{id:string}>; searchParams:Promise<{study?:string}> }) {
  const { id } = await params;
  if (!FIXTURE_IDS.includes(id as FixtureId)) notFound();
  const artifact = await compileStudioArtifact(await getFixtureManifest(id as FixtureId));
  const { study } = await searchParams;
  return <StudioInstrument initialArtifact={artifact} studyId={study} />;
}
