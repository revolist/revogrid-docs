[RevoGrid Documentation v4.21.7](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:656](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L656) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:679](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L679) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:651](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L651) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:668](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L668) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:662](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L662) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:698](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L698) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:690](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L690) |
