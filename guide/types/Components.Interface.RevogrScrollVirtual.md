[RevoGrid Documentation v4.21.6](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:738](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L738) |
| `clientSize` | `number` | Client size | [src/components.d.ts:742](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L742) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:747](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L747) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:751](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L751) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:752](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L752) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:756](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/components.d.ts#L756) |
