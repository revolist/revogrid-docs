[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:586](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L586) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:609](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L609) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L581) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:598](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L598) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:592](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L592) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:625](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L625) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:620](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L620) |
