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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:464](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L464) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:468](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L468) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:460](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L460) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:472](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L472) |

## Defined in

[src/types/interfaces.ts:456](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L456)
