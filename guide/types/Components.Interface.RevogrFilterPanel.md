[RevoGrid Documentation v4.23.17](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:496](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L496) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:501](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L501) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:502](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L502) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:506](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L506) |
| `filterNames` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:510](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L510) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:511](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L511) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:512](https://github.com/revolist/revogrid/blob/ea7fa0ee5cb2e50b935ef85ece5e63e426a24536/src/components.d.ts#L512) |
