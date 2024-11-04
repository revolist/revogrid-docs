[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1682](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1682) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1686](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1686) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1690](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1690) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1694](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1694) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1698](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1698) |
| `jobsBeforeRender?` | (`Promise`\<`any`\> \| () => `Promise`\<`any`\>)[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1702](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1702) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1706](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1706) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<[`CellTemplateProp`](Interface.CellTemplateProp.md)\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1710](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1710) |
| `onBeforedatarender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`AllDimensionType`](Interface.AllDimensionType.md)\>) => `void` | Before data render | [src/components.d.ts:1714](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1714) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1718](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1718) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1722](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1722) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1726](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1726) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1730](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1730) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1734](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1734) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1738](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1738) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1742](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1742) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1746](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1746) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1750](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1750) |
