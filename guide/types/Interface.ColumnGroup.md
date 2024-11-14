[@revolist/revogrid](README.md) / ColumnGroup

# Interface: ColumnGroup

Configuration for header inner template properties

## Extends

- [`Group`](Interface.Group.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | [`Group`](Interface.Group.md).`children` | [src/store/dataSource/data.store.ts:22](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/store/dataSource/data.store.ts#L22) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`Group`](Interface.Group.md).`columnProperties` | [src/types/interfaces.ts:120](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/interfaces.ts#L120) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`Group`](Interface.Group.md).`columnTemplate` | [src/types/interfaces.ts:115](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/types/interfaces.ts#L115) |
| `ids` | (`string` \| `number`)[] | - | [`Group`](Interface.Group.md).`ids` | [src/store/dataSource/data.store.ts:24](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/store/dataSource/data.store.ts#L24) |
| `level` | `number` | - | - | [src/utils/column.utils.ts:18](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/utils/column.utils.ts#L18) |
| `name` | `string` | - | [`Group`](Interface.Group.md).`name` | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/store/dataSource/data.store.ts#L21) |
