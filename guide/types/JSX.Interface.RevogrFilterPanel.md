[RevoGrid Documentation v4.31.5](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:2054](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2054) |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:2059](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2059) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2064](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2064) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2065](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2065) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2069](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2069) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2073](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2073) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2074](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2074) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2075](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/components.d.ts#L2075) |
