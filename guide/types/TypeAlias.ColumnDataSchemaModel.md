[@revolist/revogrid](README.md) / ColumnDataSchemaModel

# Type Alias: ColumnDataSchemaModel

```ts
type ColumnDataSchemaModel: {
  colIndex: number;
  colType: DimensionCols;
  column: ColumnRegular;
  data: DataType[];
  model: DataType;
  prop: ColumnProp;
  rowIndex: number;
  type: DimensionRows;
  value: any;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | [src/types/interfaces.ts:46](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L46) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:50](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L50) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:38](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L38) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | [src/types/interfaces.ts:58](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L58) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | [src/types/interfaces.ts:34](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L34) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:30](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L30) |
| `rowIndex` | `number` | Index of the row in the viewport | [src/types/interfaces.ts:42](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L42) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:54](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L54) |
| `value` | `any` | Current cell data | [src/types/interfaces.ts:62](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L62) |

## Defined in

[src/types/interfaces.ts:26](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/interfaces.ts#L26)
