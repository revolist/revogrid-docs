[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:594](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L594) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:617](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L617) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:589](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L589) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:606](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L606) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:600](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L600) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:636](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L636) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:628](https://github.com/revolist/revogrid/blob/ff1c29109648eb0543e674392be7b9af90d92acc/src/types/interfaces.ts#L628) |
