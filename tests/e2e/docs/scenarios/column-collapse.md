# Column Collapse scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/column-collapse`. Catalog ID: `column-collapse`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload restores 12 contacts. Personal Information and Contact begin collapsed; Address begins expanded. Age, Street, and Email are sealed and must remain visible when their groups collapse. Age is pinned at the start and also owns row selection.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Expanding Personal Information revealed First Name/Last Name and John Doe. Collapsed it, then expanded Contact and saw additional telephone-number columns. Filter/selection persistence and pinned-boundary resize were not exercised.

## Scenarios

### COLLAPSE-001 · P0 · Authored collapsed state

1. Open route → Age, Street, City, Country, and Email headers are available; First Name / Last Name and Phone / Mobile are initially hidden.
2. Inspect the first contact → Age 30, Street 123 Main St, City New York, Country USA, Email john@example.com are associated.
3. Inspect another contact → Jane Smith data has Age 28 and São Paulo; accented text renders correctly when its column is visible.

Visual checks and automation notes: Grouped headers span their current visible children; sealed columns must not disappear. Group labels should remain legible even when one child remains.

### COLLAPSE-002 · P0 · Expand and collapse personal data

1. Activate Personal Information group toggle → First Name and Last Name appear alongside Age; first contact is John Doe.
2. Collapse it → names disappear, Age remains pinned, and Address data does not change.
3. Repeat expansion → John Doe appears once and resizing/scroll boundaries remain aligned.

Visual checks and automation notes: Target the group header by name and its toggle; body cells alone cannot establish header collapse state.

### COLLAPSE-003 · P0 · Independent group toggles

1. Expand Contact → Phone and Mobile appear for John as 123-456-7890 and 098-765-4321.
2. Collapse Address → Street stays while City/Country hide; Contact remains expanded.
3. Collapse Contact → Email stays while phone numbers hide.
4. Reopen Address and Contact → all original values restore without a reload.

Visual checks and automation notes: Watch for sealed-child loss, group-width mismatch, and the wrong group changing. Verify source is unchanged; this is presentation state.

### COLLAPSE-004 · P1 · Filter and selection survive presentation changes

1. Use the Age header filter to match 30 → John is the matching contact.
2. Select his row with the Age selection control → selected styling is visible.
3. Expand and collapse Personal Information → the row remains filtered and selected.
4. Clear the filter → other contacts return and John retains the same data; clear selection before reset.

Visual checks and automation notes: Age filter placeholder is Age?. Resolve filter operator through the actual popup, not a made-up toolbar. Verify row identity rather than selected DOM position.

### COLLAPSE-005 · P1 · Pinned boundary and resize

1. Expand all groups and horizontally scroll right → personal columns stay pinned at the left while the unpinned area scrolls.
2. Resize a visible unpinned child → header and cells share the new width.
3. Collapse and reopen that group → no overlapping pinned/unpinned text or misplaced selection controls.

Visual checks and automation notes: Use screenshot comparisons at the pin boundary in both themes; inspect after animations settle.

## E2E readiness and visual acceptance

Target `.column-collapse-grid`, named group headers, Age? filter, and fixture email. Group toggles are plugin-generated; confirm their actual accessible names on the first browser pass. Do not assume a global Expand all toolbar, because this demo has none.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Column collapse source tests](../../../../revogrid-demos/pro-column-collapse/tests/column-collapse.test.mjs) validate configuration; the interactions above need docs E2E coverage.

References: [route](../../../../demo/column-collapse.md), [view](../../../../revogrid-demos/pro-column-collapse/src/column-collapse.vue), [columns and contacts](../../../../revogrid-demos/pro-column-collapse/src/column-collapse.shared.ts).
