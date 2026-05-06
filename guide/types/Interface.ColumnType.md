[RevoGrid Documentation v4.21.7](README.md) / ColumnType

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
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - | [src/types/interfaces.ts:204](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L204) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | - | [src/types/interfaces.ts:210](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L210) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - | [src/types/interfaces.ts:196](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L196) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - | [src/types/interfaces.ts:200](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L200) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:139](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L139) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:134](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L134) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | - | [src/types/interfaces.ts:192](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L192) |
| `maxSize?` | `number` | Represents the maximum column size. | - | [src/types/interfaces.ts:187](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L187) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - | [src/types/interfaces.ts:183](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L183) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>\> | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - | [src/types/interfaces.ts:173](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L173) |
| `size?` | `number` | Represents the default column size. | - | [src/types/interfaces.ts:177](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L177) |
