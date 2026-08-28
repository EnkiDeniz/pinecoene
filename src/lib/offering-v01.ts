import Ajv from "ajv";
import { hashObject } from "@/lib/protocol";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import type { Address,CompiledStudioArtifact,ExpressionProfileV0_2,RendererNeutralSceneV0_1,Resolution } from "@/lib/studio-contracts";

export type ResolutionNumber = 0|1|2|3|4|5;

export interface OfferingPermissions {
  resolution:ResolutionNumber;
  showConstellation:boolean;
  showMuseIdentities:boolean;
  showTrail:boolean;
  allowReplay:boolean;
  allowSound:false;
  allowDownload:boolean;
  encounterTelemetry:"none";
}

export interface PerformanceScore {
  schemaVersion:"pinecoene.performance-score.v0.1";
  mode:"static"|"replay"|"recital";
  transitionHash:string|null;
  durationMs:number;
  reducedMotionSteps:number[];
}

export interface GoverningOfferingPackage {
  packageKind:"recipient_offering";
  packageVersion:"pinecoene.offering-package.v0.1";
  playerVersion:"pinecoene.fold-player.v0.2";
  offering:{ offeringId:string; mode:"hosted_fixture"|"same_browser_preview"; title:string; senderSnapshot:string };
  authorization:{ basis:"fixture_authored"|"owner_confirmed_local"; offeringIntentHash:string; disclosure:string };
  projection:{ fixtureId:string; studyId?:string; address:{ kind:Address; dedication?:string }; permissions:OfferingPermissions; scene:RendererNeutralSceneV0_1|null; record:Array<{eventId:string;phase:number;role:string;label:string}>; disclosure:string };
  expression:ExpressionProfileV0_2;
  performance:PerformanceScore;
  evidence:{ status:"hosted_fixture"|"same_browser_preview"; claims:Array<string> };
  encounterReturn:{ evidenceKind:"local_demonstration"; successorConsideration:"not_permitted"; exportOrLink:"not_permitted"; retraction:"local_delete_available" }|null;
  assets:[];
  packageHash:string;
}

export interface HostedOfferingDescriptor {
  offeringId:string;
  registryPresence:true;
  packageHash:string;
  packageKind:"recipient_offering";
  packageVersion:"pinecoene.offering-package.v0.1";
  registryRevision:"public-door-v0.2";
}

const packageSchema = {
  type:"object",additionalProperties:false,
  required:["packageKind","packageVersion","playerVersion","offering","authorization","projection","expression","performance","evidence","encounterReturn","assets","packageHash"],
  properties:{
    packageKind:{const:"recipient_offering"},packageVersion:{const:"pinecoene.offering-package.v0.1"},playerVersion:{const:"pinecoene.fold-player.v0.2"},
    offering:{type:"object",required:["offeringId","mode","title","senderSnapshot"]},authorization:{type:"object",required:["basis","offeringIntentHash","disclosure"]},projection:{type:"object",required:["fixtureId","address","permissions","scene","record","disclosure"]},expression:{type:"object"},performance:{type:"object"},evidence:{type:"object"},encounterReturn:{anyOf:[{type:"object"},{type:"null"}]},assets:{type:"array",maxItems:0},packageHash:{type:"string",pattern:"^[a-f0-9]{64}$"},
  },
} as const;
const validatePackage = typeof window === "undefined"
  ? new Ajv({allErrors:true,strict:false}).compile(packageSchema)
  : null;

function isClientSafePackage(value:unknown):value is GoverningOfferingPackage {
  if(!value||typeof value!=="object"||Array.isArray(value))return false;
  const item=value as Record<string,unknown>;
  if(item.packageKind!=="recipient_offering"||item.packageVersion!=="pinecoene.offering-package.v0.1"||item.playerVersion!=="pinecoene.fold-player.v0.2")return false;
  if(typeof item.packageHash!=="string"||!/^[a-f0-9]{64}$/.test(item.packageHash))return false;
  if(!item.offering||typeof item.offering!=="object"||!item.authorization||typeof item.authorization!=="object"||!item.projection||typeof item.projection!=="object")return false;
  if(!item.expression||typeof item.expression!=="object"||!item.performance||typeof item.performance!=="object"||!item.evidence||typeof item.evidence!=="object"||!Array.isArray(item.assets)||item.assets.length!==0)return false;
  const offering=item.offering as Record<string,unknown>;
  const projection=item.projection as Record<string,unknown>;
  const permissions=projection.permissions as Record<string,unknown>|undefined;
  return typeof offering.offeringId==="string"&&typeof offering.title==="string"&&typeof offering.senderSnapshot==="string"&&
    (offering.mode==="hosted_fixture"||offering.mode==="same_browser_preview")&&typeof projection.fixtureId==="string"&&
    !!permissions&&Number.isInteger(permissions.resolution)&&Number(permissions.resolution)>=0&&Number(permissions.resolution)<=5&&
    (projection.scene===null||typeof projection.scene==="object")&&Array.isArray(projection.record)&&
    (item.encounterReturn===null||typeof item.encounterReturn==="object");
}

export function assertGoverningOfferingPackage(value:unknown):asserts value is GoverningOfferingPackage {
  if(validatePackage){if(!validatePackage(value))throw new Error(`Offering package failed closed: ${validatePackage.errors?.map((error)=>`${error.instancePath} ${error.message}`).join("; ")}`);return;}
  if(!isClientSafePackage(value))throw new Error("Offering package failed closed: client-safe structure validation failed.");
}

export async function verifyGoverningOfferingPackage(value:unknown):Promise<GoverningOfferingPackage>{
  assertGoverningOfferingPackage(value);
  const {packageHash,...unsigned}=value;
  if(await hashObject(unsigned)!==packageHash)throw new Error("Offering package failed closed: package hash mismatch.");
  return value;
}

const rankByResolution:Record<Resolution,ResolutionNumber>={R0:0,R1:1,R2:2,R3:3,R4:4,R5:5};

export async function buildGoverningOfferingPackage(artifact:CompiledStudioArtifact,input:{resolution:Resolution;address:Address;expression:ExpressionProfileV0_2;title:string;senderSnapshot:string;mode:"hosted_fixture"|"same_browser_preview";studyId?:string;basis:"fixture_authored"|"owner_confirmed_local"}):Promise<GoverningOfferingPackage>{
  const rank=rankByResolution[input.resolution];
  const permissions:OfferingPermissions={resolution:rank,showConstellation:rank>=3,showMuseIdentities:false,showTrail:rank>=4,allowReplay:rank>=4,allowSound:false,allowDownload:rank>=2,encounterTelemetry:"none"};
  const scene=rank>=2?{...artifact.conformation.scene,features:artifact.conformation.scene.features.filter((feature)=>rank>=3||feature.kind==="core"||feature.kind==="open_relation"),sceneHash:await hashObject({base:artifact.conformation.scene.sceneHash,resolution:rank})}:null;
  const record=rank>=1?artifact.conformation.score.admittedEvents.map((event)=>({eventId:event.eventId,phase:event.phase,role:event.role,label:event.label})):[];
  const performance:PerformanceScore={schemaVersion:"pinecoene.performance-score.v0.1",mode:rank===5?"recital":rank>=4?"replay":"static",transitionHash:rank>=4?artifact.transition.transitionHash:null,durationMs:rank>=4?84000:0,reducedMotionSteps:rank>=4?[1,2,3,4,5,6,7]:[7]};
  const intent={fixtureId:artifact.manifest.fixtureId,studyId:input.studyId,address:input.address,dedication:input.expression.dedication,permissions,sceneHash:scene?.sceneHash??null,record,expression:input.expression,performance,title:input.title,senderSnapshot:input.senderSnapshot,mode:input.mode,basis:input.basis};
  const offeringIntentHash=await hashObject(intent);
  const offeringId=input.mode==="hosted_fixture"?"genesis-demonstration":`local-${offeringIntentHash.slice(0,20)}`;
  const withoutHash={packageKind:"recipient_offering" as const,packageVersion:"pinecoene.offering-package.v0.1" as const,playerVersion:"pinecoene.fold-player.v0.2" as const,offering:{offeringId,mode:input.mode,title:input.title,senderSnapshot:input.senderSnapshot},authorization:{basis:input.basis,offeringIntentHash,disclosure:"This package authorizes only its exact recipient-safe projection. It does not prove sending, delivery, receipt, opening, or acceptance."},projection:{fixtureId:artifact.manifest.fixtureId,studyId:input.studyId,address:{kind:input.address,...(input.expression.dedication?{dedication:input.expression.dedication}:{})},permissions,scene,record,disclosure:artifact.manifest.disclosure},expression:input.expression,performance,evidence:{status:input.mode,claims:input.mode==="hosted_fixture"?["fixture-authored curated demonstration"]:["compiled and saved in this browser"]},encounterReturn:rank===5?{evidenceKind:"local_demonstration" as const,successorConsideration:"not_permitted" as const,exportOrLink:"not_permitted" as const,retraction:"local_delete_available" as const}:null,assets:[] as []};
  const value={...withoutHash,packageHash:await hashObject(withoutHash)};
  assertGoverningOfferingPackage(value);
  return value;
}

let hostedPromise:Promise<GoverningOfferingPackage>|undefined;
export function getHostedGenesisOffering(){hostedPromise??=getFixtureManifest("pcn-0001").then((manifest)=>compileStudioArtifact(manifest)).then((artifact)=>buildGoverningOfferingPackage(artifact,{resolution:"R5",address:"keeper",expression:{schemaVersion:"pinecoene.expression.v0.2",finish:"metal",temperament:"solemn",dedication:"Hold the beginning at the Fold."},title:"Genesis · Curated Offering",senderSnapshot:"Pinecœne Studio",mode:"hosted_fixture",basis:"fixture_authored"}));return hostedPromise;}

export async function getHostedOfferingDescriptor(offeringId:string):Promise<HostedOfferingDescriptor|null>{if(offeringId!=="genesis-demonstration")return null;const value=await getHostedGenesisOffering();return{offeringId,registryPresence:true,packageHash:value.packageHash,packageKind:value.packageKind,packageVersion:value.packageVersion,registryRevision:"public-door-v0.2"};}

export async function getHostedOffering(offeringId:string,revision:string|null){if(offeringId!=="genesis-demonstration"||revision!=="public-door-v0.2")return null;return getHostedGenesisOffering();}
