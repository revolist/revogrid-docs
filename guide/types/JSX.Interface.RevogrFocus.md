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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1723](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1723) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1727](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1727) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1731](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1731) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1735](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1735) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1739](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1739) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1743](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1743) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1747](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1747) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1751](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1751) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1755](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1755) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1759](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1759) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1763](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L1763) |
