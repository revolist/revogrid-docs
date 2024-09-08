[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:640](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L640) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:644](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L644) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:648](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L648) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:649](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L649) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:653](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/components.d.ts#L653) |
