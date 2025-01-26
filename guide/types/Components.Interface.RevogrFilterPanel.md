[RevoGrid Documentation v4.11.17](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:441](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L441) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:442](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L442) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:443](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L443) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:444](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L444) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L445) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/components.d.ts#L446) |
