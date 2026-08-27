import type { Metadata } from "next";
import { StudioShelf } from "@/components/studio/StudioShelf";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";

export const metadata: Metadata = { title: "Curated Studio", description: "Operate two fixture-authored Pinecœnes and fork browser-local studies." };

export default async function StudioPage() {
  const artifacts = await Promise.all(FIXTURE_IDS.map(async (id) => compileStudioArtifact(await getFixtureManifest(id))));
  return <StudioShelf artifacts={artifacts} />;
}
