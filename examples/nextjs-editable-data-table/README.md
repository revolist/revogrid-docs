# Next.js editable data table

A runnable companion to the RevoGrid row-saving article. Uses Next.js App Router,
React, the public Core wrapper, and Node's built-in SQLite driver. No Pro package,
login provider, private registry token, or external database is needed.

## Run

Use Node 24.13+ and pnpm. The lockfile pins the complete dependency graph.

```sh
pnpm install --frozen-lockfile
pnpm seed
NEXT_TELEMETRY_DISABLED=1 pnpm build
DEMO_ACTIONS=1 NEXT_TELEMETRY_DISABLED=1 pnpm start
```

Open http://127.0.0.1:49302. `pnpm dev` runs development mode at the same address.
`pnpm typecheck` and `pnpm test` run the focused validation.
`DEMO_ACTIONS=1` enables reset and external-writer controls only for same-origin
requests on loopback. Omit it to disable those endpoints and controls.

`pnpm seed` explicitly discards tutorial edits and restores 20 synthetic rows.
Normal server restart seeds only a new database and preserves existing changes.
The database is `.data/orders.sqlite`; `ORDERS_DB=/absolute/path.sqlite` overrides
its location. It belongs to this local tutorial, never to a customer database.

## Walkthrough

1. Double-click OL-0001's Quantity cell. Enter 15 and press Enter. Save row.
2. Check the version is 2. Hard reload; quantity 15 remains.
3. Reset example and confirm Restore example rows.
4. Edit OL-0003 Quantity from 6 to 8. Under Demo scenarios, save a newer version.
5. Save your row. Compare the original, draft and latest fields.
6. Reapply my changed fields, then explicitly Save row. Quantity becomes 8,
   remote status confirmed is preserved, and the version becomes 6.

The complete grid lives in `app/OrdersGrid.tsx`. Its `copy` prop overrides UI
messages; validation messages are overridable at the shared model boundary.
The server page is dynamically rendered. SQLite rows are converted to plain
objects before passing them into the client. A narrow client-only dynamic import
keeps browser-dependent grid initialization out of server rendering.

## Mutation contract

`GET /api/orders` returns `{ rows }`, with Cache-Control: no-store.
`PATCH /api/orders/:id` accepts only `expectedVersion` and the four editable
`changes` fields: sku, quantity, unitPriceCents, status. It returns 200 with
`{ row }`, 400 for malformed input, 422 for invalid values, 404 for an unavailable
row, 409 with `current` for a revision conflict, or 500 for persistence failure.
Every write checks workspace, ID and expected version in one SQL UPDATE.
An application queue includes body parsing and scenario resets; SQLite transactions
serialize actual writes. No automatic retry changes the expected version.

## Scope

Tested with Node 24.22.1, Next.js 16.4.6, React/DOM 19.2.7, Core/React wrapper
4.31.4 and TypeScript 5.9.3 and Revo UI 4.0.6. Fixture rows were reconstructed from the retained
draft after the original research JSON disappeared. The documented rows 1–3,
zero-price example, and conflict sequence are preserved; other records are new
synthetic examples. No byte-for-byte fixture restoration is claimed.

This is a single-process local tutorial with a fixed server-owned workspace.
For deployment, add authenticated scope, durable/shared database infrastructure,
rate/body limits appropriate to the host, and observability. A SQLite file on an
ephemeral host is not shared durable production storage. Keep reset/scenario
routes disabled on public deployments. The static documentation site supplies
this source download and real captures; it does not host the starter's database.

## Shared interface ownership

All visible application controls and surfaces use the public MIT `@revolist/ui` package. React components from `@revolist/ui/react` own buttons, dropdown selection, fields, toolbar, panel, alerts, disclosure and reset confirmation. The library owns their styles and theme tokens. The app CSS contains only page/table/grid layout.

The shared control styles import `@revolist/ui/styles.css` and `@revolist/ui/dropdown/editor-dropdown.style.scss`. Sass is included in the starter so the exported dropdown styling is compiled alongside the application.
