[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:575](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L575) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:598](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L598) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:570](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L570) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:587](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L587) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L581) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:614](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L614) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:609](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L609) |
