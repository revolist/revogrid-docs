[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2200](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L2200) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2204](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L2204) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2208](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L2208) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2212](https://github.com/revolist/revogrid/blob/ec9aef33f9c1bf72c73d96c05d2eb8650d7cd25f/src/components.d.ts#L2212) |
