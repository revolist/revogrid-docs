[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | [src/components.d.ts:400](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L400) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L401) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L402) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L403) |
| `filterNames` | `Record`\<`string`, `string`\> | [src/components.d.ts:404](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L404) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | [src/components.d.ts:405](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L405) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | [src/components.d.ts:406](https://github.com/revolist/revogrid/blob/d69bb90753f30d16a898150d08ff61a1e2f66a39/src/components.d.ts#L406) |
