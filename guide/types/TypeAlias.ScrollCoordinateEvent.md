[RevoGrid Documentation v4.11.18](README.md) / ScrollCoordinateEvent

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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:813](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/types/interfaces.ts#L813) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:807](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/types/interfaces.ts#L807) |

## Defined in

[src/types/interfaces.ts:802](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/types/interfaces.ts#L802)
