---
title: Programmatic Grid Control
description: Control RevoGrid from application code with public methods for editing, focus, scrolling, visible source access, and targeted cell updates.
head:
  - - meta
    - name: keywords
      content: RevoGrid methods, setDataAt, setCellEdit, setCellsFocus, scrollToRow, getVisibleSource, getSelectedRange
---

# Programmatic Grid Control

RevoGrid exposes a rich public method surface for workflows driven by toolbars, external forms, keyboard shortcuts, or business logic.

## Get a grid instance

In plain JavaScript:

```ts
const grid = document.querySelector('revo-grid');
```

In framework wrappers, use the wrapper-specific ref or element access pattern, then call the underlying grid methods.

Example toolbar action:

```ts
const editFirstRowBtn = document.querySelector('#edit-first-row');
const grid = document.querySelector('revo-grid');

editFirstRowBtn?.addEventListener('click', async () => {
  await grid?.scrollToRow(0);
  await grid?.setCellEdit(0, 'name');
});
```

## Update one cell with `setDataAt`

Use `setDataAt` when you want to update a specific visible cell and refresh that cell without rebuilding the full grid.

```ts
await grid.setDataAt({
  row: 0,
  col: 0,
  val: 'Updated',
});
```

Example with explicit viewport types:

```ts
await grid.setDataAt({
  row: 0,
  col: 0,
  rowType: 'rowPinStart',
  colType: 'rgCol',
  val: 'Pinned row value',
});
```

Notes:

- `row` and `col` are virtual coordinates inside the selected viewport
- `rowType` defaults to `rgRow`
- `colType` defaults to `rgCol`
- `skipDataUpdate` can skip source mutation if you are only refreshing the rendered cell

## Open an editor with `setCellEdit`

```ts
await grid.setCellEdit(0, 'price');
```

This is useful when an external button or shortcut should put the user directly into editing mode.

Example with pinned rows:

```ts
await grid.setCellEdit(0, 'status', 'rowPinStart');
```

## Move focus with `setCellsFocus`

```ts
await grid.setCellsFocus({ x: 0, y: 0 }, { x: 2, y: 4 });
```

You can focus a single cell or a multi-cell range.

Focus a single cell before editing:

```ts
await grid.setCellsFocus({ x: 1, y: 3 }, { x: 1, y: 3 });
await grid.setCellEdit(3, 'price');
```

## Clear focus and inspect the current range

```ts
await grid.clearFocus();

const range = await grid.getSelectedRange();
console.log(range);
```

Typical pattern:

```ts
const range = await grid.getSelectedRange();

if (range) {
  console.log('Selected area', range.x, range.y, range.x1, range.y1);
}
```

## Scroll to content

Scroll by row index:

```ts
await grid.scrollToRow(100);
```

Scroll by column index:

```ts
await grid.scrollToColumnIndex(5);
```

Scroll by column `prop`:

```ts
await grid.scrollToColumnProp('status');
```

This is usually safer than using column indexes when columns can be reordered or grouped.

## Read visible rows

```ts
const visibleRows = await grid.getVisibleSource();
```

Use this when your app should work with the rows currently visible after trimming, filtering, or sorting.

Example:

```ts
const visibleRows = await grid.getVisibleSource();
const selectedEmails = visibleRows.map(row => row.email);
console.log(selectedEmails);
```

## Read source and stores

```ts
const source = await grid.getSource();
const rowStore = await grid.getSourceStore();
const colStore = await grid.getColumnStore();
```

The store methods are mainly for advanced integrations and plugin work.

If you only need the current displayed rows, prefer `getVisibleSource()` over reading the raw store.

## Update sorting from application code

```ts
await grid.updateColumnSorting({ prop: 'name' }, 'asc', false);
await grid.clearSorting();
```

This emits the sorting configuration change rather than mutating the source directly.

Multi-step example:

```ts
await grid.updateColumnSorting({ prop: 'status' }, 'asc', false);
await grid.updateColumnSorting({ prop: 'createdAt' }, 'desc', true);
```

The second call keeps the first sort because `additive` is `true`.

## Plugin-oriented methods

These methods are most useful in advanced integrations:

- `getPlugins()`
- `getProviders()`
- `refreshExtraElements()`

They give access to active plugins and provider services used internally by the grid.

## Common patterns

### Build a “go to row” action

```ts
async function goToRow(rowIndex) {
  await grid.scrollToRow(rowIndex);
  await grid.setCellsFocus({ x: 0, y: rowIndex }, { x: 0, y: rowIndex });
}
```

### Refresh a visible cell after an external update

```ts
async function updateStatusCell(row, nextValue) {
  await grid.setDataAt({
    row,
    col: 2,
    val: nextValue,
  });
}
```

### Read the filtered view before export or bulk action

```ts
const filteredRows = await grid.getVisibleSource();
console.log(`Exporting ${filteredRows.length} visible rows`);
```

## Related guides

- [Understanding Viewports](/guide/viewports)
- [Advanced Configuration](/guide/advanced-configuration)
- [Event Patterns and Lifecycles](/guide/events-guide)
- [API: RevoGrid](/guide/api/revoGrid)
