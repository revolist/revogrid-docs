[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2140](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2140) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2144](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2144) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2148](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2148) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2152](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/components.d.ts#L2152) |
