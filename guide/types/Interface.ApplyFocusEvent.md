[RevoGrid Documentation v4.13.3](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L769) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:86](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/selection.ts#L86) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:85](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/selection.ts#L85) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L764) |
