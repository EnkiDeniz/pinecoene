import { deepFreeze, hashContract } from "./canonical";
import {
  demoLimitations,
  type EncounterPackageV0_1,
  type ReturnProjectionV0_1,
} from "./types";

function syntheticReturnStanding() {
  return {
    lifecycle: "synthetic_return" as const,
    provenanceKind: "authored_fixture" as const,
    custody: "local_internal" as const,
  };
}

/**
 * Recipient-safe Return compiler.
 *
 * This module intentionally has no dependency on fixture construction or the
 * owner-side compiler so a Witness bundle cannot acquire owner-only fixture
 * strings as an incidental client dependency.
 */
export async function createSyntheticReturn(
  encounterPackage: EncounterPackageV0_1,
  exactText: string,
): Promise<ReturnProjectionV0_1> {
  if (!encounterPackage.projection.capabilities.includes("return") || !encounterPackage.controls.createReturn) {
    throw new Error("This Encounter package does not grant Return capability");
  }
  const trimmed = exactText.trim();
  if (!trimmed) throw new Error("A synthetic Return requires non-empty exact text");
  const basis = {
    packageRef: { packageId: encounterPackage.packageId, packageHash: encounterPackage.packageHash },
    content: { kind: "unfinished_sentence" as const, exactText: trimmed },
    custody: "local_only" as const,
    standing: syntheticReturnStanding(),
    limitations: demoLimitations(),
  };
  const returnHash = await hashContract("pinecoene.return-projection.v0.1", basis);
  return deepFreeze({
    schemaId: "pinecoene.return-projection",
    schemaVersion: "0.1.0",
    returnId: `return-${returnHash.slice(7, 19)}`,
    ...basis,
    returnHash,
  });
}
