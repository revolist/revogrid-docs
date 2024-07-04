[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:583](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L583) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:587](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L587) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:591](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L591) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:595](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L595) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:599](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L599) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:603](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L603) |
| `rowClass` | `string` | Row class | [src/components.d.ts:607](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L607) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:611](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/components.d.ts#L611) |
