import { hashObject } from "@/lib/protocol";
import type {
  FixtureId,
  FixtureManifestV0_1,
  OwnerDecisionSetV0_1,
} from "@/lib/studio-contracts";

type FixtureDraft = Omit<FixtureManifestV0_1, "fixtureHash">;

const DISCLOSURE =
  "Sanitized, fixture-authored demonstration. Source anchors and decisions are authored for this showcase; no human admission, delivery, acceptance, release, Seal, live model reading, or Œdit synchronization is claimed.";

const genesisEvents: FixtureDraft["events"] = [
  ["g01", 1, "A beginning is named", "In the beginning", "commitment"],
  ["g02", 1, "The record distinguishes making from vacancy", "The earth was without form", "boundary"],
  ["g03", 1, "Darkness remains present", "darkness was upon the face", "opening"],
  ["g04", 2, "Light is called", "Let there be light", "commitment"],
  ["g05", 2, "Light is evaluated", "the light was good", "return"],
  ["g06", 2, "Day is separated from night", "divided the light from the darkness", "boundary"],
  ["g07", 3, "A firmament holds interval", "a firmament in the midst", "boundary"],
  ["g08", 3, "Waters are divided", "divide the waters from the waters", "commitment"],
  ["g09", 4, "Dry land appears", "let the dry land appear", "commitment"],
  ["g10", 4, "Earth returns growth", "let the earth bring forth", "return"],
  ["g11", 5, "Lights become signs", "let them be for signs", "commitment"],
  ["g12", 5, "Seasons retain recurrence", "for seasons, and for days", "return"],
  ["g13", 6, "Living motion fills the waters", "waters bring forth abundantly", "return"],
  ["g14", 6, "The work is blessed without being closed", "be fruitful, and multiply", "opening"],
  ["g15", 7, "The fold rests with a withheld edge", "the seventh day", "opening"],
].map(([eventId, phase, label, exactRecord, role]) => ({
  eventId: String(eventId),
  phase: Number(phase),
  label: String(label),
  exactRecord: String(exactRecord),
  role: role as FixtureDraft["events"][number]["role"],
  uncertainty: role === "opening" ? "Kept OPEN by fixture law." : undefined,
  sourceAnchor: `Genesis fixture · phase ${phase} · ${eventId}`,
}));

const genesisRelations: FixtureDraft["relations"] = genesisEvents.slice(1).map((event, index) => ({
  relationId: `gr${String(index + 1).padStart(2, "0")}`,
  fromEventId: genesisEvents[index].eventId,
  toEventId: event.eventId,
  kind: index % 5 === 0 ? "evaluative" : index % 4 === 0 ? "returning" : "causal",
  defaultDisposition: index === 6 || index === 13 ? "open" : "keep",
}));

const chatEvents: FixtureDraft["events"] = [
  ["c01", 1, "The brief asks for a shareable Pinecœne", "The project begins as a way to share the Pinecœne of an œdit.", "commitment"],
  ["c02", 2, "The first vessel proves the encounter", "The Locket becomes a recipient-facing opening ritual.", "return"],
  ["c03", 3, "The vessel is distinguished from the work", "The Studio and Fold are named as the real product.", "boundary"],
  ["c04", 4, "Genesis supplies causal form", "The record earns the first tetrahedral geometry.", "commitment"],
  ["c05", 5, "The second specimen makes difference visible", "This Chat becomes seven membranes around an asymmetric Core.", "return"],
  ["c06", 6, "Offering and Return complete the circuit", "Recipient permission and owner disposition become one local loop.", "commitment"],
  ["c07", 7, "The record is still being written", "This phase remains OPEN; the light stays on.", "opening"],
].map(([eventId, phase, label, exactRecord, role]) => ({
  eventId: String(eventId),
  phase: Number(phase),
  label: String(label),
  exactRecord: String(exactRecord),
  role: role as FixtureDraft["events"][number]["role"],
  uncertainty: phase === 7 ? "Current conversation represented as authored showcase fixture." : undefined,
  sourceAnchor: `This Chat fixture · phase ${phase} · ${eventId}`,
}));

const drafts: Record<FixtureId, FixtureDraft> = {
  "pcn-0001": {
    schemaVersion: "pinecoene.fixture-manifest.v0.1",
    fixtureId: "pcn-0001",
    standing: "fixture_authored",
    title: "Genesis",
    subtitle: "The becoming, held at the Fold",
    sourceLabel: "Genesis 1:1–2:3 · KJV · sanitized anchors",
    recordSummary: "A record of distinction, evaluation, interval, return and rest. Its geometry is earned from admitted commitments; two relations and the closing edge remain OPEN.",
    designerNote: "The nested Core is not an illustration of scripture. It is a fixture-authored conformation: six evaluation edges, evidence fields, a rectilinear Bag, two lawful gaps and one permanently withheld close.",
    formFamily: "nested_tetrahedron",
    phases: ["BEGINNING", "LIGHT", "INTERVAL", "EARTH", "SIGNS", "LIFE", "REST"].map((title, index) => ({ phase: index + 1, title, state: index === 6 ? "open" : "sealed" })),
    events: genesisEvents,
    relations: genesisRelations,
    muses: [
      { museId: "gm01", label: "Day / Night", class: "work", evidenceEventIds: ["g04", "g06"], defaultDisposition: "acknowledge" },
      { museId: "gm02", label: "Earth / Seas", class: "work", evidenceEventIds: ["g08", "g09"], defaultDisposition: "acknowledge" },
      { museId: "gm03", label: "Return", class: "event", evidenceEventIds: ["g05", "g10", "g12"], defaultDisposition: "acknowledge" },
    ],
    withheld: ["No owner-private source is included.", "The final closing edge is withheld by fixture law."],
    disclosure: DISCLOSURE,
  },
  "pcn-0002": {
    schemaVersion: "pinecoene.fixture-manifest.v0.1",
    fixtureId: "pcn-0002",
    standing: "fixture_authored",
    title: "This Chat",
    subtitle: "How we ended up here — the record, replayed",
    sourceLabel: "Curated project conversation · seven authored phases",
    recordSummary: "This score is our own chat, compiled as a showcase fixture. Every visible beat cites an authored source anchor. Six phases seal; the seventh never does.",
    designerNote: "Seven membranes carry seven phases. The asymmetric Core holds commitments. Evidence remains blue and local to its events. Candidate Muses stay peripheral until acknowledged.",
    formFamily: "phase_membranes",
    phases: ["THE BRIEF", "THE LOCKET", "THE DISTINCTION", "GENESIS", "THIS CHAT", "THE LOOP", "THE RECORD"].map((title, index) => ({ phase: index + 1, title, state: index === 6 ? "open" : "sealed" })),
    events: chatEvents,
    relations: chatEvents.slice(1).map((event, index) => ({ relationId: `cr0${index + 1}`, fromEventId: chatEvents[index].eventId, toEventId: event.eventId, kind: index === 1 ? "boundary" : index === 4 ? "returning" : "causal", defaultDisposition: index === 5 ? "open" : "keep" })),
    muses: [
      { museId: "cm01", label: "Genesis · PCN-0001", class: "prior_pinecoene", evidenceEventIds: ["c04"], defaultDisposition: "acknowledge" },
      { museId: "cm02", label: "Lœgos design system", class: "work", evidenceEventIds: ["c03"], defaultDisposition: "reject" },
      { museId: "cm03", label: "Team feedback session", class: "event", evidenceEventIds: ["c05"], defaultDisposition: "reject" },
      { museId: "cm04", label: "Erratum PCN-E1", class: "event", evidenceEventIds: ["c05"], defaultDisposition: "reject" },
      { museId: "cm05", label: "The original brief", class: "work", evidenceEventIds: ["c01"], defaultDisposition: "acknowledge" },
    ],
    withheld: ["No raw conversation export is published.", "The seventh phase remains OPEN."],
    disclosure: DISCLOSURE,
  },
};

const fixturePromises = new Map<FixtureId, Promise<FixtureManifestV0_1>>();

export const FIXTURE_IDS: FixtureId[] = ["pcn-0001", "pcn-0002"];

export function getFixtureManifest(fixtureId: FixtureId): Promise<FixtureManifestV0_1> {
  const existing = fixturePromises.get(fixtureId);
  if (existing) return existing;
  const promise = hashObject(drafts[fixtureId]).then((fixtureHash) => ({ ...drafts[fixtureId], fixtureHash }));
  fixturePromises.set(fixtureId, promise);
  return promise;
}

export function defaultDecisions(manifest: FixtureManifestV0_1): OwnerDecisionSetV0_1 {
  return {
    eventDispositions: Object.fromEntries(manifest.events.map((event) => [event.eventId, event.role === "opening" ? "open" : "keep"])),
    rewrittenLabels: {},
    relationDispositions: Object.fromEntries(manifest.relations.map((relation) => [relation.relationId, relation.defaultDisposition])),
    museDispositions: Object.fromEntries(manifest.muses.map((muse) => [muse.museId, muse.defaultDisposition])),
  };
}
