[RevoGrid Documentation v4.20.2](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2375](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/components.d.ts#L2375) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2380](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/components.d.ts#L2380) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2384](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/components.d.ts#L2384) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:2388](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/components.d.ts#L2388) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2392](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/components.d.ts#L2392) |
