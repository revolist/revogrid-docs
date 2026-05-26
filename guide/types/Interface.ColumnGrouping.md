[RevoGrid Documentation v4.23.2](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:120](https://github.com/revolist/revogrid/blob/2ab297309bca72a9ee6de7e26f5f41940fbe0414/src/types/interfaces.ts#L120) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:124](https://github.com/revolist/revogrid/blob/2ab297309bca72a9ee6de7e26f5f41940fbe0414/src/types/interfaces.ts#L124) |
