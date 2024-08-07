[@revolist/revogrid](README.md) / ColumnTemplateProp

# Interface: ColumnTemplateProp

Column template property.
Contains extended properties for column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` | [src/types/interfaces.ts:207](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L207) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` | [src/types/interfaces.ts:179](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L179) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` | [src/types/interfaces.ts:171](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L171) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` | [src/types/interfaces.ts:175](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L175) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` | [src/types/interfaces.ts:114](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L114) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` | [src/types/interfaces.ts:109](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L109) |
| `columnType?` | `string` | Represents type defined in **Column Types** property through grid config. | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` | [src/types/interfaces.ts:227](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L227) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` | [src/types/interfaces.ts:167](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L167) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config @filter. | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` | [src/types/interfaces.ts:211](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L211) |
| `index` | `number` | Index of the column, used for mapping value to cell from data source model/row. | - | [src/types/interfaces.ts:251](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L251) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` | [src/types/interfaces.ts:162](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L162) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` | [src/types/interfaces.ts:158](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L158) |
| `name?` | `any` | Column header text. | [`ColumnRegular`](Interface.ColumnRegular.md).`name` | [src/types/interfaces.ts:203](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L203) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | [`ColumnRegular`](Interface.ColumnRegular.md).`order` | [src/types/interfaces.ts:219](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L219) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` | [src/types/interfaces.ts:199](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L199) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` | [src/types/interfaces.ts:195](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L195) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | Providers injected into the template. | - | [src/types/interfaces.ts:247](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L247) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` | [src/types/interfaces.ts:148](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L148) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` | [src/types/interfaces.ts:223](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L223) |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` | [src/types/interfaces.ts:152](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L152) |
| `sortable?` | `boolean` | Is column can be sorted, check **Cell Compare** function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` | [src/types/interfaces.ts:215](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L215) |

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

[src/types/interfaces.ts:231](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/types/interfaces.ts#L231)
