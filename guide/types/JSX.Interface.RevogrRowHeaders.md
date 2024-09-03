[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2113](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2113) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2117](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2117) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2121](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2121) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2125](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2125) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2129](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2129) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2133](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2133) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2137](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2137) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2141](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2141) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2145](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2145) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2149](https://github.com/revolist/revogrid/blob/97bf2134af01be0f2e3e5ac6768e7a2e7070a947/src/components.d.ts#L2149) |
