[RevoGrid Documentation v4.27.7](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:722](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L722) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:726](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L726) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:730](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L730) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:734](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L734) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:739](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L739) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:743](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L743) |
| `rowClass` | `string` | Row class | [src/components.d.ts:747](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L747) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:751](https://github.com/revolist/revogrid/blob/fde0274c8293051d5a170e61f40935c73690c8ce/src/components.d.ts#L751) |
