[RevoGrid Documentation v4.26.1](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:848](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L848) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:105](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/selection.ts#L105) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:104](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/selection.ts#L104) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:843](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L843) |
