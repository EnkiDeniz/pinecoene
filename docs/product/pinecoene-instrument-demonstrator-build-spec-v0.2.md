# Pinecœne Instrument Demonstrator Build Specification v0.2

| Field | Value |
| --- | --- |
| Document ID | `LKN-PCN-DEMO-BUILD-002` |
| Version | `0.2` |
| Date | 28 August 2026 |
| Standing | `CANDIDATE INTERNAL BUILD SPEC · UNSEALED` |
| Product authority | `pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md` |
| System authority | `Pinecœne System Specification v0.8.md` |
| Replaces | `pinecoene-internal-demo-product-spec-v0.1.md` for the immediate demonstrator scope |
| Runtime effect | None |
| Build authority | None; Deniz must separately approve implementation |

This is the narrowed executable target for the next Pinecœne build. It assumes no prior knowledge of the historical Curated Studio but relies on the full product explanation in the governing product document.

---

## 1. Outcome

Build one strictly local internal demonstrator that proves Pinecœne can consume validated structured data and truthfully operate three artifact states:

1. pre-admission readable candidate;
2. fixture-authored admitted-state Fold;
3. recipient-safe trace-linked projection.

The demonstrator also proves Expression, Aperture, immutable Return, and synthetic Successor behaviour without a live Œdit connection.

Success means a second valid fixture produces a different Pinecœne by changing JSON and assets only—not application components.

---

## 2. Scope

### Included

- versioned JSON Schemas and validators;
- canonical JSON and hash profiles;
- one synthetic four-point fixture family;
- exact candidate geometry dependencies;
- fixture-authored normal-form compilation;
- renderer-neutral Structure and separate Anatomy;
- neutral and Christmas Tree Expressions;
- explicit ProjectionOperator and ApertureGrant;
- recipient-safe package compilation from the permitted semantic subgraph;
- exact Preview/Witness parity;
- local Locket/Encounter;
- immutable local Return;
- separate disposition and synthetic Successor identity;
- Passport, lineage, standing, and limitations;
- accessible SVG/DOM or poster fallback;
- local-only repository and export/import;
- legacy fixture adapters used only as calibration.

### Excluded

- raw source reading;
- model calls;
- live Œdit connection;
- observed human admission;
- accounts or hosted private storage;
- remote delivery;
- public publication;
- production route migration;
- arbitrary upload;
- automatic geometry selection;
- universal ontology.

---

## 3. Required contract variants

The build implements these wire contracts as closed discriminated schemas:

```text
ReadableCaseProjectionV0_1
AuthoredFixtureRecordV0_1
AdmittedRecordV0_1
ArtifactIdentityProposalV0_1
ArtifactIdentityReservationV0_1
ArtifactRegistrationAuthorityReceiptV0_1
ArtifactIdentityContextV0_1
GovernedPolicyProjectionV0_1
PinecoeneNormalFormV0_1
StructureProjectionV0_1
AnatomyProjectionV0_1
TransitionProjectionV0_1
ExpressionVersionV0_1
ExpressionAssetManifestV0_1
CandidatePlayerProjectionV0_1
CorePlayerProjectionV0_1
ExpressionPlayerProjectionV0_1
RecipientPlayerProjectionV0_1
ProjectionOperatorV0_1
ApertureGrantV0_1
ProjectionBindingReceiptV0_1
TraceLinkedProjectionV0_1
EncounterPackageCandidateV0_1
OfferingAuthorityReceiptV0_1
EncounterPackageV0_1
ReturnProjectionV0_1
ReturnAttachmentReceiptV0_1
ReturnDispositionV0_1
SuccessorAuthorityReceiptV0_1
SuccessorLinkV0_1
PinecoenePassportV0_1
```

The proposed build implements and tests `AdmittedRecordV0_1` as the future upstream seam, but the internal fixture journey uses `AuthoredFixtureRecordV0_1` and never fabricates a human Admission receipt.

Every schema declares required and forbidden fields. Candidate, Fold, and recipient states cannot be created by changing one `state` flag on a shared owner object.

Every schema also declares a non-recursive hash preimage. `contentHash` and any content-derived ID are excluded while their digest is computed; an optional separate serialized-artifact hash covers the exact final bytes.

---

## 4. Canonical fixture set

Freeze these exact byte-addressed fixtures before UI implementation:

### 4.1 Candidate fixture

`demo-fourth-point-readable-candidate.v0.1.json`

Contains:

- base points `A`, `B`, and `C`;
- alternatives `Q1` and `Q2`;
- candidate relations and faces bound to each Q;
- one alternative group declaring Q exclusivity;
- six declared boundary frames;
- at least one pressure relation;
- one contradiction;
- one `proposed_open` relation;
- source-safe authored fixture references;
- two candidate geometry proposals or one proposal containing both alternatives;
- no `pinecoeneId`, admission receipt, or Solid eligibility.

### 4.2 Fixture-authored record

`demo-fourth-point-authored-record.v0.1.json`

Contains:

- the selected fixture entities and relations;
- `Q2` included;
- `Q1` absent from the compiler input;
- one explicit OPEN relation;
- one owner-private item for Aperture testing;
- exact fixture-authorship receipt;
- exact conformation profile;
- exact rights/disclosure ceilings, including one owner-private item;
- permanent synthetic standing.

Identity is stored separately, never embedded into the closed fixture-record schema:

- `demo-fourth-point-artifact-identity-proposal.v0.1.json` binds the exact fixture-record hash, compiler/conformation target, and initial origin;
- `demo-fourth-point-artifact-registration-authority.v0.1.json` separately authorizes identity issuance for that proposal;
- `demo-fourth-point-artifact-identity-reservation.v0.1.json` binds the assigned IDs, proposal, compiler target, and fixture registration authority;
- `demo-fourth-point-artifact-identity-context.v0.1.json` binds the consumed reservation and exact fixture record;
- `demo-fourth-point-bundle.v0.1.json` is a non-semantic fixture manifest that references each object by schema ID, object ID, and content hash.

The authored fixture record remains valid independently of the bundle and contains no registrar fields.

### 4.3 Wide recipient package

`demo-fourth-point-team-r3.v0.1.json`

Contains:

- permitted Structure;
- permitted Anatomy;
- selected Expression projection;
- inspect and Return capabilities;
- no owner-private binding receipt;
- no excluded owner-private item or consequences.

### 4.4 Narrow recipient package

`demo-fourth-point-public-r1.v0.1.json`

Contains a materially smaller permitted semantic subgraph, safe geometry, no private Anatomy, fewer/no assets, and no Return capability.

### 4.5 Return and Successor fixtures

- one immutable Return bound to the wide package;
- one separate disposition;
- one new authored-fixture record;
- one new Pinecœne identity;
- one exact `succeeds` link;
- unchanged predecessor vectors.

---

## 5. Registrar, compiler, and Player-adapter stages

Identity issuance is proposal-first. Creating a proposal does not assign an identity:

```ts
proposeArtifactIdentity(record, requestedOrigin, compilerTarget)
  -> ArtifactIdentityProposalV0_1

reserveAndIssueArtifactIdentity(
  record,
  identityProposal,
  registrationAuthorityReceipt,
  originAuthorityReceipt?
)
  -> {
    identityReservation: ArtifactIdentityReservationV0_1,
    identityContext: ArtifactIdentityContextV0_1
  }
```

`registrationAuthorityReceipt` is always an `ArtifactRegistrationAuthorityReceiptV0_1`. For successor origin, `originAuthorityReceipt` is additionally a `SuccessorAuthorityReceiptV0_1` over the exact proposal hash. The two acts never substitute for one another even when performed by the same human. The stateful registrar atomically validates record kind, proposal, compiler target, both authorities, namespace, collision, and lineage; assigns IDs; consumes the reservation once; and issues a self-contained attested context. No receipt points forward to an unissued identity.

The remaining compiler boundaries are pure:

```ts
validateReadableCaseProjection(bytes)
  -> ReadableCaseProjectionV0_1

compileCandidateProjection(candidate)
  -> CandidatePlayerProjectionV0_1

validateFixtureOrAdmittedRecord(bytes)
  -> AuthoredFixtureRecordV0_1 | AdmittedRecordV0_1

compileNormalForm(record, identityContext, compilerProfile, conformationProfile)
  -> PinecoeneNormalFormV0_1

// The output embeds a GovernedPolicyProjectionV0_1 derived only from record.

compileStructure(normalForm, structureProfile)
  -> StructureProjectionV0_1

compileAnatomy(normalForm, structure, anatomyProfile)
  -> AnatomyProjectionV0_1

compileTransition(normalForm, transitionProfile)
  -> TransitionProjectionV0_1

compileCorePlayerProjection(normalForm, structure, anatomy, transition?)
  -> CorePlayerProjectionV0_1

compileExpressionAssetManifest(
  artifactVersionRef,
  structureProjectionRef,
  authorizedAssetDescriptors,
  exactAssetBytes
)
  -> ExpressionAssetManifestV0_1

validateExpressionVersion(expressionBytes, assetManifest)
  -> ExpressionVersionV0_1

compileExpressionPlayerProjection(structure, expression, assetManifest, anatomy?, transition?)
  -> ExpressionPlayerProjectionV0_1

RecipientSceneInput =
  { kind: "structure", structure: StructureProjectionV0_1, anatomy?: AnatomyProjectionV0_1, transition?: TransitionProjectionV0_1 }
  | { kind: "expression", structure: StructureProjectionV0_1, expression: ExpressionVersionV0_1, assetManifest: ExpressionAssetManifestV0_1, anatomy?: AnatomyProjectionV0_1, transition?: TransitionProjectionV0_1 }
  | { kind: "both", structure: StructureProjectionV0_1, expression: ExpressionVersionV0_1, assetManifest: ExpressionAssetManifestV0_1, anatomy?: AnatomyProjectionV0_1, transition?: TransitionProjectionV0_1 }

compileRecipientProjectionCandidate(
  normalForm,
  sceneInput: RecipientSceneInput,
  operator,
  apertureGrant
)
  -> {
    recipientProjection: TraceLinkedProjectionV0_1,
    packageCandidate: EncounterPackageCandidateV0_1
  }

finalizeEncounterPackage(packageCandidate, offeringAuthorityReceipt)
  -> EncounterPackageV0_1

validateEncounterPackage(exactPackageBytes)
  -> EncounterPackageV0_1

compileRecipientPlayerProjection(validatedEncounterPackage)
  -> RecipientPlayerProjectionV0_1

bindProjection(
  normalForm,
  sceneInput,
  operator,
  apertureGrant,
  recipientProjection,
  encounterPackage
)
  -> ProjectionBindingReceiptV0_1

attachReturn(projectionBinding, encounterPackage, returnInput)
  -> {
    returnProjection: ReturnProjectionV0_1,
    attachmentReceipt: ReturnAttachmentReceiptV0_1
  }

createSuccessorLink(
  predecessor,
  returnProjection,
  attachmentReceipt,
  disposition,
  newFixtureRecord,
  successorIdentityProposal,
  successorIdentityReservation,
  successorIdentityContext,
  successorNormalForm,
  successorAuthorityReceipt
) -> SuccessorLinkV0_1
```

The registrar is a repository transaction, not a semantic compiler. `ArtifactIdentityContextV0_1` includes a closed registrar attestation over the verified record/proposal/reservation/authority/origin/compiler-target chain. The pure normal-form compiler validates that attestation under the declared trust profile plus the exact record and profile matches; it does not fetch or re-adjudicate the issuance objects. No pure stage reads IndexedDB, route state, source documents, network data, the clock, or a renderer.

`compileNormalForm` derives and embeds the closed `GovernedPolicyProjectionV0_1`—permitted provenance references plus exact rights/disclosure ceilings—from the validated record. Its hash enters `normalFormHash`; Anatomy and recipient compilation require no ambient record lookup.

`compileTransition` is deterministic from the normal form and exact profile. `compileExpressionAssetManifest` hashes and rights-checks exact local bytes before any Expression projection exists. `sceneInput` is a closed typed union. Structure-only input forbids Expression and asset fields; `expression` and `both` require one exact Expression version and matching asset manifest. Operator and grant bind the exact `sceneInput` hash, and compilation rejects any mismatch.

The core Player adapter consumes only normal-form-derived objects. The recipient Player adapter consumes only a fully validated Encounter package; it has no owner repository, normal form, binding receipt, or fallback fixture input.

Offering authorization is ordered and non-recursive: compile an exact package candidate and candidate hash; obtain a human authority receipt over that hash; assemble the final package with the exact receipt reference; compute the final package hash under the schema’s self-hash exclusion law; then create the owner-private projection binding receipt.

Successor creation uses the same ordinary compiler path as every other fixture Fold:

```text
validate new fixture record
→ create identity proposal bound to predecessor/Return/attachment/disposition
→ obtain SuccessorAuthorityReceipt over proposal hash
→ separately obtain ArtifactRegistrationAuthorityReceipt over proposal hash
→ registrar reserves and issues successor identity context bound to both receipts and compiler target
→ compileNormalForm(new record, issued context, compiler profile, conformation profile)
→ create SuccessorLink from exact compiled identities and receipts
```

`createSuccessorLink` never emits, mutates, or infers a normal form.

---

## 6. Candidate dependency behaviour

Every candidate geometry feature declares its semantic and geometry dependencies.

Required operations:

- toggle `Q1` visibility without promoting it;
- compare `Q1` and `Q2`;
- reject a Q in an explicitly simulated review overlay and watch every dependent feature collapse;
- move Q through a bounded fixture control and recompute every dependency;
- preserve the source candidate object unchanged while the UI creates a local operation projection;
- display `proposed_open` separately from admitted/fixture OPEN;
- prevent Solid material in all candidate states.

The operation overlay is not an Admission ledger and cannot export an `AdmittedRecord`.

---

## 7. Player modes

One canonical Player dispatches exact variants:

```text
candidate
fold
expression
recipient
```

### Candidate

Ghosts, scaffolds, alternatives, pressure, contradiction, and incomplete features. Candidate standing is always visible.

### Fold

Only compiled fixture/admitted Structure and OPEN. Rest-first. Every feature selects exact Anatomy.

### Expression

Same Structure with a separately hashed scene graph. The interface can compare neutral and Christmas Tree Expressions while showing invariant hashes.

### Recipient

Only validated recipient-safe bytes. No owner repository, normal form, binding receipt, or fallback fixture is available to this mode.

---

## 8. Internal information architecture

Minimum surfaces:

- `/demo` — introduction and guided entry;
- `/demo/cases/[caseId]/candidate` — readable candidate;
- `/demo/cases/[caseId]/fold` — Structure, Anatomy, and Time;
- `/demo/cases/[caseId]/expression` — Expression comparison/editor;
- `/demo/cases/[caseId]/project` — operator, Aperture, byte comparison, exact Preview;
- `/demo/w/[packageId]` — Locket and recipient Encounter;
- `/demo/cases/[caseId]/returns` — Return, disposition, synthetic Successor;
- `/demo/passport/[artifactVersionId]` — identity, lineage, limits, and conformance.

Route naming may change during keyframing. State isolation and local-only build gating may not.

---

## 9. Truthful teaching sequence

The interface teaches through action:

1. turn and inspect competing candidate structures;
2. remove/move a candidate dependency;
3. cross into a separately serialized fixture Fold;
4. inspect the OPEN gap;
5. switch Expression and compare hashes;
6. narrow Aperture and inspect the package diff;
7. open the exact package in Witness;
8. create a local Return;
9. prove predecessor bytes unchanged;
10. create a separately labelled synthetic Successor.

Theory and vocabulary appear after the operation that gives them meaning.

---

## 10. Persistence and custody

- Use a new `pinecoene-instrument-demo-v0` local database or repository namespace.
- Keep historical showcase databases untouched.
- Validate complete imports before any write.
- Store immutable objects by typed ID and full hash.
- Store Library ordering and convenience metadata separately.
- Reject collisions, unsupported schemas, and mismatched references atomically.
- Export owner archives and recipient packages through different serializers.
- Never put private/demo-only fixture registries or assets into an authorized public build profile.

---

## 11. Visual direction

The default candidate/Fold instrument is sparse and exact:

- charcoal/black field;
- restrained neutral structure;
- candidate ghost and distinct `proposed_open` treatment;
- admitted/fixture structural material distinct without relying on colour alone;
- evidence colour only where the fixture declares an evidence role;
- no ambient galaxy fog or unbound particles;
- visible standing, Passport, and limitations;
- full-stage spatial object with task-focused drawers/sheets.

The Christmas Tree Expression should be materially and emotionally different while keeping every semantic and privacy invariant.

---

## 12. Acceptance gates

### Gate A — Contract freeze

- valid/invalid fixtures reviewed;
- exact hashes frozen;
- candidate geometry dependencies reviewed;
- synthetic-standing language approved;
- OPEN and absence vocabulary approved;
- no fixture-specific core fields.

### Gate B — Core compiler

- deterministic vectors pass across supported runtimes;
- candidate cannot become Solid;
- rejected/withheld material has zero influence;
- second fixture compiles without component edits.

### Gate C — Player and Expression

- spatial/text selection parity;
- accessible fallback parity;
- two Expressions are materially different;
- normal-form hash remains invariant.

### Gate D — Aperture

- wide and narrow recipient packages are structurally different;
- final package validates only against the exact Offering receipt over its package-candidate hash;
- forbidden material has zero recipient-byte influence;
- Preview/Witness package bytes are identical;
- unknown/corrupt/mismatched package fails closed.

### Gate E — Return and Successor

- Return binds exact Encounter and capability;
- Return attachment proves package → owner binding → predecessor closure;
- predecessor remains byte-identical;
- disposition is separate;
- Successor receives new identity and synthetic standing;
- Successor relation carries separate exact relationship authority;
- cross-artifact Return use is impossible.

### Gate F — Human acceptance

- at least four of five internal first-time users explain the product boundary and three states without coaching;
- no reviewer mistakes fixture events for real admission or delivery;
- the team agrees the seam can accept future Œdit data without a renderer rebuild.

---

## 13. Verification commands and evidence

The implementation plan must add exact commands after branch/baseline selection. At minimum it will run:

- lint;
- strict TypeScript;
- contract/schema tests;
- golden and invariance tests;
- full build;
- Chromium, desktop WebKit, and mobile WebKit journeys;
- keyboard-only, reduced-motion, storage-denied, delayed-JavaScript, and WebGL-failure tests;
- equivalent-viewport screenshots;
- package/DOM/asset privacy inspection;
- request-log audit proving no unapproved external calls.

Every acceptance record binds exact Git SHA, fixture hashes, schema/compiler versions, environment, and known exceptions.

---

## 14. Delivery order

1. Freeze contracts, fixture bytes, and keyframes.
2. Implement validators, canonicalization, and IDs.
3. Implement candidate and normal-form compilers.
4. Adapt outputs into the existing renderer-neutral scene/player foundation.
5. Add Candidate/Fold/Anatomy modes.
6. Add Expression graph and two Expressions.
7. Add ProjectionOperator, Aperture, and recipient-safe compiler.
8. Add exact Preview, Locket, and Witness.
9. Add immutable Return and synthetic Successor.
10. Run automated and human acceptance locally.
11. Only after acceptance, decide whether to build Pinecœne of Pinecœne or begin the Œdit file seam.

No production deployment is implied.

---

## 15. Definition of done

The internal demonstrator is done when the fixture can be replaced with another valid case package and the product still:

- renders candidate uncertainty truthfully;
- compiles a deterministic fixture/admitted normal form;
- exposes exact Anatomy;
- supports radically different Expression;
- compiles genuinely different recipient packages;
- preserves structural privacy;
- keeps Returns external and predecessors immutable;
- creates a new Successor identity;
- and explains every simulation and limitation.

---

*Passport — `LKN-PCN-DEMO-BUILD-002 · v0.2 · CANDIDATE INTERNAL BUILD SPEC · UNSEALED`. Runtime, implementation, deployment, publication, acceptance, release, and Seal effects: none.*
