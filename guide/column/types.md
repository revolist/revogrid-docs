---
title: RevoGrid Column Types and Column Formats
description: Configure reusable RevoGrid column types for string, number, select, date, custom editors, cell templates, parsers, and shared data grid formatting.
head:
  - - meta
    - name: keywords
      content: RevoGrid column types, data grid column types, JavaScript data grid formatting, columnTypes, columnType, custom grid editor, numeric grid column, select grid column, date grid column
---

# Column Types and Formats

<DemoWidgetFrame
  demo="field-types"
  framework="ts"
  title="RevoGrid column types demo"
  minHeight="600"
/>

Column types let you package column behavior once and reuse it across your grid. A type can define formatting, sizing, read-only rules, custom editors, cell templates, parsers, sorting behavior, and any other reusable column option.

Use column types when several columns should behave the same way, or when a column needs a richer editor such as a number formatter, select dropdown, or date picker.

## How column types work

RevoGrid exposes two related APIs:

- `columnTypes` is a map of reusable type definitions registered on the grid.
- `columnType` is the name used by a column to apply one of those definitions.

Column settings are merged with the selected type. If the same option exists in both places, the column definition can override the shared type for that column.

[<Badge type="tip">Type: ColumnTypes</Badge>](../types/TypeAlias.ColumnTypes)
[<Badge type="tip">Interface: ColumnType</Badge>](../types/Interface.ColumnType)
[<Badge type="tip">Interface: ColumnRegular</Badge>](../types/Interface.ColumnRegular)

```ts
const grid = document.querySelector('revo-grid')

grid.columnTypes = {
  money: {
    size: 140,
    readonly: false,
    cellTemplate: (createElement, props) => {
      const value = Number(props.model[props.prop] ?? 0)

      return createElement(
        'span',
        { class: { 'money-cell': true, 'money-negative': value < 0 } },
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value)
      )
    },
    cellParser: (model, column) => Number(model[column.prop] ?? 0),
  },
}

grid.columns = [
  { prop: 'revenue', name: 'Revenue', columnType: 'money' },
  { prop: 'cost', name: 'Cost', columnType: 'money', size: 110 },
]
```

## Built-in and plugin column formats

The string format is available by default. Number, select, and date formats are distributed as optional packages so applications only ship the editors and formatters they actually use.

| Format | Package | Best for |
| --- | --- | --- |
| [String](#string) | Built in | Plain text, IDs, labels, and default editable cells |
| [Number](#number) | `@revolist/revogrid-column-numeral` | Numeric display, thousands separators, currency-like formatting |
| [Select Dropdown](#select-dropdown) | `@revolist/revogrid-column-select` | Controlled choices, status values, lookup lists |
| [Date](#date) | `@revolist/revogrid-column-date` | Date input, calendar picking, date strings |

## When to create a custom column type

Create a custom type when the same column behavior appears in multiple places:

- a currency or percentage format shared by many numeric columns
- a reusable status style with custom classes
- a read-only system field preset
- a custom editor used by multiple columns
- a parser that keeps filtering and sorting aligned with displayed values

For one-off rendering, configure the column directly instead. See [Custom Cell Formats](/guide/cell/custom-formats), [Cell Renderer](/guide/cell/renderer), and [Cell Editor](/guide/cell/editor).

## Register optional column type packages

Optional column packages follow the same pattern:

1. Install the package.
2. Import the type plugin.
3. Register it in `columnTypes`.
4. Reference it from a column with `columnType`.

```ts
import NumberColumnType from '@revolist/revogrid-column-numeral'

const columnTypes = {
  numeric: new NumberColumnType('0,0'),
}

const columns = [
  { prop: 'quantity', name: 'Quantity', columnType: 'numeric' },
]
```

Framework wrappers use the same data shape. Pass `columns`, `source`, and `columnTypes` through your framework binding, or assign them directly to the `<revo-grid/>` element in plain JavaScript.

## Available column formats

<!--@include: ./_types.string.md-->
<br /><br />
<!--@include: ./_types.number.md-->
<br /><br />
<!--@include: ./_types.select.md-->
<br /><br />
<!--@include: ./_types.date.md-->
<br /><br />
<!--@include: ./_types.pro.md-->

## Practical tips

- Register `columnTypes` before assigning columns when possible, especially during initial grid setup.
- Keep the data shape stable: `prop` must match a key in the row object.
- Use `cellParser` when filtering should operate on a normalized value instead of formatted text.
- Use column-level options to override a shared type for a single column.
- Keep optional plugins out of the bundle until you need their editors or formatters.

## Troubleshooting

If a type does not apply, check that the key in `columnTypes` exactly matches the column `columnType` value.

If a plugin editor does not open, confirm that the package is installed, imported, and registered as an instance where the plugin expects one, for example `new NumberColumnType('0,0')`.

If displayed values and filtering behave differently, add a `cellParser` to return the value that filter logic should use.

Check the [live demos](https://rv-grid.com/demo/) for working grid examples, or use [Column Configuration](/guide/column/) for the full list of column options.
