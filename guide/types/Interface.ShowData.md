[RevoGrid Documentation v4.14.4](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:161](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L161) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:167](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L167) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:163](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L163) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:162](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L162) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:165](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L165) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:124](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L124) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:126](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L126) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:128](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L128) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:156](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L156) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:157](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L157) |
