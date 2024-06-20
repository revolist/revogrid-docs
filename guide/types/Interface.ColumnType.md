[@revolist/revogrid](README.md) / ColumnType

# Interface: ColumnType

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | cell compare function | - |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | cell properties | - |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | cell inner template, now template is async | - |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | cell properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | column inner template | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>represents custom editor defined in</p><p>**Editors**</p><p>property</p> | - |
| `maxSize?` | `number` | max column size | - |
| `minSize?` | `number` | minimal column size this property can not be less than cell padding in order to keep performance on top and minimize dom elements number | - |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | is column or cell readonly | - |
| `size?` | `number` | default column size | - |
