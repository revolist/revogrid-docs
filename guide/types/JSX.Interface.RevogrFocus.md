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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1726](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1726) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1730](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1730) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1734](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1734) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1738](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1738) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1742](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1742) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1746](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1746) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1750](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1750) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1754](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1754) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1758](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1758) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1762) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1766](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L1766) |
