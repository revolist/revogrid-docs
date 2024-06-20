[@revolist/revogrid](README.md) / ColumnType

# Interface: ColumnType

Interface for regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `cellCompare?` | [`CellCompareFunc`](Type.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - |
| `cellProperties?` | [`PropertiesFunc`](Type.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` |
| `editor?` | `string` \| [`EditorCtr`](Type.EditorCtr.md) | <p>Represents a custom editor defined in</p><p>**Editors**</p><p>property. Can be a string or an editor constructor function.</p> | - |
| `maxSize?` | `number` | Represents the maximum column size. | - |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - |
| `readonly?` | [`ReadOnlyFormat`](Type.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - |
| `size?` | `number` | Represents the default column size. | - |
