[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrFilterPanel

# Interface: RevogrFilterPanel

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `disableDynamicFiltering` | `boolean` | Disables dynamic filtering. A way to apply filters on Save only | [src/components.d.ts:442](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L442) |
| `filterCaptions` | `undefined` \| [`FilterCaptions`](TypeAlias.FilterCaptions.md) | - | [src/components.d.ts:443](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L443) |
| `filterEntities` | `Record`\<`string`, [`LogicFunction`](TypeAlias.LogicFunction.md)\> | - | [src/components.d.ts:444](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L444) |
| `filterNames` | `Record`\<`string`, `string`\> | - | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L445) |
| `getChanges` | () => `Promise`\<`undefined` \| [`ShowData`](TypeAlias.ShowData.md)\> | - | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L446) |
| `show` | (`newEntity`?: [`ShowData`](TypeAlias.ShowData.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/c3fbdc69076950cb371c4e48faf1a5d5a21237f4/src/components.d.ts#L447) |
