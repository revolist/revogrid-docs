[RevoGrid Documentation v4.13.3](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:472](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L472) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:476](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L476) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:468](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L468) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:480](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L480) |

## Defined in

[src/types/interfaces.ts:464](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L464)
