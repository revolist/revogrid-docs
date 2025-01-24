[RevoGrid Documentation v4.11.16](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2228](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/components.d.ts#L2228) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2232](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/components.d.ts#L2232) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2236](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/components.d.ts#L2236) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2240](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/components.d.ts#L2240) |
