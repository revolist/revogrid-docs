[@revolist/revogrid](README.md) / ScrollCoordinateEvent

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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:784](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L784) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:778](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L778) |

## Defined in

[src/types/interfaces.ts:773](https://github.com/revolist/revogrid/blob/085a454f82e6d3229f4e3dccf86bbdacfcd5813a/src/types/interfaces.ts#L773)
