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
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:118](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L118) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/types/interfaces.ts#L113) |
| `ids` | (`string` \| `number`)[] | - | - | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/store/dataSource/data.store.ts#L23) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/7dbd661cfbca0ebdb4daac15bcf7a7879e23703b/src/store/dataSource/data.store.ts#L20) |
