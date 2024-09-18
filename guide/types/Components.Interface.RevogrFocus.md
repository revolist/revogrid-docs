[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:433](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L433) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:437](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L437) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:441](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L441) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L445) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L449) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:453](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L453) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:457](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L457) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:461](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/components.d.ts#L461) |
