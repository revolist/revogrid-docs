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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:767](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L767) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:761](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L761) |

## Defined in

[src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/interfaces.ts#L756)
