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
    "Receive, open, and make a Pinecœne: a portable relational artifact that remembers how it came to be.",
  applicationName: "Pinecœne",
  openGraph: {
    type: "website",
    title: "Pinecœne",
    description: "A work that remembers how it was made.",
    images: [
      {
        url: "/images/locket-material-reference.png",
        width: 1254,
        height: 1254,
        alt: "The luminous archival fold Locket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinecœne",
    description: "A work that remembers how it was made.",
    images: ["/images/locket-material-reference.png"],
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
