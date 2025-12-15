[RevoGrid Documentation v4.20.0](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1978](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1978) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1982](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1982) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1986](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1986) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1990](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1990) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1994](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1994) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:1999](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L1999) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:2003](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L2003) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:2007](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L2007) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L2011) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:2015](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L2015) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:2019](https://github.com/revolist/revogrid/blob/7faf5f2ab39719d64ef2a8ff607d5deafda02379/src/components.d.ts#L2019) |
