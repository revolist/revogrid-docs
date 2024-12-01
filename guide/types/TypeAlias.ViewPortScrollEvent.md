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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:472](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/types/interfaces.ts#L472) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:476](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/types/interfaces.ts#L476) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:468](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/types/interfaces.ts#L468) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:480](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/types/interfaces.ts#L480) |

## Defined in

[src/types/interfaces.ts:464](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/types/interfaces.ts#L464)
