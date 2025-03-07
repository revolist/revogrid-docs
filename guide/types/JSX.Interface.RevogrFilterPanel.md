[RevoGrid Documentation v4.13.1](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1837](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1837) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1838) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:1839](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1839) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1840) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1841) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/4ebc7221c475d12b7f731e54908af9eefb855c73/src/components.d.ts#L1842) |
