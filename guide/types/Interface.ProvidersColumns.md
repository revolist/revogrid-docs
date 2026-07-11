[RevoGrid Documentation v4.23.21](README.md) / ProvidersColumns

# Interface: ProvidersColumns\<T\>

Providers for columns which are going to be injected into each header renderer

## Extends

- `Omit`\<[`Providers`](Interface.Providers.md)\<`T`\>, `"data"` \| `"columns"` \| `"colType"`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `data` | [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>[] | Column data source store | - | [src/types/interfaces.ts:308](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L308) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | `Omit.dimension` | [src/types/interfaces.ts:342](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L342) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | `Omit.readonly` | [src/types/interfaces.ts:326](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L326) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | `Omit.selection` | [src/types/interfaces.ts:346](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L346) |
| `type` | `T` | Dimension type (e.g. row or column) | `Omit.type` | [src/types/interfaces.ts:318](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L318) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | `Omit.viewport` | [src/types/interfaces.ts:338](https://github.com/revolist/revogrid/blob/84a6ba8ad24305e446533202f2fe61b513edd353/src/types/interfaces.ts#L338) |
