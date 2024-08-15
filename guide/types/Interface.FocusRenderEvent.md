[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:738](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L738) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:760](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L760) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:755](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L755) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L733) |
