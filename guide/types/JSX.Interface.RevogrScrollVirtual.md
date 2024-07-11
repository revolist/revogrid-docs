[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2052](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/components.d.ts#L2052) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2056](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/components.d.ts#L2056) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2060](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/components.d.ts#L2060) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2064](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/components.d.ts#L2064) |
