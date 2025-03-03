[RevoGrid Documentation v4.12.9](README.md) / ScrollCoordinateEvent

# Type Alias: ScrollCoordinateEvent

```ts
type ScrollCoordinateEvent: {
  coordinate: number;
  type: DimensionType;
};
```

Represents the event object that is emitted when scrolling occurs.
The `type` property indicates the type of dimension (row or column) being scrolled.
The `coordinate` property represents the current scroll position in that dimension.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:826](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L826) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:820](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L820) |

## Defined in

[src/types/interfaces.ts:815](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/types/interfaces.ts#L815)
