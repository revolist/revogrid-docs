[RevoGrid Documentation v4.13.2](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L445) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L446) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L447) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L448) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L449) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/components.d.ts#L450) |
