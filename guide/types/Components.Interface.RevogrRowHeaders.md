[RevoGrid Documentation v4.11.21](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:630](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L630) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:634](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L634) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:638](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L638) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:642](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L642) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:646](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L646) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:650](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L650) |
| `rowClass` | `string` | Row class | [src/components.d.ts:654](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L654) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:658](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/components.d.ts#L658) |
