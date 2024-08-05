[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:522](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L522) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. | [src/components.d.ts:526](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L526) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:530](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L530) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:534](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L534) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:538](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L538) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:542](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L542) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:546](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L546) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:550](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L550) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:554](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L554) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:558](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L558) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:562](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L562) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:566](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L566) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:570](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L570) |
| `useClipboard` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. | [src/components.d.ts:574](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L574) |
