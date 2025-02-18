[RevoGrid Documentation v4.12.4](README.md) / [Components](Namespace.Components.md) / RevogrOverlaySelection

# Interface: RevogrOverlaySelection

Component for overlaying the grid with the selection.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer. | [src/components.d.ts:572](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L572) |
| `applyChangesOnClose` | `boolean` | If true applys changes when cell closes if not Escape. | [src/components.d.ts:576](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L576) |
| `canDrag` | `boolean` | Enable revogr-order-editor component (read more in revogr-order-editor component). Allows D&D. | [src/components.d.ts:580](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L580) |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data store. | [src/components.d.ts:584](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L584) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Row data store. | [src/components.d.ts:588](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L588) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X. | [src/components.d.ts:592](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L592) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y. | [src/components.d.ts:596](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L596) |
| `editors` | [`Editors`](TypeAlias.Editors.md) | Custom editors register. | [src/components.d.ts:600](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L600) |
| `isMobileDevice` | `boolean` | Is mobile view mode. | [src/components.d.ts:604](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L604) |
| `lastCell` | [`Cell`](Interface.Cell.md) | Last real coordinates positions + 1. | [src/components.d.ts:608](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L608) |
| `range` | `boolean` | Range selection allowed. | [src/components.d.ts:612](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L612) |
| `readonly` | `boolean` | Readonly mode. | [src/components.d.ts:616](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L616) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus. | [src/components.d.ts:620](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L620) |
| `useClipboard` | `boolean` | Enable revogr-clipboard component (read more in revogr-clipboard component). Allows copy/paste. | [src/components.d.ts:624](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L624) |
