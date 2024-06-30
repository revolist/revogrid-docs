[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2050](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L2050) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2054](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L2054) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2058](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L2058) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2062](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L2062) |
