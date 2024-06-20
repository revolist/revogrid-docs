[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change |
| `dimension` | [`DimensionType`](Type.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) |
| `dimensionStore` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - |
| `viewportStore` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport |
