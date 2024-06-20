[@revolist/revogrid](README.md) / RowHeaders

# Interface: RowHeaders

## Extends

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `autoSize?` | `boolean` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`autoSize` |
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | cell compare function | [`ColumnRegular`](Interface.ColumnRegular.md).`cellCompare` |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | cell properties | [`ColumnRegular`](Interface.ColumnRegular.md).`cellProperties` |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | cell inner template, now template is async | [`ColumnRegular`](Interface.ColumnRegular.md).`cellTemplate` |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | cell properties | [`ColumnRegular`](Interface.ColumnRegular.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | column inner template | [`ColumnRegular`](Interface.ColumnRegular.md).`columnTemplate` |
| `columnType?` | `string` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`columnType` |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>represents custom editor defined in</p><p>**Editors**</p><p>property</p> | [`ColumnRegular`](Interface.ColumnRegular.md).`editor` |
| `filter?` | `string` \| `boolean` \| `string`[] | - | [`ColumnRegular`](Interface.ColumnRegular.md).`filter` |
| `maxSize?` | `number` | max column size | [`ColumnRegular`](Interface.ColumnRegular.md).`maxSize` |
| `minSize?` | `number` | minimal column size this property can not be less than cell padding in order to keep performance on top and minimize dom elements number | [`ColumnRegular`](Interface.ColumnRegular.md).`minSize` |
| `name?` | `any` | - | [`ColumnRegular`](Interface.ColumnRegular.md).`name` |
| `order?` | [`Order`](Type.Order.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`order` |
| `pin?` | [`DimensionColPin`](Type.DimensionColPin.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`pin` |
| `prop` | [`ColumnProp`](Type.ColumnProp.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`prop` |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | is column or cell readonly | [`ColumnRegular`](Interface.ColumnRegular.md).`readonly` |
| `rowDrag?` | [`RowDrag`](Type.RowDrag.md) | - | [`ColumnRegular`](Interface.ColumnRegular.md).`rowDrag` |
| `size?` | `number` | default column size | [`ColumnRegular`](Interface.ColumnRegular.md).`size` |
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

[src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L119)
