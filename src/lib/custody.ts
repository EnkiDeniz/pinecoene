import Dexie, { type EntityTable } from "dexie";
import type {
  OfferingPackageV0_1,
  OwnerArchiveV0_1,
} from "@/lib/protocol";

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

  constructor() {
    super("pinecoene-showcase-v0");
    this.version(1).stores({
      pinecoenes: "id, updatedAt",
      returns: "id, offeringId, savedAt",
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
