[RevoGrid Documentation v4.21.1](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2331](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2331) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2335](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2335) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2339](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2339) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2343](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2343) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:2348](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2348) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2352](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2352) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2356](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2356) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2360](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2360) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2364](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2364) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2368](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L2368) |
