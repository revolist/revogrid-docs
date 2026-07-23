[RevoGrid Documentation v4.23.23](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:527](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L527) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:531](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L531) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:535](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L535) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:539](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L539) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:543](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L543) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:548](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L548) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:552](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L552) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:556](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L556) |
