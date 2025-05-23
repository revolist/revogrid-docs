[RevoGrid Documentation v4.15.7](README.md) / ExpandedOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:105](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/groupingRow/grouping.row.types.ts#L105) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:114](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/groupingRow/grouping.row.types.ts#L114) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. to set expanded: '{ 'a': true, 'a,b': true, 'a,b,c': true }' | [src/plugins/groupingRow/grouping.row.types.ts:100](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/groupingRow/grouping.row.types.ts#L100) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:110](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/groupingRow/grouping.row.types.ts#L110) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:96](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/groupingRow/grouping.row.types.ts#L96)
