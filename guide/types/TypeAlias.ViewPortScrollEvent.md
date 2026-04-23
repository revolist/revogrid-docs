[RevoGrid Documentation v4.21.4](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:491](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/types/interfaces.ts#L491) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:495](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/types/interfaces.ts#L495) |
| `dimension` | `D` | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:487](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/types/interfaces.ts#L487) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:499](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/types/interfaces.ts#L499) |

## Defined in

[src/types/interfaces.ts:483](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/types/interfaces.ts#L483)
