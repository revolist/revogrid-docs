[RevoGrid Documentation v4.15.5](README.md) / ProvidersColumns

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
| `data` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Column data source store | - | [src/types/interfaces.ts:291](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L291) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | `Omit.dimension` | [src/types/interfaces.ts:325](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L325) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | `Omit.readonly` | [src/types/interfaces.ts:309](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L309) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | `Omit.selection` | [src/types/interfaces.ts:329](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L329) |
| `type` | `T` | Dimension type (e.g. row or column) | `Omit.type` | [src/types/interfaces.ts:301](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L301) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | `Omit.viewport` | [src/types/interfaces.ts:321](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/interfaces.ts#L321) |
