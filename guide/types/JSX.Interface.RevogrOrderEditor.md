[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1808](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1808) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1812](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1812) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1816](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1816) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1820](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1820) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1824](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1824) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1828](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1828) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1832](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1832) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1841) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/bdb9e42430f63c1d6612c6ca28338cbed0c26a6c/src/components.d.ts#L1848) |
