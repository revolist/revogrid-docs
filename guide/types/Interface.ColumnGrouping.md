[RevoGrid Documentation v4.15.4](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:103](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/types/interfaces.ts#L103) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:107](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/types/interfaces.ts#L107) |
