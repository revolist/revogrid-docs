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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:456](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L456) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:460](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L460) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:464](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L464) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:468](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L468) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:472](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L472) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:476](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L476) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:480](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L480) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:484](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/components.d.ts#L484) |
