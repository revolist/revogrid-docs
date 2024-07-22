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
| `class` | \{\} \| `string` | [src/types/interfaces.ts:273](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L273) |
| `style` | \{\} | [src/types/interfaces.ts:269](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L269) |

## Defined in

[src/types/interfaces.ts:267](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L267)
