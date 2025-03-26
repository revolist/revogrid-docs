[RevoGrid Documentation v4.14.8](README.md) / ColumnGrouping

# Interface: ColumnGrouping\<T\>

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`T`\>)[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:102](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L102) |
| `name` | `T` | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:106](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L106) |
