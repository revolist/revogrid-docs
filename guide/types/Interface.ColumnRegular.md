[@revolist/revogrid](README.md) / ColumnRegular

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
| `autoSize?` | `boolean` | Column size would be changed based on space left. | - | [src/types/interfaces.ts:211](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L211) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnType`](Interface.ColumnType.md).`cellCompare` | [src/types/interfaces.ts:183](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L183) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnType`](Interface.ColumnType.md).`cellProperties` | [src/types/interfaces.ts:175](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L175) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` | [src/types/interfaces.ts:179](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L179) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` | [src/types/interfaces.ts:118](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L118) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L113) |
| `columnType?` | `string` | Represents type defined in **Column Types** property through grid config. | - | [src/types/interfaces.ts:231](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L231) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | [`ColumnType`](Interface.ColumnType.md).`editor` | [src/types/interfaces.ts:171](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L171) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config @filter. | - | [src/types/interfaces.ts:215](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L215) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnType`](Interface.ColumnType.md).`maxSize` | [src/types/interfaces.ts:166](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L166) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnType`](Interface.ColumnType.md).`minSize` | [src/types/interfaces.ts:162](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L162) |
| `name?` | `any` | Column header text. | - | [src/types/interfaces.ts:207](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L207) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | - | [src/types/interfaces.ts:223](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L223) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | - | [src/types/interfaces.ts:203](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L203) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | - | [src/types/interfaces.ts:199](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L199) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnType`](Interface.ColumnType.md).`readonly` | [src/types/interfaces.ts:152](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L152) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | - | [src/types/interfaces.ts:227](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L227) |
| `size?` | `number` | Represents the default column size. | [`ColumnType`](Interface.ColumnType.md).`size` | [src/types/interfaces.ts:156](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L156) |
| `sortable?` | `boolean` | Is column can be sorted, check **Cell Compare** function for custom sorting. | - | [src/types/interfaces.ts:219](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L219) |

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

[src/types/interfaces.ts:235](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/types/interfaces.ts#L235)
