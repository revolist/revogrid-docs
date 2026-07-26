[RevoGrid Documentation v4.23.24](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:1996](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L1996) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:2001](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2001) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:2002](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2002) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:2006](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2006) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:2010](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2010) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2011) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:2012](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/components.d.ts#L2012) |
