[@revolist/revogrid](README.md) / BeforeSaveDataDetails

# Type alias: BeforeSaveDataDetails

```ts
type BeforeSaveDataDetails: {
  colIndex: number;
  colType: DimensionCols;
  model: DataType;
  prop: ColumnProp;
  rowIndex: number;
  type: DimensionRows;
  val: SaveData;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `colIndex` | `number` |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) |
| `model` | [`DataType`](Type.DataType.md) |
| `prop` | [`ColumnProp`](Type.ColumnProp.md) |
| `rowIndex` | `number` |
| `type` | [`DimensionRows`](Type.DimensionRows.md) |
| `val` | [`SaveData`](Type.SaveData.md) |

## Source

[src/types/selection.ts:77](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/selection.ts#L77)
