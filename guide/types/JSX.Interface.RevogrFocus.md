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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1830](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1830) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1834](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1834) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1838) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1842) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1846](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1846) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1850](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1850) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1854](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1854) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1858](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1858) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1862](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1862) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1866](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1866) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1870](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/components.d.ts#L1870) |
