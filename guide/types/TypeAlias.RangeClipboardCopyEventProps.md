[RevoGrid Documentation v4.11.16](README.md) / RangeClipboardCopyEventProps

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
| `data` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\>[][] | [src/types/interfaces.ts:825](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/types/interfaces.ts#L825) |
| `mapping` | [`OldNewRangeMapping`](TypeAlias.OldNewRangeMapping.md) | [src/types/interfaces.ts:827](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/types/interfaces.ts#L827) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) | [src/types/interfaces.ts:826](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/types/interfaces.ts#L826) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Defined in

[src/types/interfaces.ts:824](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/types/interfaces.ts#L824)
