[RevoGrid Documentation v4.15.1](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:465](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L465) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:469](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L469) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:473](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L473) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:477](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L477) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:481](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L481) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:485](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L485) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:489](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L489) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:493](https://github.com/revolist/revogrid/blob/9d06c9d1de184a8cd977144efe5186ec5a7312cb/src/components.d.ts#L493) |
