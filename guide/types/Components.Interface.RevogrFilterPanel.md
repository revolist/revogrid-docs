[RevoGrid Documentation v4.31.6](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L517) |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:522](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L522) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:527](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L527) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:528](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L528) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:532](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L532) |
| `filterNames` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:536](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L536) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:537](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L537) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:538](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L538) |
