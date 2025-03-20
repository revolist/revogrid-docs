[RevoGrid Documentation v4.14.1](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1855](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1855) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1859](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1859) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1863](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1863) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1867](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1867) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1871](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1871) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1875](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1875) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1879](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1879) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1883](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1883) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1887](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1887) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1891](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1891) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1895](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L1895) |
