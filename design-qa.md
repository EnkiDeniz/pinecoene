# Pinecœne Curated Studio V1 — Design QA

## Source visual truth

- `evidence/design/reference-studio-pcn-0002.png` — supplied PCN-0002 owner-instrument reference.
- `evidence/design/reference-becoming-pcn-0001.png` — supplied immersive Becoming reference.
- `evidence/design/curated-studio-v1-desktop-keyframes.png` — frozen five-state desktop target.
- `evidence/design/curated-studio-v1-mobile-keyframes.png` — frozen five-state 390 × 844 target.
- `evidence/design/reference-mobile-owner-fold.png` — normalized mobile Record-sheet crop.

## Browser-rendered implementation evidence

- `evidence/qa/curated-studio-v1-gateway-desktop.png`
- `evidence/qa/curated-studio-v1-record-desktop.png`
- `evidence/qa/curated-studio-v1-becoming-desktop.png`
- `evidence/qa/curated-studio-v1-offering-desktop.png`
- `evidence/qa/curated-studio-v1-record-mobile.png`
- `evidence/qa/curated-studio-v1-comparison.png`
- `evidence/qa/curated-studio-v1-mobile-comparison.png`

## Normalization

- Desktop source: 2488 × 1700 pixels, normalized by `object-fit: contain` inside one half of a 2400 × 1100 comparison board.
- Desktop implementation: 1920 × 1311 CSS pixels and image pixels, Chromium, device scale factor 1, PCN-0002 Record mode at canonical rest.
- Mobile source crop: 330 × 720 pixels from the 1680 × 944 mobile keyframe board.
- Mobile implementation: 390 × 844 CSS pixels and image pixels, Chromium, device scale factor 1, PCN-0001 Record mode at canonical rest.
- Mobile images were compared at equal displayed height. The source includes a device bezel while the implementation is an unframed viewport; bezel and status-bar differences were excluded.

## Full-view comparison evidence

`evidence/qa/curated-studio-v1-comparison.png` physically places the supplied PCN-0002 Record instrument and the browser-rendered implementation in one comparison input. Both preserve the dominant dark stage, compact owner rails, semantic object, right Record inspector, phase/provenance microtype and committed-gold / evidence-blue / OPEN-light hierarchy.

The implementation intentionally makes the renderer-neutral Bag and membrane edges more spatially explicit than the soft source cloud. This follows the accepted semantic-to-topology law: there is no ambient fog, the Core reads as committed Solid, every evidence particle is event-bound, and missing capacity is visible. This is an intentional product constraint rather than unresolved drift.

`evidence/qa/curated-studio-v1-mobile-comparison.png` physically compares the mobile Record-sheet keyframe crop with the 390 × 844 implementation. Both use a full-stage form with a task-focused bottom sheet; no desktop side rail is compressed into the mobile frame.

## Focused fidelity review

- **Fonts and typography:** Newsreader carries artifact title, record and inspection voice; Geist is used for navigation and controls; monospaced type is confined to phases, hashes, anchors and timing. Hierarchy and wrapping remain legible at both target viewports. No unintended fallback or truncation was visible.
- **Spacing and layout rhythm:** Desktop stage-to-inspector proportion follows the source instrument. The five-row grid keeps header, mode rail, optional notice, workspace and footer inside the viewport. Mobile grants the form 58svh and raises a rounded task sheet; actions stay reachable without horizontal overflow.
- **Colors and tokens:** Near-black and charcoal surfaces, neutral rules, committed gold, event-local evidence blue and cool OPEN edges match the frozen direction. There are no gradients, neon accents or decorative galaxy particles.
- **Image and renderer quality:** Forms are live Three.js geometry, not raster stand-ins. PCN-0001 and PCN-0002 have materially different silhouettes and anatomy. The Bag is deliberately thin, the Core has physical response, evidence remains particulate, and Muses remain peripheral. The Locket keeps its physical archival renderer. No handcrafted SVG, emoji, placeholder art or CSS-drawn product asset is used.
- **Copy and content:** Studio, Fold, Locket, Offering, Return and Vital Sign roles are explicit. Fixture-authored, prototype-only, browser-local, experimental and deferred states are labelled. Recipient Preview and Witness describe only granted resolution.
- **Icons and controls:** One Phosphor family is used throughout. Buttons, ranges, text inputs, selects and tabs have semantic names and visible focus.

## Comparison history

1. **P1 — Locket canvas intercepted the primary Open action.** The first lifecycle run could not click **Open the Locket** because the 3D element overlapped the action row. The row received an explicit stacking context. Post-fix evidence: the complete Chromium lifecycle passes through Return and successor in 9 seconds.
2. **P2 — absent truth notice displaced the Studio grid.** The first Becoming capture left a large empty row because conditional grid auto-placement assigned the workspace and footer to the wrong tracks. The notice row now always exists and collapses to zero height. Post-fix evidence: the final desktop Record and Becoming captures fill the intended viewport.
3. **P2 — Vital Sign’s oversized mobile renderer created 48 px horizontal overflow.** The mobile stage now clips its intentionally oversized canvas while preserving visual scale. Post-fix measurement: every primary route reports `scrollWidth - clientWidth <= 1` at 390 × 844 in Chromium and WebKit.
4. **P2 — source and implementation initially used different inspector states.** Evidence was recaptured in Record mode for PCN-0002 desktop and PCN-0001 mobile, then new physical side-by-side boards were rendered. Final comparisons now represent equivalent state and theme.

## Functional and accessibility evidence

- Chromium: all six acceptance tests passed, including gateway → decisions → Becoming → Offering → Locket → Return → successor → Lineage.
- Desktop WebKit passed all six tests. Mobile WebKit passed the complete lifecycle, overflow, noindex and interaction suite; its focused Vital Sign rerun also passed.
- 390 × 844 overflow is clean on `/`, `/studio`, `/make`, both owner instruments, Encounter and Vital Sign.
- Sound defaults off and starts only from direct gesture. Reduced motion uses explicit replay steps and disables continuous rotation. Form rotation has keyboard controls and visible focus. Return permissions have named, disabled and selected states.
- WebGL failure returns semantic anatomy text rather than a blank stage.
- Browser console was checked. Errors observed only during a discarded `127.0.0.1` run came from a development server configured for `localhost`; normalized `localhost` runs were clean.

## Remaining P3 polish

- Increase membrane depth separation after partner evaluation if the current semantic edges feel too architectural.
- Compose a richer optional sound score after the 84-second rhythm is reviewed with people; sound is not required for meaning in V1.

No actionable P0, P1 or P2 design differences remain.

**final result: passed**
