[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2165](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/components.d.ts#L2165) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2169](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/components.d.ts#L2169) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2173](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/components.d.ts#L2173) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2177](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/components.d.ts#L2177) |
