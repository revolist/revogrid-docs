[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2094](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2094) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2098](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2098) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2102](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2102) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2106](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2106) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2110](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2110) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2114](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2114) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2118](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2118) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2122](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2122) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2126](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2126) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2130](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L2130) |
