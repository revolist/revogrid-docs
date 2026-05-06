[RevoGrid Documentation v4.21.7](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnGroup`](Interface.ColumnGroup.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\> \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\>)[] | - | - | [src/store/dataSource/data.store.ts:22](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/store/dataSource/data.store.ts#L22) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:139](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L139) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:134](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L134) |
| `indexes` | `number`[] | - | - | [src/store/dataSource/data.store.ts:24](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/store/dataSource/data.store.ts#L24) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:21](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/store/dataSource/data.store.ts#L21) |
