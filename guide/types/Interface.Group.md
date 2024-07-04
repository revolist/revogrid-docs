[@revolist/revogrid](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:110](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/interfaces.ts#L110) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:105](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/interfaces.ts#L105) |
| `ids` | (`string` \| `number`)[] | - | - | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/store/dataSource/data.store.ts#L23) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/store/dataSource/data.store.ts#L20) |
