[RevoGrid Documentation v4.25.0](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2439](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L2439) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2444](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L2444) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2448](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L2448) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:2452](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L2452) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2456](https://github.com/revolist/revogrid/blob/a6a858841b6179f71d79deffde996e3ef6220356/src/components.d.ts#L2456) |
