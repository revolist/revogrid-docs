[@revolist/revogrid](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnGroup`](Interface.ColumnGroup.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:119](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L119) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:114](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/types/interfaces.ts#L114) |
| `ids` | (`string` \| `number`)[] | - | - | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/store/dataSource/data.store.ts#L23) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/9117a91ea8e0927df97ffd7fc238d04b4ddfdd05/src/store/dataSource/data.store.ts#L20) |
