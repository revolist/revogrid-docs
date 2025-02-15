[RevoGrid Documentation v4.12.2](README.md) / ExpandedOptions

# Type Alias: ExpandedOptions

```ts
type ExpandedOptions: {
  expandedAll: boolean;
  groupLabelTemplate: GroupLabelTemplateFunc;
  prevExpanded: Record<string, boolean>;
  getGroupValue: any;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:74](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L74) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:83](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L83) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | - | [src/plugins/groupingRow/grouping.row.types.ts:70](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L70) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:79](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L79) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:69](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L69)
