# 10K-Task Gantt: test scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

**Route:** `/demo/gantt-big-data`

This example is a bare Gantt grid with one task-name column, generated tasks, dependencies and an every-day UTC calendar. There is no custom search, dataset chooser, reset, performance panel or zoom toolbar in its Vue template. The fixture contains **10,000 tasks and 19,796 dependencies**, spanning **2026-01-01 to 2026-03-31**, using **day-week** zoom. Reload resets plugin edits.

## Review evidence and execution contract

- Reviewed on **2026-09-08**, docs revision `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing uncommitted theme changes in `DemoNavigation.vue` and `style.scss` were present and were not changed by this review.
- Local target: `http://127.0.0.1:4173`. Browser evidence is recorded below; a scenario marked **source-derived** has not been executed merely because its initial page was opened.
- Start each independent case in a fresh browser context and reload its route. Use fixed viewport/theme pairs for repeatable checks. The central review records baseline screenshots for every route at 1440×900/dark and 1280×720/light; use the central evidence matrix for narrow-screen inspection coverage. Do not share browser storage or modified fixtures between tests.
- Await the specific visible grid, its first real row/bar/event, and completion of filtering before interacting. Scope selectors to this demo; use stable task/event IDs, never assume a virtual DOM row index identifies a record after scrolling or filtering. Collect page errors and failed asset loads throughout.

## Browser verification

Baseline screenshot coverage also includes **1440×900/dark and 1280×720/light** for this route, as recorded by the central reviewer. Baseline inspection does not imply that every interaction below ran at both settings; narrow-screen evidence is tracked centrally.

Central reviewer opened and inspected the initial screenshot at **1280×720, light theme** on 2026-09-08. Initial Task 1 and subsequent task rows, bars and dependency lines were visible. An initial vertical scrolling attempt was interrupted by concurrent Vite/HMR activity that left a blank view. A later successful retest at **1440×900/dark** scrolled four pages to **Task 225–246**, with names and bars aligned. This verifies that traversal subset and recovery after the development-server interruption; it does not establish bottom-of-dataset, return-to-top or editing behavior, which remain unexecuted. The initial transient is not a confirmed Gantt product defect.

## Source and existing coverage

- [Docs host](../../../../demo/gantt-big-data.md), [Vue component](../../../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data.vue), [generated fixture/config](../../../../revogrid-demos/pro-advanced-gantt/src/examples/big-data/gantt-big-data-data.ts).

The [package E2E](../../../../revogrid-demos/pro-advanced-gantt/tests/e2e/feature.spec.ts) has a mount/data-contract test for this multi-example host. [Docs suite](../demo-experience.spec.ts) currently checks shared-shell mount. Neither establishes complete scrolling/editing behavior inside the docs shell.

## Scenarios

### GANTT10K-01 — Initial dataset and visible timeline (P0)

**Evidence:** Executed initial screenshot: Task 1 and subsequent rows, bars and dependencies rendered. Exact 10,000/19,796 model counts remain code-derived.

**Setup/reset:** Fresh route, desktop baseline.

1. Wait for .gantt-big-data-grid and first task row/bar ⇒ `Task 1` appears with matching timeline content.
2. Inspect model through documented grid/plugin data access ⇒ exactly 10,000 real tasks and 19,796 dependencies; the DOM contains only the rendered subset.
3. Inspect date headers ⇒ day/week labels are ordered, and fixture is anchored in 2026 rather than the review date.

**Visual checks:** Name column is readable and timeline occupies remaining width; bars connect to corresponding rows; no loading overlay remains.

**Automation/readiness:** Use grid class plus visible bar readiness. Source task count and mounted row count are different contracts; avoid asserting all rows exist in DOM.

### GANTT10K-02 — Vertical scrolling reaches distant records (P0)

**Evidence:** Initial attempt was interrupted by HMR; later retest at 1440×900/dark successfully scrolled four pages to Task 225–246 with aligned names/bars. Mid-list traversal subset verified; bottom-of-dataset, return-to-top and repeated round trips remain unexecuted.

**Setup/reset:** Reload and start at top.

1. Scroll down several viewport heights ⇒ first visible task identity changes and bars/dependency segments track the new rows.
2. Scroll to the bottom ⇒ `Task 10,000` becomes reachable with corresponding timeline row; scroll back to top ⇒ `Task 1` returns.
3. Repeat down/up twice ⇒ no repeated/missing row labels, frozen viewport or accumulating ghost bars.

**Visual checks:** Review fast-scroll settled frames for white holes, mismatched task/bar rows, clipped final row and pinned-name alignment.

**Automation/readiness:** Capture visible stable IDs before and after scroll. For 10K data, incremental wheel alone is slow; use real scroll thumb/keyboard navigation and assert resulting IDs. Wait on changed rendered content, not arbitrary fixed sleeps.

### GANTT10K-03 — Horizontal timeline range and return (P0)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload. Task 1 starts Jan 1 and ends Jan 2 2026; later tasks cover Q1 2026.

1. Scroll timeline right toward March 2026 ⇒ headers advance monotonically through weeks and months; table column remains pinned.
2. Scroll vertically to a task in that range ⇒ its bar becomes visible once both row and date are in view. An early task with an offscreen date may correctly have no visible bar.
3. Scroll left to origin ⇒ original headers and first task bar return without stale far-future labels.

**Visual checks:** Header/body horizontal positions agree; no enormous DOM-wide blank area overlays the table. Dependencies crossing a viewport boundary should clip cleanly rather than stretch across unrelated rows.

**Automation/readiness:** Use horizontal viewport/scrollbar inside grid. Future performance checks should assert bounded rendered columns/segments relative to viewport, not enforce a guessed fixed FPS or total screenshot width.

### GANTT10K-04 — Inspect and edit a virtualized task (P1)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Fresh load; choose Task 1.

1. Open first task using the visible task editor affordance ⇒ correct task identity and dates appear.
2. Rename to `QA virtual task` and save ⇒ table updates once; scroll away and back ⇒ name persists for same ID.
3. Cancel a second rename ⇒ prior committed name remains; reload ⇒ seed label returns.

**Visual checks:** Editor stays inside viewport and does not inherit giant timeline dimensions; selected row is not confused with a recycled DOM row.

**Automation/readiness:** The Vue component supplies GanttPlugin without custom edit handlers; this is a proposed plugin integration check, not an already-observed guarantee. Resolve editor affordance from actual UI before coding test.

### GANTT10K-05 — Responsive/theme and repeated navigation (P1)

**Evidence:** Baseline screenshots inspected at 1440×900/dark and 1280×720/light. The combined Code-drawer, scrolling and repeated-navigation sequence below remains source-derived; narrow-screen evidence is recorded centrally.

**Setup/reset:** Independent reload for desktop/light, desktop/dark and 390×844.

1. Open this demo from another docs route ⇒ dataset mounts once and does not retain the prior demo layout.
2. Scroll vertically/horizontally and open/close Code drawer ⇒ date headers, task list and scroll controls remain usable.
3. Navigate away and return twice ⇒ correct first task/fixture returns; no duplicated grid or lingering overlay.

**Visual checks:** Check row separation, dependency contrast and header readability in dark mode; narrow layouts may scroll within grid but should not overflow the whole page.

**Automation/readiness:** Record screenshot and actual viewport/theme per run. Collect page errors; use condition-based readiness and broad timeouts for cold load. Do not claim performance success from an image byte-length check.
