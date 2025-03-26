[RevoGrid Documentation v4.14.9](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick?` | `boolean` | If true, closes the filter panel when clicking outside | [src/components.d.ts:1848](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1848) |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1852](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1852) |
| `filterCaptions?` | `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:1853](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1853) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:1854](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1854) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1855](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1855) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](Interface.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1856](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1856) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1857](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/components.d.ts#L1857) |
