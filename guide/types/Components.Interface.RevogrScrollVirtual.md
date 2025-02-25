[RevoGrid Documentation v4.12.6](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/components.d.ts#L671) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:675](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/components.d.ts#L675) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:679](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/components.d.ts#L679) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:680](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/components.d.ts#L680) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:684](https://github.com/revolist/revogrid/blob/293c9e1b6198b802a0690dc2e0b9faebd722e77f/src/components.d.ts#L684) |
