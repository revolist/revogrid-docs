[RevoGrid Documentation v4.26.1](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:869](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L869) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:848](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L848) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:874](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L874) |
| `originalEvent?` | `MouseEvent` \| `TouchEvent` \| `KeyboardEvent` | Original user input event that initiated the focus/range change, when available. | - | [src/types/interfaces.ts:879](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L879) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:865](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L865) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:867](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L867) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:843](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L843) |
