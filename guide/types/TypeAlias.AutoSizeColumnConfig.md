[@revolist/revogrid](README.md) / AutoSizeColumnConfig

# Type Alias: AutoSizeColumnConfig

```ts
type AutoSizeColumnConfig: {
  allColumns: boolean;
  letterBlockSize: number;
  mode: ColumnAutoSizeMode;
  preciseSize: boolean;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default | [src/plugins/column.auto-size.plugin.ts:45](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/plugins/column.auto-size.plugin.ts#L45) |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config | [src/plugins/column.auto-size.plugin.ts:50](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/plugins/column.auto-size.plugin.ts#L50) |
| `mode` | `ColumnAutoSizeMode` | - | [src/plugins/column.auto-size.plugin.ts:39](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/plugins/column.auto-size.plugin.ts#L39) |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize | [src/plugins/column.auto-size.plugin.ts:53](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/plugins/column.auto-size.plugin.ts#L53) |

## Defined in

[src/plugins/column.auto-size.plugin.ts:37](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/plugins/column.auto-size.plugin.ts#L37)
