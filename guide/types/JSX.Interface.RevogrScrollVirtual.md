[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2092](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2092) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2096](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2096) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2100](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2100) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2104](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L2104) |
