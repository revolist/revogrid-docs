[RevoGrid Documentation v4.14.5](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:278](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L278) |

## Defined in

[src/types/interfaces.ts:277](https://github.com/revolist/revogrid/blob/395fb64310e6654557393205ff295dbb2f4142c5/src/types/interfaces.ts#L277)
