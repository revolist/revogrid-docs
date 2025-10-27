[RevoGrid Documentation v4.19.2](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:1952](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1952) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:1957](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1957) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1958](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1958) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:1962](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1962) |
| `filterNames?` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:1966](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1966) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1967](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1967) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1968](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L1968) |
