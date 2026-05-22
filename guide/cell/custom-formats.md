---
title: RevoGrid Custom Cell Formats
description: Create custom RevoGrid cell formats with cell templates, cell properties, parsers, and reusable column types.
head:
  - - meta
    - name: keywords
      content: RevoGrid custom cell format, data grid cell formatter, custom column type, cell template, cell properties, columnTypes, columnType, cellParser
---

# Custom Cell Formats

Custom cell formats define how a value should look, behave, and be interpreted inside the grid. For a single column, configure formatting directly on the column definition. For reusable formats, define a `columnTypes` preset and reference it from any column with `columnType`.

Use [Column Formats](/guide/column/types) when you want to define custom formats per column or reuse the same format across many columns and cells.

## Format a single column

Use `cellTemplate` when the display value needs custom markup or logic:

```ts
const columns = [
  {
    name: 'Total',
    prop: 'total',
    cellTemplate: (createElement, props) => {
      const value = Number(props.model[props.prop] ?? 0)

      return createElement(
        'span',
        {
          class: {
            'amount-positive': value >= 0,
            'amount-negative': value < 0,
          },
        },
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value)
      )
    },
  },
]
```

Use `cellProperties` when the original value can stay as text, but the cell needs classes, styles, data attributes, or events:

```ts
const columns = [
  {
    name: 'Status',
    prop: 'status',
    cellProperties: ({ model, prop }) => ({
      class: {
        'status-cell': true,
        'status-done': model[prop] === 'Done',
        'status-blocked': model[prop] === 'Blocked',
      },
      'data-status': model[prop],
    }),
  },
]
```

## Reuse a format with `columnTypes`

Define a format once in `grid.columnTypes`, then use `columnType` on every column that should inherit it:

```ts
const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

grid.columnTypes = {
  money: {
    size: 140,
    cellTemplate: (createElement, props) => {
      const value = Number(props.model[props.prop] ?? 0)

      return createElement(
        'span',
        {
          class: {
            'money-cell': true,
            'money-negative': value < 0,
          },
        },
        currencyFormat.format(value)
      )
    },
    cellParser: (model, column) => Number(model[column.prop] ?? 0),
  },
}

grid.columns = [
  { name: 'Revenue', prop: 'revenue', columnType: 'money' },
  { name: 'Cost', prop: 'cost', columnType: 'money' },
]
```

Column settings override inherited `columnTypes` settings, so you can keep the shared format and adjust a specific column:

```ts
grid.columns = [
  { name: 'Revenue', prop: 'revenue', columnType: 'money' },
  { name: 'Cost', prop: 'cost', columnType: 'money', size: 110 },
]
```

## Choosing the right option

- Use `cellProperties` for classes, styles, data attributes, and event handlers.
- Use `cellTemplate` for custom rendered content.
- Use `cellParser` when filtering or data operations need a parsed value that differs from the displayed value.
- Use `columnTypes` when the same format should be shared across multiple columns.

See also [Cell Renderer](/guide/cell/renderer), [Cell Editor](/guide/cell/editor), and [Column Formats](/guide/column/types).
