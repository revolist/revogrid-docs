[@revolist/revogrid](README.md) / ColumnFilterConfig

# Type Alias: ColumnFilterConfig

```ts
type ColumnFilterConfig: {
  collection: Record<ColumnProp, FilterCollectionItem>;
  customFilters: Record<string, CustomFilter>;
  disableDynamicFiltering: boolean;
  filterProp: string;
  include: string[];
  localization: FilterLocalization;
  multiFilterItems: MultiFilterItem;
};
```

Filter configuration for a column. This is the type of the `filter` property on a column.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:79](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L79) |
| `customFilters` | `Record`\<`string`, [`CustomFilter`](TypeAlias.CustomFilter.md)\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:87](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L87) |
| `disableDynamicFiltering` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:104](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L104) |
| `filterProp` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:91](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L91) |
| `include` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:83](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L83) |
| `localization` | [`FilterLocalization`](TypeAlias.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:95](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L95) |
| `multiFilterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:99](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L99) |

## Defined in

[src/plugins/filter/filter.types.ts:75](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/plugins/filter/filter.types.ts#L75)
