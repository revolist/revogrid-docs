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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:793](https://github.com/revolist/revogrid/blob/a84fead7f1878a976ea465cbf9b4f0472345b7b1/src/types/interfaces.ts#L793) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:795](https://github.com/revolist/revogrid/blob/a84fead7f1878a976ea465cbf9b4f0472345b7b1/src/types/interfaces.ts#L795) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:794](https://github.com/revolist/revogrid/blob/a84fead7f1878a976ea465cbf9b4f0472345b7b1/src/types/interfaces.ts#L794) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:792](https://github.com/revolist/revogrid/blob/a84fead7f1878a976ea465cbf9b4f0472345b7b1/src/types/interfaces.ts#L792)
