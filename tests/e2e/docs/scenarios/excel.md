# Collaboration / Excel Workbench scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/excel`. Catalog ID: `excel`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload creates Budget with 40 fixture rows, formula columns and pinned totals. Only Budget tab is rendered in this docs component; do not write scenarios for hidden scenario sheets/import controls merely because helper functions exist. The demo starts an immediate feed update and timers every 1400ms (feed) and 1800ms (presence). Future E2E must install a controllable clock before navigation, permit mount, then freeze/advance deliberately. Without clock control read current values before editing; fixed seed amounts are unsafe.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Saw 40 live rows and changing presence. Edited Avery Stone owner to Avery E2E: Undo count became 1. Undo restored Avery Stone and counts Undo 0 / Redo 1. Numeric recalculation, formula editing, validation, exports and multi-browser collaboration were not tested.

## Scenarios

### EXCEL-001 · P0 · Workbook and formula baseline

1. Open route with controlled timers → Budget tab, Export XLSX, Undo/Redo, formula editor and live collaborators appear.
2. Inspect first row Avery Stone/Marketing → Jan, Feb, Mar, Q1, Target and Variance are associated; formula Q1 is SUM(C1:E1), variance is F1-G1.
3. Calculate expected Q1 from current Jan/Feb/Mar → rendered Q1 equals that sum and Variance equals Q1 minus Target.
4. Select Q1 cell → formula bar shows its formula and cell badge identifies the selected spreadsheet address.

Visual checks and automation notes: There are two Q1 labels (total and readonly trend): identify prop total for formula checks. Do not assume initial Jan128000 survives the immediate feed update.

### EXCEL-002 · P0 · Edit recalculates and undo/redo restores

1. Freeze feed after initialization and record Avery Stone current Jan/Q1/Variance and pinned totals.
2. Change Jan by +1000 and commit → Jan rises1000, Q1 and Variance rise1000, and related pinned aggregates update.
3. Click Undo → all dependent values return to captured baseline and Redo becomes enabled.
4. Click Redo → edited value and recalculated dependents return once; no duplicate history transaction is created.

Visual checks and automation notes: Use current baseline and deltas, not stale seed values. Separate user-edit history from simulated remote feed; assert undo/redo button state as well as result.

### EXCEL-003 · P0 · Invalid and readonly edits do not corrupt formulas

1. Attempt a negative value in an editable currency cell → strict non-negative validation blocks that value and displays available validation feedback.
2. Cancel draft → prior numeric value and dependent formula result remain.
3. Attempt editing readonly trend Q1 column and a pinned summary cell → source value/formula remains unchanged.
4. Enter a valid positive value in the original editable currency cell → normal editing still works after validation failure.

Visual checks and automation notes: Validation message is Enter a non-negative number. Verify resulting numeric data, not only a tooltip. Formula total cells are not globally readonly; do not incorrectly prohibit intentional formula edits.

### EXCEL-004 · P1 · Range copy/paste applies valid cells

1. Select a small range of editable currency cells and copy → clipboard status reflects the operation and copied data corresponds to selection.
2. Paste a known rectangular payload into editable destinations with one invalid negative value → valid cells apply and invalid destination preserves its original value under valid-cells validation resolution.
3. Inspect dependent totals and undo behavior → valid applied changes recalculate consistently and readonly destinations remain unchanged.
4. Clear selection and verify keyboard focus stays within the grid/formula workflow.

Visual checks and automation notes: Use isolated clipboard permissions and a known test payload. Resolve ranges by spreadsheet address after column layout is known; avoid including the similarly labelled readonly trend column unintentionally.

### EXCEL-005 · P1 · Presence and simulated feed

1. With test clock, capture current workbook data and collaborator indicators → initial presence is visible.
2. Advance one feed interval with no local editing → a configured numeric field changes, dependent formulas update and flash/status feedback can appear.
3. Advance a presence interval → collaborator presentation updates without changing local selection or opening an editor.
4. Begin local editing and advance feed → local draft is not overwritten; pause/status behavior follows interaction guard.

Visual checks and automation notes: This is a local simulation, not evidence of networking or multi-browser collaboration. Control time independently from animation screenshots to avoid flaky flashing comparisons.

### EXCEL-006 · P1 · Export current workbook

1. Freeze simulations and make one valid edit → capture changed value and current calculated total.
2. Click Export XLSX with download listener already attached → a valid workbook downloads.
3. Inspect exported workbook → Budget data includes the changed value, full40-row dataset, and configured formulas/totals; not just visible viewport rows.
4. Reopen or parse workbook → no malformed formula references or readonly summary edits have been introduced.

Visual checks and automation notes: Use export configuration to decide formula-vs-value representation; file existence alone is insufficient. Toolbar has no import action in the rendered component.

### EXCEL-007 · P0 · Formula bar commits and retains address after scrolling

Precondition: fresh Budget with feed/presence timers controlled; no sorting, row moves or hidden columns. F1 is the Q1 total for Avery Stone.

1. Select Avery Stone Q1 total (prop total) → formula badge is F1 and formula bar shows =SUM(C1:E1).
2. In the formula bar replace it with =SUM(C1:E1)+1000 and commit Enter → source F1 stores the new formula; displayed total equals current C1+D1+E1+1000 and H1/Variance follows the changed total.
3. Reopen formula bar, type =1, then Escape → committed SUM-plus-1000 formula remains; no canceled draft is applied.
4. Scroll grid down several viewports and horizontally away, then back to first row; reselect F1 → badge still says F1 and formula bar still shows =SUM(C1:E1)+1000, not a recycled row's formula.
5. Select second-row Q1 total F2 → formula bar shows =SUM(C2:E2); return to F1 → edited first-row formula remains attached to Avery Stone.
6. Undo the committed formula change → F1 returns to =SUM(C1:E1) and dependent values recalculate.

Visual checks and automation notes: formula input focus and reference highlights must stay legible while scrolling. Select by owner plus total prop, because a separate readonly trend column also has Q1 label. Controls live under spreadsheet-formula-host; commit/cancel must be tested as user input, not source assignment.
## E2E readiness and visual acceptance

Concrete targets already exist: `spreadsheet-workbench`, `spreadsheet-export`, `spreadsheet-sheet-budget`, `spreadsheet-formula-host`, `spreadsheet-workbook-status`, plus `.spreadsheet-grid`. Deterministic time control is required before asserting amounts, flashes or history counters. Test one user workflow at a time and avoid live simulation racing edits.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Spreadsheet unit tests](../../../../revogrid-demos/pro-excel/tests/unit/spreadsheet/) cover export, presentation, simulation and pinned summaries; current docs shell tests do not prove the workbook editing/history workflow.

References: [route](../../../../demo/excel.md), [Vue view and timers](../../../../revogrid-demos/pro-excel/src/excel.vue), [seed formulas](../../../../revogrid-demos/pro-excel/src/spreadsheet/data.ts), [columns and readonly](../../../../revogrid-demos/pro-excel/src/spreadsheet/workbook.ts), [clipboard policy](../../../../revogrid-demos/pro-excel/src/spreadsheet/config.ts), [feed simulation](../../../../revogrid-demos/pro-excel/src/spreadsheet.feed.ts).
