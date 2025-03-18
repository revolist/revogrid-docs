[RevoGrid Documentation v4.13.5](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L447) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L448) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L449) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L450) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:451](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L451) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:452](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/components.d.ts#L452) |
