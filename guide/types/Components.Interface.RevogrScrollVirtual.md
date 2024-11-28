[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:668](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L668) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:672](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L672) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:676](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L676) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:677](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L677) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:681](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/components.d.ts#L681) |
