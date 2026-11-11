[RevoGrid Documentation v4.31.4](README.md) / AfterFilterApplyEventProps

# Interface: AfterFilterApplyEventProps\<TModel\>

Payload emitted after the current filters and filter trims have been applied.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | First condition for each column. | [src/plugins/filter/filter.types.ts:254](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L254) |
| `filterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Complete multi-condition filter model. | [src/plugins/filter/filter.types.ts:256](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L256) |
| `itemsToFilter` | `Record`\<`number`, `boolean`\> | Physical source indexes currently trimmed by the filter. | [src/plugins/filter/filter.types.ts:262](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L262) |
| `multiFilterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Alias for `filterItems`. | [src/plugins/filter/filter.types.ts:258](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L258) |
| `source` | `TModel`[] | Source rows that were filtered. | [src/plugins/filter/filter.types.ts:260](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L260) |
