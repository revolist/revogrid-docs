[RevoGrid Documentation v4.29.1](README.md) / BeforeFilterTrimmedEventProps

# Interface: BeforeFilterTrimmedEventProps\<TModel\>

Payload emitted before filter trim indexes are applied to the data source.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | First condition for each column. | [src/plugins/filter/filter.types.ts:240](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/plugins/filter/filter.types.ts#L240) |
| `filterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Complete multi-condition filter model. | [src/plugins/filter/filter.types.ts:242](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/plugins/filter/filter.types.ts#L242) |
| `itemsToFilter` | `Record`\<`number`, `boolean`\> | Physical source indexes to trim. | [src/plugins/filter/filter.types.ts:246](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/plugins/filter/filter.types.ts#L246) |
| `source` | `TModel`[] | Source rows being filtered. | [src/plugins/filter/filter.types.ts:244](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/plugins/filter/filter.types.ts#L244) |
