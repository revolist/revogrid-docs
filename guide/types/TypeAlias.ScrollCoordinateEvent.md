[RevoGrid Documentation v4.15.7](README.md) / ScrollCoordinateEvent

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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:845](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L845) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:839](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L839) |

## Defined in

[src/types/interfaces.ts:834](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/types/interfaces.ts#L834)
