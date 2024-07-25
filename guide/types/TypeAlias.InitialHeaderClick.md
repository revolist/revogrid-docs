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
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:486](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/types/interfaces.ts#L486) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:478](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/types/interfaces.ts#L478) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:482](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/types/interfaces.ts#L482) |

## Defined in

[src/types/interfaces.ts:474](https://github.com/revolist/revogrid/blob/1ed53ebfdb262e9a8c2e5e06c64cb87ad0050ffc/src/types/interfaces.ts#L474)
