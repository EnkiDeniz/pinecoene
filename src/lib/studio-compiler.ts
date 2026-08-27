import { hashObject, sha256Text } from "@/lib/protocol";
import { defaultDecisions } from "@/lib/studio-fixtures";
import type {
  Address,
  CompiledStudioArtifact,
  ExpressionProfileV0_2,
  FixtureManifestV0_1,
  OfferingPackageV0_2,
  OfferingPermissionsV0_2,
  OwnerDecisionSetV0_1,
  RendererNeutralSceneV0_1,
  Resolution,
  ReturnCandidateV0_1,
  ReturnDispositionV0_1,
  SemanticFeatureV0_1,
  SessionStudyV0_1,
  SuccessorStudyV0_1,
  TransitionScoreV0_1,
} from "@/lib/studio-contracts";

const LOCAL_TRUTH =
  "Browser-local prototype simulation. It has not been sent, delivered, received, revoked, accepted, released, sealed, or synchronized.";

function seedNumber(seed: string) {
  let value = 2166136261;
  for (const character of seed) {
    value ^= character.charCodeAt(0);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

export function seededPrng(seed: string) {
  let value = seedNumber(seed) || 1;
  return () => {
    value ^= value << 13;
    value ^= value >>> 17;
    value ^= value << 5;
    return (value >>> 0) / 4294967296;
  };
}

function point(random: () => number, radius = 1): [number, number, number] {
  return [
    (random() * 2 - 1) * radius,
    (random() * 2 - 1) * radius,
    (random() * 2 - 1) * radius,
  ];
}

function tetrahedron(scale = 1): Array<[number, number, number]> {
  return [
    [0, scale * 0.96, 0],
    [-scale * 0.82, -scale * 0.52, scale * 0.58],
    [scale * 0.82, -scale * 0.52, scale * 0.58],
    [0, -scale * 0.52, -scale * 0.92],
  ];
}

const TETRA_EDGES: Array<[number, number]> = [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1]];
const BAG_POINTS: Array<[number, number, number]> = [
  [-1.55, -1.25, -1.25], [1.55, -1.25, -1.25], [1.55, 1.25, -1.25], [-1.55, 1.25, -1.25],
  [-1.55, -1.25, 1.25], [1.55, -1.25, 1.25], [1.55, 1.25, 1.25], [-1.55, 1.25, 1.25],
];
const BAG_EDGES: Array<[number, number]> = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[0,4],[1,5],[3,7]];

function addressOrientation(address: Address): [number, number, number] {
  return {
    latent: [0.08, -0.14, 0],
    day: [0.02, -0.5, 0.08],
    night: [0.14, 0.52, -0.08],
    earth: [-0.28, -0.12, 0],
    seas: [0.3, 0.12, 0.04],
    keeper: [0, 0, 0],
  }[address] as [number, number, number];
}

async function buildScene(
  manifest: FixtureManifestV0_1,
  decisions: OwnerDecisionSetV0_1,
  topologySeed: string,
  address: Address,
): Promise<RendererNeutralSceneV0_1> {
  const random = seededPrng(topologySeed);
  const admittedEvents = manifest.events.filter((event) => decisions.eventDispositions[event.eventId] !== "remove");
  const committed = admittedEvents.filter((event) => event.role === "commitment");
  const returns = admittedEvents.filter((event) => event.role === "return");
  const openEvents = admittedEvents.filter((event) => decisions.eventDispositions[event.eventId] === "open" || event.role === "opening");
  const acknowledgedMuses = manifest.muses.filter((muse) => decisions.museDispositions[muse.museId] === "acknowledge");
  const features: SemanticFeatureV0_1[] = [];

  features.push({
    featureId: "core",
    kind: "core",
    semanticRefs: committed.map((event) => event.eventId),
    materialRole: "committed",
    inspectionCopy: `${committed.length} admitted commitments strengthen the Solid Core.`,
    disclosure: "recipient_r2",
    points: tetrahedron(manifest.formFamily === "phase_membranes" ? 0.88 : 0.78),
    connections: TETRA_EDGES.slice(0, Math.max(3, Math.min(6, committed.length + 2))),
  });

  features.push({
    featureId: "bag",
    kind: "bag",
    semanticRefs: manifest.relations.filter((relation) => decisions.relationDispositions[relation.relationId] !== "remove").map((relation) => relation.relationId),
    materialRole: "edge",
    inspectionCopy: "The Bag holds admitted relation capacity. Two closing edges remain withheld.",
    disclosure: "recipient_r2",
    points: BAG_POINTS,
    connections: BAG_EDGES,
  });

  for (const phase of manifest.phases) {
    if (manifest.formFamily !== "phase_membranes") break;
    const count = 10 + phase.phase * 2;
    const phaseRandom = seededPrng(`${topologySeed}:phase:${phase.phase}`);
    const points = Array.from({ length: count }, (_, index) => {
      const angle = (index / count) * Math.PI * 2;
      const radius = 0.88 + phase.phase * 0.11 + (phaseRandom() - 0.5) * 0.18;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.82, (phaseRandom() - 0.5) * (0.45 + phase.phase * 0.05)] as [number, number, number];
    });
    features.push({
      featureId: `membrane-${phase.phase}`,
      kind: "membrane",
      semanticRefs: admittedEvents.filter((event) => event.phase === phase.phase).map((event) => event.eventId),
      materialRole: phase.state === "open" ? "open" : phase.phase % 2 ? "edge" : "committed",
      inspectionCopy: `Phase ${phase.phase} · ${phase.title} · ${phase.state.toUpperCase()}`,
      disclosure: "recipient_r2",
      points,
      connections: points.map((_, index) => [index, (index + 1) % points.length]),
      phase: phase.phase,
      state: phase.state,
    });
  }

  for (const event of returns) {
    const eventRandom = seededPrng(`${topologySeed}:return:${event.eventId}`);
    features.push({
      featureId: `return-${event.eventId}`,
      kind: "return_field",
      semanticRefs: [event.eventId],
      materialRole: "evidence",
      inspectionCopy: `Evidence field at ${event.label}. Every particle cites ${event.sourceAnchor}.`,
      disclosure: "recipient_r3",
      points: Array.from({ length: 28 }, () => point(eventRandom, 1.15)).map(([x, y, z]) => [x, y * 0.55, z * 0.75] as [number, number, number]),
    });
  }

  acknowledgedMuses.forEach((muse, index) => {
    const angle = (index / Math.max(1, acknowledgedMuses.length)) * Math.PI * 2 + random() * 0.28;
    features.push({
      featureId: `muse-${muse.museId}`,
      kind: "constellation",
      semanticRefs: [muse.museId, ...muse.evidenceEventIds],
      materialRole: "muse",
      inspectionCopy: `${muse.label} is acknowledged by the owner, separately from its evidence.`,
      disclosure: "recipient_r3",
      points: [[Math.cos(angle) * 1.72, Math.sin(angle) * 1.28, (random() - 0.5) * 1.1]],
    });
  });

  for (const event of openEvents) {
    const openRandom = seededPrng(`${topologySeed}:open:${event.eventId}`);
    features.push({
      featureId: `open-${event.eventId}`,
      kind: "open_relation",
      semanticRefs: [event.eventId],
      materialRole: "open",
      inspectionCopy: `${event.label} remains OPEN. No missing face or unresolved path is counterfeited as closure.`,
      disclosure: "recipient_r2",
      points: [point(openRandom, 1.35), point(openRandom, 1.35)],
      connections: [],
    });
  }

  features.push({
    featureId: `address-${address}`,
    kind: "address_locus",
    semanticRefs: [],
    materialRole: "address",
    inspectionCopy: address === "latent" ? "No Address has been declared. Orientation remains latent." : `Addressed toward ${address}. The whole form turns; the Fold does not change.`,
    disclosure: "recipient_r4",
    points: [[0, 0, 0], [Math.cos(addressOrientation(address)[1]) * 2.1, Math.sin(addressOrientation(address)[1]) * 2.1, 0]],
    connections: [[0, 1]],
  });

  const sceneDraft = {
    schemaVersion: "pinecoene.scene.v0.1" as const,
    formFamily: manifest.formFamily,
    fixtureId: manifest.fixtureId,
    features,
    orientation: addressOrientation(address),
  };
  return { ...sceneDraft, sceneHash: await hashObject(sceneDraft) };
}

async function buildTransition(manifest: FixtureManifestV0_1, decisions: OwnerDecisionSetV0_1): Promise<TransitionScoreV0_1> {
  const visible = manifest.events.filter((event) => decisions.eventDispositions[event.eventId] !== "remove");
  const cues: TransitionScoreV0_1["cues"] = visible.map((event, index) => ({
    cueId: `cue-${event.eventId}`,
    phase: event.phase,
    atMs: Math.round((index / Math.max(1, visible.length)) * 76000) + 1800,
    durationMs: 3600,
    semanticRefs: [event.eventId],
    label: decisions.rewrittenLabels[event.eventId] || event.label,
    kind: (decisions.eventDispositions[event.eventId] === "open" || event.role === "opening" ? "open" : event.role === "return" ? "return" : "admit") as "open" | "return" | "admit",
  }));
  cues.push({ cueId: "cue-settle", phase: 7, atMs: 80000, durationMs: 4000, semanticRefs: [], label: "At rest · geometry earned · closure withheld", kind: "settle" });
  const draft = { schemaVersion: "pinecoene.transition-score.v0.1" as const, fullDurationMs: 84000 as const, condensedDurationMs: 30000 as const, cues };
  return { ...draft, transitionHash: await hashObject(draft) };
}

export async function compileStudioArtifact(
  manifest: FixtureManifestV0_1,
  input?: { decisions?: OwnerDecisionSetV0_1; address?: Address; study?: SessionStudyV0_1 },
): Promise<CompiledStudioArtifact> {
  const decisions = input?.decisions ?? defaultDecisions(manifest);
  const address = input?.address ?? input?.study?.address ?? "latent";
  const admittedEvents = manifest.events
    .filter((event) => decisions.eventDispositions[event.eventId] !== "remove")
    .map((event) => ({ ...event, label: decisions.rewrittenLabels[event.eventId] || event.label, disposition: decisions.eventDispositions[event.eventId] }));
  const admittedEventIds = new Set(admittedEvents.map((event) => event.eventId));
  const admittedRelations = manifest.relations
    .filter((relation) => decisions.relationDispositions[relation.relationId] !== "remove" && admittedEventIds.has(relation.fromEventId) && admittedEventIds.has(relation.toEventId))
    .map((relation) => ({ ...relation, disposition: decisions.relationDispositions[relation.relationId] }));
  const acknowledgedMuses = manifest.muses.filter((muse) => decisions.museDispositions[muse.museId] === "acknowledge");
  const semanticBasis = {
    fixtureId: manifest.fixtureId,
    fixtureHash: manifest.fixtureHash,
    events: admittedEvents,
    relations: admittedRelations,
    muses: acknowledgedMuses,
    closure: "open" as const,
  };
  const semanticHash = await hashObject(semanticBasis);
  const topologySeed = (await sha256Text(`pinecoene-topology-v0.2:${semanticHash}`)).slice(0, 32);
  const topologyBasis = {
    formFamily: manifest.formFamily,
    topologySeed,
    committed: admittedEvents.filter((event) => event.role === "commitment").map((event) => event.eventId),
    returns: admittedEvents.filter((event) => event.role === "return").map((event) => event.eventId),
    open: admittedEvents.filter((event) => event.disposition === "open" || event.role === "opening").map((event) => event.eventId),
    muses: acknowledgedMuses.map((muse) => muse.museId),
  };
  const topologyHash = await hashObject(topologyBasis);
  const score = {
    schemaVersion: "pinecoene.score.v0.2" as const,
    pinecoeneId: input?.study?.studyId ?? manifest.fixtureId,
    fixtureId: manifest.fixtureId,
    admittedEvents,
    admittedRelations,
    acknowledgedMuses,
    openEventIds: admittedEvents.filter((event) => event.disposition === "open" || event.role === "opening").map((event) => event.eventId),
    openRelationIds: admittedRelations.filter((relation) => relation.disposition === "open").map((relation) => relation.relationId),
    semanticHash,
    topologySeed,
    topologyHash,
    closure: "open" as const,
  };
  const scene = await buildScene(manifest, decisions, topologySeed, address);
  const transition = await buildTransition(manifest, decisions);
  const conformationDraft = { schemaVersion: "pinecoene.semantic-conformation.v0.1" as const, score, scene };
  return { manifest, study: input?.study, conformation: { ...conformationDraft, conformationHash: await hashObject(conformationDraft) }, transition };
}

export async function createSessionStudy(
  manifest: FixtureManifestV0_1,
  decisions: OwnerDecisionSetV0_1,
  expression: ExpressionProfileV0_2,
  address: Address,
  resolution: Resolution,
): Promise<SessionStudyV0_1> {
  const studyBasis = { fixtureId: manifest.fixtureId, fixtureHash: manifest.fixtureHash, decisions, expression, address, resolution, standing: "prototype_only" as const };
  const studyHash = await hashObject(studyBasis);
  const now = new Date().toISOString();
  return { schemaVersion: "pinecoene.session-study.v0.1", studyId: `study-${manifest.fixtureId}-${studyHash.slice(0, 10)}`, ...studyBasis, studyHash, createdAt: now, updatedAt: now };
}

function resolutionRank(resolution: Resolution) {
  return Number(resolution.slice(1));
}

export async function buildOfferingPackageV0_2(
  artifact: CompiledStudioArtifact,
  input: { resolution: Resolution; address: Address; expression: ExpressionProfileV0_2; permissions: OfferingPermissionsV0_2; title: string; senderLabel: string },
): Promise<OfferingPackageV0_2> {
  const rank = resolutionRank(input.resolution);
  const scene = rank >= 2 ? artifact.conformation.scene : null;
  const safeScene = scene ? { ...scene, features: scene.features.filter((feature) => rank >= Number(feature.disclosure.slice(-1))) } : null;
  const record = rank >= 1 && input.permissions.inspectRecord
    ? artifact.conformation.score.admittedEvents.map(({ eventId, label, role }) => ({ eventId, label, role }))
    : [];
  const payload = {
    schemaVersion: "pinecoene.offering-package.v0.2" as const,
    standing: artifact.study ? "prototype_only" as const : "fixture_authored" as const,
    offeringId: "",
    title: input.title,
    senderLabel: input.senderLabel,
    fixtureId: artifact.manifest.fixtureId,
    studyId: artifact.study?.studyId,
    resolution: input.resolution,
    address: input.address,
    expression: input.expression,
    permissions: input.permissions,
    recipientScene: safeScene,
    recipientRecord: record,
    transition: rank >= 2 ? artifact.transition : null,
    disclosure: artifact.study ? LOCAL_TRUTH : artifact.manifest.disclosure,
  };
  const identityHash = await hashObject(payload);
  const withId = { ...payload, offeringId: `offer-${artifact.manifest.fixtureId}-${identityHash.slice(0, 12)}` };
  return { ...withId, packageHash: await hashObject(withId) };
}

export async function createReturnCandidate(offeringId: string, exactText: string, mayBecomeMuse: boolean, withdrawalAllowed: boolean): Promise<ReturnCandidateV0_1> {
  const createdAt = new Date().toISOString();
  const basis = { offeringId, exactText: exactText.trim(), mayBecomeMuse, withdrawalAllowed, standing: "prototype_only" as const };
  const candidateHash = await hashObject(basis);
  return { schemaVersion: "pinecoene.return-candidate.v0.1", returnId: `return-${candidateHash.slice(0, 12)}`, ...basis, candidateHash, createdAt };
}

export async function disposeReturn(candidate: ReturnCandidateV0_1, disposition: ReturnDispositionV0_1["disposition"], note = ""): Promise<ReturnDispositionV0_1> {
  const decidedAt = new Date().toISOString();
  const basis = { returnId: candidate.returnId, disposition, note };
  return { schemaVersion: "pinecoene.return-disposition.v0.1", ...basis, dispositionHash: await hashObject(basis), decidedAt };
}

export async function createSuccessorStudy(predecessorStudyId: string, candidate: ReturnCandidateV0_1): Promise<SuccessorStudyV0_1> {
  const createdAt = new Date().toISOString();
  const basis = { predecessorStudyId, returnId: candidate.returnId, standing: "prototype_only" as const };
  const successorHash = await hashObject(basis);
  return { schemaVersion: "pinecoene.successor-study.v0.1", successorId: `successor-${successorHash.slice(0, 12)}`, ...basis, successorHash, createdAt };
}
