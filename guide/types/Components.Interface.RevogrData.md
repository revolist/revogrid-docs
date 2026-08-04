[RevoGrid Documentation v4.25.0](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:382](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L382) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:386](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L386) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:390](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L390) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:394](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L394) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L398) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L403) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:407](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L407) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:411](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L411) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:415](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L415) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:419](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L419) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:423](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L423) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:427](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L427) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:431](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L431) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:435](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L435) |
