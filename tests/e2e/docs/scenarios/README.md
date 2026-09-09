# Docs demo E2E scenario catalog

Internal implementation backlog for **21 canonical demos**, with one document per catalog ID. Read each demo together with [shared-shell.md](shared-shell.md). These are scenario specifications, **not executed automated tests**. [Observed issues](observed-issues.md) retain failing expectations and reproducible actual behavior.

## Scope and review baseline

Reviewed on **2026-09-08** against docs HEAD `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6` and demos submodule HEAD `666376ae6d046e6f585165f364d5516bc5605311`, served at `http://127.0.0.1:4173`. The checkout was live and dirty: theme changes existed before review, and additional source-panel/test/submodule changes appeared during it. These revisions identify the base, not an immutable build. This task writes only this scenario directory; unrelated changes are preserved. Revalidate findings on the eventual target revision.

Three parallel source reviewers owned Core/Pro grids, planning/Gantt/Scheduler, and Kanban/Pivot. Browser access was unavailable to their agent sessions, so the coordinating reviewer opened every route and supplied screenshots and exact interaction observations. Reviewers cross-checked the documents against mounted Vue components, fixtures, relevant implementation and existing tests. Standalone-only demos and embedded guide examples are excluded. React/Angular/Vanilla source tabs are source examples; the docs live preview remains Vue.

**Evidence labels:** “Observed” applies only to explicitly recorded actions/results. “Partial” means some steps were exercised; it never means the whole scenario passed. “Source-derived” means the cited mounted configuration/fixture or implementation supplies the expectation, but the action remains to be run. “Blocked” names the prerequisite failure. Unknown editor affordances or plugin outcomes are called out for first-run confirmation, never invented as verified controls. Visual acceptance criteria are intended regression requirements; findings identify where current appearance violates them.

## Index and automation order

All entries have source review and partial browser verification. Audit History's ledger is an expected P0 workflow; the earlier missing-ledger observation has been withdrawn after correction from the product owner. The browser column summarizes the exercised subset; individual documents give its precise limits.

| ID / document | Demo | Tier | Route | Cases | Browser review subset |
|---|---|---|---|---:|---|
| [grid-at-scale](grid-at-scale.md) | Performance | Core | `/demo/grid-at-scale` | 6 | Partial: Dataset size, save/reset |
| [ai-prompt-library](ai-prompt-library.md) | AI prompts | Core | `/demo/ai-prompts` | 4 | Partial: Search empty state, Engineering filter |
| [project-portfolio](project-portfolio.md) | Row Grouping | Core | `/demo/project-portfolio` | 5 | Partial: Collapse six departments, expand |
| [project-tracker](project-tracker.md) | Project tracker | Pro | `/demo/color` | 7 | Partial: Select Mobile checkout, Mark ready |
| [tree-data](tree-data.md) | Tree data | Pro | `/demo/tree-data` | 5 | Partial: Collapse/expand, sticky toggle |
| [filtering](filtering.md) | Filtering | Pro | `/demo/filtering` | 5 | Partial: 217 initial, clear to 10,000, example to 335 |
| [infinity-scroll](infinity-scroll.md) | Infinity Scroll | Pro | `/demo/infinity-scroll` | 5 | Partial: Remote chunk loading, pinned rows |
| [column-collapse](column-collapse.md) | Column collapse | Pro | `/demo/column-collapse` | 5 | Partial: Personal and Contact expansion |
| [context-menu](context-menu.md) | Context menu | Pro | `/demo/context-menu` | 6 | Partial: Ada menu open, Escape |
| [row-master](row-master.md) | Master detail | Pro | `/demo/row-master` | 5 | Partial: Warehouse detail content, close |
| [audit-history](audit-history.md) | Audit history | Pro | `/demo/audit-history` | 5 | Partial: Invoice edit; ledger workflow required |
| [excel](excel.md) | Collaboration | Pro | `/demo/excel` | 7 | Partial: Owner edit, Undo, presence |
| [planning](planning.md) | Project workspace | Advanced | `/demo/` | 10 | Partial: All five views, search, source preservation |
| [gantt](gantt.md) | Gantt | Advanced | `/demo/gantt` | 7 | Partial: Test Plan completion, hierarchy collapse |
| [gantt-big-data](gantt-big-data.md) | 10K Gantt | Advanced | `/demo/gantt-big-data` | 5 | Partial: Scroll to Task 225–246 |
| [gantt-horizontal-big-data](gantt-horizontal-big-data.md) | 20Y Gantt | Advanced | `/demo/gantt-horizontal-big-data` | 5 | Partial: Horizontal scroll to 2033 |
| [event-scheduler](event-scheduler.md) | Scheduler | Advanced | `/demo/event-scheduler` | 9 | Partial: All workspaces, periods, preset selection |
| [kanban](kanban.md) | Kanban | Advanced | `/demo/kanban` | 6 | Partial: Lane collapse, keyboard move, counts |
| [kanban-performance](kanban-performance.md) | 50K Kanban | Advanced | `/demo/kanban-performance` | 7 | Partial: Negative story points rejected; 13 saved |
| [kanban-server-loading](kanban-server-loading.md) | 100K Remote Kanban | Advanced | `/demo/kanban-server-loading` | 5 | Partial: 100 to 2,200 loaded, stable global counts |
| [pivot](pivot.md) | Pivot table | Advanced | `/demo/pivot` | 10 | Partial: Three preset totals, filter, fields, expand |

Aliases `/demo/planning` and `/demo/hr` are covered by SHELL-02, without duplicate documents. They mount `planning` and `grid-at-scale` respectively; they are not required to redirect the URL.

Recommended implementation order:

1. **P0 shell and load gates:** SHELL-01/02, then every demo's initial case. Await real content, not only a grid element. Require the Audit ledger as part of the Audit History load gate.
2. **P0 primary workflows:** Core search/grouping, Pro selection/edit/filter/collapse/detail, Planning synchronization across all five views, Scheduler workspaces, Kanban moves/editor validation, Pivot numerical totals, large-data scroll/loading.
3. **P1 recovery and combinations:** cancel/clear/undo, persistence and isolation, repeated navigation, readonly protection, large-data recycling, export and Audit History restore workflows.
4. **P1 visual coverage:** shared shell at all four viewport sizes, then each demo's overlays, selection, scrolling and theme checks. Test each exposed workspace, not just the initial Grid tab.

## Viewport and theme evidence

| Viewport / theme | Routes inspected | Extent |
|---|---|---|
| 1280×720 light | All canonical routes; planning also reviewed in dark | Initial appearance and interaction subsets recorded per document. Planning's detailed five-view/search/source actions were in dark. |
| 1440×900 dark | All 21 canonical routes | Initial screenshots; additional 10K scrolling retest. Not a full interaction rerun. |
| 1440×900 light | Planning | Workspace layout baseline. |
| 960×800 light | Planning, alias `/demo/planning`, alias `/demo/hr` | Initial appearance, alias identity/canonical metadata; unused sidebar gutter observed. Other demos at this size remain to be checked. |
| 390×844 light | All 21 canonical routes | Initial narrow screenshots. Planning Examples/source drawer also exercised. Deep grids, offscreen columns, all mobile editors and noninitial workspace tabs remain to be verified. |

These supplemental observations apply to every demo document even where its earlier local evidence paragraph mentions only the desktop interaction session. No mobile or dark interaction case becomes fully passed from an initial screenshot. Narrow Gantt required waiting beyond the first grid cell before bars settled; remote Kanban required its loaded status rather than skeleton cells. At 390 px, Kanban stacks and long timeline names are clipped within scrollable workspaces: future tests must scroll to inspect complete content and operate controls. Screenshots were inspected in the browser-tool conversation; no persisted screenshot attachments or golden baselines were created.

## Reset and automation contract

- Start each scenario in an isolated context and use its stated seed/reset. A route change alone can retain module state. Preserve storage only in scenarios that explicitly test it. Pivot has named persistence keys; Performance Save view also needs a separate persistence test. Never clear unrelated user storage.
- Fix the clock and timezone for date-dependent scheduler/audit/planning fixtures. The review date was September 8, 2026, in Europe/Lisbon; literal fixture dates remain literal. Do not replace fixture expectations with today's date.
- Target stable record/task/card IDs and column properties. Virtual row positions are temporary; reacquire after sort/filter/move/scroll. Pair visible assertions with a supported grid/plugin data contract only when the scenario calls for it; don't mutate application state to simulate a user action.
- Use role/name locators and scoped demo identities first. Treat generated DOM selectors as candidates until confirmed in the target build. Readiness includes visible fixture content, settled filters and completed remote chunks. No arbitrary FPS, duration or timing threshold is specified.
- Run actions inside the docs host. Its styling hides some standalone controls; hidden toolbars are not required user steps. Copy/download tests need isolated clipboard/download handling. No external message, upload, or trial submission is required.
- Keep step-by-step expected values and source references with future tests. Never change an expected result to the current failure just to make a test pass. Capture viewport/theme/route/revision plus actual result for failures.

## Coverage and validation

The catalog contains 129 demo-specific cases plus nine shared-shell cases. Every canonical entry has an initial P0 case and primary-interaction scenarios; Planning covers Grid, Kanban, Gantt, Scheduler and Calendar. Review included a cross-check of document inventory, unique scenario IDs, local source links and Markdown whitespace. Source references live in each document; numerical Pivot oracles were independently calculated and matched in the browser.

Existing [docs E2E](../demo-experience.spec.ts), [configuration](../../../../playwright.docs.config.ts), and [source mapping unit tests](../../../unit/vitepress/theme/demoSources.test.ts) supply starting points. Existing coverage is not evidence that these new cases pass. Some planning selectors still describe the older toolbar; see ISSUE-007. The suite was not run and no automated tests were added or changed by this task.

Catalog source of truth: [product catalog](../../../../commercial/productCatalog.ts), [source registry](../../../../.vitepress/theme/demoSources.ts), [docs host](../../../../.vitepress/theme/DemoPageLayout.vue), and individual mounted components linked from each scenario.
