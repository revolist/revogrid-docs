[RevoGrid Documentation v4.28.4](README.md) / ShowData

# Interface: ShowData

## Extends

- [`FilterItem`](Interface.FilterItem.md).`Omit`\<[`ColumnRegular`](Interface.ColumnRegular.md), `"filter"`\>

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `anchorY?` | `number` | Top viewport coordinate of the element the filter panel is anchored to. | - | [src/plugins/filter/filter.types.ts:271](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L271) |
| `autoCorrect?` | `boolean` | Auto correct position if it is out of document bounds | - | [src/plugins/filter/filter.types.ts:275](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L275) |
| `extraBottomContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:283](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L283) |
| `extraContent?` | (`data`: [`ShowData`](Interface.ShowData.md)) => `any` | - | - | [src/plugins/filter/filter.types.ts:281](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L281) |
| `filterItems?` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | - | - | [src/plugins/filter/filter.types.ts:277](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L277) |
| `filterTypes?` | `Record`\<`string`, `string`[]\> | - | - | [src/plugins/filter/filter.types.ts:276](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L276) |
| `hideDefaultFilters?` | `boolean` | - | - | [src/plugins/filter/filter.types.ts:279](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L279) |
| `prop?` | [`ColumnProp`](TypeAlias.ColumnProp.md) | - | [`FilterItem`](Interface.FilterItem.md).`prop` | [src/plugins/filter/filter.types.ts:178](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L178) |
| `type?` | \| `"none"` \| `"empty"` \| `"notEmpty"` \| `"eq"` \| `"notEq"` \| `"begins"` \| `"contains"` \| `"notContains"` \| `"eqN"` \| `"neqN"` \| `"gt"` \| `"gte"` \| `"lt"` \| `"lte"` | - | [`FilterItem`](Interface.FilterItem.md).`type` | [src/plugins/filter/filter.types.ts:180](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L180) |
| `value?` | `any` | - | [`FilterItem`](Interface.FilterItem.md).`value` | [src/plugins/filter/filter.types.ts:182](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L182) |
| `x` | `number` | - | - | [src/plugins/filter/filter.types.ts:266](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L266) |
| `y` | `number` | - | - | [src/plugins/filter/filter.types.ts:267](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L267) |
