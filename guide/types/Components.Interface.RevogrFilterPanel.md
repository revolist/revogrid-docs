[RevoGrid Documentation v4.12.1](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L445) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L446) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L447) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L448) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L449) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L450) |
