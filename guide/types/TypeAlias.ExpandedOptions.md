[RevoGrid Documentation v4.14.11](README.md) / ExpandedOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:80](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L80) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:89](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L89) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. to set expanded: '{ 'a': true, 'a,b': true, 'a,b,c': true }' | [src/plugins/groupingRow/grouping.row.types.ts:75](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L75) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:85](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L85) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:71](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L71)
