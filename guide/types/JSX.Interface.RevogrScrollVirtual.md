[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2094](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L2094) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2098](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L2098) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2102](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L2102) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2106](https://github.com/revolist/revogrid/blob/0bf9217987a0038bc73b1aec64e1a3314302e790/src/components.d.ts#L2106) |
