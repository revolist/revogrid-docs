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
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md) \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:94](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/types/interfaces.ts#L94) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md) | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:98](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/types/interfaces.ts#L98) |

## Defined in

[src/types/interfaces.ts:90](https://github.com/revolist/revogrid/blob/8aea4c92d6f61dbd5ec14b529d8993bb7069ef1f/src/types/interfaces.ts#L90)
