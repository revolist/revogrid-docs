[RevoGrid Documentation v4.24.2](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:2001](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2001) |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:2006](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2006) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2011) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2012](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2012) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2016](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2016) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2020](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2020) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2021](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2021) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2022](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L2022) |
