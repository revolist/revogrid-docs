# Grid at Scale scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/grid-at-scale`. Catalog ID: `grid-at-scale`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Use a fresh browser context or remove only `revogrid:grid-at-scale:workspace:v1` before first navigation. Default is 10,000 rows × 100 columns. The demo has persisted view settings and generated data, so capture the chosen row's identity and initial value instead of relying on a random employee name. Reset view restores the default dataset and theme. Wait for the loading overlay to disappear before interacting.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Selected 1,000 rows × 100 columns and saw the metric update; clicked Save view and Reset view. Saved-state persistence across reload, date editing, and deep virtualization were not exercised.

## Scenarios

### SCALE-001 · P0 · Default dataset completes loading

1. Open the route with no saved workspace → Data Source selects `10,000 rows × 100 columns`; grid and performance panel render.
2. Observe data preparation → percentage/loading feedback is shown during generation and removed when ready; dataset selector is usable again.
3. Scroll vertically down several viewports and back → different employee records render and the original first record returns; no persistent blank strip remains.

Visual checks and automation notes: Check 36px rows, grouped month headers, company/avatar rendering and scroll alignment. Performance numbers are live browser measurements; require a valid displayed measurement or documented unavailable state, never a fixed millisecond/FPS value.

### SCALE-002 · P0 · Dataset shape changes both axes

1. Select `100 rows × 1,000 columns` → loading resolves and data source uses 100 records with 1,000 columns.
2. Scroll horizontally well beyond the initial month headers → later month columns render with matching body cells and no duplicate headers.
3. Select `1,000 rows × 100 columns` → the previous thousand-column shape is replaced by 100 columns and 1,000 rows.
4. Return to `10,000 rows × 100 columns` → original shape restores and grid remains editable.

Visual checks and automation notes: Use the visible select labels and public source/column data for total-size assertions. Rendered cell counts are intentionally smaller. Run the million-row option separately as P1 resource-intensive coverage; do not make a low-memory browser crash look like a normal loading pass.

### SCALE-003 · P0 · Save, reload, and reset view

1. Select `1,000 rows × 100 columns`, choose a different Theme option, and resize a visible column → status becomes Unsaved changes for tracked edits.
2. Click Save view → status says Saved locally.
3. Reload → selected dataset/theme and saved column dimensions restore.
4. Click Reset view → status says View reset, 10,000-row default returns, and saved view is cleared.
5. Reload again → previous saved size/theme do not reappear.

Visual checks and automation notes: Assert selected option values and measured resized width with a small tolerance; do not compare styles during loading. Inspect hr-workspace.ts for the exact persisted fields before extending this case to filters, sorting, pinning, or order.

### SCALE-004 · P1 · Editing and sorting target the same record

1. On the 1,000-row option choose a visible editable employee field, record its original value and row identity, then double-click → correct editor opens.
2. Commit `E2E employee` into a text field → only that record changes; Escape from a subsequent draft leaves the committed value intact.
3. Sort a sortable visible header ascending then descending → identity and edited value travel together.
4. Hard reload after removing saved workspace → generated fixture state is restored; do not expect Save view to persist employee edits.

Visual checks and automation notes: Use column properties from hr.columns.ts; avoid date/dropdown fields for the generic text case. Exercise the dedicated date workflow separately using the existing hr-date.spec.ts as a reference.

### SCALE-005 · P1 · Metric help and themes remain usable

1. Focus an About metric help button → its associated tooltip explains that specific measurement.
2. Switch between the available Theme options → grid text, headers, editors, and selection remain visible.
3. At narrow width, reach both selectors and Save view / Reset view → controls remain usable while large data scrolls inside its own region.

Visual checks and automation notes: Do not require a particular tooltip hover animation duration or exact performance number. Capture screenshots only after loading completes.

### SCALE-006 · P0 · Joined date editor preserves storage/display formats

Precondition: fresh default data, no sorting or saved workspace, third source record visible. This concrete flow adapts the existing standalone hr-date.spec.ts to the docs route.

1. Locate third record Joined column (prop joined) → displayed value is 3/3/2020.
2. Double-click → `.duet-date__input` contains 3/3/2020 and placeholder M/D/YYYY.
3. Choose calendar button 4 March → grid displays 3/4/2020.
4. Reopen editor, enter 12/25/2021, press Tab → cell displays 12/25/2021 while source joined stores 2021-12-25.
5. Reopen once more → editor still displays 12/25/2021, not an ISO string or shifted day. Hard reload to restore seed.

Visual checks and automation notes: calendar must fit over the grid without clipping; display, input and storage must refer to the same date. Use row identity/prop rather than column index if saved layout is not cleared. This date scenario was source-reviewed, not executed during the visual pass.
## E2E readiness and visual acceptance

Concrete targets: `.hr-scale-grid`, `.hr-toolbar select`, `.hr-loading-overlay`, `.hr-workspace-status`, and `Browser performance metrics`. Separate dataset readiness from layout assertions. Save/restore tests need isolated local storage.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Standalone date E2E](../../../../revogrid-demos/core-free/tests/e2e/hr-date.spec.ts) and [performance E2E](../../../../revogrid-demos/tests/e2e/core-performance.spec.ts) exist; they should be reviewed for reuse, not treated as docs-route evidence.

References: [route](../../../../demo/grid-at-scale.md), [Vue view](../../../../revogrid-demos/core-free/src/hr.vue), [sizes and generator](../../../../revogrid-demos/core-free/src/sys-data/hr.data.ts), [workspace persistence](../../../../revogrid-demos/core-free/src/hr-workspace.ts), [column definitions](../../../../revogrid-demos/core-free/src/sys-data/hr.columns.ts).
