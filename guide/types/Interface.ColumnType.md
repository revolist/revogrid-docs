[@revolist/revogrid](README.md) / ColumnType

# Interface: ColumnType

Interface for regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnRegular`](Interface.ColumnRegular.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - | [src/types/interfaces.ts:171](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L171) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - | [src/types/interfaces.ts:163](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L163) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - | [src/types/interfaces.ts:167](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L167) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:110](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L110) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:105](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L105) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | - | [src/types/interfaces.ts:159](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L159) |
| `maxSize?` | `number` | Represents the maximum column size. | - | [src/types/interfaces.ts:154](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L154) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - | [src/types/interfaces.ts:150](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L150) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - | [src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L140) |
| `size?` | `number` | Represents the default column size. | - | [src/types/interfaces.ts:144](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L144) |
