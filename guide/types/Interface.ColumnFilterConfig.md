[RevoGrid Documentation v4.23.17](README.md) / ColumnFilterConfig

# Interface: ColumnFilterConfig

Filter configuration for a column. This is the type of the `filter` property on a column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeFilterPanelOnOutsideClick?` | `boolean` | Whether or not to close the filter panel when clicking outside | [src/plugins/filter/filter.types.ts:121](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L121) |
| `collection?` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:91](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L91) |
| `customFilters?` | `Record`\<`string`, [`CustomFilter`](Interface.CustomFilter.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:99](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L99) |
| `disableDynamicFiltering?` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:116](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L116) |
| `filterProp?` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:103](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L103) |
| `include?` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:95](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L95) |
| `localization?` | [`FilterLocalization`](Interface.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:107](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L107) |
| `multiFilterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:111](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/plugins/filter/filter.types.ts#L111) |
