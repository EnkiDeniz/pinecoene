# Pinecœne Projection and Reconstruction — Next Steps v0.1

> **SUPERSEDED AS THE ACTIVE PINECŒNE PLAN — 28 August 2026.** This plan waited for a real protected source case and placed intake, Reader work, and admission in the Pinecœne workstream. The current plan builds a synthetic, local downstream Instrument Demonstrator while Œdit/Primer and named-human admission remain separate. Use [Instrument Demonstrator Next Steps v0.2](./pinecoene-instrument-demonstrator-next-steps-v0.2.md) and the [complete Pinecœne–Œdit product document](./pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md). This file remains historical candidate lineage and authorizes no work.

**Document ID:** `LKN-PLAN-PINECOENE-RECONSTRUCTION-001`

**Version:** `0.1`

**Date:** 28 August 2026

**Status:** `WAITING FOR EXAMPLE · NO APPLICATION WORK AUTHORIZED`

**Governing documents:** `Pinecœne System Specification v0.7` and `Pinecœne Design and Development Approach v0.4`

**Deployed executable SHA:** `4323055bc521d8db7544a13cd08745e423906b62`

**Production receipt:** `codex/public-site-v0.2@39dd70d:docs/product/public-door-v02-implementation.md`

**Example standing:** `NOT YET RECEIVED`

> This is the bounded handoff between the theory amendment and the first real-life reconstruction case. It records what will happen when Deniz supplies the example. It does not authorize content inspection, semantic processing, model reading, implementation, publication, or deployment.

---

## 1 · Outcome of the present step

The documentation set now carries the projection thesis into Pinecœne without pretending the implementation already exists.

The next outcome is not a redesigned site. It is an **owner-reviewable intake and qualification packet** for one supplied example.

That packet will answer:

- Is this example a lawful and useful reconstruction case?
- What exact artifacts are available?
- What remains private, withheld, inaccessible, or merely attested?
- What bounded question should the case answer?
- Does it support a source-to-normal-form demonstration only, or also an intended/as-built residual?
- Which Reader beams would be useful, and what may they process?
- Which decisions require a human owner?
- What is the smallest complete experience the example can truthfully support?

No geometry, route, fixture, or public copy is frozen before these answers exist.

---

## 2 · What Deniz may supply

The example may be one artifact or a small, coherent set, such as:

- a sentence, concept note, document, brief, or launch plan;
- a generated artifact said to derive from that source;
- a running product, screenshot set, report, or other as-built evidence;
- comments, decisions, revisions, or correspondence that reveal competing readings;
- a statement of what the example was intended to become;
- permission and privacy instructions.

The first receipt may be incomplete. Missing material will be recorded as missing rather than inferred into existence.

---

## 3 · Intake questions

We will answer these from the supplied material only within Deniz’s explicit content-inspection boundary and return only genuinely unresolved questions. Attaching a file by itself authorizes receipt metadata, byte hashing, and custody classification—not semantic reading or model processing.

### Identity and purpose

1. What is the example called?
2. Who owns or stewards it?
3. What real-world question should reconstruction answer?
4. Is the goal explanation, audit, creation, comparison, transport, or some combination?

### Source and evidence

5. Which exact source projection or projections are supplied?
6. Are there stable pages, lines, clauses, timestamps, message IDs, or other source coordinates?
7. Is there an intended artifact distinct from the source?
8. Is there attributable as-built evidence?
9. What is referenced but not supplied?
10. What is human-attested rather than independently observable?

### Authority and privacy

11. Who may authorize processing and admission?
12. May models read the source, and under what boundary?
13. May exact source bytes enter this repository?
14. May the case be shown in a protected Preview?
15. May a sanitized version ever become public?
16. Which names, facts, coordinates, or artifacts must remain private or withheld?

### Completion and OPEN

17. What would count as a useful result?
18. Which uncertainties must remain visible?
19. Which decisions are not ours to make?
20. What would make the case misleading even if it looked impressive?

---

## 4 · Receipt and custody protocol

### 4.1 Before copying or inspecting content

We first classify whether exact source bytes may be stored in the public Git repository.

- **Public or explicitly repository-safe material** may receive byte-exact repository custody.
- **Sanitized material** is stored only with a link to its sanitization statement and original hash where permitted.
- **Private material** stays outside the public repository unless Deniz explicitly authorizes a lawful private custody location.
- **Referenced but unsupplied material** receives a reference record, not invented contents.
- **Unavailable or withheld material** is named as such.

### 4.2 Receipt fields

For every received artifact, record:

- original filename;
- received filename if normalization is necessary;
- media type;
- exact byte length;
- SHA-256;
- received date;
- supplied-by statement;
- origin statement;
- processing permission;
- storage location;
- disclosure class;
- availability class;
- source-coordinate method;
- known dependencies and omissions.

### 4.3 Provisional repository shape

If the material is repository-safe, use an additive case folder such as:

```text
docs/product/received/reconstruction-cases/<case-id>/
├── intake-manifest.md
├── source/
├── source-coordinate-map.md
├── authority-and-disclosure.md
└── hashes.sha256
```

Generated verification evidence belongs separately:

```text
evidence/reconstruction-cases/<case-id>/
```

The exact case ID and storage decision are not chosen until the example is inspected.

---

## 5 · Qualification pass

After receipt **and explicit content-inspection permission**, perform a read-only qualification pass. If that permission is absent, stop after the metadata/hash/custody receipt and request the missing authority.

### 5.1 Source map

Produce a map that distinguishes:

- `supplied_exact` source;
- `supplied_sanitized` source;
- `referenced_not_supplied` source;
- `human_attested` facts;
- `unavailable` source;
- `withheld_by_owner` source;
- world-facing evidence;
- unresolved provenance;
- material that must not be processed.

Availability remains separate from evidence verification, disclosure class, admission disposition, and OPEN standing.

### 5.2 Bounded question

Propose one primary reconstruction question and, only if necessary, a small number of secondary questions.

A good question is falsifiable or inspectable. Examples:

- What semantic structure could lawfully account for this plan?
- Which commitments, boundaries, evidence, and OPEN relations survived into the built artifact?
- What materially changed between the intended projection and the observed implementation?
- Can two differently angled documents be shown to derive from one admitted normal form?

The question must not claim access to an author’s inaccessible private interior.

### 5.3 Case capability map

Classify capabilities independently. They are not a maturity ladder: Passage does not depend on an intended/as-built residual, and a residual does not prove that Passage is authorized.

| Capability | Evidence dependency | Standing for the first complete implementation proof |
|---|---|---|
| **Source custody** | exact or explicitly sanitized supplied source and coordinates | required |
| **Reconstruction** | permitted Reader candidates, human admission, normal form, Fold | required |
| **Multi-beam tomography** | two or more genuinely distinct, authorized source/Reader beams | conditional |
| **Trace-linked projection** | admitted normal form plus operator and Aperture grant | required |
| **Intended/as-built residual** | attributable intended and observed evidence plus comparison law | conditional |
| **Passage** | governed Offering, Locket, Encounter, and bounded Return permission | required |

An example may still qualify as useful research when it lacks a required implementation-proof capability. In that case it returns `qualified_with_missing_material` or `not_suitable_for_first_case`; the missing capability is not invented.

### 5.4 Eligibility result

Return one of:

- `qualified_for_case_design`;
- `qualified_with_missing_material`;
- `requires_sanitization`;
- `requires_authority_decision`;
- `not_suitable_for_first_case`;
- `not_processable_under_current_boundary`.

The reason and next lawful action accompany the result.

---

## 6 · Proposed Reconstruction Envelope

If the example qualifies, prepare a candidate envelope containing:

1. case identity and standing;
2. exact source manifests;
3. bounded question;
4. proposed semantic item types;
5. proposed Reader beams and why each adds a distinct angle;
6. model/runtime and prompt-record requirements;
7. candidate admission interface;
8. items that only a human may decide;
9. initial OPEN set;
10. normal-form features the case genuinely requires;
11. supported projection types;
12. residual law, if as-built evidence exists;
13. privacy and disclosure matrix;
14. proposed conformance tests;
15. smallest coherent experience path;
16. explicitly deferred capabilities.

The envelope is returned to Deniz before any implementation.

---

## 7 · Owner decision gate

Deniz may:

- accept the envelope;
- amend its question, scope, sources, beams, or privacy boundary;
- supply missing material;
- select a different example;
- authorize a private prototype only;
- authorize a protected Preview candidate;
- or stop the case.

Acceptance of the intake packet is not acceptance of Reader outputs, geometry, design, publication, or production release.

If model reading is proposed, the owner decision must explicitly identify:

- which exact source bytes may be processed;
- by which declared reader/model profile;
- for what bounded purpose;
- with what retention and disclosure boundary;
- and who will perform admission.

---

## 8 · Work that begins only after approval

Only after the Reconstruction Envelope is accepted do we:

1. reconcile an isolated implementation worktree from the deployed executable SHA and verify it against the recorded production receipt;
2. freeze case contracts and golden source identities;
3. run the authorized Reader beams;
4. present candidate structure for human admission;
5. compile and verify the normal form;
6. create exact geometry from admitted invariants;
7. implement case modes and lawful fallbacks;
8. create a trace-linked projection and, only where intended/as-built evidence supports it, a typed residual;
9. test the required bounded Offering, Locket, Encounter, and Return loop;
10. deploy a protected immutable Preview for separate acceptance.

Public release requires a later, separate authorization.

---

## 9 · Explicit non-actions while waiting

Until the example is supplied and qualified, do not:

- change the current site;
- invent a case fixture;
- add a public route;
- redesign Genesis;
- promote Papillœn as the selected example;
- run an AI Reader on private material;
- infer permission from file availability;
- create geometry from an unadmitted interpretation;
- publish source, candidate structure, or evidence;
- create a Vercel deployment;
- merge, promote, or alter production;
- claim reconstruction, fidelity, acceptance, release, or Seal.

---

## 10 · Immediate handoff

The next action is simple:

> Deniz supplies the example. Pinecœne receives it as a projection with provenance, not as raw material to decorate.

The first response after receipt always contains:

- intake receipt or lawful custody boundary;
- exact metadata and hashes;
- the content-inspection and model-processing authority currently present or absent.

If content inspection is explicitly authorized, that response may also contain:

- source and evidence inventory;
- privacy/authority classification;
- bounded reconstruction question;
- case capability map;
- eligibility result;
- proposed Reconstruction Envelope;
- unresolved decisions for Deniz.

Implementation waits for the decision that follows.
