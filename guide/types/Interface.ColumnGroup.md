[@revolist/revogrid](README.md) / ColumnGroup

# Interface: ColumnGroup

Configuration for header inner template properties

## Extends

- [`Group`](Interface.Group.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](TypeAlias.ColumnGrouping.md))[] | - | [`Group`](Interface.Group.md).`children` | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/store/dataSource/data.store.ts#L21) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`Group`](Interface.Group.md).`columnProperties` | [src/types/interfaces.ts:118](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L118) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`Group`](Interface.Group.md).`columnTemplate` | [src/types/interfaces.ts:113](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/types/interfaces.ts#L113) |
| `ids` | (`string` \| `number`)[] | - | [`Group`](Interface.Group.md).`ids` | [src/store/dataSource/data.store.ts:23](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/store/dataSource/data.store.ts#L23) |
| `level` | `number` | - | - | [src/utils/column.utils.ts:17](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/utils/column.utils.ts#L17) |
| `name` | `string` | - | [`Group`](Interface.Group.md).`name` | [src/store/dataSource/data.store.ts:20](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/store/dataSource/data.store.ts#L20) |
