[RevoGrid Documentation v4.31.8](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `anchorY?` | `number` | Top viewport coordinate of the element the filter panel is anchored to. | - | [src/plugins/filter/filter.types.ts:273](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L273) |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:277](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L277) |
| `extraBottomContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:285](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L285) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:283](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L283) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:279](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L279) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:278](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L278) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:281](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L281) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:180](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L180) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:182](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L182) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:184](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L184) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:268](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L268) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:269](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L269) |
