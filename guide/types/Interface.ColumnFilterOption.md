[RevoGrid Documentation v4.27.1](README.md) / ColumnFilterOption

# Interface: ColumnFilterOption

Structured filter configuration for an individual column.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `default?` | `string` \| `false` | Preferred operator shown when the column has no filter conditions, or false to disable the draft. | [src/types/interfaces.ts:225](https://github.com/revolist/revogrid/blob/master/src/types/interfaces.ts#L225) |
| `type` | `string` \| `string`[] | Filter family, or ordered filter families, available to the column. | [src/types/interfaces.ts:220](https://github.com/revolist/revogrid/blob/master/src/types/interfaces.ts#L220) |
