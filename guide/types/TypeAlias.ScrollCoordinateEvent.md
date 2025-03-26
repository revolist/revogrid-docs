[RevoGrid Documentation v4.14.9](README.md) / ScrollCoordinateEvent

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
| `coordinate` | `number` | Represents the current scroll position in the specified dimension. The value is a number representing the coordinate in pixels. | [src/types/interfaces.ts:827](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L827) |
| `type` | [`DimensionType`](TypeAlias.DimensionType.md) | Represents the type of dimension being scrolled. Possible values are 'rgRow' and 'rgCol'. | [src/types/interfaces.ts:821](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L821) |

## Defined in

[src/types/interfaces.ts:816](https://github.com/revolist/revogrid/blob/6c3c52a081bcade371a3f5576e4e5805c6bbce5c/src/types/interfaces.ts#L816)
