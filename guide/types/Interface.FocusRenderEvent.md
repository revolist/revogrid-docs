[@revolist/revogrid](README.md) / FocusRenderEvent

# Interface: FocusRenderEvent

Represents the event object that is emitted before focus rendering.
It includes information about the dimension type and range area.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:755](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L755) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:734](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L734) |
| `next?` | `Partial`\<[`Cell`](Interface.Cell.md)\> | Changes for the next cell to focus. **Example** `{ y: -1 }` | - | [src/types/interfaces.ts:760](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L760) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | Represents the range area of the focus. | - | [src/types/interfaces.ts:751](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L751) |
| `rowDimension` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | - | - | [src/types/interfaces.ts:753](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L753) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:729](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L729) |
