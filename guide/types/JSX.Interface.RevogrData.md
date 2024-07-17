[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1571](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1571) |
| `colData?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1575](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1575) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1579](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1579) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1583](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1583) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1587](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1587) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1591](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1591) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1595](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1595) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<`any`\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1599](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1599) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1603](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1603) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1607](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1607) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1611](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1611) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1615](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1615) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1619](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1619) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1623](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1623) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1627](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1627) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1631](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1631) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1635](https://github.com/revolist/revogrid/blob/a649ddca5a4a20f5f68ee92610066873d77a049a/src/components.d.ts#L1635) |
