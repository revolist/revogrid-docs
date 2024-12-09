[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:777](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L777) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L756) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:782](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L782) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:773](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L773) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:775](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L775) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:751](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L751) |
