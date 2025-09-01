[RevoGrid Documentation v4.17.0](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:103](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/types/interfaces.ts#L103) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:107](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/types/interfaces.ts#L107) |
