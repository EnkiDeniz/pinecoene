import {
  buildOfferingPackage,
  compileScore,
  createSourceEnvelope,
  finalizeExpression,
  hashObject,
  type OfferingPackageV0_1,
  type ReadingCandidateSetV0_1,
} from "@/lib/protocol";
import { newAdmissionDraft, readSourceManually } from "@/lib/reader";

const FLAGSHIP_SOURCE = [
  "I have been thinking about you.",
  "The thought returned on quiet mornings.",
  "It changed shape each time I let it remain.",
  "I kept one part unfinished because finishing it would have been untrue.",
  "There is more that belongs only to the maker.",
].join(" ");

let fixturePromise: Promise<OfferingPackageV0_1> | undefined;

async function compileFlagshipFixture() {
  const source = await createSourceEnvelope(
    "I have been thinking about you",
    FLAGSHIP_SOURCE,
    "fixture_authored",
  );
  const manual = await readSourceManually(source);
  const candidatePayload = {
    ...manual,
    method: "fixture.v0.1" as const,
    candidateHash: undefined,
  };
  delete candidatePayload.candidateHash;
  const candidates: ReadingCandidateSetV0_1 = {
    ...candidatePayload,
    candidateHash: await hashObject(candidatePayload),
  };
  const admission = newAdmissionDraft(candidates);

  for (const event of candidates.events) {
    admission.eventDispositions[event.eventId] =
      event.eventId === "event-5" ? "private" : "admit";
  }
  for (const relation of candidates.relations) {
    admission.relationDispositions[relation.relationId] =
      relation.toEventId === "event-5" ? "reject" : "admit";
  }
  for (const muse of candidates.muses) {
    admission.museDispositions[muse.museId] = "admit";
  }

  const { score } = await compileScore(source, candidates, admission);
  const expression = await finalizeExpression(
    score.pinecoeneId,
    "I have been thinking about you.",
    "tender",
  );
  return buildOfferingPackage(score, expression, {
    title: "The thought that kept returning",
    senderLabel: "D.",
    standing: "fixture_authored",
    mode: "hosted_fixture",
  });
}

export function getFlagshipOffering() {
  fixturePromise ??= compileFlagshipFixture();
  return fixturePromise;
}
