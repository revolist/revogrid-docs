[RevoGrid Documentation v4.15.2](README.md) / ColumnRegular

# Interface: ColumnRegular

ColumnRegular interface represents regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnType`](Interface.ColumnType.md)

## Extended by

- [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md)
- [`RowHeaders`](Interface.RowHeaders.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | - | [src/types/interfaces.ts:221](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L221) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnType`](Interface.ColumnType.md).`cellCompare` | [src/types/interfaces.ts:187](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L187) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | [`ColumnType`](Interface.ColumnType.md).`cellParser` | [src/types/interfaces.ts:193](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L193) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnType`](Interface.ColumnType.md).`cellProperties` | [src/types/interfaces.ts:179](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L179) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` | [src/types/interfaces.ts:183](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L183) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` | [src/types/interfaces.ts:122](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L122) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` | [src/types/interfaces.ts:117](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L117) |
| `columnType?` | `string` | Represents type defined in columnTypes property through grid config. | - | [src/types/interfaces.ts:241](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L241) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | [`ColumnType`](Interface.ColumnType.md).`editor` | [src/types/interfaces.ts:175](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L175) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config filter. | - | [src/types/interfaces.ts:225](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L225) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnType`](Interface.ColumnType.md).`maxSize` | [src/types/interfaces.ts:170](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L170) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnType`](Interface.ColumnType.md).`minSize` | [src/types/interfaces.ts:166](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L166) |
| `name?` | `any` | Column header text. | - | [src/types/interfaces.ts:217](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L217) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | - | [src/types/interfaces.ts:233](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L233) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | - | [src/types/interfaces.ts:213](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L213) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | - | [src/types/interfaces.ts:209](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L209) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnType`](Interface.ColumnType.md).`readonly` | [src/types/interfaces.ts:156](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L156) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | - | [src/types/interfaces.ts:237](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L237) |
| `size?` | `number` | Represents the default column size. | [`ColumnType`](Interface.ColumnType.md).`size` | [src/types/interfaces.ts:160](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L160) |
| `sortable?` | `boolean` | Is column can be sorted, check cellCompare function for custom sorting. | - | [src/types/interfaces.ts:229](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L229) |

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

#### Defined in

[src/types/interfaces.ts:245](https://github.com/revolist/revogrid/blob/30cfedca97f5b42c948bd2668fa87c350d2411bd/src/types/interfaces.ts#L245)
