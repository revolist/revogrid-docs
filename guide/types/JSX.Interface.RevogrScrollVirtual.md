[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2095](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/components.d.ts#L2095) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2099](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/components.d.ts#L2099) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2103](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/components.d.ts#L2103) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2107](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/components.d.ts#L2107) |
