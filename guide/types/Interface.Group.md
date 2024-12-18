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
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | - | [src/store/dataSource/data.store.ts:22](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/store/dataSource/data.store.ts#L22) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:120](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/types/interfaces.ts#L120) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:115](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/types/interfaces.ts#L115) |
| `ids` | (`string` \| `number`)[] | - | - | [src/store/dataSource/data.store.ts:24](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/store/dataSource/data.store.ts#L24) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/store/dataSource/data.store.ts#L21) |
