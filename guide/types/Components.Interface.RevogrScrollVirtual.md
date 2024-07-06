[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:620](https://github.com/revolist/revogrid/blob/479ecce95b25b0761395add7477e34a6fe066174/src/components.d.ts#L620) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:624](https://github.com/revolist/revogrid/blob/479ecce95b25b0761395add7477e34a6fe066174/src/components.d.ts#L624) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:628](https://github.com/revolist/revogrid/blob/479ecce95b25b0761395add7477e34a6fe066174/src/components.d.ts#L628) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:629](https://github.com/revolist/revogrid/blob/479ecce95b25b0761395add7477e34a6fe066174/src/components.d.ts#L629) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:633](https://github.com/revolist/revogrid/blob/479ecce95b25b0761395add7477e34a6fe066174/src/components.d.ts#L633) |
