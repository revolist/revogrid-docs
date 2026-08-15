[RevoGrid Documentation v4.25.2](README.md) / InitialHeaderClick

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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:562](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L562) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:554](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L554) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:558](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L558) |
| `providers` | [`ProvidersColumns`](Interface.ProvidersColumns.md) | - | [src/types/interfaces.ts:563](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L563) |

## Defined in

[src/types/interfaces.ts:550](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L550)
