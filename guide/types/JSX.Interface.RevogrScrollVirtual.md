[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2221](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2221) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2225](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2225) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2229](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2229) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2233](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/components.d.ts#L2233) |
