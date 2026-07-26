[RevoGrid Documentation v4.23.23](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2373](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2373) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2377](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2377) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2381](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2381) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2385](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2385) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. **Default** `[]` | [src/components.d.ts:2390](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2390) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2394](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2394) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2398](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2398) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2402](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2402) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2406](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2406) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2410](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/components.d.ts#L2410) |
