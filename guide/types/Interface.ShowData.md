[RevoGrid Documentation v4.23.16](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `anchorY?` | `number` | Top viewport coordinate of the element the filter panel is anchored to. | - | [src/plugins/filter/filter.types.ts:169](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L169) |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:173](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L173) |
| `extraBottomContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:181](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L181) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:179](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L179) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:175](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L175) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:174](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L174) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:177](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L177) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:132](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L132) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:134](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L134) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:136](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L136) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:164](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L164) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:165](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L165) |
