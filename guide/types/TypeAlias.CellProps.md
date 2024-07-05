[@revolist/revogrid](README.md) / CellProps

# Type Alias: CellProps

```ts
type CellProps: {
[attr: string]: CellProp;   class: {} | string;
  style: {};
};
```

Additional properties applied to the cell.
Contains style object where key is CSS property and value is CSS property value.
Contains class object where key is CSS class and value is boolean flag indicating if class should be applied.
Contains additional properties for custom cell rendering.

## Index Signature

 \[`attr`: `string`\]: [`CellProp`](TypeAlias.CellProp.md)

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `class` | \{\} \| `string` | [src/types/interfaces.ts:268](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L268) |
| `style` | \{\} | [src/types/interfaces.ts:264](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L264) |

## Defined in

[src/types/interfaces.ts:262](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L262)
