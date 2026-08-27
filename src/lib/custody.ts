import Dexie, { type EntityTable } from "dexie";
import type {
  OfferingPackageV0_1,
  OwnerArchiveV0_1,
} from "@/lib/protocol";
import type {
  OfferingPackageV0_2,
  ReturnCandidateV0_1,
  ReturnDispositionV0_1,
  SessionStudyV0_1,
  SuccessorStudyV0_1,
} from "@/lib/studio-contracts";

interface SavedPinecoene {
  id: string;
  updatedAt: string;
  ownerArchive: OwnerArchiveV0_1;
  offeringPackage: OfferingPackageV0_1;
}

interface SavedReturn {
  id: string;
  offeringId: string;
  exactText: string;
  mayBecomeMuse: boolean;
  withdrawalAllowed: boolean;
  savedAt: string;
}

class PinecoeneCustody extends Dexie {
  pinecoenes!: EntityTable<SavedPinecoene, "id">;
  returns!: EntityTable<SavedReturn, "id">;
  studies!: EntityTable<SessionStudyV0_1, "studyId">;
  offeringsV2!: EntityTable<OfferingPackageV0_2, "offeringId">;
  returnCandidates!: EntityTable<ReturnCandidateV0_1, "returnId">;
  returnDispositions!: EntityTable<ReturnDispositionV0_1, "returnId">;
  successors!: EntityTable<SuccessorStudyV0_1, "successorId">;

  constructor() {
    super("pinecoene-showcase-v0");
    this.version(1).stores({
      pinecoenes: "id, updatedAt",
      returns: "id, offeringId, savedAt",
    });
    this.version(2).stores({
      pinecoenes: "id, updatedAt",
      returns: "id, offeringId, savedAt",
      studies: "studyId, fixtureId, fixtureHash, updatedAt",
      offeringsV2: "offeringId, fixtureId, studyId, packageHash",
      returnCandidates: "returnId, offeringId, candidateHash, createdAt",
      returnDispositions: "returnId, disposition, decidedAt",
      successors: "successorId, predecessorStudyId, returnId, createdAt",
    });
  }
}

let custody: PinecoeneCustody | undefined;

function getCustody() {
  if (typeof window === "undefined") {
    throw new Error("Browser custody is unavailable on the server.");
  }
  custody ??= new PinecoeneCustody();
  return custody;
}

export async function savePinecoene(
  ownerArchive: OwnerArchiveV0_1,
  offeringPackage: OfferingPackageV0_1,
) {
  await getCustody().pinecoenes.put({
    id: ownerArchive.score.pinecoeneId,
    updatedAt: new Date().toISOString(),
    ownerArchive,
    offeringPackage,
  });
}

export async function loadPinecoene(id: string) {
  return getCustody().pinecoenes.get(id);
}

export async function saveStudy(study: SessionStudyV0_1) {
  await getCustody().studies.put(study);
  return study;
}

export async function loadStudy(studyId: string) {
  return getCustody().studies.get(studyId);
}

export async function listStudies() {
  return getCustody().studies.orderBy("updatedAt").reverse().toArray();
}

export async function deleteStudy(studyId: string) {
  await getCustody().studies.delete(studyId);
}

export async function saveOfferingV2(offering: OfferingPackageV0_2) {
  await getCustody().offeringsV2.put(offering);
  return offering;
}

export async function loadOfferingV2(offeringId: string) {
  return getCustody().offeringsV2.get(offeringId);
}

export async function listOfferingsV2() {
  return getCustody().offeringsV2.toArray();
}

export async function saveReturnCandidate(candidate: ReturnCandidateV0_1) {
  await getCustody().returnCandidates.put(candidate);
  return candidate;
}

export async function listReturnCandidates(offeringId?: string) {
  if (offeringId) return getCustody().returnCandidates.where("offeringId").equals(offeringId).toArray();
  return getCustody().returnCandidates.toArray();
}

export async function deleteReturnCandidate(returnId: string) {
  await getCustody().returnCandidates.delete(returnId);
}

export async function saveReturnDisposition(disposition: ReturnDispositionV0_1) {
  await getCustody().returnDispositions.put(disposition);
  return disposition;
}

export async function loadReturnDisposition(returnId: string) {
  return getCustody().returnDispositions.get(returnId);
}

export async function saveSuccessor(successor: SuccessorStudyV0_1) {
  await getCustody().successors.put(successor);
  return successor;
}

export async function listSuccessors(predecessorStudyId?: string) {
  if (predecessorStudyId) return getCustody().successors.where("predecessorStudyId").equals(predecessorStudyId).toArray();
  return getCustody().successors.toArray();
}

export async function exportLegacyShowcase() {
  const [pinecoenes, returns] = await Promise.all([
    getCustody().pinecoenes.toArray(),
    getCustody().returns.toArray(),
  ]);
  return {
    schemaVersion: "pinecoene.showcase-legacy-export.v0.1",
    standing: "Showcase legacy — read-only; not promoted into Curated Studio V1",
    pinecoenes,
    returns,
  };
}

export async function saveLocalReturn(
  offeringId: string,
  exactText: string,
  mayBecomeMuse: boolean,
  withdrawalAllowed: boolean,
) {
  const savedAt = new Date().toISOString();
  const id = `return-${offeringId}-${savedAt}`;
  await getCustody().returns.put({
    id,
    offeringId,
    exactText,
    mayBecomeMuse,
    withdrawalAllowed,
    savedAt,
  });
  return id;
}

export function downloadJson(filename: string, value: unknown) {
  const blob = new Blob([JSON.stringify(value, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
