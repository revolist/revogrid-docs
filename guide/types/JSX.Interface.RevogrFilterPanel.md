[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1821](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1821) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1822](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1822) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1823](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1823) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1824](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1824) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1825](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1825) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1826](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/components.d.ts#L1826) |
