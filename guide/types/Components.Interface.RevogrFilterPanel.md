[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:436](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L436) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:437](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L437) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:438](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L438) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L439) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:440](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L440) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:441](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L441) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:442](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L442) |
