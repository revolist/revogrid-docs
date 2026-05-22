---
title: Real-Time Updates in RevoGrid
description: Learn how to stream live data into RevoGrid while keeping large datasets responsive with virtualization, targeted updates, and batched rendering.
head:
  - - meta
    - name: keywords
      content: RevoGrid real-time updates, live data grid, streaming data grid, JavaScript data grid updates, virtual scrolling, setDataAt
---

# Real-Time Updates in RevoGrid

::: info Live update demo
The overview demo below uses the same grid setup pattern, then refreshes stock-like values on an interval. Scroll the grid while the data changes to see how virtualization keeps the visible area responsive.
:::

<DemoWidgetFrame
  demo="getting-started"
  framework="ts"
  title="RevoGrid column types demo"
  minHeight="600"
/>


RevoGrid works well for live dashboards, trading screens, monitoring tools, and operational grids where values change while users keep scrolling, filtering, or editing. The grid is virtualized by default, so frequent updates do not require every row and column to exist in the DOM at the same time.

Start with the same setup from the quick start: define columns, assign a `source`, and let RevoGrid render the visible viewport.

```ts
<!--@include: ../demo/js/basic-quick.ts-->
```

## Update the whole source

Use a full `source` assignment when your application receives a new snapshot, page, filter result, or server response.

```ts
const rows = [
  { id: 1, symbol: 'REV', price: 120.40 },
  { id: 2, symbol: 'GRID', price: 88.10 },
];

grid.columns = [
  { prop: 'symbol', name: 'Symbol' },
  { prop: 'price', name: 'Price' },
];

grid.source = rows;

setInterval(() => {
  grid.source = rows.map(row => ({
    ...row,
    price: Number((row.price + (Math.random() - 0.5) * 4).toFixed(2)),
  }));
}, 1000);
```

This is the simplest model and is usually enough for modest update rates. It also matches state-driven frameworks where the grid receives a fresh array after your store changes.

## Update one cell

For frequent single-cell changes, use `setDataAt` so the grid can update a specific cell instead of replacing the full source.

```ts
await grid.setDataAt({
  row: 0,
  col: 1,
  val: 123.45,
});
```

Use this pattern for live prices, status indicators, counters, progress values, and telemetry cells where the row and column are already known.

## Batch fast streams

If updates arrive faster than the browser should paint, collect them and flush once per animation frame.

```ts
const pending = new Map<string, number>();
let scheduled = false;

function queuePrice(rowIndex: number, price: number) {
  pending.set(String(rowIndex), price);

  if (scheduled) return;
  scheduled = true;

  requestAnimationFrame(async () => {
    scheduled = false;

    for (const [rowIndex, price] of pending) {
      await grid.setDataAt({
        row: Number(rowIndex),
        col: 1,
        val: price,
      });
    }

    pending.clear();
  });
}
```

Batching keeps high-frequency streams from fighting the browser render loop. It also gives your application a clear place to drop stale updates if newer values arrive for the same row.

## Keep virtualization enabled

Real-time grids usually need virtualization more than static grids. Leave virtual rendering enabled for large row or column counts, and tune only when you understand the tradeoff.

- Keep `disableVirtualY` off for large datasets.
- Keep `disableVirtualX` off for wide grids.
- Increase `frameSize` only if very fast scrolling shows blanking around the viewport.
- Keep cell templates cheap because they may run many times while users scroll.

See [Performance and Virtualization](/guide/performance) for the detailed performance settings.

## Recommended update strategy

Choose the update shape based on the incoming data:

| Stream shape | Recommended approach |
| --- | --- |
| Complete server snapshot | Assign `grid.source` with the new rows |
| Small number of known cells | Use `setDataAt` |
| Bursty WebSocket messages | Queue updates and flush with `requestAnimationFrame` |
| Server-side paging or filtering | Replace the current source page |
| User edits plus live updates | Keep an application data store and reconcile edits before assigning source |

## Practical checklist

- Assign `columns` once unless the schema actually changes.
- Preserve row identity in your application store with stable IDs.
- Batch rapid updates before touching the grid.
- Avoid expensive custom cell templates for values that change often.
- Use [Programmatic Grid Control](/guide/programmatic-control) for targeted methods such as `setDataAt`.
- Use [Data Synchronization](/guide/data-sync) when your app needs a clear source-of-truth strategy.
