[RevoGrid Documentation v4.25.2](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:684](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L684) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:707](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L707) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:679](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L679) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:696](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L696) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:690](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L690) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L726) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:718](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L718) |
