[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:585](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L585) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:608](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L608) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:580](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L580) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:597](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L597) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:591](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L591) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:624](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L624) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:619](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L619) |
