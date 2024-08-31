[@revolist/revogrid](README.md) / HeaderRenderProps

# Type Alias: HeaderRenderProps

```ts
type HeaderRenderProps: {
  additionalData: any;
  canFilter: boolean;
  canResize: boolean;
  column: VirtualPositionItem;
  data: ColumnTemplateProp;
  range: RangeArea | null;
  onClick: void;
  onDblClick: void;
  onResize: void;
} & Partial<Pick<ResizeProps, "active">>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `additionalData` | `any` | [src/components/header/header-renderer.tsx:24](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L24) |
| `canFilter` | `boolean` | [src/components/header/header-renderer.tsx:28](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L28) |
| `canResize` | `boolean` | [src/components/header/header-renderer.tsx:27](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L27) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | [src/components/header/header-renderer.tsx:23](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L23) |
| `data` | [`ColumnTemplateProp`](Interface.ColumnTemplateProp.md) | [src/components/header/header-renderer.tsx:25](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L25) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/components/header/header-renderer.tsx:26](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L26) |
| `onClick` | `void` | [src/components/header/header-renderer.tsx:30](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L30) |
| `onDblClick` | `void` | [src/components/header/header-renderer.tsx:31](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L31) |
| `onResize` | `void` | [src/components/header/header-renderer.tsx:29](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L29) |

## Defined in

[src/components/header/header-renderer.tsx:22](https://github.com/revolist/revogrid/blob/b7bc91178b5b059b1432f9bb6ddbfab652d2c8cf/src/components/header/header-renderer.tsx#L22)