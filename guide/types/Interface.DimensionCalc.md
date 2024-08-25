[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:579](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L579) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:602](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L602) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:574](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L574) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:591](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L591) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:585](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L585) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:618](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L618) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:613](https://github.com/revolist/revogrid/blob/7c04a51ec5214ac7292502c14a49e3fb70d452cb/src/types/interfaces.ts#L613) |
