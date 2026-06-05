---
title: Proxy Source Editing
description: Use JavaScript Proxy row models with RevoGrid so edits write through to an application-owned data store without edit event handlers.
head:
  - - meta
    - name: keywords
      content: RevoGrid proxy source, data grid proxy editing, RevoGrid data synchronization, JavaScript Proxy rows, editable data grid source
---

# Proxy Source Editing

RevoGrid reads and writes the row objects passed through `source`. During a normal edit, RevoGrid gets the row model for the visible row, assigns the edited value to `model[prop]`, and refreshes the source view.

You can use this behavior to make the application store the source of truth. Instead of listening to `beforeedit`, `beforerangeedit`, or `afteredit` for every write, pass RevoGrid an array of proxied row models. The proxy intercepts property reads and writes:

- `get` returns the value RevoGrid should render, sort, filter, group, or edit.
- `set` writes the new value into your application store.
- the same proxy row stays in `grid.source`, so RevoGrid keeps working with normal row objects.

Use edit events when you need grid-level cancellation, editor lifecycle control, analytics, or UI feedback. Use a proxy source when the main goal is to route cell writes into your own model.

## Basic Proxy Source

This example keeps `rawRows` as the application-owned data and passes a proxied array to RevoGrid.

```ts
type ProductRow = {
  id: number;
  name: string;
  price: number;
  status: 'draft' | 'published';
};

const rawRows: ProductRow[] = [
  { id: 1, name: 'Apple', price: 1.2, status: 'draft' },
  { id: 2, name: 'Banana', price: 0.5, status: 'published' },
];

function syncChange(row: ProductRow, prop: keyof ProductRow, value: unknown) {
  console.log('row changed', row.id, prop, value);
}

function createRowProxy<T extends object>(
  row: T,
  onWrite: (row: T, prop: keyof T, value: unknown) => void,
): T {
  return new Proxy(row, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value) {
      Reflect.set(target, prop, value);
      onWrite(target, prop as keyof T, value);
      return true;
    },
  });
}

const proxySource = rawRows.map(row => createRowProxy(row, syncChange));

const grid = document.querySelector<HTMLRevoGridElement>('revo-grid');

if (grid) {
  grid.columns = [
    { prop: 'id', name: 'ID', readonly: true },
    { prop: 'name', name: 'Name' },
    { prop: 'price', name: 'Price' },
    { prop: 'status', name: 'Status' },
  ];

  grid.source = proxySource;
}
```

When a user edits the `price` cell, RevoGrid writes to the proxied row. The proxy updates `rawRows` and calls `syncChange`.

## External Store

A proxy source is useful when the grid-facing row shape is not the same as your store access pattern. This example stores rows by ID, tracks dirty fields, and queues asynchronous saves.

```ts
type InventoryRow = {
  id: string;
  sku: string;
  quantity: number;
  location: string;
};

const rowsById = new Map<string, InventoryRow>([
  ['a1', { id: 'a1', sku: 'A-001', quantity: 10, location: 'Lisbon' }],
  ['b2', { id: 'b2', sku: 'B-002', quantity: 25, location: 'Porto' }],
]);

const dirtyFields = new Map<string, Set<keyof InventoryRow>>();
const saveQueue: InventoryRow[] = [];

function markDirty(id: string, prop: keyof InventoryRow) {
  const fields = dirtyFields.get(id) ?? new Set<keyof InventoryRow>();
  fields.add(prop);
  dirtyFields.set(id, fields);
}

function queueSave(row: InventoryRow) {
  saveQueue.push({ ...row });
}

function createStoreRowProxy(id: string): InventoryRow {
  return new Proxy({ id } as InventoryRow, {
    get(_, prop) {
      return rowsById.get(id)?.[prop as keyof InventoryRow];
    },
    set(_, prop, value) {
      const row = rowsById.get(id);

      if (!row) {
        return false;
      }

      (row as Record<PropertyKey, unknown>)[prop] = value;
      markDirty(id, prop as keyof InventoryRow);
      queueSave(row);
      return true;
    },
  });
}

const proxySource = [...rowsById.keys()].map(createStoreRowProxy);

grid.source = proxySource;
grid.columns = [
  { prop: 'sku', name: 'SKU', readonly: true },
  { prop: 'quantity', name: 'Quantity' },
  { prop: 'location', name: 'Location' },
];
```

The proxy object exposes normal row properties to RevoGrid, but every read comes from `rowsById` and every write goes back into `rowsById`.

## Validation and Normalization

The `set` trap can normalize values before they reach your store.

```ts
function createValidatedRowProxy(row: ProductRow): ProductRow {
  return new Proxy(row, {
    set(target, prop, value) {
      if (prop === 'name') {
        target.name = String(value).trim();
        return true;
      }

      if (prop === 'price') {
        const price = Number(value);

        if (!Number.isFinite(price) || price < 0) {
          // Soft reject: keep the previous value and let the grid refresh it.
          return true;
        }

        target.price = price;
        return true;
      }

      Reflect.set(target, prop, value);
      return true;
    },
  });
}
```

Returning `false` from a proxy `set` trap rejects the JavaScript assignment. In strict-mode code this can throw a `TypeError`, so a soft reject that preserves the previous value is usually easier for grid editing flows.

If the editor must be blocked before the value is committed, use `beforeedit` or `beforerangeedit` instead. Those events are still the correct place for hard cancellation and user-facing validation messages.

## Range Edits, Paste, and Programmatic Writes

Range edits and paste operations update row models by assigning values to the edited column properties. With a proxy source, those assignments still pass through the row proxy.

Programmatic writes use the same data path unless you explicitly skip data updates:

```ts
await grid.setDataAt({
  row: 0,
  col: 1,
  val: 'Updated name',
});
```

If you call `setDataAt` with `skipDataUpdate: true`, RevoGrid updates the rendered cell only and does not assign the value into the row model.

```ts
await grid.setDataAt({
  row: 0,
  col: 1,
  val: 'Temporary render value',
  skipDataUpdate: true,
});
```

## Refresh Rules

If a grid edit writes through the proxy and the proxy returns the new value from the same row object, the normal edit flow updates the visible cell.

When the application store changes outside RevoGrid, refresh the grid so visible cells read the latest values from the proxies:

```ts
rowsById.get('a1')!.quantity = 12;
await grid.refresh();
```

If rows are added, removed, or reordered outside the grid, rebuild the proxied source array and assign it again:

```ts
const proxySource = [...rowsById.keys()].map(createStoreRowProxy);
grid.source = proxySource;
```

Pinned rows use separate sources, so prepare separate proxied arrays for them:

```ts
grid.pinnedTopSource = topRows.map(row => createRowProxy(row, syncChange));
grid.pinnedBottomSource = summaryRows.map(row =>
  createRowProxy(row, syncChange),
);
```

## Practical Rules

- Keep proxy object identity stable where possible.
- Do not create proxies inside framework render loops. Build them in state setup, memoization, computed state, or a store adapter.
- Do not mutate the same field through both a proxy source and edit event handlers unless that duplication is intentional.
- Sorting, filtering, grouping, and cell rendering use values returned by the proxy `get` trap.
- Use `readonly`, `beforeedit`, and `beforerangeedit` for hard edit rules. Use proxy `set` for store synchronization and normalization.

## Related Guides

- [Data Synchronization](/guide/data-sync)
- [Editing](/guide/editing)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Event Patterns and Lifecycles](/guide/events-guide)
