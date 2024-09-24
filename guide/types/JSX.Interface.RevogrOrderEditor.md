[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1901](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1901) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1905](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1905) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1909](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1909) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1913](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1913) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1917](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1917) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1921](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1921) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `model`: `any`; `pos`: [`PositionItem`](Interface.PositionItem.md); `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1925](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1925) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1936](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1936) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:1944](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1944) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1952](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1952) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:1953](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/components.d.ts#L1953) |
