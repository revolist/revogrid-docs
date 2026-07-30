[RevoGrid Documentation v4.24.1](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside **Default** `true` | [src/components.d.ts:501](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L501) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only **Default** `false` | [src/components.d.ts:506](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L506) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:507](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L507) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | **Default** `{}` | [src/components.d.ts:511](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L511) |
| `filterNames` | `Record`\<`string`, `string`\> | **Default** `{}` | [src/components.d.ts:515](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L515) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:516](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L516) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:517](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L517) |
