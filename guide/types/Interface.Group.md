[@revolist/revogrid](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:118](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L118) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/types/interfaces.ts#L113) |
| `ids` | (`string` \| `number`)[] | - | - | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/store/dataSource/data.store.ts#L23) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/store/dataSource/data.store.ts#L20) |
