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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:414](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L414) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:418](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L418) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:422](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L422) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:426](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L426) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:430](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L430) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:434](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L434) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:438](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L438) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:442](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/components.d.ts#L442) |
