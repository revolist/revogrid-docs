[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1844](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1844) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1848) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1852) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1856) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1860](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1860) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1864](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1864) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1868](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1868) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1877](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1877) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1884](https://github.com/revolist/revogrid/blob/e4a447d6483665fe275065ba5ef60722f4635503/src/components.d.ts#L1884) |
