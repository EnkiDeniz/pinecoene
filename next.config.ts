import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
];

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      { source: "/studio", destination: "/sketches", statusCode: 301 },
      { source: "/studio/:id", destination: "/sketches/:id", statusCode: 301 },
      { source: "/make", destination: "/use", statusCode: 301 },
      { source: "/vital-sign", destination: "/sketches/vital-sign", statusCode: 301 },
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
