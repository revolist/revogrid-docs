[RevoGrid Documentation v4.15.5](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1994](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L1994) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1998](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L1998) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2002](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2002) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:2006](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2006) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:2010](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2010) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:2014](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2014) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:2018](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2018) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:2022](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2022) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2030](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2030) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2038](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2038) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2039](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/components.d.ts#L2039) |
