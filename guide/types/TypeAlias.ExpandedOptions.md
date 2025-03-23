[RevoGrid Documentation v4.14.6](README.md) / ExpandedOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:99](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L99) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:108](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L108) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | - | [src/plugins/groupingRow/grouping.row.types.ts:95](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L95) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:104](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L104) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:94](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L94)
