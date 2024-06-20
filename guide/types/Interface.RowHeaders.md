[@revolist/revogrid](README.md) / RowHeaders

# Interface: RowHeaders

Interface for regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `autoSize?` | `boolean` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` |
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` |
| `columnType?` | `string` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>Represents a custom editor defined in</p><p>**Editors**</p><p>property. Can be a string or an editor constructor function.</p> | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` |
| `filter?` | `string` \| `boolean` \| `string`[] | - | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` |
| `name?` | `any` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`name` |
| `order?` | [`Order`](Type.Order.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`order` |
| `pin?` | [`DimensionColPin`](Type.DimensionColPin.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` |
| `prop` | [`ColumnProp`](Type.ColumnProp.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` |
| `rowDrag?` | [`RowDrag`](Type.RowDrag.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` |
| `size?` | `number` | Represents the default column size. | [`ColumnRegular`](Interface.ColumnRegular.md).`size` |
| `sortable?` | `boolean` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`sortable` |

## Methods

### beforeSetup()?

```ts
optional beforeSetup(rgCol: ColumnRegular): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md) |

#### Returns

`void`

#### Inherited from

[`ColumnRegular`](Interface.ColumnRegular.md).[`beforeSetup`](Interface.ColumnRegular.md#beforesetup)

#### Source

[src/types/interfaces.ts:153](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L153)
