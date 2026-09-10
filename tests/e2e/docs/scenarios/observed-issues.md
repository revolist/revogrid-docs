# Observed issues and verification limits

Review date: **2026-09-08**, with fixes verified on the current tree. Screenshots were visually inspected in the browser-tool conversation; no screenshot file attachments were persisted. Reproduction steps and DOM/source evidence below are the durable record. Priorities describe scenario coverage impact, not an assigned product bug severity.

## ISSUE-001 · Resolved · Mobile Examples drawer surface

Related: SHELL-07 in [shared shell](shared-shell.md).

- **Reproduce:** `/demo/`, 390×844/light; wait for workspace, activate Examples, allow drawer transition to finish.
- **Fix:** [DemoNavigation.vue](../../../../.vitepress/theme/DemoNavigation.vue) gives the off-canvas `.demo-nav` the docs background surface at widths through 1099px.
- **Verification:** `mobile navigation opens on an opaque full-width surface` verifies the 390×844 drawer is full-width, has a non-transparent computed background, and locks page scrolling.

## ISSUE-002 · Resolved · Scheduler period and view controls

Related: SCHED-01/03/09 in [Scheduler](event-scheduler.md), SHELL-07.

- **Reproduce:** `/demo/event-scheduler`, 1280×720/light, initial Calendar/Week with review clock September 8, 2026.
- **Fix:** [Scheduler styles](../../../../revogrid-demos/pro-advanced-scheduler/src/styles.scss) enter the compact toolbar layout at 1360px, which accounts for the docs host's persistent desktop navigation.
- **Verification:** the Scheduler docs E2E compares heading and view-control rectangles at 1280×720 and requires no intersection. Browser retest confirmed distinct rows for range, view selection, and calendar preset.

## ISSUE-003 · Resolved · Project tracker mobile bulk actions

Related: TRACKER-001/003/006 in [Project tracker](project-tracker.md), SHELL-07.

- **Reproduce:** `/demo/color`, 390×844/light, fresh 16-project fixture; inspect the bulk action row before selecting a project.
- **Fix:** [tracker responsive styles](../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_responsive.scss) give the selection count its own row and lay actions out in two full-width columns at 640px and below.
- **Verification:** the 390×844 E2E regression test confirms all five controls are visible, inside the viewport, and have distinct rectangles. The project-table unit suite passed 12 tests.

## ISSUE-004 · Resolved · Closed off-canvas navigation releases workspace width

Related: SHELL-02/07, PLAN-09 in [Planning](planning.md).

- **Reproduce:** `/demo/planning` or `/demo/` at 960×800/light with Examples drawer closed; also open `/demo/hr` at the same size.
- **Fix:** [DemoPageLayout.vue](../../../../.vitepress/theme/DemoPageLayout.vue) applies the desktop navigation offset only from 1100px upward, matching the off-canvas navigation breakpoint.
- **Verification:** `closed off-canvas navigation does not reserve workspace width at tablet size` verifies a 960px Planning layout begins at x=0, occupies the viewport width when closed, and that opening Examples produces a full-width drawer.

## ISSUE-005 · Resolved · Scheduler Year presentation

Related: SCHED-03 in [Scheduler](event-scheduler.md).

- **Reproduce:** open `/demo/event-scheduler`, choose Year after Month/Day navigation.
- **Fix:** [Scheduler data](../../../../revogrid-demos/pro-advanced-scheduler/src/data.ts) now labels the month grid as `January 2026` with `Calendar month · year navigation`, accurately describing the year-at-a-time behavior.
- **Verification:** unit assertions cover the title/subtitle contract and the docs E2E checks the copy after selecting Year.

## ISSUE-006 · Resolved · Planning E2E selectors match the current toolbar

Related: PLAN-02/05/10 and SHELL-03/08.

- **Reproduce by inspection:** compare the former docs E2E selectors with current [Planning mount](../../../../revogrid-demos/pro-advanced-planning/src/planning.vue).
- **Fix:** [docs E2E](../demo-experience.spec.ts) now uses the accessible `Quick search tasks` control and the current 100-task fixture: Maya yields 20 tasks, an unmatched query yields zero, and clearing restores 100.
- **Verification:** four focused Planning/source-panel tests passed; legacy `Search tasks…`, Active tasks, Filter, and Reset selectors are absent from the suite.

## ISSUE-007 · Resolved · 50K Kanban Cancel closes an edited card

Related: KPERF-003 in [50K Kanban](kanban-performance.md).

- **Reproduce:** `/demo/kanban-performance`, open KAN-101, change its title, then activate Cancel. The generic dirty-draft confirmation was dismissed by automated browsers, leaving the editor open and preventing the documented cancel/reopen workflow.
- **Fix:** [performance editor fixture](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board-data.ts) sets `confirmDiscard: false`, matching the demo's immediate-discard Cancel behavior.
- **Verification:** the 50K cancellation E2E changes the title, activates Cancel, verifies the editor closes, and reopens the original five-point card. The performance fixture unit suite passed 65 tests.

## ISSUE-008 · Resolved · 50K created cards were undiscoverable in the current virtual viewport

Related: KPERF-004 in [50K Kanban](kanban-performance.md).

- **Reproduce:** `/demo/kanban-performance`; use Add card here for Product/Backlog and save a uniquely titled card. Backlog increases from 5000 to 5001, but the new end-ranked card is outside the mounted virtual range, so its normal card delete action is not reachable from the current view.
- **Fix:** [performance board mount](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.vue) exposes a brief created-card status strip with the generated title and a targeted delete action. The action updates the demo's source and clears the strip, keeping this benchmark workflow reversible without navigating through thousands of virtual rows.
- **Verification:** the focused docs E2E creates `E2E disposable card`, sees Backlog 5001 and the status strip, deletes the generated card, verifies Backlog 5000 and then checks the 390×844 page has no horizontal overflow. It passed on 2026-09-10 in 10.8 seconds.

## ISSUE-009 · Resolved · 50K moved cards were undiscoverable after an end-ranked move

Related: KPERF-005 in [50K Kanban](kanban-performance.md).

- **Reproduce:** `/demo/kanban-performance`; use KAN-101's context menu to move Product/Backlog to Product/Triage. Triage becomes 5001, but the moved end-ranked card leaves the mounted virtual range and cannot be returned through its normal context menu.
- **Fix:** [performance board mount](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.vue) synchronizes the plugin's changed-card details into the source and exposes a Moved card status strip. Its targeted return control restores the exact canonical `previousCards` record, then clears the strip.
- **Verification:** the focused docs E2E moves KAN-101 through the context-menu submenu, verifies 4999/5001, uses Return recently moved card, verifies 5000/5000, and collapses/expands Product to prove KAN-101 remounts. It passed on 2026-09-10 in 12.9 seconds.

## ISSUE-010 · Resolved · Pivot Product filter had no member choices

Related: PIV-004 in [Pivot table](pivot.md).

- **Reproduce:** `/demo/pivot`, Sales Overview, open Configure at 1280×720. Product is listed in Filters but has no `Product filter value` selector, while Discount Band has one.
- **Fix:** [financial pivot configuration](../../../../revogrid-demos/pro-advanced-pivot/src/financial.pivot.ts) supplies the five deterministic Product fixture values as `filterOptions`.
- **Verification:** focused docs E2E selects Discount Band=Medium, then Product=Apex Suite, confirms the aggregate changes, clears Product with All, and confirms the Medium aggregate returns. It passed on 2026-09-10.

## Environmental interruptions and remaining verification

Two interaction attempts were interrupted by concurrent Vite/HMR activity and CSS/module reload failures, including Planning around 11:35:50 UTC and a 10K Gantt scroll attempt around 11:41:47 UTC. Pages subsequently recovered. A later 10K retest reached Task 225–246 with aligned bars; the interrupted blank frame is not logged as a proven Gantt defect. Bottom-of-10K traversal/return and edits remain unexecuted.

The browser also reported a localhost CookieYes hostname/configuration error. Treat it separately from demo asset/application failures; do not globally suppress console errors to hide unrelated defects.

Many deeper proposed workflows were source-reviewed but not executed: task/event mutation, dependency changes, exports/imports, drag cancellation, full persistence cycles and all responsive overlays. Each document marks its verified subset and blockers. This catalog enables implementation; it is not a claim that all basic acceptance scenarios currently pass.
