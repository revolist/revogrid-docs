[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L581) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:604](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L604) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:576](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L576) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:593](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L593) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:587](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L587) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:620](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L620) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:615](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L615) |
