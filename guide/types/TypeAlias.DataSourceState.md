[@revolist/revogrid](README.md) / DataSourceState

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

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `groupingDepth` | `number` | [src/types/interfaces.ts:561](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L561) |
| `groups` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:562](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L562) |
| `items` | `number`[] | [src/types/interfaces.ts:555](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L555) |
| `proxyItems` | `number`[] | [src/types/interfaces.ts:557](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L557) |
| `source` | `T`[] | [src/types/interfaces.ts:559](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L559) |
| `trimmed` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:566](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L566) |
| `type` | `ST` | [src/types/interfaces.ts:564](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L564) |

## Defined in

[src/types/interfaces.ts:550](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L550)
