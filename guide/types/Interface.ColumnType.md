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
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - | [src/types/interfaces.ts:183](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L183) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - | [src/types/interfaces.ts:175](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L175) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - | [src/types/interfaces.ts:179](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L179) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:118](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L118) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L113) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | - | [src/types/interfaces.ts:171](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L171) |
| `maxSize?` | `number` | Represents the maximum column size. | - | [src/types/interfaces.ts:166](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L166) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - | [src/types/interfaces.ts:162](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L162) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - | [src/types/interfaces.ts:152](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L152) |
| `size?` | `number` | Represents the default column size. | - | [src/types/interfaces.ts:156](https://github.com/revolist/revogrid/blob/7441a116e7c14801fe05f009e2206ea7b70630f5/src/types/interfaces.ts#L156) |
