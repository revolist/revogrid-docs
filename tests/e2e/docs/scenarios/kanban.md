# Kanban showcase scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/kanban` · canonical ID: `kanban` · live implementation: Vue.

## Evidence and setup

Source reviewed 2026-09-08 at docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Existing dirty theme files `DemoNavigation.vue` and `style.scss` were not changed by this review. The coordinating agent opened this route in the browser, inspected initial and changed-state screenshots in light mode at 1280×720, and confirmed initial counts Backlog 3 / In progress 3 / Review 2 / Done 2 and five cards per lane. Product lane collapse hid its cards while Platform remained visible; expansion restored Product. These observations cover the initial count assertions in KAN-001 and lane collapse/expand in KAN-004. After a fresh reload, Space → three ArrowRight presses → Space moved KAN-101 from Product/Backlog to first position in Product/In progress; counts became Backlog 2 / In progress 4 (4 of 4 WIP) / Review 2 / Done 2, confirmed in a screenshot. This partially executes KAN-002 using the keyboard alternative below; pointer drag, move-back, detailed metadata preservation and cancellation were not exercised. Earlier Space → one ArrowRight → Space kept the original placement because that targets an insertion point in the same stack; it is not a defect. All other steps remain **code-derived, not executed**. Initial/changed screenshots were viewed in the browser-tool conversation only; no image files were persisted. Desktop-dark and narrow-light checks remain future coverage unless the central README matrix records them.

Open `http://127.0.0.1:4173/demo/kanban` in a fresh page before each case; use full reload, not only SPA navigation, to reset the module-level card array. The fixed fixture has 10 cards: Product 5, Platform 5; Backlog 3, In progress 3, Review 2, Done 2. Scroll within the board to reach offscreen columns/lanes. Record viewport and theme with every screenshot; desktop target 1440×900 and narrow target 390×844 are proposed automation sizes, not observed sizes.

Sources: [docs route](../../../../demo/kanban.md), [Vue mount](../../../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.vue), [fixture and configuration](../../../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.shared.ts), [card styles](../../../../revogrid-demos/pro-advanced-kanban/src/examples/showcase/kanban.scss).

## Cases

### KAN-001 · P0 · Initial board and rich cards

Execution: Partially executed: initial column/lane counts and initial screenshot; detailed card metadata assertions are source-derived.

1. Open the clean route and wait for the first card ⇒ four columns in order Backlog, In progress, Review, Done; Product team and Platform team lanes are available; counts reflect all 10 cards, not only rendered cards.
2. Inspect `KAN-101` Customer interview synthesis in Product/Backlog ⇒ High priority, Research, Due Aug 12, 20% progress, Maya and Ari avatars, description “Turn research notes into opportunity themes.”
3. Inspect `KAN-105` Release notes in Product/Done ⇒ 100% progress; `KAN-201` Persist fractional ranks belongs to Platform/Backlog.

Visual: high-priority cards have a red left accent and readable priority text; progress bars match their percentages; avatars, card title and description remain inside the card; no duplicate cards or blank stacks after loading. Due dates are literal fixture labels, not current-date assertions.

Automation: scope to `.kanban-showcase__grid`; identify `[data-kanban-card-id="KAN-101"]`, `.kanban-showcase-card-title`, `.kanban-showcase-progress`. Do not assert all 10 are simultaneously in the viewport.

### KAN-002 · P0 · Move a card and preserve its identity

Execution: Partially executed: keyboard cross-column move and counts; pointer drag, move-back and full metadata checks are source-derived.

1. Fresh load; drag KAN-101 by its Move card handle from Product/Backlog into Product/In progress, or focus the card and press Space → ArrowRight three times → Space ⇒ one card moves, Backlog count 3→2 and In progress 3→4. The keyboard path was executed and matched; the pointer path remains unexecuted.
2. Inspect moved card ⇒ ID, title, 20% progress, priority and avatars remain unchanged; no duplicate remains in Backlog.
3. Move it back before KAN-102 Define activation metric ⇒ original counts and first-two-card order return.

Visual: drag preview follows the pointer, target marker is inside the destination stack, no ghost remains after drop. Automation: use card identity and destination stack's column/lane attributes after confirming the mounted attributes; wait for settled projection rather than a fixed delay. Drag coordinates must come from current element geometry.

### KAN-003 · P0 · WIP warning permits the move

Execution: Code-derived; not executed in this review.

1. Fresh load; verify Review has KAN-104 and KAN-204, with global WIP limit 2 and Platform limit 1 ⇒ Review starts at capacity.
2. Move KAN-201 from Platform/Backlog to Platform/Review ⇒ move succeeds because `wipBehavior` is `warn`; Review becomes 3 and Platform/Review becomes 2 despite exceeding limits.
3. Move it back ⇒ Review returns to 2 and Platform/Review to 1; over-limit state clears.

Visual: warning state remains readable and does not obscure the card. Do not assert “blocked” behavior. Automation: count and source placement are primary assertions; discover warning indicator/announcement from rendered plugin UI before encoding exact wording.

### KAN-004 · P1 · Collapse lanes and their label column

Execution: Partially executed: Product lane collapse/expand; label-column and workflow-column collapse are source-derived.

1. Fresh load; activate Collapse swimlane for Product ⇒ Product cards disappear from that lane; Platform remains reachable with its original cards/counts.
2. Activate Expand swimlane ⇒ Product's five original cards return in their original stacks/order.
3. Activate Collapse swimlane labels ⇒ label strip shrinks from configured width 210 to 52; board cards remain usable.
4. Activate Expand swimlane labels ⇒ full lane titles return, with no data loss or overlap.
5. Collapse Backlog using its column header control, then expand it ⇒ compact column preserves its count, original Product/Platform cards reappear, and other columns retain their order.

Visual: count/header alignment, clipping and horizontal scrolling before/after each collapse. Automation: resolve buttons by accessible name, scoped to lane; assert data preservation rather than hard-coded pixel widths under responsive styling.

### KAN-005 · P1 · Selection, keyboard cancel and context menu restrictions

Execution: Code-derived; not executed in this review.

1. Fresh load; focus KAN-101 and select it ⇒ selected state is visually distinct.
2. Press Space, ArrowRight, then Escape ⇒ pickup is cancelled; KAN-101 stays in Product/Backlog and counts remain 3/3/2/2.
3. Open the card context menu using Shift+F10 or right click ⇒ movement actions are available; Open card, Edit card, Add card here and Delete card are absent by explicit showcase configuration.
4. Escape ⇒ menu closes and card remains unchanged; repeat a pointer move to prove cancellation did not leave the board stuck.

Automation: keyboard behavior is supported by the installed plugin; verify focus rests on `.kanban-card` before sending keys. One ArrowRight advances one insertion position, not one workflow column. From the original KAN-101 position, three ArrowRight presses reach Product/In progress; inspect the live-region target before dropping. An unchanged board after a same-position drop is expected, not a failed movement. This showcase mounts only KanbanPlugin, so do not invent an editor/save scenario based on the docs description's “inline editing” wording.

### KAN-006 · P1 · Scroll, theme and narrow-screen integrity

Execution: Code-derived; not executed in this review.

1. Fresh load; scroll horizontally to Done and vertically to Platform ⇒ last columns/lane remain accessible; headers stay aligned with stacks.
2. Run the same inspection separately in light and dark themes ⇒ priority, progress, labels and controls retain contrast.
3. At 390×844, use the docs Examples navigation and board scrolling ⇒ all four workflow columns remain reachable without page-wide overflow; opening/closing Code does not replace the live board.

Automation: capture initial, scrolled and collapsed board screenshots at fixed viewport/theme; use shared docs-shell scenarios for source-panel details. These viewport/theme interactions have not been executed in this review.

## Existing coverage and readiness

[Docs E2E](../demo-experience.spec.ts) checks the canonical shell for every catalog demo; its Kanban alignment test is the **planning page's** Kanban tab, not this route. [Standalone Kanban E2E](../../../../revogrid-demos/pro-advanced-kanban/tests/e2e/feature.spec.ts) covers showcase mount, first title and browser errors. Movement, WIP, collapse, keyboard and this route's visual checks still need E2E coverage. Stable card IDs and role-labelled controls are ready; drag destination selectors and warning UI need a browser confirmation. This document adds scenarios only, no test implementation or fixes.
