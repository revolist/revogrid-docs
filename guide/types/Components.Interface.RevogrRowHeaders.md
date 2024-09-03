[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:602](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L602) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:606](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L606) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:610](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L610) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:614](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L614) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:618](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L618) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:622](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L622) |
| `rowClass` | `string` | Row class | [src/components.d.ts:626](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L626) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:630](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L630) |
