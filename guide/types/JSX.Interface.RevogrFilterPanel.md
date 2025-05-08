[RevoGrid Documentation v4.15.7](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1852) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1856) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1857](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1857) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:1858](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1858) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1859](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1859) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1860](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1860) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1861](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L1861) |
