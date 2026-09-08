# Financial pivot scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/pivot` · canonical ID: `pivot` · live implementation: Vue.

## Evidence and reproducible setup

Reviewed 2026-09-08 at docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`, including existing dirty theme files `DemoNavigation.vue` and `style.scss` without changing them. The coordinating agent opened this route in light mode at 1280×720, captured initial/changed screenshots, switched all three presets and visually confirmed every total in the oracle table below. Hide fields/Configure and Expand workspace/Exit expanded workspace toggles were exercised. Sales Overview Discount Band was changed to Medium: Sales $141,041,425.25, Profit $51,791,074.03 and Units Sold 776,029 appeared; High was restored. This partially executes PIV-001/002 (preset selection and totals), PIV-003 (visibility toggles), PIV-004 (Discount Band change/restore) and PIV-009 (expand/exit). It does not prove every axis/filter/geometry assertion, Product filter composition, reload persistence or mobile behavior. Remaining steps are **code-derived, not executed**. Initial/changed screenshots were viewed in the browser-tool conversation only; no image files were persisted. Desktop-dark and narrow-light checks remain future coverage unless the central README matrix records them.

Use `http://127.0.0.1:4173/demo/pivot` in a fresh browser context. Before each independent case clear only `revogrid:pivot-showcase:v1` and `revogrid:pivot-showcase:preset:v1`, then reload. Switching back to Sales Overview is not a reliable reset if it is already the active tab, because active-tab clicks do not recreate the preset. The generated source is deterministic: 3,600 rows covering years 2023–2025, twelve months, five countries, four segments and five products. The grid is readonly; aggregation/configuration, not editing source cells, is the primary workflow.

Sources: [docs mount](../../../../demo/pivot.md), [Vue lifecycle and controls](../../../../revogrid-demos/pro-advanced-pivot/src/pivot.vue), [presets, aggregators and plugins](../../../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts), [deterministic dataset](../../../../revogrid-demos/pro-advanced-pivot/src/financial-dataset.ts), [persistence](../../../../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts), [toolbar labels](../../../../revogrid-demos/pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.ts).

## Numerical oracle

These totals were calculated directly from the source fixture with an independent sum on 2026-09-08 and subsequently **matched against the rendered grid by the coordinating agent** for each preset. Compare unrounded numeric values within 0.01 and displayed currency to two decimals. Confirm the target is the overall Grand Total, not a collapsed yearly Period Total.

| Preset / default filter | Included rows | Expected totals across all years |
|---|---:|---|
| Sales Overview / Discount Band High | 900 | Sales $129,319,628.28; Profit $42,766,659.96; Units Sold 750,367 |
| Profitability / Discount Band Medium | 900 | Profit $51,791,074.03; Sales $141,041,425.25; COGS $89,250,351.22 |
| Product Performance / Month December | 300 | Gross Sales $50,345,536.34; Units Sold 256,808; Discounts $2,778,114.04 |

## Cases

### PIV-001 · P0 · Sales preset mounts and totals are correct

Execution: Partially executed: Sales Overview screenshot and all three numerical totals; detailed axis/header assertions are source-derived.

1. Clean storage, open route ⇒ Sales Overview is selected in Financial report presets; desktop shows Hide fields and the field configurator, plus Expand workspace.
2. Inspect row and column axes ⇒ rows Country then Segment; columns Year then Month; values Sales, Profit, Units Sold; filters Product and Discount Band with High selected.
3. Inspect expanded first-level countries and initially collapsed year columns ⇒ years 2023, 2024, 2025 are ordered; Period Total/Year Total reflect configured collapsed/subtotal behavior, not missing month data.
4. Reach overall Grand Total ⇒ results match the sales oracle above. Expand the year groups if needed to expose separate value totals.

Visual: row-axis sort/filter controls fit their headers, currency/number formatting is legible, heatmap does not obscure values, totals are visually distinguishable. Automation: `.financial-pivot-showcase`, `financial-pivot-header`, role tablist Financial report presets, tab Sales Overview, and grid header text; numeric target mapping must be confirmed in browser before selectors are fixed.

### PIV-002 · P0 · Preset switching rebuilds axes, filters and values

Execution: Partially executed: all three preset switches and all numerical totals; complete axis cleanup assertions are source-derived.

1. Clean Sales Overview; click Profitability ⇒ only that tab has `aria-selected=true`; row axes become Segment/Country, values Profit/Sales/COGS, Discount Band filter changes to Medium.
2. Check overall totals ⇒ profitability oracle matches; no Units Sold measure remains from Sales Overview.
3. Click Product Performance ⇒ rows Product/Segment, columns Year/Country, values Gross Sales/Units Sold/Discounts, Month filter December; collapsed groups use Market Total.
4. Check totals against product oracle; click Sales Overview ⇒ original axes/filter/value configuration and sales totals return.

Visual: no residual header groups from prior preset, duplicated configurators or persistent blank grid after deferred preset update. Automation: role tabs with exact names and selected states; wait for changed axis/value headers before reading totals rather than a fixed timeout.

### PIV-003 · P0 · Configure visibility preserves the report

Execution: Partially executed: Hide fields/Configure toggle; cross-preset preservation assertions are source-derived.

1. Clean desktop run; record current filter, axes and a visible numeric value; click Hide fields ⇒ configurator disappears and button becomes Configure; report still has the same data/configuration.
2. Click Configure ⇒ the same fields, axes and selected filter return; numeric value is unchanged.
3. Repeat after switching to Profitability ⇒ toggling does not reset to Sales Overview or clear Medium filter.

Visual: grid widens into available space and remains scrollable; no clipped header after width recalculation. Code sets minimum content width to 920 when fields are shown and 680 when hidden; verify overflow stays inside the report container. Automation: role button matching Hide fields/Configure; confirm actual configurator container from the rendered UI.

### PIV-004 · P0 · Filter changes affect every aggregate and reset cleanly

Execution: Partially executed: Medium numerical totals and High restoration; Product filter combination is source-derived.

1. Clean Sales Overview; open Discount Band selection and replace High with Medium ⇒ selected filter reflects Medium and total Sales becomes $141,041,425.25, Profit $51,791,074.03 and Units Sold 776,029 (same source subset as Profitability despite different axes).
2. Add Product=Apex Suite ⇒ only rows for Apex Suite plus Medium contribute; calculate expected sums from the dataset filtered by both predicates, and compare each visible total to that independent subset.
3. Remove Product restriction and restore High ⇒ exact sales oracle returns, without stale rows or chart selections.

Visual: selected filter chips/options remain readable; menus stay within viewport and close on apply/cancel. Automation: scope repeated filter labels to the field/configurator filter control; menu option labels must be browser-confirmed. Do not use the displayed totals as their own oracle or assume filter applies merely because a checkbox changed.

### PIV-005 · P0 · Field placement and aggregation update the result

Execution: Code-derived; not executed in this review.

1. Clean Sales Overview; in configurator replace the Segment row field with Product ⇒ rows become Country/Product and monetary Grand Totals remain the same because only grouping changed.
2. Change Sales aggregation from sum to avg ⇒ cell values equal arithmetic means of source rows matching their group/column and current High filter, not means of already aggregated child rows.
3. Change Sales to p90 ⇒ for each tested cell sort matching numeric source values and use index `ceil(length×0.9)-1`; empty set gives 0. Validate a nonempty cell with at least two distinct values.
4. Restore sum and original Country/Segment rows ⇒ original totals and row hierarchy return.

Visual: dragged field lands in intended zone with one occurrence; measure label reflects aggregator and values remain formatted as currency. Automation: field names and zone labels require browser confirmation; use accessible field actions when available rather than brittle drag coordinates. Numeric source oracle must include both row/column predicates and active filters.

### PIV-006 · P0 · Expand/collapse grouped rows and columns

Execution: Code-derived; not executed in this review.

1. Clean Sales Overview; collapse Canada ⇒ its Segment children hide; other countries and Grand Total remain unchanged.
2. Expand Canada ⇒ children and numeric values return without duplication.
3. Expand 2023 and a month group ⇒ month sequence follows January–December chronological order, not alphabetic order; Sales/Profit/Units Sold leaf values appear.
4. Collapse the month/year again ⇒ Period Total and Year Total reconcile with sums of that year's source subset; repeated expansion does not double-count totals.

Visual: header rows align with body columns, collapse icons are reachable and do not cover sorting/filter controls, row/column scrolling remains synchronized. Automation: target group by year/country label and its own collapse control; capture before/after screenshots. The preset disables Country/Segment row subtotals, so do not require a subtotal row for every row group.

### PIV-007 · P1 · Chart from a meaningful selected range

Execution: Code-derived; not executed in this review.

1. Clean Sales Overview; expand one year/month to expose numeric measure cells and select a small contiguous range containing at least two row categories.
2. Open the range context menu and choose its chart action ⇒ chart UI opens for the selected pivot values; default type is groupedColumn.
3. Compare displayed category/series labels and values with the selected cells; close the chart ⇒ underlying range and report remain usable.
4. Change a filter, create a fresh chart from a small range ⇒ values reflect the new result, not stale pre-filter data.

Visual: chart and its close control fit available space; labels are readable in dark/light mode, no stale overlay blocks the grid. Automation: chart context action and dialog selectors need browser confirmation. Installed configuration enables PivotChartsPlugin and context menu UI with limits 120 series/2,500 data points; basic coverage stays below these limits. Do not infer an export toolbar merely from the docs description.

### PIV-008 · P0 · Report configuration survives reload

Execution: Code-derived; not executed in this review.

1. Clean load; choose Product Performance, change a filter and one field placement ⇒ wait for report/configuration update.
2. Reload same origin ⇒ Product Performance remains selected; changed fields/filter selection restore and numeric results agree with the pre-reload report.
3. Start a separate clean context ⇒ Sales Overview defaults return, proving tests do not leak state.
4. In an isolated harness set invalid JSON only in the pivot config key and reload ⇒ fallback preset renders without a crash. Set preset key to an unknown ID ⇒ Sales Overview fallback.

Automation: setup/cleanup may manipulate only the two documented storage keys. Do not expect expanded workspace or configurator visibility to persist: these flags are local refs initialized on mount. Persistence errors are caught, so a future storage-denied harness should assert continued usability rather than a user-facing error banner.

### PIV-009 · P1 · Expanded workspace and responsive defaults

Execution: Partially executed: Expand/Exit workspace and changed-state screenshot; responsive/dark and changes while expanded are source-derived.

1. Clean desktop run; click Expand workspace ⇒ report overlays workspace with fixed 8px inset and Exit expanded workspace control; axes, values and current preset remain unchanged.
2. Toggle fields and switch preset while expanded ⇒ controls work; click Exit expanded workspace ⇒ normal docs layout returns with chosen report intact.
3. Fresh load at 390×844 ⇒ configurator starts hidden (Configure label) because width is below 768; open it and use report horizontal scrolling ⇒ all fields/content remain reachable.
4. Repeat desktop/narrow checks in dark mode ⇒ background under the expanded report is opaque enough to read, heatmap and buttons retain contrast.

Visual: no toolbar clipping or overlapping docs navigation, no page-wide horizontal overflow, report scrollbar serves the 680/920 minimum-width content. Automation: run viewport cases serially in isolated contexts; use explicit Exit expanded workspace button, since no Escape-close handler is defined by the wrapper.

### PIV-010 · P1 · Readonly and navigation recovery

Execution: Code-derived; not executed in this review.

1. Clean load; double-click a value and type a disposable string ⇒ no editable source-cell input appears and aggregate does not change.
2. Open Code, inspect Vue/React/JavaScript/Angular source tabs, then close ⇒ live report remains the Vue-mounted docs demo and preserves active configuration.
3. Navigate away and back ⇒ one report header/grid/configurator mounts; restored persisted config remains valid, no duplicate custom-element toolbar.

Automation: assert readonly behavior without mistaking row expansion on double click for editing. Shared docs shell scenarios own source-copy mechanics; this route verifies report continuity.

## Existing coverage and readiness

[Docs E2E](../demo-experience.spec.ts) checks all catalog shells but no pivot interactions. [Standalone pivot E2E](../../../../revogrid-demos/pro-advanced-pivot/tests/e2e/feature.spec.ts) checks mount, Financial report presets tablist, configurator button label toggle, screenshot byte size and absence of browser errors. It does not assert numerical correctness, preset content, filtering, field changes, charts or persistence. Header controls and exact data oracles are ready; field/filter/group/chart targets need browser confirmation. This document describes future tests and adds no implementation or fixes.
