[RevoGrid Documentation v4.12.0](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L445) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L446) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L447) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L448) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L449) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/components.d.ts#L450) |
