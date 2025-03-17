[RevoGrid Documentation v4.13.4](README.md) / [Components](Namespace.Components.md) / RevogrFocus

# Interface: RevogrFocus

Focus component. Shows focus layer around the cell that is currently in focus.

## Example

```ts
focus-rgCol-rgRow
```

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colData` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column source | [src/components.d.ts:462](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L462) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type | [src/components.d.ts:466](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L466) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Data rows source | [src/components.d.ts:470](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L470) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:474](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L474) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:478](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L478) |
| `focusTemplate` | `null` \| [`FocusTemplateFunc`](TypeAlias.FocusTemplateFunc.md) | Focus template custom function. Can be used to render custom focus layer. | [src/components.d.ts:482](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L482) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type | [src/components.d.ts:486](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L486) |
| `selectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection, range, focus for selection | [src/components.d.ts:490](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L490) |
