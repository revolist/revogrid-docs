[RevoGrid Documentation v4.17.3](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L517) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:521](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L521) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:525](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L525) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:529](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L529) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:533](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L533) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. **Default** `null` | [src/components.d.ts:538](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L538) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:542](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L542) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:546](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/components.d.ts#L546) |
