[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2175](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2175) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2179](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2179) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2183](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2183) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2187](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2187) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2191](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2191) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2195](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2195) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2199](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2199) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2203](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2203) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2207](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2207) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2211](https://github.com/revolist/revogrid/blob/4b01754704358a4c5d2c901c2c25a863bb4fded2/src/components.d.ts#L2211) |
