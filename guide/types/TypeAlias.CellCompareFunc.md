[RevoGrid Documentation v4.23.19](README.md) / CellCompareFunc

# Type Alias: CellCompareFunc()\<TModel\>

```ts
type CellCompareFunc<TModel>: (prop: ColumnProp, a: TModel, b: TModel) => number;
```

`CellCompareFunc` is a function that takes the column property to compare,
the data of the first cell, and the data of the second cell. It returns a
number indicating the relative order of the two cells.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |
| `a` | `TModel` |
| `b` | `TModel` |

## Returns

`number`

## Defined in

[src/types/interfaces.ts:438](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L438)
