import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { SCIENCE_SOURCES } from "@/lib/public-content";

const RECEIVED_SHA = "b098b370c9c9a13756705023bd384a446a48eb37ce3d188a9ec8159258013671";

describe("public content authority", () => {
  it("preserves the received proposal byte-for-byte", async () => {
    const source = await readFile("docs/product/received/pinecoene-site-architecture-and-full-content-v0.2-hybrid.md");
    expect(createHash("sha256").update(source).digest("hex")).toBe(RECEIVED_SHA);
  });

  it("keeps the governing launch lines in the public reading", async () => {
    const home = await readFile("src/app/(public)/page.mdx", "utf8");
    for (const line of [
      "A bet that the shape of a thought can be an object.",
      "Pinecœne is a receipt-bound format for inquiry.",
      "Expression is free. Standing is not.",
      "A Muse may matter without becoming evidence.",
      "The reading is not the work.",
      "The music is still playing.",
    ]) expect(home).toContain(line);
  });

  it("maps every neighboring science source to claims and a limitation", () => {
    expect(SCIENCE_SOURCES).toHaveLength(7);
    for (const source of SCIENCE_SOURCES) {
      expect(source.claimIds.length).toBeGreaterThan(0);
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.limitation.length).toBeGreaterThan(40);
    }
  });

  it("never lets candidate source routes claim canonical standing", async () => {
    const pages = await Promise.all(["master", "theorem"].map((route) => readFile(`src/app/(public)/${route}/page.mdx`, "utf8")));
    for (const page of pages) {
      expect(page).toContain("SourceBanner");
      expect(page).toContain("robots: { index: false, follow: false }");
      expect(page).toMatch(/exact .* document is absent/i);
    }
  });
});
