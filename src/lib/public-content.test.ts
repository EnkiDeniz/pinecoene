import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { SCIENCE_SOURCES } from "@/lib/public-content";
import { DOOR_COPY,getPublicDoorReleaseManifest } from "@/lib/public-release";

const RECEIVED_SHA = "b098b370c9c9a13756705023bd384a446a48eb37ce3d188a9ec8159258013671";

describe("public content authority", () => {
  it("preserves the received proposal byte-for-byte", async () => {
    const source = await readFile("docs/product/received/pinecoene-site-architecture-and-full-content-v0.2-hybrid.md");
    expect(createHash("sha256").update(source).digest("hex")).toBe(RECEIVED_SHA);
  });

  it("keeps the governing launch lines in the public reading", async () => {
    const home = await readFile("src/components/public/DoorExperience.tsx", "utf8");
    expect(home).toContain('import { DOOR_BEATS,DOOR_COPY } from "@/lib/door-copy"');
    const releasedCopy=JSON.stringify(DOOR_COPY);
    for (const line of [
      "This is a Pinecœne.",
      "They frighten us because they threaten what is known.",
      "it can become something beautiful.",
      "That object you turned is one of those shapes.",
      "Come make a Pinecœne.",
      "The music is still playing.",
    ]) expect(releasedCopy).toContain(line);
    expect(DOOR_COPY.ending).toBe("The music is still playing.");
  });

  it("maps every neighboring science source to claims and a limitation", () => {
    expect(SCIENCE_SOURCES).toHaveLength(7);
    for (const source of SCIENCE_SOURCES) {
      expect(source.claimIds.length).toBeGreaterThan(0);
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.limitation.length).toBeGreaterThan(40);
    }
  });

  it("keeps deep candidate source routes outside the public route tree", async () => {
    await expect(readFile("src/app/(public)/master/page.mdx", "utf8")).rejects.toMatchObject({ code:"ENOENT" });
    await expect(readFile("src/app/(public)/theorem/page.mdx", "utf8")).rejects.toMatchObject({ code:"ENOENT" });
  });

  it("binds the Door to Genesis and Pattern A", async () => {
    const manifest=await getPublicDoorReleaseManifest();
    expect(manifest.doorWorkRef.workIdentityRef).toMatchObject({internalId:"pcn-0001",publicSlug:"genesis"});
    expect(manifest.publishedWorkRefs).toHaveLength(1);
    expect(manifest.shelfEntries.map((entry)=>entry.kind)).toEqual(["published_work","curation_note","owed_experiment"]);
    expect(manifest.sentenceIntake).toEqual({state:"closed"});
  });
});
