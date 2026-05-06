[RevoGrid Documentation v4.21.7](README.md) / DataSourceState

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
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:627](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L627) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:628](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L628) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:614](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L614) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:619](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L619) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:623](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L623) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:636](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L636) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:632](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L632) |

## Defined in

[src/types/interfaces.ts:607](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L607)
