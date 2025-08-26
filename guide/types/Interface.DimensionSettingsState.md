[RevoGrid Documentation v4.16.0](README.md) / DimensionSettingsState

# Interface: DimensionSettingsState

Represents the settings state of a dimension.
It extends the calculation properties of a dimension.
It also includes the real size and origin item size of the dimension.

## Extends

- [`DimensionCalc`](Interface.DimensionCalc.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:633](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L633) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:656](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L656) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:628](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L628) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:691](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L691) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:645](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L645) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:639](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L639) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:686](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L686) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:675](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L675) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:667](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L667) |
