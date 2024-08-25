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
| `groupingDepth` | `number` | [src/types/interfaces.ts:553](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L553) |
| `groups` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:554](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L554) |
| `items` | `number`[] | [src/types/interfaces.ts:547](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L547) |
| `proxyItems` | `number`[] | [src/types/interfaces.ts:549](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L549) |
| `source` | `T`[] | [src/types/interfaces.ts:551](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L551) |
| `trimmed` | `Record`\<`any`, `any`\> | [src/types/interfaces.ts:558](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L558) |
| `type` | `ST` | [src/types/interfaces.ts:556](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L556) |

## Defined in

[src/types/interfaces.ts:542](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L542)
