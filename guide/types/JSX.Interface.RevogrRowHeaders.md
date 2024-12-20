[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2186](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2186) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2190](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2190) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2194](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2194) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2198](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2198) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2202](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2202) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2206](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2206) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2210](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2210) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2214](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2214) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2218](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2218) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2222](https://github.com/revolist/revogrid/blob/13653d8ee505d63a363463d1b61354eec56320a1/src/components.d.ts#L2222) |
