import Ajv, { type ErrorObject } from "ajv";
import type {
  AnatomyProjectionV0_1,
  ApertureGrantV0_1,
  AuthoredFixtureRecordV0_1,
  EncounterPackageV0_1,
  ExpressionVersionV0_1,
  PinecoeneNormalFormV0_1,
  ReadableCaseProjectionV0_1,
  ReturnProjectionV0_1,
  StructureProjectionV0_1,
  SyntheticSuccessorLinkV0_1,
} from "./types";

const hash = { type: "string", pattern: "^sha256:[0-9a-f]{64}$" } as const;
const text = { type: "string", minLength: 1 } as const;
const stringArray = { type: "array", items: { type: "string" }, uniqueItems: true } as const;
const limitations = { type: "array", items: text, minItems: 6, uniqueItems: true } as const;
const vec3 = { type: "array", items: { type: "number" }, minItems: 3, maxItems: 3 } as const;
const disclosure = { enum: ["public", "team", "owner_private"] } as const;
const standing = (lifecycle: string) => ({
  type: "object",
  additionalProperties: false,
  required: ["lifecycle", "provenanceKind", "custody"],
  properties: {
    lifecycle: { const: lifecycle },
    provenanceKind: { const: "authored_fixture" },
    custody: { const: "local_internal" },
  },
});
const boundaryFrames = {
  type: "array",
  items: {
    type: "object",
    additionalProperties: false,
    required: ["frameId", "axis", "offset"],
    properties: { frameId: text, axis: { enum: ["x", "y", "z"] }, offset: { type: "number" } },
  },
} as const;
const candidatePoint = {
  type: "object",
  additionalProperties: false,
  required: ["pointId", "label", "role", "position", "disclosure"],
  properties: { pointId: text, label: text, role: { enum: ["base", "alternative", "context"] }, position: vec3, disclosure },
} as const;
const candidateRelation = {
  type: "object",
  additionalProperties: false,
  required: ["relationId", "label", "fromPointId", "toPointId", "kind", "standing", "disclosure"],
  properties: {
    relationId: text, label: text, fromPointId: text, toPointId: text,
    kind: { enum: ["supports", "depends_on", "pressure", "boundary", "open"] },
    standing: { enum: ["candidate", "proposed_open"] }, disclosure,
  },
} as const;
const candidateFace = {
  type: "object",
  additionalProperties: false,
  required: ["faceId", "label", "pointIds", "relationIds", "standing", "disclosure"],
  properties: { faceId: text, label: text, pointIds: { ...stringArray, minItems: 3, maxItems: 3 }, relationIds: stringArray, standing: { const: "candidate" }, disclosure },
} as const;
const fixturePoint = {
  type: "object",
  additionalProperties: false,
  required: ["pointId", "label", "role", "position", "disclosure"],
  properties: { pointId: text, label: text, role: { enum: ["base", "selected", "context", "calibration"] }, position: vec3, disclosure },
} as const;
const fixtureRelation = {
  type: "object",
  additionalProperties: false,
  required: ["relationId", "label", "fromPointId", "toPointId", "kind", "standing", "disclosure"],
  properties: {
    relationId: text, label: text, fromPointId: text, toPointId: text,
    kind: { enum: ["supports", "depends_on", "pressure", "boundary", "open"] },
    standing: { enum: ["fixture_included", "open"] }, disclosure,
  },
} as const;
const fixtureFace = {
  type: "object",
  additionalProperties: false,
  required: ["faceId", "label", "pointIds", "relationIds", "disclosure"],
  properties: { faceId: text, label: text, pointIds: { ...stringArray, minItems: 3, maxItems: 3 }, relationIds: stringArray, disclosure },
} as const;
const rights = {
  type: "object",
  additionalProperties: false,
  required: ["defaultClass", "itemCeilings"],
  properties: {
    defaultClass: disclosure,
    itemCeilings: {
      type: "array",
      items: { type: "object", additionalProperties: false, required: ["semanticId", "disclosure"], properties: { semanticId: text, disclosure } },
    },
  },
} as const;

const readableCaseSchema = {
  type: "object", additionalProperties: false,
  required: ["schemaId", "schemaVersion", "candidateId", "caseId", "title", "standing", "sourceCoverage", "points", "relations", "faces", "dependencies", "alternativeGroups", "contradictions", "boundaryFrames", "limitations", "contentHash"],
  properties: {
    schemaId: { const: "pinecoene.readable-case-projection" }, schemaVersion: { const: "0.1.0" }, candidateId: text, caseId: text, title: text,
    standing: standing("candidate"), sourceCoverage: { const: "selected_fixture_projection" },
    points: { type: "array", items: candidatePoint, minItems: 1 }, relations: { type: "array", items: candidateRelation }, faces: { type: "array", items: candidateFace },
    dependencies: { type: "array", items: { type: "object", additionalProperties: false, required: ["featureId", "featureKind", "pointIds", "relationIds"], properties: { featureId: text, featureKind: { enum: ["point", "edge", "face", "frame"] }, pointIds: stringArray, relationIds: stringArray } } },
    alternativeGroups: { type: "array", items: { type: "object", additionalProperties: false, required: ["groupId", "memberPointIds", "rule"], properties: { groupId: text, memberPointIds: stringArray, rule: { const: "exactly_one_may_be_selected" } } } },
    contradictions: { type: "array", items: { type: "object", additionalProperties: false, required: ["contradictionId", "memberPointIds", "explanation"], properties: { contradictionId: text, memberPointIds: stringArray, explanation: text } } },
    boundaryFrames, limitations, contentHash: hash,
  },
} as const;

const fixtureSchema = {
  type: "object", additionalProperties: false,
  required: ["schemaId", "schemaVersion", "fixtureRecordId", "pinecoeneId", "artifactVersionId", "recordKind", "title", "standing", "selectedCandidateRef", "points", "relations", "faces", "openItems", "boundaryFrames", "rightsAndDisclosure", "fixtureAuthorship", "conformationProfileId", "semanticHash", "limitations", "contentHash"],
  properties: {
    schemaId: { const: "pinecoene.authored-fixture-record" }, schemaVersion: { const: "0.1.0" }, fixtureRecordId: text, pinecoeneId: text, artifactVersionId: text, recordKind: { const: "authored_fixture" }, title: text, standing: standing("fixture_authored"),
    selectedCandidateRef: { type: "object", additionalProperties: false, required: ["candidateId", "candidateHash", "selectedAlternativePointId"], properties: { candidateId: text, candidateHash: hash, selectedAlternativePointId: text } },
    points: { type: "array", items: fixturePoint, minItems: 1 }, relations: { type: "array", items: fixtureRelation }, faces: { type: "array", items: fixtureFace }, openItems: stringArray, boundaryFrames, rightsAndDisclosure: rights,
    fixtureAuthorship: { type: "object", additionalProperties: false, required: ["authorRef", "purpose"], properties: { authorRef: { const: "fixture-author:pinecoene-team" }, purpose: { enum: ["instrument_demonstration", "data_only_calibration"] } } },
    conformationProfileId: { enum: ["fourth-point.conformation.v0.1", "papilloen.exact-graph.calibration.v0.1"] }, semanticHash: hash, limitations, contentHash: hash,
  },
} as const;

function projectionSchema(schemaId: string, lifecycle: string, hashKey: string, properties: Record<string, unknown>, required: string[]) {
  return {
    type: "object", additionalProperties: false,
    required: ["schemaId", "schemaVersion", ...required, "standing", "limitations", hashKey],
    properties: { schemaId: { const: schemaId }, schemaVersion: { const: "0.1.0" }, ...properties, standing: standing(lifecycle), limitations, [hashKey]: hash },
  };
}

const normalFormSchema = projectionSchema("pinecoene.normal-form", "fixture_authored", "normalFormHash", {
  pinecoeneId: text, artifactVersionId: text, recordKind: { const: "authored_fixture" }, sourceRecordRef: { type: "object" }, semanticTopology: { type: "object" }, governedPolicy: rights, compiler: { type: "object" }, semanticHash: hash,
}, ["pinecoeneId", "artifactVersionId", "recordKind", "sourceRecordRef", "semanticTopology", "governedPolicy", "compiler", "semanticHash"]);
const structureSchema = projectionSchema("pinecoene.structure-projection", "fixture_authored", "structureHash", {
  structureProjectionId: text, artifactRef: { type: "object" }, points: { type: "array" }, edges: { type: "array" }, faces: { type: "array" }, openFeatureIds: stringArray,
}, ["structureProjectionId", "artifactRef", "points", "edges", "faces", "openFeatureIds"]);
const anatomySchema = projectionSchema("pinecoene.anatomy-projection", "fixture_authored", "anatomyHash", {
  anatomyProjectionId: text, structureRef: { type: "object" }, entries: { type: "array" },
}, ["anatomyProjectionId", "structureRef", "entries"]);
const expressionSchema = projectionSchema("pinecoene.expression-version", "fixture_authored", "expressionHash", {
  expressionId: text, expressionKind: { enum: ["neutral_instrument", "christmas_tree"] }, artifactVersionId: text, structureRef: { type: "object" }, bindings: { type: "array" }, decorations: { type: "array" }, palette: { type: "object" },
}, ["expressionId", "expressionKind", "artifactVersionId", "structureRef", "bindings", "decorations", "palette"]);
const apertureSchema = projectionSchema("pinecoene.aperture-grant", "recipient_projection", "apertureGrantHash", {
  apertureGrantId: text, operatorRef: { type: "object" }, profile: { enum: ["team_wide", "public_narrow"] }, semanticGrant: stringArray, allowedDisclosureClasses: { type: "array", items: { enum: ["public", "team"] }, uniqueItems: true }, effectivePermissions: { type: "array", items: { enum: ["view", "inspect", "return"] }, uniqueItems: true }, includeExpression: { type: "boolean" },
}, ["apertureGrantId", "operatorRef", "profile", "semanticGrant", "allowedDisclosureClasses", "effectivePermissions", "includeExpression"]);
const encounterSchema = projectionSchema("pinecoene.encounter-package", "recipient_projection", "packageHash", {
  packageId: text, packageKind: { const: "synthetic_local_demonstration" }, apertureProfile: { enum: ["team_wide", "public_narrow"] }, projection: { type: "object" }, controls: { type: "object", additionalProperties: false, required: ["inspect", "createReturn"], properties: { inspect: { type: "boolean" }, createReturn: { type: "boolean" } } },
}, ["packageId", "packageKind", "apertureProfile", "projection", "controls"]);
const returnSchema = projectionSchema("pinecoene.return-projection", "synthetic_return", "returnHash", {
  returnId: text, packageRef: { type: "object" }, content: { type: "object" }, custody: { const: "local_only" },
}, ["returnId", "packageRef", "content", "custody"]);
const successorSchema = projectionSchema("pinecoene.synthetic-successor-link", "synthetic_successor", "successorLinkHash", {
  successorLinkId: text, relationKind: { const: "succeeds" }, predecessor: { type: "object" }, returnRef: { type: "object" }, successor: { type: "object" }, disposition: { const: "fixture_author_selected_for_synthetic_successor" },
}, ["successorLinkId", "relationKind", "predecessor", "returnRef", "successor", "disposition"]);

const ajv = new Ajv({ allErrors: true, strict: false });
const validators = {
  "pinecoene.readable-case-projection": ajv.compile(readableCaseSchema),
  "pinecoene.authored-fixture-record": ajv.compile(fixtureSchema),
  "pinecoene.normal-form": ajv.compile(normalFormSchema),
  "pinecoene.structure-projection": ajv.compile(structureSchema),
  "pinecoene.anatomy-projection": ajv.compile(anatomySchema),
  "pinecoene.expression-version": ajv.compile(expressionSchema),
  "pinecoene.aperture-grant": ajv.compile(apertureSchema),
  "pinecoene.encounter-package": ajv.compile(encounterSchema),
  "pinecoene.return-projection": ajv.compile(returnSchema),
  "pinecoene.synthetic-successor-link": ajv.compile(successorSchema),
} as const;

export type ValidatedInstrumentContract =
  | ReadableCaseProjectionV0_1
  | AuthoredFixtureRecordV0_1
  | PinecoeneNormalFormV0_1
  | StructureProjectionV0_1
  | AnatomyProjectionV0_1
  | ExpressionVersionV0_1
  | ApertureGrantV0_1
  | EncounterPackageV0_1
  | ReturnProjectionV0_1
  | SyntheticSuccessorLinkV0_1;

function details(errors: ErrorObject[] | null | undefined) {
  return errors?.map((error) => `${error.instancePath || "/"} ${error.message ?? "is invalid"}`).join("; ") ?? "unknown schema failure";
}

export function assertInstrumentContract(value: unknown): asserts value is ValidatedInstrumentContract {
  if (!value || typeof value !== "object" || !("schemaId" in value) || typeof value.schemaId !== "string") throw new Error("Instrument contract failed closed: missing schemaId");
  const validator = validators[value.schemaId as keyof typeof validators];
  if (!validator) throw new Error(`Instrument contract failed closed: unsupported schemaId ${value.schemaId}`);
  if (!validator(value)) throw new Error(`Instrument contract failed closed: ${details(validator.errors)}`);
}

export function validateInstrumentContract(value: unknown): { valid: true } | { valid: false; errors: string } {
  try {
    assertInstrumentContract(value);
    return { valid: true };
  } catch (error) {
    return { valid: false, errors: error instanceof Error ? error.message : String(error) };
  }
}
