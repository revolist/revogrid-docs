[RevoGrid Documentation v4.27.7](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:872](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L872) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:851](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L851) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:877](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L877) |
| `originalEvent?` | `MouseEvent` \| `TouchEvent` \| `KeyboardEvent` | Original user input event that initiated the focus/range change, when available. | - | [src/types/interfaces.ts:882](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L882) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:868](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L868) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:870](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L870) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:846](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/types/interfaces.ts#L846) |
