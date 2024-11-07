[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1814](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1814) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1815](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1815) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1816](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1816) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1817](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1817) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1818](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1818) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1819](https://github.com/revolist/revogrid/blob/825821baadfa2debcf4d39f08d4e13cf00eca4b8/src/components.d.ts#L1819) |
