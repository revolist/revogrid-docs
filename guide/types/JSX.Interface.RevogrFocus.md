[RevoGrid Documentation v4.23.21](README.md) / [JSX](Namespace.JSX.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:2022](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2022) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:2026](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2026) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:2030](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2030) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:2034](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2034) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:2038](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2038) |
| `focusTemplate?` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:2043](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2043) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusAfterRenderEvent`](Interface.FocusAfterRenderEvent.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:2047](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2047) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:2051](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2051) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:2055](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2055) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:2059](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2059) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:2063](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/components.d.ts#L2063) |
