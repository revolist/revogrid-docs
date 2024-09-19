[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1762) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1763](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1763) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1764](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1764) |
| `filterItems?` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:1765](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1765) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1766](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1766) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1767](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1767) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1768](https://github.com/revolist/revogrid/blob/834ef2bcc7d11d36bb9e66716a7f07087a633494/src/components.d.ts#L1768) |
