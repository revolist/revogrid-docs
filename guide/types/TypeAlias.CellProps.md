[RevoGrid Documentation v4.29.1](README.md) / CellProps

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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:299](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/types/interfaces.ts#L299) |

## Defined in

[src/types/interfaces.ts:298](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/types/interfaces.ts#L298)
