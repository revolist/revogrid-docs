[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1807](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1807) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1811](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1811) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1815](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1815) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1819](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1819) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1823](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1823) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1827](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1827) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1831](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1831) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1840) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1847](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/components.d.ts#L1847) |
