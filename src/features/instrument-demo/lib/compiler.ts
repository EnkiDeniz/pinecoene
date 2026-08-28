import { attachHash, assertContractHash, deepFreeze, hashContract, uniqueSorted } from "./canonical";
import { createFourthPointCandidate, createFourthPointFixtureRecord, createPapilloenCalibrationFixture } from "./fixtures";
import {
  demoLimitations,
  type AnatomyEntryV0_1,
  type AnatomyProjectionV0_1,
  type ApertureGrantV0_1,
  type AuthoredFixtureRecordV0_1,
  type DemoState,
  type DemoStanding,
  type DisclosureClass,
  type EncounterPackageV0_1,
  type ExpressionDecorationV0_1,
  type ExpressionVersionV0_1,
  type InstrumentEdge,
  type InstrumentFace,
  type InstrumentPoint,
  type InstrumentScene,
  type PinecoeneNormalFormV0_1,
  type ProjectionBindingV0_1,
  type ProjectionOperatorV0_1,
  type ReadableCaseProjectionV0_1,
  type RecipientPermission,
  type ReturnProjectionV0_1,
  type StructureEdgeV0_1,
  type StructureFaceV0_1,
  type StructurePointV0_1,
  type StructureProjectionV0_1,
  type SyntheticSuccessorBundleV0_1,
  type SyntheticSuccessorLinkV0_1,
  type TraceLinkedProjectionV0_1,
  type Vec3,
} from "./types";

function standing<T extends DemoStanding["lifecycle"]>(lifecycle: T) {
  return {
    lifecycle,
    provenanceKind: "authored_fixture" as const,
    custody: "local_internal" as const,
  };
}

function pointFeatureId(pointId: string) {
  return `point-${pointId}`;
}

function edgeFeatureId(relationId: string) {
  return `edge-${relationId}`;
}

function faceFeatureId(faceId: string) {
  return `face-${faceId}`;
}

export type CandidateOperationV0_1 = {
  rejectedPointIds?: string[];
  positionOverrides?: Record<string, Vec3>;
};

export async function buildCandidateScene(
  candidate: ReadableCaseProjectionV0_1,
  operation: CandidateOperationV0_1 = {},
): Promise<InstrumentScene> {
  const hidden = new Set(operation.rejectedPointIds ?? []);
  const points: InstrumentPoint[] = candidate.points
    .filter(({ pointId }) => !hidden.has(pointId))
    .map((point) => ({
      id: pointFeatureId(point.pointId),
      position: operation.positionOverrides?.[point.pointId] ?? point.position,
      label: point.label,
      shortLabel: point.pointId,
      inspection: `${point.label}. Candidate only; it has not been admitted and cannot produce Solid.`,
      semanticRefs: [point.pointId],
      standing: "candidate",
      materialRole: point.role === "alternative" ? "candidate_alternative" : "candidate_base",
      disclosure: point.disclosure,
    }));
  const visiblePointIds = new Set(points.map(({ semanticRefs }) => semanticRefs[0]));
  const relations = candidate.relations.filter(
    ({ fromPointId, toPointId }) => visiblePointIds.has(fromPointId) && visiblePointIds.has(toPointId),
  );
  const edges: InstrumentEdge[] = relations.map((relation) => ({
    id: edgeFeatureId(relation.relationId),
    fromPointId: pointFeatureId(relation.fromPointId),
    toPointId: pointFeatureId(relation.toPointId),
    label: relation.label,
    shortLabel: relation.relationId,
    inspection: relation.standing === "proposed_open" ? `${relation.label}. This is proposed_open, not fixture/admitted OPEN.` : `${relation.label}. Candidate relation only.`,
    open: relation.standing === "proposed_open",
    semanticRefs: [relation.relationId],
    standing: relation.standing,
    materialRole: relation.kind === "pressure" ? "candidate_pressure" : relation.standing === "proposed_open" ? "candidate_open_gap" : "candidate_edge",
    disclosure: relation.disclosure,
  }));
  const visibleRelations = new Set(relations.map(({ relationId }) => relationId));
  const faces: InstrumentFace[] = candidate.faces
    .filter(({ pointIds, relationIds }) => pointIds.every((id) => visiblePointIds.has(id)) && relationIds.every((id) => visibleRelations.has(id)))
    .map((face) => ({
      id: faceFeatureId(face.faceId),
      pointIds: face.pointIds.map(pointFeatureId) as [string, string, string],
      label: face.label,
      shortLabel: face.faceId,
      inspection: `${face.label}. Translucent inquiry surface; never Solid.`,
      open: false,
      semanticRefs: [face.faceId, ...face.relationIds],
      standing: "candidate",
      materialRole: "candidate_inquiry_surface",
      disclosure: face.disclosure,
    }));

  const draft: Omit<InstrumentScene, "sceneHash"> = {
    schemaId: "pinecoene.instrument-scene",
    schemaVersion: "0.1.0",
    sceneId: `scene-${candidate.candidateId}-candidate`,
    title: candidate.title,
    subtitle: "Readable candidate · alternatives coexist · no Solid",
    mode: "candidate",
    sourceHash: candidate.contentHash,
    normalFormHash: null,
    expressionHash: null,
    projectionHash: null,
    standing: standing("candidate"),
    points,
    edges,
    faces,
    decorations: [],
    limitations: demoLimitations(),
  };
  return deepFreeze(await attachHash("pinecoene.instrument-scene.v0.1", draft, "sceneHash"));
}

function validateFixtureReferences(record: AuthoredFixtureRecordV0_1) {
  const pointIds = new Set(record.points.map(({ pointId }) => pointId));
  if (pointIds.size !== record.points.length) throw new Error("Fixture point IDs must be unique");
  const relationIds = new Set(record.relations.map(({ relationId }) => relationId));
  if (relationIds.size !== record.relations.length) throw new Error("Fixture relation IDs must be unique");
  for (const relation of record.relations) {
    if (!pointIds.has(relation.fromPointId) || !pointIds.has(relation.toPointId)) {
      throw new Error(`Relation ${relation.relationId} references an unknown point`);
    }
  }
  for (const face of record.faces) {
    if (!face.pointIds.every((id) => pointIds.has(id)) || !face.relationIds.every((id) => relationIds.has(id))) {
      throw new Error(`Face ${face.faceId} has an unresolved dependency`);
    }
  }
  for (const openId of record.openItems) {
    const relation = record.relations.find(({ relationId }) => relationId === openId);
    if (!relation || relation.standing !== "open") throw new Error(`OPEN item ${openId} is not an explicit OPEN relation`);
  }
  if (record.points.some(({ pointId }) => pointId === "Q1")) {
    throw new Error("The Q2 fixture record must not retain rejected alternative Q1");
  }
}

export async function compileNormalForm(
  record: AuthoredFixtureRecordV0_1,
): Promise<PinecoeneNormalFormV0_1> {
  await assertContractHash("pinecoene.authored-fixture-record.v0.1", record as unknown as Record<string, unknown>, "contentHash");
  validateFixtureReferences(record);
  const semanticBasis = {
    points: record.points,
    relations: record.relations,
    faces: record.faces,
    openItems: record.openItems,
    boundaryFrames: record.boundaryFrames,
  };
  const semanticHash = await hashContract("pinecoene.fixture-semantic.v0.1", semanticBasis);
  if (semanticHash !== record.semanticHash) throw new Error("Fixture semantic hash mismatch");
  const draft: Omit<PinecoeneNormalFormV0_1, "normalFormHash"> = {
    schemaId: "pinecoene.normal-form",
    schemaVersion: "0.1.0",
    pinecoeneId: record.pinecoeneId,
    artifactVersionId: record.artifactVersionId,
    recordKind: "authored_fixture",
    sourceRecordRef: { fixtureRecordId: record.fixtureRecordId, contentHash: record.contentHash },
    standing: standing("fixture_authored"),
    semanticTopology: semanticBasis,
    governedPolicy: record.rightsAndDisclosure,
    compiler: {
      compilerId: "pinecoene.instrument-demo.compiler",
      compilerVersion: "0.1.0",
      conformationProfileId: record.conformationProfileId,
    },
    semanticHash,
    limitations: demoLimitations(),
  };
  return deepFreeze(await attachHash("pinecoene.normal-form.v0.1", draft, "normalFormHash"));
}

export async function compileStructure(
  normalForm: PinecoeneNormalFormV0_1,
): Promise<StructureProjectionV0_1> {
  await assertContractHash("pinecoene.normal-form.v0.1", normalForm as unknown as Record<string, unknown>, "normalFormHash");
  const points: StructurePointV0_1[] = normalForm.semanticTopology.points.map((point) => ({
    featureId: pointFeatureId(point.pointId),
    semanticRefs: [point.pointId],
    label: point.label,
    position: point.position,
    materialRole: point.role,
    standing: "fixture_included",
    disclosure: point.disclosure,
  }));
  const edges: StructureEdgeV0_1[] = normalForm.semanticTopology.relations.map((relation) => ({
    featureId: edgeFeatureId(relation.relationId),
    semanticRefs: [relation.relationId, relation.fromPointId, relation.toPointId],
    label: relation.label,
    fromFeatureId: pointFeatureId(relation.fromPointId),
    toFeatureId: pointFeatureId(relation.toPointId),
    materialRole: relation.standing === "open" ? "open_gap" : relation.kind === "pressure" ? "pressure" : relation.kind === "boundary" ? "boundary" : "relation",
    standing: relation.standing,
    disclosure: relation.disclosure,
  }));
  const faces: StructureFaceV0_1[] = normalForm.semanticTopology.faces.map((face) => ({
    featureId: faceFeatureId(face.faceId),
    semanticRefs: [face.faceId, ...face.relationIds, ...face.pointIds],
    label: face.label,
    pointFeatureIds: face.pointIds.map(pointFeatureId) as [string, string, string],
    materialRole: "fixture_surface",
    standing: "fixture_included",
    disclosure: face.disclosure,
  }));
  const basis = { points, edges, faces, openFeatureIds: edges.filter(({ standing: value }) => value === "open").map(({ featureId }) => featureId) };
  const structureHash = await hashContract("pinecoene.structure-projection.v0.1", {
    normalFormHash: normalForm.normalFormHash,
    ...basis,
  });
  return deepFreeze({
    schemaId: "pinecoene.structure-projection",
    schemaVersion: "0.1.0",
    structureProjectionId: `structure-${structureHash.slice(7, 19)}`,
    artifactRef: { pinecoeneId: normalForm.pinecoeneId, artifactVersionId: normalForm.artifactVersionId, normalFormHash: normalForm.normalFormHash },
    standing: standing("fixture_authored"),
    ...basis,
    limitations: demoLimitations(),
    structureHash,
  });
}

function inspectionCopy(feature: StructurePointV0_1 | StructureEdgeV0_1 | StructureFaceV0_1) {
  if ("position" in feature) return `${feature.label}. This point is fixture-authored; no observed human admission is claimed.`;
  if ("fromFeatureId" in feature && feature.standing === "open") return `${feature.label}. The gap is explicit OPEN and is not completed by the renderer.`;
  if ("fromFeatureId" in feature) return `${feature.label}. This relation is included by the authored fixture record.`;
  return `${feature.label}. This surface exists only because every declared dependency is present.`;
}

export async function compileAnatomy(structure: StructureProjectionV0_1): Promise<AnatomyProjectionV0_1> {
  const entries: AnatomyEntryV0_1[] = [...structure.points, ...structure.edges, ...structure.faces].map((feature) => ({
    featureId: feature.featureId,
    semanticRefs: feature.semanticRefs,
    label: feature.label,
    inspectionCopy: inspectionCopy(feature),
    standing: feature.standing,
    disclosure: feature.disclosure,
  }));
  const anatomyHash = await hashContract("pinecoene.anatomy-projection.v0.1", { structureHash: structure.structureHash, entries });
  return deepFreeze({
    schemaId: "pinecoene.anatomy-projection",
    schemaVersion: "0.1.0",
    anatomyProjectionId: `anatomy-${anatomyHash.slice(7, 19)}`,
    structureRef: { structureProjectionId: structure.structureProjectionId, structureHash: structure.structureHash },
    standing: standing("fixture_authored"),
    entries,
    limitations: demoLimitations(),
    anatomyHash,
  });
}

export async function createExpression(
  structure: StructureProjectionV0_1,
  expressionKind: ExpressionVersionV0_1["expressionKind"],
): Promise<ExpressionVersionV0_1> {
  const directBindings = structure.points.map((point) => ({
    expressionNodeId: `${expressionKind}-${point.featureId}`,
    bindingKind: "semantic_direct" as const,
    semanticRefs: point.semanticRefs,
    targetFeatureIds: [point.featureId],
    disclosure: point.disclosure,
  }));
  const decorations: ExpressionDecorationV0_1[] = expressionKind === "christmas_tree"
    ? [
        ...structure.points.map((point, index) => ({
          decorationId: `tree-light-${point.featureId}`,
          kind: "light" as const,
          anchorFeatureId: point.featureId,
          color: index % 2 === 0 ? "#f2c66d" : "#c64836",
          label: "Ornamental light; no semantic standing",
          disclosure: point.disclosure,
        })),
        { decorationId: "tree-garland", kind: "garland", color: "#c79a4b", label: "Authored metaphor around permitted structure", disclosure: "public" },
        { decorationId: "tree-star", kind: "star", position: [0, 1.42, 0] as Vec3, color: "#f6dd8d", label: "Ornament, not evidence", disclosure: "public" },
      ]
    : structure.points.map((point) => ({
        decorationId: `neutral-halo-${point.featureId}`,
        kind: "halo" as const,
        anchorFeatureId: point.featureId,
        color: point.disclosure === "owner_private" ? "#7d7186" : "#b9985a",
        label: "Neutral instrument marker",
        disclosure: point.disclosure,
      }));
  const draft: Omit<ExpressionVersionV0_1, "expressionHash"> = {
    schemaId: "pinecoene.expression-version",
    schemaVersion: "0.1.0",
    expressionId: `expression-${structure.artifactRef.artifactVersionId}-${expressionKind}`,
    expressionKind,
    artifactVersionId: structure.artifactRef.artifactVersionId,
    structureRef: { structureProjectionId: structure.structureProjectionId, structureHash: structure.structureHash },
    standing: standing("fixture_authored"),
    bindings: directBindings,
    decorations,
    palette: expressionKind === "christmas_tree"
      ? { field: "#07110c", line: "#406d50", point: "#e6b64f", open: "#91c8d4", accent: "#cf4736" }
      : { field: "#080909", line: "#a7a39a", point: "#c29c5e", open: "#94bed1", accent: "#e8e2d5" },
    limitations: demoLimitations(),
  };
  return deepFreeze(await attachHash("pinecoene.expression-version.v0.1", draft, "expressionHash"));
}

export async function createProjectionOperator(
  normalForm: PinecoeneNormalFormV0_1,
  structure: StructureProjectionV0_1,
  expression: ExpressionVersionV0_1 | null,
  aim: ProjectionOperatorV0_1["aim"],
): Promise<ProjectionOperatorV0_1> {
  if (structure.artifactRef.normalFormHash !== normalForm.normalFormHash) throw new Error("Structure does not belong to the normal form");
  if (expression && expression.structureRef.structureHash !== structure.structureHash) throw new Error("Expression does not belong to the Structure");
  const requestedPermissions: RecipientPermission[] = aim === "team_review" ? ["view", "inspect", "return"] : ["view"];
  const requestedDisclosureClasses: DisclosureClass[] = aim === "team_review" ? ["public", "team"] : ["public"];
  const draft: Omit<ProjectionOperatorV0_1, "operatorHash"> = {
    schemaId: "pinecoene.projection-operator",
    schemaVersion: "0.1.0",
    projectionOperatorId: `operator-${normalForm.pinecoeneId}-${aim}`,
    artifactVersionId: normalForm.artifactVersionId,
    normalFormHash: normalForm.normalFormHash,
    structureHash: structure.structureHash,
    expressionHash: expression?.expressionHash ?? null,
    aim,
    requestedPermissions,
    requestedDisclosureClasses,
    limitations: demoLimitations(),
  };
  return deepFreeze(await attachHash("pinecoene.projection-operator.v0.1", draft, "operatorHash"));
}

export async function createApertureGrant(
  normalForm: PinecoeneNormalFormV0_1,
  operator: ProjectionOperatorV0_1,
  profile: ApertureGrantV0_1["profile"],
): Promise<ApertureGrantV0_1> {
  if (operator.normalFormHash !== normalForm.normalFormHash) throw new Error("Operator does not bind the supplied normal form");
  const allowedDisclosureClasses: Array<Exclude<DisclosureClass, "owner_private">> = profile === "team_wide" ? ["public", "team"] : ["public"];
  const allowed = new Set<string>(allowedDisclosureClasses);
  const semanticGrant = uniqueSorted([
    ...normalForm.semanticTopology.points.filter(({ disclosure }) => allowed.has(disclosure)).map(({ pointId }) => pointId),
    ...normalForm.semanticTopology.relations.filter(({ disclosure }) => allowed.has(disclosure)).map(({ relationId }) => relationId),
    ...normalForm.semanticTopology.faces.filter(({ disclosure }) => allowed.has(disclosure)).map(({ faceId }) => faceId),
  ]);
  const effectivePermissions = profile === "team_wide"
    ? operator.requestedPermissions.filter((permission) => ["view", "inspect", "return"].includes(permission))
    : operator.requestedPermissions.filter((permission) => permission === "view");
  const draft: Omit<ApertureGrantV0_1, "apertureGrantHash"> = {
    schemaId: "pinecoene.aperture-grant",
    schemaVersion: "0.1.0",
    apertureGrantId: `aperture-${normalForm.pinecoeneId}-${profile}`,
    operatorRef: { projectionOperatorId: operator.projectionOperatorId, operatorHash: operator.operatorHash },
    profile,
    semanticGrant,
    allowedDisclosureClasses,
    effectivePermissions,
    includeExpression: operator.expressionHash !== null,
    standing: standing("recipient_projection"),
    limitations: demoLimitations(),
  };
  return deepFreeze(await attachHash("pinecoene.aperture-grant.v0.1", draft, "apertureGrantHash"));
}

function compileSafeStructure(
  structure: StructureProjectionV0_1,
  grant: ApertureGrantV0_1,
) {
  const semanticGrant = new Set(grant.semanticGrant);
  const disclosure = new Set<string>(grant.allowedDisclosureClasses);
  const points = structure.points.filter((point) => semanticGrant.has(point.semanticRefs[0]) && disclosure.has(point.disclosure));
  const pointFeatureIds = new Set(points.map(({ featureId }) => featureId));
  const edges = structure.edges.filter((edge) =>
    semanticGrant.has(edge.semanticRefs[0]) &&
    disclosure.has(edge.disclosure) &&
    pointFeatureIds.has(edge.fromFeatureId) &&
    pointFeatureIds.has(edge.toFeatureId),
  );
  const faces = structure.faces.filter((face) =>
    semanticGrant.has(face.semanticRefs[0]) &&
    disclosure.has(face.disclosure) &&
    face.pointFeatureIds.every((id) => pointFeatureIds.has(id)),
  );
  return { points, edges, faces, openFeatureIds: edges.filter(({ standing: value }) => value === "open").map(({ featureId }) => featureId) };
}

export async function compileRecipientPackage(
  normalForm: PinecoeneNormalFormV0_1,
  structure: StructureProjectionV0_1,
  anatomy: AnatomyProjectionV0_1,
  expression: ExpressionVersionV0_1 | null,
  operator: ProjectionOperatorV0_1,
  grant: ApertureGrantV0_1,
): Promise<{ package: EncounterPackageV0_1; binding: ProjectionBindingV0_1 }> {
  if (operator.normalFormHash !== normalForm.normalFormHash || operator.structureHash !== structure.structureHash) throw new Error("Operator source mismatch");
  if (grant.operatorRef.operatorHash !== operator.operatorHash) throw new Error("Aperture does not bind the operator");
  if ((expression?.expressionHash ?? null) !== operator.expressionHash) throw new Error("Expression does not bind the operator");
  if (grant.allowedDisclosureClasses.includes("owner_private" as never)) throw new Error("Recipient Aperture cannot grant owner-private material");
  const safeStructure = compileSafeStructure(structure, grant);
  const safeFeatureIds = new Set([
    ...safeStructure.points.map(({ featureId }) => featureId),
    ...safeStructure.edges.map(({ featureId }) => featureId),
    ...safeStructure.faces.map(({ featureId }) => featureId),
  ]);
  const allowedDisclosure = new Set<string>(grant.allowedDisclosureClasses);
  const safeAnatomy = grant.effectivePermissions.includes("inspect")
    ? anatomy.entries.filter(({ featureId, disclosure }) => safeFeatureIds.has(featureId) && allowedDisclosure.has(disclosure))
    : [];
  const safeExpression = expression && grant.includeExpression
    ? {
        expressionKind: expression.expressionKind,
        bindings: expression.bindings.filter((binding) =>
          allowedDisclosure.has(binding.disclosure) &&
          binding.targetFeatureIds.every((id) => safeFeatureIds.has(id)) &&
          binding.semanticRefs.every((id) => grant.semanticGrant.includes(id)),
        ),
        decorations: expression.decorations.filter((decoration) =>
          allowedDisclosure.has(decoration.disclosure) && (!decoration.anchorFeatureId || safeFeatureIds.has(decoration.anchorFeatureId)),
        ),
        palette: expression.palette,
      }
    : null;
  const projectionBasis = {
    artifactRef: { kind: "encounter_scoped" as const, value: `encounter:${normalForm.pinecoeneId}:${grant.profile}` },
    standing: standing("recipient_projection"),
    safeSemanticIds: uniqueSorted(grant.semanticGrant),
    safeStructure,
    safeAnatomy,
    safeExpression,
    capabilities: [...grant.effectivePermissions],
    limitations: demoLimitations(),
  };
  const projectionHash = await hashContract("pinecoene.trace-linked-projection.v0.1", projectionBasis);
  const projection: TraceLinkedProjectionV0_1 = deepFreeze({
    schemaId: "pinecoene.trace-linked-projection",
    schemaVersion: "0.1.0",
    projectionId: `projection-${projectionHash.slice(7, 19)}`,
    ...projectionBasis,
    projectionHash,
  });
  const packageDraft: Omit<EncounterPackageV0_1, "packageHash"> = {
    schemaId: "pinecoene.encounter-package",
    schemaVersion: "0.1.0",
    packageId: `package-${normalForm.pinecoeneId}-${grant.profile}`,
    packageKind: "synthetic_local_demonstration",
    apertureProfile: grant.profile,
    projection,
    controls: {
      inspect: grant.effectivePermissions.includes("inspect"),
      createReturn: grant.effectivePermissions.includes("return"),
    },
    standing: standing("recipient_projection"),
    limitations: demoLimitations(),
  };
  const encounterPackage = deepFreeze(await attachHash("pinecoene.encounter-package.v0.1", packageDraft, "packageHash"));
  const bindingDraft: Omit<ProjectionBindingV0_1, "bindingHash"> = {
    schemaId: "pinecoene.projection-binding",
    schemaVersion: "0.1.0",
    bindingId: `binding-${normalForm.pinecoeneId}-${grant.profile}`,
    normalFormHash: normalForm.normalFormHash,
    structureHash: structure.structureHash,
    expressionHash: expression?.expressionHash ?? null,
    operatorHash: operator.operatorHash,
    apertureGrantHash: grant.apertureGrantHash,
    projectionHash,
    packageHash: encounterPackage.packageHash,
    standing: standing("recipient_projection"),
    limitations: demoLimitations(),
  };
  const binding = deepFreeze(await attachHash("pinecoene.projection-binding.v0.1", bindingDraft, "bindingHash"));
  return { package: encounterPackage, binding };
}

function structureToInstrument(structure: StructureProjectionV0_1) {
  const points: InstrumentPoint[] = structure.points.map((point) => ({
    id: point.featureId,
    position: point.position,
    label: point.label,
    shortLabel: point.semanticRefs[0] ?? point.featureId,
    inspection: `${point.label}. Fixture-authored structural point; no observed human admission is claimed.`,
    semanticRefs: point.semanticRefs,
    standing: point.standing,
    materialRole: point.materialRole,
    disclosure: point.disclosure,
  }));
  const edges: InstrumentEdge[] = structure.edges.map((edge) => ({
    id: edge.featureId,
    fromPointId: edge.fromFeatureId,
    toPointId: edge.toFeatureId,
    label: edge.label,
    shortLabel: edge.semanticRefs[0] ?? edge.featureId,
    inspection: edge.standing === "open" ? `${edge.label}. Explicit OPEN; the renderer preserves the gap.` : `${edge.label}. Included by the authored fixture record.`,
    open: edge.standing === "open",
    semanticRefs: edge.semanticRefs,
    standing: edge.standing,
    materialRole: edge.materialRole,
    disclosure: edge.disclosure,
  }));
  const faces: InstrumentFace[] = structure.faces.map((face) => ({
    id: face.featureId,
    pointIds: face.pointFeatureIds,
    label: face.label,
    shortLabel: face.semanticRefs[0] ?? face.featureId,
    inspection: `${face.label}. Present because all declared dependencies are included.`,
    open: false,
    semanticRefs: face.semanticRefs,
    standing: face.standing,
    materialRole: face.materialRole,
    disclosure: face.disclosure,
  }));
  return { points, edges, faces };
}

async function instrumentScene(
  input: Omit<InstrumentScene, "schemaId" | "schemaVersion" | "sceneHash">,
): Promise<InstrumentScene> {
  const draft: Omit<InstrumentScene, "sceneHash"> = {
    schemaId: "pinecoene.instrument-scene",
    schemaVersion: "0.1.0",
    ...input,
  };
  return deepFreeze(await attachHash("pinecoene.instrument-scene.v0.1", draft, "sceneHash"));
}

export async function buildFoldScene(
  normalForm: PinecoeneNormalFormV0_1,
  structure: StructureProjectionV0_1,
): Promise<InstrumentScene> {
  return instrumentScene({
    sceneId: `scene-${normalForm.artifactVersionId}-fold`,
    title: "Fixture Fold",
    subtitle: "Structure earned by an authored synthetic record · OPEN preserved",
    mode: "fold",
    sourceHash: structure.structureHash,
    normalFormHash: normalForm.normalFormHash,
    expressionHash: null,
    projectionHash: null,
    standing: standing("fixture_authored"),
    ...structureToInstrument(structure),
    decorations: [],
    limitations: demoLimitations(),
  });
}

export async function buildExpressionScene(
  normalForm: PinecoeneNormalFormV0_1,
  structure: StructureProjectionV0_1,
  expression: ExpressionVersionV0_1,
): Promise<InstrumentScene> {
  if (expression.structureRef.structureHash !== structure.structureHash) throw new Error("Expression and Structure mismatch");
  return instrumentScene({
    sceneId: `scene-${expression.expressionId}`,
    title: expression.expressionKind === "christmas_tree" ? "Christmas Tree Expression" : "Neutral Instrument Expression",
    subtitle: "Expression changes art, never semantic or normal-form identity",
    mode: "expression",
    sourceHash: structure.structureHash,
    normalFormHash: normalForm.normalFormHash,
    expressionHash: expression.expressionHash,
    projectionHash: null,
    standing: standing("fixture_authored"),
    ...structureToInstrument(structure),
    decorations: expression.decorations,
    limitations: demoLimitations(),
  });
}

export async function buildRecipientScene(encounterPackage: EncounterPackageV0_1): Promise<InstrumentScene> {
  const { safeStructure, safeExpression } = encounterPackage.projection;
  const recipientExpressionHash = safeExpression
    ? await hashContract("pinecoene.recipient-safe-expression.v0.1", safeExpression)
    : null;
  const structure: StructureProjectionV0_1 = {
    schemaId: "pinecoene.structure-projection",
    schemaVersion: "0.1.0",
    structureProjectionId: `recipient-${encounterPackage.projection.projectionId}`,
    artifactRef: { pinecoeneId: "recipient-scoped", artifactVersionId: "recipient-scoped", normalFormHash: "recipient-withheld" },
    standing: standing("fixture_authored"),
    ...safeStructure,
    limitations: demoLimitations(),
    structureHash: encounterPackage.projection.projectionHash,
  };
  return instrumentScene({
    sceneId: `scene-${encounterPackage.packageId}`,
    title: encounterPackage.apertureProfile === "team_wide" ? "Team Encounter" : "Public Glimpse",
    subtitle: `Recipient-safe ${encounterPackage.apertureProfile.replace("_", " ")} package · no owner-private bytes`,
    mode: "recipient",
    sourceHash: encounterPackage.packageHash,
    normalFormHash: null,
    expressionHash: recipientExpressionHash,
    projectionHash: encounterPackage.projection.projectionHash,
    standing: standing("recipient_projection"),
    ...structureToInstrument(structure),
    decorations: safeExpression?.decorations ?? [],
    limitations: demoLimitations(),
  });
}

export async function createSyntheticSuccessor(
  predecessorRecord: AuthoredFixtureRecordV0_1,
  predecessor: PinecoeneNormalFormV0_1,
  returned: ReturnProjectionV0_1,
): Promise<SyntheticSuccessorBundleV0_1> {
  if (!predecessorRecord.contentHash || predecessorRecord.pinecoeneId !== predecessor.pinecoeneId) throw new Error("Predecessor record and normal form mismatch");
  const successorPointId = `R-${returned.returnHash.slice(7, 13)}`;
  const successorPinecoeneId = `pcn-successor-${returned.returnHash.slice(7, 17)}`;
  const successorSemantic = {
    points: [
      ...predecessorRecord.points,
      { pointId: successorPointId, label: returned.content.exactText, role: "context" as const, position: [1.08, 1.12, 0.42] as Vec3, disclosure: "team" as const },
    ],
    relations: [
      ...predecessorRecord.relations,
      { relationId: `rel-q2-${successorPointId}`, label: "Synthetic Return is considered beside Q2", fromPointId: "Q2", toPointId: successorPointId, kind: "depends_on" as const, standing: "fixture_included" as const, disclosure: "team" as const },
    ],
    faces: predecessorRecord.faces,
    openItems: predecessorRecord.openItems,
    boundaryFrames: predecessorRecord.boundaryFrames,
  };
  const semanticHash = await hashContract("pinecoene.fixture-semantic.v0.1", successorSemantic);
  const predecessorClone = { ...predecessorRecord };
  delete (predecessorClone as Partial<AuthoredFixtureRecordV0_1>).contentHash;
  const predecessorWithoutSelfHash = predecessorClone as Omit<AuthoredFixtureRecordV0_1, "contentHash">;
  const successorDraft: Omit<AuthoredFixtureRecordV0_1, "contentHash"> = {
    ...predecessorWithoutSelfHash,
    fixtureRecordId: `fixture-successor-${returned.returnHash.slice(7, 19)}`,
    pinecoeneId: successorPinecoeneId,
    artifactVersionId: `${successorPinecoeneId}-v1`,
    title: `${predecessorRecord.title} · synthetic Successor`,
    selectedCandidateRef: { ...predecessorRecord.selectedCandidateRef },
    ...successorSemantic,
    rightsAndDisclosure: {
      ...predecessorRecord.rightsAndDisclosure,
      itemCeilings: [
        ...predecessorRecord.rightsAndDisclosure.itemCeilings,
        { semanticId: successorPointId, disclosure: "team" },
        { semanticId: `rel-q2-${successorPointId}`, disclosure: "team" },
      ],
    },
    fixtureAuthorship: { authorRef: "fixture-author:pinecoene-team", purpose: "instrument_demonstration" },
    semanticHash,
    limitations: [...demoLimitations(), "Synthetic Successor fixture; no real Return disposition or human admission is claimed."],
  };
  const record = deepFreeze(await attachHash("pinecoene.authored-fixture-record.v0.1", successorDraft, "contentHash"));
  const normalForm = await compileNormalForm(record);
  const linkDraft: Omit<SyntheticSuccessorLinkV0_1, "successorLinkHash"> = {
    schemaId: "pinecoene.synthetic-successor-link",
    schemaVersion: "0.1.0",
    successorLinkId: `successor-link-${returned.returnHash.slice(7, 19)}`,
    relationKind: "succeeds",
    predecessor: { pinecoeneId: predecessor.pinecoeneId, artifactVersionId: predecessor.artifactVersionId, normalFormHash: predecessor.normalFormHash },
    returnRef: { returnId: returned.returnId, returnHash: returned.returnHash, packageHash: returned.packageRef.packageHash },
    successor: { pinecoeneId: normalForm.pinecoeneId, artifactVersionId: normalForm.artifactVersionId, fixtureRecordHash: record.contentHash, normalFormHash: normalForm.normalFormHash },
    disposition: "fixture_author_selected_for_synthetic_successor",
    standing: standing("synthetic_successor"),
    limitations: [...demoLimitations(), "Synthetic lineage only; no observed human disposition, admission, acceptance, or publication is claimed."],
  };
  const link = deepFreeze(await attachHash("pinecoene.synthetic-successor-link.v0.1", linkDraft, "successorLinkHash"));
  return { record, normalForm, link };
}

export async function buildFourthPointDemoState(): Promise<DemoState> {
  const candidate = await createFourthPointCandidate();
  const fixtureRecord = await createFourthPointFixtureRecord();
  const normalForm = await compileNormalForm(fixtureRecord);
  const structure = await compileStructure(normalForm);
  const anatomy = await compileAnatomy(structure);
  const neutral = await createExpression(structure, "neutral_instrument");
  const christmasTree = await createExpression(structure, "christmas_tree");
  const wideOperator = await createProjectionOperator(normalForm, structure, christmasTree, "team_review");
  const narrowOperator = await createProjectionOperator(normalForm, structure, christmasTree, "public_glimpse");
  const wideGrant = await createApertureGrant(normalForm, wideOperator, "team_wide");
  const narrowGrant = await createApertureGrant(normalForm, narrowOperator, "public_narrow");
  const wide = await compileRecipientPackage(normalForm, structure, anatomy, christmasTree, wideOperator, wideGrant);
  const narrow = await compileRecipientPackage(normalForm, structure, anatomy, christmasTree, narrowOperator, narrowGrant);
  return {
    candidate,
    fixtureRecord,
    normalForm,
    structure,
    anatomy,
    expressions: { neutral, christmasTree },
    recipients: { wide: wide.package, narrow: narrow.package },
    recipientBindings: { wide: wide.binding, narrow: narrow.binding },
    scenes: {
      candidate: await buildCandidateScene(candidate),
      fold: await buildFoldScene(normalForm, structure),
      expression: await buildExpressionScene(normalForm, structure, christmasTree),
      recipientWide: await buildRecipientScene(wide.package),
      recipientNarrow: await buildRecipientScene(narrow.package),
    },
  };
}

export const createInstrumentDemoState = buildFourthPointDemoState;

export const compileCandidateScene = buildCandidateScene;

export async function createPapilloenCalibrationDemo() {
  const fixtureRecord = await createPapilloenCalibrationFixture();
  const normalForm = await compileNormalForm(fixtureRecord);
  const structure = await compileStructure(normalForm);
  const anatomy = await compileAnatomy(structure);
  const foldScene = await buildFoldScene(normalForm, structure);
  return { fixtureRecord, normalForm, structure, anatomy, foldScene };
}

export function findRecipientPackage(
  state: DemoState,
  exactPackageId: string,
): EncounterPackageV0_1 | null {
  return Object.values(state.recipients).find(({ packageId }) => packageId === exactPackageId) ?? null;
}
