[@revolist/revogrid](README.md) / ColumnGroup

# Interface: ColumnGroup

Configuration for header inner template properties

## Extends

- [`Group`](Interface.Group.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | [`Group`](Interface.Group.md).`children` | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`Group`](Interface.Group.md).`columnProperties` | [src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L119) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`Group`](Interface.Group.md).`columnTemplate` | [src/types/interfaces.ts:114](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/types/interfaces.ts#L114) |
| `ids` | (`string` \| `number`)[] | - | [`Group`](Interface.Group.md).`ids` | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/store/dataSource/data.store.ts#L23) |
| `level` | `number` | - | - | [src/utils/column.utils.ts:18](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/utils/column.utils.ts#L18) |
| `name` | `string` | - | [`Group`](Interface.Group.md).`name` | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/8213d73a71275549be4832f9fff99c2dcf82fa2e/src/store/dataSource/data.store.ts#L20) |
