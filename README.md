# Pinecœne

This repository currently contains the earlier fixture-based Curated Studio/public demonstration. A new internal product direction is documented but **not yet implemented**: Pinecœne will become a downstream instrument that receives validated structured candidate, admitted, or recipient-projection data; renders its standing; supports Expression; and creates governed Encounters without reading or admitting meaning itself.

Start with:

- [`docs/product/pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md`](docs/product/pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md) — self-contained product description and Œdit boundary;
- [`Pinecœne System Specification v0.8.md`](<Pinecœne System Specification v0.8.md>) — focused system amendment;
- [`docs/product/pinecoene-instrument-demonstrator-build-spec-v0.2.md`](docs/product/pinecoene-instrument-demonstrator-build-spec-v0.2.md) — candidate local build target;
- [`docs/product/pinecoene-instrument-demonstrator-next-steps-v0.2.md`](docs/product/pinecoene-instrument-demonstrator-next-steps-v0.2.md) — current plan and team handoff.

These documents authorize no implementation or deployment.

## Recorded current application

The checked-in application demonstrates:

`Studio → Genesis → Becoming → Fold → Expression → Offering → Locket → Encounter → Return → Successor`

Its active contract path is fixture-specific and remains legacy/calibration input for the next architecture. It has no accounts, cloud custody, arbitrary upload, live AI Reader, remote delivery, or live Œdit integration. Saved studies, Offerings, Returns, dispositions, and successor markers are browser-local simulations.

## Checked-in routes

- `/` public introduction
- `/approach`, `/science`, `/master`, `/theorem` public reading routes with route-specific indexing rules
- `/sketches` fixture shelf
- `/sketches/pcn-0001` and `/sketches/pcn-0002` owner instruments
- `/use` guided local fixture study
- `/w/[offeringId]` recipient Encounter
- `/sketches/vital-sign` experimental Presence study

Legacy paths redirect: `/studio` → `/sketches`, `/make` → `/use`, and `/vital-sign` → `/sketches/vital-sign`. Indexing is selective; `noindex` is not an access-control boundary.

## Development

```bash
pnpm install
pnpm dev
```

Verification:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

The intended runtime is Node.js 20–24. Deployment is linked to the `pinecoene` Vercel project.

## Design and protocol sources

- `docs/product/README.md` — documentation authority and lineage map
- `docs/product/pinecoene-product-oedit-interface-and-instrument-demonstrator-v0.1.md` — current internal product direction
- `Pinecœne System Specification v0.8.md` — current boundary amendment
- `Pinecœne Curated Studio V1 Implementation Specification v0.1.md`
- `Pinecœne System Specification v0.6.md` — underlying medium specification
- `Pinecœne Design and Development Approach v0.3.md`
- `design-qa.md`

Raw local concept exports are deliberately excluded from the public repository. Exact implementation keyframes are preserved in `evidence/design/`; the archival Locket material reference remains in `public/images/`.
