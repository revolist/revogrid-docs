[RevoGrid Documentation v4.27.0](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `anchorY?` | `number` | Top viewport coordinate of the element the filter panel is anchored to. | - | [src/plugins/filter/filter.types.ts:215](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L215) |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:219](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L219) |
| `extraBottomContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:227](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L227) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:225](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L225) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:221](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L221) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:220](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L220) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:223](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L223) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:178](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L178) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:180](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L180) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:182](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L182) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:210](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L210) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:211](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L211) |
