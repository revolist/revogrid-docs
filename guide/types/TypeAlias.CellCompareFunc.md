[RevoGrid Documentation v4.12.7](README.md) / CellCompareFunc

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

[src/types/interfaces.ts:402](https://github.com/revolist/revogrid/blob/435ff99a088c5c293d22eb08cc3e448f60f4eb56/src/types/interfaces.ts#L402)
