---
title: Row Resizing in JavaScript Data Grid
description: Let users resize rows from row-header or full-row edges, configure height limits, and respond to resize lifecycle events.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, row resize, resize row height, full row resize, resizeRow, RowResizeConfig
---

# Row Resizing in JavaScript Data Grid

Row resizing is an opt-in Core feature. Set the `resizeRow` grid property to let users drag the bottom edge of a row and change its height.

Completed sizes are stored through the grid's row-definition pipeline. A resized height therefore stays attached to its physical source row when filtering or sorting changes the visible row order.

## Resize from row headers

Set `resizeRow` and `rowHeaders` to `true` to display a resize edge at the bottom of each row header:

```js
const grid = document.querySelector('revo-grid');

grid.rowHeaders = true;
grid.resizeRow = true;
```

The boolean form uses the default minimum height of `20px` and has no maximum height.

For static HTML, the boolean option can also be enabled with attributes:

```html
<revo-grid row-headers resize-row></revo-grid>
```

## Resize from the full row edge

Pass a configuration object with `fullRow: true` to make the resize edge available across rendered data rows. Users can then resize from the bottom edge of a row without requiring row headers.

```js
const grid = document.querySelector('revo-grid');

grid.resizeRow = {
  fullRow: true,
};
```

`fullRow` extends the edge target across the row; the row body remains available for selection, editing, and other interactions.

## Configuration

The object form accepts `RowResizeConfig`:

```ts
import type { RowResizeConfig } from '@revolist/revogrid';

const resizeRow: RowResizeConfig = {
  minHeight: 28,
  maxHeight: 120,
  fullRow: true,
};

grid.resizeRow = resizeRow;
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `minHeight` | `number` | `20` | Smallest height a user can assign. |
| `maxHeight` | `number` | No limit | Largest height a user can assign. |
| `fullRow` | `boolean` | `false` | Makes the resize edge available across data rows instead of only row headers. |

Set `grid.resizeRow = false` to disable the interaction at runtime. The plugin remains registered internally, while its resize listeners and handles stay inactive.

## Selected rows

If the grabbed row belongs to the active selected range, RevoGrid applies the same resulting height to every selected row. Grabbing a row outside the range resizes only that row.

## Resize events

RevoGrid emits these events during a resize gesture:

| Event | When it fires |
| --- | --- |
| `beforerowresize` | Before resizing starts. Call `preventDefault()` to cancel the gesture. |
| `rowresize` | While pointer movement applies a live row height. |
| `afterrowresize` | After the completed height is committed. |
| `rowresizecancel` | When an active gesture is cancelled, for example with Escape or a configuration change. |

Each event identifies the row dimension, grabbed row index, affected indexes, current size, previous sizes, and original pointer event.

```js
grid.addEventListener('afterrowresize', event => {
  console.log(event.detail.index, event.detail.size);
});
```

## Related guides

- [Row Height](/guide/row/height)
- [Row Headers](/guide/row/headers)
- [Row Selection](/guide/row/selection.pro)
- [Filtering](/guide/filters)
