[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData` | `any` | Additional data to pass to renderer. |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. |
| `colData` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\> | Column data store. |
| `dataStore` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\> | Row data store. |
| `dimensionCol` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. |
| `dimensionRow` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. |
| `editors` | [`Editors`](Type.Editors.md) | Custom editors register. |
| `isMobileDevice` | `boolean` | Is mobile view mode. |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last cell position. |
| `range` | `boolean` | Range selection allowed. |
| `readonly` | `boolean` | Readonly mode. |
| `selectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection, range, focus. |
| `useClipboard` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. |
