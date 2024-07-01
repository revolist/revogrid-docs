[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dataStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:1805](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1805) |
| `dimensionCol?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1809](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1809) |
| `dimensionRow?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1813](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1813) |
| `onRowdragendinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<`any`\>) => `void` | Row drag ended started | [src/components.d.ts:1817](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1817) |
| `onRowdragmousemove?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`Cell`](Interface.Cell.md)\>) => `void` | Row mouse move started | [src/components.d.ts:1821](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1821) |
| `onRowdragmoveinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<[`PositionItem`](Interface.PositionItem.md)\>) => `void` | Row move started | [src/components.d.ts:1825](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1825) |
| `onRowdragstartinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `cell`: [`Cell`](Interface.Cell.md); `event`: `MouseEvent`; `pos`: [`PositionItem`](Interface.PositionItem.md); `text`: `string`; \}\>) => `void` | Row drag started | [src/components.d.ts:1829](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1829) |
| `onRowdropinit?` | (`event`: [`RevogrOrderEditorCustomEvent`](Interface.RevogrOrderEditorCustomEvent.md)\<\{ `from`: `number`; `to`: `number`; \}\>) => `void` | Row dragged, new range ready to be applied | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1838) |
| `parent?` | `HTMLElement` | Parent element | [src/components.d.ts:1845](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L1845) |
