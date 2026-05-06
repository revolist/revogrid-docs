[RevoGrid Documentation v4.21.7](README.md) / ViewPortScrollEvent

# Type Alias: ViewPortScrollEvent\<D\>

```ts
type ViewPortScrollEvent<D>: {
  coordinate: number;
  delta: number;
  dimension: D;
  outside: boolean;
};
```

`ViewPortScrollEvent` is an object that contains information about a scroll
event in the viewport.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `D` | [`DimensionType`](TypeAlias.DimensionType.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:514](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L514) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:518](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L518) |
| `dimension` | `D` | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:510](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L510) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:522](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L522) |

## Defined in

[src/types/interfaces.ts:506](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L506)
