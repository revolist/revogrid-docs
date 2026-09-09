# Audit History scenarios

Supplemental viewport/theme observations and live-checkout limitations: [catalog evidence matrix](README.md#viewport-and-theme-evidence). Apply [shared shell cases](shared-shell.md) alongside these cases; see [findings](observed-issues.md) for current failures.

Route: `/demo/audit-history`. Catalog ID: `audit-history`.

## Evidence and setup

Source reviewed on 2026-09-08 against docs commit `b0c0bd9f851772dfcd30549d6d0a71ab84be12f6`. Pre-existing dirty `.vitepress/theme/DemoNavigation.vue` and `.vitepress/theme/style.scss` are part of this working tree. Code cases below are source-derived. Browser observations were supplied by the coordinating root reviewer and are limited to the actions explicitly listed below; they do not mark entire multi-step cases passed.

P0 = basic release gate; P1 = broader regression coverage. Run each case independently from its stated reset. Wait for actual grid data and completed UI updates, not just a mounted docs shell. Use fixture identities and column props when sorting or virtualization changes physical row positions. Pair each case with shared docs-shell checks. No automated tests or demo fixes were added during this review.

Hard reload restores eight invoice rows and four seed transactions in memory. Audit timestamps are relative to Date.now(); use a fixed clock in future E2E. Current user is Avery Stone. Each seed transaction can contain multiple changes, so record counts and cell-change counts are different.

## Recorded browser observation

The coordinating reviewer additionally inspected the initial route at 1440×900 in dark theme and 390×844 in light theme. Consult the central evidence matrix for the final per-viewport findings; the detailed interactions below were not automatically repeated in those viewports.

The product owner confirmed that the Audit History ledger is working; the prior browser observation of an empty aside is withdrawn. AUDIT-001 is a required load-gate assertion. Re-run the ledger edit/compare/restore/export sequence against the current built docs host before recording any defect.

## Scenarios

### AUDIT-001 · P0 · Seed invoice and ledger render

1. Open route → invoice grid and Change ledger panel appear side by side.
2. Inspect INV-2048 → Northwind, In review, Avery Stone, 2026-08-12, $12,800, Medium.
3. Inspect seed ledger → four transactions include Submitted for finance review and August adjustments; latter represents two changed cells.

Visual checks and automation notes: Check panel does not conceal the grid at desktop width. Date labels may be relative; assert record identities and details rather than exact clock-dependent labels.

### AUDIT-002 · P0 · Live edit creates attributed history

1. Double-click Customer for INV-2048, change Northwind to Northwind Labs, press Enter → grid shows new customer.
2. Inspect ledger → a fifth transaction is appended with Avery Stone attribution and customer old/new values Northwind → Northwind Labs.
3. Open a new editor draft on that cell and press Escape → no sixth edit transaction is created and committed value stays.
4. Inspect neighboring invoice → INV-2051 remains Acme Finance.

Visual checks and automation notes: Scope to invoice identity, not physical row index after sorting. Optional cell/row flash lasts about 1100/1350ms; final correctness must not depend on capturing transient animation.

### AUDIT-003 · P0 · Compare and restore a cell

1. After AUDIT-002 edit, open the matching ledger entry and Compare → old and new customer values are distinguished.
2. Use Restore cell for that change → INV-2048 customer returns to Northwind.
3. Inspect other fields and invoices → status/amount and unrelated invoice values are unchanged.
4. Inspect restore feedback/history → the replay result is visible; verify the plugin’s current record policy instead of assuming restore silently deletes its original record.

Visual checks and automation notes: AllowCompare and cell/row/transaction restore are configured. Confirm actual panel control labels in the first browser run; never call a screenshot-only comparison a successful restore.

### AUDIT-004 · P1 · Transaction restore affects only its recorded scope

1. On a fresh page inspect August adjustments → INV-2057 due date changed 2026-08-13 → 2026-08-16 and INV-2060 amount 16400 → 17500.
2. Restore that transaction → these two values return to 2026-08-13 and 16400.
3. Inspect both records and a third invoice → customer/status/owner and unrelated invoices remain unchanged.
4. Reload → seeded current values and four-record ledger return because storage is memory.

Visual checks and automation notes: This tests transaction boundaries, not all-row rollback. Check old/new values in comparison before using restore. Whole-row restore should be a separate assertion if added.

### AUDIT-005 · P1 · Readonly identity and ledger export

1. Attempt to edit Invoice ID INV-2048 → identity stays fixed and no audit change is added.
2. Use ledger filtering/scope controls to focus a known seed transaction → shown record details match the chosen invoice/user criteria; clear → all seed entries return.
3. Use ledger JSON export → revogrid-audit-history.json downloads and parses as audit data containing attributable old/new changes including the bulk transaction; repeat CSV export → revogrid-audit-history.csv is readable.
4. At narrow width reach both invoice cells and ledger controls → panel remains usable and does not hide its restore/compare controls.

Visual checks and automation notes: Panel filter/export controls are plugin-owned; record exact accessible labels during automation. Parse exported data according to actual export format, not an assumed XLSX type.

## E2E readiness and visual acceptance

Target `.audit-grid`, `.rv-audit-history-panel`, `.audit-panel-host`, invoice ID and Change ledger. Standalone existing E2E demonstrates grid input editing and AuditHistoryPlugin getRecords count. Replicate on the docs route with independent UI ledger assertions.

Repeat initial and primary interaction states in light and dark docs themes at 1440×900 and 390×844. Check readable labels, visible focus, contained grid scrolling, reachable controls, and no page-wide horizontal overflow. Initial dark desktop and narrow light views were subsequently inspected by the coordinator; repeat the deeper interaction states in those views during E2E. The central matrix records baseline findings and supersedes earlier pending visual notes.

Current coverage: [docs shell suite](../demo-experience.spec.ts) checks the canonical shell; it does not establish the workflow cases above. [Standalone gallery E2E](../../../../revogrid-demos/tests/e2e/gallery.spec.ts) already checks Northwind Labs produces record five; [source checks](../../../../revogrid-demos/pro-audit-history/tests/audit-history.test.mjs) cover configuration. Neither proves docs panel compare/restore behavior.

References: [route](../../../../demo/audit-history.md), [view](../../../../revogrid-demos/pro-audit-history/src/audit-history.vue), [invoices, seed records and options](../../../../revogrid-demos/pro-audit-history/src/audit-history.shared.ts).
