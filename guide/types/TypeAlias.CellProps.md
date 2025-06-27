[RevoGrid Documentation v4.15.8](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:279](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L279) |

## Defined in

[src/types/interfaces.ts:278](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L278)
