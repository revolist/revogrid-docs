[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2050](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L2050) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2054](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L2054) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2058](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L2058) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2062](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L2062) |
