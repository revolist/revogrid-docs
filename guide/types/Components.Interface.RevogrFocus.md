[RevoGrid Documentation v4.26.1](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:537](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L537) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:541](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L541) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:545](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L545) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L549) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L553) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:558](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L558) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:562](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L562) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:566](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L566) |
