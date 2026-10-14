[RevoGrid Documentation v4.28.3](README.md) / ExtraField

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

[src/plugins/filter/filter.types.ts:21](https://github.com/revolist/revogrid/blob/237f5d7f5379065aebb85b7a81753679e1b45365/src/plugins/filter/filter.types.ts#L21)
