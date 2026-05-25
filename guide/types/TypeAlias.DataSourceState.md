[RevoGrid Documentation v4.22.1](README.md) / DataSourceState

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
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:652](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L652) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:653](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L653) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:639](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L639) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:644](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L644) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:648](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L648) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:661](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L661) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:657](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L657) |

## Defined in

[src/types/interfaces.ts:632](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/interfaces.ts#L632)
