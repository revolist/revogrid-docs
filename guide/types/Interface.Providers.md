[RevoGrid Documentation v4.14.13](README.md) / Providers

# Interface: Providers\<T\>

Providers for grid which are going to be injected into each cell template

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionRows`](TypeAlias.DimensionRows.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:304](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L304) |
| `columns` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md), [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data source store | [src/types/interfaces.ts:316](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L316) |
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> | Data source store | [src/types/interfaces.ts:312](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L312) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:324](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L324) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:308](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L308) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:328](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L328) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:300](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L300) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:320](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L320) |
