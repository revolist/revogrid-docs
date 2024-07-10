[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:580](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L580) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:603](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L603) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:575](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L575) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:592](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L592) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:586](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L586) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:619](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L619) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:614](https://github.com/revolist/revogrid/blob/179ef4790c9da8e1216f1005cb3571a276adbd08/src/types/interfaces.ts#L614) |
