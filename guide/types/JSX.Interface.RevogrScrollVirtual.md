[RevoGrid Documentation v4.20.5](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2377](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L2377) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2382](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L2382) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2386](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L2386) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:2390](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L2390) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2394](https://github.com/revolist/revogrid/blob/8120d9893575f89cd4dfd00f326239b7bf524871/src/components.d.ts#L2394) |
