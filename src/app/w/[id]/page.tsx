import type { Metadata } from "next";
import { WitnessExperience } from "@/components/witness/WitnessExperience";
import { getHostedOfferingDescriptor } from "@/lib/offering-v01";

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
  const descriptor=await getHostedOfferingDescriptor(id);
  return <WitnessExperience offeringId={id} hostedDescriptor={descriptor} />;
}
