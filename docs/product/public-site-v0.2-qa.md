# Pinecœne Public Site v0.2 — QA Evidence

Date: 2026-08-27

## Sources and standing

- Received proposal SHA-256: `b098b370c9c9a13756705023bd384a446a48eb37ce3d188a9ec8159258013671`
- Repository copy verified byte-identical by unit test.
- PCN-0001 and PCN-0002 manifests, compiler contracts, deterministic hashes, and IndexedDB schema were not changed.
- Master and Theorem remain proposal-derived, non-canonical, candidate, unsealed, linked, and noindex.
- The Thin Fold remains owed with no fixture, geometry, or result.

## Automated gates

- ESLint: pass
- Strict TypeScript: pass
- Vitest: 3 files, 13 tests passed
- Production Next.js build: pass; 15 routes generated
- Playwright: 33/33 passed across Chromium, desktop WebKit, and mobile WebKit
- Full lifecycle: fixture → Admission → Recognition → Becoming → Offering → Locket → Return → Successor → Lineage
- Accessibility: no serious or critical Axe violations on the five indexable public routes
- Responsive: no horizontal overflow across the primary public, sketch, recipient, and Vital Sign routes at 390×844
- Redirects: exact 301 status and query preservation verified
- Selective indexing: metadata, headers, robots, and sitemap verified together

## Visual keyframes

- `evidence/qa/public-site-v02-bet-desktop.png`
- `evidence/qa/public-site-v02-bet-mobile.png`
- `evidence/qa/public-site-v02-science-desktop.png`
- `evidence/qa/public-site-v02-sketches-desktop.png`
- `evidence/qa/public-site-v02-sketches-mobile.png`
- `evidence/qa/public-site-v02-record-desktop.png`
- `evidence/qa/public-site-v02-record-mobile.png`
- `evidence/qa/public-site-v02-becoming-desktop.png`
- `evidence/qa/public-site-v02-offering-desktop.png`

Visual inspection confirmed:

- the first viewport is language-led and contains no Fold renderer;
- the current PCN-0002 study appears only after the thesis and loads 3D near the viewport;
- public reading and instrument modes are visually distinct but materially related;
- the two canonical forms remain materially different;
- mobile instruments use the existing task-focused bottom-sheet composition;
- standing, source, OPEN, candidate, fixture, local simulation, and owed-state labels remain legible.

## Release gates still required after deployment

- Vercel Preview must match the exact Git SHA.
- Hosted Preview must pass the same route, header, lifecycle, and browser checks.
- Production promotion must use the exact verified SHA and retain the prior deployment as rollback.
- Both ASCII and IDN domain families must resolve to the promoted deployment with canonical redirects intact.
