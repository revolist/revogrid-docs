[RevoGrid Documentation v4.13.5](README.md) / DataSourceState

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
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:585](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L585) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:586](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L586) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:572](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L572) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:577](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L577) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:581](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L581) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:594](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L594) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:590](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L590) |

## Defined in

[src/types/interfaces.ts:565](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L565)
