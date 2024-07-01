[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2007](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2007) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2011](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2011) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2015](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2015) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2019](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2019) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2023](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2023) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2027](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2027) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2031](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2031) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2035](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2035) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2039](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2039) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2043](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/components.d.ts#L2043) |
