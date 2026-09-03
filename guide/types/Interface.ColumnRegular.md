[RevoGrid Documentation v4.26.1](README.md) / ColumnRegular

# Interface: ColumnRegular\<P, TModel\>

ColumnRegular interface represents regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnType`](Interface.ColumnType.md)\<`TModel`\>

## Extended by

- [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md)
- [`RowHeaders`](Interface.RowHeaders.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` *extends* [`ColumnProp`](TypeAlias.ColumnProp.md) | [`ColumnProp`](TypeAlias.ColumnProp.md) |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Indexable

 \[`key`: `string`\]: `any`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | - | [src/types/interfaces.ts:239](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L239) |
| `blankSemantics?` | [`BlankSemantics`](Interface.BlankSemantics.md) | Partial column override for the grid-level blank filtering policy. | - | [src/types/interfaces.ts:245](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L245) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md)\<`TModel`\> | Represents the cell compare function for custom sorting. | [`ColumnType`](Interface.ColumnType.md).`cellCompare` | [src/types/interfaces.ts:205](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L205) |
| `cellParser?` | (`model`: `TModel`, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), `TModel`\>) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | [`ColumnType`](Interface.ColumnType.md).`cellParser` | [src/types/interfaces.ts:211](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L211) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md)\<`TModel`\> | Represents cell properties for custom styling, classes, and events. | [`ColumnType`](Interface.ColumnType.md).`cellProperties` | [src/types/interfaces.ts:197](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L197) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md)\<`TModel`\> | Represents the cell template for custom rendering. | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` | [src/types/interfaces.ts:201](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L201) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` | [src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L140) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` | [src/types/interfaces.ts:135](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L135) |
| `columnType?` | `string` | Represents type defined in columnTypes property through grid config. | - | [src/types/interfaces.ts:261](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L261) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | [`ColumnType`](Interface.ColumnType.md).`editor` | [src/types/interfaces.ts:193](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L193) |
| `filter?` | `string` \| `boolean` \| `string`[] \| [`ColumnFilterOption`](Interface.ColumnFilterOption.md) | Filter. Require filter plugin to be installed and activated through grid config filter. | - | [src/types/interfaces.ts:254](https://github.com/revolist/revogrid/blob/master/src/types/interfaces.ts#L254) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnType`](Interface.ColumnType.md).`maxSize` | [src/types/interfaces.ts:188](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L188) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnType`](Interface.ColumnType.md).`minSize` | [src/types/interfaces.ts:184](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L184) |
| `name?` | `any` | Column header text. | - | [src/types/interfaces.ts:235](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L235) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | - | [src/types/interfaces.ts:253](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L253) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | - | [src/types/interfaces.ts:231](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L231) |
| `prop` | `P` | Column prop used for mapping value to cell from data source model/row, used for indexing. | - | [src/types/interfaces.ts:227](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L227) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md)\<`TModel`, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\> | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnType`](Interface.ColumnType.md).`readonly` | [src/types/interfaces.ts:174](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L174) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md)\<`TModel`, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\> | Is cell in column or individual can be dragged. | - | [src/types/interfaces.ts:257](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L257) |
| `size?` | `number` | Represents the default column size. | [`ColumnType`](Interface.ColumnType.md).`size` | [src/types/interfaces.ts:178](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L178) |
| `sortable?` | `boolean` | Is column can be sorted, check cellCompare function for custom sorting. | - | [src/types/interfaces.ts:249](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L249) |

## Methods

### beforeSetup()?

```ts
optional beforeSetup(rgCol: ColumnRegular<P, TModel>): void
```

Function called before column applied to the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md)\<`P`, `TModel`\> |

#### Returns

`void`

#### Defined in

[src/types/interfaces.ts:265](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/types/interfaces.ts#L265)
