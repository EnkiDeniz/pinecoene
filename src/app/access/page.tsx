import type { Metadata } from "next";
import { BetaGate } from "@/components/BetaGate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Private beta — Pinecœne",
  description: "Private beta access for the Pinecœne candidate instrument.",
  robots: { index: false, follow: false, nocache: true },
};

export default function AccessPage() {
  return <BetaGate />;
}
