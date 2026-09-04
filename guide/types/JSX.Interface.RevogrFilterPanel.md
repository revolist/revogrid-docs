[RevoGrid Documentation v4.27.6](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:2023](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2023) |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:2028](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2028) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2033](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2033) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2034](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2034) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2038](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2038) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2042](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2042) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2043](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2043) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2044](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/components.d.ts#L2044) |
