[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:413](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L413) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:414](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L414) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:415](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L415) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:416](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L416) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:417](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L417) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:418](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L418) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:419](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L419) |
