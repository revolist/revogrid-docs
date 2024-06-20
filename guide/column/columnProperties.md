## Column Properties

<!--@include: ../parts/column.props.md-->


```js
const columns = [{
        name: 'Person name',
        prop: 'name',

        // apply this for custom properties
        columnProperties: ({ prop, model, data, column }) => {
            return {
                style: {
                    color: 'red',
                },
                class: {
                    bank: true,
                },
            }
        },
}]
```
