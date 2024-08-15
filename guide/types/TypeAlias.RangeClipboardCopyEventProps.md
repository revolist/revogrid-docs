[@revolist/revogrid](README.md) / RangeClipboardCopyEventProps

# Type Alias: RangeClipboardCopyEventProps\<T\>

```ts
type RangeClipboardCopyEventProps<T>: {
  data: DataFormat<T>[][];
  mapping: OldNewRangeMapping;
  range: RangeArea;
 } & AllDimensionType;
```

Range copy.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:793](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L793) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:795](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L795) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:794](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L794) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:792](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L792)
