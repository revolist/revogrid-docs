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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:802](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L802) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:804](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L804) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:803](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L803) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:801](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L801)
