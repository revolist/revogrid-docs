[RevoGrid Documentation v4.23.0](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:866](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L866) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L845) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:871](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L871) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:862](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L862) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:864](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L864) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/types/interfaces.ts#L840) |
