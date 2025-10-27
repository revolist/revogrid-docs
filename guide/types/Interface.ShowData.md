[RevoGrid Documentation v4.19.1](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:166](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L166) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:172](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L172) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:168](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L168) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:167](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L167) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:170](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L170) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:129](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L129) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:131](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L131) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:133](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L133) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:161](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L161) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:162](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/plugins/filter/filter.types.ts#L162) |
