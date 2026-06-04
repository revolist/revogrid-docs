[RevoGrid Documentation v4.23.7](README.md) / ScrollCoordinateEvent

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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:902](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L902) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:896](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L896) |

## Defined in

[src/types/interfaces.ts:891](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L891)
