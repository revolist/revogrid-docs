[RevoGrid Documentation v4.20.1](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1816](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1816) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1820](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1820) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1824](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1824) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1828](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1828) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1832](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1832) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:1837](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1837) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1841) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1845](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1845) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1849](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1849) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1853](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1853) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1857](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1857) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1861](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1861) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1865](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1865) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1869](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1869) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1873](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1873) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1877](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1877) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1881](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1881) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1885](https://github.com/revolist/revogrid/blob/886bccdbb56a18366fb1471c77380cf8944f7722/src/components.d.ts#L1885) |
