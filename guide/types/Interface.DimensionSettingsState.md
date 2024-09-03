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
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:579](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L579) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:602](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L602) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:574](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L574) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:634](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L634) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:591](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L591) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:585](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L585) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:629](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L629) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:618](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L618) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:613](https://github.com/revolist/revogrid/blob/db3bbd7b3dfb60c01decc2efa78ae175ced1baa0/src/types/interfaces.ts#L613) |
