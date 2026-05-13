[RevoGrid Documentation v4.21.8](README.md) / Providers

# Interface: Providers\<T\>

Providers for grid which are going to be injected into each cell template

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionRows`](TypeAlias.DimensionRows.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:322](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L322) |
| `columns` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<[`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`DimensionCols`](TypeAlias.DimensionCols.md)\>\> | Column data source store | [src/types/interfaces.ts:334](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L334) |
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> | Data source store | [src/types/interfaces.ts:330](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L330) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:342](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L342) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:326](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L326) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:346](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L346) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:318](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L318) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:338](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L338) |
