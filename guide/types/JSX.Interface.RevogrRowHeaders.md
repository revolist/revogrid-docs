[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2095](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2095) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2099](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2099) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2103](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2103) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2107](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2107) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2111](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2111) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2115](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2115) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2119](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2119) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2123](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2123) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2127](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2127) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2131](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L2131) |
