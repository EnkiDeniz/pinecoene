export type Vec3 = [number, number, number];

export type DisclosureClass = "public" | "team" | "owner_private";
export type LifecycleStanding =
  | "candidate"
  | "fixture_authored"
  | "recipient_projection"
  | "synthetic_return"
  | "synthetic_successor";

export type DemoStanding = {
  lifecycle: LifecycleStanding;
  provenanceKind: "authored_fixture";
  custody: "local_internal";
};

export const DEMO_LIMITATIONS = [
  "SYNTHETIC FIXTURE",
  "LOCAL INTERNAL DEMONSTRATION",
  "NO LIVE ŒDIT CONNECTION",
  "NO OBSERVED HUMAN ADMISSION",
  "NO REMOTE DELIVERY OR RECEIPT",
  "NO PUBLICATION OR RELEASE",
] as const;

export function demoLimitations(): string[] {
  return [...DEMO_LIMITATIONS];
}

export interface CandidatePointV0_1 {
  pointId: string;
  label: string;
  role: "base" | "alternative" | "context";
  position: Vec3;
  disclosure: DisclosureClass;
}

export interface CandidateRelationV0_1 {
  relationId: string;
  label: string;
  fromPointId: string;
  toPointId: string;
  kind: "supports" | "depends_on" | "pressure" | "boundary" | "open";
  standing: "candidate" | "proposed_open";
  disclosure: DisclosureClass;
}

export interface CandidateFaceV0_1 {
  faceId: string;
  label: string;
  pointIds: [string, string, string];
  relationIds: string[];
  standing: "candidate";
  disclosure: DisclosureClass;
}

export interface CandidateGeometryDependencyV0_1 {
  featureId: string;
  featureKind: "point" | "edge" | "face" | "frame";
  pointIds: string[];
  relationIds: string[];
}

export interface ReadableCaseProjectionV0_1 {
  schemaId: "pinecoene.readable-case-projection";
  schemaVersion: "0.1.0";
  candidateId: string;
  caseId: string;
  title: string;
  standing: DemoStanding & { lifecycle: "candidate" };
  sourceCoverage: "selected_fixture_projection";
  points: CandidatePointV0_1[];
  relations: CandidateRelationV0_1[];
  faces: CandidateFaceV0_1[];
  dependencies: CandidateGeometryDependencyV0_1[];
  alternativeGroups: Array<{
    groupId: string;
    memberPointIds: string[];
    rule: "exactly_one_may_be_selected";
  }>;
  contradictions: Array<{
    contradictionId: string;
    memberPointIds: string[];
    explanation: string;
  }>;
  boundaryFrames: Array<{
    frameId: string;
    axis: "x" | "y" | "z";
    offset: number;
  }>;
  limitations: string[];
  contentHash: string;
}

export interface FixturePointV0_1 {
  pointId: string;
  label: string;
  role: "base" | "selected" | "context" | "calibration";
  position: Vec3;
  disclosure: DisclosureClass;
}

export interface FixtureRelationV0_1 {
  relationId: string;
  label: string;
  fromPointId: string;
  toPointId: string;
  kind: "supports" | "depends_on" | "pressure" | "boundary" | "open";
  standing: "fixture_included" | "open";
  disclosure: DisclosureClass;
}

export interface FixtureFaceV0_1 {
  faceId: string;
  label: string;
  pointIds: [string, string, string];
  relationIds: string[];
  disclosure: DisclosureClass;
}

export interface AuthoredFixtureRecordV0_1 {
  schemaId: "pinecoene.authored-fixture-record";
  schemaVersion: "0.1.0";
  fixtureRecordId: string;
  pinecoeneId: string;
  artifactVersionId: string;
  recordKind: "authored_fixture";
  title: string;
  standing: DemoStanding & { lifecycle: "fixture_authored" };
  selectedCandidateRef: {
    candidateId: string;
    candidateHash: string;
    selectedAlternativePointId: string;
  };
  points: FixturePointV0_1[];
  relations: FixtureRelationV0_1[];
  faces: FixtureFaceV0_1[];
  openItems: string[];
  boundaryFrames: ReadableCaseProjectionV0_1["boundaryFrames"];
  rightsAndDisclosure: {
    defaultClass: DisclosureClass;
    itemCeilings: Array<{ semanticId: string; disclosure: DisclosureClass }>;
  };
  fixtureAuthorship: {
    authorRef: "fixture-author:pinecoene-team";
    purpose: "instrument_demonstration" | "data_only_calibration";
  };
  conformationProfileId:
    | "fourth-point.conformation.v0.1"
    | "papilloen.exact-graph.calibration.v0.1";
  semanticHash: string;
  limitations: string[];
  contentHash: string;
}

export interface PinecoeneNormalFormV0_1 {
  schemaId: "pinecoene.normal-form";
  schemaVersion: "0.1.0";
  pinecoeneId: string;
  artifactVersionId: string;
  recordKind: "authored_fixture";
  sourceRecordRef: {
    fixtureRecordId: string;
    contentHash: string;
  };
  standing: DemoStanding & { lifecycle: "fixture_authored" };
  semanticTopology: {
    points: FixturePointV0_1[];
    relations: FixtureRelationV0_1[];
    faces: FixtureFaceV0_1[];
    openItems: string[];
    boundaryFrames: ReadableCaseProjectionV0_1["boundaryFrames"];
  };
  governedPolicy: AuthoredFixtureRecordV0_1["rightsAndDisclosure"];
  compiler: {
    compilerId: "pinecoene.instrument-demo.compiler";
    compilerVersion: "0.1.0";
    conformationProfileId: AuthoredFixtureRecordV0_1["conformationProfileId"];
  };
  semanticHash: string;
  limitations: string[];
  normalFormHash: string;
}

export type StructuralStanding = "fixture_included" | "open";

export interface StructurePointV0_1 {
  featureId: string;
  semanticRefs: string[];
  label: string;
  position: Vec3;
  materialRole: "base" | "selected" | "context" | "calibration";
  standing: StructuralStanding;
  disclosure: DisclosureClass;
}

export interface StructureEdgeV0_1 {
  featureId: string;
  semanticRefs: string[];
  label: string;
  fromFeatureId: string;
  toFeatureId: string;
  materialRole: "relation" | "pressure" | "boundary" | "open_gap";
  standing: StructuralStanding;
  disclosure: DisclosureClass;
}

export interface StructureFaceV0_1 {
  featureId: string;
  semanticRefs: string[];
  label: string;
  pointFeatureIds: [string, string, string];
  materialRole: "fixture_surface";
  standing: "fixture_included";
  disclosure: DisclosureClass;
}

export interface StructureProjectionV0_1 {
  schemaId: "pinecoene.structure-projection";
  schemaVersion: "0.1.0";
  structureProjectionId: string;
  artifactRef: {
    pinecoeneId: string;
    artifactVersionId: string;
    normalFormHash: string;
  };
  standing: DemoStanding & { lifecycle: "fixture_authored" };
  points: StructurePointV0_1[];
  edges: StructureEdgeV0_1[];
  faces: StructureFaceV0_1[];
  openFeatureIds: string[];
  limitations: string[];
  structureHash: string;
}

export interface AnatomyEntryV0_1 {
  featureId: string;
  semanticRefs: string[];
  label: string;
  inspectionCopy: string;
  standing: StructuralStanding;
  disclosure: DisclosureClass;
}

export interface AnatomyProjectionV0_1 {
  schemaId: "pinecoene.anatomy-projection";
  schemaVersion: "0.1.0";
  anatomyProjectionId: string;
  structureRef: {
    structureProjectionId: string;
    structureHash: string;
  };
  standing: DemoStanding & { lifecycle: "fixture_authored" };
  entries: AnatomyEntryV0_1[];
  limitations: string[];
  anatomyHash: string;
}

export type ExpressionKind = "neutral_instrument" | "christmas_tree";

export interface ExpressionBindingV0_1 {
  expressionNodeId: string;
  bindingKind: "semantic_direct" | "interpretive_derived" | "ornamental";
  semanticRefs: string[];
  targetFeatureIds: string[];
  disclosure: DisclosureClass;
}

export interface ExpressionDecorationV0_1 {
  decorationId: string;
  kind: "halo" | "light" | "garland" | "star" | "label";
  anchorFeatureId?: string;
  position?: Vec3;
  color: string;
  label?: string;
  disclosure: DisclosureClass;
}

export interface ExpressionVersionV0_1 {
  schemaId: "pinecoene.expression-version";
  schemaVersion: "0.1.0";
  expressionId: string;
  expressionKind: ExpressionKind;
  artifactVersionId: string;
  structureRef: {
    structureProjectionId: string;
    structureHash: string;
  };
  standing: DemoStanding & { lifecycle: "fixture_authored" };
  bindings: ExpressionBindingV0_1[];
  decorations: ExpressionDecorationV0_1[];
  palette: {
    field: string;
    line: string;
    point: string;
    open: string;
    accent: string;
  };
  limitations: string[];
  expressionHash: string;
}

export type RecipientPermission = "view" | "inspect" | "return";

export interface ProjectionOperatorV0_1 {
  schemaId: "pinecoene.projection-operator";
  schemaVersion: "0.1.0";
  projectionOperatorId: string;
  artifactVersionId: string;
  normalFormHash: string;
  structureHash: string;
  expressionHash: string | null;
  aim: "team_review" | "public_glimpse";
  requestedPermissions: RecipientPermission[];
  requestedDisclosureClasses: DisclosureClass[];
  limitations: string[];
  operatorHash: string;
}

export interface ApertureGrantV0_1 {
  schemaId: "pinecoene.aperture-grant";
  schemaVersion: "0.1.0";
  apertureGrantId: string;
  operatorRef: {
    projectionOperatorId: string;
    operatorHash: string;
  };
  profile: "team_wide" | "public_narrow";
  semanticGrant: string[];
  allowedDisclosureClasses: Array<Exclude<DisclosureClass, "owner_private">>;
  effectivePermissions: RecipientPermission[];
  includeExpression: boolean;
  standing: DemoStanding & { lifecycle: "recipient_projection" };
  limitations: string[];
  apertureGrantHash: string;
}

export interface TraceLinkedProjectionV0_1 {
  schemaId: "pinecoene.trace-linked-projection";
  schemaVersion: "0.1.0";
  projectionId: string;
  artifactRef: {
    kind: "encounter_scoped";
    value: string;
  };
  standing: DemoStanding & { lifecycle: "recipient_projection" };
  safeSemanticIds: string[];
  safeStructure: {
    points: StructurePointV0_1[];
    edges: StructureEdgeV0_1[];
    faces: StructureFaceV0_1[];
    openFeatureIds: string[];
  };
  safeAnatomy: AnatomyEntryV0_1[];
  safeExpression: {
    expressionKind: ExpressionKind;
    bindings: ExpressionBindingV0_1[];
    decorations: ExpressionDecorationV0_1[];
    palette: ExpressionVersionV0_1["palette"];
  } | null;
  capabilities: RecipientPermission[];
  limitations: string[];
  projectionHash: string;
}

export interface EncounterPackageV0_1 {
  schemaId: "pinecoene.encounter-package";
  schemaVersion: "0.1.0";
  packageId: string;
  packageKind: "synthetic_local_demonstration";
  apertureProfile: "team_wide" | "public_narrow";
  projection: TraceLinkedProjectionV0_1;
  controls: {
    inspect: boolean;
    createReturn: boolean;
  };
  standing: DemoStanding & { lifecycle: "recipient_projection" };
  limitations: string[];
  packageHash: string;
}

export interface ProjectionBindingV0_1 {
  schemaId: "pinecoene.projection-binding";
  schemaVersion: "0.1.0";
  bindingId: string;
  normalFormHash: string;
  structureHash: string;
  expressionHash: string | null;
  operatorHash: string;
  apertureGrantHash: string;
  projectionHash: string;
  packageHash: string;
  standing: DemoStanding & { lifecycle: "recipient_projection" };
  limitations: string[];
  bindingHash: string;
}

export interface ReturnProjectionV0_1 {
  schemaId: "pinecoene.return-projection";
  schemaVersion: "0.1.0";
  returnId: string;
  packageRef: {
    packageId: string;
    packageHash: string;
  };
  content: {
    kind: "unfinished_sentence";
    exactText: string;
  };
  custody: "local_only";
  standing: DemoStanding & { lifecycle: "synthetic_return" };
  limitations: string[];
  returnHash: string;
}

export interface SyntheticSuccessorLinkV0_1 {
  schemaId: "pinecoene.synthetic-successor-link";
  schemaVersion: "0.1.0";
  successorLinkId: string;
  relationKind: "succeeds";
  predecessor: {
    pinecoeneId: string;
    artifactVersionId: string;
    normalFormHash: string;
  };
  returnRef: {
    returnId: string;
    returnHash: string;
    packageHash: string;
  };
  successor: {
    pinecoeneId: string;
    artifactVersionId: string;
    fixtureRecordHash: string;
    normalFormHash: string;
  };
  disposition: "fixture_author_selected_for_synthetic_successor";
  standing: DemoStanding & { lifecycle: "synthetic_successor" };
  limitations: string[];
  successorLinkHash: string;
}

export interface SyntheticSuccessorBundleV0_1 {
  record: AuthoredFixtureRecordV0_1;
  normalForm: PinecoeneNormalFormV0_1;
  link: SyntheticSuccessorLinkV0_1;
}

export type InstrumentPoint = {
  id: string;
  position: Vec3;
  label: string;
  shortLabel: string;
  inspection: string;
  semanticRefs: string[];
  standing: "candidate" | "fixture_included" | "open" | "ornamental";
  materialRole: string;
  disclosure: DisclosureClass;
};

export type InstrumentEdge = {
  id: string;
  fromPointId: string;
  toPointId: string;
  label: string;
  shortLabel: string;
  inspection: string;
  open: boolean;
  semanticRefs: string[];
  standing: "candidate" | "proposed_open" | "fixture_included" | "open";
  materialRole: string;
  disclosure: DisclosureClass;
};

export type InstrumentFace = {
  id: string;
  pointIds: [string, string, string];
  label: string;
  shortLabel: string;
  inspection: string;
  open: boolean;
  semanticRefs: string[];
  standing: "candidate" | "fixture_included";
  materialRole: string;
  disclosure: DisclosureClass;
};

export interface InstrumentScene {
  schemaId: "pinecoene.instrument-scene";
  schemaVersion: "0.1.0";
  sceneId: string;
  title: string;
  subtitle: string;
  mode: "candidate" | "fold" | "expression" | "recipient";
  sourceHash: string;
  normalFormHash: string | null;
  expressionHash: string | null;
  projectionHash: string | null;
  standing: DemoStanding;
  points: InstrumentPoint[];
  edges: InstrumentEdge[];
  faces: InstrumentFace[];
  decorations: ExpressionDecorationV0_1[];
  limitations: string[];
  sceneHash: string;
}

export interface DemoState {
  candidate: ReadableCaseProjectionV0_1;
  fixtureRecord: AuthoredFixtureRecordV0_1;
  normalForm: PinecoeneNormalFormV0_1;
  structure: StructureProjectionV0_1;
  anatomy: AnatomyProjectionV0_1;
  expressions: {
    neutral: ExpressionVersionV0_1;
    christmasTree: ExpressionVersionV0_1;
  };
  recipients: {
    wide: EncounterPackageV0_1;
    narrow: EncounterPackageV0_1;
  };
  recipientBindings: {
    wide: ProjectionBindingV0_1;
    narrow: ProjectionBindingV0_1;
  };
  scenes: {
    candidate: InstrumentScene;
    fold: InstrumentScene;
    expression: InstrumentScene;
    recipientWide: InstrumentScene;
    recipientNarrow: InstrumentScene;
  };
}
