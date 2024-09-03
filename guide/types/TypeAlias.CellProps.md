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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:276](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/types/interfaces.ts#L276) |

## Defined in

[src/types/interfaces.ts:275](https://github.com/revolist/revogrid/blob/2d9504ecff6b493d547df979b2259be6b639351c/src/types/interfaces.ts#L275)
