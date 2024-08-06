[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrData

# Interface: RevogrData

This component is responsible for rendering data
Rows, columns, groups and cells

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer Used in plugins such as vue or react to pass root app entity to cells | [src/components.d.ts:1582](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1582) |
| `colData?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1586](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1586) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Column data type | [src/components.d.ts:1590](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1590) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1594](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1594) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1598](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1598) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:1602](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1602) |
| `onAfterrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<\{ `type`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | When data render finished for the designated type | [src/components.d.ts:1606](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1606) |
| `onBeforecellrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeCellRenderEvent`](Interface.BeforeCellRenderEvent.md)\<`any`\>\>) => `void` | Before each cell render function. Allows to override cell properties | [src/components.d.ts:1610](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1610) |
| `onBeforerowrender?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`BeforeRowRenderEvent`](Interface.BeforeRowRenderEvent.md)\<`any`\>\>) => `void` | Before each row render | [src/components.d.ts:1614](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1614) |
| `onDragstartcell?` | (`event`: [`RevogrDataCustomEvent`](Interface.RevogrDataCustomEvent.md)\<[`DragStartEvent`](Interface.DragStartEvent.md)\>) => `void` | Event emitted on cell drag start | [src/components.d.ts:1618](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1618) |
| `range?` | `boolean` | Range allowed | [src/components.d.ts:1622](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1622) |
| `readonly?` | `boolean` | Readonly mode | [src/components.d.ts:1626](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1626) |
| `rowClass?` | `string` | Defines property from which to read row class | [src/components.d.ts:1630](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1630) |
| `rowSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for row selection | [src/components.d.ts:1634](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1634) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row data type | [src/components.d.ts:1638](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1638) |
| `viewportCol` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport X | [src/components.d.ts:1642](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1642) |
| `viewportRow` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport Y | [src/components.d.ts:1646](https://github.com/revolist/revogrid/blob/babcd934a05d11632dc60c6964673e41a780bbb7/src/components.d.ts#L1646) |
