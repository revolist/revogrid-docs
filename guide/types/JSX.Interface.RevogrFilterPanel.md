[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1758](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1758) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1759](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1759) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1760](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1760) |
| `filterItems?` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:1761](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1761) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1762) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1763](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1763) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1764](https://github.com/revolist/revogrid/blob/cef5db5acf21deb63962d633ec5e3d088dfc6c5b/src/components.d.ts#L1764) |
