[@revolist/revogrid](README.md) / Group

# Interface: Group

Configuration for header inner template properties

## Extends

- [`ColumnProperties`](Interface.ColumnProperties.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `children` | ([`ColumnRegular`](Interface.ColumnRegular.md) \| [`ColumnGrouping`](Type.ColumnGrouping.md))[] | - | - |
| `columnProperties?` | [`ColPropertiesFunc`](Type.ColPropertiesFunc.md) | Header Cell properties Custom function/component to render header properties | [`ColumnProperties`](Interface.ColumnProperties.md).`columnProperties` |
| `columnTemplate?` | [`ColumnTemplateFunc`](Type.ColumnTemplateFunc.md) | Header inner template Function/component to render custom header content | [`ColumnProperties`](Interface.ColumnProperties.md).`columnTemplate` |
| `ids` | (`string` \| `number`)[] | - | - |
| `name` | `string` | - | - |
