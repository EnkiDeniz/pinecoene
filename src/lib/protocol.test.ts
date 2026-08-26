import { describe, expect, it } from "vitest";
import {
  buildOfferingPackage,
  compileScore,
  createSourceEnvelope,
  finalizeExpression,
} from "@/lib/protocol";
import { newAdmissionDraft, readSourceManually } from "@/lib/reader";

async function admittedFixture() {
  const source = await createSourceEnvelope(
    "Test record",
    "The door remained open. The memory returned. One name stayed private.",
  );
  const candidates = await readSourceManually(source);
  const admission = newAdmissionDraft(candidates);
  admission.eventDispositions["event-1"] = "admit";
  admission.eventDispositions["event-2"] = "admit";
  admission.eventDispositions["event-3"] = "private";
  for (const relation of candidates.relations) {
    admission.relationDispositions[relation.relationId] =
      relation.toEventId === "event-3" ? "reject" : "admit";
  }
  for (const muse of candidates.muses) {
    admission.museDispositions[muse.museId] = "reject";
  }
  return { source, candidates, admission };
}

describe("showcase protocol", () => {
  it("anchors candidate events to the exact source", async () => {
    const source = await createSourceEnvelope(
      "Anchor test",
      "First sentence. Second sentence! Third sentence?",
    );
    const candidates = await readSourceManually(source);
    expect(candidates.events).toHaveLength(3);
    for (const event of candidates.events) {
      expect(source.exactText.slice(event.anchor.start, event.anchor.end)).toBe(
        event.anchor.exact,
      );
    }
  });

  it("compiles identical admitted input deterministically", async () => {
    const first = await admittedFixture();
    const second = await admittedFixture();
    const firstCompiled = await compileScore(
      first.source,
      first.candidates,
      first.admission,
    );
    const secondCompiled = await compileScore(
      second.source,
      second.candidates,
      second.admission,
    );
    expect(firstCompiled.score.scoreHash).toBe(secondCompiled.score.scoreHash);
    expect(firstCompiled.score.topologySeed).toBe(
      secondCompiled.score.topologySeed,
    );
  });

  it("fails closed when candidate dispositions remain pending", async () => {
    const source = await createSourceEnvelope("Incomplete", "One event. Another event.");
    const candidates = await readSourceManually(source);
    const admission = newAdmissionDraft(candidates);
    await expect(compileScore(source, candidates, admission)).rejects.toThrow(
      "Every candidate needs an owner disposition",
    );
  });

  it("excludes private source and private events from the recipient package", async () => {
    const { source, candidates, admission } = await admittedFixture();
    const { score } = await compileScore(source, candidates, admission);
    const expression = await finalizeExpression(
      score.pinecoeneId,
      "For you",
      "tender",
    );
    const offering = await buildOfferingPackage(score, expression, {
      title: source.title,
      senderLabel: "The maker",
      standing: "implemented_local",
      mode: "local_preview",
    });
    const serialized = JSON.stringify(offering);
    expect(serialized).not.toContain(source.exactText);
    expect(serialized).not.toContain("One name stayed private");
    expect(serialized).not.toContain("eventDispositions");
    expect(offering.projection.events.map(({ eventId }) => eventId)).toEqual([
      "event-1",
      "event-2",
    ]);
  });
});
