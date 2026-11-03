[RevoGrid Documentation v4.31.0](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2450](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/components.d.ts#L2450) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2455](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/components.d.ts#L2455) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2459](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/components.d.ts#L2459) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:2463](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/components.d.ts#L2463) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2467](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/components.d.ts#L2467) |
