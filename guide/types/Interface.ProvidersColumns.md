[RevoGrid Documentation v4.14.13](README.md) / ProvidersColumns

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
| `data` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Column data source store | - | [src/types/interfaces.ts:290](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L290) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | `Omit.dimension` | [src/types/interfaces.ts:324](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L324) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | `Omit.readonly` | [src/types/interfaces.ts:308](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L308) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | `Omit.selection` | [src/types/interfaces.ts:328](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L328) |
| `type` | `T` | Dimension type (e.g. row or column) | `Omit.type` | [src/types/interfaces.ts:300](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L300) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | `Omit.viewport` | [src/types/interfaces.ts:320](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L320) |
