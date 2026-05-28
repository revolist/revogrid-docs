[RevoGrid Documentation v4.23.4](README.md) / ExtraField

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

[src/plugins/filter/filter.types.ts:21](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/plugins/filter/filter.types.ts#L21)
