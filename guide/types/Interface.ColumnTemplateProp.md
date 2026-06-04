[RevoGrid Documentation v4.23.7](README.md) / ColumnTemplateProp

# Interface: ColumnTemplateProp\<P\>

Column template property.
Contains extended properties for column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)\<`P`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | [`ColumnProp`](TypeAlias.ColumnProp.md) |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` | [src/types/interfaces.ts:238](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L238) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` | [src/types/interfaces.ts:204](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L204) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellParser` | [src/types/interfaces.ts:210](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L210) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` | [src/types/interfaces.ts:196](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L196) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` | [src/types/interfaces.ts:200](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L200) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` | [src/types/interfaces.ts:139](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L139) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` | [src/types/interfaces.ts:134](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L134) |
| `columnType?` | `string` | Represents type defined in columnTypes property through grid config. | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` | [src/types/interfaces.ts:258](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L258) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` | [src/types/interfaces.ts:192](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L192) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config filter. | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` | [src/types/interfaces.ts:242](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L242) |
| `index` | `number` | Index of the column, used for mapping value to cell from data source model/row. | - | [src/types/interfaces.ts:282](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L282) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` | [src/types/interfaces.ts:187](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L187) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` | [src/types/interfaces.ts:183](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L183) |
| `name?` | `any` | Column header text. | [`ColumnRegular`](Interface.ColumnRegular.md).`name` | [src/types/interfaces.ts:234](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L234) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | [`ColumnRegular`](Interface.ColumnRegular.md).`order` | [src/types/interfaces.ts:250](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L250) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` | [src/types/interfaces.ts:230](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L230) |
| `prop` | `P` | Column prop used for mapping value to cell from data source model/row, used for indexing. | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` | [src/types/interfaces.ts:226](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L226) |
| `providers` | [`ProvidersColumns`](Interface.ProvidersColumns.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | Providers injected into the template. | - | [src/types/interfaces.ts:278](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L278) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\> | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` | [src/types/interfaces.ts:173](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L173) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\> | Is cell in column or individual can be dragged. | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` | [src/types/interfaces.ts:254](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L254) |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` | [src/types/interfaces.ts:177](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L177) |
| `sortable?` | `boolean` | Is column can be sorted, check cellCompare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` | [src/types/interfaces.ts:246](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L246) |

## Methods

### beforeSetup()?

```ts
optional beforeSetup(rgCol: ColumnRegular<P, DataType<any, ColumnProp>>): void
```

Function called before column applied to the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md)\<`P`, [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> |

#### Returns

`void`

#### Inherited from

[`ColumnRegular`](Interface.ColumnRegular.md).[`beforeSetup`](Interface.ColumnRegular.md#beforesetup)

#### Defined in

[src/types/interfaces.ts:262](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/types/interfaces.ts#L262)
