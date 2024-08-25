[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2042](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2042) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2046](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2046) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2050](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2050) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2054](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2054) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2058](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2058) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2062](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2062) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2066](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2066) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2070](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2070) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2074](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2074) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2078](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/components.d.ts#L2078) |
