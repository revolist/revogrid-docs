[RevoGrid Documentation v4.15.7](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `closeOnOutsideClick` | `boolean` | If true, closes the filter panel when clicking outside | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L450) |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:454](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L454) |
| `filterCaptions` | `undefined` \| `Partial`\<[`FilterCaptions`](Interface.FilterCaptions.md)\> | - | [src/components.d.ts:455](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L455) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Interface.LogicFunction.md)\<`any`, [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md)\>\> | - | [src/components.d.ts:456](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L456) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:457](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L457) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](Interface.ShowData.md)\> | - | [src/components.d.ts:458](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L458) |
| `show` | (`newEntity`?: [`ShowData`](Interface.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:459](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/components.d.ts#L459) |
