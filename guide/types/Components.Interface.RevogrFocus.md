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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:419](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L419) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:423](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L423) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:427](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L427) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:431](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L431) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:435](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L435) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L439) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:443](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L443) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/47823c55f21dbab2ee19530dcd4c960a36eea0e4/src/components.d.ts#L447) |
