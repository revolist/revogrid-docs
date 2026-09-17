# Infinity Scroll scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/infinity-scroll`. Catalog ID: `infinity-scroll`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload restores a simulated remote directory of 1,000 rows, 50-row chunks, a 150-row buffer, and preload threshold 0.75. This is a bundled local loader with remote-shaped requests, not a live external service. Pinned status and support records are separate from those 1,000 data records.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Initially Loaded 1,000 matching records. Scrolled three pages: Fetching rows 101–150 appeared, then Remote User 0109 through 0112 were visible; pinned status and support remained. End-of-dataset, sorting, filtering and export were not exercised.

## Scenarios

### INFINITY-001 · P0 · First page and pinned records

1. Open route → Initializing/Fetching status resolves to `Loaded 1,000 matching records`.
2. Inspect first data row → ID 1, Remote User 0001, user1@example.com render together.
3. Inspect pinned regions → top says Pinned status / Remote rows load below and bottom says Pinned support / Always visible while scrolling.

Visual checks and automation notes: Wait for the first data record rather than merely a grid container. Pinned rows are not part of a 1,000-record count.

### INFINITY-002 · P0 · Load beyond first chunk and revisit

1. Scroll down far enough to pass data record 50 → records from later chunks appear and status eventually returns to Loaded.
2. Continue to the final records → ID 1000 / Remote User 1000 appears; no phantom 1001 data row is created.
3. Scroll back to the top → ID 1 returns without duplicates or stale recycled text.
4. Throughout the traversal → both pinned records remain visible at their edges.

Visual checks and automation notes: Assert distinct identities and continuity in the visible region. Do not require all 1,000 records mounted simultaneously or expect a fetch status to remain visible long enough for an exact screenshot.

### INFINITY-003 · P0 · Remote sorting replaces buffered results

1. After scrolling into later chunks, sort ID descending → first data record becomes 1000.
2. Scroll into a later page → IDs continue descending without old ascending chunks mixed in.
3. Sort ID ascending → first data record is 1 and later chunks follow ascending order.
4. Pinned status and support → remain pinned and are not sorted into the data.

Visual checks and automation notes: Reacquire visible rows after each sort; index-based cached locators can point at a different record. Count should remain 1,000 matching records.

### INFINITY-004 · P1 · Remote filter and recovery

1. Open Region header filter, select Europe only, and apply → all returned data records are Europe; Loaded status reports matching total.
2. Scroll past a chunk boundary → subsequently loaded rows also satisfy Europe.
3. Clear Region filter → full 1,000-record total and mixed regions return.
4. Filter Email to an impossible string → no data matches, pinned rows remain, and clearing restores the directory.

Visual checks and automation notes: Compare reported matching total to the seeded loader predicate rather than rendered row count. No-match recovery must not become an endless Fetching state.

### INFINITY-005 · P1 · Export all is independent of loaded window

1. Fresh reload and remain at first chunk → click Export all to Excel.
2. While preparing → button is disabled and says Preparing export…; completion restores the normal button.
3. Inspect infinity-scroll.xlsx, sheet Infinity Scroll → all 1,000 data records are exported, including Remote User 1000, not just buffered rows; status says Exported 1000 rows.
4. Repeat after a filter → use export implementation as the oracle: exportAll receives the full demo rows, so expect all records rather than only current matches.

Visual checks and automation notes: Use a download listener before clicking, verify readable XLSX and row identities, and exclude pinned display records unless export implementation deliberately adds them.

## E2E readiness and visual acceptance

Target `.infinity-grid`, `.infinity-status`, Export all to Excel, and ID/name identities. Automation must observe public source/loader outcomes without requiring an HTTP request to a server that this demo does not use.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Infinity source tests](../../../../revogrid-demos/pro-infinity-scroll/tests/infinity-scroll.test.mjs) cover loader logic; buffering, scrolling and docs layout still need browser coverage.

References: [route](../../../../demo/infinity-scroll.md), [view](../../../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.vue), [loader and fixtures](../../../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.shared.ts), [export](../../../../revogrid-demos/pro-infinity-scroll/src/infinity-scroll.export.ts).
