# Project Workspace: test scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

**Route:** `/demo/`

One canonical 100-task model is shared by Grid, Kanban, Gantt, Scheduler and Calendar. The initial view shows **100 of 100 tasks**. The current toolbar has the five view tabs and Full screen; quick search is inside the grid filter-badge bar. There is no current custom More/Reset button, old Filter popover or project selector. Reload is the reset. Changes stay in memory in this demo.

## Review evidence and execution contract

- Reviewed on **2026-09-08**, docs revision `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing uncommitted theme changes in `DemoNavigation.vue` and `style.scss` were present and were not changed by this review.
- Local target: `http://127.0.0.1:4173`. Browser evidence is recorded below; a scenario marked **source-derived** has not been executed merely because its initial page was opened.
- Start each independent case in a fresh browser context and reload its route. Use fixed viewport/theme pairs for repeatable checks. The central review records baseline screenshots for every route at 1440×900/dark and 1280×720/light; use the central evidence matrix for narrow-screen inspection coverage. Do not share browser storage or modified fixtures between tests.
- Await the specific visible grid, its first real row/bar/event, and completion of filtering before interacting. Scope selectors to this demo; use stable task/event IDs, never assume a virtual DOM row index identifies a record after scrolling or filtering. Collect page errors and failed asset loads throughout.

## Browser verification

Baseline screenshot coverage also includes **1440×900/dark and 1280×720/light** for this route, as recorded by the central reviewer. Baseline inspection does not imply that every interaction below ran at both settings; narrow-screen evidence is tracked centrally.

Central browser review executed at **1280×720, dark theme** on 2026-09-08. Root reviewer opened Grid, Kanban, Gantt, Scheduler and Calendar and inspected screenshots. The current fixture shows 100/100 initially; Maya search settles at 20/100. Gantt showed names/bars and Today marker. Resource Scheduler showed five owners. Calendar showed September 2026 Maya events. Code drawer switched to React file `planning.react.tsx`, closed on Escape, returned focus to Code and preserved Maya query.

A concurrent Vite/HMR rebuild at approximately 11:35:50 UTC reset planning state and reported CSS/module reload failures before recovery. Browser observations therefore describe the live development tree, not an immutable clean checkout. Subsequent central review also tested an unmatched query → 0/100, then keyboard clearing → 100/100, and inspected light-mode screenshots at 1440×900, 960×800 and 390×844. Task mutation, drag and fullscreen were not executed; screenshots alone do not establish every mobile interaction.

## Source and existing coverage

- [Docs host](../../../../demo/index.md), [Vue component](../../../../revogrid-demos/pro-advanced-planning/src/planning.vue), [workspace composable](../../../../revogrid-demos/pro-advanced-planning/src/composables/usePlanningWorkspace.ts).
- [Fixtures](../../../../revogrid-demos/pro-advanced-planning/src/data/fixtures.ts), [columns and initial filter](../../../../revogrid-demos/pro-advanced-planning/src/data/columns.ts), [cross-view synchronization](../../../../revogrid-demos/pro-advanced-planning/src/data/sync.ts).
- [Gantt policy](../../../../revogrid-demos/pro-advanced-planning/src/data/gantt.config.ts), [Scheduler/Calendar policy](../../../../revogrid-demos/pro-advanced-planning/src/data/scheduler.config.ts), [Kanban presentation](../../../../revogrid-demos/pro-advanced-planning/src/data/kanban.config.ts).

Existing [docs suite](../demo-experience.spec.ts) covers planning selection, layouts, source drawer and Gantt marker, but several selectors describe an older toolbar (`Search tasks…`, custom Filter/Reset). Treat these as test-maintenance gaps, not evidence those controls exist. [Workspace unit suite](../../../../revogrid-demos/pro-advanced-planning/tests/workspace.test.ts) supports synchronization contracts; it is not browser verification.

## Scenarios

### PLAN-01 — Initial filtered workspace and all five views (P0)

**Evidence:** Executed initial 100/100 and opened all five views; non-grid screenshots used Maya-filtered subset. Detailed identity/count assertions remain source-derived.

**Setup/reset:** Reload /demo/ without saved state.

1. Wait for the grid ⇒ footer settles at `100 of 100 tasks`; `API integration` (task-003, Noah, In progress) and `Define requirements` (task-001, Maya, Done) are visible fixtures.
2. Click Kanban ⇒ Planned, In progress, Blocked and Done columns render; the same filtered task set is used, so Done starts empty.
3. Click Gantt ⇒ task table and dated bars render for the filtered set over September 2026.
4. Click Scheduler ⇒ resource timeline appears with Ava, Noah, Leo, Maya and Nina resources and events for the current task set.
5. Click Calendar ⇒ September 2026 month layout displays the same events. Return to Grid ⇒ filter and task count remain consistent.

**Visual checks:** Active tab is distinguishable and aria-selected is correct. Grid/timeline fills its region without blank overlay; labels and avatars fit; events align with their dates. Calendar may legitimately need its own internal scroll.

**Automation/readiness:** Use tablist `Planning view` and exact tab names (source lower-case; CSS may capitalize). Wait for .planning-demo__grid plus view-specific bars/cards/events; compare stable IDs in rendered/public model, not all DOM nodes against 60.

### PLAN-02 — Search, no results and filter persistence across views (P0)

**Evidence:** Executed Maya → 20/100, cross-view filtered rendering, unmatched query → 0/100, and keyboard clearing → 100/100.

**Setup/reset:** Reload; retain default Status filter.

1. Enter `Maya` in Quick search tasks ⇒ after filtering settles exactly 20 of 100 tasks remain.
2. Switch to each other view ⇒ only that filtered subset supplies cards/tasks/events; return Grid ⇒ query remains Maya.
3. Replace query with `zz-no-task-qa-2026` ⇒ footer is 0 of 100 and no task records render; headers, tabs and search stay usable.
4. Clear search ⇒ 100 of 100 return, including Define requirements. Search Maya again ⇒ 20 of 100.

**Visual checks:** No stale cards/bars remain after zero results. Empty state does not collapse the page; no filter badge overlaps search or view tabs.

**Automation/readiness:** Get searchbox by accessible name `Quick search tasks`; quick filter has 150 ms debounce, so poll footer/model instead of sleeping. Badge removal action must be scoped to Status. Do not reuse old `Search tasks…` locator.

### PLAN-03 — Edit one filtered/sorted row and preserve its identity across views (P0)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; search `API integration` to isolate task-003.

1. Edit its Task name to `API integration QA`, commit Enter ⇒ same ID has new name; total task count stays 100.
2. Edit Owner from Noah to Ava via dropdown ⇒ label and avatar change together.
3. Switch Kanban ⇒ API integration QA appears with Ava. Switch Gantt ⇒ name and assignment reference Ava. Switch Scheduler then Calendar ⇒ matching event name and owner agree.
4. Return Grid, clear query, sort Task descending and edit a visible task name ⇒ only that ID changes, not the record that originally occupied its physical row.
5. Reload ⇒ seed names/owners return.

**Visual checks:** Editors remain within viewport; dropdown option text/avatar match committed cell; no duplicate card appears after remount.

**Automation/readiness:** Identify task-003 via model/visible row text before editing. The sync.ts rowIndex fallback deliberately resolves through getVisibleSource(); regression must cover sorted or filtered rows. Verify editor close and model commit before view switch.

### PLAN-04 — Status, progress, read-only columns and selection (P1)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; use API integration.

1. Edit Status from In progress to Blocked ⇒ badge changes and task appears in Blocked in Kanban.
2. Return Grid and edit Progress to 75 ⇒ displayed progress and Kanban progress agree. Enter out-of-range values -10 and 110 in separate attempts ⇒ canonical committed progress is clamped to 0 and 100 where the editor accepts the values.
3. Try editing Priority, Due date, Budget and Activity time ⇒ read-only cells do not commit a change.
4. Select one row checkbox ⇒ footer reports 1 selected and header is mixed. Select header ⇒ all 60 currently visible tasks selected; clear header ⇒ no selected suffix.
5. Change Status of a visible task to Done with default filter active ⇒ it leaves filtered views but remains in canonical total; removing Status filter reveals it.

**Visual checks:** Checkbox states are clearly distinct; selection stays in its 48 px pinned column, no unwanted filter icon there. Progress rendering does not exceed its cell.

**Automation/readiness:** Use row-select checkbox within located record; assert .planning-demo__footer. Record editor validation behavior separately from canonical clamp, rather than requiring invalid text to be accepted.

### PLAN-05 — Structured column filters compose and clear (P1)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; inspect each relevant header filter.

1. Open Owner selection filter and choose Maya ⇒ every visible task owner is Maya; clear it ⇒ 100 return.
2. Open Status chip filter and select only Blocked ⇒ all results have blocked status; clear all active filters ⇒ all 100 return.
3. Apply Priority Normal (500) ⇒ only priority 500 records remain. Open Due date calendar range and select Sep 7–8 2026 ⇒ result IDs equal the intersection of the chosen priority and range.
4. Clear filters; apply a Progress threshold, then a Budget histogram interval, then an Activity time matrix cell ⇒ record the numeric interval/threshold or weekday/hour range displayed by each selected control, then assert that every visible task satisfies that recorded criterion, its badge identifies it, and the footer count equals independently filtered fixture IDs.
5. Remove each badge and dismiss filters using Escape/outside click ⇒ criterion disappears and results recover without clearing unrelated criteria.

**Visual checks:** Calendar, chips, histogram and matrix are readable and operable; popovers remain above grid without being cut off; horizontal scrolling exposes far-right Activity time header.

**Automation/readiness:** Derive expected IDs from fixtures and chosen displayed filter values. Structured definitions live in planning.structured.ts; use real pointer/keyboard interactions, never inject filter state to stand in for interaction.

### PLAN-06 — Kanban movement updates grid status (P0)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; choose Kanban; locate API integration in In progress.

1. Drag API integration to Blocked ⇒ card moves once, column counts update and total stays 60 visible/100 total.
2. Return Grid and locate the task ⇒ Status is Blocked with same owner/name/dates.
3. Return Kanban and reorder the card within Blocked ⇒ relative order changes without changing owner/status or duplicating the record.
4. Reload ⇒ original In progress status/order return.

**Visual checks:** Drag preview does not obscure drop target; dragged card stays card-width; no empty gap persists after drop.

**Automation/readiness:** Use data-kanban-card-id with stable task ID if emitted. Capture source/target bounds after each scroll; assert changedCards result through visible UI/public source rather than assuming drag success.

### PLAN-07 — Gantt move and resize synchronize dates (P0)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; search API integration then choose Gantt. Original interval Sep 7 2026 08:00–17:00 UTC, 9h.

1. Move task one day right via its bar ⇒ start and end advance together and original 9h duration is preserved.
2. Switch Scheduler/Calendar ⇒ task appears on the changed date; return Gantt ⇒ interval persists.
3. Resize its end to a later valid time/date ⇒ end and duration update together; confirm Scheduler event has same start/end.
4. Edit task assignment to Ava via Gantt assignment editor ⇒ Grid owner/avatar and Scheduler resource update to Ava.
5. Inspect task creation affordances ⇒ creation is disabled in this planning Gantt configuration; reload resets edits.

**Visual checks:** Task table row and bar stay aligned; handles are usable; marker/header line alignment within 1 px when visible. Dates must not shift due to browser locale.

**Automation/readiness:** UTC is configured. Measure real date-cell spacing and handle bounds; use event/task ID. Day precision can snap drag to days; assert resulting canonical interval rather than a guessed pixel-to-hour conversion.

### PLAN-08 — Scheduler and Calendar edit the shared task (P0)

**Evidence:** Source-derived; not executed in this review.

**Setup/reset:** Reload; search API integration; choose Scheduler.

1. Move event to a later valid slot on Ava resource ⇒ canonical owner becomes Ava and start/end move together.
2. Resize event to a later end ⇒ duration changes, with no negative or zero interval.
3. Open event editor, rename to `API integration scheduler QA` and set Blocked ⇒ save; Grid, Kanban and Gantt reflect those fields for task-003.
4. Choose Calendar and move the event to another day ⇒ returning Scheduler and Gantt shows updated dates.
5. Inspect create/delete commands ⇒ this planning scheduler has allowCreate=false and allowDelete=false; no new/deleted task should result from attempted empty-slot create or delete shortcut.

**Visual checks:** Resource labels, event title, status and date placement remain coherent; collisions are not marked as errors because planning conflicts are disabled.

**Automation/readiness:** Use event ID task-003 and freeze timezone UTC. Both scheduler views use event-changed handler; keyboard shortcuts are disabled in this demo. Do not port standalone scheduler create/delete expectations.

### PLAN-09 — Full screen and responsive visual continuity (P1)

**Evidence:** Executed Code drawer React source switch, Escape/focus restoration and query retention at 1280×720/dark; light screenshots inspected at widths 1440, 960 and 390 px. Fullscreen and complete mobile view/drawer interaction matrix remain source-derived.

**Setup/reset:** Reload at 1440×900; repeat at 390×844 and dark scheme independently.

1. Click Full screen ⇒ planning root enters fullscreen and active workspace occupies available space.
2. Press Escape ⇒ leaves fullscreen with same active view, filter and edited in-memory data.
3. Open Code drawer in each view, change framework source tab, then close ⇒ workspace remains usable and state survives.
4. At mobile width switch through all five views and scroll their content ⇒ controls remain reachable and page has no document-level horizontal overflow.

**Visual checks:** Check all five views, not only grid. Focus returns after Code drawer closes; grid lines and controls remain distinguishable in dark mode; no clipped fullscreen/footer/tab controls.

**Automation/readiness:** Assert document.fullscreenElement on supported browser; report platform denial separately. Shared shell checks belong in shared suite, while this case checks view-specific state survival.

### PLAN-10 — Context-menu deletion follows filtered task identity (P1)

**Evidence:** Source-derived; not executed in this review. The demo configures the `row.delete` handler in [formatting.ts](../../../../revogrid-demos/pro-advanced-planning/src/data/formatting.ts); actual menu availability must be verified in the docs before automating this flow.

**Setup/reset:** Reload; search `API integration`, isolating task-003. This is disposable local fixture data.

1. Open its row/cell context menu ⇒ menu belongs to the selected record and is not clipped by the pinned columns or docs shell.
2. Choose the visible row-delete command ⇒ task-003 is removed from canonical tasks, total becomes 99, and selected-count state clears.
3. Clear search and visit Kanban/Gantt/Scheduler/Calendar ⇒ no task/card/event with task-003 remains; unrelated task-004 Authentication still exists.
4. Reload ⇒ 100 canonical tasks return with default 60-task filtered view and API integration restored.

**Visual checks:** No stale selection outline, orphan timeline bar or ghost Kanban card remains after deletion; empty filtered results leave search and tabs usable.

**Automation/readiness:** Capture stable ID before opening menu; assert one canonical deletion rather than physical row-index deletion. A missing menu/command is an observed capability gap to report, not a reason to call the handler directly and mark a user scenario passed.
