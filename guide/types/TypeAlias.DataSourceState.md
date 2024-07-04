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
| `groupingDepth` | `number` | [src/types/interfaces.ts:550](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L550) |
| `groups` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:551](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L551) |
| `items` | `number`[] | [src/types/interfaces.ts:544](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L544) |
| `proxyItems` | `number`[] | [src/types/interfaces.ts:546](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L546) |
| `source` | `T`[] | [src/types/interfaces.ts:548](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L548) |
| `trimmed` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:555](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L555) |
| `type` | `ST` | [src/types/interfaces.ts:553](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L553) |

## Defined in

[src/types/interfaces.ts:539](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/interfaces.ts#L539)
