[RevoGrid Documentation v4.27.0](README.md) / RowResizeConfig

# Type Alias: RowResizeConfig

```ts
type RowResizeConfig: {
  fullRow: boolean;
  maxHeight: number;
  minHeight: number;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `fullRow` | `boolean` | Makes the resize edge available across data rows, not only row headers. | [src/plugins/row-resize/row-resize.types.ts:9](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/row-resize/row-resize.types.ts#L9) |
| `maxHeight` | `number` | Optional largest height a user can assign. | [src/plugins/row-resize/row-resize.types.ts:7](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/row-resize/row-resize.types.ts#L7) |
| `minHeight` | `number` | Smallest height a user can assign. Defaults to 20px. | [src/plugins/row-resize/row-resize.types.ts:5](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/row-resize/row-resize.types.ts#L5) |

## Defined in

[src/plugins/row-resize/row-resize.types.ts:3](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/row-resize/row-resize.types.ts#L3)
