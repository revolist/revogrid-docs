[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:618](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L618) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:622](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L622) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:626](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L626) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:627](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L627) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:631](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/components.d.ts#L631) |
