[RevoGrid Documentation v4.14.14](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L446) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L450) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:451](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L451) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:452](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L452) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:453](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L453) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:454](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L454) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:455](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/components.d.ts#L455) |
