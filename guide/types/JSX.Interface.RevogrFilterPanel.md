[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1815](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1815) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1816](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1816) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1817](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1817) |
| `filterItems?` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:1818](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1818) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1819](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1819) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1820](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1820) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1821](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L1821) |
