import { canonicalize } from "json-canonicalize";
import {
  assertOfferingPackage,
  assertOwnerArchive,
} from "@/lib/schemas";

export type ArtifactStanding =
  | "fixture_authored"
  | "prototype_only"
  | "implemented_local";

export type Disposition = "pending" | "admit" | "reject" | "private";

export interface SourceEnvelopeV0_1 {
  schemaVersion: "pinecoene.source-envelope.v0.1";
  sourceId: string;
  title: string;
  exactText: string;
  sourceHash: string;
  standing: ArtifactStanding;
}

export interface SourceAnchorV0_1 {
  start: number;
  end: number;
  exact: string;
}

export interface EventCandidateV0_1 {
  eventId: string;
  label: string;
  anchor: SourceAnchorV0_1;
}

export interface RelationCandidateV0_1 {
  relationId: string;
  fromEventId: string;
  toEventId: string;
  kind: "followed_by";
}

export interface MuseCandidateV0_1 {
  museId: string;
  label: string;
  occurrences: number;
}

export interface ReadingCandidateSetV0_1 {
  schemaVersion: "pinecoene.reading-candidates.v0.1";
  sourceHash: string;
  method: "manual_sentence_reader.v0.1" | "fixture.v0.1";
  events: EventCandidateV0_1[];
  relations: RelationCandidateV0_1[];
  muses: MuseCandidateV0_1[];
  candidateHash: string;
}

export interface HumanAdmissionV0_1 {
  schemaVersion: "pinecoene.human-admission.v0.1";
  sourceHash: string;
  candidateHash: string;
  eventDispositions: Record<string, Disposition>;
  relationDispositions: Record<string, Exclude<Disposition, "private">>;
  museDispositions: Record<string, "pending" | "admit" | "reject">;
  admissionHash: string;
}

export type MotionTemperament = "tender" | "solemn" | "ceremonial";

export interface ExpressionProfileV0_1 {
  schemaVersion: "pinecoene.expression.v0.1";
  expressionProfileId: string;
  materialWorld: "luminous_archival_fold";
  motionTemperament: MotionTemperament;
  palette: {
    paper: string;
    brass: string;
    return: string;
    open: string;
    stage: string;
  };
  dedication: string;
  expressionHash: string;
}

export interface PerformanceCueV0_1 {
  cueId: string;
  atMs: number;
  durationMs: number;
  kind: "appear" | "unfold" | "return" | "open_seam" | "settle";
  semanticIds: string[];
  semanticText: string;
}

export interface PinecoeneScoreV0_1 {
  schemaVersion: "pinecoene.score.v0.1";
  pinecoeneId: string;
  sourceHash: string;
  candidateHash: string;
  admissionHash: string;
  events: Array<{ eventId: string; label: string }>;
  relations: Array<{
    relationId: string;
    fromEventId: string;
    toEventId: string;
    kind: "followed_by";
  }>;
  muses: Array<{ museId: string; label: string }>;
  closure: "open";
  openSeam: string;
  topologySeed: string;
  scoreHash: string;
}

export interface OfferingPackageV0_1 {
  schemaVersion: "pinecoene.offering-package.v0.1-showcase";
  standing: ArtifactStanding;
  disclosure: string;
  offering: {
    offeringId: string;
    pinecoeneId: string;
    senderLabel: string;
    title: string;
    dedication: string;
    mode: "local_preview" | "hosted_fixture";
  };
  projection: {
    events: PinecoeneScoreV0_1["events"];
    relations: PinecoeneScoreV0_1["relations"];
    muses: PinecoeneScoreV0_1["muses"];
    closure: "open";
    openSeam: string;
    topologySeed: string;
  };
  expression: ExpressionProfileV0_1;
  performance: PerformanceCueV0_1[];
  packageHash: string;
}

export interface OwnerArchiveV0_1 {
  schemaVersion: "pinecoene.owner-archive.v0.1-showcase";
  savedAt: string;
  source: SourceEnvelopeV0_1;
  candidates: ReadingCandidateSetV0_1;
  admission: HumanAdmissionV0_1;
  score: PinecoeneScoreV0_1;
  expression: ExpressionProfileV0_1;
  archiveHash: string;
}

export const FIXTURE_DISCLOSURE =
  "This specimen is curated fixture content. Its sender, recipient, admission, opening, consent, and Return states do not establish that those human acts occurred, that delivery happened, or that an external truth was verified.";

export const LOCAL_DISCLOSURE =
  "Created and kept in this browser. It has not been sent, delivered, accepted, released, sealed, or synchronized with Œdit.";

export async function sha256Text(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export async function hashObject(value: unknown): Promise<string> {
  return sha256Text(canonicalize(value));
}

export async function createSourceEnvelope(
  title: string,
  exactText: string,
  standing: ArtifactStanding = "implemented_local",
): Promise<SourceEnvelopeV0_1> {
  const sourceHash = await sha256Text(exactText);
  return {
    schemaVersion: "pinecoene.source-envelope.v0.1",
    sourceId: `src-${sourceHash.slice(0, 12)}`,
    title: title.trim() || "Untitled record",
    exactText,
    sourceHash,
    standing,
  };
}

export function makeExpressionDraft(
  pinecoeneId: string,
  dedication: string,
  motionTemperament: MotionTemperament,
) {
  return {
    schemaVersion: "pinecoene.expression.v0.1" as const,
    expressionProfileId: `expression-${pinecoeneId}-${motionTemperament}`,
    materialWorld: "luminous_archival_fold" as const,
    motionTemperament,
    palette: {
      paper: "#d8cdb9",
      brass: "#b88a4e",
      return: "#6f95a3",
      open: "#d9a45e",
      stage: "#0a0908",
    },
    dedication: dedication.trim(),
  };
}

export async function finalizeExpression(
  pinecoeneId: string,
  dedication: string,
  motionTemperament: MotionTemperament,
): Promise<ExpressionProfileV0_1> {
  const payload = makeExpressionDraft(
    pinecoeneId,
    dedication,
    motionTemperament,
  );
  return { ...payload, expressionHash: await hashObject(payload) };
}

export function hasCompleteAdmission(
  candidates: ReadingCandidateSetV0_1,
  admission: Omit<HumanAdmissionV0_1, "admissionHash">,
): boolean {
  return (
    candidates.events.every(
      ({ eventId }) => admission.eventDispositions[eventId] !== "pending",
    ) &&
    candidates.relations.every(
      ({ relationId }) =>
        admission.relationDispositions[relationId] !== "pending",
    ) &&
    candidates.muses.every(
      ({ museId }) => admission.museDispositions[museId] !== "pending",
    )
  );
}

export async function compileScore(
  source: SourceEnvelopeV0_1,
  candidates: ReadingCandidateSetV0_1,
  admissionDraft: Omit<HumanAdmissionV0_1, "admissionHash">,
): Promise<{
  admission: HumanAdmissionV0_1;
  score: PinecoeneScoreV0_1;
}> {
  if (!hasCompleteAdmission(candidates, admissionDraft)) {
    throw new Error("Every candidate needs an owner disposition before compilation.");
  }

  const admissionHash = await hashObject(admissionDraft);
  const admission: HumanAdmissionV0_1 = {
    ...admissionDraft,
    admissionHash,
  };
  const admittedEventIds = new Set(
    candidates.events
      .filter(({ eventId }) => admission.eventDispositions[eventId] === "admit")
      .map(({ eventId }) => eventId),
  );
  const events = candidates.events
    .filter(({ eventId }) => admittedEventIds.has(eventId))
    .map(({ eventId, label }) => ({ eventId, label }));

  if (events.length === 0) {
    throw new Error("At least one event must be admitted.");
  }

  const relations = candidates.relations.filter(
    ({ relationId, fromEventId, toEventId }) =>
      admission.relationDispositions[relationId] === "admit" &&
      admittedEventIds.has(fromEventId) &&
      admittedEventIds.has(toEventId),
  );
  const muses = candidates.muses
    .filter(({ museId }) => admission.museDispositions[museId] === "admit")
    .map(({ museId, label }) => ({ museId, label }));
  const semanticBasis = {
    sourceHash: source.sourceHash,
    candidateHash: candidates.candidateHash,
    admissionHash,
    events,
    relations,
    muses,
    closure: "open" as const,
    openSeam: "The record continues beyond what has been admitted.",
  };
  const scoreHash = await hashObject(semanticBasis);
  const topologySeed = (await sha256Text(`topology:${scoreHash}`)).slice(0, 24);
  const pinecoeneId = `pcn-${scoreHash.slice(0, 10)}`;

  return {
    admission,
    score: {
      schemaVersion: "pinecoene.score.v0.1",
      pinecoeneId,
      ...semanticBasis,
      topologySeed,
      scoreHash,
    },
  };
}

function performanceFor(
  score: PinecoeneScoreV0_1,
  temperament: MotionTemperament,
): PerformanceCueV0_1[] {
  const scale = temperament === "ceremonial" ? 1.2 : temperament === "solemn" ? 1.05 : 0.9;
  const eventCues = score.events.slice(0, 5).map((event, index) => ({
    cueId: `cue-event-${index + 1}`,
    atMs: Math.round((900 + index * 1350) * scale),
    durationMs: Math.round(980 * scale),
    kind: "unfold" as const,
    semanticIds: [event.eventId],
    semanticText: event.label,
  }));

  return [
    {
      cueId: "cue-appear",
      atMs: 0,
      durationMs: Math.round(900 * scale),
      kind: "appear",
      semanticIds: [],
      semanticText: "The Locket receives your attention.",
    },
    ...eventCues,
    {
      cueId: "cue-open-seam",
      atMs: Math.round(7600 * scale),
      durationMs: Math.round(1200 * scale),
      kind: "open_seam",
      semanticIds: score.events.slice(-1).map(({ eventId }) => eventId),
      semanticText: score.openSeam,
    },
    {
      cueId: "cue-settle",
      atMs: Math.round(9000 * scale),
      durationMs: Math.round(900 * scale),
      kind: "settle",
      semanticIds: [],
      semanticText: "The form settles. One seam remains open.",
    },
  ];
}

export async function buildOfferingPackage(
  score: PinecoeneScoreV0_1,
  expression: ExpressionProfileV0_1,
  input: {
    title: string;
    senderLabel: string;
    standing: ArtifactStanding;
    mode: "local_preview" | "hosted_fixture";
  },
): Promise<OfferingPackageV0_1> {
  const payload = {
    schemaVersion: "pinecoene.offering-package.v0.1-showcase" as const,
    standing: input.standing,
    disclosure:
      input.mode === "hosted_fixture" ? FIXTURE_DISCLOSURE : LOCAL_DISCLOSURE,
    offering: {
      offeringId: `offering-${score.scoreHash.slice(0, 12)}`,
      pinecoeneId: score.pinecoeneId,
      senderLabel: input.senderLabel,
      title: input.title,
      dedication: expression.dedication,
      mode: input.mode,
    },
    projection: {
      events: score.events,
      relations: score.relations,
      muses: score.muses,
      closure: score.closure,
      openSeam: score.openSeam,
      topologySeed: score.topologySeed,
    },
    expression,
    performance: performanceFor(score, expression.motionTemperament),
  };
  const result = { ...payload, packageHash: await hashObject(payload) };
  assertOfferingPackage(result);
  return result;
}

export async function buildOwnerArchive(
  source: SourceEnvelopeV0_1,
  candidates: ReadingCandidateSetV0_1,
  admission: HumanAdmissionV0_1,
  score: PinecoeneScoreV0_1,
  expression: ExpressionProfileV0_1,
): Promise<OwnerArchiveV0_1> {
  const payload = {
    schemaVersion: "pinecoene.owner-archive.v0.1-showcase" as const,
    savedAt: new Date().toISOString(),
    source,
    candidates,
    admission,
    score,
    expression,
  };
  const result = { ...payload, archiveHash: await hashObject(payload) };
  assertOwnerArchive(result);
  return result;
}
