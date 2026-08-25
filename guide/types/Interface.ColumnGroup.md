[RevoGrid Documentation v4.26.2](README.md) / ColumnGroup

# Interface: ColumnGroup

Configuration for header inner template properties

## Extends

- [`Group`](Interface.Group.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\>)[] | - | [`Group`](Interface.Group.md).`children` | [src/store/dataSource/data.store.ts:30](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/store/dataSource/data.store.ts#L30) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`Group`](Interface.Group.md).`columnProperties` | [src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/types/interfaces.ts#L140) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`Group`](Interface.Group.md).`columnTemplate` | [src/types/interfaces.ts:135](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/types/interfaces.ts#L135) |
| `indexes` | `number`[] | - | [`Group`](Interface.Group.md).`indexes` | [src/store/dataSource/data.store.ts:32](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/store/dataSource/data.store.ts#L32) |
| `level` | `number` | - | - | [src/utils/column.utils.ts:18](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/utils/column.utils.ts#L18) |
| `name` | `string` | - | [`Group`](Interface.Group.md).`name` | [src/store/dataSource/data.store.ts:29](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/store/dataSource/data.store.ts#L29) |
