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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:800](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L800) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:802](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L802) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:801](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L801) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:799](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L799)
