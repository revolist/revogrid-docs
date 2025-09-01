[RevoGrid Documentation v4.17.0](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:733](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L733) |
| `clientSize` | `number` | Client size | [src/components.d.ts:737](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L737) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:742](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L742) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:746](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L746) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:747](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L747) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:751](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L751) |
