[RevoGrid Documentation v4.23.6](README.md) / InitialHeaderClick

# Type Alias: InitialHeaderClick

```ts
type InitialHeaderClick: {
  column: ColumnRegular;
  index: number;
  originalEvent: MouseEvent;
  providers: ProvidersColumns;
};
```

`InitialHeaderClick` represents the information needed to handle a click
event on the initial column header.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:559](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/types/interfaces.ts#L559) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:551](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/types/interfaces.ts#L551) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:555](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/types/interfaces.ts#L555) |
| `providers` | [`ProvidersColumns`](Interface.ProvidersColumns.md) | - | [src/types/interfaces.ts:560](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/types/interfaces.ts#L560) |

## Defined in

[src/types/interfaces.ts:547](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/types/interfaces.ts#L547)
