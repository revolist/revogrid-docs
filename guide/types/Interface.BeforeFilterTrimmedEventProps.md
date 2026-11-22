[RevoGrid Documentation v4.31.8](README.md) / BeforeFilterTrimmedEventProps

# Interface: BeforeFilterTrimmedEventProps\<TModel\>

Payload emitted before filter trim indexes are applied to the data source.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | First condition for each column. | [src/plugins/filter/filter.types.ts:242](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L242) |
| `filterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Complete multi-condition filter model. | [src/plugins/filter/filter.types.ts:244](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L244) |
| `itemsToFilter` | `Record`\<`number`, `boolean`\> | Physical source indexes to trim. | [src/plugins/filter/filter.types.ts:248](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L248) |
| `source` | `TModel`[] | Source rows being filtered. | [src/plugins/filter/filter.types.ts:246](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L246) |
