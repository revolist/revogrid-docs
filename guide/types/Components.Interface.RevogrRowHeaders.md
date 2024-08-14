[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:587](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L587) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:591](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L591) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:595](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L595) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:599](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L599) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:603](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L603) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:607](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L607) |
| `rowClass` | `string` | Row class | [src/components.d.ts:611](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L611) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:615](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L615) |
