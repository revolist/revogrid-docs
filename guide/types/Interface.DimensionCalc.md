[RevoGrid Documentation v4.17.3](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:633](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L633) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:656](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L656) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:628](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L628) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:645](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L645) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:639](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L639) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. * provider stores only changed sizes, not all of them * same as indexes but for sizes and positions * virtual item index to size | [src/types/interfaces.ts:675](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L675) |
| `trimmed` | `null` \| \{\} | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:667](https://github.com/revolist/revogrid/blob/2ad9a56a428342a01bbb7a115a581a401dbe3fef/src/types/interfaces.ts#L667) |
