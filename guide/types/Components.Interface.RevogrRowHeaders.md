[RevoGrid Documentation v4.17.0](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:695](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L695) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:699](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L699) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:703](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L703) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:707](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L707) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:712](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L712) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:716](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L716) |
| `rowClass` | `string` | Row class | [src/components.d.ts:720](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L720) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:724](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/components.d.ts#L724) |
