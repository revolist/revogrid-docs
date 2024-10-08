[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1647](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1647) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1651](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1651) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1655](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1655) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1659](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1659) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1663](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1663) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1667](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1667) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1671](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1671) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1675](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1675) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1679](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1679) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1683](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1683) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1687](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1687) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1691](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1691) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1695](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1695) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1699](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1699) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1703](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1703) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1707](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1707) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1711](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1711) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1715](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L1715) |
