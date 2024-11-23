[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1806](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1806) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1807](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1807) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1808](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1808) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1809](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1809) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1810](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1810) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1811](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1811) |
