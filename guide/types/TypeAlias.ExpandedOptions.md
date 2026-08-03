[RevoGrid Documentation v4.24.2](README.md) / ExpandedOptions

# Type Alias: ExpandedOptions

```ts
type ExpandedOptions: {
  emptyGroupValue: any;
  expandedAll: boolean;
  groupCellTemplate: GroupCellTemplateFunc;
  groupLabelTemplate: GroupLabelTemplateFunc;
  prevExpanded: Record<string, boolean>;
  getGroupValue: any;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `emptyGroupValue` | `any` | Replacement group value for `null` and `undefined` keys. Used by the default group value resolver. **Default** `''` | [src/plugins/groupingRow/grouping.row.types.ts:160](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L160) |
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:149](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L149) |
| `groupCellTemplate` | [`GroupCellTemplateFunc`](TypeAlias.GroupCellTemplateFunc.md) | Custom template for virtualized cells in synthetic group rows. | [src/plugins/groupingRow/grouping.row.types.ts:168](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L168) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:164](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L164) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. to set expanded: '{ 'a': true, 'a,b': true, 'a,b,c': true }' | [src/plugins/groupingRow/grouping.row.types.ts:144](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L144) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:154](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L154) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:140](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/plugins/groupingRow/grouping.row.types.ts#L140)
