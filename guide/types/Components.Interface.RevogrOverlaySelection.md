[RevoGrid Documentation v4.15.2](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:577](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L577) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. | [src/components.d.ts:581](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L581) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:585](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L585) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:589](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L589) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:593](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L593) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:597](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L597) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:601](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L601) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:605](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L605) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:609](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L609) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:613](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L613) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:617](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L617) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:621](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L621) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:625](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L625) |
| `useClipboard` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. | [src/components.d.ts:629](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/components.d.ts#L629) |
