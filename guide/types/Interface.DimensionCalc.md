[RevoGrid Documentation v4.21.11](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:674](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L674) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:697](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L697) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:669](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L669) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:686](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L686) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:680](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L680) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:716](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L716) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:708](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L708) |
