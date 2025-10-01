[RevoGrid Documentation v4.17.3](README.md) / FilterData

# Interface: FilterData

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `hidden?` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:149](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/filter/filter.types.ts#L149) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:137](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/filter/filter.types.ts#L137) |
| `relation?` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/filter/filter.types.ts#L153) |
| `type` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | Filter type | [src/plugins/filter/filter.types.ts:141](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/filter/filter.types.ts#L141) |
| `value?` | `any` | Filter value | [src/plugins/filter/filter.types.ts:145](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/filter/filter.types.ts#L145) |
