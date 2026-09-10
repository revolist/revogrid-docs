# Project Tracker scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/color`. Catalog ID: `project-tracker`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. Automated coverage is recorded below; no demo fixes were added during this review.

Hard reload restores 16 seeded projects. Default grouping uses sections such as New requests, Under review, Launch ready and Blocked. This is the Pro project tracker; do not confuse it with the Core Row Grouping page. New project dialog has a prefilled draft, and records are in-memory.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Selected Mobile checkout launch: count became 1 of 16 and header mixed. Clicked Mark ready: selection reset to 0 of 16 and New requests count became 4. The moved record was not separately inspected, so its final status/progress assertions remain source-derived.

## Scenarios

### TRACKER-001 · P0 · Initial grouped project data

1. Open route → New, Group, Sort, Filter, Hide and bulk-selection controls appear above the colored grid.
2. Locate Mobile checkout launch → New status, High priority, Medium risk, Product department, 20% progress and $75,000 budget belong to that record.
3. Inspect group labels and totals → 16 projects are represented, with five initial New requests entries.

Visual checks and automation notes: Check colored status/priority editors, avatar ownership, progress and section rows; text must remain readable without depending on color alone.

### TRACKER-002 · P0 · Create and cancel project

1. Click New → Pipeline details dialog opens with Project and AI summary fields and default Customer expansion playbook.
2. Replace Project with E2E release checklist and AI summary with E2E fixture summary; leave other valid defaults and click Create project → dialog closes and total grows from 16 to 17.
3. Locate new record → title, summary, Product department, New status, High priority and 25% progress match submitted values.
4. Click New, alter draft, then Cancel → total stays 17 and canceled title does not appear.
5. Hard reload → original 16 records return.

Visual checks and automation notes: Use required Project/AI summary inputs and dialog-local Create project button. This is local fixture mutation. Empty required fields should block native form submission; add a P1 invalid form assertion before submit if automating validation.

### TRACKER-003 · P0 · Select and apply bulk status action

1. Select only Mobile checkout launch → toolbar shows one selected of 16 and header checkbox shows a mixed state.
2. Click Mark ready → selection resets and Mobile checkout launch becomes Ready in Launch ready with progress 85% (raised from 20%); its timeline progress matches 85%.
3. Locate the same project after regrouping → title/owner/budget remain attached; it appears once.
4. Select all then clear selection → checkbox state and toolbar selection count return to zero without changing record data.

Visual checks and automation notes: Do not treat a decreased group count as proof that the intended record changed; assert its identity and resulting status. Reacquire the row after regrouping.

### TRACKER-004 · P1 · Grouping, sorting and hidden columns

1. Open Group and choose Department → the same 16 records regroup by their department values; Mobile checkout launch belongs under Product.
2. Collapse all groups then expand → labels and corresponding projects recover.
3. Choose Sort → Project A-Z, then Project Z-A → project names follow ascending then descending order within the grouping; row identities and values stay attached.
4. Open Hide, uncheck Budget → Budget header/cells disappear; recheck Budget → Mobile checkout launch budget $75,000 returns with the original data.

Visual checks and automation notes: Use actual menu options from toolbar.ts/options.ts; no free-text search control is rendered in this toolbar. Group-toggle is disabled when no grouping is selected.

### TRACKER-005 · P1 · Typed editing and status filtering

1. Fresh reload; edit Mobile checkout launch Priority from High to Medium through its dropdown → Medium orange label replaces High red; owner, status New and progress 20% remain unchanged.
2. Reopen the Priority editor and close with Escape without choosing another value → committed Medium remains; no second change occurs.
3. Click Filter (opens the Filter Status header control), keep only Ready in its selection list and apply → exactly five source projects match: New analytics dashboard, Email automation upgrade, iOS app performance boost, Customer feedback portal, and Partner portal v2. Mobile checkout launch is absent because its status is still New.
4. Clear the Status filter → all 16 projects return; Mobile checkout launch still has Medium priority and New status.

Visual checks and automation notes: Verify popup alignment, Escape behavior and menu clipping at narrow width. Use the custom editor choices rather than typing arbitrary text into a constrained dropdown.

### TRACKER-006 · P1 · Other bulk actions target only selection

Reset with a hard reload before each subcase; use only disposable local demo records.

1. Select Mobile checkout launch and click Block selected → status Blocked, section Blocked, risk High, progress 10% (min of previous 20 and 10), timeline progress 10%; selection clears and total stays 16.
2. Fresh reload; select 3rd party API integration and click Move to launch → section becomes Launch ready, formerly Blocked status becomes In Review, progress stays 0; selection clears and other projects stay unchanged.
3. Fresh reload; select Mobile checkout launch and click Delete → only that ID is removed, total becomes 15, Enterprise SSO rollout remains and selection clears.
4. Hard reload → all 16 original records return, including deleted fixture.

Visual checks and automation notes: resolve rows by ID/title after grouping, never reuse their previous physical row index. Confirm the bulk bar accurately enables actions with selection and disables them after clearing.

### TRACKER-007 · P1 · Add and remove a dynamic Text column

1. Fresh reload, click Add project column → Choose column type popup shows Essentials and Super useful sections.
2. Choose Text → a new Text column appears immediately before the pinned add-column trigger; its values initially copy each project's summary.
3. Edit Mobile checkout launch Text to E2E note → that dynamic cell changes while AI Executive Summary stays Launch checkout v1 for iOS and Android buyers.
4. Reopen Add project column → Text is selected; choose Text again → dynamic column disappears with no duplicate column; project count remains 16.
5. Reopen and add Text again → exactly one Text column returns initialized from summary, not the removed E2E note.

Visual checks and automation notes: use Add project column aria-label and popup item Text. Horizontal scroll and the pinned plus trigger remain aligned; original Project name and AI Executive Summary columns must not be removed.

## E2E readiness and visual acceptance

Target `.project-tracker-grid`, `project-tracker-toolbar`, `[data-toolbar-action]`, `.project-modal`, and fixture title. Custom toolbar dispatches project-tracker-toolbar-action; assertions should validate UI outcome rather than merely event firing. First browser automation should pin current bulk-action behavior to project-tracker shared helpers.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Automated docs evidence: [Core/Pro docs suite](../core-pro-scenarios.spec.ts) passed TRACKER-001 initial fixture/toolbar controls, TRACKER-002 creation and cancellation, TRACKER-003 selection/Mark ready recovery, and the TRACKER-004 visible grouping, sort and reversible owner-column controls on 2026-09-10, including its narrow-layout check. [Checkbox styling checks](../../../../revogrid-demos/pro-project-table/tests/project-checkbox-styles.test.mjs) cover additional styling contracts.

References: [route](../../../../demo/color.md), [view](../../../../revogrid-demos/pro-project-table/src/project-table.vue), [toolbar](../../../../revogrid-demos/pro-project-table/src/project-tracker/toolbar.ts), [seed data/draft](../../../../revogrid-demos/pro-project-table/src/project-tracker/data.ts), [shared contracts](../../../../revogrid-demos/pro-project-table/src/project-tracker.shared.ts).
