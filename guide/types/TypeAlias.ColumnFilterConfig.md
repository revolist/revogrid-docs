[@revolist/revogrid](README.md) / ColumnFilterConfig

# Type Alias: ColumnFilterConfig

```ts
type ColumnFilterConfig: {
  collection: FilterCollection;
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
| `collection` | [`FilterCollection`](TypeAlias.FilterCollection.md) | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:67](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L67) |
| `customFilters` | `Record`\<`string`, `CustomFilter`\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:75](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L75) |
| `disableDynamicFiltering` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:92](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L92) |
| `filterProp` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:79](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L79) |
| `include` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:71](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L71) |
| `localization` | `FilterLocalization` | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:83](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L83) |
| `multiFilterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:87](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L87) |

## Defined in

[src/plugins/filter/filter.types.ts:63](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/plugins/filter/filter.types.ts#L63)
