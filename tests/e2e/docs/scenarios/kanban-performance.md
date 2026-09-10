# 50K-card Kanban scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/kanban-performance` · canonical ID: `kanban-performance` · live implementation: Vue.

## Evidence and setup

Source reviewed 2026-09-08 at docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`; pre-existing dirty theme files `DemoNavigation.vue` and `style.scss` remain untouched. The coordinating agent opened the route and inspected initial/changed screenshots in light mode at 1280×720. Double-clicking Customer interview synthesis opened its editor with Story points 5; saving -1 retained the editor with “Story points cannot be negative.”; saving 13 and reopening showed 13; Cancel closed the editor. This is **partial execution of KPERF-003**: title editing, an unsaved-change cancellation, scroll persistence and reload reset were not exercised. Other cases remain **code-derived, not executed**. Initial/changed screenshots were viewed in the browser-tool conversation only; no image files were persisted. Desktop-dark and narrow-light checks remain future coverage unless the central README matrix records them.

Open `http://127.0.0.1:4173/demo/kanban-performance` with a full reload for each case. The generated fixture contains exactly 50,000 cards, 5,000 per workflow column and 25,000 per team (2,500 per column/team pair). Order: Backlog, Triage, Ready, Design, Development, Testing, Review, Blocked, Release, Done. Product team and Platform team are separate lanes. Source array is module-level, so SPA revisits are insufficient isolation after mutation.

Sources: [docs route](../../../../demo/kanban-performance.md), [Vue mount](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.vue), [fixture, board and editor configuration](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board-data.ts), [styles](../../../../revogrid-demos/pro-advanced-kanban/src/examples/performance/kanban-board.scss).

## Cases

### KPERF-001 · P0 · Large board mounts with accurate counts

Execution: Code-derived; not executed in this review.

1. Fresh load; wait for KAN-101 Customer interview synthesis ⇒ Product/Backlog contains this card, with High priority and research description; each workflow header reports 5000 cards.
2. Inspect KAN-101 ⇒ owner Maya, 5 story points in editor data, fixed start/end August 3–5 2026 and due August 6; card identity remains KAN-101.
3. Scroll horizontally through all ten columns ⇒ Done includes 50k-card benchmark; headers retain their order and counts.

Visual: cards fill their stack without clipping text/avatars, no blank initial viewport, fixed-size cards maintain readable spacing. Automation: `.kanban-board__grid`, `[data-kanban-card-id="KAN-101"]`, `.kanban-column-header__count`. Reuse the standalone initial viewport bound of >0 and <100 rendered cards only at the same fixed desktop geometry; never expect 50,000 DOM cards.

### KPERF-002 · P0 · Virtualized scrolling preserves data

Execution: Automated and executed on 2026-09-10 at 1280×720 in the docs host. The focused test scrolled the virtual row surface until mounted card IDs changed, confirmed fewer than 100 mounted cards with no duplicate IDs, then returned to KAN-101. At this width, four workflow headers are mounted at once by horizontal virtualization; each visible count remained 5000 cards.

1. Fresh load; record first visible Backlog ID/title, then scroll deeply within the Product lane ⇒ later sequence titles and IDs appear, rather than permanently blank cards or repeated first records.
2. Scroll horizontally while deep in the lane ⇒ visible cards belong to their correct workflow and column headers remain aligned.
3. Reach Platform and inspect its first Backlog card KAN-111 Customer interview synthesis 2 ⇒ team is Platform; return to Product/top ⇒ KAN-101 returns with original title and metadata.
4. Repeat down/up scrolling three times ⇒ no accumulating duplicate card IDs, no continuously growing rendered-card population, all header totals remain 5000.

Visual: capture top/deep/returned states; watch blank flashes that never resolve, misplaced drag handles, and disappearing headers. Automation: read rendered identity sets and bounded DOM, not a machine-dependent FPS threshold. Determine the actual scroll container from the mounted grid before implementation; wait for new card IDs after scrolling.

### KPERF-003 · P0 · Edit, validate and cancel

Execution: Partially executed: automated validation/save and independent cancel/reopen flows passed on 2026-09-10 at 1280×720. The first retained a negative Story points error, then saved the corrected 13-point/title update; the second discarded an unsaved title and reopened the original five-point card. The same-page save-then-cancel sequence and reload reset remain pending; other steps are source-derived.

1. Fresh load; double-click KAN-101 or focus it and press Enter ⇒ card editor opens with existing title and Story points 5. Progress field is absent (`hiddenFields: ['progress']`).
2. Set Story points to -1 and attempt save ⇒ “Story points cannot be negative.” is displayed; editor remains open and canonical points remain 5.
3. Set Story points to 13 and title to “E2E research updated”; save ⇒ dialog closes and the same KAN-101 card displays the new title.
4. Reopen ⇒ points 13 and updated title persisted for this mounted page; change title to “Do not save” and cancel ⇒ title remains “E2E research updated”.
5. Scroll away/back ⇒ edited card remains updated; full reload ⇒ original title and 5 points return.

Visual: validation stays associated with its input, save/cancel controls remain visible, editor overlays are not cut off by grid overflow. Automation: scope controls to the dialog, use Story points label and stable card ID; confirm save/cancel accessible names in the browser before writing selectors. No assertion should depend on current-date default draft fields.

### KPERF-004 · P1 · Create and remove a disposable card

Execution: Automated and executed on 2026-09-10 in the docs host at 1280×720 and 390×844. The focused workflow created a titled Product/Backlog card through the current card action menu, observed Backlog move from 5000 to 5001, used the visible recent-card control to remove only that generated card, and verified the count returned to 5000 with no page-wide horizontal overflow at the narrow viewport.

1. Fresh load; open the context action menu on Product/Backlog KAN-101 and invoke Add card here ⇒ editor draft has blank title/description, Medium priority, Story points 3, New tag, empty assignees and Product team.
2. Enter unique title “E2E temporary backlog card”, points 2, save ⇒ Backlog becomes 5001 and other column totals stay 5000. The docs demo’s created-card status strip exposes that exact title and its Remove action, because an end-ranked card is outside the current virtual viewport.
3. Activate the strip’s Remove action ⇒ only the generated title disappears and Backlog returns to 5000. Reload before any independent edit/reopen persistence check.

Visual: new-card identity and remove target remain reachable above the virtual board, not hidden behind an editor or thousands of end-ranked cards; count and empty-space layout update cleanly. After removal, the 390×844 board has no page-wide horizontal scrolling. Automation: scope the action menu to KAN-101, locate the `status` by its unique title, and use `Delete recently created card`; never assume a generated ID or timestamp. Delete only the test-created record. The performance fixture intentionally disables browser confirmations for repeatable cancel/delete actions.

### KPERF-005 · P0 · Move under load and warn on WIP

Execution: Partially automated and executed on 2026-09-10 in the docs host at 1280×720. The focused workflow moved KAN-101 from Product/Backlog to Product/Triage through its rendered context menu, observed Backlog/Triage change to 4999/5001, returned the virtualized end-ranked card through the board's visible last-moved-card control, restored both to 5000, then collapsed and remounted Product to confirm KAN-101 is visible. Cross-lane and WIP-warning behavior remains source-derived.

1. Fresh load; open KAN-101's context menu, hover Move card, and choose Product/Triage ⇒ Backlog is 4999 and Triage is 5001. The card retains its title and appears only once.
2. Observe the Moved card status strip, which names Customer interview synthesis and provides Return recently moved card when the end-ranked destination makes the card leave the mounted virtual range.
3. Activate Return recently moved card ⇒ the strip closes and both Product/Backlog and Product/Triage return to 5000.
4. Collapse Product, then expand Product ⇒ KAN-101 remounts and is visible in Backlog, proving the return restored the board's canonical source data.
5. Move it across lanes to Platform/Review ⇒ Triage returns to 5000; Review becomes 5001 and Platform/Review 2501. Inspect WIP: Platform/Review already exceeds its configured limit 260 at baseline; another move warns rather than blocks. This cross-lane warning path is source-derived and remains a future E2E case.

Visual: context and submenu overlays remain readable above the virtual board; the moved-card control remains reachable outside the stack; collapse/remount does not leave a blank lane or stale count. The Review warning must remain readable in its already-over-limit lane. Automation: scope the context menu to KAN-101, hover its Move card menuitem, target the `menuitemradio` named Triage, then locate the `status` by Moved card and use Return recently moved card. Validate counts after each mutation and use the remounted card identity rather than pre-scroll coordinates.

### KPERF-006 · P1 · Collapse/expand and keyboard recovery

Execution: Code-derived; not executed in this review.

1. Fresh load; collapse Product team ⇒ Platform remains usable; expand Product ⇒ its 25,000-card logical total and first cards return.
2. Collapse swimlane labels ⇒ compact label strip (configured 52 versus expanded 210) retains recognizable team title; expand ⇒ full heading returns.
3. Focus KAN-101, Space, ArrowRight, Escape ⇒ move cancels without count or order changes; subsequent pointer movement still works.
4. Collapse Backlog via its header and restore it ⇒ the 5000-card count remains logical, cards are virtualized again in the expanded column, and no adjacent workflow disappears.

Visual: lane title kicker TEAM hides when labels collapse; headings and cards remain aligned after restoring. Automation: scope Collapse/Expand swimlane controls by lane and use keyboard only with a focused card. Record screenshots after both collapse forms.

### KPERF-007 · P1 · Responsive and source-panel integrity

Execution: Code-derived; not executed in this review.

1. At fixed desktop size, open Code and switch source-language tabs ⇒ live board remains mounted; source file names belong to the performance example.
2. Close Code, scroll to Done ⇒ existing edits/position are not unexpectedly reset by source browsing.
3. On a fresh narrow-page run, reach each workflow through board scrolling and open an editor ⇒ buttons and inputs remain operable without page-wide horizontal overflow.

Automation: reuse shared shell cases for Code mechanics; this route must still exercise the large board and editor at 390×844. Theme and viewport coverage is proposed, not performed.

## Existing coverage and readiness

[Docs E2E](../demo-experience.spec.ts) checks the shared route shell only. [Standalone Kanban E2E](../../../../revogrid-demos/pro-advanced-kanban/tests/e2e/feature.spec.ts) covers `?example=performance`: mount, first 5000-card count, bounded initial DOM (<100), card height between 150 and 200, and no browser errors. It does not exercise editor validation, create/delete, deep scrolling or moves. Card identities and field labels are source-backed; scroll/drag/editor selectors require browser validation. No tests or demo fixes are added here.
