import { attachHash, hashContract } from "./canonical";
import {
  demoLimitations,
  type AuthoredFixtureRecordV0_1,
  type DemoStanding,
  type FixtureFaceV0_1,
  type FixturePointV0_1,
  type FixtureRelationV0_1,
  type ReadableCaseProjectionV0_1,
} from "./types";

function standing<T extends DemoStanding["lifecycle"]>(lifecycle: T) {
  return {
    lifecycle,
    provenanceKind: "authored_fixture" as const,
    custody: "local_internal" as const,
  };
}

const FOURTH_POINT_FRAMES: ReadableCaseProjectionV0_1["boundaryFrames"] = [
  { frameId: "frame-x-min", axis: "x", offset: -1.6 },
  { frameId: "frame-x-max", axis: "x", offset: 1.6 },
  { frameId: "frame-y-min", axis: "y", offset: -1.35 },
  { frameId: "frame-y-max", axis: "y", offset: 1.35 },
  { frameId: "frame-z-min", axis: "z", offset: -1.4 },
  { frameId: "frame-z-max", axis: "z", offset: 1.4 },
];

export async function createFourthPointCandidate(): Promise<ReadableCaseProjectionV0_1> {
  const draft: Omit<ReadableCaseProjectionV0_1, "contentHash"> = {
    schemaId: "pinecoene.readable-case-projection",
    schemaVersion: "0.1.0",
    candidateId: "candidate-fourth-point-v0-1",
    caseId: "demo-fourth-point",
    title: "The Fourth Point — competing reconstructions",
    standing: standing("candidate"),
    sourceCoverage: "selected_fixture_projection",
    points: [
      { pointId: "A", label: "First held condition", role: "base", position: [-0.82, -0.48, 0.34], disclosure: "public" },
      { pointId: "B", label: "Second held condition", role: "base", position: [0.82, -0.48, 0.34], disclosure: "public" },
      { pointId: "C", label: "Declared boundary", role: "base", position: [0, -0.48, -0.92], disclosure: "team" },
      { pointId: "Q1", label: "Alternative Q1", role: "alternative", position: [-0.3, 0.94, 0.1], disclosure: "team" },
      { pointId: "Q2", label: "Alternative Q2", role: "alternative", position: [0.22, 0.98, -0.08], disclosure: "public" },
    ],
    relations: [
      { relationId: "rel-a-b", label: "A supports B", fromPointId: "A", toPointId: "B", kind: "supports", standing: "candidate", disclosure: "public" },
      { relationId: "rel-b-c", label: "B meets C", fromPointId: "B", toPointId: "C", kind: "boundary", standing: "candidate", disclosure: "team" },
      { relationId: "rel-c-a", label: "C bounds A", fromPointId: "C", toPointId: "A", kind: "boundary", standing: "candidate", disclosure: "team" },
      { relationId: "rel-a-q1", label: "Q1 depends on A", fromPointId: "A", toPointId: "Q1", kind: "depends_on", standing: "candidate", disclosure: "team" },
      { relationId: "rel-b-q1", label: "Q1 depends on B", fromPointId: "B", toPointId: "Q1", kind: "depends_on", standing: "candidate", disclosure: "team" },
      { relationId: "rel-q1-pressure", label: "Q1 presses against C", fromPointId: "Q1", toPointId: "C", kind: "pressure", standing: "candidate", disclosure: "team" },
      { relationId: "rel-a-q2", label: "Q2 depends on A", fromPointId: "A", toPointId: "Q2", kind: "depends_on", standing: "candidate", disclosure: "public" },
      { relationId: "rel-b-q2", label: "Q2 depends on B", fromPointId: "B", toPointId: "Q2", kind: "depends_on", standing: "candidate", disclosure: "public" },
      { relationId: "rel-q2-c-open", label: "Q2 toward C remains proposed OPEN", fromPointId: "Q2", toPointId: "C", kind: "open", standing: "proposed_open", disclosure: "team" },
    ],
    faces: [
      { faceId: "face-a-b-q1", label: "Q1 candidate surface", pointIds: ["A", "B", "Q1"], relationIds: ["rel-a-b", "rel-a-q1", "rel-b-q1"], standing: "candidate", disclosure: "team" },
      { faceId: "face-a-b-q2", label: "Q2 candidate surface", pointIds: ["A", "B", "Q2"], relationIds: ["rel-a-b", "rel-a-q2", "rel-b-q2"], standing: "candidate", disclosure: "public" },
    ],
    dependencies: [
      { featureId: "point-A", featureKind: "point", pointIds: ["A"], relationIds: [] },
      { featureId: "point-B", featureKind: "point", pointIds: ["B"], relationIds: [] },
      { featureId: "point-C", featureKind: "point", pointIds: ["C"], relationIds: [] },
      { featureId: "point-Q1", featureKind: "point", pointIds: ["Q1"], relationIds: [] },
      { featureId: "point-Q2", featureKind: "point", pointIds: ["Q2"], relationIds: [] },
      { featureId: "edge-rel-a-q1", featureKind: "edge", pointIds: ["A", "Q1"], relationIds: ["rel-a-q1"] },
      { featureId: "edge-rel-b-q1", featureKind: "edge", pointIds: ["B", "Q1"], relationIds: ["rel-b-q1"] },
      { featureId: "edge-rel-q1-pressure", featureKind: "edge", pointIds: ["Q1", "C"], relationIds: ["rel-q1-pressure"] },
      { featureId: "face-a-b-q1", featureKind: "face", pointIds: ["A", "B", "Q1"], relationIds: ["rel-a-b", "rel-a-q1", "rel-b-q1"] },
      { featureId: "edge-rel-a-q2", featureKind: "edge", pointIds: ["A", "Q2"], relationIds: ["rel-a-q2"] },
      { featureId: "edge-rel-b-q2", featureKind: "edge", pointIds: ["B", "Q2"], relationIds: ["rel-b-q2"] },
      { featureId: "edge-rel-q2-c-open", featureKind: "edge", pointIds: ["Q2", "C"], relationIds: ["rel-q2-c-open"] },
      { featureId: "face-a-b-q2", featureKind: "face", pointIds: ["A", "B", "Q2"], relationIds: ["rel-a-b", "rel-a-q2", "rel-b-q2"] },
      ...FOURTH_POINT_FRAMES.map(({ frameId }) => ({ featureId: frameId, featureKind: "frame" as const, pointIds: [], relationIds: [] })),
    ],
    alternativeGroups: [
      { groupId: "fourth-point-alternatives", memberPointIds: ["Q1", "Q2"], rule: "exactly_one_may_be_selected" },
    ],
    contradictions: [
      { contradictionId: "q1-q2-exclusive", memberPointIds: ["Q1", "Q2"], explanation: "The fixture declares Q1 and Q2 mutually exclusive; neither may be silently promoted." },
    ],
    boundaryFrames: FOURTH_POINT_FRAMES,
    limitations: demoLimitations(),
  };
  return attachHash("pinecoene.readable-case-projection.v0.1", draft, "contentHash");
}

export async function createFourthPointFixtureRecord(input?: {
  privateLabel?: string;
  privatePosition?: [number, number, number];
}): Promise<AuthoredFixtureRecordV0_1> {
  const candidate = await createFourthPointCandidate();
  const points: FixturePointV0_1[] = [
    { pointId: "A", label: "First held condition", role: "base", position: [-0.82, -0.48, 0.34], disclosure: "public" },
    { pointId: "B", label: "Second held condition", role: "base", position: [0.82, -0.48, 0.34], disclosure: "public" },
    { pointId: "C", label: "Declared boundary", role: "base", position: [0, -0.48, -0.92], disclosure: "team" },
    { pointId: "Q2", label: "Selected fourth point", role: "selected", position: [0.22, 0.98, -0.08], disclosure: "public" },
    { pointId: "P", label: input?.privateLabel ?? "Owner-private context", role: "context", position: input?.privatePosition ?? [1.24, 0.22, -0.64], disclosure: "owner_private" },
  ];
  const relations: FixtureRelationV0_1[] = [
    { relationId: "rel-a-b", label: "A supports B", fromPointId: "A", toPointId: "B", kind: "supports", standing: "fixture_included", disclosure: "public" },
    { relationId: "rel-b-c", label: "B meets C", fromPointId: "B", toPointId: "C", kind: "boundary", standing: "fixture_included", disclosure: "team" },
    { relationId: "rel-c-a", label: "C bounds A", fromPointId: "C", toPointId: "A", kind: "boundary", standing: "fixture_included", disclosure: "team" },
    { relationId: "rel-a-q2", label: "Q2 depends on A", fromPointId: "A", toPointId: "Q2", kind: "depends_on", standing: "fixture_included", disclosure: "public" },
    { relationId: "rel-b-q2", label: "Q2 depends on B", fromPointId: "B", toPointId: "Q2", kind: "depends_on", standing: "fixture_included", disclosure: "public" },
    { relationId: "rel-q2-c-open", label: "Q2 toward C remains OPEN", fromPointId: "Q2", toPointId: "C", kind: "open", standing: "open", disclosure: "team" },
    { relationId: "rel-q2-private", label: "Private context bears on Q2", fromPointId: "Q2", toPointId: "P", kind: "pressure", standing: "fixture_included", disclosure: "owner_private" },
  ];
  const faces: FixtureFaceV0_1[] = [
    { faceId: "face-a-b-q2", label: "Selected support surface", pointIds: ["A", "B", "Q2"], relationIds: ["rel-a-b", "rel-a-q2", "rel-b-q2"], disclosure: "public" },
  ];
  const semanticBasis = {
    points,
    relations,
    faces,
    openItems: ["rel-q2-c-open"],
    boundaryFrames: FOURTH_POINT_FRAMES,
  };
  const semanticHash = await hashContract("pinecoene.fixture-semantic.v0.1", semanticBasis);
  const draft: Omit<AuthoredFixtureRecordV0_1, "contentHash"> = {
    schemaId: "pinecoene.authored-fixture-record",
    schemaVersion: "0.1.0",
    fixtureRecordId: "fixture-fourth-point-q2-v0-1",
    pinecoeneId: "pcn-demo-fourth-point",
    artifactVersionId: "pcnav-demo-fourth-point-v1",
    recordKind: "authored_fixture",
    title: "The Fourth Point — Q2 fixture Fold",
    standing: standing("fixture_authored"),
    selectedCandidateRef: {
      candidateId: candidate.candidateId,
      candidateHash: candidate.contentHash,
      selectedAlternativePointId: "Q2",
    },
    ...semanticBasis,
    rightsAndDisclosure: {
      defaultClass: "owner_private",
      itemCeilings: [
        ...points.map(({ pointId, disclosure }) => ({ semanticId: pointId, disclosure })),
        ...relations.map(({ relationId, disclosure }) => ({ semanticId: relationId, disclosure })),
        ...faces.map(({ faceId, disclosure }) => ({ semanticId: faceId, disclosure })),
      ],
    },
    fixtureAuthorship: {
      authorRef: "fixture-author:pinecoene-team",
      purpose: "instrument_demonstration",
    },
    conformationProfileId: "fourth-point.conformation.v0.1",
    semanticHash,
    limitations: demoLimitations(),
  };
  return attachHash("pinecoene.authored-fixture-record.v0.1", draft, "contentHash");
}

export async function createPapilloenCalibrationFixture(): Promise<AuthoredFixtureRecordV0_1> {
  const a = Math.sqrt(6) / 3;
  const b = Math.sqrt(3) / 3;
  const c = Math.sqrt(3) / 6;
  const pointData: Array<[string, string, [number, number, number]]> = [
    ["seat-1", "Cosmic Library · remembers", [-a, 0, b]],
    ["seat-2", "GetReceipts · witnesses", [-a, -0.5, -c]],
    ["seat-3", "PromiseMe · binds", [-a, 0.5, -c]],
    ["seat-4", "Lakin · admits", [0, 0, 0]],
    ["seat-5", "Lœgos · operates", [a, -0.5, c]],
    ["seat-6", "œdit · examines*", [a, 0.5, c]],
    ["seat-7", "Pinecœne · seeds", [a, 0, -b]],
  ];
  const points: FixturePointV0_1[] = pointData.map(([pointId, label, position]) => ({
    pointId,
    label,
    role: "calibration",
    position,
    disclosure: "public",
  }));
  const tetrahedra = [["seat-1", "seat-2", "seat-3", "seat-4"], ["seat-4", "seat-5", "seat-6", "seat-7"]] as const;
  const edgePairs: Array<[string, string]> = [];
  for (const ids of tetrahedra) {
    for (let index = 0; index < ids.length; index += 1) {
      for (let other = index + 1; other < ids.length; other += 1) edgePairs.push([ids[index], ids[other]]);
    }
  }
  const relations: FixtureRelationV0_1[] = edgePairs.map(([fromPointId, toPointId], index) => ({
    relationId: `pap-edge-${String(index + 1).padStart(2, "0")}`,
    label: `${fromPointId} — ${toPointId}`,
    fromPointId,
    toPointId,
    kind: "supports",
    standing: "fixture_included",
    disclosure: "public",
  }));
  const faces: FixtureFaceV0_1[] = [];
  const semanticBasis = { points, relations, faces, openItems: [], boundaryFrames: [] };
  const semanticHash = await hashContract("pinecoene.fixture-semantic.v0.1", semanticBasis);
  const candidateHash = await hashContract("pinecoene.papilloen.calibration-source.v0.1", semanticBasis);
  const draft: Omit<AuthoredFixtureRecordV0_1, "contentHash"> = {
    schemaId: "pinecoene.authored-fixture-record",
    schemaVersion: "0.1.0",
    fixtureRecordId: "fixture-papilloen-calibration-v0-1",
    pinecoeneId: "pcn-demo-papilloen-calibration",
    artifactVersionId: "pcnav-demo-papilloen-calibration-v1",
    recordKind: "authored_fixture",
    title: "Papillœn exact graph — data-only calibration",
    standing: standing("fixture_authored"),
    selectedCandidateRef: {
      candidateId: "papilloen-data-calibration-source",
      candidateHash,
      selectedAlternativePointId: "seat-4",
    },
    ...semanticBasis,
    rightsAndDisclosure: {
      defaultClass: "public",
      itemCeilings: [
        ...points.map(({ pointId }) => ({ semanticId: pointId, disclosure: "public" as const })),
        ...relations.map(({ relationId }) => ({ semanticId: relationId, disclosure: "public" as const })),
      ],
    },
    fixtureAuthorship: {
      authorRef: "fixture-author:pinecoene-team",
      purpose: "data_only_calibration",
    },
    conformationProfileId: "papilloen.exact-graph.calibration.v0.1",
    semanticHash,
    limitations: [
      ...demoLimitations(),
      "Papillœn topology is copied as a data-only calibration fixture; it is not a universal Pinecœne ontology.",
      "Source specification and manual remain NOT SUPPLIED in the inspected Papillœn release record.",
    ],
  };
  return attachHash("pinecoene.authored-fixture-record.v0.1", draft, "contentHash");
}
