[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2057](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/components.d.ts#L2057) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2061](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/components.d.ts#L2061) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2065](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/components.d.ts#L2065) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2069](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/components.d.ts#L2069) |
