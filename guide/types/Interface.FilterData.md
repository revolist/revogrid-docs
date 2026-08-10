[RevoGrid Documentation v4.25.1](README.md) / FilterData

# Interface: FilterData

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `hidden?` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:158](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/plugins/filter/filter.types.ts#L158) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:146](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/plugins/filter/filter.types.ts#L146) |
| `relation?` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:162](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/plugins/filter/filter.types.ts#L162) |
| `type` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | Filter type | [src/plugins/filter/filter.types.ts:150](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/plugins/filter/filter.types.ts#L150) |
| `value?` | `any` | Filter value | [src/plugins/filter/filter.types.ts:154](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/plugins/filter/filter.types.ts#L154) |
