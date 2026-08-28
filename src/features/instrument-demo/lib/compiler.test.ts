import { describe, expect, it } from "vitest";
import {
  assertInstrumentContract,
  buildCandidateScene,
  compileAnatomy,
  compileNormalForm,
  compileRecipientPackage,
  compileStructure,
  createApertureGrant,
  createExpression,
  createFourthPointCandidate,
  createFourthPointFixtureRecord,
  createInstrumentDemoState,
  createPapilloenCalibrationDemo,
  createProjectionOperator,
  createSyntheticReturn,
  createSyntheticSuccessor,
  findRecipientPackage,
  validateInstrumentContract,
} from "./index";

async function compileWideForPrivateVariant(privateLabel: string, x: number) {
  const fixture = await createFourthPointFixtureRecord({ privateLabel, privatePosition: [x, 0.22, -0.64] });
  const normalForm = await compileNormalForm(fixture);
  const structure = await compileStructure(normalForm);
  const anatomy = await compileAnatomy(structure);
  const expression = await createExpression(structure, "christmas_tree");
  const operator = await createProjectionOperator(normalForm, structure, expression, "team_review");
  const grant = await createApertureGrant(normalForm, operator, "team_wide");
  return {
    normalForm,
    structure,
    expression,
    ...(await compileRecipientPackage(normalForm, structure, anatomy, expression, operator, grant)),
  };
}

describe("Pinecœne instrument demonstrator kernel", () => {
  it("produces deterministic golden vectors for the complete fourth-point journey", async () => {
    const first = await createInstrumentDemoState();
    const second = await createInstrumentDemoState();
    const vector = {
      candidate: first.candidate.contentHash,
      fixture: first.fixtureRecord.contentHash,
      normalForm: first.normalForm.normalFormHash,
      structure: first.structure.structureHash,
      neutralExpression: first.expressions.neutral.expressionHash,
      treeExpression: first.expressions.christmasTree.expressionHash,
      widePackage: first.recipients.wide.packageHash,
      narrowPackage: first.recipients.narrow.packageHash,
    };
    expect(vector).toEqual({
      candidate: "sha256:8aba66cd64101d9a5c3bb41414f58d5168027de43e985d003f87f43e214929de",
      fixture: "sha256:4d2c85959ab4327150c241ed03c06380ac801221a40e79f59e93542efd53bbe5",
      normalForm: "sha256:e9c53f86789ca64c22418e928912d691fbd27ec0ae5ac8f8deb86637215a23aa",
      structure: "sha256:8bf37d3e415d8f5cff6c637750814ae996123e05103e4426807a9d923cdb0476",
      neutralExpression: "sha256:43e92c721d68200d3ddb5ccb15ccbe9cabb5ef77a761ae31db6bf6906f2e8ceb",
      treeExpression: "sha256:ef197bb6cd7b5a7d900838ff849a22ee7fde96b4398230ac8e7e2e4cc2307008",
      widePackage: "sha256:fa845a24d1fea77cbc136930de7dd635b923d40d31d524df2859d06128bf05a0",
      narrowPackage: "sha256:4b5c959a796683b5d31ab6b7d19aa0cd06a5c89ae57580fc0dd26ce97135ce04",
    });
    expect({
      candidate: second.candidate.contentHash,
      fixture: second.fixtureRecord.contentHash,
      normalForm: second.normalForm.normalFormHash,
      structure: second.structure.structureHash,
      neutralExpression: second.expressions.neutral.expressionHash,
      treeExpression: second.expressions.christmasTree.expressionHash,
      widePackage: second.recipients.wide.packageHash,
      narrowPackage: second.recipients.narrow.packageHash,
    }).toEqual(vector);
  });

  it("collapses every rejected-Q dependency and recomputes moved Q deterministically", async () => {
    const candidate = await createFourthPointCandidate();
    const original = structuredClone(candidate);
    const base = await buildCandidateScene(candidate);
    const rejected = await buildCandidateScene(candidate, { rejectedPointIds: ["Q1"] });
    const moved = await buildCandidateScene(candidate, { positionOverrides: { Q2: [0.5, 1.1, -0.2] } });
    const movedAgain = await buildCandidateScene(candidate, { positionOverrides: { Q2: [0.5, 1.1, -0.2] } });

    expect(rejected.points.some(({ semanticRefs }) => semanticRefs.includes("Q1"))).toBe(false);
    expect(rejected.edges.some(({ semanticRefs }) => semanticRefs.some((id) => id.includes("q1")))).toBe(false);
    expect(rejected.faces.some(({ semanticRefs }) => semanticRefs.some((id) => id.includes("q1")))).toBe(false);
    expect(rejected.points.some(({ semanticRefs }) => semanticRefs.includes("Q2"))).toBe(true);
    expect(base.points.every(({ standing }) => standing === "candidate")).toBe(true);
    expect(base.faces.every(({ materialRole }) => materialRole === "candidate_inquiry_surface")).toBe(true);
    expect(moved.sceneHash).not.toBe(base.sceneHash);
    expect(movedAgain.sceneHash).toBe(moved.sceneHash);
    expect(candidate).toEqual(original);
  });

  it("keeps Q1 out, keeps explicit OPEN open, and never lets Expression mutate form identity", async () => {
    const state = await createInstrumentDemoState();
    expect(JSON.stringify(state.fixtureRecord)).not.toContain('"Q1"');
    expect(state.fixtureRecord.openItems).toEqual(["rel-q2-c-open"]);
    expect(state.structure.openFeatureIds).toEqual(["edge-rel-q2-c-open"]);
    expect(state.scenes.fold.edges.find(({ id }) => id === "edge-rel-q2-c-open")?.open).toBe(true);
    expect(state.expressions.neutral.expressionHash).not.toBe(state.expressions.christmasTree.expressionHash);
    expect(state.scenes.expression.normalFormHash).toBe(state.normalForm.normalFormHash);
    expect(state.structure.artifactRef.normalFormHash).toBe(state.normalForm.normalFormHash);
  });

  it("compiles genuinely different recipient packages from permitted semantic subsets", async () => {
    const state = await createInstrumentDemoState();
    const wide = state.recipients.wide;
    const narrow = state.recipients.narrow;
    expect(wide.packageHash).not.toBe(narrow.packageHash);
    expect(wide.projection.safeStructure.points.length).toBeGreaterThan(narrow.projection.safeStructure.points.length);
    expect(wide.projection.safeStructure.openFeatureIds).toEqual(["edge-rel-q2-c-open"]);
    expect(narrow.projection.safeStructure.openFeatureIds).toEqual([]);
    expect(wide.controls).toEqual({ inspect: true, createReturn: true });
    expect(narrow.controls).toEqual({ inspect: false, createReturn: false });
    expect(findRecipientPackage(state, wide.packageId)?.packageHash).toBe(wide.packageHash);
    expect(findRecipientPackage(state, "unknown-package")).toBeNull();
  });

  it("gives owner-private material zero influence over recipient bytes", async () => {
    const first = await compileWideForPrivateVariant("Owner-private one-time name", 1.24);
    const second = await compileWideForPrivateVariant("Entirely different private note", 9.75);
    expect(first.normalForm.normalFormHash).not.toBe(second.normalForm.normalFormHash);
    expect(first.structure.structureHash).not.toBe(second.structure.structureHash);
    expect(first.expression.expressionHash).not.toBe(second.expression.expressionHash);
    expect(first.package.packageHash).toBe(second.package.packageHash);
    expect(first.binding.bindingHash).not.toBe(second.binding.bindingHash);
    const recipientBytes = JSON.stringify(first.package);
    expect(recipientBytes).not.toContain("owner_private");
    expect(recipientBytes).not.toContain("Owner-private one-time name");
    expect(recipientBytes).not.toContain("rel-q2-private");
    expect(recipientBytes).not.toContain(first.normalForm.normalFormHash);
    expect(recipientBytes).not.toContain(first.binding.bindingHash);
  });

  it("validates discriminators and fails closed on unknown or extra top-level fields", async () => {
    const state = await createInstrumentDemoState();
    const values = [
      state.candidate,
      state.fixtureRecord,
      state.normalForm,
      state.structure,
      state.anatomy,
      state.expressions.christmasTree,
      state.recipients.wide,
    ];
    for (const value of values) expect(() => assertInstrumentContract(value)).not.toThrow();
    const contaminated = { ...state.candidate, pinecoeneId: "forbidden-candidate-identity" };
    expect(validateInstrumentContract(contaminated)).toEqual(expect.objectContaining({ valid: false }));
    expect(validateInstrumentContract({ schemaId: "pinecoene.unknown", schemaVersion: "0.1.0" })).toEqual(expect.objectContaining({ valid: false }));
  });

  it("keeps Return immutable and creates a new, explicitly synthetic Successor", async () => {
    const state = await createInstrumentDemoState();
    await expect(createSyntheticReturn(state.recipients.narrow, "A thought")).rejects.toThrow("does not grant Return");
    const predecessorBytes = JSON.stringify(state.normalForm);
    const returned = await createSyntheticReturn(state.recipients.wide, "What if the fourth point could remain generous?");
    expect(Object.isFrozen(returned)).toBe(true);
    expect(() => assertInstrumentContract(returned)).not.toThrow();
    const successor = await createSyntheticSuccessor(state.fixtureRecord, state.normalForm, returned);
    expect(successor.normalForm.pinecoeneId).not.toBe(state.normalForm.pinecoeneId);
    expect(successor.link.relationKind).toBe("succeeds");
    expect(successor.link.standing.lifecycle).toBe("synthetic_successor");
    expect(JSON.stringify(state.normalForm)).toBe(predecessorBytes);
    expect(() => assertInstrumentContract(successor.link)).not.toThrow();
  });

  it("compiles Papillœn as a second data-only calibration fixture", async () => {
    const calibration = await createPapilloenCalibrationDemo();
    expect(calibration.structure.points).toHaveLength(7);
    expect(calibration.structure.edges).toHaveLength(12);
    expect(calibration.fixtureRecord.fixtureAuthorship.purpose).toBe("data_only_calibration");
    expect(calibration.fixtureRecord.limitations.join(" ")).toContain("not a universal Pinecœne ontology");
    expect(calibration.foldScene.mode).toBe("fold");
  });
});
