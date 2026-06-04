[RevoGrid Documentation v4.23.7](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:681](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L681) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:704](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L704) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:676](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L676) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:693](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L693) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:687](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L687) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:723](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L723) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:715](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L715) |
