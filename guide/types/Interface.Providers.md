[RevoGrid Documentation v4.15.7](README.md) / Providers

# Interface: Providers\<T\>

Providers for grid which are going to be injected into each cell template

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionRows`](TypeAlias.DimensionRows.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:305](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L305) |
| `columns` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data source store | [src/types/interfaces.ts:317](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L317) |
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> | Data source store | [src/types/interfaces.ts:313](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L313) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:325](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L325) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:309](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L309) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:329](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L329) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:301](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L301) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:321](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L321) |
