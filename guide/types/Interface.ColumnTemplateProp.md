[@revolist/revogrid](README.md) / ColumnTemplateProp

# Interface: ColumnTemplateProp

Column template property.
Contains extended properties for column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` | [src/types/interfaces.ts:218](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L218) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` | [src/types/interfaces.ts:184](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L184) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellParser` | [src/types/interfaces.ts:190](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L190) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` | [src/types/interfaces.ts:176](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L176) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` | [src/types/interfaces.ts:180](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L180) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` | [src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L119) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` | [src/types/interfaces.ts:114](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L114) |
| `columnType?` | `string` | Represents type defined in columnTypes property through grid config. | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` | [src/types/interfaces.ts:238](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L238) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` | [src/types/interfaces.ts:172](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L172) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config filter. | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` | [src/types/interfaces.ts:222](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L222) |
| `index` | `number` | Index of the column, used for mapping value to cell from data source model/row. | - | [src/types/interfaces.ts:262](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L262) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` | [src/types/interfaces.ts:167](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L167) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` | [src/types/interfaces.ts:163](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L163) |
| `name?` | `any` | Column header text. | [`ColumnRegular`](Interface.ColumnRegular.md).`name` | [src/types/interfaces.ts:214](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L214) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | [`ColumnRegular`](Interface.ColumnRegular.md).`order` | [src/types/interfaces.ts:230](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L230) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` | [src/types/interfaces.ts:210](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L210) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` | [src/types/interfaces.ts:206](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L206) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | Providers injected into the template. | - | [src/types/interfaces.ts:258](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L258) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` | [src/types/interfaces.ts:153](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L153) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` | [src/types/interfaces.ts:234](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L234) |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` | [src/types/interfaces.ts:157](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L157) |
| `sortable?` | `boolean` | Is column can be sorted, check cellCompare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` | [src/types/interfaces.ts:226](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L226) |

## Methods

### beforeSetup()?

```ts
optional beforeSetup(rgCol: ColumnRegular): void
```

Function called before column applied to the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md) |

#### Returns

`void`

#### Inherited from

[`ColumnRegular`](Interface.ColumnRegular.md).[`beforeSetup`](Interface.ColumnRegular.md#beforesetup)

#### Defined in

[src/types/interfaces.ts:242](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/types/interfaces.ts#L242)
