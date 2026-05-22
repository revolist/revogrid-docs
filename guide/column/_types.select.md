### Select Dropdown

The select column type adds a dropdown editor through the [revogrid-column-select](https://github.com/revolist/RevoGrid-column-select) package, based on [revo-dropdown](https://github.com/revolist/revodropdown).

Use it when users should choose from a controlled list of values, such as statuses, departments, categories, countries, or lookup table entries.

Dropdown options can be represented as strings or objects. When using objects, configure `labelKey` and `valueKey` so the editor knows what to display and what to store.

#### Installation

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

#### Basic usage

1. Import the select column type.
2. Define the dropdown source.
3. Register the type in `columnTypes`.
4. Set `columnType: 'select'` on the column.

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

#### Option shape

```ts
const dropdown = {
  labelKey: 'label',
  valueKey: 'value',
  source: [
    { label: 'Draft', value: 'draft' },
    { label: 'Approved', value: 'approved' },
    { label: 'Archived', value: 'archived' },
  ],
}
```

Use the object form when the visible label and stored value should differ.
