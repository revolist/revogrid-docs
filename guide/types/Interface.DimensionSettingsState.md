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
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L581) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:604](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L604) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:576](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L576) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:636](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L636) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:593](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L593) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:587](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L587) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:631](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L631) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:620](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L620) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:615](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/interfaces.ts#L615) |
