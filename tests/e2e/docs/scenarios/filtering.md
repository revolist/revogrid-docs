# Advanced Filtering scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/filtering`. Catalog ID: `filtering`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. Automated coverage is recorded below; no demo fixes were added during this review.

Hard reload creates 10,000 deterministic orders with dates relative to the current day and applies High-value Europe initially. Clear All is the unfiltered reset. Freeze a known UTC date in future automation before navigation for relative-date cases. Do not reuse the standalone test's old 1,000-row expected total: current source constant is 10,000.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Initial count was 217 of 10,000. Clear All produced 10,000 of 10,000 and No active filters. Try example populated Lisbon pending and count became 335 of 10,000. These are observed counts at this review, not a replacement for predicate assertions.

## Scenarios

### FILTER-001 · P0 · Default high-value preset is correct

1. Open route and wait for count stabilization → a subset of 10,000 orders displays.
2. Inspect matching records → Region is Europe, Total is between 900 and 2495 inclusive, and Priority is Critical or High.
3. Click Clear All → count reads `10,000 of 10,000 orders`, quick search is empty, and active filter badges disappear.

Visual checks and automation notes: Do not assert a fixed badge count: structured priority filters and hidden filter forms may represent criteria differently. Verify field predicates and user-visible filter feedback.

### FILTER-002 · P0 · Quick search and empty recovery

1. Clear All, then click Try example → searchbox Search all visible columns reads `Lisbon pending` and results narrow.
2. Inspect results against quick-filter matching → Lisbon and pending terms are satisfied across configured visible columns.
3. Replace search with `zzzz-e2e-no-match` → count becomes `0 of 10,000 orders`; no stale order cells remain.
4. Click Clear All → all 10,000 orders return and badges/search clear.

Visual checks and automation notes: Await debounced quick-filter completion through count/source changes. Empty data must preserve headers and toolbar.

### FILTER-003 · P0 · Preset replacement and predicates

1. Click Review queue → every result has status Pending Review or Payment Hold and Total between 250 and 800 inclusive.
2. Click High-value Europe → previous review criteria are replaced with Europe / 900–2495 / Critical-or-High predicates.
3. Clear All → full dataset returns.
4. At a frozen UTC date click Recent expedited → each record is expedited Yes and passes last7Days date filtering.

Visual checks and automation notes: Compare actual record values to independent predicates. Last-seven-days boundaries must follow the registered date operator; use fixtures just inside/outside that operator boundary when implementing tests, not ambiguous wall-clock timestamps.

### FILTER-004 · P1 · Header filters, cascading options, and badges

1. Clear All and open Region selection filter → available values are listed.
2. Keep only Europe and apply → result regions are Europe and filter feedback appears.
3. Open a related categorical filter → cascading dependency information reflects the remaining data rather than stale global options.
4. Remove the Region filter through its badge or header clear action → regions and options recover.

Visual checks and automation notes: Status option counts are supplied as demo counts (200 each) in source; do not require these decorative counts to equal the filtered source cardinality. Actual result count must come from getVisibleSource.

### FILTER-005 · P1 · Readonly and responsive filter surface

1. Double-click an order data cell and type → source does not change because the grid is readonly.
2. Open a Total range filter → range inputs and currency display are legible; apply a narrower valid range and verify its result boundaries.
3. At 390×844 open a filter popup and close with Escape → popup controls are reachable, toolbar is not clipped, and scroll does not move the entire page sideways.

Visual checks and automation notes: Verify genuine readonly behavior with before/after data. Date, slider, expression and structured filters are configured; this suite establishes primary selection/range flows without claiming all filter operator permutations.

## E2E readiness and visual acceptance

Target region `Advanced Filtering: Order Explorer`, `.order-explorer__count`, `Search all visible columns`, preset button names and `.order-explorer__filter-badge`. Poll for semantic data changes, not fixed sleeps; hard reload resets initial preset while Clear All resets only filtering.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Automated docs evidence: [Core/Pro docs suite](../core-pro-scenarios.spec.ts) passed on 2026-09-10 for FILTER-001/002/003 preset, quick-search/no-match recovery, badges and Clear All. [Source tests](../../../../revogrid-demos/pro-filtering/tests/filtering.test.mjs) cover additional configuration.

References: [route](../../../../demo/filtering.md), [view](../../../../revogrid-demos/pro-filtering/src/filtering.vue), [filter configuration](../../../../revogrid-demos/pro-filtering/src/filtering.config.ts), [data](../../../../revogrid-demos/pro-filtering/src/filtering.data.ts).
