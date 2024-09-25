[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:417](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L417) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:418](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L418) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:419](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L419) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:420](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L420) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:421](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L421) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:422](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L422) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:423](https://github.com/revolist/revogrid/blob/b38c1177864e6fa9f2bec506ea55d1b2f7e35679/src/components.d.ts#L423) |
