[RevoGrid Documentation v4.20.0](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/types/interfaces.ts#L788) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:91](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/types/selection.ts#L91) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:90](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/types/selection.ts#L90) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/types/interfaces.ts#L783) |
