[RevoGrid Documentation v4.21.7](README.md) / DimensionSettingsState

# Interface: DimensionSettingsState

Represents the settings state of a dimension.
It extends the calculation properties of a dimension.
It also includes the real size and origin item size of the dimension.

## Extends

- [`DimensionCalc`](Interface.DimensionCalc.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:656](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L656) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:679](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L679) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:651](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L651) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:714](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L714) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:668](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L668) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:662](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L662) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:709](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L709) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:698](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L698) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:690](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L690) |
