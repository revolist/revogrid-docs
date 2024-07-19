[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2057](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2057) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2061](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2061) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2065](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2065) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2069](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L2069) |
