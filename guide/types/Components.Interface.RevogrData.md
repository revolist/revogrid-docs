[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells |
| `colData` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\> | Column source |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) \| `"rowHeaders"` | Column data type |
| `dataStore` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\> | Data rows source |
| `dimensionRow` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. |
| `range` | `boolean` | Range allowed |
| `readonly` | `boolean` | Readonly mode |
| `rowClass` | `string` | Defines property from which to read row class |
| `rowSelectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection, range, focus for row selection |
| `type` | [`DimensionRows`](Type.DimensionRows.md) | Row data type |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. |
| `viewportCol` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X |
| `viewportRow` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y |
