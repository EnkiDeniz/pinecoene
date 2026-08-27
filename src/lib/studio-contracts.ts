import type { ArtifactStanding, MotionTemperament } from "@/lib/protocol";

export type FixtureId = "pcn-0001" | "pcn-0002";
export type FormFamily = "nested_tetrahedron" | "phase_membranes";
export type DecisionDisposition = "keep" | "rewrite_keep" | "open" | "remove";
export type RecognitionDisposition = "acknowledge" | "reject";
export type Resolution = "R0" | "R1" | "R2" | "R3" | "R4" | "R5";
export type Address = "latent" | "day" | "night" | "earth" | "seas" | "keeper";

export interface FixtureEventV0_1 {
  eventId: string;
  phase: number;
  label: string;
  exactRecord: string;
  role: "commitment" | "return" | "boundary" | "opening";
  uncertainty?: string;
  sourceAnchor: string;
}

export interface FixtureRelationV0_1 {
  relationId: string;
  fromEventId: string;
  toEventId: string;
  kind: "causal" | "evaluative" | "returning" | "boundary";
  defaultDisposition: DecisionDisposition;
}

export interface FixtureMuseV0_1 {
  museId: string;
  label: string;
  class: "prior_pinecoene" | "work" | "event" | "person";
  evidenceEventIds: string[];
  defaultDisposition: RecognitionDisposition;
}

export interface FixtureManifestV0_1 {
  schemaVersion: "pinecoene.fixture-manifest.v0.1";
  fixtureId: FixtureId;
  fixtureHash: string;
  standing: "fixture_authored";
  title: string;
  subtitle: string;
  sourceLabel: string;
  recordSummary: string;
  designerNote: string;
  formFamily: FormFamily;
  phases: Array<{ phase: number; title: string; state: "sealed" | "open" }>;
  events: FixtureEventV0_1[];
  relations: FixtureRelationV0_1[];
  muses: FixtureMuseV0_1[];
  withheld: string[];
  disclosure: string;
}

export interface OwnerDecisionSetV0_1 {
  eventDispositions: Record<string, DecisionDisposition>;
  rewrittenLabels: Record<string, string>;
  relationDispositions: Record<string, DecisionDisposition>;
  museDispositions: Record<string, RecognitionDisposition>;
}

export interface SessionStudyV0_1 {
  schemaVersion: "pinecoene.session-study.v0.1";
  studyId: string;
  standing: "prototype_only";
  fixtureId: FixtureId;
  fixtureHash: string;
  decisions: OwnerDecisionSetV0_1;
  expression: ExpressionProfileV0_2;
  address: Address;
  resolution: Resolution;
  studyHash: string;
  createdAt: string;
  updatedAt: string;
}

export interface PinecoeneScoreV0_2 {
  schemaVersion: "pinecoene.score.v0.2";
  pinecoeneId: string;
  fixtureId: FixtureId;
  admittedEvents: Array<FixtureEventV0_1 & { disposition: DecisionDisposition }>;
  admittedRelations: Array<FixtureRelationV0_1 & { disposition: DecisionDisposition }>;
  acknowledgedMuses: FixtureMuseV0_1[];
  openEventIds: string[];
  openRelationIds: string[];
  semanticHash: string;
  topologySeed: string;
  topologyHash: string;
  closure: "open";
}

export interface SemanticFeatureV0_1 {
  featureId: string;
  kind: "core" | "bag" | "return_field" | "constellation" | "open_relation" | "address_locus" | "membrane";
  semanticRefs: string[];
  materialRole: "committed" | "evidence" | "edge" | "open" | "muse" | "address";
  inspectionCopy: string;
  disclosure: "owner" | "recipient_r2" | "recipient_r3" | "recipient_r4" | "recipient_r5";
  points: Array<[number, number, number]>;
  connections?: Array<[number, number]>;
  phase?: number;
  state?: "sealed" | "open";
}

export interface RendererNeutralSceneV0_1 {
  schemaVersion: "pinecoene.scene.v0.1";
  formFamily: FormFamily;
  fixtureId: FixtureId;
  features: SemanticFeatureV0_1[];
  orientation: [number, number, number];
  sceneHash: string;
}

export interface SemanticConformationV0_1 {
  schemaVersion: "pinecoene.semantic-conformation.v0.1";
  score: PinecoeneScoreV0_2;
  scene: RendererNeutralSceneV0_1;
  conformationHash: string;
}

export interface TransitionScoreV0_1 {
  schemaVersion: "pinecoene.transition-score.v0.1";
  fullDurationMs: 84000;
  condensedDurationMs: 30000;
  transitionHash: string;
  cues: Array<{
    cueId: string;
    phase: number;
    atMs: number;
    durationMs: number;
    semanticRefs: string[];
    label: string;
    kind: "admit" | "return" | "recognize" | "open" | "settle";
  }>;
}

export interface ExpressionProfileV0_2 {
  schemaVersion: "pinecoene.expression.v0.2";
  finish: "archive" | "metal" | "moonlit";
  temperament: MotionTemperament;
  dedication: string;
}

export interface OfferingPermissionsV0_2 {
  inspectRecord: boolean;
  inspectMuses: boolean;
  createReturn: boolean;
  allowMuseReuse: boolean;
  allowWithdrawal: boolean;
}

export interface OfferingPackageV0_2 {
  schemaVersion: "pinecoene.offering-package.v0.2";
  standing: ArtifactStanding;
  offeringId: string;
  title: string;
  senderLabel: string;
  fixtureId: FixtureId;
  studyId?: string;
  resolution: Resolution;
  address: Address;
  expression: ExpressionProfileV0_2;
  permissions: OfferingPermissionsV0_2;
  recipientScene: RendererNeutralSceneV0_1 | null;
  recipientRecord: Array<{ eventId: string; label: string; role: FixtureEventV0_1["role"] }>;
  transition: TransitionScoreV0_1 | null;
  disclosure: string;
  packageHash: string;
}

export interface ReturnCandidateV0_1 {
  schemaVersion: "pinecoene.return-candidate.v0.1";
  returnId: string;
  offeringId: string;
  exactText: string;
  mayBecomeMuse: boolean;
  withdrawalAllowed: boolean;
  standing: "prototype_only";
  candidateHash: string;
  createdAt: string;
}

export interface ReturnDispositionV0_1 {
  schemaVersion: "pinecoene.return-disposition.v0.1";
  returnId: string;
  disposition: "hold_at_rest" | "dock_to_successor" | "archive_mark" | "reject";
  note: string;
  dispositionHash: string;
  decidedAt: string;
}

export interface SuccessorStudyV0_1 {
  schemaVersion: "pinecoene.successor-study.v0.1";
  successorId: string;
  predecessorStudyId: string;
  returnId: string;
  standing: "prototype_only";
  successorHash: string;
  createdAt: string;
}

export interface CompiledStudioArtifact {
  manifest: FixtureManifestV0_1;
  study?: SessionStudyV0_1;
  conformation: SemanticConformationV0_1;
  transition: TransitionScoreV0_1;
}
