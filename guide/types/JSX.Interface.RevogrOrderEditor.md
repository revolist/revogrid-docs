[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1883](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1883) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1887](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1887) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1891](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1891) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1895](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1895) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1899](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1899) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1903](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1903) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1907](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1907) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1916](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1916) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1923](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1923) |
