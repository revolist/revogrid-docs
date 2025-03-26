[RevoGrid Documentation v4.14.8](README.md) / ColumnRegular

# Interface: ColumnRegular

ColumnRegular interface represents regular column definition.
Regular column can be any column that is not a grouping column.

## Extends

- [`ColumnType`](Interface.ColumnType.md)

## Extended by

- [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md)
- [`RowHeaders`](Interface.RowHeaders.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoSize?` | `boolean` | Column size would be changed based on space left. | - | [src/types/interfaces.ts:220](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L220) |
| `cellCompare?` | [`CellCompareFunc`](TypeAlias.CellCompareFunc.md) | Represents the cell compare function for custom sorting. | [`ColumnType`](Interface.ColumnType.md).`cellCompare` | [src/types/interfaces.ts:186](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L186) |
| `cellParser?` | (`model`: [`DataType`](TypeAlias.DataType.md)\<`any`\>, `column`: [`ColumnRegular`](Interface.ColumnRegular.md)) => `any` | Represents the cell value parse function for custom parsing. Currently only used for filtering. | [`ColumnType`](Interface.ColumnType.md).`cellParser` | [src/types/interfaces.ts:192](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L192) |
| `cellProperties?` | [`PropertiesFunc`](TypeAlias.PropertiesFunc.md) | Represents cell properties for custom styling, classes, and events. | [`ColumnType`](Interface.ColumnType.md).`cellProperties` | [src/types/interfaces.ts:178](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L178) |
| `cellTemplate?` | [`CellTemplate`](Interface.CellTemplate.md) | Represents the cell template for custom rendering. | [`ColumnType`](Interface.ColumnType.md).`cellTemplate` | [src/types/interfaces.ts:182](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L182) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnType`](Interface.ColumnType.md).`columnProperties` | [src/types/interfaces.ts:121](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L121) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnType`](Interface.ColumnType.md).`columnTemplate` | [src/types/interfaces.ts:116](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L116) |
| `columnType?` | `string` | Represents type defined in columnTypes property through grid config. | - | [src/types/interfaces.ts:240](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L240) |
| `editor?` | `string` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Represents a custom editor defined in editors property. Can be a string or an editor constructor function. | [`ColumnType`](Interface.ColumnType.md).`editor` | [src/types/interfaces.ts:174](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L174) |
| `filter?` | `string` \| `boolean` \| `string`[] | Filter. Require filter plugin to be installed and activated through grid config filter. | - | [src/types/interfaces.ts:224](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L224) |
| `maxSize?` | `number` | Represents the maximum column size. | [`ColumnType`](Interface.ColumnType.md).`maxSize` | [src/types/interfaces.ts:169](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L169) |
| `minSize?` | `number` | Represents the minimal column size. This property cannot be less than cell padding in order to keep performance on top and minimize DOM elements number. | [`ColumnType`](Interface.ColumnType.md).`minSize` | [src/types/interfaces.ts:165](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L165) |
| `name?` | `any` | Column header text. | - | [src/types/interfaces.ts:216](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L216) |
| `order?` | [`Order`](TypeAlias.Order.md) | Sort order. | - | [src/types/interfaces.ts:232](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L232) |
| `pin?` | [`DimensionColPin`](TypeAlias.DimensionColPin.md) | Column pin 'colPinStart'|'colPinEnd'. | - | [src/types/interfaces.ts:212](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L212) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | Column prop used for mapping value to cell from data source model/row, used for indexing. | - | [src/types/interfaces.ts:208](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L208) |
| `readonly?` | [`ReadOnlyFormat`](TypeAlias.ReadOnlyFormat.md) | Represents whether the column or cell is read-only. Can be a boolean or a function that returns a boolean. The function receives column data as a parameter. | [`ColumnType`](Interface.ColumnType.md).`readonly` | [src/types/interfaces.ts:155](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L155) |
| `rowDrag?` | [`RowDrag`](TypeAlias.RowDrag.md) | Is cell in column or individual can be dragged. | - | [src/types/interfaces.ts:236](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L236) |
| `size?` | `number` | Represents the default column size. | [`ColumnType`](Interface.ColumnType.md).`size` | [src/types/interfaces.ts:159](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L159) |
| `sortable?` | `boolean` | Is column can be sorted, check cellCompare function for custom sorting. | - | [src/types/interfaces.ts:228](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L228) |

## Methods

### beforeSetup()?

```ts
optional beforeSetup(rgCol: ColumnRegular): void
```

Function called before column applied to the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rgCol` | [`ColumnRegular`](Interface.ColumnRegular.md) |

#### Returns

`void`

#### Defined in

[src/types/interfaces.ts:244](https://github.com/revolist/revogrid/blob/e548e2f67dd1ccbf7f1e03dfbe23431ad8065184/src/types/interfaces.ts#L244)
