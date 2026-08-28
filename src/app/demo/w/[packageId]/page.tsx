import { notFound } from "next/navigation";

import {
  createInstrumentDemoState,
  findRecipientPackage,
} from "@/features/instrument-demo/lib/compiler";

import { DemoWitness } from "./DemoWitness";

export default async function DemoWitnessPage({
  params,
}: Readonly<{ params: Promise<{ packageId: string }> }>) {
  const { packageId } = await params;
  const demo = await createInstrumentDemoState();
  const encounter = findRecipientPackage(demo, packageId);
  if (!encounter) notFound();

  return <DemoWitness packageId={encounter.packageId} />;
}
