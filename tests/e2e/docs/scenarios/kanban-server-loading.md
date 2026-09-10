# 100K server-loaded Kanban scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/kanban-server-loading` · canonical ID: `kanban-server-loading` · live implementation: Vue.

## Evidence and setup

Reviewed source 2026-09-08 at docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; existing dirty theme files `DemoNavigation.vue` and `style.scss` were not modified. The coordinating agent opened this route, captured initial/changed screenshots in light mode at 1280×720, and observed initial “Loaded from server: 100 of 100,000 cards.” After six pages of scrolling, status changed to Loading and then “Loaded from server: 2,200 of 100,000 cards.” Newly visible cards included 191, 206, 369 and 2,060; logical column counts remained 47,500 / 34,000 / 16,000 / 2,500. This partially executes KSRV-001, KSRV-002 and the status-count assertion in KSRV-003. Cross-lane placement, return-to-top identity, final-range, column collapse, rapid-scroll and teardown assertions remain **code-derived, not executed**. Initial/changed screenshots were viewed in the browser-tool conversation only; no image files were persisted. Desktop-dark and narrow-light checks remain future coverage unless the central README matrix records them.

Use a fresh load of `http://127.0.0.1:4173/demo/kanban-server-loading` per case. This is a deterministic **simulated remote callback**, not an HTTP backend: empty initial source, logical total 100,000, page/chunk size 100 and 450ms artificial delay. Do not wait for a fictional network endpoint. Placeholder and loaded card share the same ID, status, team and order; placeholder title is empty.

Sources: [route](../../../../demo/kanban-server-loading.md), [Vue status and mount](../../../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.vue), [remote callback and placement](../../../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.shared.ts), [styles](../../../../revogrid-demos/pro-advanced-kanban/src/examples/server-loading/kanban-server-loading.scss).

## Cases

### KSRV-001 · P0 · Initial request resolves to real cards

Execution: Partially automated and executed on 2026-09-10 in the docs host at 1280×720. The focused test waited for the polite Loaded from server notice, verified its 100,000-card total, then verified real `server-1` content, all four workflow headings and their logical counts. Loading-state timing and the individual server-2–4 placement assertions remain source-derived.

1. Fresh load ⇒ four workflow columns To do, Doing, Review, Done and top-layout swimlanes Product, Platform, Growth are available; a polite live status is present.
2. During callback, observe “Loading cards from server…” ⇒ placeholders can appear while loading; no fake completed title is shown for an unresolved placeholder.
3. Wait for “Loaded from server: N of 100,000 cards.” ⇒ visible placeholders resolve to titled cards; first chunk maps server-1 to Server card 1/Product/To do, server-2 to Doing, server-3 to Review and server-4 to Done.

Visual: notice does not overlap column headers, titles fit card rows, loading placeholders are distinct from completed cards. Automation: `.kanban-server-loading__notice` (`role=status`, `aria-live=polite`), `.kanban-server-loading__grid`, `[data-kanban-card-id="server-1"]`. Allow underfill-triggered extra requests: do not assume the settled initial notice always says 100.

### KSRV-002 · P0 · Scroll requests new ranges without changing placement

Execution: Partially executed: six-page scroll, loading/resolution and new visible cards; other steps are source-derived.

1. Fresh load; wait for real initial cards and record notice N.
2. Scroll beyond loaded content within Product ⇒ notice transitions through loading, then a newly reached range endpoint; new card titles replace placeholders without changing their intended column/team/order.
3. Scroll to Platform then Growth ⇒ remote cards for those teams resolve; no Product card is wrongly inserted into another lane.
4. Return to initial position ⇒ Server card 1 retains ID/status/title and is not duplicated.
5. Collapse To do with its column control, then expand ⇒ existing loaded identities remain stable and newly exposed unresolved cards can still load.

Visual: stable column/lane geometry during placeholder replacement; no endless blank stack after load completes. Automation: wait for an actual new titled card/loaded range instead of sleeping 450ms. The notice N is the last callback's **range end**, not a cumulative number of unique loaded cards; requests may finish out of order, so do not require monotonic notice values or equate N with DOM count.

### KSRV-003 · P0 · Logical totals and uneven distribution

Execution: Partially executed: all four logical status totals stayed correct after loading; team totals and empty-lane assertions are source-derived.

1. Fresh load; inspect column totals after initial render ⇒ logical status populations are To do 47,500; Doing 34,000; Review 16,000; Done 2,500 across the complete dataset, independently of loaded count.
2. Reach all lanes ⇒ logical team populations are Product 40,000, Platform 30,000, Growth 30,000.
3. Inspect Platform and Growth Done stacks ⇒ empty is expected: Done cards occur only within the first 100 positions of each 1000-position placement cycle, which are Product records.
4. Scroll and load more ⇒ total remains 100,000 and reported logical counts do not inflate with placeholder replacement.

Visual: uneven/empty stacks are intentional, not mistaken for missing cards; the board remains scrollable to larger stacks. Automation: confirm rendered count label format before asserting exact text; use logical totals and immutable IDs rather than counting currently mounted card nodes. Do not assert equal counts per column/lane.

### KSRV-004 · P1 · Rapid scrolling and final range

Execution: Partially automated and executed on 2026-09-10 at 1280×720. The focused docs E2E verified the polite live-status attributes, a loaded `server-1`, navigation to the task-board route without a leaked server notice, and a clean fresh remount with loaded `server-1`. The docs shell is slower than the fixture's 450 ms delay, so its first mounted card is already resolved; the transient placeholder state is unavailable for reliable docs-host assertion. Theme/narrow checks remain source-derived.

1. Fresh load; rapidly scroll down/up/down across several unloaded areas ⇒ eventual visible cards correspond to the final viewport, with no duplicate IDs or permanently unresolved placeholders.
2. Navigate near the logical end using the board's scroll control ⇒ final loaded titles do not exceed Server card 100,000; callback endpoint is capped at 100,000.
3. Return to top ⇒ initial titles are still usable and loading does not restart endlessly while idle.

Visual: no full-page scrollbar jumps, stuck loading overlay or collapsed height. Automation: discover the board's virtual-scroll target from the actual UI; choose a bounded number of large scroll gestures and assert visible identity changes. Reaching the final range is P1 stress coverage and must have its own timeout budget; do not impose machine-specific timing thresholds.

### KSRV-005 · P1 · Theme, narrow layout and route teardown

Execution: Code-derived; not executed in this review.

1. Fresh desktop run; capture loaded state in light/dark ⇒ notice, placeholders and real cards are readable, with borders separating neighboring stacks.
2. At 390×844, scroll to all four columns and three lanes ⇒ content stays reachable through the board; notice wraps without covering controls.
3. Trigger loading, navigate to another demo, then return with a fresh load ⇒ board mounts again with a fresh status lifecycle; old callbacks do not insert cards into the other demo or cause duplicate notices.

Automation: use visible status and card readiness rather than network-idle. Shared shell tests cover navigation mechanics; this case covers lifecycle during the simulated delay. Viewport/theme runs have not yet been executed.

## Limits and existing coverage

The provided callback always resolves successfully and exposes no failure toggle. A Retry/error recovery case requires a deliberate rejected `loadData` fixture in a future E2E harness; it is **blocked by fixture capability**, not verified by slowing or aborting unrelated HTTP requests. Do not claim backend persistence for card moves: this example has no remote write service.

[Docs E2E](../demo-experience.spec.ts) asserts this route's shell. [Standalone Kanban E2E](../../../../revogrid-demos/pro-advanced-kanban/tests/e2e/feature.spec.ts) has showcase/performance/use-case tests but no server-loading interaction test. Readiness targets are status, stable card IDs, lane/column labels and a browser-confirmed scroll container. No tests or application behavior are changed by this document.
