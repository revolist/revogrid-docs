[@revolist/revogrid](README.md) / DimensionSettingsState

# Interface: DimensionSettingsState

Represents the settings state of a dimension.
It extends the calculation properties of a dimension.
It also includes the real size and origin item size of the dimension.

## Extends

- [`DimensionCalc`](Interface.DimensionCalc.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:580](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L580) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:603](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L603) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:575](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L575) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:635](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L635) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:592](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L592) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:586](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L586) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:630](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L630) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:619](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L619) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:614](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/types/interfaces.ts#L614) |
