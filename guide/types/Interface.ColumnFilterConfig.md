[RevoGrid Documentation v4.26.1](README.md) / ColumnFilterConfig

# Interface: ColumnFilterConfig

Filter configuration for a column. This is the type of the `filter` property on a column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. Defaults to true to preserve support for repeated conditions in multi-filter expressions. | [src/plugins/filter/filter.types.ts:167](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L167) |
| `blankSemantics?` | [`BlankSemantics`](Interface.BlankSemantics.md) | Grid-level blank policy. Individual columns can override fields. | [src/plugins/filter/filter.types.ts:127](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L127) |
| `closeFilterPanelOnOutsideClick?` | `boolean` | Whether or not to close the filter panel when clicking outside | [src/plugins/filter/filter.types.ts:161](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L161) |
| `collection?` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | The collection of filters to be applied to the column. | [src/plugins/filter/filter.types.ts:131](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L131) |
| `customFilters?` | `Record`\<`string`, [`CustomFilter`](Interface.CustomFilter.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | A mapping of custom filter names to custom filter functions. | [src/plugins/filter/filter.types.ts:139](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L139) |
| `defaultFilter?` | `boolean` | Whether empty filter panels start with a draft condition. Defaults to true. | [src/plugins/filter/filter.types.ts:131](https://github.com/revolist/revogrid/blob/master/src/plugins/filter/filter.types.ts#L131) |
| `disableDynamicFiltering?` | `boolean` | Whether or not to disable dynamic filtering. If set to true, the filter will only be applied when the user clicks on the filter button. | [src/plugins/filter/filter.types.ts:156](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L156) |
| `filterProp?` | `string` | The property on the column idintifying which has the filter is applied. | [src/plugins/filter/filter.types.ts:143](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L143) |
| `include?` | `string`[] | The names of the filters to be included in the filter dropdown. | [src/plugins/filter/filter.types.ts:135](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L135) |
| `localization?` | [`FilterLocalization`](Interface.FilterLocalization.md) | The localization for the filter dropdown. | [src/plugins/filter/filter.types.ts:147](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L147) |
| `multiFilterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Information about the multi-filter items. | [src/plugins/filter/filter.types.ts:151](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/filter/filter.types.ts#L151) |
