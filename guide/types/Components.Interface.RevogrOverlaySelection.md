[RevoGrid Documentation v4.25.1](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:652](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L652) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. **Default** `false` | [src/components.d.ts:657](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L657) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:661](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L661) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:665](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L665) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:669](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L669) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:673](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L673) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:677](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L677) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:681](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L681) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:685](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L685) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:689](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L689) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:693](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L693) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:697](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L697) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:701](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L701) |
| `useClipboard` | `boolean` \| [`ClipboardConfig`](Interface.ClipboardConfig.md) | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. Can be boolean or clipboard config. | [src/components.d.ts:705](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/components.d.ts#L705) |
