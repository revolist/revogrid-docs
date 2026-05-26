[RevoGrid Documentation v4.23.0](README.md) / ExtraField

# Type Alias: ExtraField

```ts
type ExtraField: "input" | "datepicker" | (h: HyperFunc<VNode>, config: {
  filter: FilterItem;
  index: number;
  onFocus: () => void;
  onInput: (value: any) => void;
  placeholder: string;
  prop: ColumnProp;
  value: any;
 }) => VNode | VNode[];
```

## Defined in

[src/plugins/filter/filter.types.ts:21](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/plugins/filter/filter.types.ts#L21)
