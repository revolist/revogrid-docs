# Tree Data scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/tree-data`. Catalog ID: `tree-data`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. Automated coverage is recorded below; no demo fixes were added during this review.

Hard reload restores 26 organization records. Root Product/Maya Chen and Data/Ava Martin are initially expanded, while deeper branches are not all expanded. Sticky parents starts checked. Grid editing is readonly; hierarchy movement, filtering, and selection are separate supported interactions.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Initial view showed six rows. Collapse all left Maya Chen and Ava Martin only. Expand all was clicked and Sticky parents unchecked; complete expanded membership and sticky scroll behavior were not captured.

## Scenarios

### TREE-001 · P0 · Initial hierarchy is recognizable

1. Open route → Team member, Team, Role, Status and Salary headers render with Expand all / Collapse all / Export to Excel / Sticky parents controls.
2. Inspect Maya Chen and Ava Martin → both root records are visible; direct children such as Noah Smith/Platform and James Clark/Analytics are grouped below the correct root.
3. Inspect leaf-depth visibility → do not expect all 26 records expanded until Expand all is used.

Visual checks and automation notes: Check indentation, avatars, parent toggles and status labels. Root expansion state is part of fixture contract, not expandAll=true.

### TREE-002 · P0 · Collapse all then expand all

1. Click Collapse all → only two root data records, Maya Chen and Ava Martin, remain visible.
2. Click Expand all → all 26 source records become eligible for display, including Eva Green under Noah Smith and Emily Rogers under Jack Lewis.
3. Collapse Noah Smith only → its five Platform leaf reports hide while Olivia Lee branch remains.
4. Reopen Noah Smith → the same five reports return with original roles and salary values.

Visual checks and automation notes: Use data/source visibility for total count because only viewport rows mount. Wait for tree animation completion by observing stable visible identities.

### TREE-003 · P0 · Sticky parents can be disabled

1. Expand all and scroll deep into the Product hierarchy → a parent context can stick at the top while descendants scroll.
2. Uncheck Sticky parents → sticky parent presentation disappears; hierarchy records and expansion remain usable.
3. Recheck Sticky parents and repeat scroll → context returns without duplicate data records.

Visual checks and automation notes: StickyCells maxRows is 1. Distinguish a sticky visual copy from a duplicated source record; inspect parent/header overlap and focus behavior.

### TREE-004 · P1 · Selection and ordering preserve hierarchy

1. Expand all and select a visible leaf through its row-selection affordance → that record is visibly selected.
2. Drag that selected leaf using the Team member ordering handle to an allowed position within its current parent → its order changes without changing other records’ data.
3. Collapse and reopen its parent → moved record remains in the same branch and appears once.
4. Hard reload → original source hierarchy/order restores.

Visual checks and automation notes: Use a same-parent reorder as basic gate; cross-parent move policy is delegated to the tree plugin and must be separately confirmed before writing an expected reparenting result. Never infer selection cascade semantics from rowSelect=true.

### TREE-005 · P1 · Readonly, filtering and export

1. Expand all, double-click Eva Green Role and attempt replacement → role remains API engineer.
2. Apply a Team filter for Platform → displayed matching data has the correct team and hierarchy navigation remains usable; clear it → original organization returns.
3. Click Export to Excel → Exporting… prevents duplicate clicks while workbook is prepared; a readable XLSX download completes and normal label returns.
4. Inspect download tree-data.xlsx, sheet Tree Data → Eva Green has indentation depth 2 and numeric salary 154000 with $#,##0 currency format; roots have bold styling and no unintended editor draft appears.

Visual checks and automation notes: Run export from an expanded, unfiltered organization so Eva is present; do not infer collapsed-row or filtered-ancestor export policy from this case. Download must contain valid workbook data, not merely a filename.

## E2E readiness and visual acceptance

Target `.tree-grid`, toolbar button names, Sticky parents checkbox, and fullName/id identities. E2E readiness is high for expand/collapse, readonly and sticky toggles; first browser pass must identify plugin-generated row-order/select controls.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Automated docs evidence: [Core/Pro docs suite](../core-pro-scenarios.spec.ts) passed on 2026-09-10 for TREE-001 authored controls and initial hierarchy, TREE-002/003 collapse-expand and sticky reversal, plus the rendered Excel export control from TREE-005. [Tree source tests](../../../../revogrid-demos/pro-tree-data/tests/tree.test.mjs) cover additional configuration.

References: [route](../../../../demo/tree-data.md), [view](../../../../revogrid-demos/pro-tree-data/src/tree.vue), [hierarchy/configuration](../../../../revogrid-demos/pro-tree-data/src/tree.shared.ts), [export policy](../../../../revogrid-demos/pro-tree-data/src/tree.excel.ts).
