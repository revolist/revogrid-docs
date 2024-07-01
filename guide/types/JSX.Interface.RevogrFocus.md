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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1687](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1687) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1691](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1691) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1695](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1695) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1699](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1699) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1703](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1703) |
| `focusTemplate?` | [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1707](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1707) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `column`: [`ColumnRegular`](Interface.ColumnRegular.md); `model`: `any`; \}\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1711](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1711) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1718](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1718) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1722](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1722) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1726](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1726) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1730](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L1730) |
