[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2222](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L2222) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2226](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L2226) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2230](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L2230) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2234](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L2234) |
