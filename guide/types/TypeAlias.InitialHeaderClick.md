[RevoGrid Documentation v4.12.1](README.md) / InitialHeaderClick

# Type Alias: InitialHeaderClick

```ts
type InitialHeaderClick: {
  column: ColumnRegular;
  index: number;
  originalEvent: MouseEvent;
  providers: Providers<DimensionCols | "rowHeaders">;
};
```

`InitialHeaderClick` represents the information needed to handle a click
event on the initial column header.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | The column that was clicked. | [src/types/interfaces.ts:499](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L499) |
| `index` | `number` | The index of the column header that was clicked. | [src/types/interfaces.ts:491](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L491) |
| `originalEvent` | `MouseEvent` | The original mouse event that triggered the click. | [src/types/interfaces.ts:495](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L495) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | - | [src/types/interfaces.ts:500](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L500) |

## Defined in

[src/types/interfaces.ts:487](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L487)
