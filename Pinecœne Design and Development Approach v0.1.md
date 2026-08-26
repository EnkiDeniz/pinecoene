# Pinecœne Design and Development Approach

**Version:** 0.1

**Date:** 2026-08-26

**Status:** Working approach for the first production-quality vertical slice

**Inputs:** Pinecœne System Specification v0.5, Concept 1 audit, and Concept 2 audit

## 1 · Decision

Pinecœne should be built in this order:

> **Design one beautiful, lawful Offered Object; prove its complete recipient encounter; then build the owner instrument that makes more of them.**

We should not begin with the complete Studio, broad platform navigation, accounts, relay infrastructure, or 7 Presence. Those surfaces would force premature visual and architectural decisions around an object whose material identity is not yet resolved.

The first production target is one complete vertical slice:

> D. offers **“I have been thinking about you.”** A recipient sees a closed Locket, chooses whether to open it, witnesses the form unfold through its admitted history, inspects one unresolved seam, and sends a Return while retaining control over its reuse. The owner later reviews that Return without changing the original Pinecœne.

Concept 2 is the interaction reference for this slice. It is not the final visual reference.

## 2 · Non-negotiable qualities

The work must satisfy all of these at the same time:

1. **First-sight wonder** — the closed Locket is specific, ownable, materially convincing, and recognizably Pinecœne.
2. **Causal legibility** — every meaningful visual, sonic, and textual event can explain why it exists.
3. **Human clarity** — recipients receive value before learning the full ontology.
4. **Authority integrity** — owner recognition, recipient consent, Return reuse, and owner disposition remain separate acts.
5. **Projection truth** — Preview and recipient playback use the same serialized disclosure and the same player.
6. **Stillness** — motion happens because an event happens; sealed and settled objects do not perform decorative life.
7. **Accessibility parity** — reduced-motion, sound-off, keyboard, semantic-text, high-contrast, and no-WebGL paths preserve the permitted meaning.
8. **Portability** — the canonical object can play without requiring a Pinecœne account or permanent backend connection.
9. **Responsive dignity** — the recipient encounter and owner work both remain coherent on mobile and desktop.
10. **Transport honesty** — expiry, revocation, download, identity, and integrity are described only as strongly as they are actually enforced.

## 3 · The two experiential worlds

Pinecœne needs two distinct visual environments connected by the same object.

### 3.1 Recipient Locket

The recipient experience should feel like receiving a private object or letter:

- almost no interface chrome;
- sender and dedication before system terminology;
- a materially credible closed object;
- Open, Not now, and Decline without pressure;
- one causal opening score;
- direct and semantic inspection of meaningful features;
- a quiet Return flow with explicit reuse permission;
- no account wall before opening;
- no owner or system controls.

### 3.2 Owner Atelier

The owner experience should feel like a conservation table or careful atelier:

- the Pinecœne remains the primary object;
- one human decision is foregrounded at a time;
- advanced grammar is inspectable rather than constantly dominant;
- progressive language begins with What happened? What shaped this? How should it feel? Who is this for? What may they receive?;
- exact recipient Preview temporarily takes over the stage;
- authority changes are explicit;
- desktop supports depth and comparison;
- mobile becomes a sequence of focused tasks rather than a compressed three-column console.

The environments share object geometry, materials, semantic colors, typography, provenance, and motion principles. They do not need identical navigation or information density.

## 4 · Design phase

Design is complete only when the object, interaction, responsive behavior, accessibility alternatives, and owner/recipient boundary have been resolved. A polished homepage or a collection of attractive screens is insufficient.

### D0 · Freeze the demonstration fixture

Create one canonical design fixture for PCN-0002 containing:

- sender D.;
- dedication “I have been thinking about you.”;
- seven phases;
- six finished phases;
- one deliberately unpraised gap;
- at least three acknowledged Muses;
- one private Muse;
- sparse Return particulate;
- one final OPEN seam;
- one recipient Return;
- recipient Muse-reuse permission off by default;
- recipient withdrawal permission on by default.

Every visual study uses this exact meaning. Art direction may change expression, but it may not change the semantic object to make a study look better.

**Gate D0:** The fixture, causal map, visible/private disclosure, and state sequence are agreed and frozen for design comparison.

### D1 · Three first-sight art-direction studies

Create exactly three materially distinct studies of the same Locket at the same meaningful states:

1. **Luminous archival fold** — vellum, fiber, blind embossing, warm metal joinery, raking museum light.
2. **Mineral reliquary** — translucent stone laminations, inclusions as Returns, a fault-line OPEN seam, mass and quiet shadow.
3. **Dark instrument** — smoked or oxidized metal planes, engraved provenance, a narrow living light seam, restrained mechanical unfolding.

Each direction must show:

- desktop recipient arrival;
- mobile recipient arrival;
- closed Locket detail;
- mid-opening state;
- settled open state;
- unresolved seam inspection;
- reduced-motion still sequence;
- one sound-off caption treatment.

Do not design the full owner interface during this phase. Do not compare the directions using different layouts, copy, or semantic content. The object must win on material identity, not presentation tricks.

**Gate D1:** Select one direction, or one explicitly defined hybrid, based on specificity, material credibility, causal readability, emotional tone, mobile strength, accessibility, and technical feasibility.

### D2 · Define the object grammar

Turn the selected direction into a repeatable visual system:

- closed silhouette and scale rules;
- semantic geometry for Solid, Return particulate, Muse particulate, Edge, Address, and OPEN;
- material library and lawful variation limits;
- lighting rig and shadow behavior;
- camera and composition rules for mobile and desktop;
- color roles with high-contrast equivalents;
- object quality tiers that preserve semantic parity;
- static Glyph and poster behavior;
- no-WebGL representation;
- direct-manipulation targets and semantic anatomy list;
- material sound vocabulary;
- typography and editorial voice.

This phase must also produce an object state atlas:

- closed;
- opening beats 1–6;
- settled open;
- feature focused;
- seam explained;
- Return arriving;
- Return withdrawn;
- unavailable, expired, declined, and revoked states where applicable.

**Gate D2:** A second designer or developer can reconstruct the intended object, states, semantic roles, and accessibility alternatives without inventing missing rules.

### D3 · Prototype the recipient encounter

Build a high-fidelity, interaction-complete prototype of:

1. arrival;
2. Open / Not now / Decline;
3. opening score;
4. settled inspection;
5. seam explanation;
6. Return composition;
7. Return reuse and withdrawal decisions;
8. quiet confirmation.

Test at minimum:

- desktop pointer;
- mobile touch;
- keyboard only;
- reduced motion;
- sound off;
- semantic-text / no-WebGL;
- 200% zoom;
- one low-performance device profile.

The first opening may be ceremonial, but repeat openings must be faster and recipient-controlled. Skip must be visible without competing with Open.

**Gate D3:** A new recipient can understand who sent the Offering, what opening does, what the sender may learn, why the seam remains open, and what happens to their Return without needing verbal coaching.

### D4 · Design the owner Atelier around the approved object

Design only the owner tasks required by the vertical slice:

1. select or create the short authorized record;
2. review and acknowledge Muses;
3. preserve one private Muse;
4. choose lawful expression;
5. choose Address and disclosure;
6. preview the exact recipient player;
7. cross the seat boundary and create the Offering;
8. later review the candidate Return;
9. admit, reject, leave OPEN, or attach as Muse when permitted;
10. compile a successor while preserving the predecessor.

The responsive owner model should use focused screens, sheets, and progressive detail—not a fixed desktop console squeezed onto mobile.

**Gate D4:** Every authority-changing action has a clear actor, consequence, reversal rule, and responsive state; the recipient player remains visually exact in Preview.

### D5 · Design acceptance and handoff

Required handoff artifacts:

- approved Figma source and clickable journey;
- desktop and mobile frame set;
- visual tokens and typography rules;
- object material and lighting specification;
- semantic visual mapping matrix;
- motion score with durations, easing, skip, replay, and reduced-motion behavior;
- sound event score and caption equivalents;
- interaction and focus-order specification;
- component and state inventory;
- accessibility behavior specification;
- content and canonical-language map;
- asset inventory with ownership and production status;
- empty, error, expiry, decline, revoke, and offline states;
- implementation acceptance checklist.

**Design acceptance gate:** We do not begin the full application build until the recipient encounter, selected Locket direction, owner vertical slice, mobile behavior, and accessibility alternatives are approved together.

## 5 · Development architecture

### 5.1 Technology choices

- **Application:** TypeScript, React, and Next.js App Router deployed on Vercel.
- **Workspace:** pnpm monorepo with strict TypeScript and ESM-first packages.
- **Accessible controls:** React Aria primitives with Pinecœne-owned styling and tokens.
- **Canonical domain layer:** framework-free TypeScript packages with no React, Next.js, renderer, storage, or network dependency.
- **Validation:** JSON Schema 2020-12, Ajv, and TypeScript contract checks.
- **Canonicalization and integrity:** JCS-style canonical serialization, framed SHA-256 inputs, Web Crypto, and declared PRNG/version rules.
- **Heavy deterministic work:** browser Workers for validation, compilation, disclosure, hashing, and packaging.
- **Canonical visual renderer:** direct Three.js behind a backend-neutral renderer interface. React may host the canvas but does not own semantic rendering.
- **Fallback renderer:** semantic DOM and canonical 2D poster/Glyph generated from the same authorized projection.
- **Application motion:** native Web Animations or a lightweight interface-motion layer; object motion remains score-driven inside the renderer.
- **Audio:** native Web Audio API with deterministic schedules and user-triggered start.
- **Portable player:** Lit Web Components so playback is not dependent on React or Next.js.
- **Local custody:** IndexedDB through Dexie behind a typed storage adapter.
- **Testing:** Vitest for packages and properties; Playwright across Chromium, WebKit, and Firefox for complete journeys.
- **Delivery:** GitHub pull requests, Vercel Preview per change, and a protected production surface until the vertical slice passes release gates.

We should select the currently supported stable framework versions at bootstrap and pin them. Version choice must not leak into canonical data or package formats.

### 5.2 Initial workspace

Begin with the smallest physical package set that preserves the required boundaries:

```text
apps/
  web/                 public site, owner Atelier, recipient routes
  renderer-lab/        isolated material, geometry, motion, and quality studies
packages/
  contracts/           schemas and shared types
  canonical/           canonicalization, framing, hashing, version declarations
  compiler/            pure Fold, topology, and successor compilation
  disclosure/          recipient-safe projection
  performance/         visual, sonic, and semantic-text event score
  renderer-core/       renderer-neutral scene and interaction contracts
  renderer-three/      canonical WebGL renderer
  renderer-dom/        static and semantic fallback
  player/              Lit portable Witness Player
  storage/             IndexedDB adapters and migrations
  package-format/      .pcn.html, .pcn.json, and later .pcn archive
  fixtures/            PCN-0001, PCN-0002, adversarial and accessibility fixtures
```

Additional packages should be created only when a real dependency boundary appears.

### 5.3 Route and trust-zone model

The web application should separate the following route concerns even if they initially share one deployment:

- public editorial site;
- owner-local Atelier;
- capability-based recipient Witness route;
- optional relay APIs;
- internal renderer lab, excluded from production navigation;
- package export and offline playback.

Protected fields must be removed by the disclosure compiler before the recipient package or route is produced. They must never be shipped and hidden in client state, styles, renderer uniforms, or inaccessible controls.

The canonical origin should be `https://pinecoene.com`. `www.pinecoene.com`, the Unicode domain, its punycode equivalent, and any other production aliases must redirect before IndexedDB application state is created. This redirect set must be verified during deployment rather than assumed from configuration.

### 5.4 Local-first and relay boundary

The first slice should work locally before a hosted relay exists:

- owner records, scores, settings, Offerings, and Returns use IndexedDB;
- export/import proves durable local custody;
- direct `.pcn.html` or `.pcn.json` sharing proves backend-independent playback;
- the recipient needs no account to open a lawful Offering.

The optional relay comes later. It may provide opaque package carriage, capability URLs, expiry observation, best-effort revocation, and Return transport. It does not become the semantic source of truth or a requirement for playback.

Database, blob, and encryption providers for the relay should be selected only after its threat model, retention rules, maximum package size, and revocation claims are approved.

## 6 · Development sequence

### E0 · Repository and verification foundation

Deliver:

- monorepo scaffold;
- strict TypeScript and formatting;
- package boundary rules;
- CI for lint, typecheck, unit, browser, and build;
- fixture harness;
- GitHub-to-Vercel Preview connection;
- canonical-domain and environment plan;
- protected Preview and Production separation.

**Gate E0:** A clean checkout installs and runs the same verification locally and in CI; no product behavior is claimed yet.

### E1 · Contracts, canonicalization, and compiler

Deliver:

- versioned schemas;
- canonical framing and hashing;
- admitted semantic digest;
- deterministic topology seed;
- Muse candidate invariance;
- disclosure projection;
- PCN-0001 and frozen PCN-0002 fixtures;
- property and snapshot tests.

**Gate E1:** Rejected or reordered candidates cannot perturb the admitted object; identical canonical inputs produce identical semantic outputs.

### E2 · Renderer grammar and Witness Player

Deliver:

- selected Locket geometry and material grammar;
- event-scored opening;
- Inspectable Causality;
- static, reduced-motion, sound-off, high-contrast, and semantic-text renderers;
- mobile and desktop composition;
- quality adaptation without semantic change;
- Lit Witness Player embedded in Next.js and standalone package harnesses.

**Gate E2:** The same disclosure projection produces the same topology, event order, OPEN state, and permitted features across Preview, recipient route, and offline package.

### E3 · Recipient vertical slice

Deliver:

- pre-open route that loads before deferred 3D code;
- sender, dedication, disclosure promise, Open / Not now / Decline;
- complete opening and inspection;
- Return writing, Muse-reuse permission, withdrawal permission, and confirmation;
- no-account first value;
- responsive and accessible behavior.

**Gate E3:** The complete recipient journey passes browser, keyboard, reduced-motion, no-WebGL, no-network-package, performance, and disclosure-leak tests.

### E4 · Owner Atelier and local custody

Deliver:

- authorized-record intake for the fixed journey;
- Muse recognition and privacy;
- expression controls that cannot change topology;
- Address and disclosure;
- exact Witness Player Preview;
- seat-boundary handoff;
- IndexedDB persistence, migrations, export, and import.

**Gate E4:** Mobile and desktop owner journeys are usable; Preview is byte-equivalent to the recipient projection; private material is absent from recipient output.

### E5 · Return, owner disposition, and successor

Deliver:

- Return arrival as candidate material;
- Admit, Reject, Leave OPEN, and Attach as Muse when permitted;
- withdrawal behavior within the declared transport limits;
- successor compilation;
- immutable predecessor and lineage view.

**Gate E5:** No recipient Return acquires standing or Muse reuse without the correct human actions; predecessor hashes and packages remain unchanged.

### E6 · Direct package and optional relay

First deliver deterministic direct packages with no remote imports, an accessible transcript, poster fallback, content security policy, and no-network verification.

Only then add an optional relay if the product needs link delivery, expiry, revocation observation, or cross-device Returns.

**Gate E6:** Offline packages play lawfully; relay failure cannot prevent local playback; transport copy and revocation claims are accurate.

### E7 · Production hardening and private pilot

Deliver:

- Chromium, WebKit, and Firefox verification;
- representative low-memory mobile performance;
- disclosure and package adversarial tests;
- accessibility review with real assistive technology;
- privacy and security threat review;
- error, expiry, unavailable, declined, revoked, and recovery paths;
- exact Git SHA, Vercel deployment, canonical-domain, and rollback evidence;
- a small invitation-only pilot using real but deliberately bounded records.

**Gate E7:** All first-sight, authority, accessibility, integrity, portability, performance, and deployment acceptance tests have evidence—not only a successful build or READY deployment.

## 7 · Acceptance matrix for the first vertical slice

| Dimension | Required proof |
|---|---|
| First sight | A new recipient recognizes an intentional offered object within five seconds; no generic orb, console, or decorative AI theater dominates. |
| Comprehension | Recipient understands sender, dedication, opening consequence, sender telemetry, Return consequence, and reuse permission without coaching. |
| Causality | Every meaningful feature maps to an admitted event or relation and can be inspected. |
| Authority | Owner and recipient actions remain distinct; silence grants nothing; recipient reuse choice is enforced. |
| Preview parity | Owner Preview and recipient route consume byte-equivalent disclosure projections through the same player. |
| Determinism | Same canonical input preserves semantic topology, event order, OPEN state, and admitted features across environments. |
| Accessibility | Keyboard, touch, reduced motion, sound off, semantic text, high contrast, and no-WebGL paths are complete. |
| Responsive behavior | Recipient and owner journeys are usable at declared mobile and desktop widths without clipped meaning or controls. |
| Portability | Exported package opens without network dependencies and includes transcript and poster fallback. |
| Performance | Pre-open LCP, interaction responsiveness, renderer frame stability, worker compile time, and bundle budgets meet Spec v0.5 targets. |
| Transport honesty | Domain redirects, expiry, revocation, download, identity, and integrity statements match verified behavior. |

## 8 · Working cadence and decision discipline

- Review design work against the frozen fixture, not against general taste alone.
- Keep a visible decision log for material, interaction, authority, and technical choices.
- Use Vercel Previews for coded checkpoints, but do not mistake a Preview for acceptance.
- Every development milestone ends with browser evidence and contract tests appropriate to its claims.
- Preserve one known-good fixture across all layers to reveal semantic drift.
- Avoid broad feature work while a current gate is unresolved.
- Treat the specification, design source, implementation, tests, and deployed artifact as separate evidence that must agree.

## 9 · Indicative delivery

For a focused senior effort:

- **3–4 weeks:** fixture, three art directions, selected object grammar, recipient prototype, and owner vertical-slice design;
- **2–3 weeks:** contracts, canonicalization, deterministic fixtures, and repository foundation;
- **3–4 weeks:** canonical renderer, Witness Player, accessibility alternatives, and recipient journey;
- **2–3 weeks:** owner Atelier, local custody, exact Preview, Return, and successor;
- **2–3 weeks:** direct packaging, performance, browser, privacy, accessibility, and deployment hardening.

The design and technical contract work can overlap carefully, but the full interface implementation should not begin before Design Gate D5. A production-quality thin slice remains approximately **12–16 focused weeks**, depending primarily on renderer complexity, material asset production, accessibility findings, and relay scope.

## 10 · Immediate next work

The next work is not repository scaffolding. It is Design Phase D0–D1:

1. freeze the PCN-0002 comparison fixture and its disclosure map;
2. produce the three first-sight Locket directions using identical content and states;
3. compare them in one Figma decision board;
4. select one material direction before designing the complete recipient interaction.

This gives development a visual target strong enough to deserve durable architecture.
