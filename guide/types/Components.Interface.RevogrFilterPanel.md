[RevoGrid Documentation v4.14.2](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L446) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L447) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L448) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L449) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L450) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:451](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L451) |
