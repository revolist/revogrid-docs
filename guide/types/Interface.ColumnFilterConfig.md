[RevoGrid Documentation v4.14.13](README.md) / ColumnFilterConfig

# Interface: ColumnFilterConfig

Filter configuration for a column. This is the type of the `filter` property on a column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeFilterPanelOnOutsideClick?` | `boolean` | Whether or not to close the filter panel when clicking outside | [src/plugins/filter/filter.types.ts:118](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L118) |
| `collection?` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:88](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L88) |
| `customFilters?` | `Record`\<`string`, [`CustomFilter`](Interface.CustomFilter.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:96](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L96) |
| `disableDynamicFiltering?` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:113](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L113) |
| `filterProp?` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:100](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L100) |
| `include?` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:92](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L92) |
| `localization?` | [`FilterLocalization`](Interface.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:104](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L104) |
| `multiFilterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:108](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/plugins/filter/filter.types.ts#L108) |
