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
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:416](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L416) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:420](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L420) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:424](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L424) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:428](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L428) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:432](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L432) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:436](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L436) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:440](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L440) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:444](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/components.d.ts#L444) |
