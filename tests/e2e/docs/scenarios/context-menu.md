# Context Menu and Formatting scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/context-menu`. Catalog ID: `context-menu`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload restores nine flat team rows, IDs 101–109. ID is readonly; Score is readonly specifically for Archived records. The plugin provides a Formatting toolbar (Automatic value format, currency/percent and typography controls), disabled until a target is selected. Context menus provide additional actions on cells, row headers, individual column headers and grouped Identity header.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

Root reviewer opened and screenshotted this route in light theme at 1280×720. Right-click Ada opened menu with Edit cell, Copy options, Clear contents, Format, Rows, Filter, Export, Inspect cell and View employee profile. Escape closed it. The Formatting toolbar was initially disabled and became enabled with selection. Mutating menu commands and formatting were not exercised.

## Scenarios

### CONTEXT-001 · P0 · Authored rich data and readonly distinctions

1. Open route → Identity group with ID/Name and Team, Status, Score, Owner, Approved, Schedule, Joined columns appear.
2. Inspect Ada Lovelace → ID101, Platform, Active, score98, Avery Stone, approved true, Joined2024-01-15.
3. Inspect Alan Turing → ID105, Research, Archived, score99.
4. Attempt ID edit and Archived Alan Score edit → neither changes; an Active row Score remains editable.

Visual checks and automation notes: Status dropdowns, booleans, score progress and schedules must remain aligned in 48px rows. Check disabled affordances without relying only on color.

### CONTEXT-002 · P0 · Context menu is scoped and dismissible

1. Right-click Ada Name cell → Edit cell, Copy options, Clear contents, Format, Rows, Filter, Export, Inspect cell, and View employee profile appear near the target.
2. Press Escape → menu closes; Ada data remains unchanged.
3. Right-click Ada Name again and choose View employee profile → Employee profile dialog identifies Employee #101, Ada Lovelace · Platform, Status Active, Score98 and Owner Avery Stone; close dialog. Right-click a row header → View row details is available; Name header offers View column summary.
4. Right-click Identity group header and choose View column-group summary → Column-group summary dialog describes Identity; group surface replaces default commands with this custom inspection action.

Visual checks and automation notes: Menu targets differ materially. Do not require all surfaces to expose the same commands. Capture actual accessible command names on first browser pass.

### CONTEXT-003 · P0 · Edit then undo with readonly protection

1. Edit Ada Score98 to88 using its active format editor → displayed score/progress reflects88.
2. Invoke available Undo action/shortcut through HistoryPlugin → score returns98.
3. Select a range that includes an editable score and Archived Alan score; apply a clearing/paste action → editable destinations follow the action while readonly Alan score remains99.
4. Reload → authored values restore.

Visual checks and automation notes: Use exact menu/shortcut actually exposed by the plugin. Clipboard cases require a deterministic permission setup and known payload; never overwrite unrelated user clipboard without isolating the browser test context.

### CONTEXT-004 · P1 · Duplicate and insert preserve schema identity

1. Open Ada row menu and duplicate → one new row copies Ada data with a fresh ID greater than109.
2. Edit the duplicate’s Name → original Ada row remains unchanged.
3. Insert a blank row above/below through row menu → it receives another unique ID with empty editable fields, null status/score/approved and empty schedule.
4. Reload → nine original records return.

Visual checks and automation notes: Source createRow deep-copies schedule events and allocates new IDs. Verify unique identity, correct insertion position, and no accidental duplicate primary key.

### CONTEXT-005 · P1 · Cell formatting, column formatting and pinning

1. Right-click Grace Hopper Score95, open Format, and choose Circular progress presentation → Grace score renders as a circle, while numeric value remains95 and other rows keep their existing presentations.
2. Open Score column header Format and choose Progress line → rows without cell overrides use line presentation, while Grace retains the new circular override and Ada retains its authored circular-progress cell override (value98).
3. Double-click Ada Status → Status dropdown offers Active, Review, Archived and Not set; choose Review → cell becomes Review badge and reopening shows Review selected. Format options omit Pie, which the demo disables.
4. Pin a row with its row command then unpin → record moves to/from pinned presentation without duplication.

Visual checks and automation notes: Format-driven editors should match the applied format. Group inspection is custom; do not assume group menu provides default formatting commands.

### CONTEXT-006 · P0 · Formatting toolbar follows selection and preserves values

1. Hard reload with no selection → Formatting toolbar exists; its typography/action buttons are disabled and aria-disabled is true.
2. Select Ada Lovelace Owner cell containing Avery Stone → toolbar becomes enabled for that target; Automatic value-format control and Bold, Italic, Underline controls are reachable.
3. Click Bold → Avery Stone text becomes bold and Bold aria-pressed is true. Ada name/status and Grace owner Morgan Lee remain unchanged.
4. Click Italic and Underline → the same selected Owner gains those text styles, and each corresponding button reports aria-pressed true. Source owner is still the exact string Avery Stone.
5. Select Grace Hopper Owner → toolbar reflects Grace's own unformatted cell state rather than Ada's toggles. Return to Ada Owner → its three applied styles are reflected again.
6. Use the toolbar eraser / clear-formatting action on Ada Owner → applied cell styles clear, source value remains Avery Stone and neighboring cells do not change.

Visual checks and automation notes: scope buttons to role toolbar named Formatting toolbar; use aria-pressed and computed text styling together. Do not use Ada Score for a clean styling reset because it has an authored circular-progress override. The toolbar is plugin-generated through data-grid-formatting-panel=true; this case's mutations remain source-derived, while initial disabled/selected-enabled states were visually observed.

## E2E readiness and visual acceptance

Target `.data-grid-context-menu-grid`, data record IDs, cell props and context surfaces. The first browser run must enumerate plugin menu labels before implementing selectors. P0 assertions should verify changed/unchanged values through public grid source in addition to visible formatting.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Context-menu source checks](../../../../revogrid-demos/pro-data-grid-context-menu/tests/data-grid-context-menu.test.mjs) exist; end-to-end menu actions need docs-route verification.

References: [route](../../../../demo/context-menu.md), [view](../../../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.vue), [fixtures and readonly rules](../../../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.data.ts), [menu configuration](../../../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.shared.ts), [custom formats](../../../../revogrid-demos/pro-data-grid-context-menu/src/data-grid-context-menu.formats.ts).
