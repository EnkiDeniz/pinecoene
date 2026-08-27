import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/approach", "/science", "/sketches", "/use"],
      disallow: ["/master", "/theorem", "/sketches/pcn-", "/sketches/vital-sign", "/w/"],
    },
    sitemap: "https://pinecoene.com/sitemap.xml",
    host: "https://pinecoene.com",
  };
}
