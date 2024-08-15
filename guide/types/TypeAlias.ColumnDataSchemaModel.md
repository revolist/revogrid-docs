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

Advanced column data schema model.
Used for transpassing data to cell renderer and editor.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Index of the column in the viewport | [src/types/interfaces.ts:48](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L48) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:52](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L52) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:40](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L40) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | [src/types/interfaces.ts:60](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L60) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | [src/types/interfaces.ts:36](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L36) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:32](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L32) |
| `rowIndex` | `number` | Index of the row in the viewport | [src/types/interfaces.ts:44](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L44) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:56](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L56) |
| `value` | `any` | Current cell data | [src/types/interfaces.ts:64](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L64) |

## Defined in

[src/types/interfaces.ts:28](https://github.com/revolist/revogrid/blob/e9570f9d5c0f862a9433b930661de46c89a93bd7/src/types/interfaces.ts#L28)
