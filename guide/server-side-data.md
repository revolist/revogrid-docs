---
title: Server-side data, pagination, sorting, and filtering
description: Build a production server-side data layer for RevoGrid with remote pagination, infinite loading, sorting, filtering, grouping, request cancellation, caching, and edit sync.
head:
  - - meta
    - name: keywords
      content: RevoGrid server-side data, remote pagination, data grid server sorting, data grid server filtering, infinite scroll grid, optimistic editing, backend data source
---

# Server-side data, pagination, sorting, and filtering

You Data Grid can render large local datasets efficiently, but in production often cannot load the whole dataset into the browser. Your backend may own permissions, search, joins, sorting, filtering, grouping, totals, audit logs, and edit validation.

This guide describes an application-owned server-side data layer around RevoGrid. It does not add a new grid API. The grid still receives rows through `source`, columns through `columns`, and user intent through events. Your app owns the remote query, cache, loading state, error state, and persistence.

::: info Use this pattern when

- the complete dataset is too large for browser memory
- sorting or filtering must match backend authorization rules
- edits must be validated, audited, or merged by the server
- users need pagination, infinite loading, or grouped remote data
- stale network responses must not overwrite newer user intent
:::

## Recommended model

Treat RevoGrid as the viewport and interaction layer. Treat your data controller as the source of truth for the active remote window.

```txt
user action -> RevoGrid event -> app data controller -> backend request -> grid.source
```

The important boundary is that full `source` replacement means "the remote dataset window changed". Do not recreate `source` after every cell edit just to mirror local state. For edit syncing patterns, see [Data Source Loading and Syncing](/guide/data-sync).

## Backend query

Use one query shape for page loads, infinite-scroll windows, sorting, filtering, quick search, and grouping. Keep the request explicit and serializable so it can become a cache key.

```ts
type SortOrder = 'asc' | 'desc';

type GridQuery = {
  offset: number;
  limit: number;
  sort?: Record<string, SortOrder>;
  filter?: Record<string, unknown>;
  group?: { by: string[]; route?: string[] };
  search?: string;
};

type GridResponse<Row> = {
  rows: Row[];
  total?: number;
  hasMore?: boolean;
};
```

Use `total` when the backend can count cheaply. Use `hasMore` when counting is expensive or the dataset is streaming.

For edits, use a separate mutation endpoint. Do not mix row loading and cell persistence into one route.

```ts
type GridEditRequest = {
  rowId: string | number;
  field: string;
  value: unknown;
  previousValue?: unknown;
};

type GridEditResponse<Row> = {
  accepted: boolean;
  row?: Row;
  message?: string;
};
```

The backend should return the canonical row when it normalizes values, applies business rules, or writes server-generated fields such as `updatedAt`.


## Pagination and infinite scrolling

Server-side pagination uses a fixed `page` and `limit`:

```txt
page 0 -> offset 0, limit 100
page 1 -> offset 100, limit 100
```

Infinite scrolling uses the same backend contract, but the trigger comes from the scroll position instead of a page button:

```txt
visible range approaches end -> request next offset -> append or replace window
```

Choose the behavior based on product needs:

| Pattern | Use it when | Grid source strategy |
| --- | --- | --- |
| Pagination | Users need stable pages, URLs, or exports by page | Replace `source` with the requested page. |
| Infinite scrolling | Users scan a long operational feed | Load windows by offset and keep enough rows for smooth scrolling. |
| Pro Infinity Scroll | You want plugin-managed chunk loading and buffer cleanup | Start from [RevoGrid Pro](/pro/). |

The backend contract should be the same either way. That keeps filtering, sorting, caching, and export code reusable.

## Remote sorting

For server-authoritative sorting, mark columns as sortable so users get the normal header interaction. Then intercept `beforesortingapply`, call `event.preventDefault()`, and reload from the backend.

```ts
grid.columns = [
  { prop: 'name', name: 'Name', sortable: true },
  { prop: 'createdAt', name: 'Created', sortable: true },
];
```

Use the event to send `{ [column.prop]: order }` to the backend. If you support multi-sort, keep the full sort object in the controller and honor the event's `additive` flag.

## Remote filtering

For server-authoritative filtering, enable the normal filter UI, intercept `beforefilterapply`, prevent local trimming, and send the collection to the backend.

```ts
grid.filter = true;

grid.addEventListener('beforefilterapply', event => {
  event.preventDefault();
  void controller.setFilter(event.detail.collection);
});
```

The filter collection uses RevoGrid's column props and filter operation ids. Your API can accept this shape directly or translate it to a backend-specific query language.

## Remote grouping

Client-side grouping is appropriate when the browser owns the complete dataset. Server-side grouping is different: the backend must own group keys, child routes, counts, aggregates, sorting, filtering, and lazy expansion.

Use a route-based query shape:

```ts
const query: GridQuery = {
  offset: 0,
  limit: 100,
  group: { by: ['country', 'city'], route: ['Germany'] },
  sort: { revenue: 'desc' },
  filter: { status: { type: 'eq', value: 'active' } },
};
```

For production grouping with lazy expansion and route cache behavior, start from [RevoGrid Pro](/pro/).

## Cancellation, races, and cache keys

Remote grid UIs create overlapping requests. A user can type a filter, click sort, change page, and edit a row before the first response returns.

Use all three safeguards:

- Abort the previous request with `AbortController`.
- Track a monotonically increasing request id and ignore stale responses.
- Build cache keys from the complete query: `{ page, limit, sort, filter, group, search }`.

Do not key the cache only by page number. Page 2 of "all rows" is not the same data as page 2 after filtering by status or sorting by date.

For shared caches, normalize object key order before serializing. The example uses `JSON.stringify(query)` because it builds the query in a stable order in one place.

## Optimistic edits and backend sync

RevoGrid applies cell edits before `afteredit` fires. That makes optimistic saves straightforward:

1. Let the grid apply the local edit.
2. Send `{ rowId, field, value, previousValue }` to the backend from `afteredit`.
3. If the backend accepts and returns a canonical row, merge it into the model.
4. If the backend rejects, restore the previous value with `setDataAt`.
5. Clear remote caches that may contain the old row.

Use `beforeedit` when a rule can be decided locally and the edit should be blocked before it changes the model. Use `afteredit` when the server is the authority and the UI should feel responsive while the save is in flight.

## Loading and error states

Keep loading and error state in the controller or app shell:

- disable pagination buttons while the current page is loading
- show a small overlay or status row during the first load
- keep old rows visible during background refresh when possible
- show retry controls for failed loads
- show field-level or row-level messages for rejected edits

Avoid network calls or loading state inside cell templates. Cell renderers run as part of virtual rendering and should stay cheap. See [RevoGrid Performance and Virtualization](/guide/performance).

## Checklist

- Keep `columns` stable and replace `source` only when the remote window changes.
- Use `beforesortingapply` for remote sorting.
- Use `beforefilterapply` for remote filtering.
- Cancel in-flight requests and ignore stale responses.
- Include sort, filter, group, search, offset, and limit in cache keys.
- Keep loading and error UI outside cell renderers.
- Use `afteredit` for optimistic save and rollback.
- Let the backend own server grouping, counts, aggregates, and permissions.

## Related guides

- [Data Source Loading and Syncing](/guide/data-sync)
- [RevoGrid Performance and Virtualization](/guide/performance)
- [RevoGrid Best Practices](/guide/patterns)
- [RevoGrid Filtering](/guide/filters)
- [Data Grid Sorting](/guide/sorting)
- [Event Patterns and Lifecycles](/guide/events-guide)
- [Programmatic Grid Control](/guide/programmatic-control)
