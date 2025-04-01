[RevoGrid Documentation v4.14.13](README.md) / CellProps

# Type Alias: CellProps

```ts
type CellProps: JSXBase.HTMLAttributes<HTMLDivElement> & {
[attr: string]: 
  | string
  | number
  | object
  | boolean
  | undefined;   className: JSXBase.HTMLAttributes<HTMLDivElement>["class"];
};
```

Additional properties applied to the cell.
Contains properties for custom cell rendering.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:278](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L278) |

## Defined in

[src/types/interfaces.ts:277](https://github.com/revolist/revogrid/blob/4eff1607ca8ee7d75f31750c713182488767268a/src/types/interfaces.ts#L277)
