[@revolist/revogrid](README.md) / InitialHeaderClick

# Type Alias: InitialHeaderClick

```ts
type InitialHeaderClick: {
  column: ColumnRegular;
  index: number;
  originalEvent: MouseEvent;
};
```

`InitialHeaderClick` represents the information needed to handle a click
event on the initial column header.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:487](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L487) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:479](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L479) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:483](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L483) |

## Defined in

[src/types/interfaces.ts:475](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/interfaces.ts#L475)
