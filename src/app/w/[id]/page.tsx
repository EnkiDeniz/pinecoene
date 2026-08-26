import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlagshipEncounter } from "@/components/FlagshipEncounter";

export const metadata: Metadata = {
  title: "I have been thinking about you",
};

export default async function WitnessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (id !== "pcn-0002") notFound();
  return <FlagshipEncounter />;
}
