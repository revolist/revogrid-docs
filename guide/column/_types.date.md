### Date

The date column type adds a calendar editor through the [revogrid-column-date](https://github.com/revolist/revogrid-column-date) package, based on [duetds-date-picker](https://github.com/duetds/date-picker).

Use it for date strings or date values that should be edited with a date picker instead of plain text input.

You can pass [duetds-date-picker](https://github.com/duetds/date-picker) properties through the column definition:

```js
const columns = [
    {
        prop: 'birthdate',
        columnType: 'date',
        direction: 'left',
        required: 'true',
        valueAsDate: 'true',
    },
]
```

#### Installation

::: code-group

```npm
npm i @revolist/revogrid-column-date

```

```pnpm
pnpm add @revolist/revogrid-column-date
```

```yarn
yarn add @revolist/revogrid-column-date
```

```bun
bun add @revolist/revogrid-column-date
```

:::

#### Basic usage

1. Import the date column type.
2. Register it in `columnTypes`.
3. Set `columnType: 'date'` on date columns.
4. Pass picker options on the column when needed.


```js
// do import
import Plugin from '@revolist/revogrid-column-date'

const columns = [{ prop: 'birthdate', columnType: 'date' }]
const rows = [{ birthdate: '2020-08-24' }, { birthdate: '2022-08-24' }]

// register column type
const columnTypes = { date: new Plugin() }

// apply data to grid per your framework approach
<revo-grid source={rows} columns={columns} columnTypes={columnTypes} />
```

Keep the date value format consistent across the column. If your application stores dates in a different shape than the editor displays, normalize the value before assigning `source` or handle conversion in your save workflow.

<!--@include: ../../demo/js/js.date.md-->
