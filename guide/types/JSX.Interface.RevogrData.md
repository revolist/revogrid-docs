[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1581](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1581) |
| `colData?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1585](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1585) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1589](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1589) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1593](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1593) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1597](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1597) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1601](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1601) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1605](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1605) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<`any`\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1609](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1609) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1613](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1613) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1617](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1617) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1621](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1621) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1625](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1625) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1629](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1629) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1633](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1633) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1637](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1637) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1641](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1641) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1645](https://github.com/revolist/revogrid/blob/f56bf50e3d2048c8d7f3081240be2216cdbe01d4/src/components.d.ts#L1645) |
