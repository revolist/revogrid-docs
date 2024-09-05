[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2163](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L2163) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2167](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L2167) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2171](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L2171) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2175](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L2175) |
