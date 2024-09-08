[@revolist/revogrid](README.md) / ColumnGrouping

# Type Alias: ColumnGrouping\<T\>

```ts
type ColumnGrouping<T>: {
  children: (ColumnGrouping<T> | ColumnRegular)[];
  name: DataFormat<T>;
};
```

`ColumnGrouping` type is used to define a grouping in a column.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `children` | ([`ColumnGrouping`](TypeAlias.ColumnGrouping.md)\<`T`\> \| [`ColumnRegular`](Interface.ColumnRegular.md))[] | An array of objects that represent the children of the grouping. | [src/types/interfaces.ts:100](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/types/interfaces.ts#L100) |
| `name` | [`DataFormat`](TypeAlias.DataFormat.md)\<`T`\> | A `DataFormat` object that represents the name of the grouping. | [src/types/interfaces.ts:104](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/types/interfaces.ts#L104) |

## Defined in

[src/types/interfaces.ts:96](https://github.com/revolist/revogrid/blob/60c4961e100e626252b5238bec5f6c11285d15d0/src/types/interfaces.ts#L96)
