import type { Metadata } from "next";
import { StudioShelf } from "@/components/studio/StudioShelf";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS, getFixtureManifest } from "@/lib/studio-fixtures";

export const metadata: Metadata = {
  title: "Sketches",
  description: "Two fixture-authored records, two deterministic studies, and one deliberately owed test.",
  alternates: { canonical: "/sketches" },
};

export default async function SketchesPage() {
  const artifacts = await Promise.all(FIXTURE_IDS.map(async (id) => compileStudioArtifact(await getFixtureManifest(id))));
  return <StudioShelf artifacts={artifacts} />;
}
