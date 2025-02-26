[RevoGrid Documentation v4.12.8](README.md) / ColumnFilterConfig

# Interface: ColumnFilterConfig

Filter configuration for a column. This is the type of the `filter` property on a column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection?` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:79](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L79) |
| `customFilters?` | `Record`\<`string`, [`CustomFilter`](Interface.CustomFilter.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:87](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L87) |
| `disableDynamicFiltering?` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:104](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L104) |
| `filterProp?` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:91](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L91) |
| `include?` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:83](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L83) |
| `localization?` | [`FilterLocalization`](Interface.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:95](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L95) |
| `multiFilterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:99](https://github.com/revolist/revogrid/blob/c3ca1940d3bbc95c0549378ff25b8d267352be31/src/plugins/filter/filter.types.ts#L99) |
