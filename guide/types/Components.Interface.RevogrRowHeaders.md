[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:631](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L631) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:635](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L635) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:639](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L639) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:643](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L643) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:647](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L647) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:651](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L651) |
| `rowClass` | `string` | Row class | [src/components.d.ts:655](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L655) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L659) |
