[RevoGrid Documentation v4.12.5](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:152](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L152) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:158](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L158) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:154](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L154) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L153) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:156](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L156) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:115](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L115) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:117](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L117) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:119](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L119) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:147](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L147) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:148](https://github.com/revolist/revogrid/blob/c0c7fff7e44e26499aba20df7b49da7b6c71eb68/src/plugins/filter/filter.types.ts#L148) |
