[@revolist/revogrid](README.md) / DimensionCalc

# Interface: DimensionCalc

Object containing information about calculated dimensions.
Used for both columns and rows.

## Extended by

- [`DimensionSettingsState`](Interface.DimensionSettingsState.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `count` | `number` | Count of visible items. | [src/types/interfaces.ts:582](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L582) |
| `indexToItem` | \{\} | Mapping of index to item. Used for mapping index in data source to item. | [src/types/interfaces.ts:605](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L605) |
| `indexes` | `number`[] | Array of indexes of visible items. | [src/types/interfaces.ts:577](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L577) |
| `positionIndexToItem` | \{\} | Mapping of position to item. Used for mapping position in DOM to item. | [src/types/interfaces.ts:594](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L594) |
| `positionIndexes` | `number`[] | Array of indexes of visible items. Used for mapping items to their position in DOM. | [src/types/interfaces.ts:588](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L588) |
| `sizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Object containing size for each visible item. | [src/types/interfaces.ts:621](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L621) |
| `trimmed` | `Record`\<`any`, `any`\> | Object containing information about trimmed data. Used for hiding entities from visible data source. | [src/types/interfaces.ts:616](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L616) |
