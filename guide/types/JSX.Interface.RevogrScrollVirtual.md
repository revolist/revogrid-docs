[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2052](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/components.d.ts#L2052) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2056](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/components.d.ts#L2056) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2060](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/components.d.ts#L2060) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2064](https://github.com/revolist/revogrid/blob/baf80d21081b40195ffd6e11abd1249f2fd26dae/src/components.d.ts#L2064) |
