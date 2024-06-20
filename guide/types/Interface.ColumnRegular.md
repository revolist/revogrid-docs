[@revolist/revogrid](README.md) / ColumnRegular

# Interface: ColumnRegular

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
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | cell compare function | [`ColumnType`](Interface.ColumnType.md).`cellCompare` |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | cell properties | [`ColumnType`](Interface.ColumnType.md).`cellProperties` |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | cell inner template, now template is async | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | cell properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | column inner template | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` |
| `columnType?` | `string` | - | - |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>represents custom editor defined in</p><p>**Editors**</p><p>property</p> | [`ColumnType`](Interface.ColumnType.md).`editor` |
| `filter?` | `string` \| `boolean` \| `string`[] | - | - |
| `maxSize?` | `number` | max column size | [`ColumnType`](Interface.ColumnType.md).`maxSize` |
| `minSize?` | `number` | minimal column size this property can not be less than cell padding in order to keep performance on top and minimize dom elements number | [`ColumnType`](Interface.ColumnType.md).`minSize` |
| `name?` | `any` | - | - |
| `order?` | [`Order`](Type.Order.md) | - | - |
| `pin?` | [`DimensionColPin`](Type.DimensionColPin.md) | - | - |
| `prop` | [`ColumnProp`](Type.ColumnProp.md) | - | - |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | is column or cell readonly | [`ColumnType`](Interface.ColumnType.md).`readonly` |
| `rowDrag?` | [`RowDrag`](Type.RowDrag.md) | - | - |
| `size?` | `number` | default column size | [`ColumnType`](Interface.ColumnType.md).`size` |
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

[src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L119)
