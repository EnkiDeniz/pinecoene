# Pinecœne Design QA

**Source visual truth**

- `concept/concept 2/audit-2026-08-26/05-recipient-arrival.png`
- `concept/concept 2/audit-2026-08-26/06-locket-opening.png`
- `concept/concept 2/audit-2026-08-26/11-mobile-arrival.png`
- `public/images/locket-material-reference.png`

**Rendered implementation evidence**

- `evidence/qa/implementation-desktop-arrival-v2.png`
- `evidence/qa/implementation-desktop-opening-v2.png`
- `evidence/qa/implementation-mobile-arrival.png`
- `evidence/qa/comparison-board-v2.png`

**Normalization**

- Desktop source and implementation: 1280 × 800 CSS pixels and image pixels, device scale factor 1.
- Mobile source and implementation: 390 × 844 CSS pixels and image pixels, device scale factor 1.
- Compared equivalent arrival and mid-opening states. The generated 1254 × 1254 material target was object-fit inside an equal comparison frame; its square crop was not treated as a layout target.

## Full-view comparison

The final comparison board places Concept 2 beside the coded implementation at identical desktop dimensions, then compares the generated archival-material target and the mobile arrival. The implementation preserves the source journey and authority hierarchy: sender, closed object, dedication, one primary Open action, Not now and Decline, causal opening, and mobile-first object scale. It intentionally replaces prototype-console framing and the diagrammatic paper rosette with the selected Luminous Archival Fold language.

## Focused comparison

- **Typography:** Newsreader preserves the source's intimate editorial voice while improving optical scale and hierarchy. Geist is limited to controls, status, and inspection. No cramped microtype remains in the recipient path.
- **Spacing and layout:** The object, dedication, consent choices, and sound preference all fit at 1280 × 800 and 390 × 844 without horizontal overflow. Desktop and mobile retain a single centered overture rather than owner-console rails.
- **Colors and tokens:** Near-black stage, warm paper, aged brass, and one mineral-blue recurrence match the selected direction. Semantic contrast survives sound-off, reduced-motion, and settled states.
- **Image and material quality:** The generated material keyframe is used as the no-WebGL fallback and Open Graph art. The live object uses real Three.js geometry, physical materials, thickness, bevels, pins, raking light, and a recipient-safe deterministic seed. It remains cleaner than the photographic deckled-paper reference; this is acceptable P3 material refinement rather than a fidelity blocker.
- **Post-protocol visual pass:** The final desktop arrival, mid-opening, and mobile evidence was recaptured after wiring the artifact seed into fold length, paper tone, pin placement, and opening variation. The seeded form preserved the approved silhouette and introduced no new P2 visual issues.
- **Copy and content:** Recipient copy stays human-facing. Fixture standing, browser-local Return, lack of delivery, and local maker custody are explicit without introducing specification language into the overture.
- **Icons:** Phosphor icons provide one coherent family for arrows, inspection, lock, archive, sound, and disposition actions. No handcrafted SVG, emoji, or placeholder icon art is present.

## Comparison history

1. **P2 — short desktop viewport hid secondary consent choices.** The first 1280 × 800 capture placed Not now and Decline below the fold. Fixed with a height-aware stage, smaller object maximum, compact overture rhythm, and shorter controls. The v2 capture shows all choices and sound preference.
2. **P2 — oversized mobile grid item clipped dedication copy.** The first mobile object used a width larger than the grid track, expanding intrinsic layout while body overflow was hidden. Fixed by constraining the object to the available track and zeroing grid-item minimum width. Final measurement: `scrollWidth === clientWidth === 390`.
3. **P2 — maker Preview inherited a wide min-content size.** The first mobile Preview clipped dedication and disclosure copy. Fixed by allowing Preview grid children to shrink and enabling safe wrapping. Final measurement: no horizontal overflow.

## Functional and accessibility evidence

- Tested arrival, Open, timed opening, Skip, settled anatomy selection, Not now, Decline, Return permission controls, and local Return storage.
- Tested sample source, deterministic reading, complete disposition, expression choice, compilation, IndexedDB save, exact Preview, and separate owner/recipient downloads.
- Tested keyboard-semantic controls, named switches, form labels, disabled gates, live status copy, focus-visible treatment, reduced-motion behavior, sound-off default, and no-WebGL fallback content.
- Browser console contained no application errors. Lit's development-mode advisory was present only in the development bundle.

## Follow-up polish

- P3: add scanned paper normal/roughness maps for still richer fiber and deckled-edge behavior.
- P3: compose a fuller sonic profile after the opening rhythm is evaluated with people.

**final result: passed**
