[RevoGrid Documentation v4.14.3](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:635](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L635) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:639](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L639) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:643](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L643) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:647](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L647) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:651](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L651) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:655](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L655) |
| `rowClass` | `string` | Row class | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L659) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:663](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L663) |
