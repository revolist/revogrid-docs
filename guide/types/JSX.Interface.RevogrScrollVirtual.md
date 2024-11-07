[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2220](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L2220) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2224](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L2224) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2228](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L2228) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2232](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L2232) |
