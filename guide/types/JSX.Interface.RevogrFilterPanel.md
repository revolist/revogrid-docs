[RevoGrid Documentation v4.12.4](README.md) / [JSX](Namespace.JSX.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering?` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:1837](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1837) |
| `filterCaptions?` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:1838](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1838) |
| `filterEntities?` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:1839](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1839) |
| `filterNames?` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:1840](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1840) |
| `onFilterChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`MultiFilterItem`](TypeAlias.MultiFilterItem.md)\>) => `void` | - | [src/components.d.ts:1841](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1841) |
| `onResetChange?` | (`event`: [`RevogrFilterPanelCustomEvent`](Interface.RevogrFilterPanelCustomEvent.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `void` | - | [src/components.d.ts:1842](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/components.d.ts#L1842) |
