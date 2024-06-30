[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L733) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Represents the next cell to focus. | - | [src/types/interfaces.ts:755](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L755) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:750](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L750) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:728](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L728) |
