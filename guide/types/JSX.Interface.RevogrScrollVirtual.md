[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2094](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2094) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2098](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2098) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2102](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2102) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2106](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L2106) |
