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
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - | [src/types/interfaces.ts:184](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L184) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | - | [src/types/interfaces.ts:190](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L190) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - | [src/types/interfaces.ts:176](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L176) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - | [src/types/interfaces.ts:180](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L180) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L119) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:114](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L114) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in **Editors** property. Can be a string or an editor constructor function. | - | [src/types/interfaces.ts:172](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L172) |
| `maxSize?` | `number` | Represents the maximum column size. | - | [src/types/interfaces.ts:167](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L167) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - | [src/types/interfaces.ts:163](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L163) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - | [src/types/interfaces.ts:153](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L153) |
| `size?` | `number` | Represents the default column size. | - | [src/types/interfaces.ts:157](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/types/interfaces.ts#L157) |
