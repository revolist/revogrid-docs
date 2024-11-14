[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:702](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L702) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:707](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L707) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:708](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L708) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:712](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L712) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:716](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L716) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:720](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L720) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:721](https://github.com/revolist/revogrid/blob/11c1e89888ac9588cc703e312811b4cdaf67f0fb/src/components.d.ts#L721) |
