[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1720](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1720) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1724](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1724) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1728](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1728) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1732](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1732) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1736](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1736) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1740](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1740) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1744](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1744) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1748](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1748) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1752](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1752) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1756](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1756) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1760](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L1760) |
