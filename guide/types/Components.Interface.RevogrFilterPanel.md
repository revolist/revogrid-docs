[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L402) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L403) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | [src/components.d.ts:404](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L404) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | [src/components.d.ts:405](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L405) |
| `filterNames` | `Record`\<`string`, `string`\> | [src/components.d.ts:406](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L406) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | [src/components.d.ts:407](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L407) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | [src/components.d.ts:408](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L408) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | [src/components.d.ts:409](https://github.com/revolist/revogrid/blob/3fee8276dedac5f7aa7fa43a0495db32609daeca/src/components.d.ts#L409) |
