[RevoGrid Documentation v4.23.19](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:866](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L866) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L845) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:871](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L871) |
| `originalEvent?` | `MouseEvent` \| `TouchEvent` \| `KeyboardEvent` | Original user input event that initiated the focus/range change, when available. | - | [src/types/interfaces.ts:876](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L876) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:862](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L862) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:864](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L864) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/interfaces.ts#L840) |
