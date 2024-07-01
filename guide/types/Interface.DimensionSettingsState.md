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
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:575](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L575) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:598](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L598) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:570](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L570) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:630](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L630) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:587](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L587) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L581) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:625](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L625) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:614](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L614) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:609](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L609) |
