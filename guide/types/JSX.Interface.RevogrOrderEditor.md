[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1952](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1952) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1956](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1956) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1960](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1960) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1964](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1964) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1968](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1968) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1972](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1972) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `model`: `any`; `pos`: [`PositionItem`](Interface.PositionItem.md); `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1976](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1976) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1987](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1987) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:1995](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L1995) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:2003](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L2003) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:2004](https://github.com/revolist/revogrid/blob/541ed3c2070ab701e47c29bb6172b17d19a08816/src/components.d.ts#L2004) |
