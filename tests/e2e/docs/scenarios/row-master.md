# Row Master scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/row-master`. Catalog ID: `row-master`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload restores 14 initiative records in an expanded tree. Detail buttons are rendered only on leaves: use Warehouse Routing Console, not parent North Star Operations. The main grid is readonly. Opening details creates a 340px master area and simulates an async result after 500ms.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Warehouse Routing Console detail displayed 82%, Sam Rivera, $620K, three milestones, No blocking risks reported this week., Tuesday delivery sync, and notes with three leads. Async close/reopen races and other project panels were not exercised.

## Scenarios

### MASTER-001 · P0 · Tree and details affordances are distinct

1. Open route → North Star Operations, Fulfillment Modernization, and Warehouse Routing Console are visible in hierarchy.
2. Inspect Warehouse Routing Console → owner Sam Rivera, progress 82, budget $620K, timeline Mar–Jul.
3. Inspect controls → parent rows have hierarchy expanders; leaf has button `Open details for Warehouse Routing Console`.

Visual checks and automation notes: Do not write tests targeting Open details for North Star Operations: source deliberately does not create that button. Check hierarchy and leaf button indentation.

### MASTER-002 · P0 · Async detail opens for correct project

1. Click Open details for Warehouse Routing Console → a full-width Master detail panel opens below that leaf.
2. Inspect immediate panel → title is Warehouse Routing Console with 82% progress, Owner: Sam Rivera, Timeline: Mar–Jul and Budget: $620K; loading placeholder may briefly appear.
3. Wait for async detail → Risk says No blocking risks reported this week.; Next review says Tuesday delivery sync; Notes describe completion and assigned leads.
4. Activate the same leaf toggle to close → master region closes and adjacent rows regain normal spacing.

Visual checks and automation notes: Wait for semantic detail text, not a 500ms sleep; a fast run need not catch loading placeholder. Panel must span grid content and not obscure the next row.

### MASTER-003 · P0 · A second detail uses its own data

1. Open Inventory Pulse details → title and owner Priya Shah appear, with 49% progress and $480K budget.
2. Wait for async result → Risk says Delivery quality gates need executive attention.
3. Close then reopen Warehouse Routing Console → its no-blocking-risk text returns; Inventory Pulse data does not leak into it.

Visual checks and automation notes: Scope text to the relevant .row-master-panel; do not count a matching name in its ordinary grid row as proof of detail rendering.

### MASTER-004 · P1 · Close while loading and scroll recycling

1. Open a leaf and immediately close it before loading resolves → after the async delay no detached visible panel reappears.
2. Open another leaf, scroll it out of the viewport then back → panel remains attached to its correct record or is restored consistently by plugin state; no detail is attached to a different row.
3. Collapse the containing Fulfillment Modernization branch → its descendants and their details do not remain orphaned outside the branch.
4. Reopen branch and inspect → hierarchy remains intact with no duplicated data rows.

Visual checks and automation notes: This is a race/lifecycle scenario, not a fixed panel-persistence promise. Exact keep-open policy is plugin-owned; first-run capture should record it while requiring no stale/wrong-row detail.

### MASTER-005 · P1 · Keyboard, readonly and narrow detail layout

1. Focus the leaf details button with keyboard and activate it → same project panel opens.
2. Try editing the main Owner cell → readonly data remains unchanged.
3. At narrow width open details and scroll within the workspace → milestones, team, risk and next-review remain reachable.
4. Switch theme with detail open → labels, progress track and badges remain readable.

Visual checks and automation notes: Focus must remain visible and not disappear into an inert virtual row; compare normal and expanded row spacing. Do not imply form editing inside the static detail panel.

## E2E readiness and visual acceptance

Target `.row-master-grid`, leaf button accessible names, `.row-master-panel`, `[data-master-loading]`, and `[data-master-remote]`. Loading evidence is optional transient UI; final correct-project data is mandatory.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Row-master source tests](../../../../revogrid-demos/pro-row-master/tests/row-master.test.mjs) do not establish async rendering or virtual scroll stability in docs.

References: [route](../../../../demo/row-master.md), [view](../../../../revogrid-demos/pro-row-master/src/row-master.vue), [fixtures and async master template](../../../../revogrid-demos/pro-row-master/src/row-master.shared.ts).
