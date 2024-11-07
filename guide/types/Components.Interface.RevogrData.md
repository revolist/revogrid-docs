[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:316](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L316) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:320](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L320) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:324](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L324) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:328](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L328) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:332](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L332) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:336](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L336) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:340](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L340) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:344](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L344) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:348](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L348) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:352](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L352) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:356](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L356) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:360](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L360) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:364](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L364) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:368](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L368) |
