# Observed issues and verification limits

Review date: **2026-09-08**. Target: `http://127.0.0.1:4173`, revisions/live-tree caveats in [README](README.md#scope-and-review-baseline). Screenshots were visually inspected in the browser-tool conversation; no screenshot file attachments were persisted. Reproduction steps and DOM/source evidence below are the durable record. Priorities describe scenario coverage impact, not an assigned product bug severity. These findings are not fixes or accepted golden baselines.

## ISSUE-001 · P0 · Audit History ledger is absent

Related: AUDIT-001 through AUDIT-005 in [Audit History](audit-history.md).

- **Reproduce:** open `/demo/audit-history` at 1280×720/light, wait for all eight invoices; inspect the adjacent complementary/aside area. Edit INV-2048 Customer from Northwind to Northwind E2E and commit.
- **Actual:** invoice grid renders and edit commits, but aside remains empty; no Change ledger or transaction controls appear. Initial empty ledger also observed at 1440×900/dark.
- **Expected:** visible Change ledger containing four seed transactions, then an attributable transaction for the edit. The panel should render even before its records become available.
- **Impact:** compare, restore, ledger filtering and exports could not be exercised. This does not establish that audit collection itself failed.
- **Evidence/source:** screenshots before/after the edit and empty complementary DOM; [Vue initialization](../../../../revogrid-demos/pro-audit-history/src/audit-history.vue) and linked panel/seed implementation in the scenario document.
- **Investigation only:** mount initialization reads `gridRef.value?.$el` without a direct-element fallback/retry. Skipped initialization or an exception is plausible; root cause was not proven. Retest on a stable build before attributing the failure to a specific component.

## ISSUE-002 · P1 · Mobile Examples drawer lets workspace text show through

Related: SHELL-07 in [shared shell](shared-shell.md).

- **Reproduce:** `/demo/`, 390×844/light; wait for workspace, activate Examples, allow drawer transition to finish.
- **Actual:** underlying heading/task content remains visible through the navigation panel, mixing with its labels. Close examples returns to the page.
- **Expected:** drawer surface visually separates navigation from the workspace; labels remain legible without underlying text interference.
- **Evidence/source:** open-drawer screenshot; [DemoNavigation.vue](../../../../.vitepress/theme/DemoNavigation.vue) sets `.demo-nav` background transparent and its narrow breakpoint does not add an opaque surface. This file was already dirty; review does not attribute the change to a commit.
- **Retest:** opening/closing, scrolling and choosing a link at 390×844 in both themes; ensure scrim, drawer and source overlay have distinct stacking/close behavior.

## ISSUE-003 · P1 · Scheduler period text overlaps view controls

Related: SCHED-01/03/09 in [Scheduler](event-scheduler.md), SHELL-07.

- **Reproduce:** `/demo/event-scheduler`, 1280×720/light, initial Calendar/Week with review clock September 8, 2026.
- **Actual:** Sep 7–13 period text and Day/Week/Month/Year pill occupy overlapping space in the header.
- **Expected:** period and four view choices remain distinct, readable and individually operable without overlapping text.
- **Evidence/source:** initial desktop screenshot; [scheduler layout](../../../../revogrid-demos/pro-advanced-scheduler/src/scheduler.vue). At 1440×900/dark controls fit; at 390×844/light they wrap into separate rows. Failure is width-dependent, not universal scheduler loading failure.
- **Retest:** all range labels, including longer month/year labels, and Resource/Table switches at both desktop sizes.

## ISSUE-004 · P1 · Project tracker mobile bulk-action labels collide

Related: TRACKER-001/003/006 in [Project tracker](project-tracker.md), SHELL-07.

- **Reproduce:** `/demo/color`, 390×844/light, fresh 16-project fixture; inspect the bulk action row before selecting a project.
- **Actual:** selection count and Mark ready, Block selected, Move to launch and Delete text are crowded/overlapping across the narrow row.
- **Expected:** distinct readable action labels with independent targets, through wrapping or another usable responsive presentation; disabled initial state still needs readable labels.
- **Evidence/source:** initial mobile screenshot and [tracker responsive styles](../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_responsive.scss), [shell styles](../../../../revogrid-demos/pro-project-table/src/project-tracker-styles/_shell.scss).
- **Retest:** zero/one/multiple selections and clearing, confirming each visible action targets only selected projects. Mobile mutations were not executed in this review.

## ISSUE-005 · P1 · Closed sidebar still reserves width at 960px

Related: SHELL-02/07, PLAN-09 in [Planning](planning.md).

- **Reproduce:** `/demo/planning` or `/demo/` at 960×800/light with Examples drawer closed; also open `/demo/hr` at the same size.
- **Actual:** navigation is offscreen and Examples trigger appears, but Planning demo container starts at x=256 with width 704, leaving a 256px empty strip. Heading starts near x=272. HR alias shows the same unused gutter.
- **Expected:** once navigation is offcanvas, closed navigation should release its reserved width so workspace can use the available content area.
- **Evidence/source:** screenshot plus DOM rectangle `{x:256,width:704,right:960}`; [navigation breakpoint](../../../../.vitepress/theme/DemoNavigation.vue) and [theme layout breakpoints](../../../../.vitepress/theme/style.scss). No specific selector is claimed as a proven root cause.
- **Retest:** just below/above the navigation breakpoint as well as 960×800, with drawer open/closed and source open/closed.

## ISSUE-006 · P1 · Scheduler Year label and presentation need clarification

Related: SCHED-03 in [Scheduler](event-scheduler.md).

- **Reproduce:** open `/demo/event-scheduler`, choose Year after Month/Day navigation.
- **Actual:** header shows 2026 and “12-month overview”, but visible calendar has a month-shaped date grid.
- **Source contract:** [date/configuration helpers](../../../../revogrid-demos/pro-advanced-scheduler/src/data.ts) map the plugin's Year selection to month view with year-specific data/navigation. This explains current rendering; it does not establish that the label accurately describes it.
- **Expected:** user-facing period description should accurately explain the rendered range. Treat this as a copy/behavior discrepancy requiring product intent confirmation; do not invent a twelve-mini-calendar acceptance requirement.
- **Evidence:** 1280×720/light changed-state screenshot and configuration review. Other Year mutation/navigation combinations remain unexecuted.

## ISSUE-007 · Coverage drift · Existing Planning selectors refer to older controls

Related: PLAN-02/05/10 and SHELL-03/08.

- **Reproduce by inspection:** compare [docs E2E](../demo-experience.spec.ts) helper expecting `Search tasks…` and generic Filter/Reset toolbar steps with current [Planning mount](../../../../revogrid-demos/pro-advanced-planning/src/planning.vue).
- **Actual:** browser exposes `Quick search tasks…` and header/active filter controls; old expected controls are absent in the current docs view. Existing test code still contains the former selectors.
- **Expected:** future E2E should exercise current visible controls and their specific filter semantics from this catalog. Hidden standalone controls must not be manufactured as docs steps.
- **Evidence:** source inspection and browser controls; the existing suite was **not run**, so no failing test execution is claimed. Test files changed concurrently during review; reconcile this finding with the final test revision before implementing replacements.

## Environmental interruptions and remaining verification

Two interaction attempts were interrupted by concurrent Vite/HMR activity and CSS/module reload failures, including Planning around 11:35:50 UTC and a 10K Gantt scroll attempt around 11:41:47 UTC. Pages subsequently recovered. A later 10K retest reached Task 225–246 with aligned bars; the interrupted blank frame is not logged as a proven Gantt defect. Bottom-of-10K traversal/return and edits remain unexecuted.

The browser also reported a localhost CookieYes hostname/configuration error. Treat it separately from demo asset/application failures; do not globally suppress console errors to hide unrelated defects.

Many deeper proposed workflows were source-reviewed but not executed: task/event mutation, dependency changes, exports/imports, drag cancellation, full persistence cycles, all responsive overlays and ledger operations. Each document marks its verified subset and blockers. This catalog enables implementation; it is not a claim that all basic acceptance scenarios currently pass.
