[RevoGrid Documentation v4.27.5](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L659) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. **Default** `false` | [src/components.d.ts:664](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L664) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:668](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L668) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:672](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L672) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:676](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L676) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:680](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L680) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:684](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L684) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:688](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L688) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:692](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L692) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:696](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L696) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:700](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L700) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:704](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L704) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:708](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L708) |
| `useClipboard` | `boolean` \| [`ClipboardConfig`](Interface.ClipboardConfig.md) | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. Can be boolean or clipboard config. | [src/components.d.ts:712](https://github.com/revolist/revogrid/blob/550b7866a42c233c05c64c33e7c4b433bcf70717/src/components.d.ts#L712) |
