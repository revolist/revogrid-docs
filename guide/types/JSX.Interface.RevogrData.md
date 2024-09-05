[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1642](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1642) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1646](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1646) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1650](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1650) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1654](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1654) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1658](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1658) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1662](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1662) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1666](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1666) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1670](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1670) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1674](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1674) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1678](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1678) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1682](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1682) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1686](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1686) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1690](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1690) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1694](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1694) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1698](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1698) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1702](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1702) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1706](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1706) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1710](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1710) |
