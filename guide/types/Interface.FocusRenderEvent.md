[RevoGrid Documentation v4.21.7](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:835](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L835) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:814](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L814) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L840) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:831](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L831) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:833](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L833) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:809](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L809) |
