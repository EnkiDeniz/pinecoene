import type { Metadata } from "next";
import { MakerExperience } from "@/components/MakerExperience";

export const metadata: Metadata = {
  title: "Make your own",
  description: "Create a browser-local Pinecœne from an exact short record.",
};

export default function MakePage() {
  return <MakerExperience />;
}
