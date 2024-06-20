[@revolist/revogrid](README.md) / ResizeProps

# Type alias: ResizeProps

```ts
type ResizeProps: {
  active: (
     | "r"
     | "rb"
     | "b"
     | "lb"
     | "l"
     | "lt"
     | "t"
     | "rt")[];
  disableAttributes: ("l" | "t" | "w" | "h")[];
  fitParent: boolean;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  onDoubleClick: void;
  onResize: void;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `active` | (
  \| `"r"`
  \| `"rb"`
  \| `"b"`
  \| `"lb"`
  \| `"l"`
  \| `"lt"`
  \| `"t"`
  \| `"rt"`)[] |
| `disableAttributes` | (`"l"` \| `"t"` \| `"w"` \| `"h"`)[] |
| `fitParent` | `boolean` |
| `maxHeight` | `number` |
| `maxWidth` | `number` |
| `minHeight` | `number` |
| `minWidth` | `number` |
| `onDoubleClick` | `void` |
| `onResize` | `void` |

## Source

[src/services/resizable.directive.tsx:1](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/services/resizable.directive.tsx#L1)
