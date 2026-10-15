[RevoGrid Documentation v4.28.4](README.md) / ViewPortScrollEvent

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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:535](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/types/interfaces.ts#L535) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:539](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/types/interfaces.ts#L539) |
| `dimension` | `D` | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:531](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/types/interfaces.ts#L531) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:543](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/types/interfaces.ts#L543) |

## Defined in

[src/types/interfaces.ts:527](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/types/interfaces.ts#L527)
