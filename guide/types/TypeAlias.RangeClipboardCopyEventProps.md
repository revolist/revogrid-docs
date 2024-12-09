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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:825](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L825) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:827](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L827) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:826](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L826) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:824](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/interfaces.ts#L824)
