[RevoGrid Documentation v4.31.8](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:394](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L394) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L398) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L402) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:406](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L406) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:410](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L410) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:415](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L415) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:419](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L419) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:423](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L423) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:427](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L427) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:431](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L431) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:435](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L435) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L439) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:443](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L443) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L447) |
