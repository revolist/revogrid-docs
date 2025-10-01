[RevoGrid Documentation v4.17.3](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:279](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L279) |

## Defined in

[src/types/interfaces.ts:278](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L278)
