import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; media-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'" },
];

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async headers() {
    const noindex = { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" };
    return [
      { source: "/:path*", headers: [...securityHeaders,noindex] },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pinecoene.com" }],
        destination: "https://pinecoene.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--pinecne-nnb.com" }],
        destination: "https://pinecoene.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--pinecne-nnb.com" }],
        destination: "https://pinecoene.com/:path*",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
