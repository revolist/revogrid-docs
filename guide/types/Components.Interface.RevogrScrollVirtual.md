[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:626](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L626) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:630](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L630) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:634](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L634) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:635](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L635) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:639](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components.d.ts#L639) |
