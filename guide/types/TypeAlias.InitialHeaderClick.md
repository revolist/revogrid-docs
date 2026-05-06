[RevoGrid Documentation v4.21.7](README.md) / InitialHeaderClick

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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:541](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L541) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:533](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L533) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:537](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L537) |
| `providers` | [`ProvidersColumns`](Interface.ProvidersColumns.md) | - | [src/types/interfaces.ts:542](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L542) |

## Defined in

[src/types/interfaces.ts:529](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L529)
