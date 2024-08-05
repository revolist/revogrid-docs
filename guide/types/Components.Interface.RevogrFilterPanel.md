[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | [src/components.d.ts:394](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L394) |
| `filterCaptions` | [`FilterCaptions`](TypeAlias.FilterCaptions.md) | [src/components.d.ts:395](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L395) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | [src/components.d.ts:396](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L396) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | [src/components.d.ts:397](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L397) |
| `filterNames` | `Record`\<`string`, `string`\> | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L398) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | [src/components.d.ts:399](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L399) |
| `getChanges` | () => `Promise`\<[`ShowData`](TypeAlias.ShowData.md)\> | [src/components.d.ts:400](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L400) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/424884a9332ccde4a5d40c39536fe61d1ccacbfc/src/components.d.ts#L401) |
