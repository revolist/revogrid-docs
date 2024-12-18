[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2231](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2231) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2235](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2235) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2239](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2239) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2243](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2243) |
