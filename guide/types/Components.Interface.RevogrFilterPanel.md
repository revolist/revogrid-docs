[RevoGrid Documentation v4.27.7](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allowDuplicateOperators` | `boolean` | Whether the filter panel allows the same operator more than once per column. **Default** `true` | [src/components.d.ts:513](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L513) |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:518](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L518) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:523](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L523) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:524](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L524) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:528](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L528) |
| `filterNames` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:532](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L532) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:533](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L533) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:534](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L534) |
