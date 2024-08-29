[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L731) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:753](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L753) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:748](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L748) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L726) |
