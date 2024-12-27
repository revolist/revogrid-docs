[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:601](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L601) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:624](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L624) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:596](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L596) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:613](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L613) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:607](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L607) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:643](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L643) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:635](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L635) |
