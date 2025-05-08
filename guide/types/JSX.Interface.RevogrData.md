[RevoGrid Documentation v4.15.7](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1720](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1720) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1724](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1724) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1728](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1728) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1732](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1732) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1736](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1736) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1740](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1740) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1744](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1744) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1748](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1748) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1752](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1752) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1756](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1756) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1760](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1760) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1764](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1764) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1768](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1768) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1772](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1772) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1776](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1776) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1780](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1780) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1784](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1784) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1788](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1788) |
