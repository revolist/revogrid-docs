[RevoGrid Documentation v4.12.2](README.md) / RangeClipboardCopyEventProps

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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:838](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/types/interfaces.ts#L838) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:840](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/types/interfaces.ts#L840) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:839](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/types/interfaces.ts#L839) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:837](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/types/interfaces.ts#L837)
