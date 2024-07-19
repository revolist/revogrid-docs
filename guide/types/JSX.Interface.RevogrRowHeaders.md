[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrRowHeaders

# Interface: RevogrRowHeaders

Row headers component
Visible on the left side of the table

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:2012](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2012) |
| `dataPorts?` | [`ViewportData`](TypeAlias.ViewportData.md)[] | Viewport data | [src/components.d.ts:2016](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2016) |
| `headerProp?` | `Record`\<`string`, `any`\> | Header props | [src/components.d.ts:2020](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2020) |
| `height?` | `number` | Header height to setup row headers | [src/components.d.ts:2024](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2024) |
| `jobsBeforeRender?` | `Promise`\<`any`\>[] | Prevent rendering until job is done. Can be used for initial rendering performance improvement. When several plugins require initial rendering this will prevent double initial rendering. | [src/components.d.ts:2028](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2028) |
| `onRef?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ElementScroll`](Interface.ElementScroll.md)\>) => `void` | Register element to scroll | [src/components.d.ts:2032](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2032) |
| `onScrollview?` | (`event`: [`RevogrRowHeadersCustomEvent`](Interface.RevogrRowHeadersCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Scroll viewport | [src/components.d.ts:2036](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2036) |
| `resize?` | `boolean` | Enable resize | [src/components.d.ts:2040](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2040) |
| `rowClass?` | `string` | Row class | [src/components.d.ts:2044](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2044) |
| `rowHeaderColumn?` | [`RowHeaders`](Interface.RowHeaders.md) | Row header column | [src/components.d.ts:2048](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L2048) |
