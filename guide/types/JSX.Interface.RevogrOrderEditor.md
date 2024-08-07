[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1840) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1844](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1844) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1848) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1852) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1856) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1860](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1860) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1864](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1864) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1873](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1873) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1880](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L1880) |
