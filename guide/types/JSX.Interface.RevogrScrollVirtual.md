[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2087](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L2087) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2091](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L2091) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2095](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L2095) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2099](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/components.d.ts#L2099) |
