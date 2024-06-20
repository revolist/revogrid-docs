[@revolist/revogrid](README.md) / DataSourceState

# Type alias: DataSourceState\<T, ST\>

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

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`DataType`](Type.DataType.md) \| [`ColumnRegular`](Interface.ColumnRegular.md) |
| `ST` *extends* [`DimensionRows`](Type.DimensionRows.md) \| [`DimensionCols`](Type.DimensionCols.md) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `groupingDepth` | `number` |
| `groups` | `Record`\<`any`, `any`\> |
| `items` | `number`[] |
| `proxyItems` | `number`[] |
| `source` | `T`[] |
| `trimmed` | `Record`\<`any`, `any`\> |
| `type` | `ST` |

## Source

[src/types/interfaces.ts:247](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L247)
