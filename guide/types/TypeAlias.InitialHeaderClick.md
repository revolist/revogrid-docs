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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:481](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L481) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:473](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L473) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:477](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L477) |

## Defined in

[src/types/interfaces.ts:469](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/types/interfaces.ts#L469)
