[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type |
| :------ | :------ |
| `disableDynamicFiltering` | `boolean` |
| `filterCaptions` | [`FilterCaptions`](Type.FilterCaptions.md) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](Type.LogicFunction.md)\> |
| `filterItems` | [`MultiFilterItem`](Type.MultiFilterItem.md) |
| `filterNames` | `Record`\<`string`, `string`\> |
| `filterTypes` | `Record`\<`string`, `string`[]\> |
| `getChanges` | () => `Promise`\<[`ShowData`](Type.ShowData.md)\> |
| `show` | (`newEntity`?: [`ShowData`](Type.ShowData.md)) => `Promise`\<`void`\> |
| `uuid` | `string` |
