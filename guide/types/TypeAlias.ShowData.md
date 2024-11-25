[@revolist/revogrid](README.md) / ShowData

# Type Alias: ShowData

```ts
type ShowData: {
  autoCorrect: boolean;
  extraContent: (data: ShowData) => any;
  filterItems: MultiFilterItem;
  filterTypes: Record<string, string[]>;
  x: number;
  y: number;
} & FilterItem & Omit<ColumnRegular, "filter">;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `autoCorrect` | `boolean` | Auto correct position if it is out of document bounds | [src/plugins/filter/filter.types.ts:143](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L143) |
| `extraContent` | (`data`: [`ShowData`](TypeAlias.ShowData.md)) => `any` | - | [src/plugins/filter/filter.types.ts:147](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L147) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/plugins/filter/filter.types.ts:145](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L145) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | - | [src/plugins/filter/filter.types.ts:144](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L144) |
| `x` | `number` | - | [src/plugins/filter/filter.types.ts:138](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L138) |
| `y` | `number` | - | [src/plugins/filter/filter.types.ts:139](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L139) |

## Defined in

[src/plugins/filter/filter.types.ts:137](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/plugins/filter/filter.types.ts#L137)
