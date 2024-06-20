[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `colData` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](Type.DimensionCols.md)\>\> | Column source |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) | Column type |
| `dataStore` | [`Observable`](Type.Observable.md)\<[`DSourceState`](Type.DSourceState.md)\<[`DataType`](Type.DataType.md), [`DimensionRows`](Type.DimensionRows.md)\>\> | Data rows source |
| `dimensionCol` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X |
| `dimensionRow` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y |
| `focusTemplate` | [`FocusTemplateFunc`](Type.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. |
| `rowType` | [`DimensionRows`](Type.DimensionRows.md) | Row type |
| `selectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection, range, focus for selection |
