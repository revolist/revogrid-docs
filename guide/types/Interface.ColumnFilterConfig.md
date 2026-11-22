[RevoGrid Documentation v4.31.8](README.md) / ColumnFilterConfig

# Interface: ColumnFilterConfig

Filter configuration for a column. This is the type of the `filter` property on a column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. Defaults to true to preserve support for repeated conditions in multi-filter expressions. | [src/plugins/filter/filter.types.ts:169](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L169) |
| `blankSemantics?` | [`BlankSemantics`](Interface.BlankSemantics.md) | Grid-level blank policy. Individual columns can override fields. | [src/plugins/filter/filter.types.ts:129](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L129) |
| `closeFilterPanelOnOutsideClick?` | `boolean` | Whether or not to close the filter panel when clicking outside | [src/plugins/filter/filter.types.ts:163](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L163) |
| `collection?` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:133](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L133) |
| `customFilters?` | `Record`\<`string`, [`CustomFilter`](Interface.CustomFilter.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:141](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L141) |
| `disableDynamicFiltering?` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:158](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L158) |
| `filterProp?` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:145](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L145) |
| `include?` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:137](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L137) |
| `localization?` | [`FilterLocalization`](Interface.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:149](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L149) |
| `multiFilterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L153) |
