[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1606](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1606) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1610](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1610) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1614](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1614) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1618](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1618) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1622](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1622) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1626](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1626) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1630](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1630) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1634](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1634) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1638](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1638) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1642](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1642) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1646](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1646) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1650](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1650) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1654](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1654) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1658](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1658) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1662](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1662) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1666](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1666) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1670](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L1670) |
