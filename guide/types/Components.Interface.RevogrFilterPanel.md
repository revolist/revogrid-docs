[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | [src/components.d.ts:397](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L397) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L398) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | [src/components.d.ts:399](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L399) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | [src/components.d.ts:400](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L400) |
| `filterNames` | `Record`\<`string`, `string`\> | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L401) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L402) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L403) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | [src/components.d.ts:404](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L404) |
