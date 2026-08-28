# Pinecœne Internal Demo Product Specification v0.1

> **AMENDED FOR CURRENT DIRECTION — 28 August 2026.** This broad v0.1 predecessor correctly established much of the Œdit boundary, normal-form/Expression separation, and local-demo honesty law. It lacks a first-class pre-admission `ReadableCaseProjection` state and places named-human semantic disposition inside the Œdit box. For the current product boundary and narrower demonstrator use [Pinecœne Product, Œdit Interface, and Instrument Demonstrator v0.1](./pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md) and [Instrument Demonstrator Build Specification v0.2](./pinecoene-instrument-demonstrator-build-spec-v0.2.md). This file remains valuable design lineage where it does not conflict with those successors.

**Structure · Anatomy · Expression · Encounter**

| Field | Value |
| --- | --- |
| Document ID | `LKN-PCN-PRODUCT-DEMO-001` |
| Version | `0.1` |
| Date | 28 August 2026 |
| Standing | `CANDIDATE INTERNAL DEMO BUILD SPEC · UNSEALED` |
| Audience | Pinecœne product, design, engineering, and invited internal reviewers |
| Target product profile | Strictly local/non-hosted by default, prepared fixtures, no production capability claims |
| Approval authority | Deniz; this document records no approval, acceptance, build authorization, or release authorization |

---

## 0. Executive proposal

If accepted, this specification would reset Pinecœne from being defined primarily as a public story, a one-off visual experiment, or a weaker source-reading tool beside Œdit.

The proposed product is the durable home for addressable thought-objects of any purpose. A Pinecœne may originate in a business document, a launch plan, a scientific argument, a conversation, a promise, a poem, a memory, or a work of art. A person can:

1. keep it in a Library;
2. understand its exact structure through Anatomy;
3. experience how it became through Time;
4. author one or more expressive forms around that structure;
5. share a bounded Encounter without surrendering identity, provenance, or lineage;
6. receive a response without silently rewriting the original work; and
7. create a new version, fork, or Successor when the governing formation record genuinely changes and the appropriate authority records the relationship.

The concise human promise is:

> **Every Pinecœne has a structure. What it becomes is yours.**

The target product must therefore separate four things that our earlier prototypes often fused:

```text
STRUCTURE  → what the governing formation record lawfully supports
ANATOMY    → how the visible form corresponds to that record
EXPRESSION → what an author creates around the structure
ENCOUNTER  → what a particular audience is permitted to meet
```

The neutral Structure and Anatomy experience will learn from Papillœn: exact, sparse, deterministic, inspectable, and free of decorative evidence. Pinecœne then adds an Expression layer in which the same structure may become a Christmas tree, a memorial, a miniature world, a field of photographs, a piece of music, or another authored work—provided the art never changes what the underlying record claims.

Œdit is the preferred upstream formation instrument. It provides source custody and the workbench for reading, alternatives, uncertainty, and named-human admission receipts. Pinecœne receives a validated formation envelope and provides durable artifact identity, normal form, visualization, expression, passage, and lineage. Named humans retain admission, Offering, Return-disposition, acceptance, publication, and release authority. Pinecœne remains usable without an Œdit account through prepared fixtures, conformant imports, and offline developer/curator-authored fixture packages; an end-user manual formation path is deferred. It must not rebuild a pretend Œdit inside Pinecœne.

The target is a browser-local internal demo. No demo build or release is recorded here. If built, it may be incomplete and visually exploratory; it may not be ambiguous about what is real, synthetic, local, simulated, private, selected, or deferred.

---

## 1. Purpose of this specification

This document gives the team a buildable product target before every concept is fully accurate or every upstream contract exists. Its purpose is to let us learn by operating real instruments without making architectural choices that will force a second reset.

### 1.1 Proposed architectural freeze

The following are expensive seams proposed for freeze if Deniz accepts this specification:

- the boundary between source formation and Pinecœne;
- immutable artifact identity and additive versioning;
- the distinction between normal form and its renderings;
- the separation of Structure, Anatomy, Expression, and Encounter;
- the rule that Expression cannot change semantic structure or standing;
- the rule that Encounter cannot rewrite the work;
- content-addressed packages and explicit schema versions;
- source, disclosure, and authority receipts at every serialized boundary;
- separate owner-private, public, and recipient serialization/disclosure zones, with real security boundaries required when hosted;
- exact Preview/Witness package parity;
- additive legacy migration and fail-closed unknown schemas;
- a persistence-independent repository interface.

### 1.2 What remains deliberately flexible

The following can evolve through the demo without invalidating the architecture:

- final product copy and terminology presented to ordinary visitors;
- the exact visual treatment of any specimen;
- how many Expression templates ship;
- individual specimen topology and curation;
- control placement, transitions, and navigation choreography;
- whether a particular view is WebGL, SVG, CSS, or a lawful poster;
- the final hosted database, identity provider, and asset service;
- field names inside candidate `V0_1Alpha1` contracts before their Phase 3, 4, or 5 domain-specific qualification gate, or the Phase 6 source-manifest preflight;
- which prepared specimen later becomes public;
- the eventual commercial model.

### 1.3 Accuracy and standing policy for the internal demo

“It does not need to be accurate” means the demo may use authored and synthetic records to test the medium. It does **not** mean the interface may make false claims.

Every visible item carries two independent classifications.

**Epistemic type** answers what kind of knowledge it is:

| Type | Meaning |
| --- | --- |
| `REPOSITORY FACT` | Exact Git object, parent relation, path, or byte identity |
| `DOCUMENT-STATED` | A claim made by an exact document; not automatically accepted or true |
| `BUILD EVIDENCE` | A recorded test, screenshot, receipt, or build observation within its stated environment and date |
| `HUMAN TESTIMONY` | Attributable human account with its own consent, custody, and scope |
| `HUMAN-ADMITTED INTERPRETATION` | An interpretation a named authorized human explicitly admitted for this artifact |
| `CANDIDATE INFERENCE` | A proposed interpretation not admitted as structure or history |
| `CONTRADICTION / RESIDUAL` | An exact incompatibility or unresolved residual between supplied records |
| `AUTHORED / SYNTHETIC` | Intentionally constructed material used to test the medium |

**Lifecycle standing** answers where it stands:

| Standing | Meaning |
| --- | --- |
| `COMMIT-RECORDED` | Present in an exact Git commit |
| `IMPLEMENTATION-RECORDED` | Implemented at an exact revision; not a present-live claim |
| `RELEASE-RECORDED` | A release receipt exists for an exact dated deployment |
| `GOVERNED / ADMITTED` | A named authority receipt supports the declared admitted scope |
| `CANDIDATE · UNSEALED` | Proposed or returned material without acceptance |
| `OPEN` | Explicitly left unresolved by an authorized disposition |
| `DEFERRED` | Intentionally outside the current target |
| `NOT SUPPLIED` | Required or optional source is absent from the declared package |
| `EXCLUDED` | Deliberately outside the declared source or disclosure scope |
| `LEGACY` | Preserved historical format not promoted to the new contract |

Items may also carry explicit source/state qualifiers: `CANDIDATE · UNCOMMITTED` for an observed file outside Git history, `NOT EVIDENCED` for an explanation without attributable support inside the declared corpus, and `REVALIDATION REQUIRED` when dated evidence cannot support a present-live claim. These qualifiers do not silently become OPEN or governed standing.

Hashing and schema validation prove identity and conformance, not governance. `GOVERNED / ADMITTED` requires a separate named-authority receipt. Authored studies are also labelled `AUTHORED STUDY` or `SYNTHETIC FIXTURE`; future interactions are labelled `PROPOSED`, `SIMULATED`, or `DEFERRED` and cannot impersonate live capability.

Visual polish never upgrades standing. A beautiful object can still be a synthetic study. A local browser action is not delivery, receipt, acceptance, revocation, publication, or cloud custody.

### 1.4 Scope and supersession

This is a new candidate product specification for the internal-demo target. It reframes earlier Pinecœne specifications where they make Pinecœne responsible for arbitrary-source reading or make one fixture geometry, one public Door, or one cosmic visual style universal.

It does not:

- erase earlier documents;
- alter the recorded Public Door V0.2 release; its present live state requires separate revalidation;
- promote historical fixtures into the new contract family;
- authorize source processing, chat export, fixture publication, application changes, deployment, or route migration;
- supersede human authority or any separately accepted constitutional contract.

Earlier artifacts remain lineage and calibration evidence. Any implementation begins from a separately verified repository/deployment baseline and an explicitly approved implementation plan.

---

## 2. Product thesis

### 2.1 A document is a projection, not the whole object

A sentence, word, concept, document, or launch plan is a projection of a richer interior. It chooses an order, an angle, a vocabulary, an audience, and a disclosure boundary. It hides alternatives, abandoned branches, uncertainty, provenance, and relationships that do not fit on the page.

Pinecœne preserves a bounded, admitted structural record derived from supplied projections; it does not claim to recover or store an inaccessible lived or conceptual interior. It keeps that record addressable while allowing lawful projections to travel.

The technical ladder is:

```text
SUPPLIED PROJECTIONS
        ↓ candidate formation
NAMED-HUMAN ADMISSION
        ↓
PINECŒNE NORMAL FORM
        ↓ deterministic projection
STRUCTURE + ANATOMY
        ↓ authored interpretation without semantic mutation
EXPRESSION
        ↓ purpose, audience, disclosure, and permission
ENCOUNTER / DOCUMENT / LOCKET / IMAGE / PERFORMANCE
```

The normal form may be n-dimensional in meaning. The 3D Pinecœne is a canonical spatial projection of it, not a claim that thought literally has only three dimensions. A document is a linear or two-dimensional projection. An Anatomy view, a board memo, an engineer specification, and a friend’s letter may all be different lawful projections of the same Pinecœne.

This distinction prevents a future architectural mistake: geometry is not the database, and the current renderer is not the ontology.

### 2.2 Purpose-neutral, not meaning-neutral

Pinecœne is purpose-neutral in the sense that the same product can hold:

- a business case;
- a product launch plan;
- a scientific argument;
- an agreement or promise;
- a creative process;
- a family memory;
- a relationship or emotional work;
- a conversation;
- a piece of art.

It is not meaning-neutral. Every admitted element retains identity, standing, relation, provenance, disclosure, and lineage. A personal Pinecœne may be playful; it may not let decoration masquerade as evidence. A business Pinecœne may look rigorous; it may not manufacture certainty.

### 2.3 A home, not only a viewer

The product is not complete if it only renders a beautiful Fold. Pinecœne must become the place where the artifact is:

- registered;
- versioned;
- stored;
- found;
- inspected;
- expressed;
- shared;
- returned to;
- succeeded;
- and remembered.

The Library, Player, Expression Studio, Encounter builder, Passport, and History are therefore one product, not unrelated pages.

### 2.4 The instrument must teach itself

The humans on the team have discussed many of these concepts as language but have not yet learned them by using stable instruments. The demo must teach through action:

> **Action first. Name second. Theory third.**

The user turns the object before reading a theorem. They select a visible part before learning the word Anatomy. They change an Expression and watch the structure hash remain fixed before reading the non-mutation law. They preview a bounded Encounter before learning the full aperture vocabulary.

---

## 3. Product promise and non-promises

### 3.1 Product promise

Pinecœne lets a person keep and share a thought-object without collapsing it into a single finished-looking document. It preserves enough structure and lineage to let another person see what the work rests on, while giving its author a genuine artistic medium for how the work appears and travels.

### 3.2 Internal-demo promise

In the internal demo, a teammate can:

- open a Library containing visibly different Pinecœnes;
- turn and inspect an object immediately;
- reveal its exact Anatomy;
- replay a deterministic Becoming;
- switch between structurally identical Expressions;
- make an expressive variation without altering normal form;
- import a prepared Œdit-shaped package;
- create an exact bounded share package;
- open it as a recipient through a Locket or direct Encounter;
- make a local response;
- understand that a changed record requires a Successor;
- explore a Pinecœne made from Pinecœne’s own selected build history.

### 3.3 Non-promises

The internal demo does not promise:

- that arbitrary text can be accurately read into a Pinecœne;
- that an AI has determined the truth;
- that Œdit is live-connected;
- that local objects are stored in a cloud account;
- that a share has been sent, delivered, received, accepted, or revoked;
- that browser-local deletion affects another device;
- that every semantic domain shares one universal geometry;
- that any generated artwork has evidentiary standing;
- that the project-history specimen is a complete history;
- that a polished fixture is a published Work.

---

## 4. Candidate internal-demo product model

### 4.1 Layer zero: formation record and normal form

Before the four presentation layers is an immutable semantic substrate: `PinecoeneNormalFormV0_1Alpha1`. A governed artifact derives from `AdmittedRecordV0_1Alpha1`. An internal calibration specimen may instead derive from `AuthoredFixtureRecordV0_1Alpha1`, whose synthetic/fixture standing survives into every projection and can never impersonate admission.

It contains the smallest provider-neutral representation needed to preserve:

- stable semantic identities;
- typed elements;
- typed relations, including direction where meaningful;
- regions, groups, or boundaries;
- temporal anchors where supported;
- standing and unresolved conditions;
- declared constraints;
- permitted provenance references;
- disclosure classes;
- predecessor and successor relationships;
- compilation profile and canonical hashes.

It must not contain renderer coordinates as semantic authority. Coordinates belong to a deterministic Structure projection.

### 4.2 Layer one: Structure

Structure is the deterministic, inspectable **semantic topology** derived from the normal form.

It answers:

- What exists in this governing formation record?
- What is related to what?
- Which relations are directed, bounded, weak, absent, or OPEN?
- Which groups or regions are meaningful?
- What changed through time?

Structure may be shown as a line instrument, a 3D form, a poster, or another renderer-neutral scene. Every visible structural feature must cite one or more semantic references. No ambient particle, line, glow, or animation may appear as structural evidence without a semantic referent.

### 4.3 Layer two: Anatomy

Anatomy is the exact correspondence between visible Structure and its permitted semantic meaning.

It answers:

- What is this point, edge, surface, interval, field, or gap?
- Which formation-record item supports it, and is that record admitted or fixture-authored?
- What is its standing?
- What is known, OPEN, withheld, or unavailable?
- Which source/provenance reference may this audience inspect?
- Why does it look or move this way?

Anatomy is not a second object. It is an inspectable view of the same Structure. Selecting a visible feature and selecting its textual row must resolve to the same canonical semantic identity.

### 4.4 Layer three: Expression

Expression is separately authored art around the Structure.

It may control:

- materials and palette;
- light and shadow;
- non-semantic atmosphere;
- typography and labels;
- images, photographs, textures, and illustrations;
- sound and silence;
- choreography and pacing;
- spatial metaphor;
- camera and composition;
- ritual or interaction framing.

An Expression has its own author, version, assets, rights, mappings, hashes, and permissions. Many Expressions may refer to one immutable artifact version.

An Expression also has its own `expressionSceneGraph`. It may introduce visual objects, groupings, spatial metaphors, paths, and compositions that do not exist in semantic topology. These are part of the artwork, not new claims in the governing formation record. The compiler keeps `semanticTopology` and `expressionSceneGraph` separately addressable even when rendered together.

Every Expression binding is explicitly typed as one of:

| Type | Meaning | Requirement |
| --- | --- | --- |
| `semantic_direct` | Directly represents an exact normal-form or Structure identity | Must preserve the referent, standing, and configured visual law |
| `interpretive_derived` | Authored metaphor derived from one or more exact identities | Must name its source identities, transformation rule, and interpretive status; it is not direct evidence |
| `ornamental` | Atmosphere or art with no claim-bearing role | Must be visibly inspectable as ornament and cannot appear in Anatomy as evidence |

An Expression may hide or soften a permitted feature for artistic reasons only when the Encounter compiler includes an equivalent permitted Structure/Anatomy path and discloses that the artwork suppresses it. It may not close an OPEN relation, turn a rejected item into a semantic node, or visually strengthen a weak relation beyond the declared mapping law.

Expression choreography may frame semantic transitions through camera, material, light, tempo, and sound. When presented as `Time` or `Becoming`, it cannot add, reorder, omit, or reverse semantic state transitions. A free artistic performance that does so is a separate Expression sequence and must not be labelled the artifact’s causal or recorded Becoming.

### 4.5 Layer four: Encounter

Encounter is the authored meeting between a Pinecœne and an audience.

It specifies:

- audience or recipient class;
- Address and dedication;
- selected scene source, discriminated as exact Structure-only or exact Expression/Both;
- contact dimension or aperture;
- resolution;
- timing and sequence;
- disclosure ceiling;
- inspection permissions;
- download, reuse, remix, and response permissions;
- expiry or local-use conditions when truthfully enforceable;
- Locket or direct-entry presentation;
- exact package identity.

Encounter permissions form a capability/disclosure lattice rather than one scalar ladder. The effective grant is the intersection of:

- permitted scene modes;
- permitted Anatomy material classes;
- permitted temporal views;
- permitted provenance/source classes;
- permitted asset classes;
- identity disclosure ceilings;
- actions such as inspect, download, respond, reuse, or remix;
- the artifact, Expression, rights, and audience ceilings.

Encounter does not change the artifact or Expression. It compiles a lawful projection through that intersection. Preview and recipient Witness must consume the same serialized package.

### 4.6 The five invariants

1. **Structure cannot add semantic material or standing.**
2. **Anatomy cannot expose beyond the effective disclosure ceiling.**
3. **Expression cannot change normal form, semantic topology, or standing.**
4. **Encounter cannot rewrite the work; it can only derive a lawful projection.**
5. **A changed formation record creates a new version, fork, or Successor under the explicit continuation law; `recordKind` and authority survive the change.**

These invariants are more important than any current component, route, renderer, or visual concept.

---

## 5. Papillœn as the basic visual instrument

### 5.1 What Pinecœne should learn from Papillœn

The default Structure/Anatomy profile should adapt Papillœn’s discipline:

- deep black field;
- bone or restrained neutral lines;
- exact graph-derived geometry;
- stable rest state;
- sparse labels;
- direct selection;
- a compact inspector and Passport;
- deterministic motion only when it explains change;
- visible conformance and boundaries;
- no ambient galaxy fog;
- no decorative evidence particles;
- no randomness that changes identity.

This profile is a neutral instrument. It is where a teammate learns to trust that the object has an inspectable structure rather than merely an attractive silhouette.

### 5.2 What Pinecœne must not copy

Papillœn’s current topology, domain-specific labels, and exact SVG composition are not the universal Pinecœne ontology. Pinecœne should reuse principles and, where technically sensible, low-level utilities—not force every artifact into Papillœn’s graph.

Papillœn becomes:

- one Library specimen;
- one conformance benchmark;
- the reference visual grammar for neutral Anatomy;
- proof that exact geometry can still feel like an instrument.

It does not become the only Expression or the public brand of every Pinecœne.

### 5.3 The composite Player

The Player has orthogonal state axes. It does not treat Anatomy, Time, and History as competing scene modes.

```text
scene      = STRUCTURE | EXPRESSION | BOTH
inspector  = ANATOMY_OFF | ANATOMY_ON
temporal   = REST | TIME
panel      = NONE | HISTORY | DETAILS
```

`STRUCTURE` shows the neutral exact instrument. `EXPRESSION` shows the authored work. `BOTH` composes them without conflating their identities. Anatomy is the synchronized inspection layer available wherever the Encounter grant permits it. Time changes temporal state without replacing the scene; History and Details are panels.

The Structure hash must remain visible or inspectable across all scene states. Changing Expression changes the Expression hash, not the normal-form or Structure hash.

---

## 6. Art without semantic corruption

### 6.1 The creative proposition

Pinecœne should not make every idea look like a diagram. The system gives an author a reliable skeleton. The author decides what kind of world grows around it.

This is not “skinning” in the superficial sense. A strong Expression can be a serious creative work. It simply operates under a clear non-mutation contract.

### 6.2 Christmas Tree Expression example

A family gathering, launch, promise, or project could be expressed as a Christmas tree:

| Expression element | Possible structural binding | Standing rule |
| --- | --- | --- |
| Trunk | shared purpose, governing axis, or principal continuity | Usually `interpretive_derived`; source identities and metaphor rule are inspectable |
| Branches | formation-record relations, workstreams, groups, or dependent commitments | `semantic_direct` only when each branch directly represents exact relation IDs; otherwise `interpretive_derived` |
| Lights | events, milestones, arrivals, or evidence points | Direct or derived binding required; a light cannot imply an event absent from the record |
| Ornaments | people, gifts, commitments, memories, or outputs | Direct ornaments cite elements; metaphorical ornaments are derived; decorative ornaments are ornamental |
| Photographs | permitted asset references attached to people or events | Direct or derived binding plus asset rights and disclosure are required |
| Gift boxes | outputs, promises, deliverables, or received contributions | Direct or derived; must not imply fulfilment when standing is only proposed |
| Star | formation-record outcome, shared aspiration, or pure ornament | Direct, derived, or ornamental must be declared; an unresolved outcome cannot be presented as achieved |
| Missing or unlit branch | OPEN relation or declared absence | Direct/derived mapping must preserve OPEN visibly in Structure, Anatomy, and Both modes |
| Snow, room, music | atmosphere | Always ornamental unless separately bound |

The user can switch to Anatomy and see the same underlying structure without the tree metaphor. That transition is the central product demonstration: the art is free, but it is not free to lie about the object.

### 6.3 Expression authorship and revision

For the internal demo:

- an artifact may have zero, one, or many Expressions;
- every Expression is immutable by version;
- editing creates a new `ExpressionVersionV0_1Alpha1`;
- a Library item may select a preferred Expression without changing artifact identity;
- an owner-private Encounter binding pins an exact Structure projection and, only when its scene source uses Expression or Both, an exact Expression version; the recipient package receives only the granted safe projection references;
- built-in assets must have an internal-demo licence or be repository-owned;
- user-local assets remain local unless explicitly exported in a package;
- deleting a local Expression does not revoke an exported package.

### 6.4 Mapping lint

Before an Expression can be used in an Encounter, the system validates:

- every direct semantic binding resolves to an allowed identity;
- every interpretive binding resolves to its declared source set and carries an inspectable transformation explanation;
- no ornamental element is referenced as evidence in Anatomy copy;
- no interpretive element is presented as a direct formation-record relation or source fact;
- hidden/private identities have no asset names, DOM text, motion, or geometry leakage;
- OPEN conditions remain OPEN;
- colors, size, motion, or audio do not invert configured standing semantics;
- every bundled asset is declared and hash-bound;
- the Expression hash, including its independent scene graph, is reproducible from canonical data and asset manifests.

---

## 7. Product boundary with Œdit

### 7.1 Division of responsibility

The preferred lifecycle is:

```text
SOURCE / CONVERSATION / DOCUMENT
        ↓
ŒDIT OR COMPATIBLE FORMATION TOOL
  source custody
  exact coordinates
  Reader runs
  alternatives and contradiction
  human semantic disposition
        ↓
VALIDATED PINECŒNE FORMATION ENVELOPE
        ↓
PINECŒNE
  import receipt
  normal form
  artifact repository
  Structure + Anatomy
  Expression
  Encounter / Locket
  Return / Successor
```

Œdit is the first and preferred producer, but the boundary is provider-neutral. Pinecœne must not query the Œdit database directly or depend on Œdit session IDs, Blob paths, or internal UI state.

### 7.2 Formation-producer responsibilities

Œdit or another compatible formation producer provides:

- raw source custody and source-coordinate truth;
- reading and extraction;
- competing candidate interpretations;
- contradiction and missing-evidence handling;
- a workbench in which a named human may keep, rewrite, leave OPEN, reject, or withhold;
- exact receipts recording any named-human disposition without exercising it on the human’s behalf;
- source-specific rights and disclosure ceilings;
- compilation of a portable formation envelope.

### 7.3 Pinecœne subsystem responsibilities

Pinecœne provides:

- validating the received envelope;
- recording an immutable import receipt;
- compiling or registering a provider-neutral normal form;
- durable artifact identity and versions;
- Library indexing separate from immutable content;
- deterministic Structure and Anatomy projections;
- Expression versions and asset manifests;
- Encounter packages, Offerings, and Lockets;
- recipient-safe rendering;
- bounded local responses;
- storage of separately authorized owner dispositions and compilation of a Successor only when an exact receipt permits it;
- Passport, History, and lineage.

Named human seats retain source-rights, admission, Offering, Return-disposition, acceptance, publication, and release authority. Formation producers and Pinecœne may record and validate their receipts; neither product exercises those authorities by itself.

### 7.4 What crosses the boundary

`PinecoeneFormationEnvelopeV0_1Alpha1` carries only what Pinecœne is permitted to know:

- schema, producer, and profile versions;
- an authorized, namespaced producer work reference and identity intent for registrar deduplication;
- formation record, discriminated as admitted or authored fixture;
- standing and authority receipt references;
- permitted provenance projection;
- source-coverage declaration;
- rights and disclosure ceiling;
- export authorization;
- canonical hashes;
- declared exclusions and OPEN conditions.

It excludes by default:

- raw private source bytes;
- rejected or withheld private candidates;
- hidden chain-of-thought or model reasoning;
- provider credentials;
- mutable “latest” pointers;
- internal database, session, or Blob identifiers;
- unrelated case metadata;
- identifiers not permitted for Pinecœne custody.

### 7.5 Internal-demo integration truth

The first demo uses a prepared, validated, synthetic or sanitized Œdit-shaped export fixture. It does not claim a live bridge, durable cross-product delivery, or an observed human admission unless separately evidenced.

The import screen must say what happened:

> `PREPARED FORMATION PACKAGE · LOCAL IMPORT · NO LIVE ŒDIT CONNECTION`

### 7.6 Pinecœne without an Œdit account

People can still use Pinecœne through:

1. a conformant package imported from another formation tool;
2. a curated or synthetic fixture that can be forked as a study;
3. a recipient Encounter that requires no authoring account.

For this demo, `producerKind: "manual"` means a hand-authored package made by an offline developer/curator fixture tool, not a public manual-composer feature. A future limited formation adapter requires its own phase, vocabulary, authority receipts, and acceptance tests. Arbitrary-source reading and end-user manual formation are deferred.

---

## 8. Artifact identity and lifecycle

### 8.1 Identity hierarchy

```text
PinecoeneIdentity             stable work-level identity
  └─ PinecoeneArtifactVersion immutable formation-record version
       ├─ NormalForm           semantic normal form
       ├─ SemanticTopology     profile-independent semantic topology
       ├─ StructureProjection* one or more profile-bound spatial projections
       ├─ AnatomyProjection*   inspectable correspondence/projections
       ├─ ExpressionVersion A  authored expression
       ├─ ExpressionVersion B  another authored expression
       └─ EncounterPackage N   exact bounded audience projection
```

Mutable Library information—title aliases, favorites, private notes, preferred Expression, collection membership, and current-version pointer—lives in a separate index record and is never part of semantic identity.

### 8.2 Continuation, version, fork, and Successor law

A semantic change never mutates an existing `PinecoeneArtifactVersion`.

- **New artifact version under the same `PinecoeneIdentity`** — allowed only when a named authority records an explicit continuity declaration, the principal work/subject remains the same, the predecessor is exact, and a typed continuity receipt appropriate to `recordKind` explains the change. An admitted record requires a new admission receipt; an authored fixture requires a curator-authorship revision receipt and remains synthetic. It answers: “this is a later version of the same Pinecœne.”
- **Fork/study** — always receives a new identity with `forksFrom` and candidate standing. It explores an alternative without claiming to continue or supersede the source.
- **Successor** — always receives a new `PinecoeneIdentity` linked by `succeeds`. It is used when the authority intentionally begins a distinct work from the predecessor, when principal subject/purpose/authority continuity breaks, or when a branch is admitted as independently addressable.
- **No change** — a response or new evidence may be recorded in History without producing any artifact version.

The authority receipt, not a hash heuristic or model, chooses among version, fork, Successor, and no change. The compiler validates the declared relationship and preserves both identities.

Technical schema qualification is neither creation nor continuity authority. For every **candidate-based frozen-contract** artifact graph, the registrar first atomically creates the operation entry, allocates a cryptographically unique one-use `proposalAttemptId`, and—when `issue_new`—locks the natural target before any human authority is requested. The compiler then creates and stores an authority-neutral immutable `ArtifactGraphProposal`: that attempt ID, exact target schema/compiler, `targetMode: continue_existing | issue_new`, existing-work identity or new-work target reference, exact same-work predecessor or separate lineage source when applicable, record kind, formation-record identity, normal-form identity, and semantic-topology identity, but no authority receipt and no final `artifactVersionId`. This first durable state is `awaiting_artifact_authority`; a crash or cross-key request resolves to it rather than allocating another attempt.

The named human then binds that exact proposal ID/full hash **and its attempt ID** with a mode- and record-kind-appropriate artifact authority receipt. `continue_existing` requires a continuity receipt: an admitted record requires a new admission revision receipt, and an authored fixture requires a curator-authorship revision receipt. `issue_new` requires a creation receipt: an admitted record requires admission authority for this new work, and an authored fixture requires fixture-creation authorship authority and remains synthetic. For ordinary register/continue, that receipt permits candidate preparation. The frozen core state machine also has a domain-neutral `awaiting_additional_authority` state; later domains may register a transition profile without changing the operation envelope. The atomic CAS into that state emits and stores an immutable `AdditionalAuthorityTransitionReceipt` binding operation key/hash, proposal ID/hash, attempt ID, active extension schema/profile, prerequisite artifact-receipt ID/full hash, prior state revision, resulting state revision, and transaction ID. At Phase 5, fork or Successor performs that CAS only after artifact creation approval. Only then may the relationship seat act. Its typed approval receipt binds the same proposal and attempt **plus the exact transition-receipt ID/full hash and resulting revision**, as well as the prior artifact-creation receipt, lineage source, relation kind, and target. A relationship receipt authored before the CAS cannot name the emitted transition evidence and remains invalid if replayed later. Swapped, inactive-extension, guessed-revision, or independently replayed approval is likewise invalid. If the correct relationship seat refuses, its refusal evidence binds the same transition receipt/revision and consumes the attempt through the matching pre-candidate relationship-refusal extension while releasing the target lock. The relationship receipt cannot substitute for artifact creation authority, and creation and continuity receipts are not interchangeable. Only after every required receipt exists may the compiler create the final artifact graph whose `artifactVersionId` preimage includes the artifact-authority receipt reference, then produce the origin-appropriate technical evidence: `QualificationReceipt` for `alpha_migration`, or `ContractValidationReceipt` for `native_v0_1`.

This sequence is one-way and non-circular:

```text
one-use proposalAttemptId + ArtifactGraphProposal hash
  → named-human mode-matched artifact authority receipt over proposal hash
    → [fork/Successor only] CAS emits AdditionalAuthorityTransitionReceipt over proposal, attempt, profile, exact artifact receipt, and resulting revision
      → relationship receipt over proposal, attempt, transition receipt/revision, exact artifact receipt, source, kind, and target
      → final artifact/normal-form/topology candidate
        → origin-appropriate QualificationReceipt or ContractValidationReceipt
          → atomic activation
```

A `QualificationReceiptV0_1` or `ContractValidationReceiptV0_1` can prove final contract conformance within its declared origin branch; neither can claim creation or continuity, register a work, or advance a preferred/current pointer by itself. Activation verifies one unconsumed proposal attempt → proposal → mode-matched artifact and any relationship authority receipts → final graph → origin-appropriate technical closure before registering the new artifact version. Activation or candidate decline consumes that attempt atomically with its terminal disposition. Human refusal before a candidate exists, or terminal preparation failure after authority, instead consumes the attempt through an immutable `PreCandidateOperationOutcomeEnvelope` and releases any target lock; neither creates a domain-activation disposition. No opaque work ID is persistently reserved until the successful candidate-preparation transaction, so a pre-candidate outcome has no ID to burn. A candidate-origin, attempt, target-mode, record-kind, receipt, proposal, or final-graph mismatch writes nothing. Refusal, missing authority, or failed technical closure leaves existing artifacts and pointers unchanged; the proposal, receipt state, and failure/refusal remain candidate evidence. A later request after decline, refusal, or terminal preparation failure must allocate a fresh attempt ID, create a new proposal hash, and obtain fresh artifact and relationship authority receipts; a new idempotency key cannot revive a consumed attempt.

Owner-private packages, authority records, source links, semantic citations, Expressions, and Encounter binding receipts pin an exact `artifactVersionId`. Visual citations additionally pin `structureProjectionId`. A serialized recipient Encounter package carries those owner identities only when its identity grant explicitly permits them; otherwise it carries an encounter-scoped pseudonymous artifact reference plus independently verifiable recipient-safe projection and package identities. `/demo/p/[pinecoeneId]` is only a visibly mutable preferred/latest alias; it is never serialized into evidence or recipient packages.

### 8.3 Lifecycle

The internal-demo lifecycle is:

```text
RECEIVE → VALIDATE → REGISTER → STRUCTURE → EXPRESS → ENCOUNTER
        → RESPONSE CANDIDATE → HUMAN DISPOSITION → SUCCESSOR OR NO CHANGE
```

No UI state may skip from a local response to an accepted Return or Successor. The named human authority separately decides whether a response changes a governed admitted record; a named fixture curator separately decides whether a synthetic study record changes, without upgrading its standing.

### 8.4 Identifier, locator, addressing, and hash law

Identifiers, digests, producer work references, and locators have different roles:

- `pinecoeneId` — an opaque stable work identity issued once by the registrar. It is not content-derived. New local identities use Web Crypto entropy, never `Math.random()`, and are protected by a unique reverse registry.
- `producerWorkRef` — an owner-private natural registrar **target** key, minimally `[issuerNamespace, externalWorkId]`, accompanied by an explicit `identityIntent: register | continue | fork | successor`, namespace authorization, and—when applicable—an exact predecessor reference. It prevents the same producer work from receiving a second identity merely because it is retried or imported under a different idempotency key.
- immutable content IDs—including `artifactVersionId`, `normalFormId`, `semanticTopologyId`, `structureProjectionId`, `anatomyProjectionId`, `expressionVersionId`, `encounterPackageId`, response, disposition, manifest, relationship, and content-receipt IDs—use `domainPrefix + base32url(full 256-bit canonical digest)`. The full digest is encoded, never truncated.
- `artifactVersionId` covers the canonical version envelope, including `pinecoeneId`, exact predecessor/continuity relation, record kind, authority-receipt reference, compiler profile, and exact `normalFormId`/`semanticTopologyId` dependencies.
- `semanticTopologyId` covers the profile-independent semantic topology. `structureProjectionId` covers the exact artifact version, Structure profile/version, semantic-topology identity, and projection payload.
- `anatomyProjectionId` covers the exact `structureProjectionId`, full Structure projection hash/profile, Anatomy profile/version, semantic correspondence entries, disclosure classes, and inspection payload.
- `expressionVersionId` covers the exact artifact version, Structure projection/profile binding, Expression scene graph, bindings, rights, and asset-manifest identity.
- `encounterPackageId` covers the exact closed serialized recipient package after role-safe projection; owner-private binding data is not part of that recipient payload.
- `shareId` — an opaque replaceable locator token generated with Web Crypto and mapped to exactly one `encounterPackageId`. It is not semantic identity and does not target a mutable work alias or a bare hash.
- cryptographically issued opaque receipt IDs, when a schema requires them, follow their declared issuer profile and are never confused with content-derived IDs.

Every registrar request accepts an `idempotencyKey`. The persistent operation registry is keyed by `[issuerNamespace, operationKind, idempotencyKey]`, stores the canonical request hash and natural producer work reference, and is a closed union by `operationProfile`:

- `provisional_alpha_direct` is permitted only for successful pre-freeze Phase 1 `register`. It stores a provisional issuance receipt and provisional identities/head, and forbids proposal-attempt, candidate, domain-terminal-disposition, governing-binding, fork, Successor, and continuation fields. Failed provisional validation still writes nothing.
- `frozen_candidate` governs post-freeze registration, continuation, fork, and Successor plus alpha-to-`V0_1` migration. It stores exactly one `proposalAttemptId`, unique across all operation keys. Ordinary register/continue moves `awaiting_artifact_authority → pending_candidate → issued | declined`. A later qualified authority extension may use `awaiting_artifact_authority → awaiting_additional_authority → pending_candidate → issued | declined`; the generic middle state is created only by CAS and stores exact extension schema/profile, prerequisite receipt ID/hash, resulting state revision, and immutable `AdditionalAuthorityTransitionReceipt` ID/hash. Phase 5 registers fork/Successor lineage profiles against that state rather than revising the operation union. The first awaiting state already stores the proposal and, for `issue_new`, the target lock. `refused_before_candidate` and `preparation_failed` are additional consumed terminal operation outcomes, each naming one immutable `PreCandidateOperationOutcomeEnvelope`. `pending_candidate` names the quarantined candidate and any collision-checked but non-resolving identity reservation; it contains no issuance receipt. `issued` names the consumed attempt, immutable issuance receipt, and all activated identities. `declined` names the consumed attempt and domain-terminal disposition and retains any reserved opaque ID as burned evidence, not an active work.
- `locator_direct` applies only to locator issuance against an already-active package and may enter `issued` without an artifact proposal, candidate, or domain disposition.

A refused, failed, or declined `issue_new` releases its pending target lock so a later separately authorized request may be proposed. Retrying one key with the same canonical request returns the exact current state. Reusing it with different bytes, attaching one attempt to another key, crossing operation profiles, or reusing a consumed attempt is a hard conflict.

The producer-work registry is separately unique on `[issuerNamespace, externalWorkId]` and discriminates `authorityState: provisional_alpha | governing_v0_1`. A companion pending-target index makes the same key unique across awaiting `issue_new` candidates. Importing the same producer work and same canonical registration request under a different idempotency key returns its existing provisional/governing identity or pending candidate state; it cannot mint an accidental twin. An initial `register` requires a target absent from both indexes, while an exact duplicate `register` against its already-bound or pending target is a deduplicated result. Ordinary post-freeze `continue` requires a `governing_v0_1` target plus an exact current/predecessor version and appropriate authority receipt. An `alpha_migration` continuation may instead name an exact `provisional_alpha` head and must atomically promote that same row to `governing_v0_1` while preserving `pinecoeneId`; no second identity is minted.

For every `continue_existing` activation, `currentAuthorizedArtifactVersionId` is the singular authority-bearing continuity head within its declared authority state, not a presentation preference. The activation transaction must compare-and-swap that field from the proposal's exact predecessor to the new `artifactVersionId`; alpha migration additionally CASes `authorityState` from `provisional_alpha` to `governing_v0_1`. A failed comparison rolls back operation transition/receipt, authority disposition, artifact/normal-form/topology activation, continuity relationship, indexes, and pointers. Two proposals may be approved from the same predecessor, but exactly one can activate; a stale proposal must be re-proposed from the new head or take an explicitly authorized `fork` path. `fork` and `successor` must each supply a distinct, authorized target producer work reference unbound in producer-work and pending indexes plus an exact predecessor relationship, then receive a new work identity only on activation. A genuinely independent but content-equal work is allowed only through a distinct unbound reference with explicit `register` intent. Reusing a bound or pending target for a different work intent or changed registration request is a hard conflict.

The reverse work-identity registry is unique on `[pinecoeneId]`, stores exactly one producer work reference, and carries the same `provisional_alpha | governing_v0_1` authority state. A pending identity-reservation index is checked with it before any candidate is persisted. A newly proposed `pinecoeneId` collision is regenerated with fresh Web Crypto entropy; after a bounded retry limit candidate preparation fails closed. A reserved ID is owner-private, non-resolving, and carries no work standing until activation. Importing an existing identity succeeds only when forward and reverse bindings and authority states agree; the same bound or reserved `pinecoeneId` paired with another producer work reference is a hard conflict. For a frozen-domain `issue_new`, the pre-review `awaiting_artifact_authority` transaction already stored namespace/target verification, pending operation, attempt, proposal, and target lock. Candidate preparation only updates that exact lock with the new candidate/ID reservation while atomically storing its technical receipt and quarantined candidate—never creating or replacing the target lock, active mappings, or an issuance receipt. Its terminal activation transaction converts that reservation into governing natural-work and reverse mappings, writes the issuance receipt and full active graph, and removes the pending indexes; decline records the terminal outcome and keeps the opaque ID unavailable. Alpha migration promotes the existing provisional forward/reverse pair together and never reserves or issues a second `pinecoeneId`. A reload therefore returns the exact provisional, awaiting-artifact-authority, awaiting-additional-authority, pending, issued, declined, refused, or failed operation outcome rather than generating another identity or attempt.

An existing content-derived ID with the same full digest is an idempotent success. Because the full digest is encoded in the ID, an ID/digest disagreement is invalid before persistence; a collision writes nothing and raises a hard error.

A `shareId` collision is regenerated before it becomes visible. A collision against an already persisted locator fails closed if regeneration cannot produce an unused token. Unknown, ambiguous, expired, or multiply mapped locators never fall back to another artifact or package.

Packages and citations use immutable IDs and the full hashes permitted for their role. A recipient package carries its own and recipient-safe projection digests, not owner canonical digests unless explicitly granted. Mutable Library aliases and `shareId` locators are navigation conveniences only.

At minimum, the product preserves separately:

- `receivedBytesSha256` for the exact imported file or transfer bytes;
- `formationEnvelopeCanonicalHash` for the validated semantic envelope;
- `producerNamespaceAuthorizationHash` and `producerAssertionHash` for the exact authorization/assertion objects used at import;
- `formationRecordHash` for every artifact and `admittedRecordHash` only when record kind is admitted;
- `normalFormHash`;
- `semanticTopologyHash`;
- `structureProjectionHash`;
- `anatomyProjectionHash`;
- `expressionHash` for each version;
- `encounterPackageHash`;
- `assetManifestHash`;
- `returnCandidateHash`;
- predecessor/successor references.

Exact addresses include stable identity and immutable version identity. Expression-bearing addresses additionally pin `expressionVersionId`. A mutable Library pointer may help navigation but cannot be used as a citation.

Timestamps, local labels, and presentation order must not change semantic identity. Identical formation-record input under the same compiler profile produces the same normal-form and semantic-topology hashes; applying the same named Structure profile/version also produces the same Structure projection hash.

One artifact version may have multiple lawful `StructureProjectionV0_1Alpha1` instances under different named Structure profiles—for example spatial, orthographic, print, or accessibility-first. `semanticTopologyHash` is profile-independent. `structureProjectionHash` is profile-dependent. Changing a Structure profile changes projection identity but not the normal form or semantic topology.

An Expression pins an exact artifact version and Structure profile/projection. Its bindings retain stable semantic IDs so a deliberate recompile against another profile is possible, but that recompile creates and validates a new Expression version. An owner-private Encounter binding likewise pins the exact Structure projection used to derive its recipient-safe scene. A preferred Structure profile is mutable Library metadata, never artifact authority.

Hash preimages are normative and domain-separated:

```text
canonicalHash = SHA-256(
  UTF-8(
    JCS({
      hashProfile: "pinecoene.jcs-sha256.v0.1-alpha.1",
      objectKind,
      schemaVersion,
      compilerProfile,
      payload
    })
  )
)
```

The validator rejects non-JSON values, non-finite numbers, duplicate semantic IDs, unsupported schema/profile versions, and ambiguous asset references before canonical hashing. Binary assets use SHA-256 over exact raw bytes and are referenced through the asset manifest.

Each hash profile declares every array as either:

- **ordered** — semantic order is preserved exactly before JCS; or
- **set-like** — entries are normalized and sorted by the schema-declared full stable key before JCS.

Unclassified arrays are rejected. Set-like arrays reject duplicate stable keys. Every content schema declares an ID-free and self-hash-free preimage projection: the object’s own content ID, its own hash field, display prefixes, signatures over that hash, and transport receipts are excluded. Exact dependency IDs and full dependency hashes remain in the preimage. For a Formation Envelope specifically, `producerAssertion` is excluded from `formationEnvelopeCanonicalHash`; its signed-payload tuple includes that completed hash plus the exact work reference, schema/profile, producer, namespace authorization, and operation intent. This prevents recursive signing/self-hashing without leaving the envelope or intended registrar operation unauthenticated.

The full 256-bit digest is authoritative for identity, lookup, equality, and collision handling. Its domain-prefixed content ID encodes that complete digest; any duplicated hexadecimal hash field is a verification representation of the same bits and must agree. A shortened hex/base32 prefix is display-only, carries an explicit ellipsis/prefix label, and is never a database key, package authority, or equality proof.

`receivedBytesSha256` and canonical hashes prove different things. The first receipts exact transport/file bytes, including irrelevant serialization differences. The second identifies validated semantic content under a named profile. Pinecœne never claims it can reconstruct exact received bytes from JCS data.

The import receipt also records `receivedBytesRetention = retained_exact | hash_only | not_permitted`. Exact bytes enter the owner-private repository only when rights and local custody policy permit it. `hash_only` proves the observed digest but cannot support later byte-exact export or recovery claims.

### 8.5 OPEN law

OPEN is a first-class authorized state, not a visual style or synonym for missing input. A relation, uncertainty, boundary, or path is `OPEN` only when the formation record contains an explicit authorized leave-open disposition. That condition:

- remains addressable;
- produces no false closing edge or face;
- may be represented by a gap, interval, gate, or declared absence;
- survives every Expression;
- cannot be closed by Encounter resolution;
- changes only through a new authorized formation-record artifact version or Successor.

Absent source is `NOT SUPPLIED`; intentionally omitted material is `EXCLUDED`; later work is `DEFERRED`; unverified live state is `REVALIDATION REQUIRED`. None becomes OPEN automatically.

---

## 9. Candidate contract family

These are candidate interfaces for the internal-demo build. Responsibilities and separation may not be collapsed, but qualification is deliberately staged so the team does not freeze an unexercised layer.

Every alpha wire identifier includes `v0.1-alpha.1` and every TypeScript family name includes `V0_1Alpha1`. Phase 3 qualifies only the Formation, identity, normal-form, semantic-topology, Structure, Anatomy, **core Structure/Anatomy Player projection**, repository, and core receipt domains exercised through that gate. Expression and its Player variant remain alpha until Phase 4. Encounter, its recipient Player variant, Return, fork, and Successor remain alpha until Phase 5. The self-history source-manifest contract remains alpha until the Phase 6 source-set preflight. A `QualificationReceiptV0_1` names its `contractDomain`, exact alpha schemas, qualification suite, accepted vectors, qualified schemas, and resulting IDs/hashes.

No gate renames stored alpha bytes in place or fabricates a second external import. Where object migration is permitted, a domain gate issues qualified `V0_1` schemas, revalidates or recompiles the stored validated alpha semantic object, creates candidate qualified hashes/IDs, and records `QualificationReceiptV0_1` plus an explicit `qualifiedFrom` relationship. The original import receipt and `receivedBytesRetention` truth remain unchanged. That is the **alpha-migration** path only. Phase 5 may freeze fork/Successor schema contracts from alpha vectors, but it does not migrate, activate, or write `qualifiedFrom` for alpha/legacy relation objects.

After a domain's `V0_1` contracts are frozen, a newly created native `V0_1` object does not fabricate an alpha source or `qualifiedFrom` edge. It enters the same owner-private quarantine through the `native_v0_1` branch of `DomainActivationCandidateV0_1`, carrying exact candidate objects and a `ContractValidationReceiptV0_1`. The other branch, `alpha_migration`, carries exact alpha source IDs/hashes, `QualificationReceiptV0_1`, and the relationship to write on activation. Both branches share one terminal-disposition and atomic-activation law, but their evidence is not interchangeable.

A qualification or validation receipt has technical standing only. If an artifact-version identity changes or a new identity is issued, the compiler follows the Section 8.2 proposal → mode-matched artifact authority receipt → final graph → technical receipt sequence; it never creates the final `artifactVersionId` first. Alpha artifacts, proposals, and non-activated candidates remain readable evidence and can never be mistaken for accepted final contracts, governed creation, or governed continuity.

### 9.1 Formation and import

- `PinecoeneFormationEnvelopeV0_1Alpha1`
- `PinecoeneImportReceiptV0_1Alpha1`
- `FormationRecordV0_1Alpha1`
- `AdmittedRecordV0_1Alpha1`
- `AuthoredFixtureRecordV0_1Alpha1`
- `AdmissionAuthorityRefV0_1Alpha1`
- `FixtureAuthorshipReceiptRefV0_1Alpha1`
- `CoverageDeclarationV0_1Alpha1`
- `DisclosureCeilingV0_1Alpha1`
- `ProducerWorkRefV0_1Alpha1`
- `ProducerNamespaceAuthorizationV0_1Alpha1`
- `ProducerNamespaceAuthorizationRefV0_1Alpha1`
- `ProducerAssertionV0_1Alpha1`
- `IssuanceReceiptV0_1Alpha1`
- `PendingIdentityReservationV0_1Alpha1`

Candidate envelope outline:

```ts
type PinecoeneFormationEnvelopeV0_1Alpha1 = {
  schemaVersion: "pinecoene.formation-envelope.v0.1-alpha.1";
  formationId: string;
  producer: {
    producerKind: "oedit" | "manual" | "fixture" | "compatible_producer";
    producerId: string;
    producerVersion: string;
  };
  producerWorkRef: ProducerWorkRefV0_1Alpha1;
  producerAssertion: ProducerAssertionV0_1Alpha1;
  coverage: CoverageDeclarationV0_1Alpha1;
  provenanceProjection: PermittedProvenanceProjectionV0_1Alpha1;
  disclosureCeiling: DisclosureCeilingV0_1Alpha1;
  rights: FormationRightsV0_1Alpha1;
  exclusions: DeclaredExclusionV0_1Alpha1[];
  hashes: FormationEnvelopeHashesV0_1Alpha1;
} & (
  | {
      recordKind: "admitted";
      formationRecord: AdmittedRecordV0_1Alpha1;
      authority: AdmissionAuthorityRefV0_1Alpha1;
    }
  | {
      recordKind: "authored_fixture";
      formationRecord: AuthoredFixtureRecordV0_1Alpha1;
      authority: FixtureAuthorshipReceiptRefV0_1Alpha1;
    }
);

type ProducerWorkRefV0_1Alpha1 = {
  issuerNamespace: string;
  externalWorkId: string;
  namespaceAuthorizationRef: ProducerNamespaceAuthorizationRefV0_1Alpha1;
} & (
  | { identityIntent: "register"; predecessor?: never }
  | { identityIntent: "continue"; predecessor: PinecoeneLineageRefV0_1Alpha1 }
  | { identityIntent: "fork"; predecessor: PinecoeneLineageRefV0_1Alpha1 }
  | { identityIntent: "successor"; predecessor: PinecoeneLineageRefV0_1Alpha1 }
);
```

The discriminator controls the authority type. A fixture record paired with `AdmissionAuthorityRef` or an admitted record paired with `FixtureAuthorshipReceiptRef` is invalid and writes nothing. `producerWorkRef` is required at the registrar boundary but remains owner-private unless a later grant explicitly releases an identity projection; upstream internal database IDs are never copied into it by convenience.

An issuer namespace is never trusted because a package names it. The registrar resolves `namespaceAuthorizationRef` through a fail-closed authorization registry. For a signed producer namespace, the record binds namespace, producer identity, verification key/profile, validity window, and permitted operations. `ProducerAssertionV0_1Alpha1` then carries the key ID, algorithm/profile, signed-payload hash, and signature over a domain-separated tuple containing the exact producer identity/version, issuer namespace, external work ID, identity intent, exact predecessor when present, formation-envelope canonical hash, formation schema/profile, and namespace-authorization identity. For local `manual` or `fixture` namespaces, the assertion union instead carries a named-curator assertion receipt over that same tuple. A pinned internal-demo allowlist is itself hash-bound and versioned. Missing, expired, mismatched, revoked, unsigned, or unverifiable authorization/assertion rejects the entire transaction before deduplication or persistence.

Validation order is fixed: parse the supported envelope shape; project the schema-declared assertion-free canonical preimage; compute `formationEnvelopeCanonicalHash`; resolve namespace authorization; reconstruct and verify the signed assertion tuple; then validate record authority, disclosure, rights, and registrar intent. No deduplication result or persistent write is returned before every step passes.

`PinecoeneImportReceiptV0_1Alpha1` records both `receivedBytesSha256` and `formationEnvelopeCanonicalHash`, the exact namespace-authorization and producer-assertion IDs/hashes and verification outcome, plus formation-record kind/standing, validator profile, accepted schema version, effective disclosure, exclusions/refusals, resulting IDs/hashes, transaction ID, and idempotent/conflict outcome.

### 9.2 Semantic and artifact identity

- `PinecoeneNormalFormV0_1Alpha1`
- `SemanticTopologyV0_1Alpha1`
- `PinecoeneArtifactVersionV0_1Alpha1`
- `PinecoeneIndexEntryV0_1Alpha1`
- `PinecoenePassportV0_1Alpha1`
- `PinecoeneLineageRefV0_1Alpha1`
- `ProposalAttemptRefV0_1Alpha1`
- `ArtifactGraphProposalV0_1Alpha1`
- `ArtifactGraphAuthorityReceiptV0_1Alpha1` — discriminated by `targetMode` and `recordKind`; binds either creation or continuity authority, never both
- `AdditionalAuthorityTransitionReceiptV0_1Alpha1` — domain-neutral core state-transition evidence; binds the exact prerequisite receipt and emitted state revision used by later authority extensions
- `DomainActivationCandidateV0_1Alpha1` during rehearsal, frozen by domain as `DomainActivationCandidateV0_1` with `originMode: alpha_migration | native_v0_1`
- `QualifiedRepresentationCandidateV0_1Alpha1`
- `NativeDomainActivationCandidateV0_1`
- `ContractValidationReceiptV0_1`
- `DomainActivationAuthorityDispositionV0_1Alpha1`
- `DomainActivationAuthorityRefV0_1Alpha1`
- `ArtifactGraphDeclineAuthorityRefV0_1Alpha1`
- `PreCandidateOperationOutcomeEnvelopeV0_1Alpha1` and domain-neutral `PreCandidateEvidenceRefV0_1Alpha1`
- `ArtifactGraphProposalRefusalAuthorityRefV0_1Alpha1` — core evidence schema, qualified at Phase 3
- `ForkRelationshipRefusalAuthorityRefV0_1Alpha1` — lineage evidence extension, qualified at Phase 5
- `SuccessorRelationshipRefusalAuthorityRefV0_1Alpha1` — lineage evidence extension, qualified at Phase 5
- domain-neutral `DomainDeclineEvidenceRefV0_1Alpha1`; concrete `DomainDeclineAuthorityRefByKind` evidence schemas qualify only at their owning phase
- `TechnicalFailureReceiptV0_1Alpha1`
- candidate shape for the staged `QualificationReceiptV0_1`
- `LegacyArtifactPointerV0_1Alpha1`
- `PinecoeneArchiveBundleV0_1Alpha1`

The normal form uses provider-neutral primitives:

- elements;
- typed relations or hyper-relations;
- regions/groups/boundaries;
- temporal anchors;
- constraints;
- OPEN conditions;
- standing;
- permitted provenance references;
- disclosure classes.

Domain-specific types are namespaced. Pinecœne does not freeze a universal taxonomy of “business,” “emotion,” “science,” or “art” in v0.1.

`ArtifactGraphProposalV0_1Alpha1` is an immutable authority-neutral object. It pins one exact one-use `proposalAttemptId`, exact target schema/compiler profiles, `targetMode`, `recordKind`, formation-record ID/hash, `normalFormId`/hash, and `semanticTopologyId`/hash. Its identity target is discriminated: `continue_existing` carries the exact already-bound `pinecoeneId`, producer work reference, and same-work predecessor; `issue_new` carries the distinct authorized target producer work reference, `pinecoeneId: not_issued`, `artifactPredecessor: none`, and any separately typed fork/Successor lineage source. It excludes every artifact authority receipt and the final `artifactVersionId`. Its full proposal ID/hash is the object the named authority approves or refuses. For `issue_new`, the registrar may generate and collision-check the opaque work ID after that approval because the approved natural target remains fixed; the final artifact-version preimage then binds both issued work ID and the mode-matched artifact authority receipt. `ArtifactGraphAuthorityReceiptV0_1Alpha1` is a closed union: `continue_existing` carries record-kind-appropriate continuity authority, while `issue_new` carries record-kind-appropriate creation authority. Each binds both proposal and attempt; neither validates the other mode or another attempt. `AdditionalAuthorityTransitionReceiptV0_1Alpha1` is emitted only by the successful CAS and binds the operation/proposal/attempt, active extension profile, exact prior artifact receipt, previous and resulting revisions, and transaction. Any fork/Successor relationship approval binds that same proposal/attempt **and the exact transition receipt ID/full hash/resulting revision**, prior artifact-creation receipt, target, lineage source, and relation kind. The final artifact-version preimage binds the artifact receipt, while the composite relation object binds its relationship receipt. Neither object signs an ID that recursively contains itself.

`PreCandidateOperationOutcomeEnvelopeV0_1` is the stable domain-neutral envelope frozen with the core repository contract. It binds outcome ID, operation key/hash, proposal ID/hash, attempt ID, target mode, record kind, `outcomeClass: human_refused | preparation_failed`, and an exact evidence reference `{ extensionNamespace, evidenceSchemaId, evidenceContentId, evidenceHash }`. It never impersonates a candidate disposition and does not embed a closed TypeScript union of every future domain authority.

The active, versioned evidence-schema registry closes what the envelope may reference. At Phase 3 it admits only:

- core `artifact_authority_refused`, whose `ArtifactGraphProposalRefusalAuthorityRefV0_1` binds the same tuple and the schema-declared artifact refusal seat; and
- core `preparation_failed`, whose `TechnicalFailureReceiptV0_1` binds the same tuple, compiler/validator profile, and exact failure and cannot express human refusal.

At Phase 5, without changing the envelope, the registry may add:

- `fork_relationship_refused`, binding the exact `AdditionalAuthorityTransitionReceipt` ID/hash/resulting revision, already-approved artifact-creation receipt, target, lineage source, `relationKind: forksFrom`, and Fork refusal seat; and
- `successor_relationship_refused`, binding the exact `AdditionalAuthorityTransitionReceipt` ID/hash/resulting revision, already-approved artifact-creation receipt, target, lineage source, `relationKind: succeeds`, and Successor refusal seat.

Each admitted evidence object binds the envelope tuple; the envelope binds its exact schema/ID/hash. Unknown, unqualified, wrong-phase, wrong-seat, wrong-kind, or mismatched evidence fails closed. Either valid outcome consumes the proposal attempt through its own outcome ID. Swapped operation/proposal/attempt or replay fails before consumption or target-lock release.

`DomainActivationCandidateV0_1` is the owner-private quarantine envelope for anything not yet active under a frozen domain contract. It records its own content ID, target contract domain/schema, a non-empty set-like `candidateObjects` array sorted by the schema-declared full `targetRole + contentId` key, `standing: "candidate_unsealed"`, and immutable `initialActivationStatus: "awaiting"`. Each member carries exact target role, ID, hash, and bytes. Its origin is a closed union:

- `alpha_migration` is represented during rehearsal by `QualifiedRepresentationCandidateV0_1Alpha1` and, after the domain gate, its qualified `V0_1` successor. It requires exact alpha source object IDs/hashes, `QualificationReceiptV0_1`, and the exact proposed `qualifiedFrom` relationship. It is the only branch that may write `qualifiedFrom`.
- `native_v0_1` is represented by `NativeDomainActivationCandidateV0_1`. It requires candidate objects already authored or compiled against the frozen `V0_1` schemas and an exact `ContractValidationReceiptV0_1`; alpha-source fields and `qualifiedFrom` are forbidden.

A single-domain result normally has one candidate object. An `artifact_semantic_graph` candidate is created only after proposal authority exists and contains artifact-version, normal-form, and semantic-topology members plus the exact proposal and mode-matched artifact-authority receipt IDs/hashes. If `issue_new` has producer intent `fork` or `successor`, it must have `originMode: native_v0_1` and is instead one **composite lineaged-creation candidate**: its candidate objects also contain exactly one matching typed lineage-relation object, it pins that relationship authority receipt, and it requires `ContractValidationReceiptV0_1`. `alpha_migration`, `QualificationReceipt`, and `qualifiedFrom` are forbidden for this composite branch. The graph and relation do not receive separate terminal slots. Candidate objects may exist in the generic immutable content store, but they are absent from artifact, normal-form, topology, projection, Expression, Encounter, Library, latest/preferred, lineage, and citation indexes. A domain resolver must not return them.

Disposition never mutates the candidate. `DomainActivationAuthorityDispositionV0_1Alpha1` has exactly one terminal outcome per candidate:

```text
{
  outcome: "declined",
  candidateId,
  candidateHash,
  decline:
    { candidateClass: "artifact_registrar", activationKind: "artifact_semantic_graph", operationKey, proposalAttemptId, evidenceRef: ArtifactGraphDeclineAuthorityRef }
    | { candidateClass: "domain_only", activationKind, evidenceRef: DomainDeclineEvidenceRef }
}
| {
    outcome: "activated",
    candidateId,
    candidateHash,
    activation:
      artifact_semantic_graph
      | structure_projection
      | anatomy_projection
      | expression
      | encounter
      | return_candidate
      | return_disposition
      | public_projection_release
      | source_manifest
      | technical_object
  }
```

The activation union is closed and every branch has exact dependency and authority law:

- `artifact_semantic_graph` requires the exact authority-neutral proposal, its mode- and record-kind-matched `ArtifactGraphAuthorityReceipt`, and one dependency-closed final candidate bundle containing the exact artifact version, normal form, and semantic topology. The final artifact preimage must bind that receipt. Candidate origin independently selects either alpha-migration qualification closure or native-`V0_1` validation closure; using the wrong technical receipt or inventing `qualifiedFrom` on a native object fails closed. The activation branch is discriminated by proposal target mode:
  - `continue_existing` requires continuity authority, writes the same-work continuity relationship, and in the same transaction CASes the authoritative natural-work head from the proposal's exact predecessor to the new `artifactVersionId`. The CAS is mandatory, not a preferred-version write.
  - `issue_new` requires creation/admission-or-fixture authority, registers the initial artifact graph, and initializes the new natural-work head to that `artifactVersionId`; it writes no same-work continuity relationship. Producer intent `register` carries no lineage member. Producer intent `fork` or `successor` must use one native-`V0_1` composite lineaged-creation candidate containing exactly one matching relation object, `ContractValidationReceipt`, and separately typed relationship authority; its single activation and terminal disposition atomically write graph plus lineage. Alpha/legacy relation migration is not an activation branch.
  One transaction verifies proposal → artifact authority receipt → final graph → origin-appropriate technical closure and activates the complete permitted branch. Receipt-mode, candidate-origin, record-kind, predecessor, relation-kind, or relation-authority mismatch fails closed. Library presentation pointers remain separately optional and non-authoritative.
- `structure_projection` requires exact compiler validation and an already-active matching artifact/normal-form/topology graph. A preferred Structure pointer additionally requires `StructureProfileApprovalReceiptV0_1Alpha1`.
- `anatomy_projection` requires exact compiler validation and an already-active matching Structure projection whose ID, full hash, and profile are bound into the Anatomy preimage. Missing Structure, cross-profile reuse, or hash mismatch fails closed. A preferred Anatomy pointer additionally requires the schema-declared profile approval.
- `expression` requires an already-active artifact/Structure dependency set and `ExpressionAuthorshipRightsReceiptV0_1Alpha1` from the Expression author/rights seat.
- `encounter` requires active permitted dependencies and `OfferingAuthorityReceiptV0_1Alpha1` from the owner/Offering seat; package, owner binding, safe projection, recipient Player projection, manifest, and locator activate in the same closed transaction.
- `return_candidate` requires `ReturnCandidateOriginReceiptV0_1Alpha1` proving a separately permitted recipient/local-user response act against an exact active Encounter package. It never uses owner Return-disposition authority.
- `return_disposition` requires an already-active Return candidate and `ReturnDispositionAuthorityRefV0_1Alpha1` from the authorized owner disposition seat.
- `public_projection_release` is a nested union: a Core projection requires `PublicStructureProjectionReleaseReceiptV0_1Alpha1`, while an Expression projection requires `PublicExpressionProjectionReleaseReceiptV0_1Alpha1`. Each binds exact projection/package identities and hashes, exact release manifest, publication/release authority, environment, date, and executable revision. Historical releases carry historical evidence and never imply `LIVE NOW`.
- `source_manifest` requires `SourceSetCuratorApprovalReceiptV0_1Alpha1` over the exact frozen selected corpus and exact qualified-candidate manifest ID/hash.
- `technical_object` is limited to a Player adapter, validator, or repository receipt whose schema declares no human-authority act or mutable artifact pointer; it requires the exact technical validation/qualification receipt.

Unknown activation/authority combinations fail closed. Technical qualification can never substitute for Expression authorship/rights, Offering, response origin, Return disposition, fork, Successor, source-set curation, publication/release, admission, or fixture authorship. Decline evidence is equally closed: `ArtifactGraphDeclineAuthorityRef` must bind the candidate hash, operation, attempt, proposal, target mode, record kind, and the same schema-declared refusal authority seat. A domain-only disposition carries only the stable evidence reference `{ extensionNamespace, evidenceSchemaId, evidenceContentId, evidenceHash }`; a versioned registry admits the matching concrete refusal schema at that domain's qualification phase and requires its controlling seat, activation kind, and exact candidate hash. A purely technical candidate uses a typed `TechnicalFailureReceipt`. Unknown, premature, or cross-domain evidence cannot terminalize a candidate, and adding a later domain does not revise the disposition envelope.

Terminal-state and transaction law is strict. The repository has one unique terminal slot per candidate. The transaction is a closed union by candidate class:

- `artifact_registrar` applies only to `artifact_semantic_graph`. It requires one operation-registry entry and one unique proposal-attempt consumption slot. Activation atomically verifies/writes authority evidence, consumes the attempt, moves the operation to `issued` with its immutable issuance receipt, writes the terminal disposition, completes dependency/relationship/active-index changes, and applies only authorized CAS pointers. `issue_new` additionally converts its pending target/ID reservations; `continue_existing` instead performs the mandatory head CAS. Decline atomically consumes the attempt, writes evidence and terminal disposition, moves the operation to `declined`, releases an `issue_new` pending target lock when present, and leaves any reserved opaque ID burned/non-resolving; it writes no active indexes.
- `domain_only` applies to Structure, Anatomy, Expression, Encounter, Return, public releases, source manifests, and technical objects. Activation or decline first validates the candidate-class/domain-specific evidence discriminator, then writes its exact authority evidence, terminal disposition, and only that domain branch's declared indexes/pointers. An operation key, proposal attempt, target lock, identity reservation, issuance receipt, or natural-work mutation is forbidden.

Crash or conflict rolls back the whole applicable branch. Concurrent activate/decline or opposite later disposition attempts allow exactly one winner; every later attempt is a hard terminal-state conflict. A consumed attempt, its proposal, and its artifact/relationship receipts can never be attached to a new candidate or operation key. Awaiting and declined candidates remain separately inspectable owner evidence and never resolve as active objects.

### 9.3 Structure and Anatomy

- `StructureProfileV0_1Alpha1`
- `StructureProjectionV0_1Alpha1`
- `StructureFeatureV0_1Alpha1`
- `AnatomyProjectionV0_1Alpha1`
- `AnatomyEntryV0_1Alpha1`
- `CorePlayerProjectionV0_1Alpha1` — Structure/Anatomy owner or released-public projection, qualified at Phase 3
- `StructureProfileApprovalReceiptV0_1Alpha1`
- `PublicStructureProjectionReleaseReceiptV0_1Alpha1`
- `TransitionScoreV0_1` retained as the compiler-neutral time source unless Phase 0 replaces it by explicit decision
- `SemanticSelectionRefV0_1Alpha1`

Every renderer-neutral `StructureFeatureV0_1Alpha1` carries:

- stable feature ID;
- one or more semantic references;
- geometry role;
- deterministic geometry parameters or derivation references;
- neutral structural material role;
- temporal behavior reference;
- fallback representation.

`StructureFeatureV0_1Alpha1` does not carry inspection copy, source disclosure, recipient grants, or human-facing standing labels. Those belong to `AnatomyEntryV0_1Alpha1`; recipient grants belong to the later Encounter-safe compiler. Every `AnatomyProjectionV0_1Alpha1` pins one exact Structure projection ID/full hash/profile. Its entries bind that Structure’s same semantic/feature identities to standing, permitted provenance, inspection copy, epistemic type, lifecycle standing, and disclosure class; an Anatomy projection cannot float across Structure profiles.

### 9.4 Expression

- `ExpressionTemplateV0_1Alpha1`
- `ExpressionVersionV0_1Alpha1`
- `ExpressionSceneGraphV0_1Alpha1`
- `ExpressionBindingV0_1Alpha1`
- `AtmosphereLayerV0_1Alpha1`
- `AssetManifestV0_1Alpha1`
- `ExpressionRightsV0_1Alpha1`
- `ExpressionValidationReceiptV0_1Alpha1`
- `ExpressionAuthorshipRightsReceiptV0_1Alpha1`
- `PublicExpressionProjectionReleaseReceiptV0_1Alpha1`
- `ExpressionPlayerProjectionV0_1Alpha1` — exact Expression-capable owner or released-public projection, qualified with Expression at Phase 4

Expression versions always reference an exact artifact version, Structure profile/version, and Structure projection hash. They never embed a modified copy of the normal form. Rebinding to another profile creates a new Expression version and validation receipt.

### 9.5 Encounter, Offering, and response

- `EncounterIntentV0_1Alpha1`
- `ApertureGrantV0_1Alpha1`
- `CapabilityGrantLatticeV0_1Alpha1`
- `EncounterPackageV0_1Alpha1`
- `EncounterBindingReceiptV0_1Alpha1`;
- `OfferingAuthorityReceiptV0_1Alpha1`;
- `EncounterSafeProjectionV0_1Alpha1` — recipient-safe semantic/Structure/Anatomy derivation, qualified with Encounter at Phase 5;
- `RecipientPlayerProjectionV0_1Alpha1` — recipient-only safe projection, qualified with Encounter at Phase 5;
- `EncounterPermissionsV0_1Alpha1`;
- `EncounterPerformanceProjectionV0_1Alpha1` derived only from permitted references;
- `ReturnCandidateV0_1Alpha1`;
- `ReturnCandidateOriginReceiptV0_1Alpha1`;
- `ReturnDispositionV0_1Alpha1`;
- `ReturnDispositionAuthorityRefV0_1Alpha1`;
- `ForkStudyV0_1Alpha1`;
- `SuccessorRelationV0_1Alpha1`;
- `ForkAuthorityRefV0_1Alpha1`;
- `SuccessorAuthorityRefV0_1Alpha1`;
- `PortableTransferReceiptV0_1Alpha1` only when a real file transfer is evidenced.

Every Encounter compilation writes two distinct immutable objects:

1. an **owner-private `EncounterBindingReceiptV0_1Alpha1`** pinning the exact `artifactVersionId`, `structureProjectionId`, optional `expressionVersionId`, grant compiler profile, and resulting `encounterPackageId`; and
2. a **serialized recipient `EncounterPackageV0_1Alpha1`** containing only the granted artifact reference, recipient-safe Structure/Anatomy/performance projections, expanded grant lattice, permitted asset manifest, and its own content identity/hash.

The owner canonical Structure and `EncounterSafeProjectionV0_1Alpha1` have different identities. The Phase 5 Encounter compiler derives the safe projection from the permitted semantic subgraph only after applying the exact capability/disclosure intersection. It receives its own projection identity/hash and cannot expose hidden feature counts, IDs, geometry, timing, or the owner’s canonical scene bytes. It is not part of Phase 3 Structure/Anatomy qualification.

`ReturnCandidateOriginReceiptV0_1Alpha1` is created only from an explicit local recipient/user gesture after validating an exact Encounter package whose grants permit response. It binds the Encounter package ID/full hash, exact response-capability grant, candidate ID/full hash, role-safe recipient reference at the granted level, custody mode (`same_browser_demo | portable_package`), and client validation profile. It proves only that the local demo captured a permitted response act in that custody context. It does not prove legal identity, remote delivery, receipt by the owner, acceptance, admission, or human Return standing. Later owner disposition is a different receipt and cannot rewrite the origin.

The recipient `artifactRef` is a discriminated union: an exact artifact/version reference only when the identity grant permits it, otherwise an encounter-scoped pseudonymous reference derived for that package. The pseudonym is not a Library locator, cannot be resolved through an owner repository, and does not directly reveal the owner’s `pinecoeneId`, `artifactVersionId`, canonical hashes, or producer work reference. This is identity minimization, not an anonymity or unlinkability guarantee: deterministic recipient-safe projection IDs, identical permitted assets, and identical disclosed content may still be correlated across packages. Strong cross-Encounter unlinkability would require separately designed package-scoped derivation or encryption and is deferred. The recipient scene source is likewise role-safe:

```text
{ sceneKind: "structure", safeStructureProjectionId }
| { sceneKind: "expression" | "both", safeStructureProjectionId, safeExpressionProjectionId }
```

Neither object carries a mutable preferred/latest pointer. A zero-Expression artifact remains lawfully shareable as Structure-only; the compiler never invents a “neutral Expression” to satisfy the package. Owner Preview consumes the exact serialized recipient package that Witness receives; it may display the separate binding receipt beside the Preview, but that receipt is never embedded in or delivered with the recipient package.

`EncounterPackageV0_1Alpha1` is the sole governing share payload in the alpha demo. “Offering” remains the human/protocol name for the act of preparing and presenting that package; it is not a second unnamed wire format. Legacy `OfferingPackageV0_1/V0_2`, permissions, and performance scores remain behind explicit legacy adapters and are rejected by the governing Witness path.

R0–R5 may remain optional named **projection-dimension presets**. They compile to explicit grants; they are not the governing permission model and do not imply a total order across Anatomy, Time, source access, download, response, or reuse.

| Preset | Candidate human meaning | Structural projection intent |
| --- | --- | --- |
| R0 | Mark | identity/presence only |
| R1 | Trace | limited path or relation projection |
| R2 | Form | settled permitted shape |
| R3 | Inspect | shape prepared for separately granted Anatomy |
| R4 | Time | shape prepared for separately granted replay |
| R5 | Recital | richest structural/performance projection allowed by explicit grants |

A preset can never widen the effective disclosure ceiling or silently grant source, identity, action, Anatomy, or Time capabilities. Two Encounters may use the same R preset with different capability sets. The compiler serializes the fully expanded grant lattice, never only an R label.

### 9.6 Self-history source contract

- `CuratedSourceSetManifestV0_1Alpha1`
- `SourceSetCuratorApprovalReceiptV0_1Alpha1`

This contract is not included in Phase 3 qualification. Its vocabulary can be drafted earlier, but its completeness, sanitization, cutoff, and source-coordinate laws must be exercised against the actual selected corpus at the Phase 6 source-set preflight before a candidate `CuratedSourceSetManifestV0_1` is issued; that candidate becomes active only after exact source-set curator approval.

It records:

- repository identity;
- cutoff commit and included refs;
- exact included commit IDs;
- exact file paths and hashes;
- selected chat-export hashes and message ranges, when separately exported;
- selection rationale;
- curator and authority reference;
- exclusions and unavailable source classes;
- disclosure and sanitization receipts;
- `coverageKind: "selected_corpus"`;
- `completeProjectCoverageClaim: false`.

---

## 10. Repository and custody architecture

### 10.1 Immutable artifacts, mutable Library index

Artifact packages are immutable and content-addressed. Library metadata is mutable and separately persisted.

This lets a person rename a card, add it to a collection, or choose a preferred Expression without changing the artifact’s identity or making every UI preference a new version.

### 10.2 Persistence-independent repository

The product uses a repository interface rather than calling Dexie directly from views or compilers.

The interface supports at least:

- register validated artifact;
- resolve exact version;
- list index entries;
- attach immutable Expression version;
- attach exact Encounter package;
- record local response candidate;
- record human disposition;
- link Successor;
- export owner-private archive;
- import and validate archive;
- delete local demonstration data with truthful scope.

The internal demo implements this interface with an isolated IndexedDB/Dexie repository and a read-only adapter for the existing database. The new database begins with version-agnostic immutable envelope stores keyed by `[schemaVersion, objectKind, contentId]`. Every `contentId` contains its complete domain-separated digest under Section 8.4, so no separate shortened or compound hash key competes with it. Alpha and qualified `V0_1` objects coexist without a database-schema upgrade. A future cloud repository can implement the same interface without changing normal-form compilation, the Player, or serialized packages.

Immutable writes use that one content-addressed primary-key law plus domain indexes:

- artifact index: `[pinecoeneId, artifactVersionId]`;
- normal-form index: `[artifactVersionId, normalFormId]`;
- semantic-topology index: `[artifactVersionId, semanticTopologyId]`;
- Structure projection index: `[artifactVersionId, structureProjectionId]`;
- Anatomy projection index: `[artifactVersionId, structureProjectionId, anatomyProjectionId]`;
- Expression index: `[artifactVersionId, expressionVersionId]`;
- asset-manifest index: `[assetManifestId]`; exact asset-blob key: `[assetSha256]`;
- Encounter-package index: `[encounterPackageId]`;
- owner-private Encounter-binding index: `[encounterBindingReceiptId]` and query index `[artifactVersionId, encounterPackageId]`;
- response index: `[returnCandidateId]`;
- append-only disposition index: `[returnCandidateId, dispositionVersionId]`;
- domain-activation-candidate quarantine index: `[domainActivationCandidateId]` with query indexes `[originMode, contractDomain, targetSchemaVersion]` and, for `alpha_migration` only, `[sourceObjectId, contractDomain, targetSchemaVersion]`; it is never consulted by active domain resolvers;
- immutable activation-authority disposition key: `[domainActivationCandidateId, activationAuthorityDispositionId]` plus unique terminal index `[domainActivationCandidateId] → outcome + activationAuthorityDispositionId`;
- import, authority/authorship, issuance, qualification, native-contract-validation, and relationship receipts: each by its full content or issuer-profile receipt ID;
- operation registry: `[issuerNamespace, operationKind, idempotencyKey] → canonicalRequestHash + producerWorkRef + operationProfile(provisional_alpha_direct | frozen_candidate | locator_direct) + profile-specific state`; only `frozen_candidate` carries a proposal attempt and candidate/attempt terminal states;
- proposal-attempt registry: `[proposalAttemptId] → operationRegistryKey + proposalId + (unconsumed | consumedByDomainDispositionId | consumedByPreCandidateOutcomeId)`, unique across operation keys;
- namespace-authorization registry: `[issuerNamespace] → exact active authorization record/version and verification profile`;
- pending target index: `[issuerNamespace, externalWorkId] → operationRegistryKey + proposalAttemptId + optional domainActivationCandidateId + optional reservedPinecoeneId`, created at `awaiting_artifact_authority`, retained through any registered additional-authority review and candidate preparation, non-resolving, and mutually exclusive with a producer-work binding;
- pending identity-reservation index: `[reservedPinecoeneId] → domainActivationCandidateId + producerWorkRefHash`, checked together with the active reverse registry;
- natural producer-work registry: `[issuerNamespace, externalWorkId] → pinecoeneId + authorityState(provisional_alpha | governing_v0_1) + currentAuthorizedArtifactVersionId + continuityRevision`, with state plus current-version fields serving as the mandatory CAS authority head for migration/`continue_existing`;
- unique reverse work-identity registry: `[pinecoeneId] → issuerNamespace + externalWorkId + authorityState(provisional_alpha | governing_v0_1)`;
- forward lineage index: `[predecessorPinecoeneId, predecessorArtifactVersionId, relationshipKind, relatedPinecoeneId, relationshipReceiptId]`;
- reverse lineage index: `[relatedPinecoeneId, relationshipKind, predecessorPinecoeneId, predecessorArtifactVersionId, relationshipReceiptId]`;
- released-projection index: `[projectionKind, playerProjectionId, releaseReceiptId] → releaseManifestId + evidenceKind + executableRevision`, where `projectionKind = public_core | public_expression`;
- locator registry: `[shareId] → exactly one encounterPackageId`, governed by the locator issuance law.

Writing identical bytes to an existing immutable key is an idempotent success. The same logical ID with a different canonical hash is a hard conflict and writes nothing. Immutable stores never use blind overwrite semantics.

Only the pre-freeze Phase 1 provisional-alpha intake may use a direct registration transaction. That transaction atomically stores exact-byte/hash intake receipt and permitted retained bytes, alpha validation and authority/authorship references, a schema-tagged provisional issuance receipt, one stable `pinecoeneId`, matching provisional natural-work/reverse bindings and provisional head, and the complete alpha graph in explicitly alpha-only rehearsal indexes and Library views. It never populates a qualified/native-`V0_1` active resolver, release index, or `governing_v0_1` head, and it cannot be cited as post-freeze registration authority. Phase 3 alpha migration must atomically preserve that `pinecoeneId`, CAS the exact provisional head/state into its governing graph/head/state, update both forward and reverse authority states, and retain the provisional receipt as lineage evidence; failure leaves the complete provisional state unchanged.

Every `artifact_semantic_graph` candidate preparation starts from the durable expected authority state and atomically CASes it to `pending_candidate`: `awaiting_artifact_authority` for ordinary register/continue, or `awaiting_additional_authority` with an active Phase 5 lineage profile, exact approved artifact-receipt binding, and exact `AdditionalAuthorityTransitionReceipt` ID/hash/resulting revision for fork/Successor. It never allocates a replacement attempt. `alpha_migration` additionally writes only the `QualificationReceipt`, exact source/`qualifiedFrom` proposal, candidate object, and quarantine indexes. Post-freeze `native_v0_1` additionally writes only the `ContractValidationReceipt`, candidate object, and quarantine indexes and—only for `issue_new`—the non-resolving identity reservation attached to the already-held target lock. Candidate preparation writes no active artifact, governing natural-work/reverse binding, issuance receipt, Library entry, lineage edge, or active domain index.

A human refusal before candidate creation CASes its exact state to `refused_before_candidate`: artifact refusal only from `awaiting_artifact_authority`, extension-authority refusal only from `awaiting_additional_authority` carrying an active evidence/transition profile, bound prerequisite receipt, and exact transition-receipt ID/hash/resulting revision. A terminal compiler/validation failure CASes the then-applicable authority state to `preparation_failed`. Each transaction validates and stores its exact typed `PreCandidateOperationOutcomeEnvelope` plus admitted evidence object, consumes the attempt through that outcome ID, and releases any pending target, with no opaque ID reservation, candidate terminal disposition, or active domain write. A transient interruption performs neither CAS nor consumption, so retrying the same operation resumes the same authority state, attempt, transition receipt where applicable, and target lock.

Later terminal activation atomically writes verified authority/origin/release evidence, the unique terminal disposition, the complete dependency-closed domain indexes and relationships, and only the authorized CAS pointers. Every `artifact_semantic_graph` activation also consumes its proposal attempt, transitions its pending operation to `issued`, and writes an immutable issuance receipt for the activated work/version outcome. `issue_new` additionally converts its exact pending target/ID reservation into governing forward/reverse work mappings; `continue_existing` writes no new work identity. `artifact_semantic_graph` activates artifact, normal form, and semantic topology together; no active artifact may reference a quarantined or missing dependency. Every `continue_existing` activation must also CAS `[issuerNamespace, externalWorkId].currentAuthorizedArtifactVersionId` from its proposal's exact predecessor to the new version in that same transaction. `alpha_migration` additionally CASes the existing forward and reverse mappings from `provisional_alpha` to `governing_v0_1` while preserving `pinecoeneId`; ordinary native continuation requires both already governing. CAS conflict or stale predecessor rolls back the operation transition, receipt, disposition, and complete activation. Artifact continuity writes are impossible for a non-artifact activation variant. Expression save with manifest/blobs, Encounter compilation with its owner-private binding receipt, recipient package, and locator issuance, Return-candidate origin receipt, append-only owner disposition, and fork/Successor linking have equivalently declared transaction boundaries. Mutable Library presentation and owner Return “current disposition” pointers use separate revision/CAS fields so two edits cannot silently overwrite one another; Library presentation choice never substitutes for the mandatory natural-work continuity head. Domain-activation candidates instead use their unique terminal index.

Fork and Successor `issue_new` use separate registrar operations, but each operation has one native-`V0_1` composite domain-activation candidate, one proposal attempt, and one terminal slot. Before human review, the `awaiting_artifact_authority` transaction has already verified namespace/idempotency, locked the distinct target, stored the exact lineage source and proposal, and bound the attempt. Under an active Phase 5 lineage transition profile, artifact creation approval atomically CASes to `awaiting_additional_authority` and emits/stores the exact `AdditionalAuthorityTransitionReceipt` with the approved receipt, profile, and resulting revision. Candidate preparation then verifies that state/profile, unconsumed attempt, record-kind-matched artifact **creation** receipt, exact transition receipt/revision, and separately typed fork or Successor relationship approval bound to the same attempt, creation receipt, and transition receipt/revision; reserves/collision-checks the target `pinecoeneId`; compiles the final graph and exact typed relation against the frozen contracts; and atomically stores the `ContractValidationReceipt`, identity reservation, one quarantined composite candidate, and the `awaiting_additional_authority → pending_candidate` CAS. It writes no `QualificationReceipt`, `qualifiedFrom`, issuance receipt, active work mapping, graph, Library row, or lineage index.

The later terminal activation transaction re-verifies that exact closed set, then writes the immutable terminal disposition; converts the reservations into issuance receipt and forward/reverse producer-work bindings; writes the initial record-kind-explicit artifact semantic graph and authoritative natural-work head; writes the Library entry; writes the typed `forksFrom` or `succeeds` relationship receipt plus both lineage indexes; clears pending indexes; and applies only separately authorized presentation CAS pointers. Graph, relation, mappings, Library entry, terminal disposition, and indexes either all commit or all roll back; no second relation-candidate activation exists. It writes no same-work continuity relationship. Retry with the same canonical request returns the same pending, issued, or declined outcome. A generated-ID or target collision causes an in-memory retry only while the approved natural target/proposal remains unchanged; authority-mode mismatch, crash, decline/activate race, or any write failure leaves no active identity, graph, lineage edge, or Library row.

The internal demo does not create or promote governing fork/Successor relations during provisional-alpha intake. Any such legacy or alpha relation remains read-only evidence and is not `qualifiedFrom` into the governing lineage graph. After the Phase 5 lineage contracts freeze, every new governing fork or Successor is native `V0_1` and can be created only through the composite `artifact_semantic_graph.issue_new` transaction above. A future relation-migration adapter would require its own accepted contract, typed source authority, and atomic vectors; it is outside this demo.

Public release activation likewise commits the exact Player projection, matching Structure- or Expression-release receipt, release manifest, immutable terminal disposition, and released-projection index in one transaction. The public compiler resolves only through that exact active index. Receipt kind mismatch, historical-versus-current evidence-label mismatch, manifest mismatch, or failure at any write boundary leaves no released index entry; generic receipt scans are forbidden.

### 10.3 Serialization/disclosure zones and security boundary

The product maintains three distinct serialized package zones:

1. **Owner-private artifact package** — may contain the full permitted formation envelope, private notes, local Expressions, and owner History.
2. **Public Work projection** — contains only an explicitly published, sanitized projection, release manifest, and verifiable publication/release receipt; historical release evidence is labelled by exact date/revision and does not assert current liveness.
3. **Recipient Encounter package** — contains only the bounded recipient-safe artifact reference, Structure and optional Expression projection, Anatomy, performance, assets, and permissions for that Encounter. The exact owner binding remains in a separate owner-private receipt.

Data does not leak from a higher-disclosure zone because the renderer “ignores” it. Forbidden bytes must not be serialized into the lower-disclosure package at all.

These are not automatically security trust zones when all data lives in one same-origin browser. A same-browser recipient is explicitly a simulation: client code or a person with local storage access may reach owner data. Real owner/recipient isolation later requires separate authenticated principals, origins or server-side authorization, storage policies, and negative-access verification.

### 10.4 Legacy coexistence: chosen dual-database strategy

The internal demo does **not** upgrade `pinecoene-showcase-v0` beyond its existing v1/v2 schema. It creates a separate governing database, provisionally `pinecoene-internal-demo-v0`, whose first schema version contains only the new alpha stores. This avoids breaking the existing app or rollback path when an older build opens the browser database.

The coexistence adapter:

- never instantiates the current Dexie custody class against a v1 legacy database, because declaring v2 would upgrade it;
- discovers an existing database/version without requesting a higher version, then uses raw IndexedDB read-only transactions only after its exact v1 or v2 store/index fingerprint is allowlisted;
- if safe version discovery is unavailable or the fingerprint differs, reports `LEGACY LIVE READ UNAVAILABLE` and accepts only an explicit legacy export file from the existing app;
- writes no new objects, dispositions, indexes, version metadata, or upgrade transformations into legacy tables;
- opens `pinecoene-internal-demo-v0` for the internal demo's new alpha objects, qualified `V0_1` representations, native `V0_1` objects, candidate quarantine, receipts, reservations, and active indexes; legacy showcase rows remain read-only in their original database;
- exposes legacy rows through `LegacyArtifactPointerV0_1Alpha1` without inventing normal-form identity;
- requires an explicit qualification/import act plus the record-kind-appropriate curator/admission authority receipt to create a new artifact in the new database;
- records that act as `qualifiedFrom` or `derivedFrom`, never as in-place migration;
- preserves legacy serialized values without rewrite and claims byte-exact preservation only for captured raw archives with hashes;
- dispatches schema/package versions explicitly and fails closed on unknown kinds;
- keeps existing showcase routes and rollback behavior independent of the local demo database.

Required database tests seed authentic-shaped stores at legacy v1 and v2, capture database version, store/index fingerprints, record counts, and canonical export hashes, run read/list/export, then prove every captured value is unchanged. Tests explicitly prohibit opening v1 through the v2-declaring custody class. They also prove safe refusal when version discovery/fingerprint validation is unavailable, file-export fallback, coexistence with a fresh new database, technical qualification into candidate IDs, refusal to register a changed artifact without its authority receipt, storage/quota failure rollback, interrupted new-database transaction recovery, scoped deletion, and unchanged behavior when the demo code is removed. A later production migration may choose another strategy only through a separately accepted migration specification.

---

## 11. Information architecture

These are candidate **local-only** internal-demo routes. They are not authorized route changes. `noindex` is an indexing policy, never an access boundary.

The default profile is not hosted. Private fixtures and selected-history assets are excluded from every hosted build. If the team later needs a shared hosted Preview, a separately approved build must add a real authorization gate, default-denied route protection, negative-access tests, and a private asset-delivery boundary. A secret URL or Vercel Preview protection assumption is insufficient.

| Route | Purpose |
| --- | --- |
| `/demo` | Guided internal-demo launcher and facilitator script |
| `/demo/library` | Durable artifact shelf, filters, standing, versions, and preferred Expressions |
| `/demo/import/oedit` | Prepared package import and exact validation receipt |
| `/demo/p/[pinecoeneId]` | Visibly mutable preferred/latest alias; never used for citations or packages |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]` | Exact semantic artifact page with an explicitly mutable/default Structure-profile selector; not an exact visual citation |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/sp/[structureProjectionId]` | Exact immutable neutral Structure projection and visual citation |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/sp/[structureProjectionId]/e/[expressionVersionId]` | Exact artifact, Structure projection, and Expression |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/sp/[structureProjectionId]/studio` | Expression authoring only; saves an immutable Expression version against that projection |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/history` | Artifact, Expression, Encounter, response, and Successor lineage |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/sp/[structureProjectionId]/share` | Builds a governed Structure-only Encounter without fabricating an Expression |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/sp/[structureProjectionId]/e/[expressionVersionId]/share` | Consumes an exact saved Expression; builds audience, grants, Preview, and export |
| `/demo/p/[pinecoeneId]/v/[artifactVersionId]/responses` | Local response candidates and human disposition |
| `/demo/s/[shareId]` | Neutral acquisition shell, Locket/direct Encounter, exact recipient-safe Player |
| `/demo/about` | Short product explanation and boundary with Œdit |

The `/demo` prefix is a deployment shell, not artifact identity. A later public route manifest may alias the same exact-version page components after separate migration approval. The existing `/` Public Door remains untouched during this work.

### 11.1 Human-facing modes

Protocol vocabulary remains available in Details and Passport, but the primary UI uses plain language:

| Human label | Protocol concept |
| --- | --- |
| Explore | Fold / settled Structure |
| Anatomy | semantic inspection |
| Time | Becoming / transition replay |
| History | lineage and versions |
| Details | Passport, hashes, standing, permissions |
| Make art | Expression authoring |
| Share | Encounter/Offering compilation |
| Respond | bounded Return candidate |

### 11.2 Navigation principle

The internal demo is not a dense protocol encyclopedia. Global navigation is calm and ordinary. Advanced terms appear after the corresponding action, in the instrument and Passport.

The proposed local-demo global set is:

```text
Pinecœne · Library · Import · About
```

`Studio`, `Share`, `Responses`, and `History` are contextual to an artifact.

---

## 12. Core journeys

### 12.1 First-time teammate

1. A real object appears before an essay.
2. The teammate turns it.
3. They select one visible part and see a short human explanation.
4. They choose `Show structure`; the scene changes to neutral Structure and the Anatomy inspector reveals the selected correspondence.
5. They choose `Time` and watch the governing formation record become the settled form.
6. They return to Expression and understand that both views are the same artifact.
7. Only then does the product explain Structure, Anatomy, Expression, and Encounter.

Success: the person can say, in their own words, “the structure comes from the record; the art is authored around it.”

### 12.2 Import a prepared Œdit package

1. Open `/demo/import/oedit`.
2. Choose one supplied package.
3. See producer, schema, coverage, standing, disclosure ceiling, and package hash before import.
4. Validate locally.
5. On success, receive an immutable import receipt and new Library item.
6. On failure, see exact unsupported/malformed reasons; no partial write occurs.
7. Open the artifact in the canonical Player.

Success: the person understands that Pinecœne received admitted structure; it did not read the source live.

### 12.3 Make art around a Pinecœne

1. Open `Winter Gathering` in Studio.
2. Duplicate its neutral or existing Expression.
3. Choose `Christmas Tree` as a starting template.
4. Bind trunk, branches, lights, and selected ornaments as direct semantic, interpretive-derived, or ornamental elements.
5. Add clearly ornamental snow, room light, or music.
6. Switch the scene among `Structure / Expression / Both` and toggle the Anatomy inspector throughout.
7. Save a new immutable Expression version.
8. Compare hashes: normal form and Structure unchanged; Expression changed.

Success: the art is materially different from the neutral instrument and passes mapping lint.

### 12.4 Share and respond

1. Choose either the exact Structure projection alone or one exact Expression version bound to it.
2. Select audience, Address, projection preset or custom capability grants, inspection material classes, reuse, and response permissions.
3. Compile an owner-private binding receipt and a separate recipient-safe package; Preview the exact recipient package bytes.
4. Export a local share package or open a same-browser demonstration Locket.
5. Recipient opens the exact package and sees only permitted material and the exact or encounter-scoped pseudonymous identity level granted.
6. Recipient optionally creates a local response candidate.
7. Owner reviews it separately.
8. Owner records exactly one lawful outcome: `no change`, `hold OPEN`, or `reject`; `create candidate fork/study` under a `ForkAuthorityRef` with candidate standing; or `create authorized Successor` under a distinct `SuccessorAuthorityRef` and `succeeds` lineage. The two creation choices never share a label or receipt.

Success: no screen claims remote delivery, receipt, acceptance, revocation, or publication.

### 12.5 Learn through Pinecœne’s own history

1. Open `Pinecœne of Pinecœne`.
2. See its visible partial-coverage label.
3. Turn a growth-ring or living-cone Expression.
4. Toggle Anatomy to reveal exact included commits, documents, and admitted decision links.
5. Use Time to traverse selected recorded stages.
6. Inspect one milestone and open its permitted source citation.
7. See typed source limits and standing: chat `NOT SUPPLIED`, documents `CANDIDATE · UNCOMMITTED`, live state `REVALIDATION REQUIRED`, and human intent `NOT EVIDENCED`.
8. End at the visibly unfinished continuation tip: this spec and later builds belong to a Successor, not silently inside the original source set. The tip is an interpretive metaphor, not an `OPEN` disposition.

Success: the team learns the instruments while also learning what changed, which explanations are source-stated or human-admitted, and which explanations remain unresolved.

---

## 13. Progressive teaching model

The complete demo teaches five actions in order:

1. **Turn it.** The object is spatial and addressable.
2. **Choose a part.** Every meaningful feature has an identity.
3. **Open Anatomy.** The visible feature resolves to the governing formation record and its visible record kind.
4. **Open Time.** The settled form has a deterministic becoming.
5. **Share a bounded view.** The same object can travel without exposing everything.

The first four lessons ship with the Phase 3 Structure/Anatomy instrument. The fifth appears only when the governed Share/Encounter flow exists in Phase 5. Phase 6 accepts the complete five-action journey. Each available lesson is dismissible and available again in `/demo`. Reduced-motion users receive explicit semantic steps, not a weakened autoplay.

The interface should not lead with `normal form`, `semantic conformation`, `aperture grant`, or `transition score`. Those terms belong in the inspector after the user has performed the corresponding action.

---

## 14. Internal-demo specimen portfolio

The demo requires different purposes and visual languages so the team does not mistake a fixture for the product ontology.

### 14.1 Genesis

- Purpose: continuity with Pinecœne’s origin and public story.
- Historical standing: `RELEASE-RECORDED · PUBLISHED WORK IN PUBLIC DOOR V0.2` under its exact recorded release profile.
- Internal-demo standing: a separately imported projection may be labelled `LEGACY / CALIBRATION`; this does not rewrite or revoke Genesis’s historical published standing.
- Structure lesson: an incomplete, OPEN form can still be coherent.
- Expression lesson: the existing gold/cosmic treatment becomes one named Expression, not the universal house style.

### 14.2 Papillœn

- Purpose: exact Structure/Anatomy exemplar.
- Source: only a separately permitted prepared projection from the Papillœn project.
- Structure lesson: typed relations and exact geometry.
- Expression lesson: the neutral instrument can itself be beautiful without decorative evidence.
- Truth label: exact conformance scope must be declared; no live-production claim without revalidation.

### 14.3 Winter Gathering

- Purpose: prove that a personal/event Pinecœne can become art.
- Source: synthetic internal-demo record.
- Structure lesson: people, moments, relations, promises, outputs, explicitly authored OPEN conditions, and separately labelled absences.
- Expressions: `Neutral Structure`, `Christmas Tree`, and optionally one photographic treatment.
- Acceptance: the tree is materially different while normal-form and Structure hashes remain unchanged.

### 14.4 Project Relay

- Purpose: prove practical business and operating value.
- Source: synthetic launch/project record.
- Structure lesson: dependencies, decisions, evidence, milestones, risks, ownership, and unresolved gates.
- Expressions: neutral map plus one restrained editorial/briefing treatment.

### 14.5 Commitment Case

- Purpose: test a human promise or agreement without treating intention as fulfilment.
- Source: synthetic by default.
- Optional private case: PromiseMe Case 0 may be used locally only under separately evidenced source, participant, processing, and disclosure authority.
- Structure lesson: promise, parties, conditions, evidence, OPEN duties, and optional response.
- Red line: no real person’s testimony, Return, admission, acceptance, or authority is inferred from a supplied document or polished mission deck.

### 14.6 Pinecœne · A Pinecœne of Pinecœne

- Working ID: `PCN-SELF-0001`.
- Working title: `The project learning what it is`.
- Purpose: advanced internal tutorial, lineage specimen, and honesty test.
- Standing: `PROPOSED INTERNAL DEMO FIXTURE · REPOSITORY-DERIVED · CANDIDATE RECONSTRUCTION · NOT YET COMPILED · UNSEALED · NOT A PUBLIC WORK`.
- Coverage: `SELECTED CORPUS · PARTIAL COVERAGE`.
- Full definition: Section 15.

---

## 15. Pinecœne of Pinecœne

### 15.1 Why build it

The selected repository contains successive prototypes, documents, builds, and evidence. That makes it suitable for a bounded calibration specimen on material the team already cares about.

The following are candidate historical readings that require exact sources or human admission. Git alone does not establish failure, detour, recovery, influence, or motive:

- an early visual idea;
- a deterministic Studio;
- a Locket-first detour;
- the recovery of the Studio/Fold hierarchy;
- a public-story detour;
- the object-first Door;
- the projection thesis;
- Papillœn’s exact-geometry influence;
- the current Structure/Expression reset.

### 15.2 It is a curated record, not the complete truth

Git history proves committed files, parentage, authorship metadata, and timestamps within the repository. It does not prove complete intent, causality, acceptance, or every human conversation.

Selected chats are authored projections and must be exported, hashed, scoped, and sanitized before use. They are not “all our conversations.” Registered untracked documents are available as `CANDIDATE · UNCOMMITTED`; deleted branches, private conversations, browser activity, and human decisions outside the declared source set remain `NOT SUPPLIED` or `EXCLUDED` unless separately admitted. The existing `PCN-0002 · This Chat` fixture is `fixture_authored`; its phase anchors and `exactRecord` fields are not transcript evidence and must not be presented as exact chat quotations.

The visible Passport must say:

> `CURATED SELECTED RECORD · REPOSITORY-DERIVED · PARTIAL COVERAGE`

If approved chat exports are later included, the Passport may add:

> `INCLUDES SELECTED HASH-BOUND CHAT EXPORTS · NOT COMPLETE CONVERSATION COVERAGE`

The specimen may claim complete accounting of the **declared selected corpus** if tests prove it. It may not claim:

- complete project history;
- complete conversation coverage;
- a unique reconstruction of intent;
- that every chronological adjacency is causal;
- “what really happened” beyond supplied and explicitly included records.

### 15.3 Source-set manifest

During alpha work, draft `CuratedSourceSetManifestV0_1Alpha1`. Phase 6 begins by deciding and receipting the exact Git cutoff and whether any chat material is authorized. Any permitted exact exports and sanitized derivatives are then obtained, hashed, and reviewed. Only after those inputs exist may the team freeze the actual selected corpus, run the manifest qualification vectors, and create the candidate `CuratedSourceSetManifestV0_1` plus its domain-scoped qualification receipt. The source-set curator then approves that exact candidate ID/hash and frozen corpus; only the atomic activation transaction makes it the active manifest. Self-history formation cannot begin until that ordered preflight passes. The manifest contains:

- exact repository URL and local identity;
- selected refs and cutoff commit;
- exact included commit IDs;
- exact included files and SHA-256 hashes;
- exact private chat export receipt files, raw hashes, and message ranges when supplied;
- separately hashed sanitized excerpt derivatives, redaction map, source-coordinate mapping, rights, and disclosure receipt when any chat text enters the specimen;
- selection and omission rationale;
- curator and named authority;
- disclosure and sanitization disposition;
- unavailable source classes;
- `coverageKind = selected_corpus`;
- `completeProjectCoverageClaim = false`.

No agent or developer may silently scrape the entire conversation history into the artifact. Chat inclusion requires separate export and source-set approval.

Every source and visible item carries two independent labels:

1. **Epistemic type** — one of the Section 1.3 types, including `REPOSITORY FACT`, `DOCUMENT-STATED`, `BUILD EVIDENCE`, `HUMAN TESTIMONY`, `HUMAN-ADMITTED INTERPRETATION`, `CANDIDATE INFERENCE`, or `CONTRADICTION / RESIDUAL`.
2. **Lifecycle standing** — one of the Section 1.3 standings, including `COMMIT-RECORDED`, `IMPLEMENTATION-RECORDED`, `RELEASE-RECORDED`, `CANDIDATE · UNSEALED`, `OPEN`, `DEFERRED`, `NOT SUPPLIED`, or `EXCLUDED`, plus any explicit source/state qualifier.

The specimen does not use a bare `CURRENT` badge. It distinguishes `LOCAL CHECKOUT OBSERVED`, `RELEASE RECORDED` with an exact date and executable SHA, and `LIVE STATUS · REVALIDATION REQUIRED` until a new hosted verification is performed. `LIVE NOW · VERIFIED [timestamp · executable SHA]` is reserved for a fresh hosted verification receipt.

### 15.4 Self-reference cutoff

The artifact avoids an infinite loop by freezing a source cutoff.

The commit containing this specification may be the final source-set cutoff if Deniz approves it. The generated normal form, fixture files, screenshots, and implementation commit occur **after** the cutoff and are not claimed as sources inside the same artifact.

Later work creates a Successor:

```text
PCN-SELF-0001  selected history through cutoff A
      ↓ successor relation
PCN-SELF-0002  selected history through cutoff B, including PCN-SELF-0001
```

### 15.5 Candidate historical spine

The currently observed milestone commits form one linear Git ancestry chain. Topic refs point to different commits on that chain; they must not be drawn as divergent Git branches. The curator should consider, but not automatically admit, these milestones:

| Commit | Recorded milestone | Candidate role |
| --- | --- | --- |
| `89cb8b7` | Initial public showcase | early visible object |
| `0e210cc` | `noindex` boundary | standing/disclosure correction |
| `d3f0449` | Curated Studio V1 | deterministic owner instrument |
| `d5d7c2c` | public story and Studio machinery | narrative/product synthesis |
| `aebf18b` | Public Door source/evidence intake | byte-exact intake; no approval or implementation authority |
| `cdb63db` | Public Door V0.2 | implemented Door profile |
| `4323055` | deployment-aware external-request test correction | executable SHA named by the later release receipt |
| `39dd70d` | production release receipt | records the release of executable SHA `4323055`; it is not itself the deployed executable |
| future committed/approved spec cutoff | Structure/Anatomy/Expression/Encounter reset | currently an uncommitted candidate; eligible only after commit and separate approval |

Commit messages are not sufficient semantic interpretation. The formation process must cite exact files and ask a human to admit conceptual decision links.

### 15.6 Normal-form mapping

Candidate mapping:

- **elements** — exact commits, accepted specifications, decision records, key fixtures, screenshots, and approved chat excerpts;
- **Git edges** — exact parent relationships;
- **supersedes edges** — only where an explicit document or human admission supports them;
- **influences/causal edges** — human-admitted, never inferred solely from time order;
- **regions** — showcase, Studio, public story, Door, projection theory, Papillœn alignment, product reset;
- **OPEN conditions** — only exact semantic items or relations carrying an authorized leave-open disposition; other gaps remain `NOT SUPPLIED`, `EXCLUDED`, `DEFERRED`, `NOT EVIDENCED`, or `REVALIDATION REQUIRED`;
- **assets** — screenshots and excerpts bound to exact source records;
- **successor relation** — later source cutoff, never silent mutation.

Uncommitted candidate specifications sit outside the immutable Git spine as candidate sheets. They may interpret or propose an extension; polish does not grant them ancestry, acceptance, or current-product standing. A recorded inconsistency between two admitted sources appears as a seam or contradiction, not as an OPEN gap and not as a silently repaired story.

### 15.7 Expression concept: Growth Ring / Living Cone

The first Expression should make project history feel like a living object rather than a Git diagram:

- each included and qualified milestone becomes a scale, ring, or leaf;
- conceptually different approaches may branch as attached regions only when an explicit record or human admission supports that relation; the underlying Git spine remains linear;
- abandoned or corrected directions leave scars rather than disappearing;
- exact evidence-blue points mark source records;
- warm material marks human-admitted product commitments; fixture-authored interpretations use a visibly different standing treatment;
- explicitly authorized OPEN conditions remain cool and unclosed; NOT SUPPLIED, DEFERRED, and unverified conditions use distinct non-OPEN treatments;
- screenshots or short excerpts appear only when selected;
- the derived continuation tip remains visibly unfinished toward the next Successor without claiming an `OPEN` semantic state.

This is one Expression. Anatomy must still reveal the exact underlying selected record.

The history mode is called `Recorded Build Unfolding` in the first specimen, not causal `Becoming`. Git parentage and timestamps establish sequence. Causal Becoming is earned only after sufficient attributable intent evidence is admitted.

### 15.8 Source limits, absent inputs, deferred capabilities, and unresolved decisions

At minimum, the first version declares:

- selected chat exports: `NOT SUPPLIED · OPTIONAL`; complete chat coverage is neither required nor claimed;
- selected conversations: `NOT CURATED / NOT SANITIZED` until a separate receipt exists;
- registered untracked documents: `CANDIDATE · UNCOMMITTED`;
- release/checkouts: the recorded release names executable `4323055`, local `main` was observed at `d5d7c2c`, and the public-site ref ends at `39dd70d`; these are different points in one ancestry and present live state is `REVALIDATION REQUIRED`;
- human rationale outside attributable records: `NOT EVIDENCED`;
- live Œdit formation bridge: `NOT IMPLEMENTED · DEFERRED`;
- cloud Library and accounts: `NOT IMPLEMENTED · DEFERRED`;
- Expression authorship and publication policy: `UNRESOLVED DECISION`.

None of these conditions is labelled `OPEN` unless an authorized disposition explicitly leaves a specific semantic question open.

### 15.9 Acceptance

The self-history specimen passes only if:

- every included item falls inside the approved manifest and preserves its record kind/standing;
- every conceptual edge has an explicit source plus an appropriate named-human admission or fixture-curator authorship receipt;
- the partial-coverage label is visible before deep inspection;
- a teammate can toggle Expression and Anatomy;
- changing the Growth Ring Expression leaves normal-form and Structure hashes unchanged;
- at least one milestone resolves to an exact permitted source citation;
- `Recorded Build Unfolding` uses commit parentage, recorded timestamps, or explicit version dates without inventing causal chronology;
- the continuation tip clearly indicates material outside the cutoff and is labelled interpretive rather than semantic `OPEN`;
- no private conversation or source appears in recipient-safe packages.

---

## 16. Visual and interaction system

### 16.1 Library

The Library is a calm gallery of durable objects, not a dense admin dashboard.

Each card shows only useful truth:

- preferred Expression or neutral Structure poster;
- title and purpose-neutral type label;
- standing: governed, authored study, legacy, or proposed;
- artifact version;
- number of Expressions;
- local/cloud custody truth;
- OPEN indicator where relevant;
- last local activity as Library metadata, not semantic identity.

### 16.2 Player

The Player is object-first:

- large stage;
- direct turn, zoom, and selection;
- `Structure / Expression / Both` scene control;
- independent Anatomy inspector toggle;
- independent Rest/Time state plus History and Details panels;
- synchronized spatial and textual selection;
- quiet controls that withdraw when not needed;
- visible fallback when WebGL is unavailable.

### 16.3 Expression Studio

Desktop uses a center stage with task-specific side controls. Mobile uses a full-stage object and bottom sheets; it never compresses desktop rails into a narrow column.

Studio groups controls by consequence:

1. `Meaning` — direct semantic, interpretive-derived, and ornamental bindings;
2. `Material` — palette, texture, light, atmosphere;
3. `Media` — images, illustrations, typography, sound;
4. `Motion` — authored choreography and camera;
5. `Check` — Anatomy comparison, hashes, mapping lint, disclosure;
6. `Save` — create an exact immutable Expression version, then continue to the separate Share surface.

The Player core is stateless with respect to editing and sharing. Expression Studio saves an immutable Expression version; the Share shell consumes it. History and Responses are read/disposition shells, not hidden modes inside one stateful Studio component.

### 16.4 Visual grammar

- Anatomy: black, bone, restrained neutral line, evidence blue, cool OPEN light.
- Expression: authored per work; no universal gold/cosmic house style.
- Interface: quiet charcoal, ordinary legible navigation, sparse control chrome.
- Typography: Newsreader for artifact voice, Geist for interface text, monospace only for provenance, hashes, timing, and standing.
- Particles: permitted only when semantic or explicitly ornamental; never ambiguous.
- Motion: causal in Anatomy, authored in Expression, reduced to explicit steps under reduced-motion preference.
- Sound: off by default, begins only after a user gesture, and may be deferred from the first internal demo.

### 16.5 Demo discovery

The local `/demo` entry should demonstrate the thesis, not lecture about it:

1. neutral Structure appears;
2. the visitor turns and selects it;
3. the same object gradually receives an Expression;
4. a short line appears: `Every Pinecœne has a structure. What it becomes is yours.`;
5. the visitor can enter the Library or open the guided demo.

This is a candidate local internal surface. It does not replace `/` or authorize changes to the current public Door.

---

## 17. Technical architecture

### 17.1 Retained stack

Retain unless qualification disproves the choice:

- Next.js App Router;
- strict TypeScript;
- React and React Aria for accessible interface primitives;
- direct Three.js and Lit for the spatial runtime;
- SVG/DOM for neutral or fallback Structure where appropriate;
- Web Audio only for user-initiated Expression sound;
- Dexie/IndexedDB for internal-demo persistence;
- Ajv for serialized boundary validation;
- JCS/canonical SHA-256 for identity;
- seeded PRNG only for deterministic derived placement.

Never use `Math.random()` for identity-bearing geometry, movement, or package generation.

### 17.2 Runtime decomposition

```text
Formation package validator
        ↓
Normal-form compiler / registrar
        ↓
Structure projection compiler
        ↓
Canonical Structure + separate Anatomy index
        ↓                         ↓
Expression compiler         Encounter compiler
        ↓                         ↓
Role-aware projection compiler / exact recipient package
        ↓
CorePlayerProjection | ExpressionPlayerProjection | RecipientPlayerProjection
        ↓
Canonical stateless Player
   ├─ neutral Structure renderer
   ├─ Expression renderer
   └─ composite Both renderer

Recipient path:
exact Encounter package → neutral acquisition/Locket
→ validate recipient discriminator and package hash
→ RecipientPlayerProjectionV0_1Alpha1 → canonical Player

Owner compilation path:
exact owner artifact + grants → owner-private EncounterBindingReceiptV0_1Alpha1
                         └──→ exact serialized recipient Encounter package
```

Vital Sign remains an explicitly separate experimental renderer. It may share camera, material, and runtime utilities, but it cannot define Structure authority.

### 17.3 Player input

The canonical Player never reads Dexie, a raw Formation Envelope, or an owner artifact directly. Its runtime input is a local discriminated union, not a fourth independently qualified wire contract:

```text
CanonicalPlayerInput =
  CorePlayerProjectionV0_1Alpha1
    projectionKind = owner_core | public_core
    exact permitted artifact reference
    Structure + Anatomy + semantic transition projection
    fallback poster/anatomy + projection hashes

| ExpressionPlayerProjectionV0_1Alpha1
    projectionKind = owner_expression | public_expression
    Core fields + exact Expression projection
    permitted Expression asset manifest

| RecipientPlayerProjectionV0_1Alpha1
    projectionKind = recipient
    exact-granted or encounter-scoped pseudonymous artifact reference
    recipient-safe Structure/Anatomy/optional Expression projection
    permitted performance + capability grants + assets
    fallback poster/anatomy + recipient package/projection hashes

Common role-safe fields:
  recordKind = admitted | authored_fixture
  visibleStanding = role-safe non-optional standing label
```

`CorePlayerProjectionV0_1Alpha1` is the only Player wire shape eligible for Phase 3 qualification. `ExpressionPlayerProjectionV0_1Alpha1` qualifies with the Expression domain at Phase 4. `RecipientPlayerProjectionV0_1Alpha1` qualifies with the Encounter domain at Phase 5. The canonical Player dispatches by exact schema and discriminator and fails closed on a variant not yet qualified for the governing journey.

The owner compiler may derive an owner projection from the full owner-private package. The public compiler only receives a released public projection accompanied by the matching exact Structure- or Expression-projection release receipt and release manifest; recorded historical evidence never becomes a present-live claim. The recipient compiler only receives `EncounterSafeProjectionV0_1Alpha1`. Witness rejects every input whose discriminator is not `recipient` and never receives the owner artifact, producer work reference, owner-private Encounter binding receipt, hidden Anatomy index, or owner scene.

The former `FoldPlayerInputV0_1` may be retained as a legacy alias during migration, but it is never accepted by the governing Player path without an explicit adapter to one exact qualified variant.

Across the union, each variant contains only the fields authorized for its domain:

- role-safe artifact reference; owner/public may use an exact released version identity, while recipient uses the identity level explicitly granted;
- role-safe Structure projection;
- role-safe Anatomy projection;
- Expression identity/assets only in the Expression or recipient variant;
- Encounter performance, grants, package identity, and recipient assets only in the recipient variant;
- fallback poster/anatomy;
- only role-safe projection/package/asset hashes; owner canonical identities and hashes are absent unless the grant explicitly permits them.

Door, Library preview, artifact detail, Studio preview, Offering Preview, and recipient Witness should converge on this Player rather than implement imitations. Offering Preview renders the exact recipient package bytes. The owner may inspect its binding receipt in an adjacent owner-only panel, but those bytes never enter the Preview iframe/player input, recipient export, or Witness route.

### 17.4 Performance and fallback

- dynamically load spatial renderers;
- serve a server-visible, hash-bound poster/anatomy before WebGL;
- suspend render loops when off-screen or backgrounded;
- target smooth 60 fps desktop and at least 30 fps representative mobile;
- support 390×844 without horizontal overflow;
- preserve keyboard selection and visible focus;
- provide a lawful SVG/DOM form and text Anatomy when WebGL fails;
- reduced motion uses semantic phase steps;
- storage denial leaves the viewer usable and explains why edits cannot persist.

### 17.5 External requests

The internal demo includes:

- no analytics;
- no third-party trackers;
- no unapproved remote fonts;
- no arbitrary external asset fetches;
- no live Œdit network call;
- no model invocation required for the core journey.

All fixture assets are local, declared, and hash-bound.

The build has an explicit profile discriminator:

- `public` — current approved public surfaces only; contains no private/internal fixture registry or assets;
- `local_internal` — enables `/demo/*` and may load approved local private material; deployment scripts must refuse Vercel/hosted promotion;
- `hosted_internal` — absent from this specification; may be added only with a separately accepted authorization-gate and asset-custody plan.

`noindex` applies to discoverability. It never changes which profile bytes enter a build.

---

## 18. Proposed repository disposition after baseline reconciliation

The existing implementation contains valuable machinery. The reset is a reclassification and generalization, not a deletion project.

### 18.1 Retain and generalize

- canonical hashing and deterministic compiler utilities;
- Ajv validation at serialized boundaries;
- renderer-neutral scene intent;
- the Lit/Three `FormStage` runtime and semantic selection;
- Locket and Witness composition;
- exact Preview/Witness parity principle;
- reduced-motion, keyboard, responsive, and no-WebGL work;
- existing Dexie v1/v2 read/export knowledge, wrapped by the chosen dual-database coexistence adapter;
- the object-plus-inspector Studio composition;
- Fold, Becoming, Passport, Lineage, Offering, Return, and Successor concepts;
- `noindex` and external-request discipline as indexing/network controls, while adding a real local-only or authenticated custody boundary for private demos.

### 18.2 Reframe

- `StudioShelf` becomes the Library/repository surface.
- `StudioInstrument` is decomposed: a stateless/capability-scoped Player core is composed by separate Library, Expression Studio, Share/Encounter, History, and Responses shells.
- Record becomes a read-only formation-record/Passport projection with admitted versus authored-fixture standing visible.
- Admission and Recognition move upstream; a manual formation adapter is deferred and is not hidden inside the first Expression Studio.
- Genesis retains its historical `RELEASE-RECORDED` standing as the Public Door V0.2 published Work; a separately imported internal-demo projection may be labelled `LEGACY / CALIBRATION` without rewriting that history.
- `PCN-0002 · This Chat` remains `FIXTURE-AUTHORED` until separately qualified and cannot be described as an exact transcript.
- the gold/cosmic renderer becomes a named Expression.
- the Locket remains a downstream consent/passage vessel, not the product center.
- Vital Sign remains an experimental presence study, not a claim of agency or Fold authority.

### 18.3 Retire from the active core, preserve as legacy

- sentence-boundary pseudo-reading in `src/lib/reader.ts`;
- `MakerExperience.tsx` as the primary creation model;
- fixture-specific universal types in `studio-contracts.ts`;
- hard-coded tetrahedron, Bag, seven-phase, Address, or permanent-OPEN assumptions in `studio-compiler.ts`;
- unknown-ID fallbacks to a convenient specimen;
- legacy Offering or Successor simulations as governing packages;
- any public copy that implies cloud custody, remote delivery, acceptance, revocation, or live AI.

These remain readable, testable, and exportable behind explicit legacy/calibration adapters until a later removal decision.

### 18.4 Baseline warning

The current local `main` checkout and the recorded public-production branch/history are not assumed to be identical. Before implementation:

1. establish exact local branch, SHA, dirty state, and untracked sources;
2. establish exact production deployment, Git SHA, aliases, headers, and route behavior;
3. identify the intended implementation base;
4. use an isolated `codex/` worktree;
5. leave production untouched through internal-demo acceptance.

---

## 19. Phased delivery

### Phase 0 — Boundary, canonicalization, and provisional portfolio

Freeze only the seams that do not depend on a premature universal semantic vocabulary.

Deliver:

- accepted responsibility boundary with Œdit and named human seats;
- accepted four-layer invariants;
- canonicalization, array-normalization, full-hash/content-ID, producer-namespace authorization, producer-work deduplication, target-key intent, reverse work-identity uniqueness, identifier/locator issuance, schema-versioning, extension-namespace, authority-receipt, and disclosure rules;
- artifact/version/fork/Successor identity law;
- serialization/disclosure-zone law and strictly local/non-hosted default profile, with a real authorization boundary required before any private hosted build;
- dual-database coexistence and later qualification plan;
- provisional `v0.1-alpha.1` schemas and validators;
- exact manifests for Genesis, Papillœn, Winter Gathering, Project Relay, and at least one prepared Œdit-shaped envelope;
- provisional vectors for every materially different specimen family.

Gate:

- every specimen family and the prepared Œdit envelope can be represented without fixture-specific fields in the shared core;
- identical validated formation-record input under the same compiler produces identical normal-form and semantic-topology bytes; the same stable identity/continuity/version envelope additionally produces the same artifact-version ID;
- every content ID uses the schema-declared ID-free/self-hash-free preimage and encodes its entire domain-separated digest;
- Expression and Encounter inputs cannot enter those canonical bytes;
- unknown schemas fail closed;
- no contract depends on an Œdit database identifier or renderer coordinates;
- Deniz accepts the boundary and authorizes Phase 1.

The normal-form primitive vocabulary is **not** frozen merely because two fixtures compile. Formation, semantic, Structure, and Anatomy schemas remain alpha/candidate until the multi-purpose Anatomy portfolio passes Phase 3. Expression and Encounter-domain schemas remain alpha through their own later qualification gates.

### Phase 1 — Ingress, repository, and compatibility core

Deliver:

- `PinecoeneFormationEnvelopeV0_1Alpha1` validation;
- `/demo/import/oedit` local import surface;
- immutable import receipts;
- persistent provisional-alpha issuance plus natural/reverse producer-work registries, schema-tagged `provisional_alpha`, with transactional replay and a specified no-new-identity Phase 3 handoff;
- fail-closed producer-namespace authorization registry and unique reverse `pinecoeneId` registry across provisional, governing, and pending-reservation states;
- at least two differently purposed prepared packages, one using an Œdit producer profile;
- isolated `pinecoene-internal-demo-v0` stores behind a persistence-independent repository interface;
- legacy decoders and explicit calibration adapters;
- owner-private archive import/export validation;
- no partial write on failure.

Gate:

- both prepared packages and all authored specimens create exact addressable **provisional-alpha** artifact versions with stable `pinecoeneId` values reserved for later governing handoff;
- malformed, unsupported, or disclosure-invalid packages are rejected;
- no raw private source or upstream internal identifier enters the repository;
- the UI says `prepared local import`, not `live Œdit sync`;
- import results are reproducible from exact package bytes;
- same-key retries and cross-key re-imports of one producer work return the original provisional issuance; continuation, fork, and Successor intents remain distinguishable but are rejected/deferred until their frozen candidate paths exist rather than being collapsed into provisional register;
- spoofed/unverifiable namespaces, fork/Successor reuse of a bound target key, and conflicting reverse work-identity bindings are rejected with no partial write;
- legacy records remain unrevised and are not silently promoted; byte-exact claims apply only where raw bytes and hashes exist.
- seeded `pinecoene-showcase-v0` v1 and v2 coexistence tests pass without upgrade writes.

### Phase 2 — Local Library and canonical Player

Deliver:

- `/demo`, `/demo/library`, exact semantic `/demo/p/[id]/v/[versionId]`, and exact visual `/demo/p/[id]/v/[versionId]/sp/[structureProjectionId]` surfaces;
- one stateless Player core consuming one versioned input contract;
- separate Library, Player, History, and Details shells;
- Genesis, Papillœn, Winter Gathering, and Project Relay through the shared repository;
- governing neutral Structure scene state; any retained legacy Expression/Both view stays behind an explicit legacy adapter and cannot enter the new Player contract;
- independent Rest/Time state and lawful poster/no-WebGL fallback;
- legacy items visible but explicitly labelled.

Gate:

- all specimens use the same artifact contract and Player core;
- every Library card resolves to an exact version and truthful standing;
- semantic citations use immutable version addresses; visual citations and golden evidence also pin Structure projection; packages never use latest/default aliases;
- no unknown ID selects another artifact;
- keyboard, reduced motion, 390×844, Chromium, desktop WebKit, and mobile WebKit pass;
- the demo runs locally without bundling private fixtures into any hosted output;
- current public routes and production deployment remain unchanged.

### Phase 3 — Anatomy, progressive teaching, and core/Structure qualification

Deliver:

- synchronized spatial/text selection;
- exact Anatomy entries, epistemic types, and lifecycle standing;
- permitted provenance links;
- OPEN, NOT SUPPLIED, EXCLUDED, and withheld-state treatment;
- four-step core teaching overlay: Turn, Choose, Anatomy, and Time;
- Papillœn-style neutral Structure profile;
- Anatomy privacy tests;
- revised candidate schema derived from the complete specimen portfolio;
- qualified `V0_1` validators/decoders for Formation, identity, normal form, semantic topology, Structure, Anatomy, `CorePlayerProjection`, repository, and core receipts;
- domain-scoped `QualificationReceiptV0_1` for those exercised contracts only;
- atomic side-by-side technical qualification of eligible core/Structure/Anatomy alpha portfolio objects into candidate `V0_1` IDs/hashes, preserving original import receipts and retention truth;
- atomic provisional-alpha → governing-`V0_1` producer-work/reverse-binding/head handoff that preserves `pinecoeneId`, records the new issued artifact version, and never mints a replacement work identity;
- authority-neutral `ArtifactGraphProposal` vectors and non-circular proposal → authority receipt → final graph → origin-appropriate technical closure;
- owner-private domain-activation quarantine with distinct `alpha_migration` and `native_v0_1` evidence branches, one immutable terminal authority disposition per candidate, and exclusion from all active resolvers and indexes until activation;
- frozen domain-neutral pre-candidate outcome and domain-decline evidence-reference envelopes plus Phase 3 artifact/Structure/Anatomy refusal and technical-failure evidence schemas; later domains extend the registries without revising either envelope or repository shape;
- frozen domain-neutral `AdditionalAuthorityTransitionReceiptV0_1` and CAS law, allowing later authority profiles to prove their prerequisite and resulting revision without revising the core operation union;
- dependency-closed `artifact_semantic_graph` activation for artifact version, normal form, and semantic topology, with atomic rollback and concurrent terminal-disposition tests;
- `qualifiedFrom` relationships for `alpha_migration` only, no fabricated migration edge for `native_v0_1`, and record-kind- and target-mode-appropriate named-human artifact authority receipts before any new artifact version is registered; `continue_existing` additionally requires its mandatory natural-work-head CAS before any part activates;
- domain-aware activation dispositions: Structure/Anatomy technical objects enter only their own indexes, and a preferred Structure pointer changes only with an exact `StructureProfileApprovalReceiptV0_1`;
- exact publication/release receipts for any `public_core` projection activated from current or historical release evidence;
- exact released-projection resolver index and atomic receipt/manifest/projection activation for `public_core`;
- failure, rollback, alpha/final coexistence, and requalification-idempotency tests.

Gate:

- every visible structural feature has a semantic reference;
- every Anatomy row selects the same feature;
- every Anatomy projection pins and resolves one exact active Structure projection ID/hash/profile; missing or cross-profile Structure references fail;
- unsupported relations are absent, not implied;
- hidden/rejected/private material affects no pixels, motion, DOM, accessibility text, or packages;
- no artifact resolves unless its exact normal form and semantic topology became active in the same dependency-closed transaction;
- all materially different specimens still fit the provider-neutral core plus namespaced extensions;
- the team approves the semantic primitive vocabulary and core/Structure/Anatomy contracts for their `V0_1` freeze;
- every Phase 4-eligible artifact has its origin-appropriate immutable technical receipt—qualification for alpha migration or contract validation for native `V0_1`—and the exact mode-matched named-human artifact authority receipt: creation for `issue_new`, continuity for `continue_existing`; failed or unratified activation leaves source/candidate objects and all authority/presentation pointers unchanged;
- no released-public Core projection activates without a matching publication/release receipt and manifest;
- the public compiler resolves Core only through the exact released-projection index; receipt-kind, manifest, evidence-label, or executable-revision mismatch yields no result;
- at least four of five concept-new internal teammates can explain Structure and Anatomy after using the instrument without coaching.

Phase 4 cannot begin authoring governing Expressions against alpha core artifacts. Alpha-only specimens remain visible candidate evidence until separately qualified. Phase 3 does not qualify Expression, Encounter, Return, fork, or Successor contracts.

### Phase 4 — Expression Studio

Deliver:

- separate Expression Studio shell and immutable Expression versions;
- independent `expressionSceneGraph`;
- direct semantic, interpretive-derived, and ornamental bindings;
- local asset manifest and rights fields;
- template registry;
- Christmas Tree Expression;
- mapping lint;
- hash comparison and Anatomy overlay;
- local export/import of Expression-bearing owner archive;
- Expression contract vectors across neutral, Christmas Tree, semantic-direct, interpretive-derived, ornamental, missing-asset, and rights-limited cases;
- exact Expression author/rights activation receipts for every Expression entering the active Expression index;
- Phase 4 Expression-decline evidence schema registered through the frozen domain-decline evidence reference;
- exact publication/release receipt and manifest for any `public_expression` Player projection;
- released-projection resolver entries for `public_expression`, distinct from Core receipt/index entries;
- qualified Expression-domain `V0_1` schemas, including `ExpressionPlayerProjectionV0_1`, and a domain-scoped `QualificationReceiptV0_1`, creating new immutable qualified Expression IDs rather than renaming alpha bytes.

Gate:

- Christmas Tree and neutral Structure are materially different;
- normal-form and Structure hashes remain identical;
- Expression hashes differ;
- every direct semantic element resolves to a valid identity;
- every derived element discloses its sources and transformation;
- ornament never appears as evidence;
- asset deletion/failure produces a truthful fallback rather than changed Structure;
- Expression alpha/final coexistence, failure rollback, and qualification idempotency pass before any qualified Encounter may reference an Expression.
- no qualified Expression enters an active index or preferred-Expression pointer without its exact `ExpressionAuthorshipRightsReceiptV0_1`;
- no public Expression projection activates under authorship/rights evidence alone; publication/release evidence is separately required;
- `public_core` and `public_expression` release receipts cannot satisfy one another’s resolver key;
- at least four of five concept-new internal teammates can explain Structure versus Expression after using both views without coaching.

### Phase 5 — Governed local Encounter and response

Deliver:

- separate Share shell and capability/disclosure lattice;
- Structure-only and exact-Expression/Both scene-source compilation;
- optional R0–R5 structural projection presets compiled to explicit grants;
- exact recipient-safe package;
- Locket and direct Encounter entry;
- Preview/Witness parity;
- fifth progressive-teaching action: Share a bounded view;
- local export/import and custody receipts;
- optional local response candidate;
- immutable Return-candidate origin receipt bound to the exact response grant and explicit local recipient/user act;
- separate append-only owner disposition with a mutable current pointer;
- candidate fork/study or distinct Successor identity only when explicitly chosen under the continuation law and authorized for the record kind;
- Encounter/Return/fork/Successor contract vectors across Structure-only, Expression/Both, exact-identity, pseudonymous-identity, response-denied, corrupt, collision, and offline cases;
- exact Offering, Return-candidate-origin, Return-disposition, fork, and Successor activation-authority receipts for their respective domain objects;
- Phase 5 Encounter/Return domain-decline evidence schemas registered through the frozen evidence reference;
- Phase 5 fork- and Successor-relationship approval/refusal evidence extensions, bound through the already-frozen additional-authority transition and pre-candidate outcome envelopes and exact transition receipt/revision plus prior artifact-creation receipt;
- native-`V0_1` composite fork/Successor `issue_new` registrar candidates in which graph plus exactly one typed lineage relation share one terminal and transaction; alpha/legacy relation migration remains read-only and deferred;
- qualified Encounter-domain `V0_1` schemas, including `EncounterSafeProjectionV0_1` and `RecipientPlayerProjectionV0_1`, and a domain-scoped `QualificationReceiptV0_1`, creating new immutable qualified package/receipt IDs rather than renaming alpha bytes.

Gate:

- owner Preview and recipient Witness consume identical package bytes;
- the exact owner binding receipt remains owner-private and is absent from those package bytes;
- forbidden content is absent from package, DOM, assets, downloads, and source maps;
- local package collision, unknown ID, corrupt package, and unsupported version fail closed;
- a response cannot mutate the artifact;
- a Return candidate cannot activate from owner disposition evidence; its origin receipt and any later owner disposition remain distinct;
- no interface claims real delivery, receipt, acceptance, revocation, publication, or cross-device custody;
- no recipient package/binding becomes active without `OfferingAuthorityReceiptV0_1`; no Return candidate, Return disposition, fork, or Successor becomes active under only a technical qualification receipt, and fork/Successor authority discriminators are not interchangeable;
- lineaged `issue_new` cannot leave an active graph with an awaiting or declined relation: graph, relation, identity mappings, lineage indexes, and one terminal disposition commit or roll back together;
- native composite fork/Successor `issue_new` preserves its exact proposed target, lineage source, relation kind, and reserved `pinecoeneId` through activation; no existing alpha/legacy relation is promoted or allowed to consume an unbound target;
- Encounter and Return object qualification/coexistence pass for their permitted alpha-migration paths; fork/Successor **schema** qualification from vectors is idempotent, while relation-object migration is absent and alpha/legacy relations remain read-only beside native governing lineage.

### Phase 6 — Pinecœne of Pinecœne and internal acceptance

Deliver:

- named-human cutoff decision and exact committed repository point;
- named-human decision on whether selected chat material is authorized for exact private export, sanitization, and curation;
- separately receipted private chat exports and separately hashed, reviewed sanitized derivatives, if authorized;
- frozen selected-corpus inventory only after the preceding decisions and receipts exist;
- exact selected-corpus preflight vectors covering Git-only, permitted chat derivative, exclusion, cutoff, missing-source, and disclosure cases;
- candidate `CuratedSourceSetManifestV0_1` and its domain-scoped `QualificationReceiptV0_1`, issued from the alpha family only after those Phase 6 vectors pass;
- `SourceSetCuratorApprovalReceiptV0_1` over the exact frozen inventory and candidate manifest ID/hash, followed by atomic source-manifest activation;
- Phase 6 source-manifest decline evidence schema registered through the frozen domain-decline evidence reference;
- record-kind-explicit selected history package: `authored_fixture` with a `FixtureAuthorshipReceipt` by default; `admitted` only after a separate named-human `AdmissionAuthorityRef` and corresponding standing update;
- Growth Ring/Living Cone Expression;
- Recorded Build Unfolding, Anatomy, History, and exact source inspection;
- explicit partial-coverage and cutoff treatment;
- an 8–10 minute guided demo.

Gate:

- all Section 15 acceptance criteria pass;
- no self-history formation object predates the qualified manifest and its exact frozen inputs;
- the source manifest enters its active index only with the matching `SourceSetCuratorApprovalReceiptV0_1`;
- the team can distinguish Structure, Anatomy, Expression, and Encounter;
- the team understands what the formation producer supplies, what Pinecœne provides, and which authority remains human;
- the team sees at least one personal/artistic and one practical/business use;
- every governing object used in the acceptance journey belongs to a contract domain qualified at its proper Phase 3, 4, 5, or Phase 6 source-manifest gate;
- Deniz records acceptance or returned changes;
- only then may the team plan public-route migration or hosted custody.

### Phase 7 — Later production product, explicitly deferred

Possible later work:

- accounts and hosted Library;
- live Œdit formation delivery;
- cross-device sharing and responses;
- enforceable remote expiry/revocation where technically supportable;
- collaborative Expression authoring;
- public Works and discovery;
- licensing and remix economy;
- team/organization custody;
- production migration from current public routes.

Phase 7 is not implied by the internal demo and requires a new accepted product/release specification.

---

## 20. Internal-demo script

The acceptance demo should last eight to ten minutes:

1. Open `/demo` and show a Library with visibly different purposes.
2. Open `Winter Gathering`; turn it and select one part.
3. Toggle Anatomy and explain one exact semantic binding.
4. Enter Studio; change palette, one mapped ornament, and one ornamental atmosphere layer.
5. Show that the normal-form and Structure hashes did not change while the Expression hash did.
6. Open Papillœn and show the same Anatomy instrument on a different object.
7. Open `Pinecœne of Pinecœne`; use Recorded Build Unfolding and History to inspect one selected milestone and one typed source limit or unresolved decision.
8. Import one prepared Œdit-shaped package and inspect its import receipt.
9. Create a bounded Encounter from an exact Expression.
10. Open the Locket or direct share as recipient, leave an optional local response, and review it as owner without automatic mutation.

The facilitator ends with two questions:

- “Where did the structure come from?”
- “What was the author free to change?”

If the room answers “from the governing formation record” and “the Expression, not the record,” while distinguishing admitted from authored fixture records, the central product distinction has landed.

---

## 21. Functional requirements

### 21.1 Formation and import

- FR-001: Validate every serialized formation package before persistence.
- FR-002: Show producer, schema, coverage, standing, disclosure, and hash before import.
- FR-003: Write nothing when validation fails.
- FR-004: Record an immutable import receipt on success.
- FR-005: Support fixture, Œdit-prepared, and compatible-producer origins without changing the artifact model; a hand-authored developer fixture package may use `manual`, but no end-user manual composer ships in this demo.
- FR-006: Verify producer-namespace authority and idempotency before persistence. Phase 1 may atomically register a schema-tagged provisional-alpha identity/graph; after contract freeze, prepare a pending activation candidate and make only the terminal activation transaction write issuance receipt, governing work mappings/head, artifact graph, and Library entry. Retry or cross-key re-import returns the exact pending/provisional/governing outcome without minting a second work identity.

### 21.2 Library and identity

- FR-010: List exact artifact versions through separate mutable index entries.
- FR-011: Preserve multiple Expressions per artifact version.
- FR-012: Distinguish governed, authored study, legacy, proposed, and local standing; `hosted` remains explicitly `NOT IMPLEMENTED` in this profile.
- FR-013: Export an owner-private archive with manifest and hashes.
- FR-014: Never silently resolve an unknown ID to a default artifact.
- FR-015: Pin `artifactVersionId` in semantic citations and additionally pin `structureProjectionId` in visual citations, golden evidence, Expressions, and owner-private Encounter bindings; recipient packages expose only the identity level granted.
- FR-016: Use one domain-prefixed full-digest content-ID law, with ID-free/self-hash-free canonical preimages and a first-class semantic-topology object/identity.
- FR-017: Activate an alpha-migration or native-`V0_1` artifact version, exact normal form, and semantic topology as one dependency-closed transaction; no resolver may expose a partial core graph.
- FR-018: Derive a final authority-bearing artifact ID only through one-use attempt → authority-neutral proposal → human receipt → final graph → origin-appropriate technical closure; consume the attempt on either terminal outcome and reject every mismatched or replayed link without writes.

### 21.3 Player, Structure, and Anatomy

- FR-020: Render one stateless canonical Player from discriminated owner, public, or recipient-safe projections; Witness accepts recipient projections only.
- FR-021: Support orthogonal state axes: scene `Structure | Expression | Both`, Anatomy inspector on/off, temporal `Rest | Time`, and panel `None | History | Details`.
- FR-022: Synchronize spatial and textual selection by semantic identity.
- FR-023: Replay supported deterministic semantic transitions with pause, scrub, phase/step jumps, and still completion; Expression framing cannot add, reorder, omit, or reverse them.
- FR-024: Provide keyboard, reduced-motion, and no-WebGL equivalents.
- FR-025: Suspend unnecessary render loops.
- FR-026: Activate and resolve a public Core or Expression Player projection only through its exact kind-specific publication/release receipt, manifest, and released-projection index; historical evidence never claims present liveness.

### 21.4 Expression

- FR-030: Create immutable Expression versions.
- FR-031: Distinguish `semantic_direct`, `interpretive_derived`, and `ornamental` bindings and persist an independent Expression scene graph.
- FR-032: Bind assets through an exact manifest and rights/disclosure metadata.
- FR-033: Run mapping lint before Encounter compilation.
- FR-034: Show artifact, Structure, Expression, and asset hashes separately.
- FR-035: Allow a different preferred Expression without changing artifact identity.

### 21.5 Encounter and response

- FR-040: Compile a recipient-safe Encounter from an exact Structure-only or exact Expression/Both scene source through the intersection of explicit capability grants, material classes, actions, identity limits, rights, and disclosure ceilings.
- FR-041: Preview the exact package later consumed by Witness.
- FR-042: Render a neutral acquisition shell before recipient package validation.
- FR-043: Support local-only demonstration packages and truthful portable-file custody.
- FR-044: Keep responses immutable and owner dispositions append-only; a later disposition creates a new disposition version and updates only a CAS-protected current pointer.
- FR-045: Create a candidate fork/study or distinct Successor only after Phase 5 through a native-`V0_1` composite `issue_new` registrar candidate whose artifact graph and exactly one typed lineage relation share one terminal transaction and their separate authority receipts; preserve alpha/legacy relations as read-only evidence rather than promoting them.
- FR-046: Persist exact owner artifact/Structure/Expression binding only in an owner-private Encounter receipt; serialize only the granted exact or encounter-scoped pseudonymous identity and recipient-safe projections into the recipient package.
- FR-047: Activate a Return candidate only with an immutable origin receipt binding an exact response-enabled Encounter package, grant, candidate hash, custody mode, and explicit local recipient/user act; owner disposition remains separate.
- FR-048: Commit authority/origin/release evidence, one terminal domain-activation disposition, complete dependency/index changes, and authorized pointers atomically. Registrar-backed artifact candidates additionally consume their attempt and transition their operation; domain-only candidates are forbidden from touching registrar state. Concurrent or later opposite outcomes fail closed.

### 21.6 History and Passport

- FR-050: Show artifact, Expression, Encounter, response, and Successor lineage without collapsing them.
- FR-051: Show source coverage and known omissions.
- FR-052: Show exact versions, schemas, hashes, standing, rights, and disclosure.
- FR-053: Label legacy evidence without silently promoting it.

---

## 22. Non-functional and acceptance requirements

### 22.1 Determinism

- identical formation-record input plus compiler profile yields identical normal form, Structure, scene, and transition hashes;
- timestamps and local labels do not change semantic identity;
- Expression does not change semantic topology; its independent scene graph changes only Expression identity;
- Address changes Encounter orientation/presentation only;
- rejected, private, or unreviewed items have no recipient-visible effect;
- OPEN never falsely closes.

### 22.2 Privacy and disclosure

- package-level negative disclosure tests inspect JSON, binary assets, DOM, accessibility text, downloads, build output, and source maps;
- owner-private material is not shipped and then hidden;
- selected chat material is private until separately exported and reviewed; any sanitized derivative has separate identity, rights, disclosure, and appropriate admission/authorship standing;
- real-person cases default to private and unavailable unless exact authority is evidenced;
- no telemetry or unapproved network requests.

### 22.3 Accessibility

- keyboard-only operation;
- visible focus;
- screen-reader Anatomy with correct order and state;
- 200% zoom without loss of task completion;
- reduced-motion semantic steps;
- high-contrast Structure and OPEN distinction;
- full non-WebGL form and inspection fallback;
- controls at usable touch sizes on 390×844.

### 22.4 Performance

- gateway and Library do not block on 3D;
- dynamic renderer loading;
- 60 fps target on representative desktop;
- 30 fps minimum target on representative mobile during replay;
- background/off-screen render suspension;
- asset budgets declared per Expression template;
- no uncontrolled particle counts or texture fetches.

### 22.5 Browser matrix

- Chromium desktop;
- WebKit desktop;
- WebKit representative mobile at 390×844;
- storage denied;
- JavaScript delayed;
- WebGL unavailable;
- offline local-only Encounter;
- reduced motion and sound off.

---

## 23. Verification plan

### 23.1 Golden tests

Golden vectors cover at least:

- Winter Gathering normal form;
- Project Relay normal form;
- Papillœn prepared projection;
- Structure projections;
- one historical `public_core` release receipt and one `public_expression` release vector;
- one Christmas Tree Expression;
- one neutral Expression;
- one R0 and one R5 Encounter;
- one zero-Expression Structure-only Encounter;
- one permitted local Return-candidate origin receipt and one denied-response refusal vector;
- one prepared Œdit import receipt;
- self-history selected source manifest.

### 23.2 Invariance tests

Prove:

- ordered arrays retain declared order while set-like arrays normalize deterministically; unclassified/duplicate set entries fail closed;
- an object’s own content ID, self-hash fields, and display prefixes are absent from its preimage, dependency identities/hashes remain, and only full digests establish equality;
- an operation retry with the same idempotency key/payload returns the exact provisional, awaiting-authority, pending, issued, declined, refused, or failed state; importing the same natural producer work under a different key returns the existing locked/pending candidate or bound work identity; crash/reload replay is stable; changed payload under one key or a full-digest collision writes nothing;
- `provisional_alpha_direct`, `frozen_candidate`, and `locator_direct` operation shapes reject one another's fields; direct alpha issuance succeeds only before freeze with provisional state and no proposal/candidate terminal, while frozen artifact operations cannot skip their ordered artifact-authority and, when lineaged, relationship-authority states;
- creating a frozen artifact operation atomically stores key, one-use attempt, proposal, and any `issue_new` target lock before human review; same-key crash retry returns that state, a competing key cannot obtain authority for the locked target, and refusal/preparation failure consumes the attempt and releases the target without an active artifact;
- a pre-candidate human refusal requires the proposal's record-kind/mode refusal authority; after artifact-creation approval and the registered transition CAS, fork or Successor relationship refusal requires its own exact seat, relation kind, target, lineage source, attempt, proposal, approved creation receipt, and `AdditionalAuthorityTransitionReceipt` ID/hash/resulting revision; preparation failure requires typed compiler/validator evidence. Wrong-seat/kind, swapped proposal/attempt/operation/target/source/transition, cross-kind evidence, or replay leaves the exact current authority state, target lock, and unconsumed attempt unchanged, while a lawful relationship refusal atomically consumes the attempt and releases the lock;
- the frozen pre-candidate outcome envelope accepts only an evidence schema active in its versioned registry: Phase 3 artifact-refusal/technical-failure evidence passes without lineage fields, Phase 5 can add fork/Successor refusal evidence without changing envelope bytes, and unknown or premature extensions fail before attempt consumption;
- a relationship approval or refusal authored before the registered `awaiting_additional_authority` CAS cannot bind the not-yet-emitted `AdditionalAuthorityTransitionReceipt` and remains invalid if replayed after the CAS; an approval/refusal under an inactive profile, guessed or stale revision, swapped transition receipt, or different artifact-creation receipt also fails closed; only the ordered chain `artifact approval → registered additional-authority CAS/transition receipt → matching relationship approval or refusal → candidate or consumed refusal outcome` can proceed;
- every artifact candidate, including alpha migration and native continuation, has one pending operation that atomically becomes issued with an immutable issuance receipt or declined with its terminal evidence; no graph/head activation can leave the operation pending or absent;
- provisional-alpha artifact migration preserves the exact `pinecoeneId` while atomically promoting matching forward/reverse authority states and the exact head to governing `V0_1`; injected failure leaves the complete provisional state intact, while alpha/legacy fork and Successor relations remain read-only and absent from governing lineage indexes;
- two independently approved `continue_existing` proposals from one predecessor race through the authoritative natural-work head CAS and exactly one complete activation commits; the loser leaves no authority disposition, graph, relationship, index, or pointer, and retrying its stale predecessor fails until it is re-proposed from the new head or explicitly authorized as a fork;
- an untrusted namespace, invalid producer signature/curator receipt, expired authorization, mismatched namespace, fork/Successor active-or-pending target reuse, or conflicting active/reserved `pinecoeneId` reverse binding writes nothing; a generated work-ID collision is regenerated before candidate visibility or fails closed at the retry bound;
- a content ID encodes the same complete digest as its verification hash, and disagreement fails before persistence;
- each `shareId` resolves to exactly one `encounterPackageId`; that ID verifies the exact full Encounter package digest and never acts as semantic identity;
- Expression changes no normal-form or Structure bytes;
- ornamental assets create no Anatomy entries;
- direct semantic assets resolve to exact permitted identities;
- interpretive-derived elements retain exact source IDs and transformation rules and never appear as direct evidence;
- removing an Expression restores neutral Structure without semantic loss;
- a zero-Expression artifact compiles and opens a Structure-only Encounter without fabricated Expression identity;
- adding a capability grant can only add its explicitly named material/action within the effective ceiling; R presets alone grant nothing outside their compiled set;
- the owner-private Encounter binding receipt retains exact artifact/Structure/optional Expression identities while the recipient package contains no direct owner-repository IDs, owner canonical hashes, producer work references, or hidden assets when those grants are absent; tests do not claim anonymity or cross-package unlinkability of identical disclosed content;
- timestamps and Library metadata do not alter artifact identity;
- changing only the Structure profile changes projection identity but not normal form or semantic-topology identity;
- Anatomy identity changes with its bound Structure projection/profile; missing-Structure, wrong-hash, and cross-profile Anatomy activation writes nothing;
- OPEN survives every Expression and Encounter;
- a response cannot mutate the original package;
- a Return-candidate origin receipt binds the exact response-enabled package/grant and local act; owner disposition cannot substitute for origin evidence;
- a later disposition cannot overwrite or erase an earlier disposition receipt;
- `CorePlayerProjection` contains no Expression, Encounter, recipient, capability, asset, or package fields; the canonical Player rejects an unqualified variant;
- core/Structure contracts qualify only at Phase 3, Expression and `ExpressionPlayerProjection` only after their Phase 4 portfolio, Encounter/Return plus `EncounterSafeProjection` and `RecipientPlayerProjection` only after their Phase 5 portfolio, and the self-history source manifest only after its Phase 6 preflight; fork/Successor **schemas** freeze from Phase 5 vectors but no alpha relation object migrates; qualification never renames alpha bytes;
- `alpha_migration` activation requires exact alpha sources, a matching `QualificationReceipt`, and `qualifiedFrom`, while `native_v0_1` requires a matching `ContractValidationReceipt` and forbids alpha-source/`qualifiedFrom` fields; cross-origin receipt substitution, missing origin evidence, and fabricated migration lineage write nothing;
- an origin-appropriate technical receipt without the required target-mode- and record-kind-matched artifact authority cannot register any artifact graph: creation authority is required for `issue_new`, continuity authority for `continue_existing`, and neither can substitute for the other or advance an authority/presentation pointer;
- the authority-neutral proposal contains no final artifact ID or authority receipt; its human receipt binds the proposal hash; the final artifact ID binds that receipt; golden vectors prove the chain is non-circular, while proposal/receipt/final-graph mismatch or failed qualification/validation writes nothing;
- an awaiting or declined alpha-migration or native-`V0_1` activation candidate remains absent from active artifact/projection/Library/citation resolution; activation appends authority and active-index records without mutating the quarantined candidate;
- artifact, normal form, and semantic topology activate as one closed graph; injected failure at every write boundary leaves all three inactive, and no Structure/Anatomy/Expression activation can reference a quarantined dependency;
- every domain activation accepts only its matching authority-evidence discriminator: artifact creation or continuity according to proposal target mode and record kind, Structure profile approval, Expression authorship/rights, Offering, Return-candidate origin, Return disposition, distinct fork or Successor authority, public projection release, source-set curator approval, or explicitly technical validation; receipt-mode, record-kind, relationship-authority, or other mismatch creates no active index or pointer write;
- an `issue_new` proposal paired with a continuity receipt, a `continue_existing` proposal paired with a creation receipt, or a fork/Successor creation missing its separate relationship authority rolls back identity issuance, artifact graph, natural-work head, lineage, Library row, terminal disposition, and all indexes;
- after decline, submitting the same proposal attempt or its artifact/relationship authority receipts under a different idempotency key returns the prior outcome or fails closed; reopening the same natural target requires a fresh attempt, new proposal hash, and fresh authority receipts explicitly made after the decline;
- activation atomically persists authority evidence, one immutable terminal outcome, indexes/relationships, and authorized CAS pointers; crash rollback is complete, concurrent activate/decline yields exactly one terminal winner, and a later opposite outcome is rejected;
- domain-only activation/decline never creates or mutates an artifact operation, proposal-attempt slot, target lock, identity reservation, issuance receipt, or natural-work binding; injecting registrar state into those branches fails closed;
- every decline binds exact candidate ID/hash, candidate class, activation kind, and the matching schema-declared refusal/failure authority; wrong-class, wrong-domain, wrong-operation/attempt, stale, or merely technical evidence leaves the terminal slot and proposal attempt unconsumed and writes nothing;
- a composite fork/Successor `issue_new` has exactly one terminal slot; injected failure or an activate/decline race at every graph, relation, identity, head, lineage-index, and Library write boundary leaves either the complete lineaged work active or no active fragment, never two terminal outcomes or a separately activatable relation;
- native fork and Successor `issue_new` retries preserve one target identity/relationship and roll back fully on crash or collision; any attempt to route an alpha/legacy relation into a governing lineage index fails closed because no relation-migration activation exists in this demo;
- released-public resolution occurs only through an active exact projection/receipt/manifest index; Core-versus-Expression receipt mismatch, historical-versus-live label mismatch, rollback injection, or unactivated generic receipt returns no public projection;
- unknown packages and schemas fail closed.

### 23.3 End-to-end tests

Cover:

```text
Demo → Library → Player → Anatomy → Time
→ Studio → Expression version → mapping lint
→ Encounter Preview → Locket/Witness → local response
→ owner disposition → optional Successor → History
```

Also cover prepared Œdit import, seeded read-only legacy v1 and v2 databases beside the new database, legacy export, storage denial, corrupt assets, duplicate local/imported package collision, unsupported versions, locator collision/unknown locator, and no-WebGL use.

### 23.4 Human acceptance

Five internal participants who have not used the concepts as instruments should attempt the guided journey. Record, without leading them:

- whether they understand where Structure comes from;
- whether they can distinguish Anatomy from Expression;
- whether they understand that a Christmas tree can be art around the same object;
- whether they understand that a document and a 3D form are projections;
- whether they mistake the prepared import for live Œdit;
- whether they mistake local share/response for remote delivery or acceptance;
- which terms become clear only after action.

Target for Phase 6: at least four of five can correctly explain the four layers in ordinary language. Confusion is product evidence, not participant failure.

---

## 24. Security, rights, and human authority

### 24.1 Authority boundaries

Models and compilers may propose mappings, layouts, Expressions, and candidate responses. They do not manufacture:

- source rights;
- admission;
- human testimony;
- participant consent;
- acceptance;
- publication;
- delivery or receipt;
- Return standing;
- Successor authority;
- Seal.

These require explicit evidence from the named human seat.

### 24.2 Asset rights

Every image, font, audio file, video, and texture in an Expression declares:

- origin;
- owner/licensor;
- permitted demo use;
- permitted recipient export;
- disclosure class;
- file hash;
- fallback behavior.

Assets without sufficient rights remain local-only or unavailable.

### 24.3 Private cases

PromiseMe and any real human or commercial material are case-private by default. A polished source document or mission cannot establish participant identity, response, admission, Return, publication, or public-use authority. The internal demo uses a synthetic Commitment Case unless a separately reviewed receipt authorizes exact material.

### 24.4 Chat custody

The current conversation may inspire the specification. It is not automatically a source package. Building the self-history Pinecœne from chats requires:

1. an explicit export act;
2. a private exact-export receipt with raw file hash and message coordinates;
3. a selected-corpus rationale;
4. private-data, participant, rights, and third-party review;
5. a separately hashed sanitized excerpt derivative;
6. a redaction map and source-coordinate mapping from derivative to exact export;
7. named human admission of the derivative, not an automatic admission of the private export;
8. a disclosure ceiling and derivative disclosure receipt;
9. a source-set cutoff.

The exact private export and sanitized derivative are different artifacts with different custody and hashes. The sanitized derivative is never described as “the exact chat export.”

---

## 25. Explicitly deferred

The internal demo excludes:

- accounts and authentication;
- cloud custody or synchronization;
- public marketplace or social feed;
- live Œdit database/API integration;
- arbitrary source upload and live AI reading;
- automated admission or standing;
- collaborative semantic editing;
- arbitrary AI-generated topology;
- public comments, likes, followers, or engagement metrics;
- cross-device Returns;
- enforceable remote revocation or expiry;
- public Successor publication;
- Expression commerce or licensing marketplace;
- live recipient delivery;
- production route replacement;
- a universal Christmas Tree, Genesis, Papillœn, tetrahedron, Bag, 3–4–6–7, or cosmic geometry law.

---

## 26. Decision register

### 26.1 Proposed freezes if this specification is accepted

1. Pinecœne begins at an admitted or explicitly authored formation record, not arbitrary-source reading.
2. Œdit is the preferred upstream producer; the handoff is provider-neutral.
3. The normal form is authoritative; 3D and text are projections.
4. Structure, Anatomy, Expression, and Encounter are independent layers.
5. Expression cannot alter normal form, semantic topology, or standing; its independent scene graph is art, not admitted structure.
6. Encounter cannot rewrite the artifact.
7. Multiple immutable Expressions may refer to one artifact version.
8. Expression bindings are typed `semantic_direct`, `interpretive_derived`, or `ornamental`.
9. The Player uses orthogonal axes: `Structure / Expression / Both`, Anatomy on/off, Rest/Time, and History/Details panels.
10. Papillœn informs the default neutral Structure profile, not every Expression.
11. The Library stores purpose-neutral artifacts and separates mutable index metadata.
12. Prepared fixtures and imports are truthfully labelled; no live Œdit claim.
13. Legacy records remain unrevised and are never silently promoted; byte-exact preservation is claimed only for captured raw bytes.
14. The Locket is a downstream Encounter vessel.
15. Pinecœne of Pinecœne uses an approved selected corpus and explicit cutoff.
16. The internal demo remains strictly local/non-hosted and non-production until separate acceptance; `noindex` may supplement but never replace a future hosted authorization boundary.
17. Alpha contracts use explicit `V0_1Alpha1`/`v0.1-alpha.1` wire identities and qualify by exercised domain at the Phase 3, 4, or 5 gate—or the Phase 6 source-manifest preflight—into new final IDs rather than being renamed in place.
18. One artifact version may have parallel immutable Structure projections; semantic topology is profile-independent and projection identity is profile-dependent.
19. Immutable IDs, opaque locators, full hashes, retries, deduplication, and collisions follow the Section 8.4 issuance law.
20. The internal demo uses a separate new database plus a read-only v1/v2 legacy adapter; it does not upgrade the existing showcase database.
21. Producer namespaces are verified through a fail-closed authorization registry; a package’s self-asserted namespace has no registrar standing.
22. Technical qualification never supplies human artifact-creation or continuity authority, registers a work, or advances an artifact pointer by itself.
23. Recipient pseudonymization minimizes direct owner identity but does not claim anonymity or cross-package unlinkability of identical disclosed content.

### 26.2 Must be decided in Phase 0

1. Alpha field naming, schema namespaces, and extension mechanics for the candidate contract family.
2. Provisional normal-form primitive set broad enough to exercise every specimen family; this is not the final vocabulary freeze.
3. Whether `TransitionScoreV0_1` is provisionally retained or replaced and how it binds to Structure projection.
4. Canonicalization/hash profiles, producer-namespace authorization, target producer-work reference intents, forward/reverse identity registries, identifier/locator issuance profiles, record-kind discriminator, authority-receipt envelope, and disclosure mechanics.
5. Exact owner-private archive framing and repository transaction/conflict law.
6. Which existing fixtures can be calibrated versus only labelled legacy.

### 26.3 Must be frozen at the Phase 3 core/Structure qualification gate

1. Exact provider-neutral normal-form primitive vocabulary after the complete Anatomy portfolio passes.
2. Namespaced domain-extension rule and compatibility policy.
3. Exact epistemic, lifecycle, source-state, standing, and disclosure enums.
4. Whether Anatomy is serialized independently or deterministically derived and cached.
5. Final transition-score contract and semantic replay invariants.
6. `QualificationReceiptV0_1` for alpha migration, `ContractValidationReceiptV0_1` for native objects, their closed candidate-origin discriminator, and atomic alpha-to-qualified/native-to-active repository handoff without fabricated `qualifiedFrom` lineage.
7. Pending operation/target/identity reservation schemas, dependency-closed artifact/normal-form/semantic-topology activation, unique terminal domain-activation disposition, and exact publication/release evidence for any released-public Core projection.
8. Non-circular authority-neutral artifact proposal → named-human receipt → final artifact graph identity → origin-appropriate technical closure, including creation versus continuation authority and atomic natural-work-head law.
9. Stable pre-candidate outcome and domain-decline evidence-reference envelopes plus registry-extension rule, with only artifact/Structure/Anatomy refusal and technical-failure evidence qualified in the Phase 3 core.
10. Domain-neutral additional-authority transition receipt and CAS law, including exact prerequisite receipt, extension profile, prior/resulting revisions, and replay rejection for any later authority extension.

### 26.4 Must be decided at their later gates

1. Phase 4: exact Expression schema, scene-graph, binding, rights, asset-manifest, validation, author/rights activation, and released-public Expression receipt contracts after the full Expression portfolio passes; issue the Expression-domain qualification receipt.
2. Phase 5: exact Encounter, Return, fork, and Successor contracts, including `EncounterSafeProjection`, recipient Player/identity projection, owner-private binding receipt, separate Return-candidate origin and owner-disposition evidence, distinct Offering/fork/Successor activation authority, relationship approval/refusal bound to the core `AdditionalAuthorityTransitionReceipt`, and fork/Successor evidence extensions registered through the frozen core envelope; issue the Encounter-domain qualification receipt.
3. Phase 5: exact R0–R5 preset labels and explicit capability-lattice mappings.
4. Phase 6: which committed repository point becomes the self-history cutoff.
5. Phase 6: whether any selected chat material is authorized for exact private export, sanitization, and curation; if authorized, obtain and receipt those inputs.
6. Phase 6 preflight: after those decisions and inputs, freeze the selected corpus, technically qualify the exact candidate `CuratedSourceSetManifestV0_1`, obtain source-set curator approval over that candidate ID/hash, and atomically activate it before any self-history formation.

### 26.5 Later open product decisions

- hosted repository and account model;
- organization/team custody;
- expression remix and attribution law;
- asset storage and licensing service;
- live Œdit delivery protocol;
- public/private discovery model;
- public naming of advanced protocol concepts;
- enforceable expiry/revocation semantics;
- commercial and creator economics.

---

## 27. Definition of internal-demo success

The reset succeeds when the team can experience, rather than merely discuss, the following truths:

1. A Pinecœne is a durable addressable object, not one renderer or one story.
2. The governing formation record determines Structure; synthetic fixtures remain visibly synthetic.
3. Anatomy makes that determination inspectable.
4. Expression can make the object emotionally and artistically different without changing its claims.
5. Encounter decides how an exact version meets a particular audience.
6. Œdit or a compatible producer provides formation and named-human receipts; Pinecœne stores, expresses, and carries the resulting permitted object while authority remains human.
7. A business plan and a personal artwork can live in the same Library without becoming the same kind of thing.
8. Local simulations and authored fixtures are useful when their standing is honest.
9. The project’s own selected history can become a Pinecœne without pretending to be complete.
10. The architecture can later adopt accounts, cloud custody, and live Œdit handoff without replacing artifact identity, the Player, or the four-layer law.

The immediate next action after acceptance of this document is **not** to redesign production. It is to complete Phase 0 in an isolated implementation plan: freeze the responsibility boundary, four-layer invariants, canonicalization/versioning/authority/disclosure seams, and extension mechanics; then exercise every specimen family plus a prepared Œdit envelope through provisional alpha primitives. Exact normal-form vocabulary freezes only after the Phase 3 Anatomy portfolio passes.

---

## Appendix A — Product in one page

### What it is

Pinecœne is where formed thought-objects are kept, understood, expressed, and shared.

### Where structure comes from

A governed artifact uses an admitted semantic record, preferably formed in Œdit and delivered through a validated provider-neutral envelope. An internal fixture uses an explicitly authored synthetic record and never impersonates admission.

### What Pinecœne adds

- durable identity and Library;
- deterministic Structure;
- inspectable Anatomy;
- authored Expression;
- bounded Encounter;
- Locket, response, History, and Successor lineage.

### What a creator may change

Expression and Encounter.

### What a creator may not silently change

The governing formation record, normal form, semantic topology, standing, provenance, or disclosure ceiling.

### Why Papillœn matters

It demonstrates a basic visual instrument that is exact, sparse, and inspectable. Pinecœne adapts that discipline for Anatomy, then allows art to grow around it.

### Why the Christmas tree matters

It proves Pinecœne is not a diagram generator. The same exact structure can become a meaningful work of art while remaining inspectable.

### Why Pinecœne of Pinecœne matters

It teaches the team the instruments through the project’s selected `Recorded Build Unfolding` and makes omissions visible rather than pretending the record is complete.

### What is real in the first demo

Local deterministic artifacts, prepared fixtures, exact hashes, explicit standing, immutable Expression versions, exact share packages, and local responses.

### What is not real yet

Live Œdit, arbitrary reading, accounts, cloud custody, remote delivery, cross-device Return, enforceable revocation, or public publication.

---

## Appendix B — Glossary

**Admitted record** — the semantic material a named authority has explicitly permitted to form the object.

**Anatomy** — the inspectable correspondence between visible Structure and permitted semantic identities, standing, and provenance.

**Artifact version** — an immutable formation-record version under a stable Pinecœne identity; the record kind distinguishes governed admission from authored fixture.

**Becoming / Time** — deterministic semantic transition replay when the governing formation record supports it; a merely chronological record uses `Recorded Unfolding` instead of causal Becoming.

**Encounter** — an exact audience-, Address-, disclosure-, permission-, and Expression-bound projection.

**Expression** — separately authored art with its own scene graph around an artifact’s Structure; it cannot change semantic standing or semantic topology.

**Formation envelope** — a validated provider-neutral package carrying a discriminated formation record (`admitted` or `authored_fixture`) and the rights, coverage, standing, and provenance Pinecœne may receive.

**Library** — the repository and mutable index through which Pinecœnes are found and managed.

**Locket** — a consent and passage vessel that reveals an already compiled Encounter package.

**Normal form** — the provider-neutral semantic object from which Structure is deterministically projected.

**OPEN** — an addressable condition explicitly left unresolved by an authorized disposition; it is distinct from `NOT SUPPLIED`, `EXCLUDED`, `DEFERRED`, and unverified state.

**Passport** — exact identity, schema, standing, coverage, rights, disclosure, hashes, and lineage metadata.

**Pinecœne** — the durable addressable thought-object across its normal form, versions, projections, Expressions, Encounters, and lineage; not merely its current 3D image.

**Projection** — a purpose-, angle-, audience-, or medium-bound rendering of an object that preserves only permitted dimensions.

**Return candidate** — a recipient’s bounded response awaiting separate standing and owner disposition; not automatic mutation or acceptance.

**Structure** — deterministic semantic topology and supported temporal state derived from the normal form.

**Successor** — a new Pinecœne identity linked to a predecessor through an explicit authorized `succeeds` act; it is distinct from a new version of the same identity and from a candidate fork/study.

---

**End of candidate specification.**
