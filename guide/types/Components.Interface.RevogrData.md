[RevoGrid Documentation v4.23.21](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:377](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L377) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:381](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L381) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:385](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L385) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:389](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L389) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:393](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L393) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L398) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L402) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:406](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L406) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:410](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L410) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:414](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L414) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:418](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L418) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:422](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L422) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:426](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L426) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:430](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L430) |
