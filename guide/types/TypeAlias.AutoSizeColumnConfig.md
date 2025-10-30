[RevoGrid Documentation v4.19.3](README.md) / AutoSizeColumnConfig

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
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default | [src/plugins/column.auto-size.plugin.ts:42](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/column.auto-size.plugin.ts#L42) |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config | [src/plugins/column.auto-size.plugin.ts:47](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/column.auto-size.plugin.ts#L47) |
| `mode` | [`ColumnAutoSizeMode`](Enumeration.ColumnAutoSizeMode.md) | - | [src/plugins/column.auto-size.plugin.ts:36](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/column.auto-size.plugin.ts#L36) |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize | [src/plugins/column.auto-size.plugin.ts:50](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/column.auto-size.plugin.ts#L50) |

## Defined in

[src/plugins/column.auto-size.plugin.ts:34](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/column.auto-size.plugin.ts#L34)
