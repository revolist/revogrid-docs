[RevoGrid Documentation v4.15.7](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:103](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L103) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:107](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L107) |
