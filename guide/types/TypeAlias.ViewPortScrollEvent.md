[@revolist/revogrid](README.md) / ViewPortScrollEvent

# Type Alias: ViewPortScrollEvent

```ts
type ViewPortScrollEvent: {
  coordinate: number;
  delta: number;
  dimension: DimensionType;
  outside: boolean;
};
```

`ViewPortScrollEvent` is an object that contains information about a scroll
event in the viewport.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:457](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/types/interfaces.ts#L457) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:461](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/types/interfaces.ts#L461) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:453](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/types/interfaces.ts#L453) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:465](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/types/interfaces.ts#L465) |

## Defined in

[src/types/interfaces.ts:449](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/types/interfaces.ts#L449)
