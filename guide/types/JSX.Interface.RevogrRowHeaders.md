[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2048](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2048) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2052](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2052) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2056](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2056) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2060](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2060) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2064](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2064) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2068](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2068) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2072](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2072) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2076](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2076) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2080](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2080) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2084](https://github.com/revolist/revogrid/blob/1d7f63e049242097564b7da6ec33fe3875543951/src/components.d.ts#L2084) |
