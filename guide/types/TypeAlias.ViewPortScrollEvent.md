[RevoGrid Documentation v4.25.2](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:535](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L535) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:539](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L539) |
| `dimension` | `D` | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:531](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L531) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:543](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L543) |

## Defined in

[src/types/interfaces.ts:527](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L527)
