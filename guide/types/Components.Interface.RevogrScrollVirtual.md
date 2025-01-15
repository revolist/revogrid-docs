[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:667](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L667) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L671) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:675](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L675) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:676](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L676) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:680](https://github.com/revolist/revogrid/blob/6916c62aedeba77f36804fdc386f78e588e18412/src/components.d.ts#L680) |
