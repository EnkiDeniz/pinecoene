import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/newsreader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinecoene.com"),
  title: {
    default: "Pinecœne — A work that remembers how it was made",
    template: "%s · Pinecœne",
  },
  description:
    "Pinecœne is a receipt-bound format for inquiry: a work can preserve how it became, become a form, travel by consent, and grow without rewriting its past.",
  applicationName: "Pinecœne",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Pinecœne",
    description: "A work that remembers how it became.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pinecœne — a work that remembers how it became" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinecœne",
    description: "A work that remembers how it became.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090807",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
