[RevoGrid Documentation v4.15.0](README.md) / ColumnDataSchemaModel

# Interface: ColumnDataSchemaModel

Advanced column data schema model.
Used for transpassing data to cell renderer and editor.

## Extended by

- [`CellTemplateProp`](Interface.CellTemplateProp.md)
- [`BeforeSaveDataDetails`](Interface.BeforeSaveDataDetails.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colIndex` | `number` | Virtual index of the column in the viewport | [src/types/interfaces.ts:50](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L50) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Column type based on viewport | [src/types/interfaces.ts:54](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L54) |
| `column` | [`ColumnRegular`](Interface.ColumnRegular.md) | Column data object | [src/types/interfaces.ts:42](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L42) |
| `data` | [`DataType`](TypeAlias.DataType.md)\<`any`\>[] | Row models based on viewport | [src/types/interfaces.ts:62](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L62) |
| `model` | [`DataType`](TypeAlias.DataType.md)\<`any`\> | Row data object | [src/types/interfaces.ts:38](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L38) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row | [src/types/interfaces.ts:34](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L34) |
| `rowIndex` | `number` | Virtual index of the row in the viewport | [src/types/interfaces.ts:46](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L46) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row type based on viewport | [src/types/interfaces.ts:58](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L58) |
| `value?` | `any` | Current cell data value Mapped from model through column property like model['prop'] | [src/types/interfaces.ts:67](https://github.com/revolist/revogrid/blob/f57e3b1afae49404a5b6670c54899cb5770f47c4/src/types/interfaces.ts#L67) |
