[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2158](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L2158) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2162](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L2162) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2166](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L2166) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2170](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/components.d.ts#L2170) |
