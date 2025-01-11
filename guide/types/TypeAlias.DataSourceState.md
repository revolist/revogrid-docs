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
| `groupingDepth` | `number` | [src/types/interfaces.ts:576](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L576) |
| `groups` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:577](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L577) |
| `items` | `number`[] | [src/types/interfaces.ts:570](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L570) |
| `proxyItems` | `number`[] | [src/types/interfaces.ts:572](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L572) |
| `source` | `T`[] | [src/types/interfaces.ts:574](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L574) |
| `trimmed` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L581) |
| `type` | `ST` | [src/types/interfaces.ts:579](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L579) |

## Defined in

[src/types/interfaces.ts:565](https://github.com/revolist/revogrid/blob/e3c4d102f429c82d34023490b300d210ef8d9573/src/types/interfaces.ts#L565)
