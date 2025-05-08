[RevoGrid Documentation v4.15.7](README.md) / CellCompareFunc

# Type Alias: CellCompareFunc()

```ts
type CellCompareFunc: (prop: ColumnProp, a: DataType, b: DataType) => number;
```

`CellCompareFunc` is a function that takes the column property to compare,
the data of the first cell, and the data of the second cell. It returns a
number indicating the relative order of the two cells.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) |
| `a` | [`DataType`](TypeAlias.DataType.md) |
| `b` | [`DataType`](TypeAlias.DataType.md) |

## Returns

`number`

## Defined in

[src/types/interfaces.ts:421](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L421)
