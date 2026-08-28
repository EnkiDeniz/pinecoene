# Pinecœne System Specification

## Downstream Instrument and Œdit Boundary Amendment

| Field | Value |
| --- | --- |
| Document ID | `LKN-SPEC-PINECOENE-SYSTEM-001` |
| Version | `0.8` |
| Date | 28 August 2026 |
| Standing | `CURRENT INTERNAL DIRECTION · CANDIDATE · UNSEALED` |
| Supersedes | v0.7 only where this amendment changes actor ownership, input contracts, artifact states, or first implementation sequence |
| Preserves | v0.7 normal-form, OPEN, exclusion, projection-axis, Aperture, recipient-minimization, Return, Successor, Passport, conformance, privacy, and human-authority laws unless explicitly amended |
| Governing product description | `docs/product/pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md` |
| Runtime effect | None |

> This is a focused system amendment, not a claim that the current application implements the new contracts. It authorizes no application edit, source processing, admission, deployment, publication, release, acceptance, or Seal.

---

## 0. Revision decision

Version 0.8 fixes the system boundary:

> **Pinecœne is a downstream instrument. It receives validated structured candidate, admitted, normal-form, or trace-linked projection data. It does not reconstruct meaning from raw authored projections, exercise human admission, or infer missing semantics inside a renderer.**

The cross-product ladder is:

```text
authored projection
→ Œdit / Primer candidate reconstruction
→ ReadableCaseProjection
→ named-human / Lakin admission boundary
→ AdmittedRecord
→ artifact identity proposal bound to compiler/conformation target
→ any required origin/relationship authority
→ separate artifact-registration authority
→ registrar reservation and identity issuance
→ deterministic normal-form compiler
→ PinecoeneNormalForm
→ Structure / Anatomy / Expression
→ ProjectionOperator + ApertureGrant
→ TraceLinkedProjection
→ EncounterPackage
→ Return
→ separate human disposition
→ possible Successor
```

### 0.1 Actor-context correction

The Archer–PCN repository inspection is typed:

```text
PINECŒNE REPOSITORY INSPECTION
completed · repository-specific

ŒDIT A6
not run · outside Archer–PCN implementation context
```

Pinecœne implementation findings are not findings about the separate Œdit build.

### 0.2 Current implementation truth

The inspected local `main` checkout at `d5d7c2c07b72cd33b5f9cf0892ed65759aac5c87` implements a deterministic fixture-specific Curated Studio path. It does not implement the v0.8 seam.

The following remain candidate/doc-defined rather than executable current contracts:

- `ReadableCaseProjectionV0_1`;
- `AdmittedRecordV0_1`;
- `AuthoredFixtureRecordV0_1`;
- `ArtifactIdentityProposalV0_1`;
- `ArtifactIdentityReservationV0_1`;
- `ArtifactRegistrationAuthorityReceiptV0_1`;
- `ArtifactIdentityContextV0_1`;
- `GovernedPolicyProjectionV0_1`;
- `PinecoeneNormalFormV0_1`;
- `TransitionProjectionV0_1`;
- `ExpressionAssetManifestV0_1`;
- `ProjectionOperatorV0_1`;
- `ApertureGrantV0_1`;
- `TraceLinkedProjectionV0_1`;
- `EncounterPackageCandidateV0_1`;
- `OfferingAuthorityReceiptV0_1`;
- `EncounterPackageV0_1`;
- `ReturnAttachmentReceiptV0_1`;
- `SuccessorAuthorityReceiptV0_1`.

Production state was not revalidated by this documentation amendment.

---

## 1. System ownership

### 1.1 Upstream Œdit / Primer

Source custody, Reader runs, candidate reconstruction, alternatives, contradiction, source coverage, and candidate provenance belong upstream.

Pinecœne may render a received candidate projection. It does not perform the reading.

### 1.2 Named-human / Lakin admission boundary

Admission, rewrite-and-admit, rejection, withholding, and `leave_open` are named-human acts. A system may record and validate the receipt. It cannot replace the human authority.

### 1.3 Deterministic compiler

The compiler is pure and non-interpretive. It receives an exact admitted or authored-fixture record, one immutable `ArtifactIdentityContextV0_1` issued through the proposal → origin authority where required → separate registration authority → reservation sequence and bound to that record and exact compiler/conformation target, and the matching conformation/compiler profile. It returns a normal form or typed failure. The context contains a self-contained registrar attestation; the compiler validates that attestation and the record/profile match without fetching or re-adjudicating external authority objects. The normal form embeds a hashed `GovernedPolicyProjectionV0_1` derived from the record's permitted provenance and rights/disclosure ceilings; downstream compilation never depends on ambient record access.

It cannot access:

- raw source;
- Candidate Sets;
- rejected or withheld-from-record payloads;
- Reader prompts or model state;
- Expression;
- recipient identity or Aperture;
- mutable application state.

### 1.4 Pinecœne

Pinecœne owns validation, identity, deterministic compilation, candidate/Fold rendering, Structure, Anatomy, Expression, projection, Aperture enforcement, Encounter, Return attachment, Successor compilation, Passport, and lineage.

It never selects candidate meaning or geometry automatically.

---

## 2. Three governing artifact states

### 2.1 Readable candidate

`ReadableCaseProjectionV0_1` is pre-admission.

It may contain candidate semantics, alternative structures, `proposed_open` material, source-safe references, and attributed geometry proposals. It has no canonical Pinecœne work identity, no admission receipt, and no Solid eligibility.

### 2.2 Admitted or authored-fixture Fold

`AdmittedRecordV0_1` contains only admitted and explicitly `leave_open` semantic material. `AuthoredFixtureRecordV0_1` uses the same compiler-facing primitives with permanent synthetic standing and a fixture-authorship receipt.

After a valid identity proposal, any required origin authority, separate registration authority, registrar reservation, and context issuance, both may compile to `PinecoeneNormalFormV0_1`. Work/version identity is not derived from semantic content. Record kind and governed-policy hash remain visible or exactly bound in every downstream projection.

Identity issuance is acyclic. `ArtifactIdentityProposalV0_1` binds the exact record, compiler/conformation target, and requested origin but contains no assigned work/version IDs. Any required fork or Successor authority binds that proposal hash. A separate `ArtifactRegistrationAuthorityReceiptV0_1` authorizes issuing the new identity. The registrar then atomically assigns IDs in `ArtifactIdentityReservationV0_1` and issues an attested `ArtifactIdentityContextV0_1` bound to both authority layers. A Successor normal form is compiled through the ordinary record + context + matching compiler profile + matching conformation profile path before a `SuccessorLinkV0_1` can exist.

### 2.3 Recipient projection

`TraceLinkedProjectionV0_1` is compiled from the permitted semantic subgraph under one exact operator and grant. It is not a filtered owner scene.

Forbidden content is absent from recipient bytes and consequences.

---

## 3. Standing amendment

Lifecycle standing and provenance kind are orthogonal.

Candidate state may contain `proposed_open`; canonical `OPEN` enters an admitted record only through an authorized `leave_open` decision. A fixture may simulate that mechanics while retaining fixture standing.

These remain distinct:

```text
absent
candidate
proposed_open
admitted
open
rejected
withheld_from_record
admitted_private
unknown
```

`withheld_from_record` is not `admitted_private`. `not_supplied` is not `OPEN`. Rejection is not absence from the upstream decision ledger, but it has zero normal-form and recipient influence.

---

## 4. Geometry and conformation amendment

Candidate geometry is an attributed proposal supplied by a versioned upstream/fixture adapter. Pinecœne validates and renders it but never chooses or promotes it.

An admitted/fixture normal form compiles under one exact conformation profile. The profile maps included semantic roles to renderer-independent structure without reading source or inventing relations. Changing the profile creates a new immutable artifact version and normal-form identity; an authorized same-work continuation may preserve only the stable work ID.

The following separations are normative:

```text
semantic data
≠ candidate geometry proposal
≠ conformation profile
≠ Structure / Anatomy
≠ Expression
≠ Aperture
```

A complete reference geometry cannot fill missing semantic material.

---

## 5. Expression amendment

Expression owns form, material, spatial arrangement, camera, motion, interaction, typography, unfolding, sound, and recipient presentation.

Expression bindings are:

- `semantic_direct`;
- `interpretive_derived`;
- `ornamental`.

Expression may intensify understanding but cannot change semantic identity, entities, relations, standing, OPEN, permissions, provenance, admission history, or disclosure ceilings.

Changing Expression changes Expression and affected package identities, never semantic or normal-form identity.

---

## 6. Projection and recipient amendment

`ProjectionOperatorV0_1` records authored intent. `ApertureGrantV0_1` records effective authority. They remain separate.

Contact, resolution, permissions, seat, identity, semantic disclosure, provenance, time, scene, and assets are independent axes. R0–R5 may be presets but never replace the explicit grant.

Recipient compilation is ordered:

```text
permitted semantic subgraph
→ safe Structure
→ safe Anatomy
→ safe transitions
→ permitted Expression bindings/assets
→ recipient identity projection
→ exact package
```

Owner-private `ProjectionBindingReceiptV0_1` and recipient-safe `TraceLinkedProjectionV0_1` are separate objects.

The projection source is a closed `structure | expression | both` union. Structure-only projections forbid Expression fields. Operator and grant bind the exact Structure/Anatomy/transition/Expression identities used, and the grant independently declares effective scene and time.

---

## 7. Return and Successor amendment

A Return is immutable and attaches externally. `ReturnAttachmentReceiptV0_1` binds the package, owner-private projection binding, exact predecessor, and Return so cross-artifact docking fails. Disposition is a separate immutable object. The predecessor remains byte-identical.

A Successor requires a new admitted or explicitly fixture-authored record, a new work identity, and exact `succeeds` authority.

Unlike v0.7’s narrower demo limitation, an authored fixture may prove Successor mechanics. It remains visibly synthetic and proves no real-world Return, admission, or acceptance.

---

## 8. Reclassification of v0.7 material

The following v0.7 subjects remain useful as **upstream ecosystem context or imported provenance**, not Pinecœne-owned reconstruction behaviour:

- Source Projection Manifests;
- Reader configuration and runs;
- beam provenance and independence;
- tomography;
- candidate reconstruction;
- source-author testimony;
- projection realizability evaluation;
- intended/as-built reconstruction residuals;
- case qualification and bounded-question design.

Pinecœne may display a validated, permitted projection of those records. It does not produce them unless acting through an explicitly separate upstream tool or fixture-author role.

The following v0.7 laws remain downstream Pinecœne laws:

- admitted-record-only deterministic compilation;
- renderer-independent normal form;
- item-level OPEN and exclusion;
- earned materiality;
- rest-first rendering;
- independent projection axes;
- minimum sufficient Aperture as candidate guidance;
- exact Preview/Witness package parity;
- Locket as downstream vessel;
- immutable Return and separate disposition;
- predecessor invariance and new Successor identity;
- Passport and conformance non-effects;
- accessibility and fail-closed recipient privacy.

---

## 9. First implementation sequence

V0.8 replaces the owner-supplied real-case reconstruction sequence with a synthetic three-state Instrument Demonstrator:

```text
fixture ReadableCaseProjection
→ candidate renderer
→ fixture-authored admitted-state record
→ deterministic normal form
→ Structure + Anatomy
→ two materially different Expressions
→ two different Aperture grants
→ exact recipient package
→ Locket / Encounter
→ immutable fixture Return
→ separately dispositioned synthetic Successor
```

The demonstrator proves Pinecœne mechanics. It does not wait for a live Œdit integration or claim real admission.

---

## 10. Required v0.8 acceptance tests

- candidate schemas cannot express Solid or admitted identity;
- reject/move Q updates every declared geometry dependency;
- explicit OPEN remains visibly and structurally open;
- missing semantics fail closed or render absent without invented completion;
- same admitted/fixture record, artifact identity context, conformation profile, and compiler profile produce the same normal form;
- Expression changes appearance but not semantic or normal-form hashes;
- recipient packages are compiled from permitted semantics before geometry;
- forbidden material has zero byte, DOM, accessibility, asset, timing, and hash influence;
- Preview and Witness consume identical package bytes;
- unknown or mismatched packages fail closed;
- Return attachment leaves predecessor bytes unchanged;
- fixture Successor receives a new identity and retains synthetic standing;
- a second valid fixture requires no React, Lit, or Three.js component rewrite.

---

## 11. Non-goals

V0.8 does not require:

- raw document upload;
- source reading inside Pinecœne;
- live model use;
- live Œdit integration;
- automatic admission or geometry selection;
- accounts or hosted private custody;
- remote delivery or cross-device Return;
- public case publication;
- a universal semantic or geometry ontology;
- production route replacement.

---

## 12. OPEN decisions

- exact primitive vocabulary;
- candidate geometry dependency schema;
- conformation-profile selection receipt;
- exact cross-repository schema package;
- exact admission receipt projection;
- seat and authority reference vocabulary;
- canonical numeric/geometry profile;
- first real Œdit-generated fixture;
- hosted custody and production architecture.

---

*Passport — `LKN-SPEC-PINECOENE-SYSTEM-001 · v0.8 · CURRENT INTERNAL DIRECTION · CANDIDATE · UNSEALED`. Runtime, source-processing, admission, implementation, deployment, publication, acceptance, release, and Seal effects: none.*
