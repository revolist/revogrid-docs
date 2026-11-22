[RevoGrid Documentation v4.31.8](README.md) / [Components](Namespace.Components.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `accessible` | `boolean` | Enable accessible row header semantics. **Default** `false` | [src/components.d.ts:741](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L741) |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:745](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L745) |
| `dataPorts` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:749](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L749) |
| `headerProp` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:753](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L753) |
| `height` | `number` | Header height to setup row headers | [src/components.d.ts:757](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L757) |
| `jobsBeforeRender` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:762](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L762) |
| `resize` | `boolean` | Enable resize | [src/components.d.ts:766](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L766) |
| `rowClass` | `string` | Row class | [src/components.d.ts:770](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L770) |
| `rowHeaderColumn` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:774](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L774) |
| `treegridOwnership?` | [`TreegridOwnership`](README.md#treegridownership) | Accessibility ownership of the row-header data panes. | [src/components.d.ts:778](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/components.d.ts#L778) |
