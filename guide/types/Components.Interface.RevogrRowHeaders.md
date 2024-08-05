[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:585](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L585) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:589](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L589) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:593](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L593) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:597](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L597) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:601](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L601) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:605](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L605) |
| `rowClass` | `string` | Row class | [src/components.d.ts:609](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L609) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:613](https://github.com/revolist/revogrid/blob/645c5b44e05a187c8aab0cf802e5a080c331a78f/src/components.d.ts#L613) |
