[RevoGrid Documentation v4.15.4](README.md) / FilterData

# Interface: FilterData

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `hidden?` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:149](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/plugins/filter/filter.types.ts#L149) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:137](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/plugins/filter/filter.types.ts#L137) |
| `relation?` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/plugins/filter/filter.types.ts#L153) |
| `type` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | Filter type | [src/plugins/filter/filter.types.ts:141](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/plugins/filter/filter.types.ts#L141) |
| `value?` | `any` | Filter value | [src/plugins/filter/filter.types.ts:145](https://github.com/revolist/revogrid/blob/1645225511bdf49c1a62fd26a91ac5b7e1558fd9/src/plugins/filter/filter.types.ts#L145) |
