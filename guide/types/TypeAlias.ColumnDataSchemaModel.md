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
| `colIndex` | `number` | Index of the column in the viewport | [src/types/interfaces.ts:40](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L40) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:44](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L44) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:32](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L32) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | [src/types/interfaces.ts:52](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L52) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | [src/types/interfaces.ts:28](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L28) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:24](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L24) |
| `rowIndex` | `number` | Index of the row in the viewport | [src/types/interfaces.ts:36](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L36) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:48](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L48) |
| `value` | `any` | Current cell data | [src/types/interfaces.ts:56](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L56) |

## Defined in

[src/types/interfaces.ts:20](https://github.com/revolist/revogrid/blob/5b9d5acc12b1e8b58b94bf47dcbc001b6b394655/src/types/interfaces.ts#L20)
