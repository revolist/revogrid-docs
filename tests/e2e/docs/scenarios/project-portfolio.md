# Row Grouping / Project Portfolio scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/project-portfolio`. Catalog ID: `project-portfolio` (Core Row Grouping, distinct from the Pro Project Tracker).

## Evidence and setup

Source review: 2026-09-08, docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of the reviewed workspace. Coordinating root reviewer supplied the limited browser observations below. All remaining scenario steps are source-derived, not executed passes.

Hard reload before each independent case, clear filters, and start with expanded groups. Source contains 19 projects grouped Department → Status across Product, Engineering, Design, Marketing, Operations, and Data. P0 cases gate basic behavior; P1 cases broaden regression coverage.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Collapse all showed six department rows: Product, Engineering, Design, Marketing, Operations and Data. Expand all was clicked; deeper independent branch, sort and filter cases were not fully exercised.

## Scenarios

### PORTFOLIO-001 · P0 · Initial grouped hierarchy and formatting

1. Open the route → toolbar says `Grouped by Department → Status`; `.portfolio-grid` renders grouped rows.
2. Locate Product → On track → `Mobile onboarding` → owner is Priya Shah, progress 82%, status On track, budget $180k, target Sep 18, risk Low.
3. Inspect Engineering → On track → both Grid rendering v5 and Plugin SDK belong to that subgroup.

Expected: department and status headers form two hierarchy levels; group rows are not mistaken for editable project records. Visual checks: progress fills match their percentage, risk dots and status pills have readable labels, and indentation differentiates both group levels. Do not count all rows through rendered DOM because grouping and virtualization add/remove visible rows.

### PORTFOLIO-002 · P0 · Collapse all and restore

1. Click `Collapse all groups` → project rows are hidden and the button becomes `Expand all groups`.
2. Check root department groups remain navigable → no blank grid or orphan status rows.
3. Click `Expand all groups` → Product / On track / Mobile onboarding and Engineering / On track / Plugin SDK return with their original values.
4. Repeat once → no duplicated group headers or accumulating rows.

Automation: prefer the exact aria-label on `.portfolio-toggle`; assert identities and hierarchy rather than a screenshot-only row count. Visual checks: collapse icon changes direction and row heights settle without empty gaps.

### PORTFOLIO-003 · P0 · One branch changes independently

1. Collapse Product using its group expander → Product children disappear while Engineering children remain.
2. Reopen Product, then collapse only its On track subgroup → Mobile onboarding disappears while Pricing experiments under At risk remains.
3. Reopen the subgroup → Mobile onboarding returns once with unchanged owner and progress.

Automation: scope expansion to the group label and hierarchy level, avoiding duplicate On track labels under other departments. Visual checks: every expander stays aligned with its label, and adjacent department rows do not shift horizontally.

### PORTFOLIO-004 · P1 · Filtering and sorting preserve record membership

1. Apply an exact Project filter for `Mobile onboarding` → the matching project remains in Product / On track; no unrelated project data is shown.
2. Clear that filter → all original projects and their group membership return.
3. Sort Progress ascending then descending → project values within the grouping follow the active ordering without changing department/status or detaching owner/budget data.
4. Collapse and expand after sorting → sorting remains consistent and records appear only once.

Expected filtered-group policy should be confirmed in the first browser run: this demo delegates empty-group presentation to core grouping. The release gate is correct project membership and restored data, not an invented requirement about empty group headers.

### PORTFOLIO-005 · P1 · Resize and themed layout

1. Narrow Project and widen Progress → header and body boundaries move together; the percentage remains legible.
2. At 390×844 scroll horizontally to Risk → the grid stays inside the docs workspace; toolbar and group toggle remain reachable.
3. Switch docs theme and repeat a collapse/expand → progress tracks, status pills, risk labels, and group text remain distinguishable in light and dark.

## Automation and coverage

Primary targets: `.portfolio-grid`, `.portfolio-toggle`, column props `project`, `owner`, `progress`, `status`, `budget`, and fixture project identities. Reset with hard reload because PROJECTS is module-level data. Await rendered data/group state rather than arbitrary sleeps. Screenshot acceptance should cover initial, globally collapsed, and one-branch-collapsed states at 1440×900 and 390×844.

Existing [docs shell checks](../demo-experience.spec.ts) do not exercise these group interactions. [Source tests](../../../../revogrid-demos/core-project-portfolio/tests/project-portfolio.test.mjs) are unit/source coverage, not browser proof.

References: [route](../../../../demo/project-portfolio.md), [Vue component](../../../../revogrid-demos/core-project-portfolio/src/project-portfolio.vue), [fixtures, renderers and grouping](../../../../revogrid-demos/core-project-portfolio/src/project-portfolio.shared.ts).
