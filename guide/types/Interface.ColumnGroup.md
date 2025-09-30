[RevoGrid Documentation v4.17.3](README.md) / ColumnGroup

# Interface: ColumnGroup

Configuration for header inner template properties

## Extends

- [`Group`](Interface.Group.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\>)[] | - | [`Group`](Interface.Group.md).`children` | [src/store/dataSource/data.store.ts:22](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/store/dataSource/data.store.ts#L22) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`Group`](Interface.Group.md).`columnProperties` | [src/types/interfaces.ts:122](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L122) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`Group`](Interface.Group.md).`columnTemplate` | [src/types/interfaces.ts:117](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/interfaces.ts#L117) |
| `indexes` | `number`[] | - | [`Group`](Interface.Group.md).`indexes` | [src/store/dataSource/data.store.ts:24](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/store/dataSource/data.store.ts#L24) |
| `level` | `number` | - | - | [src/utils/column.utils.ts:18](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/utils/column.utils.ts#L18) |
| `name` | `string` | - | [`Group`](Interface.Group.md).`name` | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/store/dataSource/data.store.ts#L21) |
