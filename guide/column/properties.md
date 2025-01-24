# Header Properties

[<Badge type="tip">Interface: ColumnRegular</Badge>](../types/Interface.ColumnRegular) [<Badge type="tip">Type: ColPropertiesFunc</Badge>](../types/TypeAlias.ColPropertiesFunc)

<!--@include: ../parts/column.props.md-->


```ts
const columns: ColumnRegular[] = [{
        name: 'Person name',
        prop: 'name',

        // apply this for custom properties
        columnProperties: ({ prop }: ColumnRegular): CellProps => {
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
