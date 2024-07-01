[@revolist/revogrid](README.md) / RowHeaders

# Interface: RowHeaders

ColumnRegular interface represents regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` | [src/types/interfaces.ts:205](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L205) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` | [src/types/interfaces.ts:177](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L177) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` | [src/types/interfaces.ts:169](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L169) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` | [src/types/interfaces.ts:173](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L173) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` | [src/types/interfaces.ts:116](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L116) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` | [src/types/interfaces.ts:111](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L111) |
| `columnType?` | `string` | Represents type defined in **Column Types** property through grid config. | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` | [src/types/interfaces.ts:225](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L225) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` | [src/types/interfaces.ts:165](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L165) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config @filter. | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` | [src/types/interfaces.ts:209](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L209) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` | [src/types/interfaces.ts:160](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L160) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` | [src/types/interfaces.ts:156](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L156) |
| `name?` | `any` | Column header text. | [`ColumnRegular`](Interface.ColumnRegular.md).`name` | [src/types/interfaces.ts:201](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L201) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | [`ColumnRegular`](Interface.ColumnRegular.md).`order` | [src/types/interfaces.ts:217](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L217) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` | [src/types/interfaces.ts:197](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L197) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` | [src/types/interfaces.ts:193](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L193) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` | [src/types/interfaces.ts:146](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L146) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` | [src/types/interfaces.ts:221](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L221) |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` | [src/types/interfaces.ts:150](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L150) |
| `sortable?` | `boolean` | Is column can be sorted, check **Cell Compare** function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` | [src/types/interfaces.ts:213](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L213) |

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

[src/types/interfaces.ts:229](https://github.com/revolist/revogrid/blob/d6473f6969ab6fd56cd4da079557c4c65f0572e2/src/types/interfaces.ts#L229)
