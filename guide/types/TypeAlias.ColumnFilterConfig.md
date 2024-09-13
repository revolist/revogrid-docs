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
| `collection` | [`FilterCollection`](TypeAlias.FilterCollection.md) | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:68](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L68) |
| `customFilters` | `Record`\<`string`, `CustomFilter`\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:76](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L76) |
| `disableDynamicFiltering` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:93](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L93) |
| `filterProp` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:80](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L80) |
| `include` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:72](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L72) |
| `localization` | [`FilterLocalization`](TypeAlias.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:84](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L84) |
| `multiFilterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:88](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L88) |

## Defined in

[src/plugins/filter/filter.types.ts:64](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/plugins/filter/filter.types.ts#L64)
