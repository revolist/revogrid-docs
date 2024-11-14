[@revolist/revogrid](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/interfaces.ts#L756) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:85](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/selection.ts#L85) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:84](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/selection.ts#L84) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:751](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/interfaces.ts#L751) |
