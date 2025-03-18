[RevoGrid Documentation v4.13.5](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1840) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1841) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1842) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1843](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1843) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1844](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1844) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1845](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L1845) |
