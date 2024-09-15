[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:541](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L541) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. | [src/components.d.ts:545](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L545) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L549) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L553) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L557) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:561](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L561) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:565](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L565) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:569](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L569) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:573](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L573) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:577](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L577) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:581](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L581) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:585](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L585) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:589](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L589) |
| `useClipboard` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. | [src/components.d.ts:593](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/components.d.ts#L593) |
