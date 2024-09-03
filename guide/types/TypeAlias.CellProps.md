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
| `className` | `JSXBase.HTMLAttributes`\<`HTMLDivElement`\>\[`"class"`\] | [src/types/interfaces.ts:276](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/types/interfaces.ts#L276) |

## Defined in

[src/types/interfaces.ts:275](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/types/interfaces.ts#L275)
