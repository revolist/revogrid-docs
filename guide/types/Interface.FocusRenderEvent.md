[RevoGrid Documentation v4.14.6](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:791](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L791) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:770](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L770) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:796](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L796) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:787](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L787) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:789](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L789) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:765](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/types/interfaces.ts#L765) |
