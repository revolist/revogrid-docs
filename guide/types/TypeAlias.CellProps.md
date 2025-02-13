[RevoGrid Documentation v4.12.1](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:277](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L277) |

## Defined in

[src/types/interfaces.ts:276](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L276)
