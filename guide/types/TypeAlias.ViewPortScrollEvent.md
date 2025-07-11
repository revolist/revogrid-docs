[RevoGrid Documentation v4.15.8](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:491](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L491) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:495](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L495) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:487](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L487) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:499](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L499) |

## Defined in

[src/types/interfaces.ts:483](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L483)
