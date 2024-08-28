[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L398) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | [src/components.d.ts:399](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L399) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | [src/components.d.ts:400](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L400) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L401) |
| `filterNames` | `Record`\<`string`, `string`\> | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L402) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L403) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | [src/components.d.ts:404](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L404) |
