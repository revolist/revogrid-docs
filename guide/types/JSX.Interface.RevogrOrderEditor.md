[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1897](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1897) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1901](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1901) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1905](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1905) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row drag ended started | [src/components.d.ts:1909](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1909) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row mouse move started | [src/components.d.ts:1913](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1913) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md) & \{ `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); \}\>) => `void` | Row move started | [src/components.d.ts:1917](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1917) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `model`: `any`; `pos`: [`PositionItem`](Interface.PositionItem.md); `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1921](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1921) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1932](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1932) |
| `onRoworderchange?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `rowType`: [`DimensionRows`](TypeAlias.DimensionRows.md); `to`: `number`; \}\>) => `void` | Row drag ended finished. Time to apply data | [src/components.d.ts:1940](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1940) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1948](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1948) |
| `rowType?` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:1949](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1949) |
