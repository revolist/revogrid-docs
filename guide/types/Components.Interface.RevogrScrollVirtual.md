[RevoGrid Documentation v4.26.2](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:760](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L760) |
| `clientSize` | `number` | Client size | [src/components.d.ts:764](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L764) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:769](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L769) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:773](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L773) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:774](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L774) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:778](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/components.d.ts#L778) |
