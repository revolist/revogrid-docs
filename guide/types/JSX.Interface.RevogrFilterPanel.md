[RevoGrid Documentation v4.31.4](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators?` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:2027](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2027) |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:2032](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2032) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2037](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2037) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2038](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2038) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2042](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2042) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2046](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2046) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2047](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2047) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2048](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L2048) |
