[RevoGrid Documentation v4.24.2](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:532](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L532) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:536](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L536) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:540](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L540) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:544](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L544) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:548](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L548) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L553) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L557) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:561](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L561) |
