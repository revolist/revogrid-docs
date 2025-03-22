[RevoGrid Documentation v4.14.5](README.md) / DataSourceState

# Type Alias: DataSourceState\<T, ST\>

```ts
type DataSourceState<T, ST>: {
  groupingDepth: number;
  groups: Record<any, any>;
  items: number[];
  proxyItems: number[];
  source: T[];
  trimmed: Record<any, any>;
  type: ST;
};
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DataType`](TypeAlias.DataType.md) \| [`ColumnRegular`](Interface.ColumnRegular.md) |
| `ST` *extends* [`DimensionRows`](TypeAlias.DimensionRows.md) \| [`DimensionCols`](TypeAlias.DimensionCols.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:586](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L586) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:587](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L587) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:573](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L573) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:578](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L578) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:582](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L582) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:595](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L595) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:591](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L591) |

## Defined in

[src/types/interfaces.ts:566](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L566)
