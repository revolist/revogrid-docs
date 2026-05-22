---
title: RevoGrid Editing
description: Configure inline editing in RevoGrid, control read-only behavior, open editors programmatically, and handle edit lifecycle events safely.
head:
  - - meta
    - name: keywords
      content: RevoGrid editing, editable data grid, inline editing grid, grid editor events, setCellEdit
---

# RevoGrid Editing

RevoGrid supports spreadsheet-style editing out of the box. You can make the whole grid editable, lock specific columns, register custom editors, and intercept writes before they are committed.

## How editing works

Editing in RevoGrid is controlled by a few core pieces:

- `readonly` can lock the whole grid or specific columns
- `editors` registers custom editor implementations
- `applyOnClose` controls whether closing an editor saves the current value
- lifecycle events such as `beforeedit`, `beforeeditstart`, and `afteredit` let you validate or sync changes

## Minimal editable setup

```javascript
const grid = document.querySelector('revo-grid');

grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price' },
];

grid.source = [
  { id: 1, name: 'Apple', price: 1.2 },
  { id: 2, name: 'Banana', price: 0.5 },
];
```

By default, columns without `readonly: true` can be edited.

If the grid itself has `readonly = true`, that top-level flag wins and editing is disabled across all columns.

## Read-only modes

### Lock the whole grid

```javascript
const grid = document.querySelector('revo-grid');
grid.readonly = true;
```

### Lock individual columns

```javascript
grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price', readonly: true },
];
```

### Dynamic read-only rules

`readonly` can also be a function in a column type, which is useful when editability depends on row data.

Example:

```ts
grid.columnTypes = {
  editableWhenDraft: {
    readonly({ model }) {
      return model.status !== 'draft';
    },
  },
};
```

## Save control with `applyOnClose`

Set `applyOnClose` when you want editor closing to commit the current value except for `Escape`-style cancellations:

```ts
grid.applyOnClose = true;
```

This is useful when building custom editors with blur or close interactions.

Typical use case:

- click into a cell
- change the value
- click outside the editor
- save automatically unless the user explicitly canceled

## Programmatically open an editor

Use `setCellEdit` when your UI needs to move users directly into edit mode:

```ts
await grid.setCellEdit(0, 'price');
```

Arguments:

- first argument: row index in the selected row viewport
- second argument: column `prop`
- optional third argument: row source type such as `rgRow`, `rowPinStart`, or `rowPinEnd`

Read more in [Programmatic Grid Control](/guide/programmatic-control).

## Editing lifecycle events

These are the most important hooks for application logic:

- `beforeeditstart`: runs before the editor opens
- `beforeedit`: runs before data is committed; can cancel or rewrite the value
- `beforerangeedit`: same idea for range updates
- `afteredit`: runs after the edit or range change has been applied

Example:

```javascript
grid.addEventListener('beforeedit', event => {
  const { model, prop, val } = event.detail;

  if (prop === 'price' && Number(val) < 0) {
    event.preventDefault();
    return;
  }

  if (prop === 'name') {
    event.detail.val = String(val).trim();
  }
});

grid.addEventListener('afteredit', event => {
  console.log('Edit applied', event.detail);
});
```

If you need to normalize values, `beforeedit` is the safest place to do it.

Example:

```ts
grid.addEventListener('beforeedit', event => {
  if (event.detail.prop === 'email') {
    event.detail.val = String(event.detail.val).toLowerCase();
  }
});
```

## Editing and focus

Editing and focus are closely connected in RevoGrid:

- `canFocus` controls whether focus is rendered
- `setCellsFocus` can move focus before opening an editor
- `clearFocus` removes the active focus state
- `getSelectedRange` helps when edits depend on the current selection

If you are building custom keyboard or toolbar workflows, combine the public methods instead of trying to target internal DOM elements directly.

Example toolbar flow:

```ts
await grid.setCellsFocus({ x: 1, y: 2 }, { x: 1, y: 2 });
await grid.setCellEdit(2, 'name');
```

## Common editing scenarios

### Prevent invalid numbers

```ts
grid.addEventListener('beforeedit', event => {
  if (event.detail.prop === 'price' && Number(event.detail.val) < 0) {
    event.preventDefault();
  }
});
```

### Save on confirmed change

```ts
grid.addEventListener('afteredit', async event => {
  await saveRow(event.detail.model);
});
```

## Related guides

- [Cell Editor](/guide/cell/editor)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Event Patterns and Lifecycles](/guide/events-guide)
- [API: RevoGrid](/guide/api/revoGrid)

## Related Pro features

If you need richer editing workflows, RevoGrid Pro adds editors and validation patterns such as row editors, checkbox editors, timeline editors, dropdown editors, and validation helpers. Start from [RevoGrid Pro](/pro/).
