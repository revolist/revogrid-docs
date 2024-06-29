[@revolist/revogrid](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L733) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:56](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L56) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:55](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L55) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:728](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L728) |
