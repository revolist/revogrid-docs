[@revolist/revogrid](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:276](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L276) |

## Defined in

[src/types/interfaces.ts:275](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/interfaces.ts#L275)
