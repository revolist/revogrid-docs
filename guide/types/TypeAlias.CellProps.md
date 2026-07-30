[RevoGrid Documentation v4.24.1](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:296](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/types/interfaces.ts#L296) |

## Defined in

[src/types/interfaces.ts:295](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/types/interfaces.ts#L295)
