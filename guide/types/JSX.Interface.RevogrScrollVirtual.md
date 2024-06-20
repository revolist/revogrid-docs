[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `dimension?` | [`DimensionType`](Type.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) |
| `dimensionStore` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>) => `void` | Scroll event |
| `viewportStore` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport |
