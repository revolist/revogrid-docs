### Number

Primitive [numeric data type plugin](https://github.com/revolist/Revogrid-column-numeral) based on [numeraljs](http://numeraljs.com) library.
Accept data in numeric format.

<b>Installation</b>

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

<b>Basic usage</b>

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

<b>Advance usage</b>

Check [plugin page](https://github.com/revolist/Revogrid-column-numeral) and [numeraljs](http://numeraljs.com).
