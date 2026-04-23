[RevoGrid Documentation v4.21.4](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2358](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2358) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2362](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2362) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2366](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2366) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2370](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2370) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:2375](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2375) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2379](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2379) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2383](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2383) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2387](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2387) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2391](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2391) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2395](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L2395) |
