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
| `colIndex` | `number` | Index of the column in the viewport | [src/types/interfaces.ts:43](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L43) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:47](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L47) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:35](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L35) |
| `data` | [`DataType`](TypeAlias.DataType.md)[] | Row models based on viewport | [src/types/interfaces.ts:55](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L55) |
| `model` | [`DataType`](TypeAlias.DataType.md) | Row data object | [src/types/interfaces.ts:31](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L31) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:27](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L27) |
| `rowIndex` | `number` | Index of the row in the viewport | [src/types/interfaces.ts:39](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L39) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:51](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L51) |
| `value` | `any` | Current cell data | [src/types/interfaces.ts:59](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L59) |

## Defined in

[src/types/interfaces.ts:23](https://github.com/revolist/revogrid/blob/b237f8e2bf171382439be1d1cad91b20987b8302/src/types/interfaces.ts#L23)
