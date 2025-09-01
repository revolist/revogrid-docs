[RevoGrid Documentation v4.17.0](README.md) / ExtraField

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

[src/plugins/filter/filter.types.ts:21](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/plugins/filter/filter.types.ts#L21)
