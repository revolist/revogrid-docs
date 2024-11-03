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
| `groupingDepth` | `number` | [src/types/interfaces.ts:569](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L569) |
| `groups` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:570](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L570) |
| `items` | `number`[] | [src/types/interfaces.ts:563](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L563) |
| `proxyItems` | `number`[] | [src/types/interfaces.ts:565](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L565) |
| `source` | `T`[] | [src/types/interfaces.ts:567](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L567) |
| `trimmed` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:574](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L574) |
| `type` | `ST` | [src/types/interfaces.ts:572](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L572) |

## Defined in

[src/types/interfaces.ts:558](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/types/interfaces.ts#L558)
