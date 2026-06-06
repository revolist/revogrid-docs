[RevoGrid Documentation v4.23.11](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:296](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/interfaces.ts#L296) |

## Defined in

[src/types/interfaces.ts:295](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/interfaces.ts#L295)
