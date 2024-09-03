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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1768](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1768) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1772](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1772) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1776](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1776) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1780](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1780) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1784](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1784) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1788](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1788) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1792](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1792) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1796](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1796) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1800](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1800) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1804](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1804) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1808](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L1808) |
