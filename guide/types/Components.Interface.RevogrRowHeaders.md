[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:607](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L607) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:611](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L611) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:615](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L615) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:619](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L619) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:623](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L623) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:627](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L627) |
| `rowClass` | `string` | Row class | [src/components.d.ts:631](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L631) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:635](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/components.d.ts#L635) |
