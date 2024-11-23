[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2205](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2205) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2209](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2209) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2213](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2213) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2217](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L2217) |
