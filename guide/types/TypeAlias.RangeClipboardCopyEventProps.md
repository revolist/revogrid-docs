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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:803](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L803) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:805](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L805) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:804](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L804) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:802](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L802)
