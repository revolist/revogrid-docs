[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:307](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L307) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:311](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L311) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:315](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L315) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:319](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L319) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:323](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L323) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:327](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L327) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:331](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L331) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:335](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L335) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:339](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L339) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:343](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L343) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:347](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L347) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:351](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L351) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:355](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L355) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:359](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L359) |
