import Ajv from "ajv";
import { hashObject } from "@/lib/protocol";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import { DOOR_COPY } from "@/lib/door-copy";
export { DOOR_COPY } from "@/lib/door-copy";

export type CopyPlacement = "door_object" | "door_letter" | "door_invitation" | "works_opening" | "join_boundary";

export interface CopyReleaseRefV0_1 {
  schemaVersion: "pinecoene.copy-release-ref.v0.1";
  copyId: string;
  copyVersion: string;
  utf8ContentHash: string;
  approvalReceiptRef: string;
  placements: CopyPlacement[];
}

export interface ReplayProjectionRefV0_1 {
  schemaVersion: "pinecoene.replay-projection-ref.v0.1";
  projectionKind: "deterministic_transition";
  projectionVersion: "v0.1";
  projectionHash: string;
}

export interface PublicWorkIdentityRefV0_1 {
  schemaVersion: "pinecoene.public-work-identity-ref.v0.1";
  publicWorkRegistryVersion: "v0.2";
  publicWorkRegistryHash: string;
  registryEntryHash: string;
  internalId: "pcn-0001";
  publicSlug: "genesis";
  workVersion: "v0.1";
  sourceManifestHash: string;
}

export interface PublicWorkReleaseRefV0_1 {
  schemaVersion: "pinecoene.public-work-release-ref.v0.1";
  workIdentityRef: PublicWorkIdentityRefV0_1;
  publicProjectionHash: string;
  posterManifestHash: string;
  replayProjectionRef: ReplayProjectionRefV0_1;
  playerVersion: "pinecoene.fold-player.v0.2";
}

export type PublicShelfEntryV0_1 =
  | { schemaVersion:"pinecoene.public-shelf-entry.v0.1"; kind:"published_work"; workRef:PublicWorkReleaseRefV0_1 }
  | { schemaVersion:"pinecoene.public-shelf-entry.v0.1"; kind:"curation_note" | "owed_experiment"; editorialId:string; title:string; standing:string; permittedCopyRef:CopyReleaseRefV0_1; destination?:string };

export type SentenceIntakeReleaseState = { state:"closed" };

export interface PublicDoorReleaseManifestV0_2 {
  schemaVersion: "pinecoene.public-door-release-manifest.v0.2";
  releaseManifestId: "public-door-v0.2-genesis";
  publicWorkRegistryVersion: "v0.2";
  publicWorkRegistryHash: string;
  doorWorkRef: PublicWorkReleaseRefV0_1;
  doorCopyRefs: CopyReleaseRefV0_1[];
  worksOpeningCopyRef: CopyReleaseRefV0_1;
  joinPlaceholderCopyRef: CopyReleaseRefV0_1;
  copyBundleHash: string;
  watchRouteRef: { publicSlug:"genesis"; view:"becoming"; sourceContext:"door"; canonicalPath:"/works/genesis?view=becoming" };
  publishedWorkRefs: PublicWorkReleaseRefV0_1[];
  shelfEntries: PublicShelfEntryV0_1[];
  sentenceIntake: SentenceIntakeReleaseState;
  desktopNavigation: ["works", "join", "more"];
  mobileNavigation: "labelled_menu";
  releaseManifestHash: string;
}

async function copyRef(copyId:string, placements:CopyPlacement[], content:string):Promise<CopyReleaseRefV0_1> {
  return { schemaVersion:"pinecoene.copy-release-ref.v0.1", copyId, copyVersion:"v0.2", utf8ContentHash:await hashObject({ content }), approvalReceiptRef:"DENIZ-PUBLIC-DOOR-V02", placements };
}

const manifestSchema = {
  type:"object",
  additionalProperties:false,
  required:["schemaVersion","releaseManifestId","publicWorkRegistryVersion","publicWorkRegistryHash","doorWorkRef","doorCopyRefs","worksOpeningCopyRef","joinPlaceholderCopyRef","copyBundleHash","watchRouteRef","publishedWorkRefs","shelfEntries","sentenceIntake","desktopNavigation","mobileNavigation","releaseManifestHash"],
  properties:{
    schemaVersion:{ const:"pinecoene.public-door-release-manifest.v0.2" },
    releaseManifestId:{ const:"public-door-v0.2-genesis" },
    publicWorkRegistryVersion:{ const:"v0.2" },
    publicWorkRegistryHash:{ type:"string", pattern:"^[a-f0-9]{64}$" },
    doorWorkRef:{ type:"object" }, doorCopyRefs:{ type:"array", minItems:3 }, worksOpeningCopyRef:{ type:"object" }, joinPlaceholderCopyRef:{ type:"object" },
    copyBundleHash:{ type:"string", pattern:"^[a-f0-9]{64}$" }, watchRouteRef:{ type:"object" }, publishedWorkRefs:{ type:"array", minItems:1, maxItems:1 }, shelfEntries:{ type:"array", minItems:3, maxItems:3 },
    sentenceIntake:{ type:"object", additionalProperties:false, required:["state"], properties:{ state:{ const:"closed" } } },
    desktopNavigation:{ const:["works","join","more"] }, mobileNavigation:{ const:"labelled_menu" }, releaseManifestHash:{ type:"string", pattern:"^[a-f0-9]{64}$" },
  },
} as const;

const validateManifest = new Ajv({ allErrors:true, strict:false }).compile(manifestSchema);

export function assertPublicDoorReleaseManifest(value:unknown):asserts value is PublicDoorReleaseManifestV0_2 {
  if (!validateManifest(value)) throw new Error(`Public Door release manifest failed closed: ${validateManifest.errors?.map((error) => `${error.instancePath} ${error.message}`).join("; ")}`);
}

let releasePromise:Promise<PublicDoorReleaseManifestV0_2> | undefined;

export function getPublicDoorReleaseManifest() {
  releasePromise ??= buildReleaseManifest();
  return releasePromise;
}

async function buildReleaseManifest():Promise<PublicDoorReleaseManifestV0_2> {
  const artifact = await compileStudioArtifact(await getFixtureManifest("pcn-0001"));
  const doorObject = await copyRef("door-object", ["door_object"], DOOR_COPY.object);
  const doorLetter = await copyRef("door-letter", ["door_letter"], DOOR_COPY.beats.map((beat)=>`${beat.eyebrow}\n${beat.title}\n${beat.body}`).join("\n"));
  const doorInvitation = await copyRef("door-invitation", ["door_invitation"], `${DOOR_COPY.project}\n${DOOR_COPY.invitation}\n${DOOR_COPY.actions.join("\n")}\n${DOOR_COPY.ending}`);
  const worksOpening = await copyRef("works-opening-one-work", ["works_opening"], "One Pinecœne has earned public standing. The origin conversation is still being curated. The honesty test remains visibly owed.");
  const joinBoundary = await copyRef("join-closed", ["join_boundary"], "One unfinished sentence will eventually be enough. The receiving boundary is not open yet, and we will not install a form that pretends otherwise.");
  const copyRefs = [doorObject,doorLetter,doorInvitation];
  const registrySeed = { version:"v0.2", internalId:"pcn-0001", slug:"genesis", fixtureHash:artifact.manifest.fixtureHash, semanticHash:artifact.conformation.score.semanticHash, topologyHash:artifact.conformation.score.topologyHash, sceneHash:artifact.conformation.scene.sceneHash, transitionHash:artifact.transition.transitionHash };
  const publicWorkRegistryHash = await hashObject(registrySeed);
  const identity:PublicWorkIdentityRefV0_1 = { schemaVersion:"pinecoene.public-work-identity-ref.v0.1", publicWorkRegistryVersion:"v0.2", publicWorkRegistryHash, registryEntryHash:await hashObject({ ...registrySeed, publicWorkRegistryHash }), internalId:"pcn-0001", publicSlug:"genesis", workVersion:"v0.1", sourceManifestHash:artifact.manifest.fixtureHash };
  const workRef:PublicWorkReleaseRefV0_1 = { schemaVersion:"pinecoene.public-work-release-ref.v0.1", workIdentityRef:identity, publicProjectionHash:await hashObject({ score:artifact.conformation.score, scene:artifact.conformation.scene }), posterManifestHash:await hashObject({ fixtureId:"pcn-0001", sceneHash:artifact.conformation.scene.sceneHash, camera:"canonical-door-v0.2" }), replayProjectionRef:{ schemaVersion:"pinecoene.replay-projection-ref.v0.1", projectionKind:"deterministic_transition", projectionVersion:"v0.1", projectionHash:artifact.transition.transitionHash }, playerVersion:"pinecoene.fold-player.v0.2" };
  const shelfEntries:PublicShelfEntryV0_1[] = [
    { schemaVersion:"pinecoene.public-shelf-entry.v0.1", kind:"published_work", workRef },
    { schemaVersion:"pinecoene.public-shelf-entry.v0.1", kind:"curation_note", editorialId:"genesis-chat-curation", title:"The Genesis Chat", standing:"curation_in_progress", permittedCopyRef:await copyRef("genesis-chat-curation", ["works_opening"], "The origin conversation exists. Its public record and identity are still being reconciled; no Fold is published here yet.") },
    { schemaVersion:"pinecoene.public-shelf-entry.v0.1", kind:"owed_experiment", editorialId:"thin-fold", title:"The Thin Fold", standing:"not_yet_made", permittedCopyRef:await copyRef("thin-fold-owed", ["works_opening"], "A sparse record must not be allowed to pose as dense, tested, or resolved. The experiment remains owed."), destination:"/next#thin-fold" },
  ];
  const withoutHash = { schemaVersion:"pinecoene.public-door-release-manifest.v0.2" as const, releaseManifestId:"public-door-v0.2-genesis" as const, publicWorkRegistryVersion:"v0.2" as const, publicWorkRegistryHash, doorWorkRef:workRef, doorCopyRefs:copyRefs, worksOpeningCopyRef:worksOpening, joinPlaceholderCopyRef:joinBoundary, copyBundleHash:await hashObject([...copyRefs,worksOpening,joinBoundary]), watchRouteRef:{ publicSlug:"genesis" as const, view:"becoming" as const, sourceContext:"door" as const, canonicalPath:"/works/genesis?view=becoming" as const }, publishedWorkRefs:[workRef], shelfEntries, sentenceIntake:{ state:"closed" as const }, desktopNavigation:["works","join","more"] as ["works","join","more"], mobileNavigation:"labelled_menu" as const };
  const manifest = { ...withoutHash, releaseManifestHash:await hashObject(withoutHash) };
  assertPublicDoorReleaseManifest(manifest);
  return manifest;
}
