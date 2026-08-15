[RevoGrid Documentation v4.25.2](README.md) / DimensionSettingsState

# Interface: DimensionSettingsState

Represents the settings state of a dimension.
It extends the calculation properties of a dimension.
It also includes the real size and origin item size of the dimension.

## Extends

- [`DimensionCalc`](Interface.DimensionCalc.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`count` | [src/types/interfaces.ts:684](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L684) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexToItem` | [src/types/interfaces.ts:707](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L707) |
| `indexes` | `number`[] | Array of indexes of visible items. | [`DimensionCalc`](Interface.DimensionCalc.md).`indexes` | [src/types/interfaces.ts:679](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L679) |
| `originItemSize` | `number` | Represents the origin item size of the dimension. | - | [src/types/interfaces.ts:742](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L742) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexToItem` | [src/types/interfaces.ts:696](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L696) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [`DimensionCalc`](Interface.DimensionCalc.md).`positionIndexes` | [src/types/interfaces.ts:690](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L690) |
| `realSize` | `number` | Represents the real size of the dimension. | - | [src/types/interfaces.ts:737](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L737) |
| `renderOffset?` | `number` | Internal render offset applied when logical scroll space is compressed into a browser-safe physical scroll range. | - | [src/types/interfaces.ts:748](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L748) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [`DimensionCalc`](Interface.DimensionCalc.md).`sizes` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L726) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [`DimensionCalc`](Interface.DimensionCalc.md).`trimmed` | [src/types/interfaces.ts:718](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L718) |
