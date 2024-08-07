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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:774](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L774) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:768](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L768) |

## Defined in

[src/types/interfaces.ts:763](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L763)
