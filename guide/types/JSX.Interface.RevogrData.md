[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1689](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1689) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1693](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1693) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1697](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1697) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1701](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1701) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1705](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1705) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1709](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1709) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1713](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1713) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1717](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1717) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1721](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1721) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1725](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1725) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1729](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1729) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1733](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1733) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1737](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1737) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1741](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1741) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1745](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1745) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1749](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1749) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1753](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1753) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1757](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L1757) |
