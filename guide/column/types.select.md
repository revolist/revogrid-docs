### Select/Dropdown

Complex [selection data type plugin](https://github.com/revolist/Revogrid-column-select) based on [revo-dropdown](https://github.com/revolist/revodropdown) library.

In order to improve dropdown functionality please contribute with [revo-dropdown](https://github.com/revolist/revodropdown).

Accept data in Array format. Item in array can be represented as a string[] or an object[].

<b>Installation</b>

::: code-group

```npm
npm i @revolist/revogrid-column-select

```

```pnpm
pnpm add @revolist/revogrid-column-select
```

```yarn
yarn add @revolist/revogrid-column-select
```

```bun
bun add @revolist/revogrid-column-select
```

:::

<b>Basic usage</b>

-   Import Select Column type;
-   Specify table data;
-   Per column specify column type;
-   Register your column type.

```js
// do Select class import
import SelectTypePlugin from '@revolist/revogrid-column-select'

const dropdown = {
    labelKey: 'label',
    valueKey: 'value',
    source: [
        { label: 'According', value: 'a' },
        { label: 'Over', value: 'b' },
        { label: 'Source', value: 's' },
    ],
}
const columns = [
    {
        ...dropdown,
        prop: 'name',
        columnType: 'select', // column type specified as 'select'
    },
]
const rows = [{ name: 'New item' }, { name: 'New item 2' }]

// register column type
const plugin = { select: new SelectTypePlugin() }

// apply data to grid per your framework approach
<revo-grid source={rows} columns={columns} columnTypes={plugin} />
```
