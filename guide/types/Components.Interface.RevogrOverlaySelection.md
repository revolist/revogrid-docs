[RevoGrid Documentation v4.23.12](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:637](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L637) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. **Default** `false` | [src/components.d.ts:642](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L642) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:646](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L646) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:650](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L650) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:654](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L654) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:658](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L658) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:662](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L662) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:666](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L666) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:670](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L670) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:674](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L674) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:678](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L678) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:682](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L682) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:686](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L686) |
| `useClipboard` | `boolean` \| [`ClipboardConfig`](Interface.ClipboardConfig.md) | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. Can be boolean or clipboard config. | [src/components.d.ts:690](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components.d.ts#L690) |
