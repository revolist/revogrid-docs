[@revolist/revogrid](README.md) / ShowData

# Type Alias: ShowData

```ts
type ShowData: {
  autoCorrect: boolean;
  extraContent: (data: ShowData) => any;
  filterItems: MultiFilterItem;
  filterTypes: Record<string, string[]>;
  hideDefaultFilters: boolean;
  x: number;
  y: number;
} & FilterItem & Omit<ColumnRegular, "filter">;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `autoCorrect` | `boolean` | Auto correct position if it is out of document bounds | [src/plugins/filter/filter.types.ts:151](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L151) |
| `extraContent` | (`data`: [`ShowData`](TypeAlias.ShowData.md)) => `any` | - | [src/plugins/filter/filter.types.ts:157](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L157) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L153) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | - | [src/plugins/filter/filter.types.ts:152](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L152) |
| `hideDefaultFilters` | `boolean` | - | [src/plugins/filter/filter.types.ts:155](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L155) |
| `x` | `number` | - | [src/plugins/filter/filter.types.ts:146](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L146) |
| `y` | `number` | - | [src/plugins/filter/filter.types.ts:147](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L147) |

## Defined in

[src/plugins/filter/filter.types.ts:145](https://github.com/revolist/revogrid/blob/78d14b7c443343ec06c8d385824462d784f2615f/src/plugins/filter/filter.types.ts#L145)
