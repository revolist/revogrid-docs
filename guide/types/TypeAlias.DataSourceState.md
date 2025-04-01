[RevoGrid Documentation v4.14.13](README.md) / DataSourceState

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
| `groupingDepth` | `number` | Grouping information | [src/types/interfaces.ts:603](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L603) |
| `groups` | `Record`\<`any`, `any`\> | - | [src/types/interfaces.ts:604](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L604) |
| `items` | `number`[] | List of indices for visible items in the grid | [src/types/interfaces.ts:590](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L590) |
| `proxyItems` | `number`[] | List of indices for visible items in the grid, even if they are trimmed Update this collection if you want to change items order | [src/types/interfaces.ts:595](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L595) |
| `source` | `T`[] | Actual data array | [src/types/interfaces.ts:599](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L599) |
| `trimmed` | `Record`\<`any`, `any`\> | Info for trimming or filtering the data, to hide entities from visible data source | [src/types/interfaces.ts:612](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L612) |
| `type` | `ST` | Dimension type, can be rows or columns depending on context | [src/types/interfaces.ts:608](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L608) |

## Defined in

[src/types/interfaces.ts:583](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L583)
