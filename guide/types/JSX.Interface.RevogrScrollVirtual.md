[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2169](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/components.d.ts#L2169) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2173](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/components.d.ts#L2173) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2177](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/components.d.ts#L2177) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2181](https://github.com/revolist/revogrid/blob/2f07f30b37da771d7d712c0b9b9b90928758921a/src/components.d.ts#L2181) |
