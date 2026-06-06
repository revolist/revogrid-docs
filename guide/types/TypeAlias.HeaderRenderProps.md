[RevoGrid Documentation v4.23.12](README.md) / HeaderRenderProps

# Type Alias: HeaderRenderProps

```ts
type HeaderRenderProps: {
  additionalData: any;
  canFilter: boolean;
  canResize: boolean;
  column: VirtualPositionItem;
  data: ColumnTemplateProp;
  range: RangeArea | null;
  renderOffset: number;
  onClick: void;
  onDblClick: void;
  onResize: void;
} & Partial<Pick<ResizeProps, "active">>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `additionalData` | `any` | [src/components/header/header-renderer.tsx:24](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L24) |
| `canFilter` | `boolean` | [src/components/header/header-renderer.tsx:28](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L28) |
| `canResize` | `boolean` | [src/components/header/header-renderer.tsx:27](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L27) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | [src/components/header/header-renderer.tsx:23](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L23) |
| `data` | [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md) | [src/components/header/header-renderer.tsx:25](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L25) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/components/header/header-renderer.tsx:26](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L26) |
| `renderOffset` | `number` | [src/components/header/header-renderer.tsx:29](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L29) |
| `onClick` | `void` | [src/components/header/header-renderer.tsx:31](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L31) |
| `onDblClick` | `void` | [src/components/header/header-renderer.tsx:32](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L32) |
| `onResize` | `void` | [src/components/header/header-renderer.tsx:30](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L30) |

## Defined in

[src/components/header/header-renderer.tsx:22](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/components/header/header-renderer.tsx#L22)
