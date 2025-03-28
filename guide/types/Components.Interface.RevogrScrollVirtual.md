[RevoGrid Documentation v4.14.10](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:676](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L676) |
| `clientSize` | `number` | Client size | [src/components.d.ts:680](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L680) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) | [src/components.d.ts:684](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L684) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:688](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L688) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:689](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L689) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:693](https://github.com/revolist/revogrid/blob/f8d663f4e4ad146b94baf570f65efe48aaaeae09/src/components.d.ts#L693) |
