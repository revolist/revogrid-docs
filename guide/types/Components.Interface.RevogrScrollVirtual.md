[RevoGrid Documentation v4.26.1](README.md) / [Components](Namespace.Components.md) / RevogrScrollVirtual

# Interface: RevogrScrollVirtual

Virtual scroll component

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | Update if `delta` exists in case we don't know current position or if it's external change | [src/components.d.ts:753](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L753) |
| `clientSize` | `number` | Client size | [src/components.d.ts:757](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L757) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | Scroll dimension (`X` - `rgCol` or `Y` - `rgRow`) **Default** `'rgRow'` | [src/components.d.ts:762](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L762) |
| `realSize` | `number` | Dimensions | [src/components.d.ts:766](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L766) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:767](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L767) |
| `virtualSize` | `number` | Virtual size | [src/components.d.ts:771](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L771) |
