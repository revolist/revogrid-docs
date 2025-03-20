[RevoGrid Documentation v4.14.1](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2247](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L2247) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2251](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L2251) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2255](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L2255) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2259](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L2259) |
