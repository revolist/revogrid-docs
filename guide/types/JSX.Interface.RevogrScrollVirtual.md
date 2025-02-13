[RevoGrid Documentation v4.12.1](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:2236](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L2236) |
| `dimensionStore` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimensions | [src/components.d.ts:2240](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L2240) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2244](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L2244) |
| `viewportStore` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport | [src/components.d.ts:2248](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/components.d.ts#L2248) |
