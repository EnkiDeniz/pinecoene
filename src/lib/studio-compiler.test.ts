import { describe, expect, it } from "vitest";
import { buildOfferingPackageV0_2, compileStudioArtifact, createSessionStudy } from "@/lib/studio-compiler";
import { defaultDecisions, getFixtureManifest } from "@/lib/studio-fixtures";

describe("Curated Studio deterministic compiler", () => {
  it("emits stable golden vectors for both canonical specimens", async () => {
    const genesis = await compileStudioArtifact(await getFixtureManifest("pcn-0001"));
    const chat = await compileStudioArtifact(await getFixtureManifest("pcn-0002"));
    expect({
      semantic: genesis.conformation.score.semanticHash,
      topology: genesis.conformation.score.topologyHash,
      scene: genesis.conformation.scene.sceneHash,
      transition: genesis.transition.transitionHash,
    }).toEqual({
      semantic: "ba19359033230fcde5c04713c3cbea9f008d2cd88bc2218deb5fcb9347fb6710",
      topology: "b7df595868038fbb4d67eeb9a6da86b6eba3daf34fb6fb9ea9eeddf46ba17f99",
      scene: "fe10e988cb01ce17dd6e6868459f4f216574a1d775d4b1d9fa88e7baf461cff3",
      transition: "b07d3607c10af71487208ae90c3905072f7572151781ec203da9603231511d62",
    });
    expect({
      semantic: chat.conformation.score.semanticHash,
      topology: chat.conformation.score.topologyHash,
      scene: chat.conformation.scene.sceneHash,
      transition: chat.transition.transitionHash,
    }).toEqual({
      semantic: "67faad257584d22563d9dbaabd5ca86a6208396f1a5553e3ec14c5a673e89dd0",
      topology: "c5b62a66ad7407a24d5a06b4fd7ae7bf87d36845baca1a99d72a8969f611d92f",
      scene: "41111327fa166f4a9b8573fb85ee2b15cf8217b82540cdb001bf80af83b80209",
      transition: "f66f6db5dd246a17771678c8a1ca2b2e5f5361c68d01c6fb8c311aca1b7c10d0",
    });
    expect(genesis.conformation.score.topologyHash).not.toBe(chat.conformation.score.topologyHash);
  });

  it("repeats the exact semantic, topology, scene and performance hashes", async () => {
    const manifest = await getFixtureManifest("pcn-0002");
    const first = await compileStudioArtifact(manifest);
    const second = await compileStudioArtifact(manifest);
    expect(second.conformation.score.semanticHash).toBe(first.conformation.score.semanticHash);
    expect(second.conformation.score.topologyHash).toBe(first.conformation.score.topologyHash);
    expect(second.conformation.scene.sceneHash).toBe(first.conformation.scene.sceneHash);
    expect(second.transition.transitionHash).toBe(first.transition.transitionHash);
  });

  it("gives rejected candidates no scene, motion, topology or package effect", async () => {
    const manifest = await getFixtureManifest("pcn-0002");
    const decisions = defaultDecisions(manifest);
    const rejectedMuse = manifest.muses.find((muse) => decisions.museDispositions[muse.museId] === "reject");
    expect(rejectedMuse).toBeTruthy();
    const baseline = await compileStudioArtifact(manifest, { decisions });
    const alteredRejectedLabel = {
      ...manifest,
      muses: manifest.muses.map((muse) => muse.museId === rejectedMuse?.museId ? { ...muse, label:"OWNER PRIVATE LABEL THAT MUST NOT LEAK" } : muse),
    };
    const altered = await compileStudioArtifact(alteredRejectedLabel, { decisions });
    expect(altered.conformation.score.topologyHash).toBe(baseline.conformation.score.topologyHash);
    expect(altered.conformation.scene.sceneHash).toBe(baseline.conformation.scene.sceneHash);
    expect(altered.transition.transitionHash).toBe(baseline.transition.transitionHash);
    expect(JSON.stringify(altered.conformation.scene)).not.toContain("OWNER PRIVATE LABEL");
  });

  it("keeps Expression and timestamps outside topology while Address only turns the scene", async () => {
    const manifest = await getFixtureManifest("pcn-0001");
    const decisions = defaultDecisions(manifest);
    const metal = { schemaVersion:"pinecoene.expression.v0.2" as const, finish:"metal" as const, temperament:"solemn" as const, dedication:"One" };
    const moonlit = { ...metal, finish:"moonlit" as const, dedication:"Two" };
    const studyOne = await createSessionStudy(manifest, decisions, metal, "day", "R2");
    await new Promise((resolve) => setTimeout(resolve, 1));
    const studyTwo = await createSessionStudy(manifest, decisions, moonlit, "night", "R5");
    const day = await compileStudioArtifact(manifest, { decisions, address:"day", study:studyOne });
    const night = await compileStudioArtifact(manifest, { decisions, address:"night", study:studyTwo });
    expect(day.conformation.score.semanticHash).toBe(night.conformation.score.semanticHash);
    expect(day.conformation.score.topologyHash).toBe(night.conformation.score.topologyHash);
    expect(day.conformation.scene.sceneHash).not.toBe(night.conformation.scene.sceneHash);
  });

  it("never counterfeits closure and strips ungranted recipient data", async () => {
    const manifest = await getFixtureManifest("pcn-0002");
    const artifact = await compileStudioArtifact(manifest);
    const offering = await buildOfferingPackageV0_2(artifact, {
      resolution:"R0",
      address:"latent",
      expression:{ schemaVersion:"pinecoene.expression.v0.2", finish:"archive", temperament:"tender", dedication:"" },
      permissions:{ inspectRecord:false, inspectMuses:false, createReturn:false, allowMuseReuse:false, allowWithdrawal:false },
      title:"Recipient-safe mark",
      senderLabel:"Fixture",
    });
    expect(artifact.conformation.score.closure).toBe("open");
    expect(artifact.conformation.score.openEventIds.length + artifact.conformation.score.openRelationIds.length).toBeGreaterThan(0);
    expect(offering.recipientScene).toBeNull();
    expect(offering.recipientRecord).toEqual([]);
    expect(offering.transition).toBeNull();
    expect(JSON.stringify(offering)).not.toContain("The original brief");
    expect(JSON.stringify(offering)).not.toContain("No raw conversation export");
  });
});
