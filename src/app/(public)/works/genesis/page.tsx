import type { Metadata } from "next";
import { PublicWorkExperience } from "@/components/public/PublicWorkExperience";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";

export const metadata:Metadata = { title:"Genesis", description:"The published Genesis Pinecœne: Fold, Becoming, Record, Reading, and Lineage." };

export default async function GenesisWorkPage({ searchParams }:{ searchParams:Promise<{ view?:string }> }) {
  const [{ view },artifact] = await Promise.all([searchParams,compileStudioArtifact(await getFixtureManifest("pcn-0001"))]);
  return <PublicWorkExperience artifact={artifact} initialView={view} />;
}
