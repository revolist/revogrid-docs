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
| `colIndex` | `number` | Index of the column in the viewport | [src/types/interfaces.ts:49](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L49) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:53](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L53) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:41](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L41) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | [src/types/interfaces.ts:61](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L61) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | [src/types/interfaces.ts:37](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L37) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:33](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L33) |
| `rowIndex` | `number` | Index of the row in the viewport | [src/types/interfaces.ts:45](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L45) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:57](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L57) |
| `value` | `any` | Current cell data value Mapped from model through column property like model['prop'] | [src/types/interfaces.ts:66](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L66) |

## Defined in

[src/types/interfaces.ts:29](https://github.com/revolist/revogrid/blob/7eb028636fe9635cf32f3cf0775076c9e2dde053/src/types/interfaces.ts#L29)
