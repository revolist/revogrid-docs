[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2069](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L2069) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2073](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L2073) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2077](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L2077) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2081](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L2081) |
