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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:803](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/types/interfaces.ts#L803) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:805](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/types/interfaces.ts#L805) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:804](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/types/interfaces.ts#L804) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:802](https://github.com/revolist/revogrid/blob/8958a60bd3054871bb3d1706c4eb92c83a8c6b6c/src/types/interfaces.ts#L802)
