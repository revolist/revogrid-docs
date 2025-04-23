[RevoGrid Documentation v4.15.6](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:643](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L643) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:647](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L647) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:651](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L651) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:655](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L655) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L659) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:663](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L663) |
| `rowClass` | `string` | Row class | [src/components.d.ts:667](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L667) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L671) |
