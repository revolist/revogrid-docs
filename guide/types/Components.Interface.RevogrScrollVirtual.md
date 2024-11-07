[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:662](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L662) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:666](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L666) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:670](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L670) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L671) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:675](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L675) |
