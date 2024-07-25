[@revolist/revogrid](README.md) / ColumnTemplateProp

# Interface: ColumnTemplateProp

Column template property.
Contains extended properties for column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` | [src/types/interfaces.ts:206](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L206) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` | [src/types/interfaces.ts:178](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L178) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` | [src/types/interfaces.ts:170](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L170) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` | [src/types/interfaces.ts:174](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L174) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L113) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` | [src/types/interfaces.ts:108](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L108) |
| `columnType?` | `string` | Represents type defined in **Column Types** property through grid config. | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` | [src/types/interfaces.ts:226](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L226) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` | [src/types/interfaces.ts:166](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L166) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config @filter. | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` | [src/types/interfaces.ts:210](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L210) |
| `index` | `number` | Index of the column, used for mapping value to cell from data source model/row. | - | [src/types/interfaces.ts:250](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L250) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` | [src/types/interfaces.ts:161](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L161) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` | [src/types/interfaces.ts:157](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L157) |
| `name?` | `any` | Column header text. | [`ColumnRegular`](Interface.ColumnRegular.md).`name` | [src/types/interfaces.ts:202](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L202) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | [`ColumnRegular`](Interface.ColumnRegular.md).`order` | [src/types/interfaces.ts:218](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L218) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` | [src/types/interfaces.ts:198](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L198) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` | [src/types/interfaces.ts:194](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L194) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | Providers injected into the template. | - | [src/types/interfaces.ts:246](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L246) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` | [src/types/interfaces.ts:147](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L147) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` | [src/types/interfaces.ts:222](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L222) |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` | [src/types/interfaces.ts:151](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L151) |
| `sortable?` | `boolean` | Is column can be sorted, check **Cell Compare** function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` | [src/types/interfaces.ts:214](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L214) |

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

[src/types/interfaces.ts:230](https://github.com/revolist/revogrid/blob/b6cbd022f95d7e046d6bc88abeaf01a3bc067577/src/types/interfaces.ts#L230)
