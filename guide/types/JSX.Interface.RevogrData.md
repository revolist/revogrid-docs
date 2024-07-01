[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1568](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1568) |
| `colData?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1572](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1572) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1576](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1576) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1580](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1580) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1584](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1584) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1588](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1588) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1592](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1592) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<`any`\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1596](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1596) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1600](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1600) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1604](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1604) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1608](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1608) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1612](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1612) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1616](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1616) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1620](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1620) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1624](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1624) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1628](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1628) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1632](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L1632) |
