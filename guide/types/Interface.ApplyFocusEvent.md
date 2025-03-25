[RevoGrid Documentation v4.14.7](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:770](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/types/interfaces.ts#L770) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:90](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/types/selection.ts#L90) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:89](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/types/selection.ts#L89) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:765](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/types/interfaces.ts#L765) |
