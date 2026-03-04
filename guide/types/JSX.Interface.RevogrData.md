[RevoGrid Documentation v4.20.5](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1818](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1818) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1822](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1822) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1826](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1826) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1830](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1830) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1834](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1834) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:1839](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1839) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1843](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1843) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1847](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1847) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1851](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1851) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1855](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1855) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1859](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1859) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1863](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1863) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1867](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1867) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1871](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1871) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1875](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1875) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1879](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1879) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1883](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1883) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1887](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1887) |
