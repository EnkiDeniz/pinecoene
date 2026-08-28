import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instrument Demonstrator V0",
  description:
    "A synthetic, local Pinecœne instrument demonstrator for internal product learning.",
  robots: { index: false, follow: false, nocache: true },
};

export default function DemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
