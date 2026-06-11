[RevoGrid Documentation v4.23.15](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2404](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/components.d.ts#L2404) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2409](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/components.d.ts#L2409) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2413](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/components.d.ts#L2413) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:2417](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/components.d.ts#L2417) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2421](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/components.d.ts#L2421) |
