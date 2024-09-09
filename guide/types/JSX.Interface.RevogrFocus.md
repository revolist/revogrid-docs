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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1774](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1774) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1778](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1778) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1782](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1782) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1786](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1786) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1790](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1790) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1794](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1794) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1798](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1798) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1802](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1802) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1806](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1806) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1810](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1810) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1814](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1814) |
