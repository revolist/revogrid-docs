[@revolist/revogrid](README.md) / FocusAfterRenderEvent

# Interface: FocusAfterRenderEvent

Represents the mapping of dimension types to their corresponding dimension types.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | - | [src/types/interfaces.ts:766](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L766) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L731) |
| `column?` | [`ColumnRegular`](Interface.ColumnRegular.md) | - | - | [src/types/interfaces.ts:758](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L758) |
| `model?` | `any` | - | - | [src/types/interfaces.ts:757](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L757) |
| `rowIndex` | `number` | Index of the row in the viewport | - | [src/types/interfaces.ts:762](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L762) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/13683f406d4444f1320602b1f5f5b66b213da3f8/src/types/interfaces.ts#L726) |
