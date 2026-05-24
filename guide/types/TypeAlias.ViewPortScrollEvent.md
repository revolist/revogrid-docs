[RevoGrid Documentation v4.21.11](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:532](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L532) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:536](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L536) |
| `dimension` | `D` | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:528](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L528) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:540](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L540) |

## Defined in

[src/types/interfaces.ts:524](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/interfaces.ts#L524)
