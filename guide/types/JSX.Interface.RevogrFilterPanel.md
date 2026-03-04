[RevoGrid Documentation v4.20.5](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:1954](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1954) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:1959](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1959) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1960](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1960) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:1964](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1964) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:1968](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1968) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1969](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1969) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1970](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L1970) |
