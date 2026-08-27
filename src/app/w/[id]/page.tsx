import type { Metadata } from "next";
import { WitnessExperience } from "@/components/witness/WitnessExperience";
import { buildOfferingPackageV0_2, compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import type { FixtureId } from "@/lib/studio-contracts";

export const metadata: Metadata = {
  title: "Open an Offering",
  robots: { index:false, follow:false },
};

export default async function WitnessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fallbackId: FixtureId = id === "pcn-0001" ? "pcn-0001" : "pcn-0002";
  const artifact = await compileStudioArtifact(await getFixtureManifest(fallbackId));
  const fallbackOffering = await buildOfferingPackageV0_2(artifact, {
    resolution:"R3",
    address:"latent",
    expression:{ schemaVersion:"pinecoene.expression.v0.2", finish:"metal", temperament:"solemn", dedication:fallbackId === "pcn-0001" ? "Hold the beginning at the Fold." : "For the next keeper of this still-open record." },
    permissions:{ inspectRecord:true, inspectMuses:true, createReturn:true, allowMuseReuse:false, allowWithdrawal:true },
    title:`${artifact.manifest.title} · Curated Offering`,
    senderLabel:"Pinecœne Studio",
  });
  return <WitnessExperience offeringId={id} fallbackOffering={fallbackOffering} />;
}
