[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1683](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1683) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1687](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1687) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1691](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1691) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1695](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1695) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1699](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1699) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1703](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1703) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1707](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1707) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1711](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1711) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1715](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1715) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1719](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1719) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1723](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1723) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1727](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1727) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1731](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1731) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1735](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1735) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1739](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1739) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1743](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1743) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1747](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1747) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1751](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1751) |
