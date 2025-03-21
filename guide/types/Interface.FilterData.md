[RevoGrid Documentation v4.14.3](README.md) / FilterData

# Interface: FilterData

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `hidden?` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:135](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/plugins/filter/filter.types.ts#L135) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:123](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/plugins/filter/filter.types.ts#L123) |
| `relation?` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:139](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/plugins/filter/filter.types.ts#L139) |
| `type` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | Filter type | [src/plugins/filter/filter.types.ts:127](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/plugins/filter/filter.types.ts#L127) |
| `value?` | `any` | Filter value | [src/plugins/filter/filter.types.ts:131](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/plugins/filter/filter.types.ts#L131) |
