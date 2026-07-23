[RevoGrid Documentation v4.23.22](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:2152](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2152) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2156](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2156) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2160](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2160) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:2164](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2164) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:2168](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2168) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:2172](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2172) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`RowDragStartDetails`](TypeAlias.RowDragStartDetails.md)\>) => `void` | Row drag started | [src/components.d.ts:2176](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2176) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:2180](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2180) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:2188](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2188) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2196](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2196) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2197](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/components.d.ts#L2197) |
