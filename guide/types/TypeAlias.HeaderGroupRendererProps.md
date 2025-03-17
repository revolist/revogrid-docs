[RevoGrid Documentation v4.13.4](README.md) / HeaderGroupRendererProps

# Type Alias: HeaderGroupRendererProps

```ts
type HeaderGroupRendererProps: {
  additionalData: any;
  canResize: boolean;
  end: number;
  group: Group;
  providers: Providers<DimensionCols | "rowHeaders">;
  start: number;
  onResize: void;
} & Partial<Pick<ResizeProps, "active">>;
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `additionalData` | `any` | [src/components/header/header-group-renderer.tsx:13](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L13) |
| `canResize` | `boolean` | [src/components/header/header-group-renderer.tsx:14](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L14) |
| `end` | `number` | [src/components/header/header-group-renderer.tsx:10](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L10) |
| `group` | [`Group`](Interface.Group.md) | [src/components/header/header-group-renderer.tsx:11](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L11) |
| `providers` | [`Providers`](TypeAlias.Providers.md)\<[`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"`\> | [src/components/header/header-group-renderer.tsx:12](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L12) |
| `start` | `number` | [src/components/header/header-group-renderer.tsx:9](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L9) |
| `onResize` | `void` | [src/components/header/header-group-renderer.tsx:15](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L15) |

## Defined in

[src/components/header/header-group-renderer.tsx:8](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components/header/header-group-renderer.tsx#L8)
