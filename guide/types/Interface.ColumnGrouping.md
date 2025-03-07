[RevoGrid Documentation v4.13.1](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:101](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/types/interfaces.ts#L101) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:105](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/types/interfaces.ts#L105) |
