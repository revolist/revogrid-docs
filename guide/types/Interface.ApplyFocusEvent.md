[@revolist/revogrid](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/types/interfaces.ts#L727) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:56](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/types/selection.ts#L56) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:55](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/types/selection.ts#L55) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:722](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/types/interfaces.ts#L722) |
