[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:640](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L640) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:644](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L644) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:648](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L648) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:649](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L649) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:653](https://github.com/revolist/revogrid/blob/a348821be3a2642110f5dc893d4bd9cba16c5101/src/components.d.ts#L653) |
