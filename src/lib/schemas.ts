import Ajv from "ajv";
import type {
  OfferingPackageV0_1,
  OwnerArchiveV0_1,
} from "@/lib/protocol";

const ajv = new Ajv({ allErrors: true, strict: false });

const offeringSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "standing",
    "disclosure",
    "offering",
    "projection",
    "expression",
    "performance",
    "packageHash",
  ],
  properties: {
    schemaVersion: { const: "pinecoene.offering-package.v0.1-showcase" },
    standing: {
      enum: ["fixture_authored", "prototype_only", "implemented_local"],
    },
    disclosure: { type: "string", minLength: 1 },
    offering: {
      type: "object",
      additionalProperties: false,
      required: [
        "offeringId",
        "pinecoeneId",
        "senderLabel",
        "title",
        "dedication",
        "mode",
      ],
      properties: {
        offeringId: { type: "string", minLength: 1 },
        pinecoeneId: { type: "string", minLength: 1 },
        senderLabel: { type: "string", minLength: 1 },
        title: { type: "string", minLength: 1 },
        dedication: { type: "string" },
        mode: { enum: ["local_preview", "hosted_fixture"] },
      },
    },
    projection: { type: "object", required: ["events", "relations", "muses", "closure", "openSeam", "topologySeed"] },
    expression: { type: "object", required: ["schemaVersion", "expressionHash"] },
    performance: { type: "array", minItems: 2 },
    packageHash: { type: "string", pattern: "^[a-f0-9]{64}$" },
  },
} as const;

const ownerArchiveSchema = {
  type: "object",
  additionalProperties: false,
  required: [
    "schemaVersion",
    "savedAt",
    "source",
    "candidates",
    "admission",
    "score",
    "expression",
    "archiveHash",
  ],
  properties: {
    schemaVersion: { const: "pinecoene.owner-archive.v0.1-showcase" },
    savedAt: { type: "string", minLength: 1 },
    source: { type: "object", required: ["exactText", "sourceHash"] },
    candidates: { type: "object", required: ["events", "candidateHash"] },
    admission: { type: "object", required: ["eventDispositions", "admissionHash"] },
    score: { type: "object", required: ["pinecoeneId", "scoreHash"] },
    expression: { type: "object", required: ["schemaVersion", "expressionHash"] },
    archiveHash: { type: "string", pattern: "^[a-f0-9]{64}$" },
  },
} as const;

const validateOffering = ajv.compile(offeringSchema);
const validateOwnerArchive = ajv.compile(ownerArchiveSchema);

function validationMessage(prefix: string, errors: typeof validateOffering.errors) {
  const detail = errors
    ?.map((error) => `${error.instancePath || "/"} ${error.message ?? "is invalid"}`)
    .join("; ");
  return `${prefix}${detail ? `: ${detail}` : ""}`;
}

export function assertOfferingPackage(
  value: unknown,
): asserts value is OfferingPackageV0_1 {
  if (!validateOffering(value)) {
    throw new Error(validationMessage("Offering package failed closed", validateOffering.errors));
  }
}

export function assertOwnerArchive(
  value: unknown,
): asserts value is OwnerArchiveV0_1 {
  if (!validateOwnerArchive(value)) {
    throw new Error(validationMessage("Owner archive failed closed", validateOwnerArchive.errors));
  }
}
