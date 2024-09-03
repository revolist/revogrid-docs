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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:429](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L429) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:433](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L433) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:437](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L437) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:441](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L441) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L445) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L449) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:453](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L453) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:457](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/components.d.ts#L457) |
