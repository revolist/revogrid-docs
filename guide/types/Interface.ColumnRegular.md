[@revolist/revogrid](README.md) / ColumnRegular

# Interface: ColumnRegular

Interface for regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnType`](Interface.ColumnType.md)

## Extended by

- [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md)
- [`RowHeaders`](Interface.RowHeaders.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `autoSize?` | `boolean` | - | - |
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnType`](Interface.ColumnType.md).`cellCompare` |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnType`](Interface.ColumnType.md).`cellProperties` |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` |
| `columnType?` | `string` | - | - |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>Represents a custom editor defined in</p><p>**Editors**</p><p>property. Can be a string or an editor constructor function.</p> | [`ColumnType`](Interface.ColumnType.md).`editor` |
| `filter?` | `string` \| `boolean` \| `string`[] | - | - |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnType`](Interface.ColumnType.md).`maxSize` |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnType`](Interface.ColumnType.md).`minSize` |
| `name?` | `any` | - | - |
| `order?` | [`Order`](Type.Order.md) | - | - |
| `pin?` | [`DimensionColPin`](Type.DimensionColPin.md) | - | - |
| `prop` | [`ColumnProp`](Type.ColumnProp.md) | - | - |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnType`](Interface.ColumnType.md).`readonly` |
| `rowDrag?` | [`RowDrag`](Type.RowDrag.md) | - | - |
| `size?` | `number` | Represents the default column size. | [`ColumnType`](Interface.ColumnType.md).`size` |
| `sortable?` | `boolean` | - | - |

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

#### Source

[src/types/interfaces.ts:153](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L153)
