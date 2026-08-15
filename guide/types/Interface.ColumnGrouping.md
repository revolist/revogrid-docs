[RevoGrid Documentation v4.25.2](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:121](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L121) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:125](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L125) |
