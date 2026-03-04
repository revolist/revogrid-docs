[RevoGrid Documentation v4.20.4](README.md) / ExtraField

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

[src/plugins/filter/filter.types.ts:21](https://github.com/revolist/revogrid/blob/cfeb4fc76813e849e961384dd1448ab9e5490d6a/src/plugins/filter/filter.types.ts#L21)
