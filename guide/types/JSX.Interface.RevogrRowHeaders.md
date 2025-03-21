[RevoGrid Documentation v4.14.3](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2202](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2202) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2206](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2206) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2210](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2210) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2214](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2214) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2218](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2218) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2222](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2222) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2226](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2226) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2230](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2230) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2234](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2234) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2238](https://github.com/revolist/revogrid/blob/4d3feb8340f534dd1ff6941b4d5b83d4d4e2474c/src/components.d.ts#L2238) |
