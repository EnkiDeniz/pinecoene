import type { Metadata } from "next";
import { DoorExperience } from "@/components/public/DoorExperience";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import { getPublicDoorReleaseManifest } from "@/lib/public-release";

export const metadata: Metadata = {
  title: "Pinecœne — A shape for an idea",
  description: "Meet a real Pinecœne before the explanation: an accountable form that remembers how it became.",
  alternates: { canonical: "/" },
};

export default async function DoorPage() {
  const [artifact] = await Promise.all([compileStudioArtifact(await getFixtureManifest("pcn-0001")),getPublicDoorReleaseManifest()]);
  return <DoorExperience scene={artifact.conformation.scene} />;
}
