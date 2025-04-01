[RevoGrid Documentation v4.14.11](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:719](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L719) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:724](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L724) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:725](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L725) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:729](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L729) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:733](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L733) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:737](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L737) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:738](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/components.d.ts#L738) |
