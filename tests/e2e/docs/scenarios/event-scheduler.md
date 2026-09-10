# Scheduler JS: test scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

**Route:** `/demo/event-scheduler`

The docs embeds the shift scheduler with Calendar, Resource and Table workspaces, Day/Week/Month/Year range controls and Weekday/Open/Training calendar presets. It starts in Calendar/Week/Weekday with dates derived from today's anchor; freeze the browser clock/timezone in future E2E. The template has no current search sidebar or custom external New event button. Events can be created/edited through the scheduler's own interaction surface. Period, view and calendar-preset changes regenerate seed events; this demo is not a persistent scheduling application.

## Review evidence and execution contract

- Reviewed on **2026-09-08**, docs revision `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing uncommitted theme changes in `DemoNavigation.vue` and `style.scss` were present and were not changed by this review.
- Local target: `http://127.0.0.1:4173`. Browser evidence is recorded below; a scenario marked **source-derived** has not been executed merely because its initial page was opened.
- Start each independent case in a fresh browser context and reload its route. Use fixed viewport/theme pairs for repeatable checks. The central review records baseline screenshots for every route at 1440×900/dark and 1280×720/light; use the central evidence matrix for narrow-screen inspection coverage. Do not share browser storage or modified fixtures between tests.
- Await the specific visible grid, its first real row/bar/event, and completion of filtering before interacting. Scope selectors to this demo; use stable task/event IDs, never assume a virtual DOM row index identifies a record after scrolling or filtering. Collect page errors and failed asset loads throughout.

## Browser verification

Baseline screenshot coverage also includes **1440×900/dark and 1280×720/light** for this route, as recorded by the central reviewer. Baseline inspection does not imply that every interaction below ran at both settings; narrow-screen evidence is tracked centrally.

Central reviewer opened and inspected screenshots at **1280×720, light theme** on 2026-09-08. Initial Week was September 7–13 with five named events: Design Workshop and Client Strategy showed conflict presentation; Release Prep was locked. Table showed five rows. Resource showed four people and Onboarding on Jamie, 08:00–12:00. Next changed to September 14–20 / Week 38. Today then Month showed September; Day from that month state showed September 1. Year now labels its month-shaped grid as January 2026 with Calendar month · year navigation, matching the year-at-a-time plugin mapping. Open preset was selected, but resulting working-time policy was not independently checked.

**Resolved:** At 1280×720, the compact header layout keeps period text, Day/Week/Month/Year controls, and calendar preset in separate readable rows. Event editing, dragging, create/delete, locked-operation prevention and conflict resolution remain separate scenarios.

## Source and existing coverage

- [Docs host](../../../../demo/event-scheduler.md), [Vue component/state handlers](../../../../revogrid-demos/pro-advanced-scheduler/src/scheduler.vue), [fixture, calendar policy and date navigation](../../../../revogrid-demos/pro-advanced-scheduler/src/data.ts).
- [Scheduler shell components](../../../../revogrid-demos/pro-advanced-scheduler/src/components).

[Standalone E2E](../../../../revogrid-demos/pro-advanced-scheduler/tests/e2e/feature.spec.ts) currently verifies mount, header controls and Table switch, with non-empty screenshot assertion. [Docs suite](../demo-experience.spec.ts) only establishes shared-shell mount for this route. All event mutation/conflict and most view/preset cases remain future docs E2E coverage.

## Scenarios

### SCHED-01 — Initial weekly calendar (P0)

**Evidence:** Clean docs-host E2E run: the Calendar/Week workspace loaded with the Weekday preset, Scheduler workspace/view controls and grid. Stable `shift-sam-locked` and `shift-alex-mon-conflict` attributes exposed locked and conflict presentation. Frozen-clock reproducibility and full fixture-count assertions remain source-derived.

**Setup/reset:** Fresh context; freeze 2026-09-08 10:00 UTC before module load for future E2E; open route.

1. Wait for Scheduler workspace tabs, Scheduler view controls, Calendar preset and first event ⇒ Calendar and Week are selected, Weekday preset active.
2. Inspect week containing Sep 8 2026 ⇒ calendar shows date/time axes and seed events, with 06:00–18:00 configured time range.
3. Locate resources/event fixtures by stable IDs ⇒ resource set is Alex Kim, Mina Patel, Sam Rivera and Jamie Chen; shift-sam-locked is locked, while other seed events remain editable.

**Visual checks:** Header and time grid align; event titles/times/avatars fit; current-time/today marker and weekend/non-working shading do not obscure events.

**Automation/readiness:** Use tablist `Scheduler workspace`, group `Scheduler view`, combobox `Calendar preset`, .event-scheduler-shift-week-grid. Event titles rotate with date; IDs are more stable than titles. Five base events exist for week/day, while month/year add fixtures.

### SCHED-02 — Calendar, Resource and read-only Table (P0)

**Evidence:** Clean docs-host E2E run: Resource selected and exposed Jamie Chen; Table selected and rendered the `Onboarding Session` fixture; Calendar restored the scheduler grid. Table readonly/filter interaction not executed.

**Setup/reset:** Fresh current week; capture five base event IDs and titles.

1. Click Resource workspace ⇒ resources become timeline rows; dates remain meaningful for current view and all four resources are represented.
2. Click Table ⇒ Event, Date, Time, Assignee, Type and Status columns display current generated event data.
3. Try editing a table event title ⇒ table is readonly and no event change commits. Use a column filter ⇒ rows filter through table plugin without changing scheduler source.
4. Return Calendar ⇒ calendar is usable with correct selected workspace; filtered table presentation does not delete events.

**Visual checks:** Resource header width leaves useful timeline space; avatars/status chips do not clip; Table should not show a second scheduler underneath.

**Automation/readiness:** Wait .event-scheduler-shift-week-table when Table selected. Source explicitly regenerates events upon entering Resource: do not require unsaved edits to survive this switch. Table↔Calendar does not intentionally regenerate in ordinary week mode.

### SCHED-03 — Day, Week, Month, Year and period navigation (P0)

**Evidence:** Clean docs-host E2E run: Day and Week active states changed through their visible controls; Year exposed the `January 2026` year-navigation heading; Month and Today returned to an available scheduler grid. Complete per-view round-trip matrix remains source-derived.

**Setup/reset:** Fresh route with frozen date; no edits.

1. Click Day ⇒ title/range and time columns reflect the active anchor date; switching from Month may use the first of that month. Use Today to return to the frozen September 8 date. Click Next then Previous ⇒ each moves one displayed period and restores original title.
2. Repeat for Week ⇒ one-week navigation; Month ⇒ month navigation and month-shaped date cells; Year ⇒ corresponding wider-period fixture/navigation.
3. Click Today after moving several periods ⇒ returns to today-derived anchor for active view.
4. Repeat Month and Week in Resource workspace ⇒ resource timeline range changes with control while resource identities remain available.

**Visual checks:** Active view state is clear; headers and events correspond to title after every switch; blank offscreen dates are not mistaken for data loss.

**Automation/readiness:** Use header model/date helpers as oracle. Year currently maps plugin view to month in createShiftWeekConfig, with year-specific data/range navigation: do not require a twelve-mini-calendar UI that source does not build.

### SCHED-04 — Calendar presets and working-time shading (P0)

**Evidence:** Clean docs-host E2E run: Open changed the preset while the Calendar grid remained usable; Resource stayed selected through the Training change; Weekday restored the default preset and Calendar rendered the scheduler grid again. Precise working-time and holiday slot-policy assertions remain source-derived.

**Setup/reset:** Fresh Week; capture current range title.

1. Select Open preset ⇒ calendars become every-day/open coverage policy and disabled/non-working styling changes; title stays on same anchor.
2. Select Training ⇒ Mon–Sat working days, 10:00–16:00 window and Wednesday holiday policy are reflected in slot availability/shading.
3. Select Weekday ⇒ original working pattern returns. Repeat preset change while Resource active ⇒ corresponding resource timeline policy applies.

**Visual checks:** Non-working/holiday slots are distinguishable without hiding all event text; preset control remains visible in narrow header layout.

**Automation/readiness:** Preset labels are Weekday/Open/Training. Source watch regenerates events and clears selection on calendar change; assert fixture restoration rather than edit persistence. Derive precise holiday date from active anchor/calendar helper.

### SCHED-05 — Edit event and verify Table projection (P0)

**Evidence:** Executed in the docs host: the editable `shift-alex-mon-morning` event opened its built-in editor on double-click, saved `Scheduler QA appointment`, and the Table workspace projected that exact saved title.

**Setup/reset:** Fresh Week; target editable shift-alex-mon-morning, resource Jamie Chen despite historical ID name.

1. Open its event editor ⇒ current title, interval and resource correspond to the selected event.
2. Rename to `Scheduler QA appointment`, commit ⇒ same event ID changes; there remains exactly one matching event.
3. Switch directly to Table ⇒ Event column shows Scheduler QA appointment and dates/time/assignee match saved event.
4. Return Calendar, reopen, type a discarded title then cancel/Escape ⇒ last committed title remains.
5. Reload ⇒ generated seed event returns.

**Visual checks:** Editor is not clipped by docs shell; focused inputs and Save/Cancel are visible; table time formatting agrees with event interval.

**Automation/readiness:** Await event-scheduler-event-changed/model replacement and visible text. Avoid Resource/view/preset/period changes between edit and Table assertion because they reset fixtures.

### SCHED-06 — Move/resize and locked-event protection (P0)

**Evidence:** Executed in the docs host Resource timeline: editable `shift-alex-mon-morning` moved and resized through its visible timeline controls. The locked `shift-sam-locked` interval remained unchanged after the same drag attempt. Calendar-week wrapper drags are not a substitute for the Resource timeline controls.

**Setup/reset:** Fresh Week or Resource; select an editable event and record original interval/resource.

1. Drag editable event to a later valid slot ⇒ interval moves with duration preserved and snaps to configured 10-minute boundary.
2. Resize its end ⇒ end/duration change while start stays fixed; Table projection agrees.
3. Reload; attempt move/resize on shift-sam-locked ⇒ its interval/resource remain unchanged; locked presentation persists.
4. Attempt event reassignment in Resource workspace on an editable event ⇒ destination resource and Table assignee update consistently.

**Visual checks:** Drag preview snaps visibly; no duplicate persists after drop. Locked affordance conveys non-editability and does not leave a stuck interaction overlay.

**Automation/readiness:** Use stable event data attributes and actual time-slot geometry. Reassignment has a dedicated request handler; test with unlocked ID. Never calculate 10-minute movement from an unverified fixed pixel size.

### SCHED-07 — Create, cancel and delete within a demo session (P1)

**Evidence:** Executed in the docs host Resource timeline: clicking an available Alex slot opened the built-in create editor; Cancel closed it without adding an event. Saving `SCHED-07 created event` created one `created-event-*` bar, and its editor Delete action removed it.

**Setup/reset:** Fresh Week; choose an empty valid slot on a working day.

1. Drag an empty working-time slot to define a valid interval ⇒ observe the built-in creation result and record its generated event ID. Open that event’s editor, set title `QA created shift`, retain the chosen valid interval/resource, and save ⇒ exactly one new event exists with that ID and title.
2. Switch directly to Table ⇒ new record has matching title/date/time/assignee. Return Calendar ⇒ still available.
3. Start another creation and cancel ⇒ no additional event remains.
4. Select QA created shift and use visible delete action/shortcut ⇒ that ID disappears from Calendar and Table; unrelated fixtures remain.
5. Reload ⇒ seed events restored.

**Visual checks:** Empty-slot selection stays in correct day/resource; create/delete menus fit viewport; deleting last selected event removes selection adornment.

**Automation/readiness:** AllowCreate/Move/Resize/Delete and keyboardShortcuts are enabled here, unlike planning scheduler. Use only real visible built-in flow; there is no custom header New event button in scheduler.vue.

### SCHED-08 — Conflict markers and selection (P1)

**Evidence:** Executed in the docs host: a conflict-marked event exposed the visible selected state, then Meta-selection preserved it while selecting a second stable event. Create/resolve-overlap gestures remain unexecuted.

**Setup/reset:** Fresh Week with source fixture; choose unlocked event.

1. Select an event ⇒ visible selected state appears; select another using supported multiple-selection gesture ⇒ selected IDs represent both.
2. Move an unlocked event to overlap another for the same resource ⇒ save is permitted by conflict policy mark, and conflict presentation identifies overlap.
3. Move it to a non-overlapping interval ⇒ conflict presentation clears for resolved event(s).
4. Create a comparable overlap on a different resource ⇒ same-resource rule does not falsely mark that pair solely because times overlap.

**Visual checks:** Conflict marker and selected outline remain readable over event color; overlapping cards stack without silently covering titles.

**Automation/readiness:** Conflict policy mark/scope same-resource; outside-availability is ignored. Assert conflict state from plugin plus visible marker, not arbitrary red CSS. Source allows maxStackedEvents=4, so overflow behavior is expected above four.

### SCHED-09 — Responsive and theme across all workspaces (P1)

**Evidence:** Executed in the docs host at 390×844/dark: Resource, Table and Calendar workspaces each became active with visible content and no document-level horizontal overflow. The 1280×720 regression also confirms the period heading and Scheduler view controls do not intersect. Baseline light screenshots were inspected; the full view/editor interaction matrix remains future coverage.

**Setup/reset:** Fresh desktop/light; separate dark and 390×844 contexts.

1. Cycle Calendar/Resource/Table and Day/Week/Month/Year ⇒ controls and at least useful content remain visible/reachable.
2. Scroll time grid/resource timeline/table inside demo ⇒ header and event row/date alignment remain correct.
3. Open Code drawer then close ⇒ active mode stays selected and grid recovers its width; no document-level horizontal overflow.
4. Navigate away and return ⇒ one clean scheduler instance with seed state.

**Visual checks:** Inspect popover/editor near lower/right edges, narrow header wrapping and current-time marker. Table row backgrounds and event text must retain dark-mode contrast.

**Automation/readiness:** Record exact viewport/theme and source version for screenshots. Prefer explicit layout/content assertions; existing screenshot byte-length check does not prove layout or contrast correctness.
