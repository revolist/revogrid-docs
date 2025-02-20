[RevoGrid Documentation v4.12.5](README.md) / ColumnType

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
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | - | [src/types/interfaces.ts:185](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L185) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | - | [src/types/interfaces.ts:191](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L191) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | - | [src/types/interfaces.ts:177](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L177) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | - | [src/types/interfaces.ts:181](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L181) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:120](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L120) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:115](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L115) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | - | [src/types/interfaces.ts:173](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L173) |
| `maxSize?` | `number` | Represents the maximum column size. | - | [src/types/interfaces.ts:168](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L168) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | - | [src/types/interfaces.ts:164](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L164) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | - | [src/types/interfaces.ts:154](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L154) |
| `size?` | `number` | Represents the default column size. | - | [src/types/interfaces.ts:158](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/types/interfaces.ts#L158) |
