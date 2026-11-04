[RevoGrid Documentation v4.31.3](README.md) / [JSX](Namespace.JSX.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clientSize` | `number` | Client size | [src/components.d.ts:2455](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2455) |
| `dimension?` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:2460](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2460) |
| `dimensionStore?` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Grid-owned size source, updated before component rendering. | [src/components.d.ts:2464](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2464) |
| `onScrollvirtual?` | (`event`: [`RevogrScrollVirtualCustomEvent`](Interface.RevogrScrollVirtualCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll event | [src/components.d.ts:2468](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2468) |
| `realSize?` | `number` | Content size for scrollbars without a dimension store. **Default** `0` | [src/components.d.ts:2473](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2473) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:2477](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/components.d.ts#L2477) |
