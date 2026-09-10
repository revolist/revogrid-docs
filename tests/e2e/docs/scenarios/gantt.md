# Gantt Chart JS: test scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

**Route:** `/demo/gantt`

The docs embeds the Launch SaaS Product showcase, with 18 seed tasks, summary hierarchy, dependencies, assignments and milestones. The docs hides `.gantt-showcase-visual-controls`: Critical path and Baselines checkboxes from the standalone example are not part of the docs UI. Fit / Week / Month remain visible, with Week selected initially. Critical path starts enabled; the Vue component overrides baseline visibility to false.

## Review evidence and execution contract

- Reviewed on **2026-09-08**, docs revision `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing uncommitted theme changes in `DemoNavigation.vue` and `style.scss` were present and were not changed by this review.
- Local target: `http://127.0.0.1:4173`. Browser evidence is recorded below; a scenario marked **source-derived** has not been executed merely because its initial page was opened.
- Start each independent case in a fresh browser context and reload its route. Use fixed viewport/theme pairs for repeatable checks. The central review records baseline screenshots for every route at 1440×900/dark and 1280×720/light; use the central evidence matrix for narrow-screen inspection coverage. Do not share browser storage or modified fixtures between tests.
- Await the specific visible grid, its first real row/bar/event, and completion of filtering before interacting. Scope selectors to this demo; use stable task/event IDs, never assume a virtual DOM row index identifies a record after scrolling or filtering. Collect page errors and failed asset loads throughout.

## Browser verification

Baseline screenshot coverage also includes **1440×900/dark and 1280×720/light** for this route, as recorded by the central reviewer. Baseline inspection does not imply that every interaction below ran at both settings; narrow-screen evidence is tracked centrally.

Central reviewer opened and inspected screenshots at **1280×720, light theme** on 2026-09-08. The current Launch SaaS Product 18-task fixture was visible. Test Plan completion checkbox was toggled off and back on (original checked). Collapsing Launch SaaS Product removed child QA while independent DevOps and IaC remained. Editing, creation and move/resize were not executed; baseline light/dark screenshots are reviewed, while detailed interaction combinations remain future coverage. The live dev server experienced unrelated HMR activity during the wider review; observations describe that running working tree.

## Source and existing coverage

- [Docs host](../../../../demo/gantt.md), [showcase component](../../../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/gantt.vue).
- [Showcase fixture/config](../../../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-data.ts), [columns](../../../../revogrid-demos/pro-advanced-gantt/src/examples/showcase/data/gantt-showcase-columns.ts).

The [package E2E](../../../../revogrid-demos/pro-advanced-gantt/tests/e2e/feature.spec.ts) includes showcase mount and screenshot checks plus other examples. Docs suite currently verifies this route's shared shell only; the detailed planning Gantt check targets a different fixture/configuration.

## Scenarios

### GANTT-01 — Mount the actual docs showcase (P0)

**Evidence:** Executed initial screenshot review at 1280×720/light; current SaaS fixture visible. Exact full task-model count and every marker position remain source-derived.

**Setup/reset:** Fresh /demo/gantt.

1. Wait for dynamically imported GanttPlugin and first task bar ⇒ task table and timeline both render; Launch SaaS Product, Backend Setup, Design and Development are fixture identities.
2. Inspect hierarchy, date headers, progress bars and assignment cells ⇒ visible rows correspond to their timeline bars; Project start and Launch marker lines appear when their dates are in view.
3. Inspect docs toolbar ⇒ standalone Critical path/Baselines controls are hidden, while built-in task interactions remain available.

**Visual checks:** Task names/tags must not overlap indentation or icons; summary and milestone shapes must be distinguishable from ordinary bars; no timeline draws over pinned table.

**Automation/readiness:** Wait for .gantt-showcase-grid and .gantt-bar, not only revo-grid presence: plugin is imported asynchronously in onMounted. Model seed is 18 tasks; add-task pseudo-row is not a task.

### GANTT-02 — Collapse and restore hierarchy (P0)

**Evidence:** Executed Launch SaaS Product collapse: QA disappeared and independent DevOps/IaC remained. Re-expansion and QA-only branch assertions remain source-derived.

**Setup/reset:** Fresh load; Launch SaaS Product expanded.

1. Collapse Launch SaaS Product using its tree toggle ⇒ its descendant table rows and matching bars disappear; independent DevOps and Security roots remain.
2. Expand it ⇒ descendants return in correct order, with original names/dates/dependency links.
3. Collapse/expand QA branch ⇒ Test Plan, Unit Tests, Integration Tests and Acceptance Test follow QA visibility without changing other branches.

**Visual checks:** Table and timeline row heights stay synchronized; collapsed rows leave no ghost bars or dependency endpoints on unrelated records.

**Automation/readiness:** Locate parent by stable ID launch/qa or its task cell, then scope its actual toggle. Assert visible IDs and model total unchanged.

### GANTT-03 — Task editor save and cancel (P0)

**Evidence:** Executed in the docs host: double-clicking the Design bar opened its task editor, saving `Design QA review` updated the visible bar, and Escape discarded a later unsaved name.

**Setup/reset:** Fresh load; target leaf Design (id design).

1. Open Design task editor via bar/task edit affordance ⇒ editor presents that task, not its parent.
2. Rename to `Design QA review` and save ⇒ table and bar label update for design, with hierarchy and task count retained.
3. Reopen editor, type `Discard this name`, cancel/Escape ⇒ last saved name remains.
4. Reload ⇒ Design seed label returns.

**Visual checks:** Editor fits viewport, fields/buttons are reachable, focus returns to grid; label does not overwrite tag or progress text.

**Automation/readiness:** Use actual editor role/labels discovered at implementation time; verify ID before save. Scope duplicate Design text to task row, not badge.

### GANTT-04 — Move and resize preserve a coherent schedule (P0)

**Evidence:** Executed in the docs host: Design moved horizontally, then its actual visible end handle resized after the timeline scrolled it into view. The initial failed attempt was an offscreen-handle test gesture, not a demo defect.

**Setup/reset:** Fresh load; locate Design and capture current canonical start/end/duration and connected tasks.

1. Drag Design bar to a later valid working day ⇒ its start/end change coherently, maintaining duration for move; table dates agree with bar.
2. Resize end handle to later valid working time ⇒ end/duration change, start remains fixed.
3. Observe dependencies after each commit ⇒ endpoints follow their tasks; any schedule recalculation is reflected consistently in table and timeline.
4. Reload ⇒ original fixture restores.

**Visual checks:** No duplicate preview after drop; bar remains on same task row. Non-working shading and critical path remain distinguishable; milestone diamonds are not rendered as negative-width tasks.

**Automation/readiness:** Use calendar-aware expected dates from configured calendar, not naive weekend-inclusive arithmetic. Capture stable task IDs and actual result events; compare against visible table. Do not require every dependent date to remain unchanged.

### GANTT-05 — Completion control updates the correct row (P1)

**Evidence:** Executed Test Plan completion off/on, restoring its original checked state. Unfinished-task and changed-row-position variants remain source-derived.

**Setup/reset:** Fresh load; locate an unfinished leaf and a completed seed such as IaC.

1. Toggle the unfinished leaf completion control ⇒ its completion presentation updates in table and task row.
2. Toggle it back ⇒ original incomplete appearance returns; unrelated completed IaC remains completed.
3. Collapse another hierarchy branch, then repeat on a visible task ⇒ correct record changes despite changed visual row positions.

**Visual checks:** Completion state is visible without relying only on color; no checkbox or status mark appears as editable on the add-task pseudo-row.

**Automation/readiness:** This is a RowStatusPlugin done field, not planning RowSelectPlugin selection. Assert done/data-done contract and do not assume it changes workflowStatus or percentDone unless confirmed by plugin source.

### GANTT-06 — Create a task without corrupting the hierarchy (P1)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Fresh load; scroll to built-in add-task row (taskCreateRow=true).

1. Activate add-task row and enter `QA created task` using its visible creation flow ⇒ one real task is added with a usable schedule.
2. Confirm new task in table and timeline ⇒ no duplicate pseudo-row/data record; existing seed tasks retain identity.
3. Reload ⇒ created task is gone and initial fixture returns.

**Visual checks:** Creation row remains discoverable at end of current view; new row aligns with bar and no zero-height/blank task is inserted.

**Automation/readiness:** Count real task IDs, excluding isGanttAddTaskRow pseudo-row. This case is source-derived until actual creation flow is inspected; do not invent an external Add button.

### GANTT-07 — Scroll and resize without visual artifacts (P1)

**Evidence:** Baseline light/dark screenshots inspected. Column-resize and combined scroll/drawer sequence remain source-derived; narrow-screen evidence is recorded centrally.

**Setup/reset:** Fresh load; repeat desktop and mobile plus light/dark.

1. Scroll task list vertically, then timeline horizontally to later dates ⇒ table identity stays paired with each bar; date header tracks horizontal viewport.
2. Resize a table column using header boundary ⇒ cells/header resize together and timeline remains reachable.
3. Return both scroll positions to start ⇒ same initial records appear with no missing bars; open/close Code drawer ⇒ workspace remains mounted.

**Visual checks:** No document horizontal overflow, clipped context menus or bars bleeding through pinned columns; markers stay attached to correct dates. Assess mobile via internal scroll instead of demanding full timeline fit.

**Automation/readiness:** Capture screenshot after render settles and compare pinned/table/timeline bounding boxes. Existing screenshot byte-size assertions do not establish visual correctness.
