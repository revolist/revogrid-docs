# SQL-backed RevoGrid Pro pagination

A plain TypeScript client using the real Pro `PaginationPlugin` with a Node
HTTP/SQLite backend. Pro owns the page controls, loading/cancellation, stale
result acceptance, last-page clamping and the grid's remote row source. The
application owns SQL authorization scope, query validation, search/filter/sort
policy, HTTP transport and its surrounding Revo UI controls.

## Install and run

Use Node 24.13+ and pnpm:

```sh
pnpm install --frozen-lockfile
pnpm seed
pnpm build
pnpm start
```

Open http://127.0.0.1:49303. `pnpm dev` starts Vite on 49303 and the API on 49304.
`pnpm typecheck` and `pnpm test` validate the starter. Production serves the client
and API on one loopback origin. `PORT` overrides the production port.

Pagination is a **commercial Pro feature**. This download installs its official
trial through the npm alias `@revolist/revogrid-pro: npm:@revolist/rv-pro-trial@4.0.6`.
The included `.npmrc` routes the scope through `https://trial.rv-grid.com`.
No private registry token or embedded credential is included. Trial behavior
belongs to that package and remains enabled. Licensed consumers replace the
alias with their licensed Pro package and authenticated registry configuration.
The Core grid and Revo UI library have their separate MIT licenses.

`pnpm seed` restores only the synthetic `.data/orders.sqlite` database (1,000
records). `ORDERS_DB` overrides the file path. The API selects demo-a's 980 rows;
HTTP clients cannot select demo-b's remaining 20 rows.

## Walkthrough

- Initial page: ORD-0001–0010, total 980. The plugin's Next page loads 0011–0020.
- Navigate with the plugin's numbered buttons or Page dropdown.
- Search Needle: exactly ORD-0501 and ORD-0777; other-account ORD-0991 is excluded.
- Select paid and shipped, amount at least 1000 USD, then Apply filters.
- Set Total descending and Rows per page to 1: the two tied results stay in ID order.
- Clear filters retains the selected row count. Is not calculated finds 51 rows;
  Equals 0 finds ORD-0041 and displays $0.00.
- The half-open UTC interval from 2026-02-01T00:00:00.000Z to
  2026-03-01T00:00:00.000Z returns ORD-0901 and ORD-0902.

Rows per page is a Revo UI configuration control for `itemsPerPage`. The Pro
panel's Page dropdown selects a page number; it is not a row-count selector.
Search/filter/sort changes assign a fresh loader closure to `grid.pagination`
with `initialPage: 0`. No application code increments offsets or writes source.
Retry partially reassigns `loadData`, preserving the plugin's current page/size.

## Loading and recovery

The plugin clears its previous page when loading a new one. On failure it keeps
the page empty; the surrounding shared UI alert offers Retry. A returned offset
beyond the result set is clamped by Pro to the last valid page, not the first.
An empty total disables forward navigation and shows the empty-state message.

Request delivery demonstrations hold a real Needle SQL response while Boundary's
four rows finish. Release the earlier result: Pro's loading engine rejects it,
even though that controlled transport ignores cancellation. Fail next request
rejects a real HTTP result at the client transport boundary. Neither action is
a database outage or a latency benchmark.

## Source and ownership

- `shared/query.ts`: application AST, runtime validation, amounts and result schema.
- `server/database.ts`: allowlisted parameterized SQL, account scope and a single
  transaction for row/count reads.
- `server/fixture.ts` and `server/http.ts`: server-only seed and bounded HTTP API.
- `src/load-orders.ts`: Pro `skip`/`take` → API `offset`/`limit`, signal forwarding,
  response validation and the `{ data, total }` return envelope. Attached request
  metadata keeps query-inspector labels tied to the accepted result.
- `src/main.ts`: the plugin configuration, surrounding controls, public
  `query.onStatus`/`query.reconcile` presentation and teardown.
- `src/ui-controls.ts`: public Revo UI native factories, dropdowns, fields,
  alerts and framework mounts for surfaces. The Pro panel also uses shared UI.

There is no custom pager or request-generation/abort controller in this starter.
`mountOrders(root, overrides)` accepts host message overrides. Library styles are
imported from Pro, `@revolist/ui/styles.css` and the exported UI dropdown SCSS;
Sass is included. Application CSS owns only layout.

Tested versions: Node 24.22.1, Core 4.31.4, official Pro trial 4.0.6, Revo UI 4.0.6,
Vite 8.3.5 and TypeScript 5.9.3. The trial entry produces a full-package chunk-size
warning during the build; no size or performance claim is made by this tutorial.

The fixture was reconstructed from the retained manuscript after its original
JSON became unavailable; walkthrough IDs/counts are preserved, byte identity is
not claimed. This local tutorial has fixed demo scope and no login. Production
hosting must derive access from authenticated context and supply suitable durable
storage. SQLite NOCASE/lower semantics here are explicitly bounded to ASCII
fixture data. The static documentation site provides the source and captures;
it does not host the SQL service.

## Status badges and connected Pivot chart

The official Pivot trial 4.0.6 is aliased as `@revolist/pivot` from the same public trial registry. Replace both trial aliases with licensed packages for licensed use. `src/page-chart.ts` uses the public headless Pivot controller to count the accepted page by status and the native standalone Pivot chart renderer for a donut. It performs no extra HTTP fetch. The explicit **Current page only** label prevents confusion with the full matching total. Loading/errors hide the old chart; no-match results show an empty notice. Semantic colors remain stable across filtered subsets. The grid and filter labels share `src/status-badges.ts`, Revo UI badge presentation and the bright shared chart palette. Apply/Clear/page-size controls align on the same baseline.

## UTC date filters

Both day fields use `attachTemporalPicker` from `@revolist/ui/date-time` and shared picker styles supplied by the official Pro stylesheet. Select or type `YYYY-MM-DD`. The start is included; the end is excluded. The app maps the selected ISO day to UTC midnight for its existing strict API validator, with no local-time conversion. Calendar selection and validation stay with shared UI. Reset clears the native form values, and disposal releases popup attachments. Picker captions/actions and calendar locale come from the host message dictionary.
