[@revolist/revogrid](README.md) / AutoSizeColumnConfig

# Type alias: AutoSizeColumnConfig

```ts
type AutoSizeColumnConfig: {
  allColumns: boolean;
  letterBlockSize: number;
  mode: ColumnAutoSizeMode;
  preciseSize: boolean;
};
```

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config |
| `mode` | `ColumnAutoSizeMode` | - |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize |

## Source

[src/plugins/column.auto-size.plugin.ts:28](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/plugins/column.auto-size.plugin.ts#L28)
