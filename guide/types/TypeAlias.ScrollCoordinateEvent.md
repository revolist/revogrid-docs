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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:791](https://github.com/revolist/revogrid/blob/69d5bd9cb55a69f54242342681dca616def73994/src/types/interfaces.ts#L791) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:785](https://github.com/revolist/revogrid/blob/69d5bd9cb55a69f54242342681dca616def73994/src/types/interfaces.ts#L785) |

## Defined in

[src/types/interfaces.ts:780](https://github.com/revolist/revogrid/blob/69d5bd9cb55a69f54242342681dca616def73994/src/types/interfaces.ts#L780)
