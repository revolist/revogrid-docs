[RevoGrid Documentation v4.23.11](README.md) / [Components](Namespace.Components.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:372](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L372) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:376](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L376) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:380](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L380) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:384](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L384) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:388](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L388) |
| `jobsBeforeRender` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:393](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L393) |
| `range` | `boolean` | Range allowed | [src/components.d.ts:397](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L397) |
| `readonly` | `boolean` | Readonly mode | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L401) |
| `rowClass` | `string` | Defines property from which to read row class | [src/components.d.ts:405](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L405) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:409](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L409) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:413](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L413) |
| `updateCell` | (`e`: \{ `col`: `number`; `row`: `number`; \}) => `Promise`\<`void`\> | Pointed cell update. | [src/components.d.ts:417](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L417) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:421](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L421) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:425](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/components.d.ts#L425) |
