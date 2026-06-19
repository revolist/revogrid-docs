---
title: Data Source Loading and Syncing
description: Choose how RevoGrid should receive, own, and synchronize row data across JavaScript, TypeScript, React, Vue, Angular, and Svelte applications.
head:
  - - meta
    - name: keywords
      content: RevoGrid data source, RevoGrid data sync, reactive data grid, source of truth, stable source, afteredit, proxy source, batch save
---

# Data Source Loading and Syncing

When you work with any JS Data Grid or complex component, most of the time the framework changes, but the data question is the same:

> Who owns the edited data?

Once that is clear, integration becomes much easier.

## Start with ownership

| Approach | What it means | Use it when |
| --- | --- | --- |
| Grid-owned data | RevoGrid edits the row objects passed to `source` | The grid is a local draft, import tool, spreadsheet, or save-on-submit UI |
| App-owned data | Your store or server model owns the final value | Other screens, validation, autosave, audit logs, or collaboration need the edits |

Both approaches work. Problems usually start when a reactive app replaces the whole grid source after every edit:

```txt
cell edit -> app state update -> new source array -> grid receives a new dataset
```

That looks natural in many frameworks, but it is expensive for a virtual grid. A new `source` is treated as a dataset-level change. It can reset or disturb selection, focus, editor state, scroll position, history, dirty tracking, and plugin state.

For normal editing, keep the active `source` stable and sync only the changed value.

## How editing works

RevoGrid reads and writes the row objects in `source`.

```ts
const source = [
  { id: 1, name: 'Apple', price: 1.2 },
  { id: 2, name: 'Banana', price: 0.5 },
];

grid.source = source;
grid.columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price' },
];
```

If a user edits the first row price, the same row object receives the new `price`. RevoGrid does not need a fresh array just to show that edit.

## Option 1: Let the grid own the draft

This is the simplest model. Pass rows to the grid, let users edit, and read the data when you need to save.

```ts
grid.source = source;

async function save() {
  const rows = await grid.getSource();
  await saveRows(rows);
}
```

Use this when the rest of the app does not need to react immediately to every cell edit.

## Option 2: Listen after edits

Use `afteredit` when the grid should apply the edit first, then your app should hear about the changed field.

```ts
grid.addEventListener('afteredit', event => {
  const { model, prop, val } = event.detail;

  updateStore(model.id, prop, val);
});
```

This should be an incremental sync. Do not immediately rebuild `source` from the store and pass it back to the grid for the same edit.

Use `beforeedit` or `beforerangeedit` when you need to block or normalize a value before it is saved:

```ts
grid.addEventListener('beforeedit', event => {
  if (event.detail.prop === 'price' && Number(event.detail.val) < 0) {
    event.preventDefault();
  }
});
```

## Option 3: Use a proxy source

A proxy source is useful when your store must see writes immediately, but RevoGrid still needs stable row objects.

```ts
function createRowProxy(row, updateStore) {
  return new Proxy(row, {
    set(target, prop, value) {
      Reflect.set(target, prop, value);
      updateStore(target.id, prop, value);
      return true;
    },
  });
}

grid.source = rows.map(row => createRowProxy(row, updateStore));
```

The flow is:

```txt
cell edit -> proxy setter -> app store
```

Create proxies once for the active dataset. Do not create a new proxy array on every render. For the full pattern, see [Proxy Source Editing](/guide/proxy-source).

## Option 4: Keep a patch layer

Use patches when you want dirty tracking, review-before-save, validation flows, or batch submit.

```ts
const patches = {};

grid.addEventListener('afteredit', event => {
  const { model, prop, val } = event.detail;

  patches[model.id] ??= {};
  patches[model.id][prop] = val;
});

function getResolvedValue(row, prop) {
  return patches[row.id]?.[prop] ?? row[prop];
}
```

This keeps the grid data stable while your app tracks the changes separately.

## Option 5: Batch external sync

Use a queue when edits should go to a store, API, or analytics pipeline, but not one by one.

```ts
const queue = [];
let flushTimer = 0;

grid.addEventListener('afteredit', event => {
  queue.push(event.detail);
  scheduleFlush();
});

function scheduleFlush() {
  if (!flushTimer) {
    flushTimer = window.setTimeout(flush, 250);
  }
}

function flush() {
  flushTimer = 0;
  updateStoreBatch(queue.splice(0));
}
```

This works well for autosave, paste, fill, and high-volume editing.

## Framework notes

Different frameworks express reactivity differently, but the practical rule stays the same: stable grid inputs, incremental edit sync.

| Environment | Prefer | Avoid |
| --- | --- | --- |
| JavaScript / TypeScript | Create `source` once for the active dataset | Reassigning `grid.source` after every edit |
| React | Keep active rows in `useMemo`, `useRef`, or a store adapter | Creating a fresh `source` from `setState` on each `afteredit` |
| Vue | Use stable state, `shallowRef`, or a store adapter | Deep reactive churn that rebuilds row objects |
| Angular | Keep `source` as a stable field, signal value, or adapter result | Replacing `[source]` every time `(afteredit)` fires |
| Svelte | Keep the array reference stable or sync through a store adapter | Reassigning the `source` prop for each edited cell |

Reactive UI state is good for screens. RevoGrid also has viewport, focus, editing, and plugin state. Treat full `source` replacement as loading a dataset, not as the default way to handle a cell edit.

## Replace `source` when the dataset changes

Full replacement is correct for:

- initial load
- page change
- dataset switch
- server refresh
- filter or search result replacement
- adding, removing, or reordering rows outside the grid
- switching from draft data to confirmed server data

For targeted cell changes from application code, use methods such as `setDataAt` from [Programmatic Grid Control](/guide/programmatic-control). For live streams, see [Real-Time Updates in RevoGrid](/guide/realtime-updates).

## Quick checklist

- Decide whether the grid or the app owns edits.
- Keep `source` and `columns` stable while editing.
- Use `afteredit` for post-edit sync.
- Use `beforeedit` or `beforerangeedit` for validation or cancellation.
- Use proxy, patch, or queue patterns when the app needs more control.
- Replace the full source only when the dataset itself changes.

## Rule of thumb

Good:

```txt
cell edit -> afteredit/proxy/patch/queue -> incremental app sync
```

Problematic:

```txt
cell edit -> recreate full source -> grid receives new dataset
```

## Related guides

- [Proxy Source Editing](/guide/proxy-source)
- [Programmatic Grid Control](/guide/programmatic-control)
- [RevoGrid Event Patterns and Lifecycles](/guide/events-guide)
- [Real-Time Updates in RevoGrid](/guide/realtime-updates)
- [RevoGrid Best Practices](/guide/patterns)
