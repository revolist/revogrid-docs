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
| `class` | \{\} \| `string` | [src/types/interfaces.ts:274](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L274) |
| `style` | \{\} | [src/types/interfaces.ts:270](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L270) |

## Defined in

[src/types/interfaces.ts:268](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/types/interfaces.ts#L268)
