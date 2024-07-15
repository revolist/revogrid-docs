## Readonly

[<Badge type="tip">ColumnDataSchemaModel</Badge>](../types/TypeAlias.ColumnDataSchemaModel)
[<Badge type="tip">ReadOnlyFormat</Badge>](../types/TypeAlias.ReadOnlyFormat)


To use the `readonly` property in RevoGrid, you can set it either as a boolean value or as a function that returns a boolean value based on the provided `ColumnDataSchemaModel`.

### Using `readonly` as a Boolean

If you want the entire column to be read-only, you can set the `readonly` property to `true` for that column.

```javascript
const columns = [
    {
        prop: 'name',
        name: 'Name',
        readonly: true, // This column is read-only
    },
    {
        prop: 'age',
        name: 'Age',
    },
]

const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
]

<revo-grid source={data} columns={columns}></revo-grid>
```

### Using `readonly` as a Function

If you want to conditionally set the `readonly` property based on the column data, you can provide a function that returns a boolean value.

```javascript
const columns = [
    {
        prop: 'name',
        name: 'Name',
        readonly: (params) => {
            // Make the cell read-only if the name is 'John'
            return params.model.name === 'John'
        },
    },
    {
        prop: 'age',
        name: 'Age',
    },
]

const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
]

<revo-grid source={data} columns={columns}></revo-grid>
```

In this example, the `name` column will be read-only for rows where the `name` is 'John'. For other rows, it will be editable.

### Example with Both Approaches

Here is an example combining both approaches for different columns:

```javascript
const columns = [
    {
        prop: 'name',
        name: 'Name',
        readonly: true, // Entire column is read-only
    },
    {
        prop: 'age',
        name: 'Age',
        readonly: (params) => {
            // Make the cell read-only if the age is greater than 28
            return params.model.age > 28
        },
    },
]

const data = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
]

<revo-grid source={data} columns={columns}></revo-grid>
```

### Complete Example in Context

Here’s how you might integrate this into a full RevoGrid component in a React application:

```js
const App = () => {
    const columns = [
        {
            prop: 'name',
            name: 'Name',
            readonly: true, // Entire column is read-only
        },
        {
            prop: 'age',
            name: 'Age',
            readonly: (params) => {
                // Make the cell read-only if the age is greater than 28
                return params.model.age > 28
            },
        },
    ]

    const data = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
    ]

    <revo-grid source={data} columns={columns} />
}

export default App
```

This example demonstrates how to configure columns to be read-only either entirely or based on specific conditions using RevoGrid's `readonly` property.
