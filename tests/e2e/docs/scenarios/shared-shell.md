# Shared docs shell scenarios

Applies to every [catalog entry](README.md). Reviewed 2026-09-08 on the live checkout/revisions in the catalog. Each case starts with an isolated context, light theme and 1440×900 unless specified. Reset the source-framework session preference only for a fresh-default case; retain it deliberately for persistence checks. A full reload resets in-memory demo edits, subject to each demo's storage contract.

Sources: [navigation](../../../../.vitepress/theme/DemoNavigation.vue), [layout and focus restoration](../../../../.vitepress/theme/DemoPageLayout.vue), [source panel](../../../../.vitepress/theme/DemoSourcePanel.vue), [source registry](../../../../.vitepress/theme/demoSources.ts), [theme layout](../../../../.vitepress/theme/style.scss), [catalog](../../../../commercial/productCatalog.ts). Existing [docs tests](../demo-experience.spec.ts) cover parts of navigation/source/responsiveness; [source tests](../../../unit/vitepress/theme/demoSources.test.ts) cover mapping. Neither establishes complete scenario execution here.

### SHELL-01 · P0 · Every canonical route mounts its own demo

Purpose: catch wrong mounts, broken assets and shell-only false positives.

1. Open each of the 21 routes in the index independently → one `[data-demo-id]` matches the catalog ID, the corresponding heading/plan appears and Code, GitHub and Try in your app are reachable.
2. Wait for the fixture identity in that demo's initial-load case → its real content appears; a shell, empty custom element or loading skeleton alone is insufficient. For remote examples wait for loaded content/status.
3. Inspect navigation → exactly one matching canonical example has the active presentation; its destination agrees with the catalog.
4. Open Code and close with Back to demo → original workspace remains present and no second demo is mounted.

Visual: header/actions and grid are readable, content scrolls within the intended workspace, no persistent loading layer hides data. Audit History also requires its Change ledger panel to be ready.

Automation: scope to demo ID, then actual fixture record; assert link destinations without following trial or GitHub links. Collect errors and asset failures, distinguishing localhost external services from demo failures. Do not use analytics `demo_ready` alone as a data-ready oracle.

Evidence: all routes opened and initial screenshots inspected; step 4 was exercised on Planning, not all 21. Full navigation/DOM-uniqueness assertions remain source-derived.

### SHELL-02 · P0 · Aliases preserve canonical demo identity

Purpose: protect existing entry URLs without duplicate scenario coverage.

1. Open `/demo/planning` → mounts `[data-demo-id="planning"]`, Project workspace, the five view tabs and default 100 of 100 tasks; canonical link is `https://rv-grid.com/demo/`.
2. Inspect navigation → Project workspace is active. Follow its canonical link `/demo/` → same initial fixture and view family load.
3. Open `/demo/hr` → mounts `[data-demo-id="grid-at-scale"]`, Performance dataset controls and Avery Chen; canonical link is `https://rv-grid.com/demo/grid-at-scale`.
4. Follow Performance's canonical link → same demo family appears. Back/forward across aliases → mounted identity always follows route; no duplicate entry is added to navigation.

Visual: aliases share canonical layout rather than old standalone chrome. Automation: assert DOM identity and canonical metadata, not an HTTP redirect that these pages do not implement. Reuse canonical workflow cases after mount.

Evidence: both alias pages opened at 960×800/light; IDs and canonical links read from DOM and content screenshotted. Active styling and back/forward round trip remain source-derived. Sources: [planning alias](../../../../demo/planning.md), [HR alias](../../../../demo/hr.md), navigation normalization above.

### SHELL-03 · P0 · Find a demo and recover from no results

Purpose: navigation search must not filter or reset the active demo.

1. On Planning, type `Maya` into Quick search tasks and wait for 20 of 100 tasks → this establishes observable workspace state.
2. In Find a demo type `kanban` → only Kanban, 50K Kanban and 100K Remote Kanban remain; route and Maya workspace query stay unchanged.
3. Replace navigation query with `zz-no-demo-qa` → No matching demos appears; live workspace remains usable.
4. Select all navigation search text and Backspace → all 21 examples return. Repeat with `  KANBAN  ` → the same three matches appear because matching trims and ignores case.
5. Clear and follow Filtering → route and active entry become Filtering; its own 217 of 10,000 initial fixture loads.

Visual: search field, clear state and sidebar scrollbar fit; an empty group heading must not linger after its last result is removed. Automation: distinguish Find a demo from Quick search tasks and the site's global Search. Match navigation links within Demo examples, not incidental text elsewhere.

Evidence: three matches, no results and clearing observed; whitespace/case variant and final navigation sequence remain source-derived.

### SHELL-04 · P0 · Source framework, files and workspace preservation

Purpose: switching reference code must not replace the live Vue demo.

1. Fresh Planning with no source-framework preference; search Maya → 20 of 100. Click Code → Use this example dialog opens with Vue selected and its registered first file loaded.
2. Choose React → selected tab and File value become the registry's React entry (`planning.react.tsx`); displayed code belongs to it, while the existing workspace and Maya result remain unchanged.
3. Choose Angular, then JavaScript (the Vanilla TS example) → each displays its own registered file. If a framework has multiple files, select another File → displayed text matches that file. Changing framework resets file selection to its first file.
4. Close, then reopen → last selected framework is retained in session storage, first file selected, and Maya state remains 20 of 100. Open a different demo's Code → framework preference carries over but code comes from the new demo.
5. Clear only `revogrid-demo-source-framework` in a new isolated context → Vue is default again.

Visual: selected source tab, filename and code agree; long lines scroll inside source; preview retains its size/selection as space permits. Automation: use dialog, Source framework tabs and File select; compare source contents to the registry. Four tabs do not mean four running framework implementations.

Evidence: Planning React file and preserved Maya query observed. The earlier panel displayed Live preview uses Vue and a command area; both were removed by concurrent changes and are not current acceptance requirements. Latest panel was reopened and JavaScript tab/React file confirmed. All-framework/file/persistence round trip is source-derived.

### SHELL-05 · P1 · Close, focus and keyboard boundaries

Purpose: source browsing must leave a usable keyboard position.

1. Focus Code using keyboard and activate → dialog opens and Back to demo receives focus.
2. Tab through controls to the final Copy file, then Tab → focus wraps to the first control; Shift+Tab from the first → focus wraps to last. Background grid must not receive these dialog keystrokes.
3. Press Escape → source closes, Code has focus, original workspace query/committed data remains.
4. Reopen and click Back to demo → same restoration; repeat twice → no duplicate overlay or lost focus.
5. Repeat at 390×844 → visible Back to demo remains reachable above scrollable code and returns to the workspace.

Visual: visible focus ring, no source overlay left behind, scroll containers do not hide the close action. Automation: assert `document.activeElement` via supported DOM access, dialog disappearance and query value. Test fullscreen Escape separately from source Escape because the browser can consume fullscreen keys first.

Evidence: Escape, focus returned to Code and Maya preservation observed at 1280×720/dark; mobile source/back affordance inspected. Tab trap, repeat and fullscreen combination remain source-derived.

### SHELL-06 · P1 · Copy and failed source loading recover

Purpose: code actions and errors have verifiable outputs instead of silent failures.

1. Open Code and wait for a real source file → Loading source disappears and Copy file has nonempty source available.
2. Activate footer Copy file in an isolated clipboard context → clipboard equals the current raw file, not syntax-highlighting markup; feedback changes to Copied then returns to Copy file.
3. Repeat after switching framework/file → copied source reflects the new selection.
4. In a separate controlled fixture, reject clipboard permission → Copy failed is shown; workspace and source remain usable. Restore permission and retry → clipboard now matches current text.
5. In another controlled fixture, fail the source load → Source could not be loaded and Retry appear. Restore the source response and Retry → correct code appears without remounting the workspace.
6. Fail only syntax highlighting → plain readable source appears; copying still returns raw source.

Visual: error/retry text fits at narrow width and has readable contrast in both themes. Automation: intercept only the relevant source/clipboard boundary in an isolated test; do not disconnect the whole application or use real user clipboard. Failure injection and all copy assertions are **source-derived, not executed**. The current panel has only file copying; the earlier command-copy area was removed during review.

### SHELL-07 · P1 · Four viewport sizes and theme remain usable

Purpose: catch clipped controls, overlay bleed and reserved empty sidebar space.

1. Open Planning at 1440×900/light → sidebar is persistent, header/actions readable and workspace fits available width. Repeat at 1280×720 → no overlapping action labels or hidden workspace controls.
2. Resize to 960×800 → Examples trigger replaces persistent sidebar; closed navigation must not reserve an unused 256px strip. Open/close Examples → overlay is opaque enough for its own text to be read without workspace text bleeding through.
3. Resize to 390×844 → header/actions stack, page content stays within viewport, and overflowing grids/boards use internal scrolling. Open Examples, choose a demo → overlay closes and destination loads; reopen and use Close examples → returns to current route.
4. Open Code at each size → desktop split panel or narrow overlay fits, source scrolls internally and close is reachable. Close → workspace recovers its width without losing its query.
5. Use the site theme control to switch light/dark → text, grid backgrounds, selected cells/tabs, disabled controls, popups and focus rings remain distinguishable; fixture count/query do not reset. Restore original theme.
6. Apply the same initial and primary-overlay checks to every canonical demo and every exposed workspace → no toolbar overlap, misplaced selection, clipped popup actions or persistent blank scrolled areas.

Automation: use the four exact viewport sizes above; compare settled geometry/screenshots after data readiness. Separate document overflow from intentional grid overflow. Do not approve today's screenshot as a baseline until the findings below are resolved. Color values alone do not establish readability.

Evidence: [matrix](README.md#viewport-and-theme-evidence) specifies inspected combinations. The drawer surface, intermediate gutter, and toolbar collisions are resolved in [observed issues](observed-issues.md). Complete theme-transition/state-preservation and all-overlay matrix remain unexecuted.

### SHELL-08 · P1 · Navigation lifecycle and isolated state

Purpose: detect stale projections, listeners and state leaking between demos.

1. Fresh Planning, search Maya → 20 of 100. Open/close Code → remains 20 of 100.
2. Navigate to Filtering → its default 217 of 10,000 and default badges appear, without Planning query or tasks.
3. Navigate to Remote Kanban and wait for loaded status → loaded cards have no duplicate identities (multiple chunk requests are legitimate); navigating back to Filtering → correct filter fixture returns according to its reset contract.
4. Repeat this route loop twice → one workspace per route, no duplicated toolbar/dialog, no dead controls or previously mounted overlays.
5. Full reload Planning in fresh storage → default 100 of 100, not the former Maya search. Separately run each demo's explicit saved-settings case → only settings documented as persisted survive reload.

Visual: back/forward and loading transitions never leave permanent white content after real readiness. Automation: use final stable identities and bounded mounted content; record application errors. Do not require all demos to share a persistence policy. Vite HMR resets during this review are environment interruptions, not established navigation defects.

Evidence: repeated canonical navigation occurred during review; this exact lifecycle loop and listener/data-uniqueness assertions are source-derived and unexecuted.

### SHELL-09 · P1 · Source full screen returns to the same file

Purpose: cover the source full-screen control added to the live tree during review.

1. Open Planning Code and choose React → `planning.react.tsx` is selected and source is readable.
2. Activate Full screen code → source panel fills the browser's fullscreen surface; control becomes Exit full screen code and selected framework/file stay unchanged.
3. Scroll code, then activate Exit full screen code → panel returns to its normal split/overlay placement with the same file; underlying demo remains available after Back to demo.
4. Reopen, enter full screen and press Escape once → browser exits full screen; source dialog remains open. Press Escape again → dialog closes and Code regains focus.
5. Repeat at 390×844 and in dark theme → file controls, fullscreen exit and Back to demo remain reachable, with readable code and contained scrolling.

Visual: no stuck fullscreen backdrop, detached source content or clipped exit control. Automation: wait for `fullscreenchange`/settled `document.fullscreenElement`, not an immediate read after clicking; assert file identity before/after. Browser fullscreen requires supported user activation; explicitly skip with reason if the automation host cannot provide it.

Evidence: latest panel opened at 1440×900/light, React file shown, Full screen code activated and expanded screenshot inspected; Exit full screen code and Back to demo succeeded. Escape sequence, mobile and dark fullscreen remain source-derived. Source: DemoSourcePanel fullscreen methods and lifecycle listener cited above.
