[RevoGrid Documentation v4.23.24](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:642](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L642) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. **Default** `false` | [src/components.d.ts:647](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L647) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:651](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L651) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:655](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L655) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L659) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:663](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L663) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:667](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L667) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L671) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:675](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L675) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:679](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L679) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:683](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L683) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:687](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L687) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:691](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L691) |
| `useClipboard` | `boolean` \| [`ClipboardConfig`](Interface.ClipboardConfig.md) | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. Can be boolean or clipboard config. | [src/components.d.ts:695](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L695) |
