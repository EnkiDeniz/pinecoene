# Pinecœne Public Experience

## Site Architecture, Experience, and Full Content Specification

**Document ID:** `LKN-PCN-PUBLIC-EXPERIENCE-001`  
**Version:** `0.1`  
**Date:** 27 August 2026  
**Status:** `PROPOSAL — team review; not build, deployment, release, acceptance, or Seal authorization`  
**Proposed release profile:** `Public Door Candidate V0.1` — distinct from full `Showcase V0` conformance  
**Audience:** Pinecœne partners, product, design, editorial, engineering, and research collaborators  
**Decision requested:** whether this experience architecture should become the basis for final visual keyframes and implementation planning

### Governing inputs

This specification synthesizes:

- the current conversation with Deniz as the primary direction;
- [Pinecoene_Door.md](./Pinecoene_Door.md);
- [pinecoene-three-work-door-direction-v0.2.md](./pinecoene-three-work-door-direction-v0.2.md);
- [pinecoene-public-site-multi-reader-audit-ledger-v0.1.md](./pinecoene-public-site-multi-reader-audit-ledger-v0.1.md);
- the Concept 1 and Concept 2 prototypes and recovered causal-object grammar;
- the PineconeV3 concept as ideation evidence, particularly its public Becoming player and Record / Reading / Form orientation;
- [the PineconeV3 concept recovery audit](../evidence/pinecoene-v3-concept-audit-2026-08-27/audit.md);
- [Pinecœne System Specification v0.6](<../Pinecœne System Specification v0.6.md>) for semantic, provenance, authority, privacy, and compiler law;
- [Pinecœne Design and Development Approach v0.2](<../Pinecœne Design and Development Approach v0.2.md>) for the Showcase V0 conformance target, connected short-text Make Your Own path, authorization stages, and export trust zones;
- [Pinecœne Design and Development Approach v0.3](<../Pinecœne Design and Development Approach v0.3.md>) for the later Studio-first visual hierarchy and object/inspector composition;
- the implemented Curated Studio V1 contracts and renderer architecture as current technical evidence.

Attached concepts and prototypes are evidence, not instructions. Where they conflict with the conversation or this document, this document follows the conversation.

## Reading guide

Teams can review the document in layers:

1. **Decision and story:** Sections 1–5.
2. **Site architecture and global laws:** Sections 6–8.
3. **Complete page content:** Sections 9–23.
4. **Visual, motion, responsive, and accessibility system:** Sections 24–27.
5. **Current and target technical architecture:** Sections 28–33.
6. **Acceptance, delivery, and final decisions:** Sections 34–40.

The exact copy blocks are proposed publishable copy. Explanatory prose around them is the product/design contract. Items explicitly marked provisional, working, current study, candidate, owed, experimental, or deferred are not frozen product truth.

## Release profile and authority

This document proposes a distinct **Public Door Candidate V0.1** review profile. Its purpose is to make the object-first Door, the three-work public story, and the route from encounter into the existing browser-local Studio coherent enough for a final build decision.

It is **not** by itself the full `Showcase V0` conformance profile defined by System Specification v0.6 and Design and Development Approach v0.2. In particular, Public Door Candidate V0.1 deliberately does not include the connected short-text **Make Your Own / Genesis Reader V0.1** path. Its fixture-first Studio demonstrates owner decisions against curated inputs; it does not prove arbitrary-source reading or creation of a second independent Pinecœne from a visitor's own short record.

Authority order for this proposal is:

1. System Specification v0.6 remains normative for semantic, authority, privacy, Offering, Return, portability, and conformance law.
2. Design and Development Approach v0.2 remains normative for anything claiming `Showcase V0`, including Make Your Own and the two export trust zones.
3. Design and Development Approach v0.3 supersedes v0.2 only where it explicitly changes public visual hierarchy from Locket-first to Studio/Fold-first. It does not amend v0.6 contracts or authorization law.
4. If accepted, this document may supersede prior **public information architecture, content, naming, and visual-sequencing intent**. It may not silently amend protocol contracts, human authority, privacy, consent, or conformance gates.

The team therefore has two honest build choices:

- **Door profile:** build this Public Door Candidate V0.1, preserve the fixture-first Studio as a labelled demonstration, and defer any claim of full Showcase V0 conformance; or
- **Full Showcase profile:** add the bounded short-text Make Your Own / Genesis Reader V0.1 work and acceptance gates from v0.6 and Approach v0.2 before calling the release Showcase V0.

This choice is a release-scope decision, not a copy-editing detail.

## Copy status law

Every publishable copy block has one state:

- `PROPOSED`;
- `APPROVED FOR KEYFRAMES`;
- `FROZEN FOR BUILD`;
- `RELEASED`.

In this v0.1 document, every block called `Proposed exact copy` is `PROPOSED`: the wording, punctuation, and line breaks are intentionally specific enough to review, but no block is accepted or frozen merely because it appears here.

A frozen block requires a stable `copyId`, copy version, exact UTF-8 text, human approval reference, intended routes/placements, and standing as either editorial or causal copy. Repeated copy is stored once and referenced by `copyId`; it is not independently retyped into pages, metadata, posters, footers, or components.

Recommended initial IDs:

```text
door.object-intro.v0.1
door.letter.v0.1
door.invitation.v0.1
door.closing.v0.1
works.opening.v0.1
join.placeholder.v0.1
locket.demo-overture.v0.1
```

Editorial copy can change without changing Fold identity. Event captions, source anchors, Reading summaries, Lineage events, and recipient-safe inspection copy are causal/disclosure material and require the appropriate work or Offering version review before change.

---

# 1. Executive decision

Pinecœne needs one public Door, not a homepage that explains the system and not a product console placed in front of a stranger.

The public experience begins with a real Pinecœne already present. The visitor turns it before reading why it exists. A short letter then changes what the object means without removing it from the room. The final beat is an invitation to participate.

The site tells one human story:

```text
IDEA
  → COURAGE
  → CARE
  → SHAPE
  → PASSAGE
  → ENCOUNTER
  → RETURN
  → BECOMING
```

The trustworthy machinery remains underneath:

```text
RECORD
  → READING
  → ADMISSION
  → RECOGNITION
  → AUTHORIZED SCORE
  → FOLD
  → EXPRESSION
  → ADDRESS
  → OFFERING
  → LOCKET
  → ENCOUNTER
  → RETURN
  → SUCCESSOR
```

The first sequence is the public story. The second is the product architecture that makes the public story honest. The constitutional machinery protects the encounter; it does not replace it.

> **Target-state gate:** `Pinecœne, Becoming` does not yet exist in the repository as a frozen manifest, score, scene, transition, or poster. Every Door, three-work, and current-Fold requirement in this document describes the proposed release target. None may be presented as implemented until the human-reviewed third work and its golden identities are frozen.

## 1.1 The core hierarchy

The complete experience follows this hierarchy:

```text
DOOR
  → THE LETTER
  → THE INVITATION
      ├── WATCH ONE BECOME
      ├── SEE THE WORKS
      └── BRING AN IDEA

WORKS
  → GENESIS
  → THE GENESIS CHAT / SEED
  → PINECŒNE, BECOMING

EACH WORK
  → RECORD
  → READING
  → FORM
  → FOLD AT REST
  → BECOMING
  → LINEAGE

STUDIO
  → OWNER DECISIONS
  → COMPILATION
  → EXPRESSION
  → ADDRESS
  → OFFERING

RECIPIENT
  → LOCKET
  → ENCOUNTER
  → RETURN
  → POSSIBLE SUCCESSOR
```

## 1.2 What is the product?

The Fold and the machinery that earns it are the core product.

- **Studio** is where the owner encounters the record, reviews a reading, makes decisions, and compiles a Fold.
- **Fold** is the work at rest: the form earned by the admitted record.
- **Becoming** is the same work replayed causally through time.
- **Offering** is the owner’s bounded act of preparing one exact Fold for an encounter.
- **Locket** is the recipient-facing permission vessel. It is not the Pinecœne itself.
- **Encounter** is what the recipient is permitted to experience.
- **Return** is a candidate response. Arrival is not acceptance.
- **Successor** is a new admitted work that preserves rather than rewrites its predecessor.

## 1.3 Three distinct first sights

The phrase “first experience” has three contexts and must not be collapsed:

| Context | First sight | Purpose |
|---|---|---|
| Public discovery | The current `Pinecœne, Becoming` Fold | Desire, recognition, and entry into the idea’s world |
| Owner / maker | A formed canonical study, then its Record and Reading | Demonstrate that form is earned before asking for decisions |
| Recipient | A closed Locket with one human line and an explicit choice | Consent-led encounter with a bounded Offering |

The public Door is not a simulated Offering. The recipient Locket is not the homepage. The Studio is not the first public explanation.

---

# 2. The story Pinecœne tells

## 2.1 Human source

Ideas enter the world frightening, messy, fragile, and unfamiliar. They can threaten what is known before they can explain what should replace it. Their difficulty may come not from complexity but from the fact that the everyday world has no place for them yet.

Under care, an idea can become something beautiful without pretending that it arrived polished, settled, or fully understood.

Pinecœne gives an idea a shape so it can survive passage from the world in which it was born into the everyday world of another person.

## 2.2 Public proposition

> **A thought may need a shape to travel.**

Supporting sentence:

> **A pinecone is a work that remembers how it became.**

The accountability sentence appears only after encounter or through inspection:

> **The form may only claim what the work has earned.**

## 2.3 Emotional contract

The site speaks first to the person carrying an unfinished idea, not to an evaluator examining a claim.

The emotional promise is:

> Bring the living thing. We will not force it to pretend it is finished.

The moral promise is:

- unfamiliarity will not automatically be answered with more explanation;
- unfinished work will not be cosmetically closed;
- fragility will not be converted into weakness theater;
- beauty will not upgrade standing;
- a private interior will not be exposed merely because a public form is compelling;
- a recipient may decline without standing penalty, forced disclosure, or product retaliation;
- a predecessor will not be silently rewritten.

## 2.4 The site is itself a Pinecœne record

The public experience does not hide its own failed translations.

The current third work records how Pinecœne was:

1. conceived as a portable expression of an Œdit;
2. proven through Genesis;
3. discovered through the Genesis Chat;
4. reduced to its Locket, mistaking the vessel for the work;
5. recovered as Studio and executable Fold, but shown first as an expert instrument;
6. explained through a dense public constitution before anyone could encounter it;
7. returned to one Door, one object, one letter, and an honest invitation.

The failure is not decorative vulnerability. It is causal material. It changed the form and therefore belongs in Lineage.

---

# 3. Success definition

A first visitor succeeds when, without coaching or reading technical documentation, they can answer:

1. **What is that?**  
   A pinecone: a thought given a form that remembers how it became.

2. **Why might someone need one?**  
   Some ideas need a shape to travel without being falsely cleaned up, flattened, or closed.

3. **What happened here?**  
   This object and this site were made, misunderstood, corrected, and remain in becoming.

4. **What can I do?**  
   Turn one, watch one become, see the works, operate a local study, or approach the unfinished invitation to bring an idea.

5. **What is the Locket?**  
   The vessel that carries a permissioned encounter, not the Pinecœne itself.

6. **What is real today?**  
   Two deterministic fixture implementations exist locally. Genesis matches its proposed public identity; PCN-0002 requires re-curation or separate naming before it can stand publicly as The Genesis Chat. Executable Studio replays, browser-local study forks, an implemented legacy local Offering Preview, and a simulated local Return circuit also exist. The governing-package Preview, stripped public replay, and third work are target-state work.

7. **What is not real today?**  
   Arbitrary source understanding, accounts, cloud custody, real delivery, cross-device Returns, enforceable revocation, automatic successors, or live Œdit synchronization.

## 3.1 Emotional acceptance

The desired first response is not only:

> I understand the product.

It is:

> I have had ideas that felt too strange, unfinished, or fragile to explain. I understand why they might need a form. I want to see one become.

## 3.2 Failure conditions

The public experience fails if:

- the visitor meets a manifesto, glossary, consent vessel, or instrument before meeting a Fold;
- the object looks like generic AI spectacle;
- the letter becomes a long scroll presentation;
- all three works compete as hero cards;
- the current work’s failures are omitted from its record;
- public exploration suddenly becomes a dense owner console;
- “Bring an idea” implies receipt before a receiving mechanism exists;
- a fixture-authored study appears to be a machine discovery or observed human act;
- mobile crops the object until it no longer reads as a complete artifact;
- sound, motion, WebGL, or precise pointer control is required to understand the work.

---

# 4. Audience and reading altitudes

## 4.1 Primary audiences

### Curious stranger

Has never heard of Pinecœne. Needs object, feeling, and one simple action before vocabulary.

### Person carrying an unfinished idea

Needs recognition, care, and an honest account of what can be done now.

### Partner or collaborator

Needs to understand the complete medium, its differentiation, the three-work evidence, and the path from showcase to product.

### Designer, artist, researcher, or engineer

Needs deeper access to causal form, material grammar, scientific trellis, compiler law, provenance, and falsifiers.

### Owner / maker

Needs an explicit boundary between source, reading, admission, recognition, expression, Address, and Offering.

### Recipient

Needs consent, disclosure, a calm encounter, and a bounded way to Return or decline.

## 4.2 Progressive vocabulary

Vocabulary is introduced by altitude.

| Altitude | Vocabulary |
|---|---|
| Arrival | idea, courage, care, shape, carry, open, becoming, beauty, fragile, world |
| Encounter | pinecone, work, record, reading, form, Fold, Lineage |
| Participation | Studio, Muse, Expression, Address, Offering, Locket, Return, Successor |
| Inspection | admission, standing, provenance, conformation, semantic topology, fixture, hash, compiler, falsifier |

The Door begins at Arrival. Work pages progress through Encounter. Studio and deep More pages may use Participation and Inspection language.

---

# 5. Proposed public objects and names

## 5.1 Work 1 — Genesis

**Public title:** `Genesis`  
**Internal ID:** `pcn-0001`  
**Public role:** the first proof-of-medium under a declared fixture reading  
**Standing:** immutable, sanitized, fixture-authored demonstration  
**Form state:** settled with authored OPEN relations  
**Public subtitle:** `The first record folded into form.`

Genesis demonstrates, under one declared fixture reading, that admitted causal structure can deterministically produce particular geometry rather than receive an arbitrary visualization.

## 5.2 Work 2 — The Genesis Chat

**Public title:** `The Genesis Chat`  
**Optional proposed form name:** `Seed`  
**Internal ID:** `TBD pending Decision 13`; bind to `pcn-0002` only if that fixture is re-curated and issued new manifest/golden identities  
**Existing implementation evidence:** `pcn-0002`, whose current record does not yet match the proposed origin work  
**Prohibited public title:** `This Chat`  
**Public role:** the origin conversation  
**Standing:** proposed origin-conversation work; public identity, fixture standing, and rights are not frozen  
**Intended form state:** six phases settled; seventh phase OPEN, pending the selected identity/curation branch  
**Public subtitle:** `The conversation that made Pinecœne.`

“Seed” may appear as the form’s nickname only if Decision 3 and the complete Decision-13 identity/manifest gate are accepted. It must not replace the historical identity of the record.

## 5.3 Work 3 — Pinecœne, Becoming

**Public title:** `Pinecœne, Becoming`  
**Working shorthand:** `pcn-v3`; no release ID exists until a manifest and exact identity are frozen  
**Public role:** the present living work and Door protagonist  
**Standing:** proposed current work; the living site history exists, but its curated source set, Admission, Recognition, identity, score, and Fold are not frozen  
**Working receipt:** `third attempt · current study · OPEN`  
**Required post-freeze release receipt:** `third attempt · current work · OPEN`  
**Public subtitle:** `This site, being made again.`

The target work will be compiled from a curated, sanitized record of Pinecœne’s public translations, failures, corrections, and renewed direction. It may not be presented as implemented or canonical until the record, reading, admission, Recognition, semantic mapping, fixture hash, golden vectors, and design authority are explicitly frozen.

After that gate, the released manifest is an immutable accepted snapshot whose declared semantic state remains OPEN. `OPEN` does not mean the released bytes are mutable. Later development creates a new version or Successor rather than silently changing the released current work.

## 5.4 Future work — The Thin Fold

The Thin Fold is not the third canonical work.

It appears only under `What’s next` as a promised falsification test:

> Can a thin, weakly challenged record remain visibly thin rather than receiving borrowed nobility from the renderer?

## 5.5 Vital Sign

Vital Sign is a separate experimental 7 Presence study. It is not a Pinecœne, Fold, fourth work, consciousness display, or autonomous intelligence claim.

---

# 6. Information architecture

## 6.1 Proposed canonical route tree

```text
/
├── /works
│   ├── /works/genesis
│   ├── /works/genesis-chat
│   └── /works/pinecoene-becoming
├── /join
├── /more
├── /science
├── /art
├── /how
├── /next
├── /studio
│   ├── /studio/new
│   ├── /studio/specimens/[fixtureId]
│   └── /studio/studies/[studyId]
├── /w/[offeringId]
├── /vital-sign
├── /master
└── /theorem
```

`More` is the navigation grouping. Its child content retains the short canonical paths `/science`, `/art`, `/how`, and `/next`; `/more` provides the accessible directory and no-JavaScript fallback.

`/master` and `/theorem` remain deep, clearly labelled candidate source routes. They are not global-navigation destinations.

## 6.2 Navigation hierarchy

The only first-level public navigation choices are:

- Works;
- Join;
- More.

More contains:

- Science;
- Art;
- How it’s made;
- What’s next.

Studio is reached contextually through Join, Works, and How it’s made. It does not need to compete with the Door in the global navigation.

## 6.3 Route-purpose matrix

| Route | Audience | Primary purpose | Default resolution | Primary action |
|---|---|---|---|---|
| `/` | stranger | encounter one living Fold and receive the invitation | Form | Turn it |
| `/works` | curious visitor | understand the three-work lineage | Form + short story | Open a work |
| `/works/[slug]` | curious/deep visitor | encounter, replay, and inspect one work | Fold at rest | Watch it become |
| `/join` | prospective maker | understand how participation works now | plain language | Fork a local study |
| `/more` | curious visitor / no-JavaScript fallback | choose optional depth without returning to the Door | directory | Choose a subject |
| `/science` | research-curious | see the scientific trellis and falsifiers | evidence map | Read the probes |
| `/art` | artist/critic | understand the artistic law and material stakes | essay + works | Return to a work |
| `/how` | builder/partner | understand Record → Reading → Form and the lifecycle | structured explanation | Enter Studio |
| `/next` | partner/team | distinguish current work from bets and deferred capabilities | roadmap | Review the open tests |
| `/studio` | maker/partner | select a canonical specimen or resume a local fork | owner instrument | Start or resume |
| `/studio/new` | maker | create a browser-local guided fixture fork | owner decisions | Compile study |
| `/studio/specimens/[fixtureId]` | owner/maker | inspect or fork an immutable canonical specimen | owner instrument | Fork or inspect |
| `/studio/studies/[studyId]` | owner/maker | operate a browser-local study through Admission, Recognition, Fold, Offering, and Return | owner instrument | Continue current task |
| `/w/[offeringId]` | recipient/demo witness | consent to and open exact granted encounter | Locket | Open / Not now / Decline |
| `/vital-sign` | experimental visitor | operate a labelled Presence study | experimental | Change a declared state |
| `/master` | specialist | read proposal-derived constitutional source | source | Inspect standing |
| `/theorem` | specialist | read candidate representation theorem | source | Inspect assumptions |

## 6.4 Legacy route disposition

If the proposed architecture is implemented:

| Existing route | Proposed disposition |
|---|---|
| `/sketches` | permanent redirect to `/studio`; the current route is an owner Studio shelf, so it must not be recast as the public Works shelf |
| `/sketches/pcn-0001` with no `study` query | permanent redirect to `/studio/specimens/pcn-0001` |
| `/sketches/pcn-0002` with no `study` query | permanent redirect to `/studio/specimens/pcn-0002` |
| `/sketches/[fixtureId]?study=[studyId]` | resolve the local study fail-closed, verify its `fixtureId` matches the path, then replace the URL with `/studio/studies/[studyId]`; unknown/mismatched studies render an unavailable state and retain local bytes |
| `/use` with no `fixture` query | permanent redirect to `/studio/new` |
| `/use?fixture=pcn-0001` or `/use?fixture=pcn-0002` | permanent redirect to `/studio/new?fixture=[same-known-fixtureId]`; unknown fixture values fail closed instead of selecting a default |
| `/approach` | permanent redirect to `/how` |
| `/make` with no `fixture` query, if present in an earlier branch | permanent redirect to `/studio/new` |
| `/make?fixture=pcn-0001` or `/make?fixture=pcn-0002` | permanent redirect to `/studio/new?fixture=[same-known-fixtureId]`; unknown fixture values fail closed exactly like `/use` |
| `/studio/pcn-0001` or `/studio/pcn-0002` legacy bookmark | permanent redirect to `/studio/specimens/[same-fixtureId]` after the old reverse redirect is removed |
| `/w/[id]` | preserve the path but dispatch by validated registry/package kind as defined below; never feed a legacy or unknown package to the target Witness composition |
| `/sketches/vital-sign` | permanent redirect to canonical `/vital-sign`; remove the current reverse redirect |

No redirect may create IndexedDB state before the canonical host and canonical route are resolved.

Before any target redirect is enabled, remove the current reverse rules in `next.config.ts` that send `/studio` to `/sketches`, `/studio/:id` to `/sketches/:id`, `/make` to `/use`, and `/vital-sign` to `/sketches/vital-sign`. Leaving either Studio reverse rule in place would create a loop, and `/studio/:id` would incorrectly capture `/studio/new`. Redirect tests inspect the final rule set, not only isolated intended rules.

The query-bearing `/sketches/[fixtureId]?study=[studyId]` transformation is a temporary, non-indexed **client migration shim**, not a server `308`: the server cannot inspect browser-local IndexedDB. It resolves the exact local study, validates the fixture binding, and only then calls `router.replace` with the typed study URL. All other accepted path-only moves above use server redirects where their target is knowable without local state.

Redirect contract:

- use permanent `308` for accepted canonical page moves;
- canonical-domain redirect occurs before route redirect and before local storage access;
- preserve query parameters and fragments only when their meanings remain valid on the destination;
- consume the legacy `study` query only after a successful local lookup, and do not carry it onto a typed specimen route;
- preserve a known `/use?fixture=` or `/make?fixture=` selection exactly; never coerce an unknown fixture to PCN-0001 or PCN-0002;
- never preserve a fixture/study identifier by coercing it into the wrong ID type;
- known old specimen links resolve to typed specimen routes;
- known local-study links resolve only after local fail-closed ID lookup;
- unknown work, study, fixture, or Offering IDs render typed unavailable/404 states rather than a fallback object;
- automated tests prove no redirect loops across ASCII and IDN domains, trailing slashes, query strings, fragments, and old deep links.

`/w/[id]` dispatcher law:

1. a registered, schema-valid governing `OfferingPackage` v0.1 opens the target Witness composition;
2. an intentionally registered hosted-fixture alias resolves to one immutable governing package or an explicit canonical redirect;
3. an implemented V0_2, `v0.1-showcase`, owner-archive, or other legacy ID renders a read-only legacy unavailable/export state and never enters the target player;
4. an unknown, malformed, mismatched, or corrupt ID renders `This Offering is not available`; it never receives a fixture fallback.

Lookup and provenance order:

1. canonical-host resolution completes before any package lookup or IndexedDB read;
2. the route server checks the exact ID against the immutable hosted-Offering registry, but returns only a neutral, `noindex` acquisition shell plus a non-content hosted lookup descriptor containing `offeringId`, registry presence, package hash, package kind/version, and registry revision; it serializes no title, sender, scene, overture, source, or package bytes at this stage;
3. after hydration, the acquisition shell performs one exact Dexie lookup in the isolated recipient-package store before requesting any hosted package bytes;
4. acquisition resolves the two candidates explicitly: hosted only → fetch the exact registered package from a same-origin package endpoint; local only → use the exact local package; both → fail closed as an ID/provenance collision even if hashes match; neither → render `This Offering is not available`;
5. the same-origin hosted-package endpoint requires the exact ID and registry revision from the descriptor, returns only the registered immutable package, and fails closed if its canonical hash no longer matches the descriptor;
6. the selected candidate is then validated for package kind/version, ID/hash cross-bindings, player version, assets, disclosure, authorization, unknown fields, and byte ceiling before the Locket Shell mounts;
7. local package bytes never travel to the server merely to resolve the route, and a hosted hit never suppresses the local collision check;
8. imports and local writes also reject an ID already declared in the bundled hosted-ID manifest, but runtime collision detection remains mandatory because a browser may contain older or externally transferred custody;
9. tests cover both-present/same-hash, both-present/different-hash, mismatched descriptor revision, corrupt local data, storage unavailable, hosted fetch failure, refresh, and offline local-only cases;
10. only after complete validation does the Witness composition receive the package. No player, overture copy, or source-bearing accessibility content mounts earlier.

---

# 7. Global experience laws

## 7.1 Object first

The visitor does not earn the object by reading. The Fold is present before explanation.

Admission and disclosure are also separate laws. `keep`, `rewrite_and_keep`, `leave_open`, and `remove` decide what enters the owner's semantic Fold. Visibility and purpose then decide what may leave it. Admitted closed or protected material may lawfully shape the owner Fold. Closed and otherwise unpermitted material is absent from every public or recipient projection. Explicitly permitted protected material may enter only through a newly compiled recipient-safe projection. Rejected, removed, and unreviewed candidates create no canonical semantic effect anywhere.

## 7.2 Same object, changed receiver

Door, Works, public Fold, Becoming, Offering Preview, and recipient Witness must preserve the same work/version lineage and derive from the same canonical score. They may receive different disclosure projections, and removing private features may produce a different projected scene. Preview and Witness for one Offering must be byte-equivalent to each other. No surface may substitute an unrelated imitation merely because it looks similar.

## 7.3 Fold and Becoming are two projections of one work

- Fold is the work at rest.
- Becoming is the causal record replayed.
- Becoming must settle into the same form already encountered.
- The replay may not invent a more dramatic ending than the canonical Fold.

## 7.4 Motion is semantic

Only an event, relation, inspection, or explicit visitor action earns motion.

- proposal may open space;
- Return may arrive, trace, collide, or settle at an event locus;
- evaluation may harden an edge;
- boundary may create a membrane, gate, interval, or refusal to cross;
- correction may visibly restructure the work;
- Address may orient the whole form without changing topology;
- OPEN must halt or withhold rather than falsely resolve;
- a meaningful landing may receive one brief reflection, then go dark.

No permanent breathing, ambient particle fog, unexplained pulse, or decorative mutation may imply life.

## 7.5 Stillness is content

A settled Fold comes to rest. A sealed predecessor remains fixed. Slow witness drift may reveal dimensionality before interaction, but it stops once the visitor takes hold and it never becomes perpetual theater.

## 7.6 Every wonder remains inspectable

Every semantic feature retains a source event or relation reference. The public viewer may move progressively from wonder to cause without being forced into expert instrumentation.

## 7.7 The carrier is quieter than the cargo

Chrome, typography, navigation, captions, telemetry, and controls must never compete with the Fold. The public instrument is not a HUD.

## 7.8 Public and owner controls stay separate

Public visitors may turn, replay, inspect permitted causality, and follow lineage. Owner decisions—Admission, Recognition, Expression, Address, Offering, Return disposition—belong in Studio.

## 7.9 No simulation impersonates reality

Browser-local actions must not be labelled sent, delivered, received, accepted, released, revoked, sealed, synchronized, or witnessed by a human unless those events are actually observed and evidenced.

---

# 8. Global shell and navigation pulse

## 8.1 Closed shell

At the Door, the shell contains only:

- `Pinecœne` wordmark at top left;
- one navigation pulse at top right;
- the current Fold;
- contextually revealed human copy and controls.

No persistent route list, status badge, breadcrumb, candidate label, social proof, account action, or explanatory strapline appears in the initial frame.

## 8.2 Navigation pulse

The navigation control visually derives from the current work’s Mark, but behaves like an ordinary button.

Requirements:

- minimum 44 × 44 CSS pixel target;
- accessible name: `Open navigation` / `Close navigation`;
- visible keyboard focus;
- `aria-expanded` and `aria-controls`;
- one or two quiet pulses after load, then stillness;
- static appearance under reduced motion;
- no dependence on hover;
- no invisible focusable controls;
- retains the same location across desktop and mobile.

## 8.3 Open navigation

The opened surface is a quiet overlay or sheet, not a conventional enterprise header.

Exact first-level labels:

```text
Works
Join
More
```

Expanded More labels:

```text
Science
Art
How it’s made
What’s next
```

Footer-level or deep links may include:

```text
Studio
Master · candidate
Theorem · candidate
```

## 8.4 Footer

The Door itself does not need a conventional footer before the invitation. The final quiet line may be:

> **The record is still being written.**

Deeper pages use a minimal footer:

```text
Pinecœne
The record is still being written.

Works · Join · Science · Art · How it’s made · What’s next
```

Candidate source standing and `noindex` disclosures remain available in About this study or page metadata; they do not become the visual ending of every public page.

---

# 9. Homepage — `/` — The Door

## 9.1 Purpose

Let a stranger hold one Pinecœne while a short letter changes what the object means, then invite them to watch, explore, or eventually participate.

## 9.2 Protagonist

In the target release, the only hero object is `Pinecœne, Becoming`. The Door cannot ship in this form until that work passes the freeze gate in Section 29.8.

Genesis and The Genesis Chat may enter only during the current work’s causal replay at the moments they actually affect it. They never appear as equal hero thumbnails, morph into the current Fold, or merge into a single object.

## 9.3 Duration and pacing

The walk should feel like five to seven deliberate breaths.

- target total scroll length: approximately 5.5–7 desktop viewport heights;
- target first comprehension: under 20 seconds without interaction;
- object visible throughout the narrative spine;
- no mandatory replay;
- no scroll lock or hijacked wheel behavior;
- no progress dots unless testing proves visitors are getting lost;
- each beat must remain readable if motion is removed.

The blocks below are **proposed exact copy**, not accepted copy. They intentionally restore `This is an idea like that, trying to arrive here`, preserve Deniz’s stronger `they become something beautiful`, and add `Something that remembers how it became` to connect the letter to the product. Those editorial choices are part of Decision 7.

## 9.4 Beat 0 — The thing

### Initial frame

- Full dark field.
- Pinecœne wordmark, top left.
- Navigation pulse, top right.
- Complete current Fold centered and materially legible.
- No title, badge, receipt, taxonomy, or essay over the object.
- A meaningful static poster appears before the deferred WebGL renderer.

The Fold may make one slow partial turn to reveal dimensionality. It stops after the visitor interacts.

### Copy reveal

After the object has been visible for approximately 1.5–2 seconds, or immediately after the visitor turns it:

> **This is a pinecone.**

Then, quieter:

> Turn it.

### Interaction

- drag or horizontal pointer movement turns;
- one-finger horizontal drag turns on touch without blocking vertical page travel;
- arrow keys turn when the object has focus;
- wheel/pinch may approach only inside a bounded zoom range and must not trap page scroll;
- Reset view is available on focus or through a small accessible control;
- interaction never changes topology.

## 9.5 Beat 1 — Ideas are scary

The object remains present and shifts only enough to make room for the letter.

Proposed exact copy:

> **Ideas are scary.**
>
> They come into this world ugly and messy.
>
> They frighten people because they threaten what is known.
>
> They are the natural-born enemy of the way things are.

The language must not be converted into a slogan, headline stack, or abstract brand manifesto.

## 9.6 Beat 2 — Care

Proposed exact copy:

> **Yes. Messy. Fragile.**
>
> Under the proper care, they become something beautiful.

The Fold may receive one brief warm reflection at the word `care`. No permanent glow remains.

## 9.7 Beat 3 — Courage and another world

Proposed exact copy:

> **It takes courage to talk about a new idea.**
>
> Especially when it feels out of this world.
>
> Some ideas are.
>
> You cannot understand them from the everyday room.
>
> You have to come a little way into the world they came from.
>
> Not because they are complicated.
>
> Because they are strange.
>
> We were not brought up to accommodate them.

The visual field may gain depth or shift viewpoint, but may not become a galaxy, portal, neon cosmos, or literal fantasy world.

## 9.8 Beat 4 — A shape that can travel

Proposed exact copy:

> **This is an idea like that, trying to arrive here.**
>
> **A thought may need a shape to travel.**
>
> Something you can hold.
>
> Something you can offer.
>
> Something that remembers how it became.
>
> Something that stays open if the work is still living, and stays thin if the work was thin.
>
> That object you turned is one of those shapes.

The Fold returns toward the central visual position. If the visitor has turned it, preserve their chosen orientation.

## 9.9 Beat 5 — The project

Proposed exact copy:

> We may have found a way to do this.
>
> There may even be science under it.
>
> **This idea is still messy.**
>
> We are trying to care it into a thing people want to share.
>
> **That care is the project.**

No scientific claims or citations interrupt this beat. `Science` remains a latch for those who choose it.

## 9.10 Beat 6 — The invitation

Proposed exact copy:

> **Come make a pinecone.**

Supporting line:

> Bring a messy idea. Watch one become. Help this one become beautiful enough to share.

Actions, in order:

1. `Watch one become` — primary;
2. `See the works` — secondary;
3. `Bring an idea` — tertiary.

The closing line is:

> The record is still being written.

## 9.11 Homepage CTA behavior

### Watch one become

Opens the public Becoming player for `Pinecœne, Becoming` as a full-stage state. It updates the URL to a shareable state such as:

```text
/works/pinecoene-becoming?view=becoming&from=door
```

Navigation contract:

- initiated from the Door, Next.js intercepted routing presents the canonical work URL as a full-stage overlay and pushes one history entry;
- opened directly, refreshed, or shared, the same URL renders as a standalone full-stage work page rather than an orphaned modal;
- Close, Escape, or browser Back returns to the Door only when the history/source context proves it came from the Door;
- otherwise Close navigates to `/works/pinecoene-becoming`;
- the Door stores scroll position, camera orientation, and invoking control in ephemeral session state;
- returning restores scroll, orientation, and keyboard focus;
- if restoration data is unavailable, the Door returns to the invitation rather than guessing a stale camera state.

### See the works

Navigates to `/works`.

### Bring an idea

Navigates to `/join`. It does not open a form or claim receipt.

## 9.12 Homepage reduced-motion behavior

- no automatic rotation;
- no scroll-linked interpolation;
- each beat becomes an ordinary document section;
- the complete Fold remains in a stable poster or low-motion 3D state;
- semantic light changes become static before/after states;
- `Watch one become` uses explicit Previous / Next steps rather than continuous playback.

## 9.13 Homepage mobile composition

At 390 × 844:

- the first Fold silhouette remains fully visible inside the viewport;
- the object occupies approximately 55–64% of the first visual field;
- caption and instruction remain below or outside the silhouette, never over essential anatomy;
- later beats may alternate visual emphasis, but the Fold remains visibly present in every text state—as a stable upper-stage object, pinned object band, or lawful silhouette behind/beside the letter; no full-frame text section removes it from the room;
- the visitor can always resume turning without losing reading position;
- no desktop side rail is compressed onto mobile;
- the navigation pulse remains a 44px control.

---

# 10. Public Becoming player

## 10.1 Purpose

Teach the medium by replaying visible causes, not by presenting a tutorial about the compiler.

## 10.2 Presentation

Becoming temporarily expands into a full-stage experience:

- complete object stage;
- one short causal caption;
- current phase title;
- Close;
- Pause / Play;
- Previous;
- Next;
- optional scrubber after the visitor has completed or intentionally expanded the controls;
- no owner rail, resolution selector, hash telemetry, candidate list, or Offering controls.

The first continuous replay targets approximately 60–90 seconds, but it is never mandatory. A condensed replay of approximately 25–35 seconds becomes available after completion. Reduced motion presents seven explicit steps.

## 10.3 Current-work seven-phase score

The exact event ledger remains subject to source curation and admission. The public narrative score is provisionally:

### Phase 01 — The portable thought

Public caption:

> An idea leaves Œdit: perhaps a work can travel as a form that remembers how it became.

Visible consequence:

- one unresolved locus appears;
- no finished container pre-exists;
- the field remains sparse.

### Phase 02 — Genesis

Public caption:

> Genesis demonstrates, under its declared fixture reading, that a record can earn particular form.

Visible consequence:

- Genesis enters as a discrete ancestor form or source-linked presence;
- the current Fold gains only the topology licensed by this relation;
- Genesis remains visually intact and separate.

### Phase 03 — The Genesis Chat

Public caption:

> The conversation discovers Fold and Becoming, OPEN, Lineage, and the possibility of Offering.

Visible consequence:

- The Genesis Chat / Seed enters as a second discrete ancestor;
- phases, boundaries, or an OPEN path become available in the current work;
- the two ancestors do not merge into the protagonist.

### Phase 04 — The vessel mistaken for the work

Public caption:

> We build the Locket beautifully, then mistake the vessel for the work it carries.

Visible consequence:

- a carrier boundary forms around the current object;
- the boundary becomes visually overemphasized;
- a correction marker or interruption prevents that carrier from becoming the Fold.

### Phase 05 — The machinery recovered

Public caption:

> We restore Studio and the executable Fold, then ask a stranger to enter an expert instrument.

Visible consequence:

- causal anatomy and instrument capacity return;
- dense framing briefly presses inward;
- the Fold remains present but constrained by the wrong public container.

### Phase 06 — The explanation mistaken for the Door

Public caption:

> We move the theory to the front and make the object wait behind it.

Visible consequence:

- a document-like boundary or layer obscures part of the form;
- the layer is not destroyed; it moves into deeper Lineage where it belongs;
- the Fold returns to visibility.

### Phase 07 — Object first

Public caption:

> One door. Object first. This record remains OPEN because the work is still becoming.

Visible consequence:

- the current form reaches the same orientation and topology seen at the Door;
- one path, face, or seam remains visibly unresolved;
- motion ends at rest;
- no triumphant closing glow or false completion occurs.

## 10.4 Ancestor law

Genesis and The Genesis Chat may:

- appear at their causal moments;
- dock beside the current work;
- connect through an admitted lineage relation;
- be selected for a brief contextual note.

They may not:

- morph into the current work;
- collapse into each other;
- be absorbed as decorative particles;
- disappear after serving as explanatory graphics;
- surrender their own identifiers or standing.

## 10.5 Caption law

- one sentence per visible consequence;
- captions describe what happened, not what the visitor is supposed to feel;
- no hidden source is quoted;
- advanced terms link to optional inspection rather than receiving inline definitions;
- every caption binds one or more semantic event or relation IDs;
- the caption remains available in transcript form.

## 10.6 Completion behavior

At completion:

- the form rests;
- the final OPEN relation remains discoverable;
- a quiet action row offers `Turn the Fold`, `Open the work`, and `Return to the Door`;
- the page does not automatically continue, close, or begin another loop;
- sound, if enabled, resolves into silence rather than an endless ambient bed.

---

# 11. Works — `/works`

## 11.1 Purpose

Reveal the three Pinecœnes as a chronological lineage after the visitor has met the current work.

## 11.2 Opening content

Eyebrow:

> Works

Title:

> **Three works. One lineage.**

Supporting copy:

> Different histories should become different forms.
>
> In the proposed release, these are the first three we can turn. The newest is still being made.

## 11.3 Composition

The target page is a chronological editorial shelf, not a dashboard, carousel, comparison table, or grid of equal product cards. It must not claim three turnable works until the current-work freeze gate is complete.

Each work receives:

- one complete, turnable Fold at rest;
- title and one-line role;
- concise record statement;
- standing line;
- `Open this work`;
- `Watch it become`.

The forms may share a visual axis or dock in lineage, but each retains its own room and identity.

Performance law:

- all rows server-render deterministic posters;
- only the first visible/engaged work hydrates its live player initially;
- the next row may pre-initialize only when network/device budget allows and it approaches the viewport;
- at most one shelf renderer animates or responds continuously at a time;
- offscreen players pause and may return to posters;
- no hidden scene or transition score is downloaded merely because it exists farther down the shelf.

## 11.4 Work row — Genesis

Title:

> **Genesis**

Role:

> The first proof-of-medium.

Body:

> A record of distinction, interval, return, and rest becomes a nested form.
>
> Six days settle. The seventh stays open.

Standing:

> `settled study · OPEN edge`

Actions:

- `Open this work`;
- `Watch it become`.

## 11.5 Work row — The Genesis Chat

Title:

> **The Genesis Chat**

Role:

> The conversation that made Pinecœne.

Body:

> The first schematics, a beautiful correction, the object, its prior art, and a living unresolved merge become seven phases around an asymmetric Core.
>
> Six phases settle. The seventh remains OPEN because the record is still alive.

Form label:

> `Proposed form: Seed`

Standing:

> `origin work · identity/fixture pending · proposed phase 07 OPEN`

Actions:

- `Open this work`;
- `Watch it become`.

This row is review copy only. It may enter the public work registry only after Decision 13 selects the identity branch and freezes the matching source, rights, fixture, score, scene, transition/performance, poster, and public projection. The route slug may remain `/works/genesis-chat`; the registry ID and receipt must come from the selected branch rather than from hard-coded PCN-0002 copy.

## 11.6 Work row — Pinecœne, Becoming

Title:

> **Pinecœne, Becoming**

Role:

> This site, being made again.

Body:

> The Locket was mistaken for the work. The machinery was recovered. Then explanation was mistaken for the Door.
>
> The current work carries those corrections and remains OPEN.

Review-only standing before the publication gate:

> `third attempt · current study · OPEN`

Required public standing after the publication gate:

> `third attempt · current work · OPEN`

Actions:

- `Open this work`;
- `Watch it become`.

Until its record and manifest are frozen, this row is team-review content and must not enter the public registry. Once frozen, the public row uses `current work`, not `current study`; it may say released only when separate release evidence exists, and it may never say sealed without Seal authority.

## 11.7 Closing content

> These are sketches of the pinecone.
>
> Not the idea finished.

Action:

> `Come make one`

This leads to `/join`, not directly into a technical instrument.

## 11.8 Presence study footnote

Vital Sign appears after the three works, visually subordinate.

Label:

> Presence study

Title:

> **Vital Sign**

Copy:

> An experimental study of light, geometry, and sound as a curated operational state.
>
> Not a pinecone, and not evidence of consciousness or autonomous agency.

Action:

> `Open the experiment`

---

# 12. Public work pages — `/works/[slug]`

## 12.1 Purpose

Let a visitor meet one work at rest, watch it become, inspect its permitted record and reading, and understand its lineage without entering owner controls.

## 12.2 Optional first-visit orientation

A direct work visit begins with the complete settled Fold, already turnable and fully available. No explanatory slide blocks it, reduces it to a partial glimpse, or must be completed before `Watch Becoming` works.

After the visitor has had a chance to touch or turn the object—or when they choose `What am I seeing?`—a compact, skippable three-step orientation may open beside the still-visible Fold. On mobile it opens as a dismissible bottom sheet that leaves the object's silhouette legible. The orientation is supporting interpretation, not an entrance toll.

### Orientation 1 — Record

> **This is the record.**
>
> Start with what happened.

Expanded line:

> It preserves the permitted events, corrections, boundaries, and unresolved parts this work is allowed to remember.

### Orientation 2 — Reading

> **This is the reading.**
>
> The record stays fixed. The interpretation can be challenged.

Expanded line:

> It proposes what the events mean. It does not impersonate the source.

### Orientation 3 — Form

> **This is the form.**
>
> Watch how what stays changes it.

Expanded line:

> Admitted events and Fold relations, owner-left-OPEN structure, and separately acknowledged Muses and Muse relations may shape the owner's Fold according to their declared roles. Removed, rejected, and unreviewed candidates may not. Admitted closed or protected material may shape the owner Fold while remaining absent from this public projection.

Orientation actions:

1. `Watch Becoming` — primary;
2. `Stay with the Fold` — secondary;
3. `Skip` — always available.

The dismissed/completed state is remembered browser-locally per work. The orientation remains available from `About this work`, does not auto-open on every return, and never intercepts a direct deep link to Fold, Becoming, Record, Reading, Lineage, or Muses.

## 12.3 Public work modes

The public instrument contains:

1. **Fold** — default settled, turnable form;
2. **Becoming** — immersive causal replay;
3. **Record** — exact permitted record excerpts or authored anchors;
4. **Reading** — contestable event and relation interpretation;
5. **Lineage** — ancestors, corrections, versions, and current standing;
6. **Muses** — only when relevant and permitted;
7. **About this study** — collapsed technical provenance, compiler version, fixture standing, hashes, and disclosure.

Owner-only controls do not appear:

- Admission;
- Recognition disposition;
- arbitrary topology editing;
- Expression authoring;
- Address authoring;
- Offering compilation;
- Return disposition;
- successor creation.

## 12.4 Default Fold mode

The visitor enters the settled work, not State Zero.

Visible elements:

- dominant complete form;
- work title and concise standing line;
- small mode rail;
- `Watch it become`;
- an optional anatomy prompt after interaction: `Touch a feature to see what earned it.`

The object may make a brief witness drift before interaction. It then rests.

## 12.5 Inspection

Selecting a semantic feature synchronizes:

- spatial highlight;
- human description;
- event or relation label;
- permitted source anchor;
- standing;
- whether the feature is committed, evidence, boundary, Muse, Address, or OPEN;
- whether any content is withheld.

Inspection language begins human and expands on demand. A visitor should not need to understand `SemanticConformationV0_1` to learn why an edge stops.

## 12.6 Record mode

Record mode shows only permitted source material.

- exact source excerpts where publication is authorized;
- fixture-authored exact-record lines where the source is a curated demonstration;
- explicit omissions and withheld regions;
- source anchors;
- no rejected or unreviewed candidate material;
- no private or otherwise unpermitted source, identity, anchor, Admission detail, or relation;
- no implication that a fixture source was independently verified.

## 12.7 Reading mode

Reading mode keeps two owner-governed layers visibly separate.

### Event and Fold-relation reading

For each permitted item, show:

- what happened;
- permitted source anchor;
- how this study reads it;
- event or relation role;
- relation endpoints where applicable;
- uncertainty;
- admitted, OPEN, or other permitted standing;
- what was removed or withheld only when disclosure permits its existence to be named;
- `This is a reading, not the source.`

### Recognition and Constellation reading

For each permitted acknowledged Muse or Muse relation, show:

- owner-approved public label or alias;
- Muse kind;
- exact relation type;
- relation target: Fold, event, another Muse, or prior Pinecœne;
- grounding basis or permitted anchor;
- first and recurring event links where permitted;
- public disclosure state only; protected and closed details are absent from the public-by-URL work page, while any separately authorized public alias is a new public-safe label rather than protected content;
- `Acknowledged as formative; not evidence, endorsement, co-authorship, ownership, or entitlement.`

Mention, recurrence, linkage, and proximity do not acknowledge a Muse. Only explicit owner Recognition does. A Muse relation can be acknowledged only when both endpoint Muses are acknowledged.

The Muses mode is the spatial presentation of this same permitted Constellation. It may not maintain a second independently authored list or invent relations absent from the admitted score. Candidate, rejected, and unreviewed Muse nodes and relations remain Studio-only. Private acknowledged Muses may exist in the owner Fold but are absent from public and recipient projections. A separately authorized public alias or abstract node is newly constructed, contains no private identity or owner-only ID, and is not the private node shipped under another label.

No public visitor may change canonical admission. A contextual `Fork this study` may create a browser-local Studio fork.

## 12.8 Lineage mode

Lineage answers:

- Where did this work come from?
- What changed it?
- What did it grow among?
- What corrections matter?
- Which predecessors remain intact?
- Is this canonical, fixture-authored, local, current, OPEN, or experimental?

The Designer’s Note belongs here, written editorially rather than as permanent console chrome.

## 12.9 About this study

Collapsed by default. Contains:

- public and internal identifier;
- origin kind;
- fixture or study hash;
- compiler and renderer versions;
- semantic and topology hashes where useful;
- source/publication limits;
- implementation-status label;
- exact non-claims;
- export options when lawful.

## 12.10 Contextual actions

After the visitor has encountered the Fold:

- `Watch it become`;
- `Fork this study`;
- `See how it can travel` — conditional on Decision 19; if approved, opens a clearly labelled local Locket demonstration;
- `Return to Works`.

The Locket action may not precede basic comprehension of the Fold.

## 12.11 Desktop composition

- object stage: approximately 65–75% of usable width when drawers are closed;
- title and mode rail remain quiet;
- drawers overlay or occupy at most 34% width;
- opening a drawer does not recenter the Fold abruptly;
- Becoming expands to full stage;
- no persistent console sidebars.

## 12.12 Mobile composition

- full-stage object first;
- bottom mode rail or accessible mode menu;
- task-focused bottom sheets for Record, Reading, Lineage, and About;
- sheets may be half-height or full-height and must preserve a clear close action;
- no horizontal page overflow;
- no compressed desktop inspector;
- form remains complete at default zoom.

## 12.13 Unknown or unpublished work

Unknown, malformed, or unpublished slugs fail closed.

> **This work is not available.**
>
> No other work has been substituted for it.

Actions:

- `Return to Works`;
- `Return to the Door`.

---

# 13. Proposed public work content

Genesis and the current PCN-0002 fixture are implemented evidence. Genesis matches its proposed public identity; PCN-0002 requires re-curation around the actual origin conversation or a separate historical name before it can stand publicly as The Genesis Chat. Both publishable public readings still require editorial and source-rights review. `Pinecœne, Becoming` is entirely target-state until its freeze gate is complete.

## 13.1 Genesis — public content contract

### Header

> **Genesis**
>
> The first record folded into form.

Receipt:

> `PCN-0001 · Genesis 1:1–2:3 · fixture-authored study`

### Public summary

> A curated record of beginning, distinction, evaluation, interval, return, life, and rest.
>
> Its nested Core is not an illustration of scripture. It is the form this authored reading permits.

### Seven phases

1. `Beginning`
2. `Light`
3. `Interval`
4. `Earth`
5. `Signs`
6. `Life`
7. `Rest · OPEN`

### Public event captions

The implemented fixture provides these exact authored events:

1. A beginning is named.
2. The record distinguishes making from vacancy.
3. Darkness remains present.
4. Light is called.
5. Light is evaluated.
6. Day is separated from night.
7. A firmament holds interval.
8. Waters are divided.
9. Dry land appears.
10. Earth returns growth.
11. Lights become signs.
12. Seasons retain recurrence.
13. Living motion fills the waters.
14. The work is blessed without being closed.
15. The Fold rests with a withheld edge.

### OPEN copy

> The closing edge is withheld by the study’s authored law.
>
> Turn the form and find where it refuses to close.

### Study disclosure

> This is a sanitized, fixture-authored demonstration. Its source anchors and decisions were prepared for this study. It does not claim observed human admission, divine interpretation, delivery, acceptance, release, or Seal.

### Record-mode introduction

> **What this study is allowed to remember.**
>
> These short anchors come from the permitted source. The sequence is fixed; the reading beside it is authored and contestable.

Permitted short anchors in the implemented fixture:

- `In the beginning`;
- `The earth was without form`;
- `darkness was upon the face`;
- `Let there be light`;
- `the light was good`;
- `divided the light from the darkness`;
- `a firmament in the midst`;
- `divide the waters from the waters`;
- `let the dry land appear`;
- `let the earth bring forth`;
- `let them be for signs`;
- `for seasons, and for days`;
- `waters bring forth abundantly`;
- `be fruitful, and multiply`;
- `the seventh day`.

Publication of each excerpt requires one human-approved rights/source receipt before final build freeze.

### Reading-mode introduction

> **How this study reads the record.**
>
> Beginning creates commitment. Distinction creates boundary. Evaluation and return leave evidence. Rest does not force closure.
>
> The source does not read itself. This is one authored study.

Uncertainty / OPEN copy:

> Darkness, blessing, and the final rest are kept OPEN by fixture law. They are not rendered as settled propositions merely because closure would look complete.

### Muses and Muse relations

The implemented fixture currently names `Day / Night`, `Earth / Seas`, and `Return` as acknowledged formative presences, but a v0.6-conformant public Constellation—including exact Muse nodes, Muse-relation candidates, relation types, grounding, endpoint decisions, and visibility—has not yet been frozen.

Until that review is complete, public copy is:

> **The public Constellation is awaiting Recognition review.**
>
> These names are part of the current fixture reading. No connected public Constellation will be published until every Muse and every Muse-relation candidate has one explicit decision and both endpoints of every acknowledged relation are acknowledged.

After freeze, the introduction may become:

> These presences help describe what the form grew among. They are not presented as evidence beyond the events cited here, and Recognition creates no entitlement.

### Lineage

> Genesis is the first Pinecœne study: the point where the project tested whether a declared record could earn a particular form.
>
> Its closing edge remains withheld. Later works may cite Genesis, but Genesis itself does not change.

### About-this-study summary

> `fixture_authored · immutable specimen · deterministic compiler · no raw owner-private source · final close withheld`

If technical identifiers are expanded, they come from the work registry rather than being copied into page content.

## 13.2 The Genesis Chat — public content contract

### Header

> **The Genesis Chat**
>
> The conversation that made Pinecœne.

Pre-resolution review receipt:

> `TBD ID · proposed form: Seed · proposed seven-phase origin work · phase 07 OPEN`

Post-freeze receipt law:

- if Decision 13 selects re-curation, the registry may emit `PCN-0002 · Form: Seed · seven authored phases · phase 07 OPEN` only with new matching fixture/golden identities;
- if Decision 13 preserves PCN-0002 as a different historical study, The Genesis Chat receives a new internal ID and the receipt uses that ID; no page component hard-codes PCN-0002.

### Proposed post-freeze public summary

> This is the project conversation, curated into seven phases while the record was still being written.
>
> Six phases settle. The seventh remains OPEN.

### Proposed seven phases and captions

1. **The brief**  
   > The project begins as a way to share the pinecone of an Œdit.

2. **Schematics**  
   > The first drawings make the medium visible enough to argue with.

3. **The beautiful lie corrected**  
   > An elegant rhythm gives the form more than the record earned. The mistake is found and the geometry changes.

4. **The object**  
   > Fold and Becoming separate: one work at rest, the same work replayed through its causes.

5. **Prior-art review**  
   > Other works and traditions enter the field without becoming automatic evidence or ownership.

6. **Living state**  
   > Motion, sound, OPEN, Constellation, and Lineage become a language for a work still in progress.

7. **Unresolved merge**  
   > The work reaches an unresolved question and does not paint it over. The seventh phase remains OPEN.

### Implemented-fixture gap

The current `pcn-0002` fixture instead uses:

```text
The Brief → The Locket → The Distinction → Genesis → This Chat → The Loop → The Record
```

That sequence documents the later Curated Studio demonstration more than the origin conversation. It must not be silently published as the accepted Genesis Chat record. Before final build, the team must either:

1. keep `PCN-0002` as the origin work ID, but preserve the current immutable fixture as historical evidence and issue a distinct new fixture-manifest ID/version, hash, score, scene, transition/performance, poster, and golden identities for the re-curated origin sequence; or
2. preserve the implemented PCN-0002 work/fixture as a separately named historical showcase study and create a new origin-conversation work with a new work ID and fixture identity.

Neither branch mutates or overwrites the existing fixture bytes. `/studio/specimens/pcn-0002` continues to resolve the preserved existing fixture unless an explicit versioned registry route says otherwise; the accepted origin fixture receives its own exact typed specimen route.

This is a build blocker, not editorial polish.

### “The beautiful lie” correction

Lineage must preserve the correction discovered in the prototype:

> An early rhythm gave the object more volume than its record had earned. It looked beautiful. It was wrong. The correction changed the form and became part of the work.

The exact underlying event references must be validated before publication. The phrase may not be used as generic branding detached from the actual correction.

### Form-name law

`Seed` names the resulting form, not the source conversation. Public page title, URL, and Lineage use `The Genesis Chat`.

### Proposed post-freeze study disclosure

> This score is a sanitized, fixture-authored reading of the project conversation. No raw private conversation is published. It does not claim that a machine independently discovered this structure or that the authored decisions are observed human acts.

This disclosure becomes publishable only after a fixture has actually been frozen for the selected identity branch. Before then, the page uses:

> This origin-conversation work is proposed. Its final identity, permitted record, Reading, Admission, Recognition, score, and public projection are not frozen.

### Record-mode introduction

> **The permitted traces of the conversation.**
>
> The raw private conversation is not published. This view contains only human-approved, sanitized anchors tied to the seven phases.

Until the re-curation decision is complete, exact public excerpts are:

> `TBD — human source and rights review required`

### Reading-mode introduction

> **How the origin conversation is currently being read.**
>
> The reading follows the first brief, the drawings, a beautiful mistake and its correction, the object, prior art, living state, and an unresolved merge.
>
> The final relation remains OPEN. This sequence is proposed until every anchor and disposition is frozen.

### Muses

Potential public Muses must be re-reviewed with the origin record. `Genesis · PCN-0001` and `The original brief` are currently acknowledged in the implemented fixture. Rejected or unreviewed candidates do not appear in public topology or copy.

Empty state until review:

> **The public Constellation is not frozen yet.**
>
> Nothing has been inferred into it for presentation.

### Lineage

> The Genesis Chat begins with the desire to share the pinecone of an Œdit. It discovers the object by drawing, correcting, testing, and refusing a false close.
>
> Genesis enters as an ancestor. The conversation remains its own work.

### About-this-study summary

Proposed origin-work status before Decision 13:

> `proposed origin work · ID TBD · fixture TBD · public curation required · raw conversation withheld`

Separate current PCN-0002 implementation evidence:

> `pcn-0002 · fixture_authored · immutable current Studio fixture · does not yet stand as The Genesis Chat · phase 07 OPEN`

## 13.3 Pinecœne, Becoming — public content contract

### Header

> **Pinecœne, Becoming**
>
> This site, being made again.

Pre-freeze review receipt:

> `third attempt · current study · OPEN`

Required post-freeze public receipt:

> `third attempt · current work · OPEN`

### Public summary

> Pinecœne failed to carry itself through its first public translations.
>
> The Locket was mistaken for the work. The Fold was recovered inside an expert instrument. Then explanation was mistaken for the Door.
>
> This work keeps those failures in the record.

### Provisional seven phases

1. The portable thought.
2. Genesis.
3. The Genesis Chat.
4. The vessel mistaken for the work.
5. The machinery recovered.
6. The explanation mistaken for the Door.
7. Object first · OPEN.

### Lineage note

> This work does not replace Genesis or The Genesis Chat. They remain intact beside it. Their forms enter only where they changed the present work.

### Pre-freeze review standing disclosure

> Pinecœne, Becoming is the proposed current work of this site’s development. The living history exists, but its curated source set, Reading, Admission, Recognition, identifier, score, scene, transition, and Fold are not yet frozen. It must not be presented as a settled canonical Fold—or as an already curated study—until those acts are explicitly completed.

This copy is for protected team review and cannot ship on the Door. Required post-freeze public disclosure:

> Pinecœne, Becoming is the current public work of this site’s development. This exact released version is an immutable snapshot of a record that remains semantically OPEN. Later change creates a new version or Successor; it does not rewrite this one.

### Record-mode introduction

> **The record of trying to carry Pinecœne into public.**
>
> This view will contain only sanitized, human-approved evidence from the site’s three attempts and the decisions that changed direction.

Current state:

> `TBD — source set, exact excerpts, rights, and omissions must be frozen before the Door is built`

### Reading-mode introduction

> **How the current work reads those attempts.**
>
> The first public translation mistook the Locket for the work. The second recovered the machinery but made the visitor enter an expert instrument, then tried to explain the medium before presenting it. The third returns the object to the Door.
>
> This reading remains proposed until Deniz and the team dispose every event and relation.

### Muses

Required candidates for human review include:

- Œdit;
- Genesis;
- The Genesis Chat;
- the Locket prototype;
- Studio recovery;
- the public-site audit;
- Deniz’s `One door. Object first.` intervention;
- the V3 public Becoming experiment.

Candidate classification before Recognition:

- Genesis and The Genesis Chat are predecessor/Lineage relations by default, not automatic Muses;
- Œdit, the Locket prototype, the public-site audit, and the V3 experiment are source-work or artifact candidates;
- Studio recovery and `Object first` are record events or corrections;
- Deniz may become a person Muse only through separate Recognition and permitted identity disclosure.

Nothing occupies both Lineage and Constellation merely because it was important. None enters the public Constellation until separately acknowledged, and no Muse relation enters unless both endpoints and the relation itself are acknowledged. Appearance in this candidate list is not standing.

### Lineage

> The present work keeps its predecessors intact and keeps its failed translations visible. It is not a story of inevitable progress. It is a record of correction.

### About-this-study summary

Pre-freeze review:

> `proposed current study · no frozen ID · no frozen manifest · no canonical poster · OPEN`

Post-freeze release, populated from the registry rather than hard-coded:

> `[work ID] · current work · immutable release snapshot · [manifest version] · OPEN`

---

# 14. Join — `/join`

## 14.1 Purpose

Turn the homepage invitation into honest present-day participation without pretending that full intake or human receiving infrastructure exists.

## 14.2 Opening content

Eyebrow:

> Join

Title:

> **Come make a pinecone.**

Opening:

> A messy idea does not become shareable by being explained harder.
>
> It becomes shareable by being cared into a form.
>
> You do not need to arrive with a finished thought.

## 14.3 Path 01 — Watch a work become

Title:

> **Start by watching.**

Copy:

> Follow a curated project record as proposals, Returns, boundaries, corrections, and unresolved parts become visible.
>
> This is the quickest way to see what Pinecœne means by care.

Action:

> `Watch Pinecœne become`

Destination:

```text
/works/pinecoene-becoming?view=becoming
```

## 14.4 Path 02 — Fork a sketch

Title:

> **Operate a study.**

Copy:

> Begin with one of the curated works. Change the owner decisions and watch the form recompile in your browser.
>
> Your fork remains tied to its ancestor. It cannot overwrite or impersonate the original.

Action:

> `Fork a local study`

Destination:

```text
/studio/new
```

Disclosure directly beside the action:

> Saved in this browser. No account, upload, or remote delivery.

## 14.5 Path 03 — Bring an idea

Title:

> **Bring an idea.**

Current placeholder copy:

> The invitation is real.
>
> **The receiving door is not open yet.**
>
> When it opens, you will be able to offer one unfinished sentence. We will not make it look done.

Status label:

> `NOT OPEN YET`

No input field, textarea, upload, email capture, fake Submit button, network request, arrival confirmation, or implied human receipt appears in this release.

## 14.6 Secondary file utility

This is not a fourth making path. It appears under a quiet `Already holding one?` divider.

Title:

> **Open a recipient-safe Pinecœne file.**

Copy:

> Choose a `Recipient-safe Pinecœne` file already given to you. It will be validated and opened in this browser. The file is not uploaded or treated as proof of delivery.

Action:

> `Choose a .pcn.offer.json file`

The action follows Section 30.4, accepts no private owner backup, and enters the local `/w/[offeringId]` lookup only after complete validation and atomic recipient-store import.

## 14.7 Present boundary

> You cannot carry an entire private life into this instrument and receive a finished pinecone by morning.
>
> That is not what exists today.

Supporting line:

> Pinecœne can be used without an Œdit account. A future Œdit bridge may provide a deeper governed record, but it is not required for the medium.

## 14.8 Join completion

The page ends with the actions that truly work:

- `Watch a work become`;
- `Fork a local study`;
- `Open a recipient-safe Pinecœne file`;
- `See what’s next`.

---

# 15. More — `/more`

## 15.1 Purpose

Give curious visitors controlled depth without making them walk through it before encountering the object.

## 15.2 Accessible index content

If visited directly, `/more` renders a compact directory.

Title:

> **Go deeper.**

Entries:

### Science

> The neighboring findings, methods, and formal questions that make Pinecœne reasonable to test—and the results that would defeat it.

### Art

> Why beauty matters when a form is not allowed to flatter the work that made it.

### How it’s made

> The record, reading, owner decisions, compiler, Fold, Offering, Return, and Successor under the object.

### What’s next

> The experiments still owed, the capabilities deliberately deferred, and the doors that are not open yet.

---

# 16. Science — `/science`

## 16.1 Purpose

Present science as a trellis for testable questions, not as proof by association or a scientific costume for the artwork.

## 16.2 Opening content

Eyebrow:

> Science

Title:

> **There may be science under it.**

Opening:

> Pinecœne is not proof that thought has one hidden geometry.
>
> It is a testable proposal that part of an inquiry’s path can be represented as a structured, inspectable object.
>
> Neighboring research makes the question reasonable. It does not answer it for us.

Primary actions:

- `Read the probes`;
- `What would kill it`.

## 16.3 Probe structure

Each probe uses the same three-part form:

```text
What neighboring work shows
What it lets Pinecœne ask
What it does not establish
```

## 16.4 Probe 01 — Near and far

Title:

> **Near and far can mean something.**

Copy:

> Some similarity relations admit useful geometric representations, and distance can be behaviorally meaningful under constrained conditions.

Question:

> Which Pinecœne relations deserve distance, and which should remain typed relations that cannot be collapsed onto one axis?

Limit:

> This does not establish one universal geometry of thought.

Principal source: Roger N. Shepard, 1987.

## 16.5 Probe 02 — Concepts and regions

Title:

> **Concepts can be studied as structured regions.**

Copy:

> Conceptual-spaces research offers formal languages for dimensions, regions, prototypes, typicality, and salience.

Question:

> Which constraints make a Fold legible without pretending those constraints are laws of every mind?

Limit:

> A formal vocabulary for concepts does not validate Pinecœne’s compiler.

Principal source: Peter Gärdenfors, 2000.

## 16.6 Probe 03 — Abstract trajectories

Title:

> **Some abstract thinking can be studied as movement.**

Copy:

> Some constrained tasks show map-like or trajectory-like signatures for abstract relations.

Question:

> Can trajectory be a useful external representation of inquiry even when cognition implements it differently?

Limit:

> Pinecœne does not claim to reveal neural implementation.

Principal source: Constantinescu, O’Reilly, and Behrens, 2016.

## 16.7 Probe 04 — Structure across representations

Title:

> **Structures can sometimes be compared without sharing coordinates.**

Copy:

> Representational-similarity and metric-measure methods provide ways to compare relational structures under explicit assumptions.

Question:

> Which invariants survive when one work is rendered through geometry, sound, text, motion, or touch?

Limit:

> Formal comparability does not prove that meaning transferred or that two people aligned.

Principal sources: Kriegeskorte, Mur, and Bandettini, 2008; Mémoli, 2011.

## 16.8 Probe 05 — The path of inquiry

Title:

> **The last sentence is not the whole inquiry.**

Copy:

> Histories of argument show that conjecture, challenge, counterexample, repair, and unresolved branches carry information lost by polished conclusions.

Question:

> What is the smallest grammar that preserves an inquiry without becoming an ontology of all thought?

Limit:

> A history of inquiry does not provide a universal event grammar.

Principal source: Imre Lakatos, 1976.

## 16.9 Probe 06 — Faithful representation

Title:

> **A representation has to say what it preserves.**

Copy:

> Measurement theory asks when one relational structure admits a faithful representation in another.

Question:

> What exact source relations, invariants, admissible transformations, decoder, and witness sets would let Pinecœne earn a real representation theorem?

Limit:

> Naming the formal target is not proving it.

Principal source: Krantz, Luce, Suppes, and Tversky, 1971.

## 16.10 Kill conditions

Title:

> **The first thing Pinecœne has to survive is ugliness.**

Copy:

> A thin record should produce a thin Fold.
>
> If weak, unchallenged work can be made to look profound, the object is lying.

The floor fails if:

- a thin record can look strongly tested or resolved;
- Expression upgrades standing;
- copied appearance transfers authenticated standing;
- owner closure can be manufactured by style;
- source or reading changes without identity changing;
- a sealed Fold silently mutates;
- rejected candidates alter the canonical object;
- human readers cannot recover the distinctions the system claims to preserve.

## 16.11 Scientific non-claims

The page states plainly:

> Current science does not establish that consciousness is geometric, that a Pinecœne is a neural scan, that every inquiry has one metric, that similar forms prove aligned minds, or that one renderer reveals hidden mental structure.

## 16.12 Source presentation

Sources appear in a compact, readable bibliography with:

- claim or probe supported;
- source class: empirical, formal, methodological, or historical;
- direct link;
- one-sentence limitation.

No citation visually upgrades the standing of the adjacent Pinecœne claim.

## 16.13 Proposed bibliography

**Status:** `DRAFT — exact editions, links, quotation rights, and claim mappings require research review before publication.`

1. Roger N. Shepard (1987), [“Toward a universal law of generalization for psychological science”](https://pubmed.ncbi.nlm.nih.gov/3629243/).  
   Class: empirical.  
   Limit: supports a constrained account of psychological distance and generalization; not a universal geometry of thought.

2. Peter Gärdenfors (2000), [*Conceptual Spaces: The Geometry of Thought*](https://mitpress.mit.edu/9780262572194/conceptual-spaces/).  
   Class: formal/research framework.  
   Limit: offers a language for conceptual representation; it does not validate Pinecœne’s compiler.

3. Alexandra Constantinescu, Jill O’Reilly, and Timothy Behrens (2016), [“Organizing conceptual knowledge in humans with a gridlike code”](https://pubmed.ncbi.nlm.nih.gov/27313047/).  
   Class: empirical.  
   Limit: reports a grid-like signature in a constrained two-dimensional conceptual task; rival accounts and scope limits remain.

4. Nikolaus Kriegeskorte, Marieke Mur, and Peter Bandettini (2008), [“Representational similarity analysis”](https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/neuro.06.004.2008/full).  
   Class: methodological.  
   Limit: provides a comparison method for relational structures; it does not show that Pinecœne survives translation.

5. Facundo Mémoli (2011), [“Gromov–Wasserstein distances and the metric approach to object matching”](https://doi.org/10.1007/s10208-011-9093-5).  
   Class: formal.  
   Limit: establishes results for metric-measure spaces under explicit assumptions; possibility is not evidence of alignment.

6. David Krantz, R. Duncan Luce, Patrick Suppes, and Amos Tversky (1971), [*Foundations of Measurement, Volume I*](https://shop.elsevier.com/books/additive-and-polynomial-representations/krantz/978-0-12-425401-5).  
   Class: formal.  
   Limit: frames faithful representation between relational structures; Pinecœne has not earned its proposed theorem.

7. Imre Lakatos (1976), [*Proofs and Refutations*](https://doi.org/10.1017/CBO9781139171472).  
   Class: historical/methodological.  
   Limit: shows the epistemic importance of conjecture, criticism, and repair; it does not provide a universal event grammar.

The six probes intentionally include measurement theory as the formal target Pinecœne would have to earn. Removing Probe 06 is an editorial scope decision, not an automatic return to the earlier five-probe sketch.

---

# 17. Art — `/art`

## 17.1 Purpose

Explain Pinecœne as an artistic medium whose beauty is constrained by the work’s standing rather than as a data visualization decorated after compilation.

## 17.2 Opening content

Eyebrow:

> Art

Title:

> **A form that has to show receipts.**

Opening:

> Can a form be beautiful if it is not allowed to flatter the work that made it?
>
> A thin idea may be beautiful. It may not pretend to be deep.
>
> A living work may be beautiful. It may not pretend to be closed.

## 17.3 Section — Beauty under constraint

> Pinecœne does not ask beauty to disappear. It asks beauty to stop impersonating authority.
>
> Material, light, rhythm, sound, voice, symbol, and silence may intensify an encounter. They may not move the walls the record earned.

Key line:

> **Expression is free. Standing is not.**

## 17.4 Section — A body for unfamiliarity

> A genuinely new idea may require the receiver to enter a world whose common sense is not yet familiar.
>
> Art can hold that unfamiliarity long enough for encounter to precede assimilation.

## 17.5 Section — Muse

> A person, place, work, animal, song, memory, image, or coincidence may have changed what a work could become.
>
> Pinecœne calls an owner-recognized formative presence a Muse.
>
> A Muse may matter enormously without becoming evidence, authorization, endorsement, co-authorship, or entitlement.

Key line:

> **Wonder may enter without standing inflation.**

## 17.6 Section — Rest and incompletion

> The object is not alive because it breathes forever.
>
> It is alive because its history can still matter.
>
> When the record stops, the form rests. When the record remains OPEN, the unresolved part stays visible.

## 17.7 Closing action

> `Return to the works`

---

# 18. How it’s made — `/how`

## 18.1 Purpose

Explain the complete organism after the visitor has chosen depth, using plain language first and technical contracts only through progressive disclosure.

## 18.2 Opening content

Eyebrow:

> How it’s made

Title:

> **The form does not come first.**

Opening:

> A record of what happened.
>
> A reading you can argue with.
>
> The owner decides what stays.
>
> A form is compiled from that.
>
> Living work stays open.

## 18.3 The nine stages

### 01 — Record

> The exact permitted material: text, messages, events, commits, images, annotations, or another bounded source.

### 02 — Reading

> A declared proposal about what the events are doing. The reading stays separate from the source and remains contestable.

### 03 — Admission

> The owner keeps, rewrites-and-keeps, leaves OPEN, or removes every event and Fold-relation candidate. No candidate silently promotes itself.

### 04 — Recognition

> The owner separately acknowledges or rejects every formative Muse and every Muse-relation candidate. A Muse relation can enter only when both endpoints and the relation itself are acknowledged. Meaning and evidence remain distinct.

### 05 — Fold

> A deterministic compiler gives the admitted record a body. Every meaningful feature retains the event or relation that earned it.

### 06 — Expression and Address

> Expression changes how the form lives, sounds, and feels without changing its architecture. Address turns the whole form toward a recipient, place, time, or mode without granting access.

### 07 — Offering and Locket

> An Offering selects one exact Fold version, Expression, Address, resolution, and permission envelope.
>
> **The Fold is the work’s form. The Locket is the permission vessel in which that form may travel.**

### 08 — Encounter and Return

> The recipient may decline or open only what was offered. A Return may come back as candidate material. Arrival is not acceptance.

### 09 — Successor

> A new admitted state may cite its predecessor. The predecessor remains intact.

## 18.4 Interactive demonstration

The page may include a compact, accessible Record → Reading → Form demonstration using one sanitized event. It must reuse canonical compiler/output semantics and may not become decorative diagram art.

Actions:

- `Open a work`;
- `Enter Studio`;
- `Read the candidate specification`.

## 18.5 Source-document standing

Links to Master, theorem, system specification, and technical receipts appear at the bottom with their exact status:

- candidate;
- proposal-derived excerpt;
- historical version;
- implemented evidence;
- unavailable canonical source where applicable.

No document is labelled canonical, accepted, released, or sealed without that evidence.

---

# 19. What’s next — `/next`

## 19.1 Purpose

Name the experiments and infrastructure still owed without turning aspiration into product claims.

## 19.2 Opening content

Eyebrow:

> What’s next

Title:

> **The doors that are not open yet.**

Opening:

> The current repository contains a curated, browser-local prototype. The public experience specified here is not yet built.
>
> The larger product requires more than beautiful screens. These are the tests and systems still owed.

## 19.3 Owed experiment — The Thin Fold

Status:

> `OWED`

Copy:

> An unchallenged claim should not receive borrowed depth from the renderer.
>
> Build a deliberately thin record and prove that its form remains sparse, weakly committed, and visibly unresolved.

## 19.4 Deferred capability — Bring a real record

Status:

> `NOT OPEN`

Copy:

> A lawful intake path for more than one sentence requires source authorization, privacy controls, a declared reader, exact anchors, human admission, export, deletion, and recovery boundaries.

## 19.5 Deferred capability — Real Offering and Return

Status:

> `DEFERRED`

Copy:

> Remote transport, recipient identity, cross-device Return, expiry, withdrawal, and downloaded-copy limits need real custody and delivery architecture. A local preview cannot impersonate them.

## 19.6 Future bridge — Œdit

Status:

> `FUTURE BRIDGE`

Copy:

> A governed Œdit may eventually provide a deeper source-grounded reading through an immutable, owner-authorized export.
>
> Pinecœne remains usable without an Œdit account and never shares mutable runtime or database state with Œdit by default.

## 19.7 Research bet — Pinecœne-to-Pinecœne contact

Status:

> `RESEARCH BET`

Copy:

> Can two accountable forms reveal where they align, challenge, miss, or expose incompatible assumptions without one rewriting the other?

## 19.8 Experimental profile — 7 Presence

Status:

> `EXPERIMENTAL`

Copy:

> 7 Presence explores how declared operational state might be made socially legible through light, geometry, sound, and silence.
>
> It does not create a Pinecœne owned by 7 or reveal consciousness or hidden chain-of-thought.

## 19.9 Conditional deep source routes — `/master` and `/theorem`

These routes remain available only if Decision 29 approves publication. They are never part of primary navigation and remain `noindex, nofollow`.

### `/master`

Title:

> **The Master is not the truth.**

Opening:

> It is the current admitted root from which Pinecœne’s public, artistic, scientific, and engineering readings grow.

Required standing block:

> `PROPOSAL-DERIVED EXCERPT · EXACT CANONICAL MASTER ABSENT`

The route preserves the current source-custody refusal and may not offer a canonical download, version history, Slow Root, Live Edge, or Seal claim until the exact source is supplied and verified.

### `/theorem`

Title:

> **When does an accountable inquiry admit a faithful Fold?**

Opening:

> The theorem is a formal construction target. Human legibility, transport, and contact remain separate empirical bets.

Required standing block:

> `CANDIDATE OUTLINE · EXACT THEOREM SOURCE ABSENT · NOT A PROOF`

The route preserves the current candidate target and corrected public language. It may not imply formal acceptance or proof.

### Unavailable source state

> **The exact source is not present here.**
>
> This page contains a proposal-derived reading, not the canonical document.

---

# 20. Studio — `/studio`

## 20.1 Purpose

Expose the actual owner machinery after the public encounter has established why it matters.

## 20.2 Opening content

Eyebrow:

> Studio

Title:

> **This is where a record becomes a form.**

Opening:

> Choose a study, challenge its reading, and see what changes the Fold—and what lawfully cannot.

Disclosure:

> Canonical specimens never mutate. Your work creates a labelled browser-local study tied to the exact ancestor fixture.

## 20.3 Shelf

The Studio shelf contains:

- immutable Genesis fixture;
- current immutable `pcn-0002` fixture labelled `origin binding unresolved`, never silently titled The Genesis Chat;
- after Decision 13 only: either the re-curated PCN-0002 Genesis Chat fixture or a new immutable origin-conversation fixture, plus the separately named preserved historical PCN-0002 study when branch 2 is selected;
- Pinecœne, Becoming only after a frozen release manifest exists;
- browser-local study forks;
- read-only legacy showcase archives with export;
- explicit experimental separation for Vital Sign.

Each shelf item shows:

- title;
- form at rest or poster;
- standing;
- ancestor;
- last local edit time, clearly excluded from semantic identity;
- `Open`;
- `Fork` where applicable;
- `Reset` only for a fork;
- `Private owner backup — do not share` for a valid owner archive;
- `Export legacy archive` for a read-only legacy record, preserving canonical meaning and validated hashes with a `Showcase legacy` label; promise original-byte preservation only when the exact imported blob was separately retained and verified.

The shelf never offers a generic `Export` action. A recipient-safe export exists only after an authorized Offering package has been compiled and previewed; it is labelled `Recipient-safe Pinecœne` and cannot be invoked from an owner-archive row.

## 20.4 Guided creation — `/studio/new`

Current public scope is fixture-first guided creation.

Sequence:

1. choose Genesis or the current `pcn-0002 · origin binding unresolved` fixture; after Decision 13, replace that label/choice with the exact accepted branch and registry identity;
2. read the exact fixture disclosure;
3. create a `prototype_only` browser-local fork;
4. operate the owner decisions;
5. compile a study;
6. save locally, make a `Private owner backup — do not share`, reset, or continue to Expression and the authorization-bound Offering Preview.

No public arbitrary-source textbox or upload appears in this release.

## 20.5 Owner instrument modes

The adaptive Studio instrument contains:

1. **Record** — exact permitted source and anchors;
2. **Reading** — event, Fold-relation, Muse, and Muse-relation candidates; source links, uncertainty, omissions, and the ability to challenge the proposed interpretation without changing the source;
3. **Admission** — `keep`, `rewrite_and_keep`, `leave_open`, or `remove` for every event and Fold-relation candidate, plus a separate visibility/purpose choice that is never confused with admission;
4. **Recognition** — acknowledge or reject every Muse and every Muse-relation candidate separately from evidence and from one another;
5. **Becoming** — causal replay;
6. **Fold** — settled form and semantic inspection;
7. **Lineage** — source, reading, decisions, fixture, fork, Offerings, Returns, predecessors, and only lawfully eligible successor records;
8. **Expression** — lawful presentation controls;
9. **Address** — whole-form orientation and disclosure context;
10. **Offering** — purpose check, resolution, permissions, intent-bound authority, exact Preview, and local package actions;
11. **Returns** — local demonstration Return review and deletion; no successor action for fixture-authored or local-demonstration Returns.

The public work interface and Studio may share components and renderers. They do not share authority or expose the same controls.

## 20.6 Immediate recompilation

Every owner decision produces a deterministic recompile and clearly states what changed:

```text
Decision changed
→ semantic projection changed or remained invariant
→ topology changed or remained invariant
→ scene and transition hashes updated or remained stable
```

The UI must make invariance legible. Rejected, removed, and unreviewed candidates producing no canonical geometry is a feature, not an absence to cover with animation. Privacy is not a rejection state: admitted closed or protected material may shape the owner Fold while a newly compiled public or recipient projection lawfully omits it.

## 20.7 Local custody copy

Use:

> Saved in this browser.

And:

> Clearing browser data may remove this study unless you make a private owner backup.

Owner action:

> `Private owner backup — do not share`

Recipient action, available only from an authorized and previewed Offering:

> `Recipient-safe Pinecœne`

Do not use:

- saved to your account;
- synchronized;
- backed up;
- sent to the owner;
- published;
- securely stored forever.

---

# 21. Offering, Locket, Encounter, Return, and Successor

## 21.1 Offering Canvas

The owner sequence is:

1. complete and validate Reading, Admission, Recognition, effective-purpose, and shared-material declarations;
2. choose Expression;
3. choose Address;
4. select resolution and the exact `OfferingPermissions` object;
5. compile the exact recipient-safe disclosure projection;
6. compile the governing `PerformanceScore` from that projection and Expression, then finalize sender disclosure, Offering mode, player version, evidence snapshot, and sorted asset manifest; `expiresAt` is absent in this release;
7. compute the cycle-free `offeringIntentHash` over every recipient-visible pre-authorization input, including the exact performance, evidence, player, and asset inputs;
8. complete the intent-bound right-to-offer authorization and any required blocking consent review;
9. compile one immutable, hash-consistent `OfferingPackage` candidate;
10. inspect those exact serialized bytes through the complete Witness composition—Locket Shell plus canonical Fold Player—in both pre-open and opened states;
11. save locally or export the already-previewed bytes as a `Recipient-safe Pinecœne` without recompilation or mutation.

Any change to Address, permissions, Expression, performance, sender disclosure, mode, player version, evidence, assets, disclosure, or authority invalidates the candidate and returns the owner to step 5. The next Preview receives a new intent/package hash. Stage 11 may never rebuild from mutable application state.

Required owner confirmation, bound to the displayed intent hash:

> `I confirm that I have the right to offer this exact projection to this Address.`

When the shared-material declaration contains private-third-party or protected-person material, Preview remains blocked until the required consent review is completed and evidenced. The raw declaration categories, consent note, excluded owner references, and owner-seat identity remain owner-only; only their governing hashes and recipient-safe authority basis enter the package.

The UI states:

> This Preview is the exact recipient-safe package. Saving or exporting it will not change these bytes.

For the curated release:

> Previewing, saving, or exporting this package does not prove it was sent, delivered, opened, received, or accepted.

Fixture-authored right-to-offer and consent-review states remain labelled fixture-authored. A polished Preview must never make them look like observed human authorization.

Expiry is deferred in this profile. `expiresAt` must be absent from a newly compiled Public Door Candidate package. A local clock may show an advisory reminder outside the package, but it cannot invalidate an exported copy or be described as enforceable expiry.

## 21.2 Resolution ladder

The canonical resolution names must be frozen before implementation. The recommended ladder follows System Specification v0.6:

| Resolution | Public name | Grants |
|---|---|---|
| R0 | Glyph | smallest recognition-safe mark |
| R1 | Card | identity and bounded editorial summary |
| R2 | Form | settled Fold without causal inspection |
| R3 | Inspect | permitted anatomy and causal references |
| R4 | Replay | permitted Becoming and transcript |
| R5 | Recital | full permitted performance profile |

`Open` is an encounter action or state, not a resolution. Existing code using `Mark / Trace / Form / Inspect / Share / Open` requires an explicit migration decision; the two taxonomies may not coexist ambiguously.

### 21.2.1 Governing package contract and legacy migration

The target recipient contract is the exact System Specification v0.6 contract named `OfferingPackage`, with:

```text
packageKind: "recipient_offering"
packageVersion: "pinecoene.offering-package.v0.1"
```

The closed package contains exactly the governing top-level components: `playerVersion`, `offering`, `authorization`, recipient-safe `projection`, `expression`, `performance`, recipient-safe `evidence`, sorted permitted `assets`, and `packageHash`. It contains no app-private state or lookup dependency. All cross-object hashes and IDs defined by v0.6 must validate before Preview or playback.

Its selected permission object is exactly:

```text
resolution: 0 | 1 | 2 | 3 | 4 | 5
showConstellation: boolean
showMuseIdentities: boolean
showTrail: boolean
allowReplay: boolean
allowSound: boolean
allowDownload: boolean
encounterTelemetry: "none" | "opened" | "opened_and_returned"
```

This proposal does not introduce `OfferingPackageV0_3`, `OfferingPermissionsV0_3`, a `resolutionProfile` field, or substitute permission names. Unknown fields fail closed under the governing package schema.

The repository contains two non-conformant legacy package families:

1. the current Studio `OfferingPackageV0_2` / `OfferingPermissionsV0_2`, with schema version `pinecoene.offering-package.v0.2`;
2. the earlier protocol types currently named `OfferingPackageV0_1` and `OwnerArchiveV0_1`, whose schema versions are actually `pinecoene.offering-package.v0.1-showcase` and `pinecoene.owner-archive.v0.1-showcase`.

Before governing v0.1 types are added, the implementation types in family 2 must be renamed to unmistakable legacy names such as `LegacyShowcaseOfferingPackageV0_1` and `LegacyShowcaseOwnerArchiveV0_1`; the existing names must not collide with or impersonate the governing contracts.

Both families remain readable and canonically/hash-preservingly reserializable under a `Showcase legacy` path, with their historical meanings. Original imported bytes may be called byte-preserved only if migration stores and verifies the original byte blob separately; reconstruction from a structured IndexedDB object is not byte preservation. Neither family is silently promoted, re-labelled as a recipient-safe governing v0.1 package, or passed into the target Witness composition.

The legacy meanings preserved by that reader are exactly:

| Legacy token | Legacy label | Legacy meaning |
|---|---|---|
| R0 | Mark | identity and title only |
| R1 | Trace | permitted record trace |
| R2 | Form | settled Fold |
| R3 | Inspect | semantic inspection |
| R4 | Share | Address and Lineage |
| R5 | Open | Replay and local Return |

Its old booleans—`inspectRecord`, `inspectMuses`, `createReturn`, `allowMuseReuse`, and `allowWithdrawal`—remain data understood only by that historical reader. They have no authority in a newly compiled governing package.

Creating a conformant Offering from any legacy study requires returning to owner state, recompiling the recipient-safe projection and `PerformanceScore`, performing the current right-to-offer and consent-review acts, and producing a new Offering ID and package hash. Any migration receipt or predecessor reference lives outside the closed recipient package unless the governing schema explicitly provides it; it may not be inserted as an unknown field.

### 21.2.2 Public Door Candidate resolution × permission profile

Resolution is a maximum disclosure ceiling. Permissions and effective source/Address/consent constraints may narrow it; they never widen it. The most restrictive lawful rule wins, and Preview explains any narrowing. This table is the deliberately conservative Public Door Candidate profile, not an amendment that expands v0.6.

Legend: `R` required by this profile, `O` optional when every governing constraint permits it, `F` forbidden.

| Capability / exact permission | R0 Glyph | R1 Card | R2 Form | R3 Inspect | R4 Replay | R5 Recital |
|---|---:|---:|---:|---:|---:|---:|
| identity-safe mark | R | R | R | R | R | R |
| owner-selected title/dedication | F | R | R | R | R | R |
| settled recipient-safe scene | F | F | R | R | R | R |
| recipient-safe Inspect records | F | F | F | O | O | O |
| `showConstellation` | F | F | F | O | O | O |
| `showMuseIdentities` | F | F | F | O | O | O |
| `showTrail` | F | F | F | F | O | O |
| `allowReplay` | F | F | F | F | O | O |
| valid governing `PerformanceScore` | R | R | R | R | R | R |
| full Recital performance profile | F | F | F | F | F | R |
| `allowSound` after user gesture | F | F | O | O | O | O |
| `allowDownload` product affordance | O | O | O | O | O | O |
| `encounterTelemetry` | O | O | O | O | O | O |

Validation rules:

- `showMuseIdentities=true` requires `showConstellation=true` and every identity to pass the effective disclosure ceiling;
- `showTrail` and `allowReplay` are false below R4; a replay or transition absent from the projection cannot be recovered by player state;
- `allowSound` cannot broaden semantic disclosure and sound remains off until a direct user gesture;
- every resolution carries a valid governing `PerformanceScore`; R0–R4 use appropriately restricted/static schedules, while R5 requires the full Recital profile and remains complete in sound-off and reduced-motion modes;
- `allowDownload` controls only a recipient-side re-download affordance after encounter. The owner's Stage-11 export of the already-authorized `Recipient-safe Pinecœne` transfer file remains available and is not governed by this flag;
- `allowDownload=false` is never described as copy prevention;
- telemetry defaults to `none`, never proves a human recipient, and is not implemented as remote observation in this release;
- Return creation, Muse reuse, successor consideration, and local deletion are not invented `OfferingPermissions` fields; where a local demonstration Return is present, its control is represented by the governing `EncounterReturn.recipientControl` contract;
- an invalid combination is rejected before package compilation and cannot be silently normalized;
- table-driven tests cover every allowed and denied combination and property tests prove monotonic disclosure.

### 21.2.3 Recital honesty

`No compulsory persistent copy` means a recipient is not required to download or retain the Recital. It does not mean the browser can enforce ephemerality, prevent memory, screenshots, recording, caching, or copies. A local Offering package may remain in IndexedDB. The interface must not call R5 disappearing, screenshot-proof, non-copyable, or remotely revocable.

## 21.3 Locket overture — `/w/[offeringId]`

The Locket is a separate consent/authority shell and visual vessel, not an alternative Fold renderer. Before opening, the shell owns the overture, `Not now`, `Decline`, and the closed-vessel transition. After explicit `Open`, it passes the already-validated package to the canonical Fold Player. The shell cannot read owner state, reinterpret the package, add resolution, or independently reconstruct the Fold.

The overture may begin with one human Address dedication. It is not a new `message`, `overture`, or shell-content field. The Locket Shell renders this line only from the already-authorized `projection.address.dedication` value in the governing package. If that value is absent, the human line is omitted; the shell does not fall back to owner state, `expression.payload.dedication`, fixture copy, route metadata, or a generated default.

For a curated demonstration, the owner may place this exact value in `projection.address.dedication` before Preview:

Human line:

> **Hold the beginning at the Fold.**

For The Genesis Chat, a proposed alternative is:

> **For the next keeper of this still-open record.**

The exact line is package content chosen before Preview and rendered unchanged in Preview and Witness. It is not generated at encounter time. `expression.payload.dedication`, when present, remains part of the authorized Expression/performance contract and is not silently promoted into the Locket overture.

Sender/Address line, only when permitted:

> `From Pinecœne Studio · addressed to this demonstration encounter`

This line is derived only from the permitted human-readable values already present in `offering.payload.senderSnapshot` and `projection.address`. The renderer omits any missing or unpermitted segment, preserves the package values exactly, and never reads an owner profile, fixture manifest, route registry, or local Studio state to fill a gap. The separator and the labels `From` / `addressed to` are versioned Locket Shell grammar, not additional package claims.

Then system context:

> **A demonstration Offering is waiting here.**
>
> It will open only the resolution and permissions prepared for this encounter.

This system context is versioned Locket Shell copy. It is not sender speech, Address content, package evidence, or proof of transport. Preview and Witness use the same shell-copy version.

Context disclosure:

> This is a local or fixture-authored demonstration. Nothing here proves that a person sent, delivered, received, or accepted an Offering.

For a browser-created package, the route and evidence state are `same_browser_preview`. It is called **Local Preview**, not a delivered recipient link. Its actions are:

- `Open local preview`;
- `Not now`;
- `Decline`.

An intentionally registered hosted fixture may instead use `Open demonstration` with evidence state `hosted_fixture`.

A successfully imported recipient-safe file uses a third, explicit encounter state: `portable_file_encounter`. Its local custody metadata is `custody.status: portable_offering`. Only when the browser has written an observed `PortableTransferReceiptV0_1` for the exact package ID and hash may its local evidence metadata say `delivery.status: portable_transfer`. That status means exact bytes crossed the file-import boundary on this device; it does not mean remote delivery or human receipt. The receipt is a post-package local event and never enters, mutates, or re-hashes the closed `OfferingPackage` or its embedded evidence snapshot.

Portable-file shell copy:

> **Opened from a recipient-safe Pinecœne file on this device.**
>
> This proves only that these exact bytes were imported here. It does not prove who sent them, who they were meant for, or that anyone delivered, received, opened, or accepted an Offering.

Its actions are `Open recipient-safe file`, `Not now`, and `Decline`. Public Door Candidate V0.1 contains no route state that claims observed remote delivery.

Not now preserves no negative standing. Decline remains local unless a real transport later defines a recipient-authorized signal.

## 21.4 Opening choreography

1. closed Locket centered;
2. one human line;
3. explicit action;
4. permitted features reveal in causal order;
5. kept gaps remain visible;
6. unresolved seam remains unresolved;
7. motion ends in stillness;
8. inspection appears only after encounter.

Sound is off until a direct gesture.

## 21.5 Unknown or unavailable Offering

An unknown, malformed, unsupported-version, corrupt, or unavailable ID fails closed. Enforceable expiry is not implemented in this profile; a new package containing `expiresAt` fails the profile rather than pretending the browser can revoke exported copies.

Exact content:

> **This Offering is not available.**
>
> Nothing has been opened.

Actions:

- `Return to Pinecœne`;
- `Open a curated demonstration` if one is intentionally registered.

The route may never silently substitute PCN-0002 or another fallback Offering for an unknown ID.

## 21.6 Return

If permitted, the post-encounter invitation is:

> **If anything moved, a line is enough.**

Supporting copy:

> A real recipient Return may become candidate material only when its own recipient-control record permits successor consideration. Arrival alone never admits it, accepts it, or rewrites the work.

In a local demonstration:

> This is a Local demonstration Return. It stays in this browser, is not an observed recipient act, and cannot become successor material. It has not been sent or received by another person.

Its required control state is:

```text
evidenceKind: "local_demonstration"
successorConsideration: "not_permitted"
exportOrLink: "not_permitted"
retraction: "not_available" | "local_delete_available"
```

## 21.7 Return disposition

For a local-demonstration Return, the owner-side surface may only:

- view it as a non-authoritative demonstration note;
- leave it `pending` or mark it `open` without semantic admission;
- reject it;
- delete the same-browser object when `local_delete_available` permits.

It may not offer `admit`, `narrow`, `reuse as Muse`, `dock to successor`, `create successor`, `withdraw`, or any other path that gives the local fixture action recipient standing. If the owner rewrites an idea from the demonstration into a new owner-authored source, that is a separate future Genesis/Admission act with new provenance; it is not a promoted Return.

Fixture-authored and local-demonstration Returns are not observed cross-person Returns and are never eligible for successor material. `local_delete_available` means deletion of this same-browser demonstration object only. The UI calls it `Delete local demonstration`, never withdrawal, retraction, or revocation.

## 21.8 Successor

A real successor requires:

- predecessor reference;
- new record event;
- declared reading;
- owner disposition;
- new score and semantic hash;
- new topology and scene identity where the event changes them;
- immutable predecessor.

It additionally requires an observed recipient Return whose `recipientControl.successorConsideration` is `permitted`, or another independently authorized new record event. No such observed-return transport exists in Public Door Candidate V0.1.

If a future implementation creates only metadata referencing an otherwise eligible possible descendant, call it:

> `Successor candidate dock`

Do not call it a compiled Successor until the complete law is implemented. The current metadata docking control must be disabled for fixture-authored and local-demonstration Returns; relabelling it is not enough.

---

# 22. Vital Sign — `/vital-sign`

## 22.1 Purpose

Provide a clearly separated experimental study of 7 Presence without confusing observable operational state with a human-owned Pinecœne.

## 22.2 Opening content

Eyebrow:

> Experimental study

Title:

> **Vital Sign**

Opening:

> A study of how declared operational state might become legible through light, geometry, sound, and silence.

Boundary:

> This is not a pinecone. It does not show consciousness, emotion, hidden chain-of-thought, autonomous agency, or a mind inside the object.

## 22.3 Interaction

Only explicit curated state controls may drive the experiment. Each visible change names its declared input. Random autonomous sequences must not imply an agent acting beyond the fixture.

Sound is off by default and begins only after a direct gesture.

## 22.4 Separation law

Vital Sign may share:

- camera utilities;
- physical-material utilities;
- audio runtime;
- accessibility patterns;
- lifecycle and visibility management.

It may not share:

- Fold authority;
- owner standing;
- canonical score types without an explicit adapter;
- Pinecœne identifiers;
- Offering ownership;
- persistent human lineage.

---

# 23. Content system

## 23.1 Voice

Pinecœne speaks as a thoughtful host, maker, and witness—not as a luxury brand, evaluator, academic institution, or AI oracle.

The voice is:

- human;
- exact;
- calm;
- intimate without manufacturing sentiment;
- strange without being mystical by default;
- confident enough to leave space;
- honest about incompletion;
- capable of technical precision when the reader asks for it.

## 23.2 Sentence behavior

At Arrival:

- short sentences;
- ordinary words;
- one idea per line;
- no stacked caveats;
- no taxonomy.

At Encounter:

- plain causal verbs;
- one visible consequence per caption;
- named uncertainty;
- terms introduced through use.

At Inspection:

- exact identifiers, standing, versions, sources, hashes, and constraints;
- no euphemism for fixtures or simulations;
- no technical language used to perform authority.

## 23.3 Brand and artifact naming

- `Pinecœne` — the project and medium, using the ligature;
- `pinecoene.com` — ASCII domain;
- `a pinecone` — a particular artifact in ordinary public prose, including the Door sentence;
- `Fold` — that artifact’s earned form at rest and the canonical mode name;
- `Becoming`, `Offering`, `Locket`, `Encounter`, `Return`, `Successor`, `Muse`, `Address`, and `Lineage` — capitalized canonical lifecycle terms;
- `record`, `reading`, `form`, and `care` — ordinary public words unless used as interface mode names.

## 23.4 Prohibited or restricted language

Do not use at Arrival:

- receipt-bound;
- standing;
- compiler;
- semantic topology;
- candidate;
- conformation;
- fixture-authored;
- owner-authorized;
- R0–R5;
- source checksum;
- proposal-derived.

Do not use anywhere without evidence:

- mind scan;
- personality portrait;
- true shape of thought;
- consciousness visualization;
- AI understanding;
- sent;
- delivered;
- received;
- accepted;
- released;
- sealed;
- revoked;
- synchronized;
- secure or private as an absolute promise;
- immutable when only a UI convention exists;
- canonical when the exact subject was not accepted as canonical.

## 23.5 Content standing labels

Use a controlled public status vocabulary:

| Label | Meaning |
|---|---|
| `CURRENT STUDY` | active proposal/study not yet frozen for public release; review-only when it is the Door candidate |
| `CURRENT WORK` | accepted immutable public-release snapshot; may remain semantically OPEN and gains later versions/Successors rather than silent mutation |
| `FIXTURE-AUTHORED STUDY` | frozen authored demonstration; not observed human action or machine discovery |
| `BROWSER-LOCAL STUDY` | visitor-created local fork tied to an ancestor fixture |
| `EXPERIMENTAL` | bounded study outside canonical Fold authority |
| `CANDIDATE` | proposal awaiting explicit acceptance |
| `OPEN` | unresolved by declared law; not equivalent to unfinished implementation |
| `DEFERRED` | intentionally outside current build |
| `NOT AVAILABLE` | absent or inaccessible; no fallback impersonation |

These labels appear in relevant optional orientation/About contexts, not on the first object.

## 23.6 Error language

Errors state what is known and what remains safe.

Examples:

> The live form could not start. The same work is shown here as a still and semantic anatomy.

> This local study is unavailable in this browser.

> This Offering is not available. Nothing has been opened.

> This export does not match a supported Pinecœne package. It was not imported.

Avoid theatrical or anthropomorphic failure messages.

### General not-found page

> **This page is not here.**
>
> The works are.

Actions:

- `Return to the Door`;
- `See the works`.

### Local persistence unavailable

> **This study cannot be saved in this browser.**
>
> You can continue exploring, but your changes may disappear when you leave.

### Unsupported import

> **This file is not a supported Pinecœne package.**
>
> Nothing was imported and no existing study was changed.

---

# 24. Visual system

## 24.1 Art-direction sentence

> A tactile folded object in a dark, quiet room: materially credible, causally exact, strange enough to invite attention, and calm enough to carry trust.

## 24.2 Desired qualities

- intimate rather than spectacular;
- materially credible rather than graphically decorative;
- source-specific rather than generically beautiful;
- composed rather than ambiently busy;
- editorial rather than cybernetic;
- inspectable rather than mysterious by force;
- dark at rest, with light earned by events;
- visibly incomplete where the record remains OPEN.

## 24.3 Material language

Preferred material families:

- dark metal;
- mineral;
- smoked or clear glass used sparingly;
- folded paper or fibre where source-specific;
- shadow as a structural material;
- seam, aperture, gate, interval, and missing face;
- restrained particulate only where a Return or Muse has standing.

The current V3 Fold must have a recognizable silhouette at poster scale. It may not default to a translucent glowing orb.

## 24.4 Semantic color law

| Role | Color behavior |
|---|---|
| Committed Solid | restrained warm metal / committed gold |
| Return evidence | evidence blue, localized to source event loci |
| Muse | visually distinct peripheral material; never confused with evidence |
| Boundary / Edge | restrained neutral, capable of gate, interval, or refusal |
| OPEN | cool restrained light, gap, missing face, or halted path |
| Selection | temporary accessible highlight that does not look like added standing |
| Admitted closed/protected in the owner Fold | owner-only privacy boundary; may shape the owner form; never exported merely because it is visible to the owner |
| Closed or otherwise unpermitted on public/recipient surfaces | absent entirely; never abstracted, blurred, or hidden client-side |

No color alone carries meaning.

## 24.5 Typography

### Newsreader

Use for:

- the letter;
- work titles;
- public editorial prose;
- source excerpts where appropriate;
- Lineage and Designer’s Note.

### Geist

Use for:

- navigation;
- controls;
- captions;
- status language;
- forms and task instructions.

### Monospaced typography

Use only for:

- IDs;
- hashes;
- source anchors;
- timing;
- schema/compiler versions;
- compact receipt lines.

Monospace must not become the general personality of the public site.

## 24.6 Interface density

### Door

Near-zero chrome.

### Public work

Calm object stage with optional drawers.

### Studio

Higher density is permitted because the visitor has chosen an instrument, but the object remains visually dominant.

### Recipient

Consent and human language before controls or technical detail.

## 24.7 Explicit visual refusals

Do not use:

- generic glowing orb;
- galaxy or starfield backgrounds;
- decorative particle fog;
- neon cyberpunk palette;
- lens flare, excessive bloom, chromatic aberration, or depth-of-field spectacle;
- interface wireframes floating around the Fold at Arrival;
- literal pinecone illustration as the product mark;
- three equal hero cards;
- a conventional SaaS dashboard on the public work route;
- continuous animation to imply consciousness;
- dim microtype as a substitute for seriousness.

---

# 25. Interaction, motion, and sound

## 25.1 Handling law

The Fold behaves as an object, not a video.

- drag turns;
- arrow buttons and keys provide equivalent turning;
- scroll or pinch approaches within bounds;
- Reset restores the canonical view;
- touch manipulation releases cleanly back to page scrolling;
- focus never becomes invisible;
- the visitor’s chosen orientation is preserved when moving between compatible modes.

## 25.2 Motion states

```text
poster
→ live initialization
→ brief witness drift
→ visitor handling
→ rest
↔ semantic replay
→ rest
```

The render loop pauses when:

- the document is hidden;
- the object is meaningfully offscreen;
- the object is fully at rest and no material requires continuous update;
- reduced motion or a static tier is active.

## 25.3 Becoming controls

- Play / Pause;
- Previous event or phase;
- Next event or phase;
- scrub when continuous mode is available;
- Replay condensed after first completion;
- transcript;
- sound toggle;
- Close;
- Escape support;
- focus trap and restoration in overlay mode.

## 25.4 Sound

Sound is optional, semantic, and off by default.

Permitted vocabulary:

- fold;
- strike;
- scrape;
- discrete pluck;
- bounded resonance;
- close material breath only when it represents a declared action;
- silence;
- unresolved cadence for OPEN.

Sound may not become:

- ambient emotional score;
- autoplay;
- synthetic narration of intimate material;
- evidence of inner life;
- required comprehension.

## 25.5 Reduced motion

Reduced motion is a distinct lawful performance:

- no automatic rotation;
- no continuous morphing;
- seven explicit semantic steps;
- each step includes a still, caption, and text alternative;
- no parallax or scroll-linked camera;
- focus and page position remain stable;
- all meaning preserved.

---

# 26. Responsive system

## 26.1 Breakpoint principle

Responsive behavior is task-specific, not a mechanical compression of desktop rails.

Suggested layout bands:

- compact mobile: 320–479px;
- large mobile / small tablet: 480–767px;
- tablet / compact desktop: 768–1099px;
- desktop: 1100–1599px;
- wide stage: 1600px and above.

Breakpoints remain implementation choices; the acceptance behavior is normative.

## 26.2 Door

### Desktop

- complete Fold silhouette occupying approximately 50–62% of viewport height and 38–54% of viewport width, adjusted by aspect ratio without cropping;
- generous surrounding dark room;
- caption below or adjacent without crossing essential anatomy;
- letter and object share the composition asymmetrically;
- object never becomes a small decorative sidebar graphic.

### Mobile

- complete Fold visible before zoom;
- object approximately 55–64% of first viewport;
- no clipping that destroys silhouette;
- copy set below or in distinct frames;
- actions become full-width or comfortably tappable;
- pulse navigation retains expected position.

## 26.3 Works

### Desktop

- alternating editorial rows are allowed;
- object and copy remain balanced;
- work order stays chronological.

### Mobile

- each work becomes a vertical room: object, title, copy, actions;
- no horizontal carousel requirement;
- no nested scroll areas;
- object remains turnable without trapping page scroll.

## 26.4 Work detail

### Desktop

- dominant object stage;
- quiet mode rail;
- optional side drawer up to roughly one-third width.

### Mobile

- object stage;
- mode menu or rail;
- bottom sheets for text and inspection;
- sticky task action only when necessary;
- drawers never cover the entire object without a clear transition and close action.

## 26.5 Studio

### Desktop

- object-plus-inspector instrument;
- task rail and provenance remain subordinate to stage.

### Mobile

- full-stage form;
- task-focused sheets;
- owner decisions remain ordinary semantic controls;
- no shrunken multi-column console.

---

# 27. Accessibility contract

Accessibility preserves the meaning of the work, not only access to buttons.

## 27.1 Keyboard

Complete keyboard path for:

- navigation pulse and menu;
- Door object;
- every homepage CTA;
- optional first-visit orientation without blocking the complete Fold;
- public Fold turning and reset;
- Becoming controls and phase selection;
- public modes and drawers;
- Studio decisions;
- Offering Preview;
- Locket Open / Not now / Decline;
- Return creation and same-browser local deletion;
- private-owner-backup, recipient-safe export, legacy export, and reset actions.

Visible `Turn left`, `Turn right`, and `Reset view` controls appear on focus, inspection, or through a persistent accessible control group. Invisible focus stops are prohibited.

## 27.2 Screen reader and semantic anatomy

Every work exposes a synchronized non-canvas anatomy containing:

- work name and standing;
- topology summary;
- committed features;
- Return fields;
- Muses where permitted;
- boundaries;
- OPEN relations;
- current replay event;
- Address description where permitted;
- source/read/standing distinction.

Canvas is never the only carrier of meaning.

## 27.3 Replay

- captions for every causal and sonic event;
- transcript in event order;
- no rapid unannounced telemetry in live regions;
- important mode and completion changes announced sparingly;
- overlay traps focus, makes background inert, supports Escape, and restores focus;
- user can stop all motion.

## 27.4 Visual access

- WCAG AA contrast for essential copy and controls;
- visible focus against every background;
- no meaning only in color, brightness, depth, position, or motion;
- 200% zoom without lost content or two-dimensional scrolling for ordinary text;
- high-contrast semantic separation;
- text remains selectable where it is content.

## 27.5 Motor and touch access

- primary targets at least 44 × 44 CSS pixels;
- primary mobile actions target 48px height;
- no precision drag requirement;
- equivalent buttons and keyboard controls;
- touch stage releases to vertical scroll;
- no hover-only inspection.

## 27.6 Fallback

Every work ships:

- canonical poster or 2D Glyph;
- semantic-text anatomy;
- reduced-motion event sequence;
- sound-off completion;
- no-WebGL path with the same permitted meaning and actions.

The fallback is a lawful renderer, not an error screen.

---

# 28. Current technical baseline

This section records a read-only code inspection of branch `main` at exact Git revision `d5d7c2c07b72cd33b5f9cf0892ed65759aac5c87` on 27 August 2026. At inspection time there were no tracked working-tree modifications; the untracked `library/` and `evidence/` documents are not part of this code baseline. These are repository observations, not present-tense production verification, hosted-behavior evidence, or a claim that the revision is still current when this document is later read.

```text
implementationBaselineId: pinecoene-repo-baseline-2026-08-27-d5d7c2c
repository: https://github.com/EnkiDeniz/pinecoene.git
branchObserved: main
commitObserved: d5d7c2c07b72cd33b5f9cf0892ed65759aac5c87
trackedTree: clean_relative_to_commit
excludedUntrackedMaterial: library/ and evidence/ review artifacts
verificationKind: read_only_source_inspection
testsInThisAudit: present_unrun
hostedDeploymentInThisAudit: not_verified
```

System Specification v0.6's 26 August statement that no committed application baseline existed remains a preserved historical implementation snapshot. The pinned observation above supersedes it only for repository-baseline truth as of this inspection; none of v0.6's semantic, authority, privacy, contract, or conformance law is superseded.

## 28.1 Implemented evidence

- Next.js App Router, strict TypeScript, React 19, React Aria Components, Lit, direct Three.js, Web Audio, Dexie, Ajv, JCS canonicalization, and SHA-256 are present.
- Two immutable fixture-authored specimens exist: `pcn-0001` and `pcn-0002`.
- The current deterministic compiler emits semantic, topology, scene, and transition identities.
- Canonical fixture decisions create browser-local `prototype_only` forks.
- Dexie v2 stores local studies, Offering packages, Return candidates, dispositions, and successor references while preserving legacy records.
- Fold, Locket, and Vital Sign are currently separate Lit/Three renderers; the target architecture replaces the Locket's independent Fold rendering with a consent shell around the canonical Fold Player.
- The repository test suite includes local journey coverage for fixture operation, Offering Preview, Locket, local Return, and successor-reference docking; those tests must be rerun before any current verification claim.

## 28.2 Gaps relevant to this specification

- There is no frozen third `Pinecœne, Becoming` manifest, score, scene, transition, or poster.
- Current public routes remain explanation-first.
- `This Chat` remains in implemented fixture labels.
- the current public route family is `/`, `/approach`, `/science`, `/sketches`, `/use` rather than the target architecture;
- the V3 Door and Works prototype is separate from the production-directed Next.js renderer architecture;
- V3 Join and More are mostly stubs;
- V3 work pages fall back into legacy dense instruments;
- V3 `seed-fold.js` uses `Math.random()` and is not eligible for canonical production paths;
- the current successor implementation creates metadata/reference only; it does **not** compile a new admitted score, conformation, topology, or immutable Successor. Its docking control must be disabled for fixture-authored/local-demonstration Returns; the historical metadata may be labelled `successor candidate dock` only as preserved non-authoritative prototype evidence;
- unknown Witness IDs currently fall through to a PCN-0002 fixture Offering; this is a confirmed truth/privacy defect and must become a fail-closed unavailable state;
- the Offering resolution taxonomy conflicts between current code and System Specification v0.6 and must be frozen.
- Ajv is installed, but the current runtime schemas cover older archive/package shapes rather than the exact governing v0.6 `OwnerArchiveV0_1` and `OfferingPackage` contracts; every target serialization boundary requires the exact schema and negative tests.

## 28.3 Supersession law

If accepted, this document supersedes only the intended public-site information architecture, public content, naming, and experience direction in its named predecessor site documents.

It does not supersede:

- Pinecœne System Specification v0.6;
- Design and Development Approach v0.2 protocol/conformance requirements;
- accepted source, Admission, Recognition, score, disclosure, Offering, Return, or package contracts;
- human rights, consent, publication, acceptance, release, or Seal decisions;
- frozen work manifests or identities;
- the current deployed production state;
- build, deployment, promotion, or rollback authorization.

Approach v0.3 and this proposal may change which object meets the public first and how the site explains it. They do not weaken the underlying protocol.

Predecessor documents and implementations remain preserved as historical and causal Lineage. Acceptance of this proposal authorizes only the next explicitly approved design/keyframe or implementation-planning phase. Until a separately approved SHA is promoted and hosted behavior is verified, the current production deployment remains the operative public release.

---

# 29. Target technical architecture

## 29.1 Framework responsibilities

### Next.js App Router

Owns:

- route shells;
- server-rendered page content and metadata;
- canonical posters and first HTML;
- fixture/work registry access;
- noindex and security headers;
- progressive loading boundaries;
- error and unavailable states.

### React

Owns:

- accessible navigation and drawers;
- page state;
- optional object-preserving orientations;
- owner instrument orchestration;
- local custody coordination;
- forms and ordinary semantic controls.

### Lit custom elements

Own stable renderer boundaries for:

- canonical Fold Player — the only component that renders a Fold from a public, owner, or recipient-safe scene/score;
- Locket Shell — closed-vessel/overture/consent choreography that mounts the canonical Fold Player only after `Open` and never interprets Fold semantics itself;
- Vital Sign Player — a separate experimental renderer with no Fold authority.

### Three.js

Owns only spatial performance of renderer-neutral scene and transition contracts. It does not infer semantics, read IndexedDB, compile source, decide disclosure, or create authority.

### Web Audio

Performs an explicit deterministic sonic score after user gesture.

### Dexie / IndexedDB

Owns additive browser-local custody for studies, packages, Returns, lawful dispositions, any future eligible successor candidates, preferences, and preserved legacy successor/export records. It does not turn local custody into successor eligibility.

### Ajv

Validates versioned import/export and serialization boundaries. A TypeScript type alone is not runtime validation.

## 29.2 Layer boundaries

```text
IMMUTABLE SOURCE / FIXTURE REGISTRY
          ↓
READING + OWNER DECISIONS
          ↓
DETERMINISTIC COMPILER
          ├── SEMANTIC CONFORMATION
          ├── TRANSITION SCORE
          ├── RENDERER-NEUTRAL SCENE
          └── HASHES / PROVENANCE
          ↓
DISCLOSURE PROJECTION
          ├── PUBLIC WORK PROJECTION
          ├── OWNER STUDIO PROJECTION
          └── RECIPIENT OFFERING PACKAGE
                ├── WITNESS COMPOSITION / PREVIEW
                │       ├── LOCKET SHELL / PRE-OPEN
                │       └── CANONICAL FOLD PLAYER / OPENED
                └── EXPORTED RECIPIENT-SAFE PACKAGE

PUBLIC + OWNER PROJECTIONS
          ↓
CANONICAL FOLD PLAYER
          ├── DOOR
          ├── WORKS
          ├── PUBLIC WORK
          ├── BECOMING
          └── STUDIO
```

The player receives what it is permitted to perform. It never decides what it is permitted to know.

`Witness composition` is the Locket Shell plus the canonical Fold Player, driven by one complete validated package. Exact Preview exercises this same composition and package in both pre-open and opened states; it is not a bare Fold approximation.

The Witness/Preview path is explicitly:

```text
VALIDATED RECIPIENT OFFERING PACKAGE
          ↓
WITNESS COMPOSITION
          ↓
LOCKET SHELL / OVERTURE / CONSENT
          ├── NOT NOW OR DECLINE → NO PLAYER MOUNT
          └── OPEN
                ↓
          CANONICAL FOLD PLAYER
```

## 29.3 Canonical Fold Player

One production-directed Fold Player must power Door, Works, work detail, Becoming, Studio, and the opened state inside both Offering Preview and Witness composition.

It consumes:

- renderer-neutral scene;
- semantic feature references;
- transition score;
- Expression / performance score;
- camera/profile instructions;
- disclosure-safe inspection copy;
- poster and fallback instructions;
- reduced-motion profile.

It does not:

- fetch source;
- read owner archives;
- infer events;
- compile topology;
- decide permissions;
- mutate canonical records;
- use unseeded randomness.

A bespoke Door renderer is acceptable only as a thin composition wrapper around the canonical player. It may not reproduce an approximate object independently.

## 29.4 Work registry

Each public work registry entry binds:

- public slug;
- internal ID;
- public title;
- optional form name;
- exact manifest version and hash;
- standing;
- source/disclosure ceiling;
- semantic, topology, scene, and transition hashes;
- canonical poster;
- permitted public modes;
- predecessor and successor references;
- publication status.

Aliases such as `Seed` change display copy only. They do not change identity.

## 29.5 Determinism

- no `Math.random()` in compiler or canonical renderer paths;
- exact declared PRNG algorithm and seed derivation;
- stable ordering and tie-breaking;
- numeric quantization for semantic layout instructions;
- wall-clock timestamps excluded from semantic identity;
- identical admitted input produces identical semantic, topology, scene, and transition hashes;
- device quality may change antialiasing, pixel density, or sampling, never topology, event order, disclosure, standing, or OPEN.

## 29.6 Disclosure compiler

Public, owner, and recipient projections are different serialized objects, not one large object hidden through CSS or component state.

Closed material must be absent from:

- package JSON;
- React props;
- Lit properties;
- DOM;
- shader uniforms;
- accessibility tree;
- captions;
- downloadable files;
- source maps and embedded fixtures.

The implementation must exhaustively verify:

- `showConstellation=false` removes recipient Constellation nodes, Muse relations, Constellation copy, cues, and semantic references;
- `showMuseIdentities=false` removes private Muse identities even when a disclosure-safe anonymous Constellation is otherwise permitted;
- recipient Inspect records are empty at R0–R2 and include only explicitly permitted source, reading, standing, boundary, or Return detail at R3–R5;
- `showTrail=false` and `allowReplay=false` prevent the respective transition/replay material from entering the recipient package; the player cannot recover either from hidden state;
- rejected and unreviewed candidates never perturb output;
- Preview and Witness use byte-equivalent package payloads.

### Public work projection contract

The target architecture adds a versioned, executable `PublicWorkProjectionV0_1`. It is the only work payload Door, Works, and public work routes may serialize to a browser.

Required fields:

```text
schemaVersion
projectionId
workRef
  internalId
  publicSlug
  workVersion
  sourceManifestHash
  scoreHash
  semanticHash
  topologyHash
publicIdentity
  title
  subtitle
  optionalFormName
  publicStanding
playerVersion
publicScene
publicExpression
publicPerformance
publicTransition?
publicRecord[]
publicReading[]
publicConstellation
  muses[]
  museRelations[]
publicLineage[]
publicInspectionCopy[]
permittedAssets[]
posterManifest
allowedModes[]
disclosure
playerInputHash
projectionHash
```

Contract law:

- validate with Ajv before server serialization and again before client-player initialization;
- hash JCS-canonical content excluding `projectionHash` itself;
- `publicScene` contains only features with public semantic references and public copy;
- `publicExpression`, the governing `PerformanceScore` in `publicPerformance`, player version, permitted asset hashes, fallback/poster inputs, and any causal replay projection form one complete public-safe player input and are covered by `playerInputHash` and `projectionHash`;
- when `allowedModes` includes `Becoming`, `publicTransition` is required, validates against the frozen transition decision in Section 29.7, and settles into `publicScene`; otherwise the field is absent rather than `null` or silently synthesized;
- when `allowedModes` includes `Muses`, `publicConstellation.muses` and `publicConstellation.museRelations` are required, every relation resolves to permitted endpoints, and no renderer invents a relation from proximity;
- `publicExpression`/`publicPerformance` may change presentation and schedule, never semantic topology or standing;
- source anchors are replaced with public-safe anchors or omitted;
- owner manifests, owner decisions, candidate sets, rejected/unreviewed candidates, private labels, owner-only IDs, Address identities, and non-public Muses are forbidden fields;
- unknown fields fail schema validation;
- unknown or unpublished work slugs fail closed;
- Door and Works never import or serialize the owner fixture registry directly;
- changes to the public disclosure projection produce a new projection hash even when canonical topology is unchanged.

### Recipient bundle boundary

The Witness route ships only:

- the Witness composition—Locket Shell plus canonical Fold Player;
- the exact validated Offering package;
- recipient-safe fonts and static assets;
- ordinary route/error shell.

It must not bundle or dynamically import:

- fixture registries;
- Studio components;
- compiler modules;
- owner archives;
- candidate readings;
- private source data;
- unrelated Offering packages.

A build-output and network audit proves this boundary.

## 29.7 Performance and transition contracts

The governing recipient contract is named `PerformanceScore`, with `PerformanceScorePayloadV0_1`, exactly as defined in System Specification v0.6. Every governing Offering carries one. It deterministically applies Expression, material, light, camera, sound, captions, reduced-motion, and sound-off schedules without changing topology.

Current Studio code separately defines `TransitionScoreV0_1` for owner/public causal replay. This proposal does **not** invent `TransitionScoreV0_2`. Before build, the team must freeze one of two paths:

1. retain the exact V0_1 transition contract as an internal public/owner projection, define its schema/hash/final-state validation, and document its migration independently of `PerformanceScore`; or
2. replace it with a named public/owner replay projection deterministically derived from the governing `PerformanceScore` plus permitted semantic references.

Either path must keep transition order and recipient performance cross-bound without pretending the two serialized contracts are the same object.

Every cue must:

- resolve to a permitted semantic feature, event, or relation;
- have an observable lawful effect or an explicit silence/rest effect;
- include human caption text or a bound caption reference;
- define its reduced-motion still/step behavior;
- converge on the canonical final projected scene;
- remain deterministic for the same package and player version.

The player executes the applicable frozen score/projection. It does not invent cues, reorder events, or create ambient motion when the score is at rest.

## 29.8 Canonical third work

Before final visual production, freeze a human-reviewed, sanitized manifest for `Pinecœne, Becoming`.

Required inputs:

- exact source set and publication rights;
- exact seven phases;
- every event and Fold-relation candidate, with one owner disposition for each;
- every Muse and Muse-relation candidate, with one separate Recognition decision for each and validated acknowledged endpoints;
- OPEN law;
- semantic mapping;
- predecessor links;
- form family and deterministic constraints;
- public disclosure ceiling;
- manifest hash;
- semantic, topology, scene, and transition golden vectors;
- canonical poster.

A release snapshot may remain semantically OPEN while being immutable as a released version. Later changes create a successor/version, not silent mutation.

## 29.9 Content ownership and versioning

Content has three different authorities and must not be duplicated casually:

### Editorial site copy

Door letter, page essays, navigation, and invitations live in version-controlled content modules or MDX. They may be revised through editorial review without changing a Fold’s semantic identity.

### Work-registry copy

Public titles, slugs, subtitles, standing, canonical poster, and allowed modes live in the versioned work registry. A title alias does not change artifact identity.

### Causal work copy

Event captions, source anchors, uncertainty, Lineage events, semantic feature descriptions, and recipient-safe inspection copy derive from or bind to versioned work/Offering contracts. They must not be retyped independently into page components.

Changing causal copy after a release requires determining whether it is:

- a purely editorial paraphrase;
- a corrected reading;
- a disclosure change;
- a new manifest;
- a Successor.

That decision occurs before publication. The UI may not silently rewrite the meaning of a frozen work.

## 29.10 Poster manifest

Every canonical poster binds a `PosterManifestV0_1` containing:

- work ID and version;
- public-projection hash;
- scene hash;
- player/renderer version;
- canonical camera position, target, field of view, and orientation;
- aspect-ratio tier and output dimensions;
- color profile;
- reduced/static presentation profile;
- accessible description/anatomy reference;
- final asset hash.

Posters are generated or approved build artifacts, not screenshots selected by eye after deployment. Any changed scene, camera, renderer, or asset bytes produce a new poster manifest/hash.

---

# 30. Local custody, privacy, and truth

## 30.1 Capability ledger

The `implemented locally` entries below refer only to the pinned repository revision in Section 28. They are not production claims, and the known protocol gaps listed in Section 28.2 still apply.

### Real and implemented locally

- frozen sanitized fixtures;
- deterministic compilation;
- renderer-neutral scenes and transition scores;
- orbit and semantic inspection;
- browser-local study forks;
- browser-local storage plus current study/legacy export paths; the complete target `OwnerArchiveV0_1` round-trip and recipient-safe import/export circuit are not yet established;
- local Preview/Witness consumption of the implemented internal V0_2 package, not yet the governing v0.1 `OfferingPackage`;
- a local demonstration Return prototype whose successor/reuse controls require the corrections in this specification;
- separate Vital Sign experiment.

### Fixture-authored or simulated

- source readings in canonical showcase fixtures;
- admission and Recognition acts represented by default decisions;
- sender and recipient framing;
- opening and decline in local demonstrations;
- local-demonstration Return creation and non-authoritative review;
- current successor-reference docking, which is a known non-conformant prototype control and must be disabled for fixture-authored/local-demonstration Returns rather than promoted into the target journey.

### Deferred

- arbitrary source understanding in this release;
- accounts;
- cloud custody;
- remote delivery;
- recipient identity;
- cross-device Returns;
- enforceable expiry or revocation;
- published successors;
- live Œdit synchronization;
- general AI understanding;
- proof of transport or contact.

## 30.2 Local storage

Local records state:

> Saved in this browser.

And:

> Clearing browser data may remove this work. Make a private owner backup if you need to preserve owner custody.

Migration remains additive. Legacy maker archives stay read-only/exportable and are never silently promoted into new schemas.

## 30.3 Export trust zones

The target Public Door Candidate V0.1 exposes two non-interchangeable current-format exports:

| Trust zone | Internal package kind | File pattern | Exact UI label | May enter Web Share / recipient download? |
|---|---|---|---|---|
| owner custody | `private_owner_archive` / `OwnerArchiveV0_1` | `*.pcn.owner.json` | `Private owner backup — do not share` | No |
| recipient transport | `recipient_offering` / `OfferingPackage` | `*.pcn.offer.json` | `Recipient-safe Pinecœne` | Yes, as a file only; no delivery receipt is created |

The private owner archive may contain source, candidate, Admission, private standing, and draft material. It is never passed to a Witness route, recipient-download action, clipboard share payload, Web Share API, or transport adapter.

The recipient-safe package contains only the authorized projection, Offering and authorization, Expression, performance, evidence snapshot, permitted assets, and exact complete player input. It never imports owner state at playback.

Filename suffixes are advisory; the internal package kind, exact version, byte ceiling, hashes, unknown-field policy, and schema validation are authoritative. Type confusion fails before any IndexedDB write. A legacy export uses a third, explicitly historical `Showcase legacy` action and cannot be relabelled as either current trust-zone format.

## 30.4 Import and restore contract

Two separate file-entry actions exist:

- `/studio` utility: `Restore private owner backup` accepts only a governing `*.pcn.owner.json` / `private_owner_archive`;
- `/join` secondary utility and the unavailable-Offering state: `Open a recipient-safe Pinecœne file` accepts only a governing `*.pcn.offer.json` / `recipient_offering`.

Neither file picker accepts the other trust zone. Recipient import is not an owner-Studio action and never creates owner custody.

Validate-before-write sequence:

1. read the selected file into a bounded in-memory buffer; do not touch IndexedDB;
2. parse JSON without executing content;
3. validate package kind, exact version, declared/actual byte ceiling, unknown-field policy, normalized asset paths, every embedded hash and cross-reference, authority/disclosure bindings, and absence of forbidden fields;
4. verify the required player version and every permitted asset is locally supported and hash-consistent; missing/incompatible player or asset fails closed unless the package contains a separately valid semantic/static fallback explicitly supported by that version;
5. compare its canonical ID and hash against the correct isolated custody store;
6. if ID and hash already match, treat import as idempotent and open the existing record; if an ID exists with a different hash or source kind, refuse the import—never overwrite, merge, re-ID, or mutate hash-bound content silently;
7. for a recipient package, also compare the ID against the bundled hosted-ID manifest; a declared hosted ID refuses local import, while runtime `/w/[id]` collision detection remains mandatory for older custody and changed registries;
8. write the exact validated object and, when original-byte preservation is claimed, its separately hashed original byte blob in one atomic transaction;
9. for a newly imported recipient package, write a separate `PortableTransferReceiptV0_1` in the local provenance store in that same transaction, containing only package ID, package hash, observed import time, method `file_import`, and local receipt version; this post-package receipt never becomes a field of the package or its embedded evidence snapshot;
10. clear transient parser/file-picker state and navigate only after the transaction commits.

Post-import destinations:

- owner archive → `/studio`, focused on the restored owner item with `Saved in this browser` and no publication/delivery claim;
- recipient package → `/w/[offeringId]`, using `portable_file_encounter`, `custody.status: portable_offering`, and—only when the exact local receipt exists—`delivery.status: portable_transfer`; the neutral acquisition shell still performs the hosted collision check and complete validation before the Witness composition mounts;
- legacy family → read-only `Showcase legacy` inspector/export; never a governing owner or Witness destination.

Import errors leave existing custody untouched and use exact fail-closed copy:

> **This file could not be opened as this kind of Pinecœne.**
>
> Nothing was imported or overwritten.

The UI may offer `Choose another file` and a technical validation receipt. It may not offer a one-click lossy conversion, automatic overwrite, or fallback object.

## 30.5 Source protection

- raw private Genesis Chat is not bundled;
- only explicitly permitted sanitized anchors enter public work projections;
- explicitly permitted protected content may enter a recipient projection only when effective purpose, disclosure ceiling, Address, resolution, selected permissions, and required consent review all permit it;
- closed and all unpermitted public/protected content is absent rather than shipped and hidden;
- owner and recipient archives are different tagged types with the exact labels and file boundaries above;
- imports fail closed on type or schema confusion;
- no hidden source is shipped and merely concealed in UI;
- Address and Muse identities remain private unless explicitly projected;
- SHA-256 proves content integrity, not identity, authorship, consent, acceptance, or external truth.

## 30.6 Analytics

Default release uses no third-party behavioral analytics, session replay, advertising trackers, or cross-site identifiers.

If first-party product analytics are approved, collect only coarse, non-source events such as:

- Door object engaged;
- letter completion band;
- Becoming started/completed;
- Works opened;
- Join path selected;
- Studio local fork created;
- fallback renderer used;
- accessibility mode selected when explicitly stored.

Never collect:

- source text;
- Return text;
- object orientation as a behavioral fingerprint;
- Muse identity;
- Address identity;
- hashes that can be correlated to private content;
- keystroke or pointer replay.

Analytics require a separate explicit decision before implementation.

## 30.7 Indexing

This partner/internal curated release remains:

- public by URL;
- sanitized;
- `noindex` and `nofollow` across **every route**, including Door, Works, Join, More, Science, Art, How, Next, Studio, Witness, source, error, and experimental routes;
- absent from search-engine discovery until an explicit public-launch decision.

Metadata and social cards still describe the content accurately for direct sharing. A future indexing decision is separate from build completion.

Enforcement requires:

- route metadata robots set to `noindex, nofollow`;
- `X-Robots-Tag: noindex, nofollow` on HTML, JSON/package, document, and error responses where applicable;
- `robots.txt` disallowing crawl for the pre-release host;
- sitemap omitted or containing no indexable product routes;
- canonical-host redirect before page or local-custody initialization;
- automated checks for every route family and both domains.

---

# 31. Performance and resilience

## 31.1 Budgets

Target budgets:

- public critical JavaScript before deferred player: ≤120 kB gzip;
- deferred player plus Three.js: ≤350 kB gzip;
- LCP: ≤2.5s at p75 on representative mobile broadband;
- INP: ≤200ms at p75;
- no sustained main-thread task over 50ms during normal interaction;
- 60fps-capable desktop replay;
- stable declared 30fps mobile tier;
- device pixel ratio cap of 2 unless an evidence-based exception is approved.

## 31.2 Door first paint

- canonical poster included in initial server-rendered HTML;
- wordmark and navigation usable without WebGL;
- no layout shift when live renderer replaces poster;
- poster and live object share identical bounds, camera, and identity;
- Three.js loads dynamically;
- no Studio, Science, hidden work scene, or recipient package preloaded;
- production dependencies bundled locally rather than fetched from a public CDN.

## 31.3 Runtime adaptation

The player may adapt:

- antialiasing;
- pixel ratio;
- sampling density;
- shadow quality;
- post-processing that carries no meaning.

It may not adapt away:

- semantic nodes;
- OPEN gaps;
- event order;
- disclosure;
- committed/evidence distinction;
- inspection content.

## 31.4 Resilience states

### Slow initialization

Poster remains meaningful and turn instructions do not appear until live handling is available.

### WebGL unavailable

Show canonical still, semantic anatomy, and step-based Becoming.

### Storage unavailable

Public works remain usable. Studio clearly states that local persistence is unavailable and prevents false save claims.

### Corrupt local record

Quarantine the record, preserve export where safe, and never overwrite the canonical fixture.

### Unknown package

Fail closed with `This Offering is not available.`

### JavaScript unavailable

Door letter, canonical posters, Works content, Join boundary, and More pages remain readable. Interactive handling and Studio state explicitly require JavaScript.

---

# 32. Metadata and share content

Even while `noindex`, direct links need clear metadata.

## 32.1 Homepage

Title:

> `Pinecœne — A thought may need a shape to travel`

Description:

> `Pinecœne gives an unfinished idea a form that remembers how it became. Turn one, watch one become, and see the first three works.`

This target metadata is enabled only after the third-work freeze gate. Before then, metadata may name only the works and capabilities actually present in the promoted build.

Open Graph image:

- canonical still of `Pinecœne, Becoming`;
- complete silhouette;
- wordmark only or one short line;
- no fake glow, interface chrome, or unreadable receipt text.

The current-work Open Graph asset is likewise blocked until its poster manifest and work projection are frozen.

## 32.2 Works

Title:

> `Works — Pinecœne`

Description:

> `Genesis, The Genesis Chat, and Pinecœne, Becoming: three records, three forms, one open lineage.`

## 32.3 Work pages

Title pattern:

> `{Work title} — Pinecœne`

Description pattern:

> `{Public role}. Turn the Fold, watch its record become, and inspect the reading and lineage.`

Share images come from deterministic canonical posters, not arbitrary runtime screenshots.

## 32.4 Join

Title:

> `Come make a pinecone`

Description:

> `Watch a work become, fork a browser-local study, and see how the invitation to bring an unfinished idea is being built.`

No metadata suggests that open intake exists.

---

# 33. State machines

## 33.1 Door

```text
SERVER POSTER
    ↓
LIVE PLAYER INITIALIZING
    ↓
QUIET WITNESS DRIFT
    ↓
OBJECT NAMED
    ├── visitor handles object → DRIFT STOPS
    └── visitor scrolls → LETTER BEGINS
    ↓
LETTER BEATS 1–6
    ↓
INVITATION
    ├── WATCH → BECOMING OVERLAY
    │                 ↓
    │            REPLAY COMPLETE
    │                 ↓
    │       SAME CURRENT FOLD AT REST
    ├── WORKS → /works
    └── BRING → /join
```

State restoration requirements:

- closing Becoming restores prior scroll, object orientation, and focus;
- returning from Works or Join may restore the invitation position during the same session, but may not trap normal Back behavior;
- no Door state changes semantic identity;
- local object orientation is presentation state and is excluded from canonical hashes.

## 33.2 Public work

```text
DIRECT OR FIRST VISIT
    ↓
COMPLETE FOLD AT REST
    ├── WATCH BECOMING → FIRST EVENT → ... → SAME FOLD AT REST
    ├── HOW THIS FORM WAS MADE
    │       → RECORD
    │       → READING
    │       → FORM
    │       → RETURN TO FOLD
    └── OPTIONAL PUBLIC INSPECTION
    ├── RECORD
    ├── READING
    ├── LINEAGE
    ├── MUSES IF PERMITTED
    └── ABOUT THIS STUDY
```

A versioned `orientation seen` preference may be saved locally. It contains no source, identity, or behavioral history, and it never blocks a requested mode.

## 33.3 Studio

```text
IMMUTABLE FIXTURE
    ↓ FORK
UNSAVED DECISION DRAFT
    ↓ READING + COMPLETE ADMISSION + RECOGNITION
DETERMINISTIC RECOMPILE
    ↓ SAVE LOCALLY
PROTOTYPE_ONLY STUDY
    ↓
EXPRESSION
    ↓
ADDRESS
    ↓
RESOLUTION + PERMISSIONS
    ↓
FINAL RECIPIENT-VISIBLE INPUTS
    ↓
INTENT HASH + RIGHT-TO-OFFER + REQUIRED CONSENT REVIEW
    ↓
IMMUTABLE OFFERING PACKAGE CANDIDATE
    ↓
EXACT RECIPIENT PREVIEW OF THOSE BYTES
    ↓
SAVE / RECIPIENT-SAFE EXPORT OF UNCHANGED BYTES
    ↓
SAME-BROWSER WITNESS
    ↓
LOCAL DEMONSTRATION RETURN
    ↓
PENDING / OPEN / REJECT / LOCAL DELETE ONLY
    ╳
NO SUCCESSOR PATH
```

Reset restores the exact fixture hash. Canonical fixtures never mutate.

## 33.4 Encounter

```text
OVERTURE
    ├── NOT NOW → CLOSE WITHOUT STANDING
    ├── DECLINE → LOCAL DECLINE ONLY
    └── OPEN
          ↓
       LOCKET OPENS
          ↓
       GRANTED RESOLUTION ONLY
          ↓
       OPTIONAL INSPECTION / REPLAY
          ↓
       OPTIONAL LOCAL RETURN
          ↓
       OPTIONAL DELETE LOCAL DEMONSTRATION
```

Opening one resolution never implicitly opens another.

`Delete local demonstration` removes only the same-browser Return object where its `recipientControl` permits it. It is not withdrawal, retraction, revocation, remote deletion, or proof that another copy disappeared.

---

# 34. Acceptance and test plan

## 34.1 Story acceptance

- first paint contains only wordmark, navigation pulse, and the real current Fold or lawful poster;
- the visitor can turn or otherwise inspect the object before the letter explains it;
- Door contains one protagonist;
- homepage content follows the agreed letter and ends in invitation;
- no technical ontology or defensive disclaimer precedes the object;
- Works contains exactly the three lineage works;
- The Genesis Chat replaces `This Chat` publicly;
- Thin Fold appears only under What’s next;
- Locket is always described as downstream vessel;
- Bring an idea is explicitly not open yet.

## 34.2 Cold-reader comprehension

Test at least ten unbriefed people representative of partners, thoughtful general visitors, artists/designers, and technically curious visitors.

Without explanation, at least seven should be able to say approximately:

- an unfinished idea is being given a form;
- the form remembers something about how it became;
- they can turn it and watch it become;
- the three objects come from different records;
- the newest work is still open.

Dominant unprompted descriptions must not be:

- AI mind visualizer;
- personality map;
- 3D generator;
- crypto object;
- research paper homepage;
- philosophy essay with animation;
- gift box.

## 34.3 Object continuity

- Door, Works, public work, replay completion, Studio, Preview, and Witness resolve the exact expected work identity and topology for their projection;
- poster and live renderer share camera, bounds, and silhouette;
- replay settles into the same Fold encountered at rest;
- ancestor works remain distinct;
- no work morphs into, overwrites, or impersonates another.
- work-registry tests reject unknown slugs, exclude unpublished works, prove display aliases do not change identity, preserve predecessor distinction, and bind poster/public-projection hashes to the correct release entry;
- poster-manifest tests verify exact camera, renderer, projection, asset bytes, and accessible-description binding.

## 34.4 Determinism

Golden vectors for all release works prove stable:

- semantic hash;
- topology seed and hash;
- renderer-neutral scene hash;
- transition hash;
- public-projection hash;
- Offering/package hash where applicable;
- canonical poster identity.

Invariance tests prove:

- rejected, removed, and unreviewed candidates have zero canonical visual, motion, sound, and hash effect;
- visibility does not masquerade as Admission: lawfully admitted closed/protected material may affect the owner Fold, while a public/recipient projection is deterministically recompiled from only its permitted semantic basis;
- changing disclosure cannot silently mutate the owner score or topology, though it may lawfully produce a different recipient semantic/topology/projection hash;
- closed and unpermitted content has zero recipient-package, DOM, motion, sound, caption, accessibility-tree, and source-map effect;
- timestamps do not change semantic identity;
- local camera orientation does not change semantic identity;
- Expression changes performance, not topology or standing;
- Address changes whole-form orientation, not topology;
- OPEN never falsely closes;
- adding or reordering rejected candidates does not perturb canonical output;
- no `Math.random()` executes in canonical compiler or renderer paths.

## 34.5 Disclosure, authority, and package matrix

Test every R0–R5 resolution against table-driven allowed and denied cases for the exact `OfferingPermissions` fields. Property tests prove monotonic disclosure: adding a restriction can never reveal more.

At minimum:

- `showConstellation=false` removes recipient Muse nodes, relations, cues, copy, and semantic references;
- `showMuseIdentities=false` removes private identity while preserving only a separately lawful anonymous Constellation, if any;
- Inspect records are empty at R0–R2 and source/reading/standing references at R3–R5 are newly constructed recipient-safe aliases;
- `showTrail=false` and `allowReplay=false` remove their material from the package rather than hiding controls;
- Replay is absent below the exact resolution/permission that grants it;
- closed and all unpermitted public/protected/private content is absent rather than hidden;
- explicitly permitted protected content appears only when purpose, ceiling, Address, resolution, selected permissions, and blocking consent review all permit it;
- Preview and Witness consume byte-equivalent serialized payloads;
- downloaded packages, DOM, client props, source maps, captions, and accessibility trees contain no owner-only material;
- unknown Offering IDs fail closed;
- fixture disclosure remains visible in the appropriate About/orientation context.

Authority/package failures include:

- missing, false, stale, or mismatched right-to-offer authorization;
- changing Address, selected permissions, Expression, performance, evidence, sender snapshot, mode, player version, or asset bytes after authorization;
- any newly compiled Public Door Candidate package containing `expiresAt`;
- `private_fold_only` effective purpose;
- incomplete required consent review;
- owner-authority, score, disclosure, Address, selected-permissions, shared-material, or Offering-intent hash mismatch;
- fixture-authored versus observed-owner-action evidence-kind confusion;
- package compilation from mutable ambient application state;
- Stage-11 save/export bytes differing from the package candidate actually previewed.

Import and package-negative tests include:

- wrong owner/recipient package kind;
- unknown schema or package version;
- malformed or corrupt hash;
- oversized import;
- unsupported implicit conversion from internal V0_2, `pinecoene.offering-package.v0.1-showcase`, or `pinecoene.owner-archive.v0.1-showcase` to governing package types;
- collision between legacy implementation type names and governing `OfferingPackage`/`OwnerArchiveV0_1` names;
- invalid permission combination;
- forbidden unknown field;
- public projection containing owner-only material;
- recipient package containing fixture registry, rejected/unreviewed candidate, owner-only source, raw shared-material declaration, owner seat, or private Address identity;
- attempted fallback from an unknown Offering ID;
- hosted-registry/local-custody Offering ID collision, hash mismatch, and wrong source-kind precedence;
- local `/w/[id]` shell exposing title, sender, object, accessibility copy, or player state before complete client-side validation;
- Web Share or recipient-download action receiving an owner archive or legacy export;
- wrong package kind reaching IndexedDB before validation;
- Witness build output importing Studio, compiler, fixture registry, owner archive, candidate reading, or private source modules.

Return and migration failures include:

- any local-demonstration Return whose `successorConsideration` or `exportOrLink` is not `not_permitted`;
- any local-demonstration Return changing Muse, admitted evidence, semantic, topology, Lineage-successor, or Offering hashes;
- any control calling same-browser deletion withdrawal, retraction, revocation, or remote deletion;
- every exact legacy route transform in Section 6.4, including missing study, fixture/study mismatch, unknown fixture query, and prevention of fixture fallback;
- any baseline or release evidence that calls an unrerun test passing or an unverified deployment live.

## 34.6 Full journeys

Required end-to-end journeys:

1. Door → turn → letter → invitation.
2. Door → current-work Becoming → completion → return to invitation.
3. Door → Works → Genesis → complete Fold first sight → optional orientation → Becoming → Lineage.
4. Works → Genesis Chat → Record → Reading → OPEN phase.
5. Works → Pinecœne, Becoming → failure/correction Lineage.
6. Join → Watch.
7. Join → Fork → owner decisions → local study.
8. Study → Expression → Address → permissions → intent hash → right-to-offer/consent gate → immutable package → exact Preview.
9. Preview → local Locket → granted Witness → local Return.
10. Local demonstration Return → pending/open/reject → prove no Muse, Admission, or Successor path.
11. Local decline and Not now.
12. Delete local demonstration where permitted, with no withdrawal/revocation claim.
13. Private owner backup → new isolated browser context → import → exact source/standing/score/topology hashes and meaning restored.
14. Recipient-safe package export → new isolated browser context → import → exact Locket/Witness composition and package hash restored.
15. Prove governing recipient packages cannot enter owner-archive import and owner archives cannot enter Witness, recipient download, clipboard share, or Web Share.
16. Legacy archive view and canonical/hash-preserving export; original-byte equality is asserted only for records whose verified original byte blob was retained.
17. Unknown Offering and corrupt local record.
18. Seed every previous IndexedDB version and prove additive migration preserves studies, Offerings, Returns, dispositions, canonical legacy meaning/hashes, and any separately retained verified original byte blobs.

## 34.7 Accessibility gates

- complete keyboard-only journey;
- visible focus at every step;
- arrow-key and button turning;
- overlay focus trap, Escape, inert background, and restoration;
- semantic anatomy outside canvas;
- captions and transcript;
- reduced-motion causal steps;
- sound-off completeness;
- high-contrast separation;
- 200% zoom and reflow;
- 390 × 844 complete object silhouette;
- no-WebGL fallback;
- touch targets and page-scroll release;
- screen-reader source/read/standing distinction;
- no invisible focus stops.

## 34.8 Browser and device gates

Required:

- current Chromium desktop;
- desktop WebKit;
- mobile WebKit at 390 × 844;
- Chromium Android-equivalent responsive/touch path;
- Firefox smoke coverage, promoted to full gate if renderer or accessibility differences are found.

Verify:

- resize;
- orientation change;
- restored tabs;
- background/foreground transition;
- low-power or reduced-quality tier;
- slow network;
- offline revisit of locally available public content where supported;
- storage unavailable/private mode;
- canonical redirects.

## 34.9 Visual acceptance

Freeze exact desktop and mobile keyframes before implementation for:

1. Door initial object;
2. Door letter midpoint;
3. Door invitation;
4. current-work Becoming;
5. Works lineage;
6. optional work orientation beside the complete Fold;
7. public Fold with drawer;
8. Join placeholder;
9. Studio owner instrument;
10. Locket overture and opened Witness.

For each coded route:

- capture implementation at the identical viewport and state;
- compare side by side with the approved keyframe;
- correct silhouette, object scale, crop, typography, spacing, contrast, borders, and controls;
- repeat on mobile;
- do not treat screenshots alone as interaction or accessibility QA.

## 34.10 Hosted release evidence

Before promotion:

- exact candidate Git SHA recorded;
- clean intended diff;
- passing lint, typecheck, unit, golden, disclosure, and end-to-end tests;
- hosted Vercel Preview verified;
- canonical and IDN domains verified independently;
- redirect, headers, robots, sitemap, and noindex verified;
- no private material in build output or source maps;
- CSP assertion and network-request audit proving no remote fonts, public CDN scripts, third-party analytics, telemetry, or unapproved external requests;
- current production deployment retained as rollback target;
- exact approved SHA promoted;
- post-promotion journeys rerun on hosted production;
- rollback procedure tested or proven available.

## 34.11 Presentation-metadata invariance

- last local edit time, route history, intro-seen preference, camera orientation, viewport tier, and analytics state do not change semantic, study, Offering, or export identity except where a separately versioned package intentionally includes presentation state;
- no wall-clock field enters semantic or topology hash projections;
- changing public editorial copy does not silently mutate a frozen causal reading.

---

# 35. Content and design deliverables before implementation

## 35.1 Required content freeze

- Door letter, including line breaks and punctuation;
- Works opening and all three work summaries;
- final public names and receipt lines;
- Genesis permitted source excerpts;
- Genesis Chat permitted sanitized anchors;
- current-work seven-phase source set and public captions;
- Lineage description of both prior site failures;
- Join placeholder;
- Science probes, limitations, and bibliography;
- Art page essay;
- How it’s made lifecycle copy;
- What’s next statuses;
- fixture, local, and experimental disclosures;
- error and unavailable copy;
- Offering and Return simulation copy;
- metadata and Open Graph descriptions.
- one explicit human approval receipt for every public source excerpt, source anchor, ancestor appearance, and rights/disclosure ceiling in all three release works.

## 35.2 Required design freeze

- current-work silhouette and OPEN seam;
- material family and physically credible lighting;
- canonical view and poster;
- Mark/navigation pulse;
- Door desktop and mobile choreography;
- Works shelf composition;
- public work instrument and drawers;
- non-blocking Record / Reading / Form orientation;
- Becoming controls and captions;
- Join placeholder treatment;
- Studio public-to-owner transition;
- Locket/Encounter visual relationship to the Fold;
- reduced-motion and no-WebGL views;
- semantic color and selection states;
- sound direction if sound remains in scope.

## 35.3 Required product/technical freeze

- release profile: Public Door Candidate V0.1 now, or full Showcase V0 with the connected short-text Make Your Own / Genesis Reader scope restored;
- third-work manifest and exact standing;
- route map and legacy redirects;
- hosted/local Offering ID allocation, lookup precedence, collision failure, and validation-before-mount law;
- canonical work registry schema;
- resolution taxonomy;
- public versus owner mode boundaries;
- public and recipient disclosure rules;
- intent hash, right-to-offer authorization, blocking consent review, and unchanged-byte Preview/save/export law;
- exact governing `OfferingPackage`/`OfferingPermissions` schemas and legacy V0_2 disposition;
- governing `PerformanceScore` implementation plus the explicit transition decision: retain/schema/hash/migrate current `TransitionScoreV0_1`, or replace it with a named deterministic public/owner replay projection;
- owner-backup versus recipient-safe export trust zones;
- validate-before-write import, conflict, atomic restore, player/asset compatibility, and post-import destination law;
- disabling successor docking for fixture-authored and local-demonstration Returns; real observed Return transport and Successor compilation remain deferred;
- local-storage migration;
- analytics decision;
- indexing decision;
- deployment and rollback target.

---

# 36. Delivery sequence after approval

This is a recommended sequence, not implementation authorization.

## Phase 0 — Freeze truth and content

- accept or amend this specification;
- freeze public names;
- curate and human-review the current-work record;
- define exact standing and non-claims;
- settle resolution taxonomy;
- freeze the no-Successor boundary for fixture/local Returns and the eligibility law for any future Successor;
- freeze page copy.

Exit condition: no unresolved decision can change the story, route family, work identity, or disclosure contract.

## Phase 1 — Freeze the object and keyframes

- compile deterministic third-work candidates;
- select the source-lawful silhouette;
- prove complete form across desktop/mobile/poster/fallback;
- produce the ten required keyframes;
- test Door pacing with clickable or coded motion studies;
- freeze canonical camera and Mark.

Exit condition: the team can see the entire intended experience before production code is restructured.

## Phase 2 — Build the shared public player

- unify Door, Works, work detail, Becoming, Studio, Preview, and Witness around the canonical Fold Player;
- implement poster swap and fallback;
- implement deterministic performance and reduced-motion profiles;
- eliminate unseeded randomness;
- add visibility-based render-loop suspension.

Exit condition: one work identity survives every relevant surface.

## Phase 3 — Build Door, Works, and public work pages

- implement global shell and pulse;
- implement letter and responsive choreography;
- implement three-work shelf;
- implement the optional object-preserving orientation and public modes;
- implement public Lineage and About.

Exit condition: cold visitors can understand the medium without entering Studio.

## Phase 4 — Build Join and More

- implement honest Join boundary;
- implement Science, Art, How, and Next content;
- link deep source documents with standing;
- remove or redirect the explanation-first public architecture.

Exit condition: every curiosity latch exists and no stub pretends to be a working product action.

## Phase 5 — Harmonize Studio and downstream lifecycle

- preserve existing deterministic machinery and local data;
- restyle public-to-owner transition without weakening density needed for work;
- repair disclosure projection;
- freeze Offering resolutions;
- fail closed on unknown packages;
- disable successor docking for fixture-authored/local-demonstration Returns and preserve any current metadata only as non-authoritative legacy evidence;
- complete Locket/Return language and flows.

Exit condition: Studio, Preview, Witness, and local Return behavior match their public claims; no local demonstration enters Successor machinery.

## Phase 6 — Acceptance and preview

- golden, invariance, disclosure, and journey tests;
- cold-reader sessions;
- visual comparisons;
- accessibility and resilience gates;
- hosted Vercel Preview verification;
- team review against this specification.

Exit condition: evidence supports a final promote/no-promote decision.

## Phase 7 — Promotion

Only after explicit authorization:

- promote exact approved SHA;
- verify both domains and canonical redirects;
- run hosted journeys;
- retain current deployment as immediate rollback;
- record release evidence separately from team acceptance.

---

# 37. Decision register

The team should respond to each item with `accept`, `amend`, or `defer`.

## 37.1 Story and naming

1. Accept `Pinecœne, Becoming` as the public title of the current work, or name a replacement.
2. Accept `The Genesis Chat` as the title of the origin-conversation work; bind it to PCN-0002 only if Decision 13 selects re-curation and new matching fixture/golden identities.
3. Accept `Seed` as the optional form name of that origin-conversation work, conditional on the same complete identity/manifest freeze.
4. Accept `third attempt · current study · OPEN` as pre-freeze review copy and `third attempt · current work · OPEN` as the post-freeze release receipt.
5. Accept `The record is still being written.` as the final Door line.
6. Accept the two prior public failures as admitted current-work Lineage rather than hidden history.

## 37.2 Door and content

7. Accept the proposed exact Door letter in Section 9.
8. Accept one protagonist and no hero carousel.
9. Accept the pulse navigation and its exact menu.
10. Accept `Watch one become / See the works / Bring an idea` as the final CTA hierarchy.
11. Accept the honest Join placeholder and prohibition on intake simulation.
12. Accept the proposed Works copy and chronology.

## 37.3 Work and object

13. Resolve the Genesis Chat build blocker without mutating the current fixture: either retain PCN-0002 as the work ID while issuing a distinct re-curated fixture-manifest identity, or preserve PCN-0002 as a separately named historical work and create a new origin work/fixture ID.
14. Freeze the complete human-reviewed current-work gate: exact source set and rights, Reading, every event/Fold-relation Admission, every Muse/Muse-relation Recognition, internal ID and manifest, semantic mapping, score, topology, scene, transition/performance inputs, public projection, canonical poster, and golden identities.
15. Approve the current-work silhouette, material family, and OPEN seam.
16. Decide how ancestors enter Becoming without merging.
17. Approve Record / Reading / Form as an optional, non-blocking orientation that never precedes the complete Fold.
18. Approve public modes versus Studio-only modes.
19. Decide whether each work offers a curated Locket demonstration and freeze the exact human overture line for every approved demonstration.

## 37.4 Product and engineering

20. Choose the release profile: build Public Door Candidate V0.1 with a labelled fixture-first Studio, or expand scope to the full Showcase V0 Make Your Own / Genesis Reader conformance target.
21. Accept the target route tree, exact legacy-link migration, and fail-closed hosted/local Offering lookup and collision law.
22. Accept one canonical Fold Player, with the Locket as a separate consent/vessel shell rather than a second Fold renderer.
23. Freeze the R0–R5 meanings and adopt the exact governing `OfferingPackage` version `pinecoene.offering-package.v0.1`, `OfferingPermissions`, and `PerformanceScore`; keep implemented V0_2 and `v0.1-showcase` package/archive families legacy-only, rename colliding implementation types, require `expiresAt` to be absent in this profile, and choose the public/owner transition path: retain/schema/hash/migrate current `TransitionScoreV0_1`, or replace it with a named deterministic replay projection derived from permitted semantic references and the governing performance contract.
24. Accept that fixture-authored and local-demonstration Returns have no Successor path; disable current docking for them and defer real Successor compilation until an eligible independently authorized record exists.
25. Approve additive local-custody migration plus the separate validate-before-write owner-backup and recipient-package import/restore contracts.
26. Approve `noindex, nofollow` for the partner/internal release.
27. Decide whether sound is inside final-build scope.
28. Decide whether any first-party analytics are permitted.

## 37.5 Publication

29. Decide which Master, theorem, specification, and source documents may be linked publicly.
30. Approve the fixture and simulation disclosures.
31. Approve the release evidence and rollback requirements.
32. Explicitly authorize or decline the final design/keyframe phase after reviewing this document.

---

# 38. Out of scope for this release

These exclusions apply to the proposed Public Door Candidate V0.1 profile. If the team chooses full Showcase V0 in Decision 20, this section must be revised to include the bounded short-text/Markdown Make Your Own and Genesis Reader V0.1 path—with its source-processing authorization and manual fallback—while arbitrary document/life-record upload remains excluded.

Unless separately approved, do not build or imply:

- arbitrary document or life-record upload;
- live AI reading;
- automatic or bulk Admission;
- accounts;
- cloud database custody;
- remote Offering delivery;
- verified recipient identity;
- cross-device Return;
- enforceable expiry or revocation;
- downloaded-copy control;
- automatic successor publication;
- live Œdit synchronization;
- Pinecœne-to-Pinecœne contact;
- production 7 Presence;
- hidden chain-of-thought;
- mind reading or personality profiling;
- social feed, likes, popularity, ranking, or engagement metrics;
- Muse ranking or influence scoring;
- generic visual generation from arbitrary prose;
- a public claim that the current work is canonical before its record is frozen;
- public indexing before a separate launch decision.

---

# 39. Team review test

Before approving a build, each reviewer should be able to complete these sentences:

> Pinecœne exists because ____________________________________________.

> The first object on the site is ____________________________________.

> Genesis and The Genesis Chat relate to it by ________________________.

> A Fold differs from a Locket because ________________________________.

> Becoming differs from the Fold because ______________________________.

> A visitor can currently ____________________________________________.

> A visitor cannot currently _________________________________________.

> The site remains OPEN because ______________________________________.

If the team supplies materially different answers, the story is not yet frozen and implementation should wait.

---

# 40. Controlling statement

> **The homepage is not a presentation about Pinecœne. It is a stranger holding the present Pinecœne while a letter changes what the object means—from a strange thing into a possible shape for a fragile idea.**

The public site lets a stranger encounter the living work. Works reveals its lineage. Record, Reading, and Form explain the medium. Studio exposes the owner machinery. Offering and Locket carry an exact permitted projection downstream. A future observed and independently permitted Return may become candidate material for a Successor without rewriting the past; a local demonstration Return may not.

One Door. Object first. The invitation last.
