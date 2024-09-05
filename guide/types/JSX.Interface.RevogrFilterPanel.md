[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1757](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1757) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1758](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1758) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1759](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1759) |
| `filterItems?` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:1760](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1760) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1761](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1761) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1762) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1763](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L1763) |
