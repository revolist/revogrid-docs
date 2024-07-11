[@revolist/revogrid](README.md) / ColumnGrouping

# Type Alias: ColumnGrouping

```ts
type ColumnGrouping: {
  children: (ColumnGrouping | ColumnRegular)[];
  name: DataFormat;
};
```

`ColumnGrouping` type is used to define a grouping in a column.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md) \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:94](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L94) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md) | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:98](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L98) |

## Defined in

[src/types/interfaces.ts:90](https://github.com/revolist/revogrid/blob/2f44a261094fb5584023b62ddfd589facc70cf92/src/types/interfaces.ts#L90)
