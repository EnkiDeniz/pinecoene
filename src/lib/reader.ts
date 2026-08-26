import {
  type HumanAdmissionV0_1,
  type MuseCandidateV0_1,
  type ReadingCandidateSetV0_1,
  type SourceEnvelopeV0_1,
  hashObject,
} from "@/lib/protocol";

const STOP_WORDS = new Set([
  "about",
  "after",
  "again",
  "been",
  "before",
  "being",
  "from",
  "have",
  "into",
  "just",
  "more",
  "much",
  "only",
  "over",
  "some",
  "that",
  "their",
  "there",
  "these",
  "they",
  "this",
  "through",
  "very",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "with",
  "would",
  "your",
]);

function sentenceAnchors(text: string) {
  const segments: Array<{ start: number; end: number; exact: string }> = [];
  const matcher = /[^.!?\n]+(?:[.!?]+|(?=\n|$))/g;
  for (const match of text.matchAll(matcher)) {
    if (segments.length === 7) break;
    const raw = match[0];
    const leading = raw.length - raw.trimStart().length;
    const exact = raw.trim();
    if (!exact) continue;
    const start = (match.index ?? 0) + leading;
    segments.push({ start, end: start + exact.length, exact });
  }
  return segments;
}

function museCandidates(text: string): MuseCandidateV0_1[] {
  const counts = new Map<string, number>();
  for (const token of text.toLocaleLowerCase().match(/[\p{L}\p{N}œŒ'-]+/gu) ?? []) {
    const clean = token.replace(/^[-']+|[-']+$/g, "");
    if (clean.length < 4 || STOP_WORDS.has(clean)) continue;
    counts.set(clean, (counts.get(clean) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([label, occurrences], index) => ({
      museId: `muse-${index + 1}`,
      label,
      occurrences,
    }));
}

export async function readSourceManually(
  source: SourceEnvelopeV0_1,
): Promise<ReadingCandidateSetV0_1> {
  const events = sentenceAnchors(source.exactText).map((anchor, index) => ({
    eventId: `event-${index + 1}`,
    label: anchor.exact,
    anchor,
  }));
  const relations = events.slice(0, -1).map((event, index) => ({
    relationId: `relation-${index + 1}`,
    fromEventId: event.eventId,
    toEventId: events[index + 1].eventId,
    kind: "followed_by" as const,
  }));
  const muses = museCandidates(source.exactText);
  const payload = {
    schemaVersion: "pinecoene.reading-candidates.v0.1" as const,
    sourceHash: source.sourceHash,
    method: "manual_sentence_reader.v0.1" as const,
    events,
    relations,
    muses,
  };
  return { ...payload, candidateHash: await hashObject(payload) };
}

export function newAdmissionDraft(
  candidates: ReadingCandidateSetV0_1,
): Omit<HumanAdmissionV0_1, "admissionHash"> {
  return {
    schemaVersion: "pinecoene.human-admission.v0.1",
    sourceHash: candidates.sourceHash,
    candidateHash: candidates.candidateHash,
    eventDispositions: Object.fromEntries(
      candidates.events.map(({ eventId }) => [eventId, "pending"]),
    ),
    relationDispositions: Object.fromEntries(
      candidates.relations.map(({ relationId }) => [relationId, "pending"]),
    ),
    museDispositions: Object.fromEntries(
      candidates.muses.map(({ museId }) => [museId, "pending"]),
    ),
  };
}
