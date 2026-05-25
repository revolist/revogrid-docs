[RevoGrid Documentation v4.22.1](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:2007](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2007) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2011) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:2015](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2015) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2019](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2019) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2023](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2023) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:2028](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2028) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:2032](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2032) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:2036](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2036) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:2040](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2040) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:2044](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2044) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:2048](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/components.d.ts#L2048) |
