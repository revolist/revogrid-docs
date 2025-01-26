[RevoGrid Documentation v4.11.17](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:321](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L321) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:325](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L325) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:329](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L329) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:333](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L333) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:337](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L337) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:341](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L341) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:345](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L345) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:349](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L349) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:353](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L353) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:357](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L357) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:361](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L361) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:365](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L365) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:369](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L369) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:373](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L373) |
