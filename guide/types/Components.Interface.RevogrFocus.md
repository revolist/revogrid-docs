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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:408](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L408) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:412](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L412) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:416](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L416) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:420](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L420) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:424](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L424) |
| `focusTemplate` | [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:428](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L428) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:432](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L432) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:436](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/components.d.ts#L436) |
