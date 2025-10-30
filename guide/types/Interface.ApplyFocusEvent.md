[RevoGrid Documentation v4.19.3](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/types/interfaces.ts#L788) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:91](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/types/selection.ts#L91) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:90](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/types/selection.ts#L90) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/types/interfaces.ts#L783) |
