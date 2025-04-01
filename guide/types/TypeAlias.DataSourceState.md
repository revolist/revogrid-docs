[RevoGrid Documentation v4.14.14](README.md) / DataSourceState

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
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:604](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L604) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:605](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L605) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:591](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L591) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:596](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L596) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:600](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L600) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:613](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L613) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:609](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L609) |

## Defined in

[src/types/interfaces.ts:584](https://github.com/revolist/revogrid/blob/fdfe81f10fb07db00151f14190ac038aded766a8/src/types/interfaces.ts#L584)
