[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2067](https://github.com/revolist/revogrid/blob/2bbd565b6ba0fbdf72ee22dd6361908f69d8c6e1/src/components.d.ts#L2067) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2071](https://github.com/revolist/revogrid/blob/2bbd565b6ba0fbdf72ee22dd6361908f69d8c6e1/src/components.d.ts#L2071) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2075](https://github.com/revolist/revogrid/blob/2bbd565b6ba0fbdf72ee22dd6361908f69d8c6e1/src/components.d.ts#L2075) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2079](https://github.com/revolist/revogrid/blob/2bbd565b6ba0fbdf72ee22dd6361908f69d8c6e1/src/components.d.ts#L2079) |
