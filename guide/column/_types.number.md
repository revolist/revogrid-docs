### Number

The number column type adds numeric formatting through the [revogrid-column-numeral](https://github.com/revolist/revogrid-column-numeral) package, based on [numeraljs](http://numeraljs.com). Use it for quantities, totals, prices, percentages, and other numeric values that should keep a consistent display format.

The source value should be numeric or safely convertible to a number. The formatter controls how the value appears in the cell.

#### Installation

::: code-group

```npm
npm i @revolist/revogrid-column-numeral

```

```pnpm
pnpm add @revolist/revogrid-column-numeral
```

```yarn
yarn add @revolist/revogrid-column-numeral
```

```bun
bun add @revolist/revogrid-column-numeral
```
:::

#### Basic usage

```js
import NumberColumnType from '@revolist/revogrid-column-numeral' // import library
const plugin = { numeric: new NumberColumnType('0,0') } // create plugin entity
const columns = [{ prop: 'num', columnType: 'numeric' }] // define column type
const rows = [{ num: 1000 }]

const grid = document.querySelector('revo-grid')
grid.columnTypes = plugin
grid.source = rows
grid.columns = columns

// '1,000'
```

#### Format examples

```ts
const columnTypes = {
  integer: new NumberColumnType('0,0'),
  decimal: new NumberColumnType('0,0.00'),
  percent: new NumberColumnType('0.0%'),
}

const columns = [
  { prop: 'orders', name: 'Orders', columnType: 'integer' },
  { prop: 'revenue', name: 'Revenue', columnType: 'decimal' },
  { prop: 'conversion', name: 'Conversion', columnType: 'percent' },
]
```

For more formatting options, check the [plugin page](https://github.com/revolist/revogrid-column-numeral) and [numeraljs](http://numeraljs.com).
