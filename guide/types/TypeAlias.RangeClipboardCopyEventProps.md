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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:796](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L796) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:798](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L798) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:797](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L797) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:795](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L795)
