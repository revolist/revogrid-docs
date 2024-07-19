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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:1690](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1690) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:1694](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1694) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:1698](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1698) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:1702](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1702) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:1706](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1706) |
| `focusTemplate?` | [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:1710](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1710) |
| `onAfterfocus?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `column`: [`ColumnRegular`](Interface.ColumnRegular.md); `model`: `any`; \}\>) => `void` | Used to setup properties after focus was rendered | [src/components.d.ts:1714](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1714) |
| `onBeforefocusrender?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<[`FocusRenderEvent`](Interface.FocusRenderEvent.md)\>) => `void` | Before focus render event. Can be prevented by event.preventDefault(). If preventDefault used slot will be rendered. | [src/components.d.ts:1721](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1721) |
| `onBeforescrollintoview?` | (`event`: [`RevogrFocusCustomEvent`](Interface.RevogrFocusCustomEvent.md)\<\{ `el`: `HTMLElement`; \}\>) => `void` | Before focus changed verify if it's in view and scroll viewport into this view Can be prevented by event.preventDefault() | [src/components.d.ts:1725](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1725) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:1729](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1729) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:1733](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1733) |
