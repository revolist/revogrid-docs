[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:644](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/components.d.ts#L644) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:648](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/components.d.ts#L648) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:652](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/components.d.ts#L652) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:653](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/components.d.ts#L653) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:657](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/components.d.ts#L657) |
