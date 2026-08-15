[RevoGrid Documentation v4.25.2](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2011) |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:2016](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2016) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2021](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2021) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2022](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2022) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2026](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2026) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2030](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2030) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2031](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2031) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2032](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/components.d.ts#L2032) |
