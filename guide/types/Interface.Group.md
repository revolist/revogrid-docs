[RevoGrid Documentation v4.27.6](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Extended by

- [`ColumnGroup`](Interface.ColumnGroup.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\> \| [`ColumnGrouping`](Interface.ColumnGrouping.md)\<`any`\>)[] | - | - | [src/store/dataSource/data.store.ts:30](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/store/dataSource/data.store.ts#L30) |
| `columnProperties?` | [`ColPropertiesFunc`](TypeAlias.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` | [src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/types/interfaces.ts#L140) |
| `columnTemplate?` | [`ColumnTemplateFunc`](TypeAlias.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` | [src/types/interfaces.ts:135](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/types/interfaces.ts#L135) |
| `indexes` | `number`[] | - | - | [src/store/dataSource/data.store.ts:32](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/store/dataSource/data.store.ts#L32) |
| `name` | `string` | - | - | [src/store/dataSource/data.store.ts:29](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/store/dataSource/data.store.ts#L29) |
