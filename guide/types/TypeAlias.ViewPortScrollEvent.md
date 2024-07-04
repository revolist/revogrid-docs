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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:454](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L454) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:458](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L458) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:450](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L450) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:462](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L462) |

## Defined in

[src/types/interfaces.ts:446](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L446)
