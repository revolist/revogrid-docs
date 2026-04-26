[RevoGrid Documentation v4.21.5](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:522](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L522) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:526](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L526) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:530](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L530) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:534](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L534) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:538](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L538) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:543](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L543) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:547](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L547) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:551](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/components.d.ts#L551) |
