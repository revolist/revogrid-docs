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
| `coordinate` | `number` | The coordinate of the scroll event. | [src/types/interfaces.ts:463](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L463) |
| `delta` | `number` | The change in coordinate between scroll events. | [src/types/interfaces.ts:467](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L467) |
| `dimension` | [`DimensionType`](TypeAlias.DimensionType.md) | The dimension of the viewport being scrolled. | [src/types/interfaces.ts:459](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L459) |
| `outside` | `boolean` | Indicates whether the scroll event occurred outside the viewport. | [src/types/interfaces.ts:471](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L471) |

## Defined in

[src/types/interfaces.ts:455](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L455)
