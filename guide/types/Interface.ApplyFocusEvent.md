[@revolist/revogrid](README.md) / ApplyFocusEvent

# Interface: ApplyFocusEvent

Represents the event object that is emitted when applying focus.
It includes information about the dimension type and focused cells.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md).[`FocusedCells`](TypeAlias.FocusedCells.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:732](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L732) |
| `end` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.end` | [src/types/selection.ts:60](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/selection.ts#L60) |
| `focus` | [`Cell`](Interface.Cell.md) | - | `FocusedCells.focus` | [src/types/selection.ts:59](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/selection.ts#L59) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L727) |
