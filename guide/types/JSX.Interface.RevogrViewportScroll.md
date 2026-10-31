[RevoGrid Documentation v4.29.1](README.md) / [JSX](Namespace.JSX.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:2490](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2490) |
| `contentHeight?` | `number` | Height of inner content **Default** `0` | [src/components.d.ts:2495](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2495) |
| `contentWidth?` | `number` | Width of inner content **Default** `0` | [src/components.d.ts:2500](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2500) |
| `noHorizontalScrollTransfer?` | `boolean` | **Default** `false` | [src/components.d.ts:2504](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2504) |
| `onResizeviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortResizeEvent`](TypeAlias.ViewPortResizeEvent.md)\>) => `void` | Viewport resize | [src/components.d.ts:2508](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2508) |
| `onScrollchange?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<\{ `hasScroll`: `boolean`; `type`: [`DimensionType`](TypeAlias.DimensionType.md); \}\>) => `void` | Triggered on scroll change, can be used to get information about scroll visibility | [src/components.d.ts:2512](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2512) |
| `onScrollviewport?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Before scroll event | [src/components.d.ts:2519](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2519) |
| `onScrollviewportsilent?` | (`event`: [`RevogrViewportScrollCustomEvent`](Interface.RevogrViewportScrollCustomEvent.md)\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>) => `void` | Silently scroll to coordinate Made to align negative coordinates for mobile devices | [src/components.d.ts:2523](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2523) |
| `rowHeader?` | `boolean` | Enable row header | [src/components.d.ts:2527](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/components.d.ts#L2527) |
